import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocaleService } from '../../core/locale';
import { SITE } from '../../data/site';

interface NavItem {
  readonly path: string;
  readonly label: string;
}

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly site = SITE;
  protected readonly locale = inject(LocaleService);
  private readonly host = inject(ElementRef<HTMLElement>);

  protected readonly navItems: readonly NavItem[] = [
    { path: '/over', label: $localize`:Main navigation:Over` },
    { path: '/diensten', label: $localize`:Main navigation:Diensten` },
    { path: '/referenties', label: $localize`:Main navigation:Referenties` },
    { path: '/contact', label: $localize`:Main navigation:Contact` },
  ];

  protected readonly languageOpen = signal(false);
  protected readonly menuOpen = signal(false);

  protected toggleLanguage(): void {
    this.languageOpen.update((open) => !open);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.languageOpen.set(false);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.languageOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.languageOpen.set(false);
    this.menuOpen.set(false);
  }
}
