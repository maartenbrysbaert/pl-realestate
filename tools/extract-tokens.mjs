/**
 * Maps every visible text element to its computed style, keyed by the text
 * itself. The aggregate counts from capture-reference.mjs tell us which fonts
 * exist; this tells us which element uses which, so the token layer can be
 * built from real values instead of guesses.
 *
 * Usage:  node extract-tokens.mjs [--base https://pl-realestate.com]
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const baseIdx = args.indexOf('--base');
const BASE = baseIdx !== -1 ? args[baseIdx + 1] : 'https://pl-realestate.com';

const PAGES = ['/home', '/over', '/diensten', '/referenties', '/contact', '/algemene-voorwaarden'];

const probe = () => {
  const out = [];
  const selector =
    'h1, h2, h3, h4, h5, h6, p, a, li, button, label, input, textarea, figcaption, blockquote';

  for (const el of document.querySelectorAll(selector)) {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) continue;

    const cs = getComputedStyle(el);
    const text = (el.innerText || el.value || el.placeholder || '').trim().replace(/\s+/g, ' ');
    if (!text && !['input', 'textarea'].includes(el.tagName.toLowerCase())) continue;

    out.push({
      tag: el.tagName.toLowerCase(),
      text: text.slice(0, 70),
      font: cs.fontFamily,
      size: cs.fontSize,
      weight: cs.fontWeight,
      lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing,
      transform: cs.textTransform,
      align: cs.textAlign,
      color: cs.color,
      bg: cs.backgroundColor,
      width: Math.round(rect.width),
      x: Math.round(rect.x),
    });
  }

  // Section geometry drives the container width and vertical rhythm.
  const sections = [...document.querySelectorAll('[data-section-id] .content-wrapper, section')].map(
    (el) => {
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return {
        width: Math.round(rect.width),
        padding: `${cs.paddingTop} ${cs.paddingRight} ${cs.paddingBottom} ${cs.paddingLeft}`,
        bg: cs.backgroundColor,
      };
    },
  );

  return { elements: out, sections };
};

const browser = await chromium.launch();
const result = {};

for (const path of PAGES) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'nl-BE',
  });
  const page = await context.newPage();
  try {
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 60_000 });
  } catch {
    /* networkidle is best-effort */
  }
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);

  result[path.replace('/', '') || 'home'] = await page.evaluate(probe);
  console.log(`${path} -> ${result[path.replace('/', '') || 'home'].elements.length} elements`);
  await context.close();
}

const out = join(ROOT, 'reference', 'squarespace', 'extracted', 'typography.json');
await mkdir(dirname(out), { recursive: true });
await writeFile(out, JSON.stringify(result, null, 2), 'utf8');
console.log(`\n-> ${out}`);

await browser.close();
