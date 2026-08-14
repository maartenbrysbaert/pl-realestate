/**
 * Stitches the Squarespace original and the Angular rebuild side by side for
 * each page and breakpoint, so the fidelity pass is a matter of looking at one
 * image rather than flicking between two.
 *
 * Usage:  node compare.mjs [--viewport desktop]
 * Writes: reference/compare/<viewport>/<slug>.png   (original | rebuild)
 */
import { mkdir, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const vpIdx = args.indexOf('--viewport');
const VIEWPORTS = vpIdx !== -1 ? [args[vpIdx + 1]] : ['desktop', 'tablet', 'mobile'];

const SLUGS = ['home', 'over', 'diensten', 'referenties', 'contact', 'algemene-voorwaarden'];

const GAP = 24;
const LABEL_HEIGHT = 34;

const exists = (p) =>
  access(p).then(
    () => true,
    () => false,
  );

for (const viewport of VIEWPORTS) {
  for (const slug of SLUGS) {
    const before = join(ROOT, 'reference', 'squarespace', 'screenshots', viewport, `${slug}.png`);
    const after = join(ROOT, 'reference', 'angular', 'screenshots', viewport, `${slug}.png`);

    if (!(await exists(before)) || !(await exists(after))) {
      console.log(`skip ${viewport}/${slug} (missing capture)`);
      continue;
    }

    const [a, b] = await Promise.all([sharp(before).metadata(), sharp(after).metadata()]);

    // Pad the shorter of the two so both columns start at the same y.
    const height = Math.max(a.height, b.height) + LABEL_HEIGHT;
    const width = a.width + GAP + b.width;

    const label = (text, w) =>
      Buffer.from(
        `<svg width="${w}" height="${LABEL_HEIGHT}">
           <rect width="${w}" height="${LABEL_HEIGHT}" fill="#0a1a2e"/>
           <text x="12" y="22" font-family="monospace" font-size="14" fill="#ffffff">${text}</text>
         </svg>`,
      );

    const out = join(ROOT, 'reference', 'compare', viewport, `${slug}.png`);
    await mkdir(dirname(out), { recursive: true });

    await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      },
    })
      .composite([
        { input: label(`SQUARESPACE  ${slug}  ${viewport}`, a.width), top: 0, left: 0 },
        { input: label(`ANGULAR  ${slug}  ${viewport}`, b.width), top: 0, left: a.width + GAP },
        { input: before, top: LABEL_HEIGHT, left: 0 },
        { input: after, top: LABEL_HEIGHT, left: a.width + GAP },
      ])
      .png()
      .toFile(out);

    console.log(`${viewport}/${slug}  ${a.width}x${a.height} | ${b.width}x${b.height}`);
  }
}
