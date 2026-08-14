import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { SocialLinks } from '../../shared/social-links/social-links';
import { SITE } from '../../data/site';
import { SeoService } from '../../core/seo';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, SocialLinks, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly site = SITE;
  protected readonly officeList = SITE.offices.join(' / ');

  constructor() {
    inject(SeoService).apply({
      title: $localize`:Page title:Contact | PL Real Estate`,
      description: $localize`:Meta description:Neem contact op met Patrick Landuyt — Nazarethstraat 6, De Pinte. Bereikbaar 24/24, 7/7.`,
    });
  }
}
