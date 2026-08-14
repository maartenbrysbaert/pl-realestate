import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Everything is prerendered to static HTML at build time - there is no server
 * at runtime, only files on Netlify's CDN. The wildcard covers the 404 page,
 * which Netlify serves from 404.html.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
