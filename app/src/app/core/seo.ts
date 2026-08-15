import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LOCALES, LocaleService } from './locale';
import { SITE } from '../data/site';

export const SITE_ORIGIN = 'https://pl-realestate.com';

/** 1200x630 JPEG built by tools/generate-og-image.mjs. */
const OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;
const OG_IMAGE_WIDTH = '1200';
const OG_IMAGE_HEIGHT = '630';

export interface PageSeo {
  readonly title: string;
  readonly description: string;
}

/**
 * Sets title, description, canonical, hreflang, Open Graph/Twitter cards and
 * the structured-data block. Runs during prerendering, so every emitted HTML
 * file carries its own tags statically - no client-side SEO.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly locale = inject(LocaleService);

  apply({ title, description }: PageSeo): void {
    const path = this.locale.currentPath();
    const url = `${SITE_ORIGIN}${this.locale.urlFor(this.locale.current, path)}`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: this.locale.current.code });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:site_name', content: SITE.wordmark });

    // Without an image, a shared link renders as a bare grey box.
    this.meta.updateTag({ property: 'og:image', content: OG_IMAGE });
    this.meta.updateTag({ property: 'og:image:width', content: OG_IMAGE_WIDTH });
    this.meta.updateTag({ property: 'og:image:height', content: OG_IMAGE_HEIGHT });
    this.meta.updateTag({ property: 'og:image:alt', content: SITE.wordmark });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: OG_IMAGE });

    this.setLink('canonical', url);

    // Every locale points at every other locale, including itself - Google
    // treats a non-reciprocal set as untrusted and ignores it.
    for (const locale of LOCALES) {
      this.setLink('alternate', `${SITE_ORIGIN}${this.locale.urlFor(locale, path)}`, locale.code);
    }
    this.setLink(
      'alternate',
      `${SITE_ORIGIN}${this.locale.urlFor(LOCALES[0], path)}`,
      'x-default',
    );

    this.setStructuredData(url);
  }

  /**
   * Squarespace emitted WebSite + LocalBusiness; dropping it would have been the
   * one place the rebuild regressed against the original. RealEstateAgent is the
   * specific subtype of LocalBusiness, which is what earns the address, phone and
   * opening hours in a local result.
   */
  private setStructuredData(url: string): void {
    const graph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_ORIGIN}/#website`,
          url: SITE_ORIGIN,
          name: SITE.wordmark,
          inLanguage: this.locale.current.code,
          publisher: { '@id': `${SITE_ORIGIN}/#agent` },
        },
        {
          '@type': 'RealEstateAgent',
          '@id': `${SITE_ORIGIN}/#agent`,
          name: SITE.name,
          alternateName: SITE.wordmark,
          url: SITE_ORIGIN,
          image: OG_IMAGE,
          email: SITE.email,
          telephone: SITE.phone,
          // The BIV registration is the licence a Belgian estate agent trades
          // under, and is the closest thing to an official identifier.
          identifier: `BIV ${SITE.legal.bivNumber}`,
          vatID: SITE.legal.vat,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            postalCode: SITE.address.postalCode,
            addressCountry: 'BE',
          },
          areaServed: SITE.offices.map((name) => ({ '@type': 'Place', name })),
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
          sameAs: [SITE.social.linkedin, SITE.social.luxevastgoed],
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          about: { '@id': `${SITE_ORIGIN}/#agent` },
          inLanguage: this.locale.current.code,
        },
      ],
    };

    const id = 'structured-data';
    let script = this.doc.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.doc.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }
    // Not executable, so `script-src 'self'` does not apply to it.
    script.textContent = JSON.stringify(graph);
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]`;

    let link = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', rel);
      if (hreflang) link.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
