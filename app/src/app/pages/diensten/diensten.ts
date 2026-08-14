import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../data/services';
import { SeoService } from '../../core/seo';

@Component({
  selector: 'app-diensten',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './diensten.html',
  styleUrl: './diensten.scss',
})
export class Diensten {
  protected readonly services = SERVICES;

  /** Panel ids currently expanded. The original allows several open at once. */
  private readonly expanded = signal(new Set<string>());

  constructor() {
    inject(SeoService).apply({
      title: $localize`:Page title:Diensten | PL Real Estate`,
      description: $localize`:Meta description:Verkoop, discrete verkoop, erkende schattingen, aankoopbegeleiding, share deals en projectontwikkeling — waar expertise, ervaring en resultaat steeds garant staan.`,
    });
  }

  protected isOpen(id: string): boolean {
    return this.expanded().has(id);
  }

  protected toggle(id: string): void {
    this.expanded.update((open) => {
      const next = new Set(open);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
}
