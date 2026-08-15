/**
 * Renders the PL monogram in app/public/favicon.svg into the raster icons that
 * browsers still ask for. The SVG is the source of truth; re-run this after
 * editing it.
 *
 * Usage:  node generate-favicon.mjs
 *
 * Writes: app/public/favicon.ico          (16/32/48, PNG-encoded frames)
 *         app/public/apple-touch-icon.png (180, iOS home screen)
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'app', 'public');

const ICO_SIZES = [16, 32, 48];
const APPLE_SIZE = 180;

const svg = await readFile(join(PUBLIC, 'favicon.svg'));

/** Rasterise at the target size directly - scaling down a big render blurs the 6px strokes. */
const render = (size) =>
  sharp(svg, { density: (72 * size) / 64 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();

/**
 * ICO container: a 6-byte header, one 16-byte directory entry per frame, then
 * the frames themselves. The frames are PNGs rather than BMPs, which every
 * browser in use has understood for well over a decade.
 */
function toIco(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = icon
  header.writeUInt16LE(frames.length, 4);

  const directory = Buffer.alloc(16 * frames.length);
  let offset = header.length + directory.length;

  frames.forEach(({ size, data }, i) => {
    const entry = i * 16;
    directory.writeUInt8(size === 256 ? 0 : size, entry);
    directory.writeUInt8(size === 256 ? 0 : size, entry + 1);
    directory.writeUInt8(0, entry + 2); // palette size - 0 for true colour
    directory.writeUInt8(0, entry + 3); // reserved
    directory.writeUInt16LE(1, entry + 4); // colour planes
    directory.writeUInt16LE(32, entry + 6); // bits per pixel
    directory.writeUInt32LE(data.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });

  return Buffer.concat([header, directory, ...frames.map((f) => f.data)]);
}

const frames = [];
for (const size of ICO_SIZES) {
  frames.push({ size, data: await render(size) });
}

await writeFile(join(PUBLIC, 'favicon.ico'), toIco(frames));
console.log(`favicon.ico          ${ICO_SIZES.join(', ')}`);

await writeFile(join(PUBLIC, 'apple-touch-icon.png'), await render(APPLE_SIZE));
console.log(`apple-touch-icon.png ${APPLE_SIZE}`);
