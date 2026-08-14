/**
 * Pulls structured content out of the captured Squarespace HTML that innerText
 * can't reach - collapsed accordion bodies on /diensten and the caption/image
 * pairs behind the galleries on /home and /referenties.
 *
 * Usage:  node extract-content.mjs
 * Writes: reference/squarespace/content/{services,projects}.json
 */
import { chromium } from 'playwright';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CAPTURED = join(ROOT, 'reference', 'squarespace');
const OUT = join(CAPTURED, 'content');

const browser = await chromium.launch();
const page = await browser.newPage();

// The captured markup still points at Squarespace's CDN for scripts, fonts and
// images. We only need the DOM, so cut every outbound request - otherwise the
// page hangs waiting on assets we deliberately aren't loading.
await page.route('**/*', (route) => route.abort());

/** Loads a captured HTML file as a real document so we can query it. */
async function open(slug) {
  const html = await readFile(join(CAPTURED, 'html', `${slug}.html`), 'utf8');
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
}

// ---------------------------------------------------------------- services

await open('diensten');

const services = await page.evaluate(() => {
  return [...document.querySelectorAll('.accordion-item')].map((item) => {
    const title = item.querySelector('.accordion-item__title')?.textContent.trim() ?? '';
    const body = item.querySelector('.accordion-item__dropdown');

    // Keep the block structure - these bodies contain paragraphs, lists and links.
    const blocks = [];
    for (const el of body?.querySelectorAll('p, li, h1, h2, h3, h4') ?? []) {
      const text = el.textContent.replace(/\s+/g, ' ').trim();
      if (!text) continue;
      blocks.push({
        tag: el.tagName.toLowerCase(),
        text,
        links: [...el.querySelectorAll('a[href]')].map((a) => ({
          text: a.textContent.trim(),
          href: a.getAttribute('href'),
        })),
      });
    }

    return { title, blocks, html: body?.innerHTML.trim() ?? '' };
  });
});

// ---------------------------------------------------------------- projects

/** Gallery tiles: image + the caption under it (location : status). */
const galleryExtractor = () => {
  const items = [];
  const seen = new Set();

  for (const fig of document.querySelectorAll(
    '.gallery-grid-item, .gallery-slideshow-item, .gallery-masonry-item, figure',
  )) {
    const img = fig.querySelector('img');
    if (!img) continue;

    const src = (img.getAttribute('data-src') || img.currentSrc || img.src || '').split('?')[0];
    if (!src || seen.has(src)) continue;
    seen.add(src);

    const caption =
      fig.querySelector('figcaption, .gallery-caption, .gallery-item-caption')?.textContent.trim() ??
      '';

    items.push({
      src,
      alt: img.getAttribute('alt') || null,
      caption: caption.replace(/\s+/g, ' '),
      // Squarespace stores the intrinsic size - useful for aspect ratios.
      dimensions: img.getAttribute('data-image-dimensions') || null,
    });
  }
  return items;
};

await open('referenties');
const referenties = await page.evaluate(galleryExtractor);

await open('home');
const home = await page.evaluate(galleryExtractor);

// ---------------------------------------------------------------- write

await mkdir(OUT, { recursive: true });
await writeFile(join(OUT, 'services.json'), JSON.stringify(services, null, 2), 'utf8');
await writeFile(
  join(OUT, 'projects.json'),
  JSON.stringify({ referenties, home }, null, 2),
  'utf8',
);

console.log(`services : ${services.length} accordion items`);
for (const s of services) console.log(`  - ${s.title} (${s.blocks.length} blocks)`);
console.log(`projects : ${referenties.length} on /referenties, ${home.length} on /home`);

await browser.close();
