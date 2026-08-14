import { Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo';

/**
 * ⚠ CONTENT DEFECT CARRIED OVER FROM THE ORIGINAL SITE — see README.
 *
 * The live Squarespace page names "Immophone-Partners" as the data controller
 * throughout, and directs data-subject requests to info@immophone-partners.be
 * and www.immophone-partners.be. It also cites the Privacy Commission, which was
 * replaced by the Gegevensbeschermingsautoriteit in 2018.
 *
 * It is reproduced verbatim here so nothing is silently altered — a privacy
 * statement is a legal document and the wording is the client's call, not ours.
 * This must be corrected by Patrick (or his legal advisor) before go-live, and
 * before the FR/EN translations are finalised.
 */
@Component({
  selector: 'app-terms',
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
})
export class Terms {
  constructor() {
    inject(SeoService).apply({
      title: $localize`:Page title:Algemene voorwaarden | PL Real Estate`,
      description: $localize`:Meta description:Privacyverklaring, cookieverklaring en gebruiksvoorwaarden van PL Real Estate.`,
    });
  }
}
