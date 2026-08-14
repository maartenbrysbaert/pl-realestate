import { inject, Injectable, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';

export interface LocaleOption {
  /** BCP 47 tag, also the `hreflang` value. */
  readonly code: string;
  /** URL prefix this locale is deployed under. Empty for the source locale. */
  readonly subPath: string;
  /** Endonym, as the original language picker shows it. */
  readonly label: string;
}

/** Must stay in sync with the `i18n` block in angular.json. */
export const LOCALES: readonly LocaleOption[] = [
  { code: 'nl-BE', subPath: '', label: 'Nederlands' },
  { code: 'fr-BE', subPath: 'fr', label: 'Français' },
  { code: 'en-GB', subPath: 'en', label: 'English' },
];

export const DEFAULT_LOCALE = LOCALES[0];

/**
 * Each locale is a separate prerendered build, so switching languages is a full
 * document load rather than a route change. This resolves the equivalent URL in
 * a sibling locale - the path slugs are identical across locales by design, so
 * it is a prefix swap and nothing more.
 */
@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly router = inject(Router);
  private readonly localeId = inject(LOCALE_ID);

  readonly current: LocaleOption =
    LOCALES.find((l) => l.code === this.localeId) ?? DEFAULT_LOCALE;

  readonly all = LOCALES;

  /** Route path without the locale prefix, e.g. `/over`. Always leading-slash. */
  currentPath(): string {
    // router.url is already relative to <base href>, so it excludes the prefix.
    const [path] = this.router.url.split(/[?#]/);
    return path === '/' ? '' : path;
  }

  /**
   * Absolute, origin-relative href for `path` in `locale`.
   *
   * Directory-style URLs need the trailing slash: the homepage of a prefixed
   * locale lives at `fr/index.html`, and a request for `/fr` with no slash does
   * not match the `/fr/*` rules in netlify.toml, so it fell through to the 404.
   */
  urlFor(locale: LocaleOption, path = this.currentPath()): string {
    const prefix = locale.subPath ? `/${locale.subPath}` : '';
    return path ? `${prefix}${path}` : `${prefix}/`;
  }
}
