import {
  afterNextRender,
  Component,
  ElementRef,
  HostListener,
  inject,
  Injector,
  signal,
  viewChild,
} from '@angular/core';
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
  private readonly injector = inject(Injector);

  private readonly burger = viewChild<ElementRef<HTMLButtonElement>>('burger');
  private readonly nav = viewChild<ElementRef<HTMLElement>>('nav');

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
    const opening = !this.menuOpen();
    this.menuOpen.set(opening);
    this.languageOpen.set(false);

    // Move into the panel on open so keyboard users land inside it rather than
    // continuing past it, and hand focus back to the button on close so they
    // do not get dropped at the top of the document.
    //
    // afterNextRender rather than a microtask: the panel is hidden with
    // `display: none` until the open class lands, and a microtask runs before
    // that, so every link still counts as invisible and nothing gets focused.
    afterNextRender(
      () => (opening ? this.focusFirstInNav() : this.burger()?.nativeElement.focus()),
      { injector: this.injector },
    );
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  private focusable(): HTMLElement[] {
    const root = this.nav()?.nativeElement;
    if (!root) return [];
    return [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')].filter(
      (el) => el.offsetParent !== null,
    );
  }

  private focusFirstInNav(): void {
    this.focusable()[0]?.focus();
  }

  /**
   * Keeps Tab inside the open panel. Without this the sequence runs on into the
   * page behind, which is still visible under the overlay but not reachable in
   * any meaningful order.
   */
  @HostListener('keydown', ['$event'])
  protected onTab(event: Event): void {
    if (!(event instanceof KeyboardEvent) || event.key !== 'Tab') return;
    if (!this.menuOpen()) return;

    const items = this.focusable();
    if (items.length === 0) return;

    const first = items[0];
    const last = items[items.length - 1];
    const active = this.host.nativeElement.ownerDocument.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.languageOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    const wasMenuOpen = this.menuOpen();

    this.languageOpen.set(false);
    this.menuOpen.set(false);

    if (wasMenuOpen) this.burger()?.nativeElement.focus();
  }
}
