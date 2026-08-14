import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LOCALES, LocaleService } from './locale';

export const SITE_ORIGIN = 'https://pl-realestate.com';

export interface PageSeo {
  readonly title: string;
  readonly description: string;
}

/**
 * Sets title, description, canonical and the reciprocal hreflang set. Runs
 * during prerendering, so every emitted HTML file carries its own tags
 * statically - no client-side SEO.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly locale = inject(LocaleService);

  apply({ title, description }: PageSeo): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: this.locale.current.code });

    const path = this.locale.currentPath();
    this.setLink('canonical', `${SITE_ORIGIN}${this.locale.urlFor(this.locale.current, path)}`);

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
