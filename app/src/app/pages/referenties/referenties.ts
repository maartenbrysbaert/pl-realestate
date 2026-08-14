import { Component, inject } from '@angular/core';
import { ProjectGallery } from '../../shared/project-gallery/project-gallery';
import { PROJECTS } from '../../data/projects';
import { SeoService } from '../../core/seo';

@Component({
  selector: 'app-referenties',
  imports: [ProjectGallery],
  templateUrl: './referenties.html',
  styleUrl: './referenties.scss',
})
export class Referenties {
  protected readonly projects = PROJECTS;

  constructor() {
    inject(SeoService).apply({
      title: $localize`:Page title:Referenties | PL Real Estate`,
      description: $localize`:Meta description:Een representatieve greep uit de +/- 500 begeleide transacties, verkopen en adviesopdrachten van PL Real Estate.`,
    });
  }
}
