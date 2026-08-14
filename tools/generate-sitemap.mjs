/**
 * Emits sitemap.xml and robots.txt into the built output.
 *
 * Every page is listed once per locale, and each entry carries the full
 * reciprocal xhtml:link alternate set - Google discards hreflang annotations
 * that do not point back at each other.
 *
 * Run as a postbuild step: node tools/generate-sitemap.mjs
 */
import { access, writeFile, readFile, readdir, stat, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST_ROOT = join(ROOT, 'app', 'dist', 'app');
const DIST = join(DIST_ROOT, 'browser');
const ORIGIN = 'https://pl-realestate.com';

// ---------------------------------------------------------------------------
// This site must deploy as prerendered static files. If angular.json ever loses
// `outputMode: "static"`, the build emits a server/ bundle and Netlify's Angular
// runtime switches the deploy to SSR functions - which would quietly introduce a
// runtime, cold starts and a serverless bill. Fail loudly instead.

const serverBundle = join(DIST_ROOT, 'server');
if (
  await access(serverBundle).then(
    () => true,
    () => false,
  )
) {
  console.error(
    `FAIL: ${serverBundle} exists.\n` +
      "This build is meant to be fully static. Check that angular.json still sets\n" +
      '`outputMode: "static"` and that no SSR entry has been reintroduced.',
  );
  process.exit(1);
}

/** Must match app.routes.ts (minus the wildcard) and angular.json's i18n block. */
const PATHS = ['', 'over', 'diensten', 'referenties', 'contact', 'algemene-voorwaarden'];
const LOCALES = [
  { code: 'nl-BE', subPath: '' },
  { code: 'fr-BE', subPath: 'fr' },
  { code: 'en-GB', subPath: 'en' },
];

/**
 * Locale roots keep their trailing slash (`/fr/`, not `/fr`) so these match the
 * canonical and hreflang tags the app emits. A mismatch makes Google treat the
 * two spellings as separate URLs.
 */
const url = (locale, path) => {
  if (!path) return locale.subPath ? `${ORIGIN}/${locale.subPath}/` : `${ORIGIN}/`;
  return [ORIGIN, locale.subPath, path].filter(Boolean).join('/');
};

/** Homepage first, then the rest - mirrors how the nav is ordered. */
const priority = (path) => (path === '' ? '1.0' : path === 'algemene-voorwaarden' ? '0.3' : '0.8');

const entries = [];
for (const locale of LOCALES) {
  for (const path of PATHS) {
    const alternates = LOCALES.map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${alt.code}" href="${url(alt, path)}"/>`,
    );
    alternates.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(LOCALES[0], path)}"/>`,
    );

    entries.push(
      [
        '  <url>',
        `    <loc>${url(locale, path)}</loc>`,
        ...alternates,
        `    <changefreq>monthly</changefreq>`,
        `    <priority>${priority(path)}</priority>`,
        '  </url>',
      ].join('\n'),
    );
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

# Netlify form registration stub - not a real page.
Disallow: /__forms.html

Sitemap: ${ORIGIN}/sitemap.xml
`;

await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(join(DIST, 'robots.txt'), robots, 'utf8');

console.log(`sitemap.xml  ${entries.length} URLs (${PATHS.length} pages x ${LOCALES.length} locales)`);
console.log('robots.txt   written');

// ---------------------------------------------------------------------------
// Netlify serves 404.html from the root of each directory it is given in a
// redirect rule. Angular prerenders the page to 404/index.html, so lift a copy.

for (const locale of LOCALES) {
  const dir = locale.subPath ? join(DIST, locale.subPath) : DIST;
  await copyFile(join(dir, '404', 'index.html'), join(dir, '404.html'));
  console.log(`404.html     ${locale.code} (${locale.subPath || 'root'})`);
}

// ---------------------------------------------------------------------------
// Guard: nothing may still point at Squarespace. This is a release blocker, so
// it fails the build rather than warning.

async function* walk(dir) {
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    if ((await stat(full)).isDirectory()) yield* walk(full);
    else yield full;
  }
}

const offenders = [];
for await (const file of walk(DIST)) {
  if (!/\.(html|js|css|xml|txt)$/.test(file)) continue;
  const text = await readFile(file, 'utf8');
  if (/squarespace|sqspcdn|use\.typekit\.net/i.test(text)) {
    offenders.push(file.replace(DIST, ''));
  }
}

if (offenders.length) {
  console.error('\nFAIL: Squarespace references remain in the build output:');
  for (const f of offenders) console.error(`  ${f}`);
  process.exit(1);
}

console.log('clean        no Squarespace or Typekit references in output');
