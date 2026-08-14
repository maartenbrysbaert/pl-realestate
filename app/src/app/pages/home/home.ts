import { Component, inject } from '@angular/core';
import { ProjectGallery } from '../../shared/project-gallery/project-gallery';
import { HOME_PROJECTS } from '../../data/projects';
import { SeoService } from '../../core/seo';

@Component({
  selector: 'app-home',
  imports: [ProjectGallery],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly projects = HOME_PROJECTS;

  constructor() {
    inject(SeoService).apply({
      title: $localize`:Page title:PL Real Estate by Patrick Landuyt`,
      description: $localize`:Meta description:Bemiddeling zoals het moet. Discrete begeleiding van vastgoedtransacties in België, met meer dan 500 afgeronde opdrachten.`,
    });
  }
}
