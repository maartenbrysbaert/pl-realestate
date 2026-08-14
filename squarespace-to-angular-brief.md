# Brief: Squarespace site → Angular rebuild

## Goal

Rebuild an existing Squarespace site as an Angular application, matching the
original design as closely as possible.

## Decisions already made

| Question | Decision |
| --- | --- |
| Scope | The whole site — every page in the sitemap |
| Priority | Visual fidelity first; clean code second where the two conflict |
| Content | Hardcoded in components. No CMS, no JSON content layer |
| Framework | Angular, standalone components, one route per page |

## Input needed

- **Source URL:** `<FILL IN>`
- Screenshots of the most important pages, if available — fetched HTML gives
  structure but not appearance, so screenshots are what close the last 10% of
  the fidelity gap.

## Recommended sequence

### 1. Recon (do this before writing any code)

- Fetch `/sitemap.xml` to enumerate pages. Squarespace publishes this reliably.
- **Report the page count back before proceeding.** Scope changes a lot between
  8 pages and 40, and it may be worth trimming the list first.
- Fetch each page's rendered HTML. Extract per page: heading hierarchy, body
  copy, image URLs with alt text, link targets, and the section/block structure.
- Identify recurring section patterns across pages (hero, feature grid, CTA
  band, testimonial, gallery, footer). These become shared components rather
  than per-page markup.
- Derive design tokens: type scale, font families, color palette, spacing
  rhythm, container widths, breakpoints. Squarespace's computed styles are the
  source of truth here, not its class names.

### 2. Scaffold

- `ng new` with SCSS, routing, standalone components.
- Token layer first (`_tokens.scss` or equivalent) — everything downstream
  references it.
- Layout shell: header, footer, page container.

### 3. Build

- Shared section components, then pages that compose them.
- One route per sitemap entry, preserving the original URL paths so existing
  links and SEO don't break.
- Responsive behaviour at the breakpoints observed in the original.

### 4. Assets

- Download images and fonts from the Squarespace CDN to `src/assets/`
  and rewrite references to local paths. Do not ship with hotlinked CDN URLs.
- Check font licensing — Squarespace serves fonts under its own license, which
  does not transfer to a self-hosted site. Substitute a properly licensed
  equivalent (Google Fonts, Fontshare) or buy a webfont license.

### 5. Fidelity pass

Iterate against screenshots: spacing, line heights, letter spacing, hover
states, scroll behaviour. This is where most of the remaining time goes.

## Known non-transferables

Squarespace ships a large generated CSS bundle plus its own JS runtime.
Copying it verbatim produces something unmaintainable, so reimplement rather
than port:

- Galleries, lightboxes, carousels, scroll animations
- Forms — need a new backend or a service like Formspree
- Commerce, booking, and member areas — no direct equivalent; these need real
  replacements and should be scoped separately
- Anything behind a login is unreachable by scraping

## Legal note

If this site isn't the user's own or a client's, the design and copy belong to
someone else. Fine as a private exercise; a problem if it goes live.

## Definition of done

- Every sitemap page exists at its original path
- No hotlinked Squarespace assets remain
- All fonts properly licensed or substituted
- Production build succeeds and matches screenshots at desktop, tablet, mobile
