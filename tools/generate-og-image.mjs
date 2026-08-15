/**
 * Builds the social sharing card at app/public/og-image.jpg.
 *
 * Neither the Squarespace original nor the first cut of the rebuild had an
 * og:image, so links pasted into WhatsApp, LinkedIn or iMessage rendered as a
 * bare grey box. For a business that runs on referral and word of mouth, that
 * is the most-seen surface of the site.
 *
 * JPEG rather than WebP on purpose: several scrapers (notably older LinkedIn
 * and WhatsApp builds) still refuse WebP and fall back to no image at all.
 *
 * Usage:  node generate-og-image.mjs [source.jpg]
 */
import { mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Wide, bright and recognisably Belgian residential - reads well at thumbnail size. */
const SOURCE =
  process.argv[2] ??
  join(ROOT, 'reference', 'squarespace', 'img-original', '1.SintMartensLatem.SOLD.jpg');

const OUT = join(ROOT, 'app', 'public', 'og-image.jpg');

// The Open Graph reference size. Facebook, LinkedIn, WhatsApp and X all crop
// toward the centre of this ratio.
const WIDTH = 1200;
const HEIGHT = 630;

await mkdir(dirname(OUT), { recursive: true });

await sharp(SOURCE)
  .resize({ width: WIDTH, height: HEIGHT, fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile(OUT);

const { size } = await sharp(OUT).metadata().then(async (m) => ({
  ...m,
  size: (await import('node:fs/promises')).stat(OUT).then((s) => s.size),
}));

console.log(`og-image.jpg  ${WIDTH}x${HEIGHT}  ${Math.round((await size) / 1024)} kB`);
console.log(`source: ${SOURCE}`);
