/**
 * Captures everything we need from the live Squarespace site before rebuilding it:
 *   - full-page screenshots at three breakpoints (the fidelity target)
 *   - rendered HTML per page (so copy is lifted verbatim, never paraphrased)
 *   - computed design tokens (Squarespace's computed styles, not its class names)
 *   - the full image manifest
 *
 * Usage:  node capture-reference.mjs [--base https://pl-realestate.com]
 *
 * Point --base at http://localhost:4200 to re-capture the Angular rebuild and diff
 * the two screenshot sets during the fidelity pass.
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const args = process.argv.slice(2);
const baseIdx = args.indexOf('--base');
const BASE = baseIdx !== -1 ? args[baseIdx + 1] : 'https://pl-realestate.com';
const outIdx = args.indexOf('--out');
const OUT = join(ROOT, 'reference', outIdx !== -1 ? args[outIdx + 1] : 'squarespace');

/**
 * Sitemap paths on the live site, mapped to the slug we save under. The
 * homepage is the one path that differs: Squarespace serves it at /home, the
 * rebuild serves it at the root.
 */
const IS_REBUILD = !BASE.includes('pl-realestate.com');

const PAGES = [
  { path: IS_REBUILD ? '/' : '/home', slug: 'home' },
  { path: '/over', slug: 'over' },
  { path: '/diensten', slug: 'diensten' },
  { path: '/referenties', slug: 'referenties' },
  { path: '/contact', slug: 'contact' },
  { path: '/algemene-voorwaarden', slug: 'algemene-voorwaarden' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'mobile', width: 390, height: 844 },
];

/**
 * Runs in the page. Reads computed styles off real elements rather than trusting
 * declared CSS, and collects every image with its alt text and rendered size.
 */
function extractTokens() {
  const uniq = (arr) => [...new Set(arr)];
  const seen = new Map();

  const record = (key, value) => {
    if (!value || value === 'none' || value === 'normal') return;
    const bucket = seen.get(key) ?? new Map();
    bucket.set(value, (bucket.get(value) ?? 0) + 1);
    seen.set(key, bucket);
  };

  for (const el of document.querySelectorAll('body *')) {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) continue;
    const cs = getComputedStyle(el);

    record('fontFamily', cs.fontFamily);
    record('color', cs.color);
    if (cs.backgroundColor !== 'rgba(0, 0, 0, 0)') record('backgroundColor', cs.backgroundColor);

    // Only sample typography from elements that actually hold text.
    const hasText = [...el.childNodes].some(
      (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0,
    );
    if (hasText) {
      record(
        'textStyle',
        [
          el.tagName.toLowerCase(),
          cs.fontFamily.split(',')[0].replace(/['"]/g, ''),
          cs.fontSize,
          cs.fontWeight,
          cs.lineHeight,
          cs.letterSpacing,
          cs.textTransform,
        ].join(' | '),
      );
    }
  }

  const tokens = {};
  for (const [key, bucket] of seen) {
    tokens[key] = [...bucket.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 40)
      .map(([value, count]) => ({ value, count }));
  }

  const containers = uniq(
    [...document.querySelectorAll('main, section, .content-wrapper, [data-section-id]')]
      .map((el) => Math.round(el.getBoundingClientRect().width))
      .filter((w) => w > 0),
  ).sort((a, b) => b - a);

  const images = [...document.querySelectorAll('img')]
    .map((img) => ({
      src: img.currentSrc || img.src,
      // Squarespace lazy-loads; the real source often only lives in data-src.
      dataSrc: img.getAttribute('data-src') || null,
      alt: img.alt || null,
      width: Math.round(img.getBoundingClientRect().width),
      height: Math.round(img.getBoundingClientRect().height),
    }))
    .filter((i) => i.src || i.dataSrc);

  const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map((h) => ({
    tag: h.tagName.toLowerCase(),
    text: h.innerText.trim(),
  }));

  const links = uniq(
    [...document.querySelectorAll('a[href]')].map(
      (a) => `${a.innerText.trim().replace(/\s+/g, ' ')} -> ${a.getAttribute('href')}`,
    ),
  );

  return {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content ?? null,
    lang: document.documentElement.lang,
    containers,
    tokens,
    images,
    headings,
    links,
    // innerText preserves reading order and drops markup - the cleanest source
    // for lifting copy verbatim into templates.
    text: document.body.innerText,
  };
}

/** Squarespace lazy-loads images and animates sections in on scroll. */
async function scrollThrough(page) {
  // Angular's router can navigate during hydration, which tears down the
  // evaluation context mid-scroll. Let it settle first.
  await page.waitForTimeout(1000);

  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 250));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 500));
  });
}

const browser = await chromium.launch();
const manifest = { base: BASE, capturedAt: new Date().toISOString(), pages: {} };

for (const { path, slug } of PAGES) {
  const url = `${BASE}${path}`;
  console.log(`\n${slug}  ${url}`);

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      locale: 'nl-BE',
    });
    const page = await context.newPage();

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
    } catch {
      // networkidle never settles on sites with polling scripts; the DOM is ready by now.
      console.warn(`  ! networkidle timed out at ${vp.name}, continuing`);
    }

    await scrollThrough(page);

    const shotPath = join(OUT, 'screenshots', vp.name, `${slug}.png`);
    await mkdir(dirname(shotPath), { recursive: true });
    await page.screenshot({ path: shotPath, fullPage: true });
    console.log(`  ${vp.name.padEnd(8)} -> screenshots/${vp.name}/${slug}.png`);

    // HTML and tokens only need capturing once, at the desktop breakpoint.
    if (vp.name === 'desktop') {
      const html = await page.content();
      const htmlPath = join(OUT, 'html', `${slug}.html`);
      await mkdir(dirname(htmlPath), { recursive: true });
      await writeFile(htmlPath, html, 'utf8');

      const data = await page.evaluate(extractTokens);
      const dataPath = join(OUT, 'extracted', `${slug}.json`);
      await mkdir(dirname(dataPath), { recursive: true });
      await writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8');

      const textPath = join(OUT, 'text', `${slug}.txt`);
      await mkdir(dirname(textPath), { recursive: true });
      await writeFile(textPath, data.text, 'utf8');

      manifest.pages[slug] = {
        path,
        title: data.title,
        description: data.description,
        lang: data.lang,
        headings: data.headings,
        links: data.links,
        images: data.images,
      };
      console.log(`  html + text + ${data.images.length} images recorded`);
    }

    await context.close();
  }
}

await writeFile(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

const allImages = new Set();
for (const page of Object.values(manifest.pages)) {
  for (const img of page.images) {
    for (const src of [img.src, img.dataSrc]) {
      if (src?.includes('squarespace-cdn.com')) allImages.add(src.split('?')[0]);
    }
  }
}
await writeFile(
  join(OUT, 'image-urls.txt'),
  [...allImages].sort().join('\n') + '\n',
  'utf8',
);

console.log(`\nDone. ${allImages.size} unique CDN images listed in image-urls.txt`);
await browser.close();
