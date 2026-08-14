import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="notfound">
      <h1 i18n="404 page heading">Pagina niet gevonden</h1>
      <p i18n="404 page body">
        De pagina die u zoekt bestaat niet of werd verplaatst.
      </p>
      <a routerLink="/" i18n="404 page link">Terug naar de homepage</a>
    </section>
  `,
  styles: `
    @use 'mixins' as *;

    .notfound {
      @include container;

      padding-block: var(--space-2xl);
    }

    h1 {
      @include heading(var(--fs-h2));

      margin-bottom: var(--space-sm);
    }

    a {
      color: var(--c-stone);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  `,
})
export class NotFound {
  constructor() {
    inject(SeoService).apply({
      title: $localize`:Page title:Pagina niet gevonden | PL Real Estate`,
      description: $localize`:Meta description:De pagina die u zoekt bestaat niet of werd verplaatst.`,
    });
  }
}
