/**
 * Downloads every image off the Squarespace CDN and turns it into responsive,
 * self-hosted WebP. After this runs, nothing in the app points at Squarespace.
 *
 * Usage:  node process-images.mjs
 *
 * Reads:  reference/squarespace/content/projects.json  (gallery tiles + captions)
 *         reference/squarespace/manifest.json          (everything else)
 * Writes: reference/squarespace/img-original/          (untouched downloads)
 *         app/public/img/<group>/<slug>-<width>.webp   (what ships)
 *         app/src/app/data/projects.ts                 (typed gallery data)
 */
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CAPTURED = join(ROOT, 'reference', 'squarespace');
const ORIGINALS = join(CAPTURED, 'img-original');
const APP_IMG = join(ROOT, 'app', 'public', 'img');

/** Widths we emit. Gallery tiles never render wider than ~720px CSS. */
const WIDTHS = { projects: [480, 800, 1200], page: [640, 1024, 1600, 2400] };
const QUALITY = 78;

const exists = (p) =>
  access(p).then(
    () => true,
    () => false,
  );

/** Squarespace serves the original when asked for a large explicit format. */
const cdnUrl = (base) => `${base}?format=2500w`;

/** "1.SintMartensLatem.SOLD.jpg" -> "sint-martens-latem-sold" */
function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
    .toLowerCase();
}

async function download(url, dest) {
  if (await exists(dest)) return false;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  return true;
}

/** Emits one WebP per width, never upscaling past the source. */
async function toWebp(srcPath, outDir, slug, widths) {
  await mkdir(outDir, { recursive: true });
  const image = sharp(srcPath);
  const { width: srcWidth, height: srcHeight } = await image.metadata();

  const emitted = [];
  for (const w of widths) {
    if (w > srcWidth) continue;
    const out = join(outDir, `${slug}-${w}.webp`);
    if (!(await exists(out))) {
      await sharp(srcPath).resize({ width: w }).webp({ quality: QUALITY }).toFile(out);
    }
    emitted.push(w);
  }

  // Always emit at least one file, even for sources smaller than our smallest width.
  if (emitted.length === 0) {
    const out = join(outDir, `${slug}-${srcWidth}.webp`);
    if (!(await exists(out))) {
      await sharp(srcPath).webp({ quality: QUALITY }).toFile(out);
    }
    emitted.push(srcWidth);
  }

  return { widths: emitted, srcWidth, srcHeight };
}

// ---------------------------------------------------------------------------

const projects = JSON.parse(
  await readFile(join(CAPTURED, 'content', 'projects.json'), 'utf8'),
);

/**
 * /referenties carries the full, correctly-ordered set; /home shows a subset in
 * a different order. The same photo appears on both pages but was uploaded
 * twice, so it has two different CDN UUIDs - dedupe on the filename, which is
 * stable across uploads. /referenties wins for caption and ordering.
 */
const filenameOf = (src) => src.split('/').pop();

const byFile = new Map();
for (const item of [...projects.referenties, ...projects.home]) {
  if (!item.src.includes('squarespace-cdn.com')) continue;
  const key = filenameOf(item.src);
  if (!byFile.has(key)) byFile.set(key, item);
}

const homeFiles = new Set(projects.home.map((i) => filenameOf(i.src)));
const order = new Map(projects.referenties.map((item, i) => [filenameOf(item.src), i]));

const records = [];
const usedSlugs = new Set();

let index = 0;
for (const [filename, item] of byFile) {
  index++;
  const src = item.src;

  // The gallery ends with a flat "MORE SOON..." placeholder image. Skip it here
  // and render that tile as real markup, so the text stays crisp and translatable.
  if (!item.caption) {
    console.log(`- ${filename} (no caption - rendered as markup instead)`);
    continue;
  }

  // Several projects share a caption ("Sint-Martens-Latem : Sold" appears four
  // times), so disambiguate with an index rather than dropping them.
  let slug = slugify(item.caption || filename);
  if (!slug || usedSlugs.has(slug)) slug = `${slug || 'project'}-${index}`;
  usedSlugs.add(slug);

  const originalPath = join(ORIGINALS, filename);

  try {
    const fetched = await download(cdnUrl(src), originalPath);
    const { widths, srcWidth, srcHeight } = await toWebp(
      originalPath,
      join(APP_IMG, 'projects'),
      slug,
      WIDTHS.projects,
    );

    // Captions are "Location : Status" or "Status: Location" - both appear.
    const caption = (item.caption || '').trim();
    const [a, b] = caption.split(':').map((s) => s.trim());
    const looksReversed = /^(sold|rented|co-sales|share deal)/i.test(a ?? '');

    records.push({
      slug,
      caption,
      location: looksReversed ? (b ?? '') : (a ?? ''),
      status: looksReversed ? a : (b ?? ''),
      widths,
      width: srcWidth,
      height: srcHeight,
      onHome: homeFiles.has(filename),
      order: order.get(filename) ?? 999,
    });

    console.log(`${fetched ? '↓' : '·'} ${slug.padEnd(46)} ${widths.join(',')}`);
  } catch (err) {
    console.error(`! ${slug}: ${err.message}`);
  }
}

records.sort((a, b) => a.order - b.order);

// ---------------------------------------------------------------------------
// Emit typed data for the gallery component.

const ts = `// GENERATED by tools/process-images.mjs - do not edit by hand.
// Source: reference/squarespace/content/projects.json

export interface Project {
  /** Filename stem under public/img/projects/, e.g. \`<slug>-800.webp\`. */
  readonly slug: string;
  /** Municipality or descriptor, as shown under the tile. */
  readonly location: string;
  /** Transaction status: Sold, Co-sales, Share deal, Rented, ... */
  readonly status: string;
  /** Widths actually emitted, smallest first. */
  readonly widths: readonly number[];
  readonly width: number;
  readonly height: number;
  /** Included in the homepage slideshow subset. */
  readonly onHome: boolean;
}

export const PROJECTS: readonly Project[] = ${JSON.stringify(
  records.map(({ slug, location, status, widths, width, height, onHome }) => ({
    slug,
    location,
    status,
    widths,
    width,
    height,
    onHome,
  })),
  null,
  2,
)} as const;

export const HOME_PROJECTS: readonly Project[] = PROJECTS.filter((p) => p.onHome);
`;

const dataPath = join(ROOT, 'app', 'src', 'app', 'data', 'projects.ts');
await mkdir(dirname(dataPath), { recursive: true });
await writeFile(dataPath, ts, 'utf8');

console.log(
  `\n${records.length} projects processed (${records.filter((r) => r.onHome).length} on the homepage)`,
);
console.log(`data -> app/src/app/data/projects.ts`);

// ---------------------------------------------------------------------------
// Standalone page images: the portrait on /over and the lead photo on /diensten.
// Small enough to just list rather than derive.

const PAGE_IMAGES = [
  {
    slug: 'patrick-landuyt',
    url: 'https://images.squarespace-cdn.com/content/v1/6790eac556945573d44514f1/1737550544977-JJ0OZR45NB9LTFPR66NR/1663597023191.jpg',
    widths: [186, 372, 560],
  },
  {
    slug: 'diensten-lead',
    url: 'https://images.squarespace-cdn.com/content/v1/6790eac556945573d44514f1/0992de0f-824a-486a-9142-2732683d6764/new.jpg',
    widths: [600, 1200, 1600],
  },
];

console.log('\npage images:');
for (const { slug, url, widths } of PAGE_IMAGES) {
  const originalPath = join(ORIGINALS, url.split('/').pop());
  try {
    await download(cdnUrl(url), originalPath);
    const { widths: emitted } = await toWebp(
      originalPath,
      join(APP_IMG, 'page'),
      slug,
      widths,
    );
    console.log(`  ${slug.padEnd(20)} ${emitted.join(',')}`);
  } catch (err) {
    console.error(`  ! ${slug}: ${err.message}`);
  }
}
