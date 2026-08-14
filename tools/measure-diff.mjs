/**
 * Numeric fidelity check. Measures the bounding box of a set of landmark
 * elements on both the Squarespace original and the rebuild, and prints the
 * delta. Far more precise than comparing screenshots by eye.
 *
 * Usage:  node measure-diff.mjs [--rebuild http://localhost:4400]
 */
import { chromium } from 'playwright';

const args = process.argv.slice(2);
const idx = args.indexOf('--rebuild');
const REBUILD = idx !== -1 ? args[idx + 1] : 'http://localhost:4400';
const ORIGINAL = 'https://pl-realestate.com';

/**
 * Landmarks are matched by visible text rather than by selector, because the
 * two sites share no class names.
 */
const PAGES = [
  {
    slug: 'home',
    original: '/home',
    rebuild: '/',
    landmarks: [
      ['wordmark', 'PL Real Estate by Patrick Landuyt'],
      ['hero heading', 'BEMIDDELING ZOALS HET MOET'],
      ['testimonial', 'Niemand beheerst een danige'],
      ['attribution', '(Referentie op aanvraag)'],
      ['footer heading', 'PL Real Estate'],
    ],
  },
  {
    slug: 'over',
    original: '/over',
    rebuild: '/over',
    landmarks: [
      ['name', 'Patrick Landuyt'],
      ['tagline', 'Grondlegger in het discreet'],
      ['label 1', 'Bemiddeling zoals het moet'],
      ['prose 1', 'Opgestart in 2009'],
      ['label 2', 'Onze klanten'],
      ['label 3', 'Onze sociale meerwaarde'],
      ['cta heading', 'Samen aan de slag?'],
    ],
  },
  {
    slug: 'diensten',
    original: '/diensten',
    rebuild: '/diensten',
    landmarks: [
      ['lead', 'U kan bij Patrick Landuyt terecht'],
      ['first item', 'Verkoop van alle vastgoed'],
      ['last item', 'Vermogen, optimalisatie'],
    ],
  },
  {
    slug: 'contact',
    original: '/contact',
    rebuild: '/contact',
    landmarks: [
      ['heading', 'Contacteer ons'],
      ['address label', 'Maatschappelijke zetel:'],
      ['name field label', 'Naam'],
      ['submit', 'Verzenden'],
      ['further heading', 'Verdere info'],
    ],
  },
  {
    slug: 'referenties',
    original: '/referenties',
    rebuild: '/referenties',
    landmarks: [
      ['heading', 'Referenties'],
      ['intro', 'De slideshow geeft een aantal'],
    ],
  },
];

/**
 * Finds the text-bearing leaf whose text starts with `needle`. Restricting to
 * leaves matters: wrappers carry the same innerText, and matching one of those
 * reports the section's geometry instead of the text's.
 */
function probe(needles) {
  const result = {};

  const leaves = [...document.querySelectorAll('body *')].filter(
    (el) => el.childElementCount === 0 && (el.innerText || '').trim().length > 0,
  );

  for (const [label, needle] of needles) {
    let best = null;
    for (const el of leaves) {
      const text = el.innerText.replace(/\s+/g, ' ').trim();
      if (!text.startsWith(needle)) continue;

      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;

      // Earliest match on the page wins, so repeated strings (e.g. the wordmark
      // in both the desktop and mobile header) resolve consistently.
      if (!best || rect.y + window.scrollY < best.y) {
        best = {
          x: Math.round(rect.x),
          y: Math.round(rect.y + window.scrollY),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      }
    }
    result[label] = best;
  }
  return result;
}

const browser = await chromium.launch();
const pad = (s, n) => String(s).padEnd(n);

for (const page of PAGES) {
  console.log(`\n═══ ${page.slug}`);

  const measure = async (base, path) => {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      locale: 'nl-BE',
    });
    const p = await context.newPage();
    try {
      await p.goto(`${base}${path}`, { waitUntil: 'networkidle', timeout: 60_000 });
    } catch {
      /* best effort */
    }
    await p.waitForTimeout(1500);
    const data = await p.evaluate(probe, page.landmarks);
    await context.close();
    return data;
  };

  const [before, after] = await Promise.all([
    measure(ORIGINAL, page.original),
    measure(REBUILD, page.rebuild),
  ]);

  console.log(
    `  ${pad('landmark', 18)} ${pad('squarespace', 26)} ${pad('rebuild', 26)} delta`,
  );

  for (const [label] of page.landmarks) {
    const a = before[label];
    const b = after[label];
    if (!a || !b) {
      console.log(`  ${pad(label, 18)} ${a ? 'found' : 'MISSING'} / ${b ? 'found' : 'MISSING'}`);
      continue;
    }
    const fmt = (r) => `x${pad(r.x, 5)}y${pad(r.y, 6)}w${pad(r.width, 5)}`;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dw = b.width - a.width;
    const flag = Math.abs(dx) > 8 || Math.abs(dy) > 20 || Math.abs(dw) > 12 ? '  <<<' : '';
    console.log(
      `  ${pad(label, 18)} ${pad(fmt(a), 26)} ${pad(fmt(b), 26)} dx${pad(dx, 5)} dy${pad(dy, 6)} dw${pad(dw, 5)}${flag}`,
    );
  }
}

await browser.close();
