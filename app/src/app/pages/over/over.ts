import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CtaBand } from '../../shared/cta-band/cta-band';
import { SeoService } from '../../core/seo';

@Component({
  selector: 'app-over',
  imports: [NgOptimizedImage, CtaBand],
  templateUrl: './over.html',
  styleUrl: './over.scss',
})
export class Over {
  constructor() {
    inject(SeoService).apply({
      title: $localize`:Page title:Over Patrick Landuyt | PL Real Estate`,
      description: $localize`:Meta description:Grondlegger in het discreet begeleiden van vastgoedtransacties. Sinds 2009 bemiddeling zoals het moet, voor een vééleisend cliënteel.`,
    });
  }
}
