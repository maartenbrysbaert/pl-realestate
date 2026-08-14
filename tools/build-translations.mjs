/**
 * Generates src/locale/messages.fr-BE.xlf and messages.en-GB.xlf from the
 * extracted messages.xlf plus the translation tables in translations.mjs.
 *
 * Usage:
 *   cd app && npx ng extract-i18n
 *   node ../tools/build-translations.mjs
 *
 * Any source string without a translation is reported and written through
 * untranslated, so a missing entry shows up as Dutch text on the page rather
 * than a build failure mid-review. The exit code is non-zero so CI still
 * catches it.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TRANSLATIONS } from './translations.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LOCALE_DIR = join(ROOT, 'app', 'src', 'locale');

const source = await readFile(join(LOCALE_DIR, 'messages.xlf'), 'utf8');

/** XLIFF 2.0 escapes these five; our tables hold plain text. */
const escapeXml = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const unescapeXml = (s) =>
  s
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');

let exitCode = 0;

for (const [locale, table] of Object.entries(TRANSLATIONS)) {
  const missing = [];
  let translated = 0;

  let output = source
    .replace(/srcLang="[^"]*"/, `srcLang="nl-BE" trgLang="${locale}"`)
    // The extracted file records where each string lives in the source tree.
    // That is noise in a translation file and churns on every refactor.
    .replace(/\s*<notes>[\s\S]*?<\/notes>/g, '');

  output = output.replace(/<segment>([\s\S]*?)<\/segment>/g, (segment, inner) => {
    const sourceXml = (inner.match(/<source>([\s\S]*?)<\/source>/) ?? [])[1];
    if (sourceXml === undefined) return segment;

    // Collapse the whitespace the template formatter introduced, so lookups
    // match the single-line keys in translations.mjs.
    const key = unescapeXml(sourceXml).replace(/\s+/g, ' ').trim();
    const value = table[key];

    if (value === undefined) {
      missing.push(key);
      return segment;
    }

    translated++;
    return `<segment>\n          <source>${sourceXml}</source>\n          <target>${escapeXml(value)}</target>\n        </segment>`;
  });

  const path = join(LOCALE_DIR, `messages.${locale}.xlf`);
  await writeFile(path, output, 'utf8');

  console.log(`${locale}: ${translated} translated, ${missing.length} missing -> ${path}`);
  if (missing.length) {
    exitCode = 1;
    for (const key of missing) console.log(`   MISSING  ${key.slice(0, 110)}`);
  }
}

process.exit(exitCode);
