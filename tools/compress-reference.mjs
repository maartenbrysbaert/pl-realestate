/**
 * Recompresses the captured reference screenshots in place. They are the only
 * durable record of the Squarespace original once the subscription lapses, so
 * they are committed - but a UI screenshot does not need 11 MB of truecolour
 * PNG. Palette encoding is visually lossless for flat UI and cuts ~70%.
 *
 * Usage:  node compress-reference.mjs [dir]
 */
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = process.argv[2] ?? join(ROOT, 'reference', 'squarespace', 'screenshots');

async function* walk(dir) {
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    if ((await stat(full)).isDirectory()) yield* walk(full);
    else if (full.endsWith('.png')) yield full;
  }
}

let before = 0;
let after = 0;

for await (const file of walk(DIR)) {
  const originalSize = (await stat(file)).size;
  const tmp = `${file}.tmp`;

  await sharp(file).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(tmp);
  const newSize = (await stat(tmp)).size;

  // Keep whichever is smaller - palette encoding loses on photo-heavy pages.
  if (newSize < originalSize) {
    await unlink(file);
    await rename(tmp, file);
  } else {
    await unlink(tmp);
  }

  before += originalSize;
  after += Math.min(newSize, originalSize);
}

const mb = (n) => (n / 1048576).toFixed(1);
console.log(`${mb(before)} MB -> ${mb(after)} MB (${Math.round((1 - after / before) * 100)}% smaller)`);
