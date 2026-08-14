import { Component } from '@angular/core';
import { SITE } from '../../data/site';

/** The LinkedIn / Luxevastgoed pair that appears on /over, /contact and the CTA band. */
@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  protected readonly site = SITE;
}
