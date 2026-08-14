import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { SiteHeader } from './layout/site-header/site-header';
import { SiteFooter } from './layout/site-footer/site-footer';
import { RouteData } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  template: `
    <app-site-header />
    <main id="main">
      <router-outlet />
    </main>
    @if (showFooter()) {
      <app-site-footer />
    }
  `,
})
export class App {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  /** Only the homepage and the terms page carry the footer - see app.routes.ts. */
  private readonly routeData = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => {
        let deepest = this.route;
        while (deepest.firstChild) deepest = deepest.firstChild;
        return deepest.snapshot.data as RouteData;
      }),
    ),
    { initialValue: {} as RouteData },
  );

  protected readonly showFooter = computed(() => this.routeData().footer === true);
}
