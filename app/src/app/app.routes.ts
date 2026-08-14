import { Routes } from '@angular/router';

/**
 * Paths mirror the original Squarespace sitemap exactly so existing inbound
 * links and search rankings survive the migration. Slugs are intentionally NOT
 * translated - each locale serves these same paths under its own prefix
 * (/over, /fr/over, /en/over).
 */
/**
 * `footer: true` renders the address/contact block at the bottom of the page.
 * The original only does this on the homepage and the terms page; the other
 * four end on their own closing section instead.
 */
export interface RouteData {
  readonly footer?: boolean;
}

export const routes: Routes = [
  {
    path: '',
    data: { footer: true } satisfies RouteData,
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'over',
    loadComponent: () => import('./pages/over/over').then((m) => m.Over),
  },
  {
    path: 'diensten',
    loadComponent: () => import('./pages/diensten/diensten').then((m) => m.Diensten),
  },
  {
    path: 'referenties',
    loadComponent: () => import('./pages/referenties/referenties').then((m) => m.Referenties),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'algemene-voorwaarden',
    data: { footer: true } satisfies RouteData,
    loadComponent: () => import('./pages/terms/terms').then((m) => m.Terms),
  },
  // Prerendering needs a concrete path to render the 404 body into; the build
  // then copies 404/index.html up to 404.html, which is what Netlify serves.
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
