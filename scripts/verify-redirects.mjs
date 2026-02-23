import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CANONICAL_PAGES = [
  'about', 'services', 'blog', 'faq', 'gallery',
  'testimonials', 'contact', 'privacy'
];

function run() {
  const redirectsPath = resolve(__dirname, '../public/_redirects');

  if (!existsSync(redirectsPath)) {
    console.error('FAIL: public/_redirects not found');
    process.exit(1);
  }

  const content = readFileSync(redirectsPath, 'utf-8');
  const lines = content.split('\n');
  const failures = [];
  const passes = [];

  const activeLines = lines
    .map((line, i) => ({ raw: line.trim(), num: i + 1 }))
    .filter(({ raw }) => raw && !raw.startsWith('#'));

  // Check 1: No trailing-slash strip rules for canonical pages.
  // A trailing-slash strip rule matches: /page/ -> /page (same path, slash removed), 301.
  activeLines.forEach(({ raw, num }) => {
    const parts = raw.split(/\s+/);
    if (parts.length < 3) return;

    const from = parts[0];
    const to = parts[1];
    const status = parts[2].replace('!', '');

    if (status !== '301') return;
    if (!from.endsWith('/')) return;
    if (from.startsWith('https://') || from.startsWith('http://')) return;

    const fromWithoutSlash = from.slice(0, -1);
    if (to !== fromWithoutSlash) return;

    // It is a trailing-slash strip rule. Check if top-level segment is a canonical page.
    const topSegment = fromWithoutSlash.replace(/^\//, '').split('/')[0];
    if (CANONICAL_PAGES.includes(topSegment)) {
      failures.push(
        `Line ${num}: trailing-slash strip rule for canonical page "${topSegment}": ${from} -> ${to}`
      );
    }
  });

  if (failures.length === 0) {
    passes.push('No trailing-slash strip rules found for canonical pages (about, services, blog, faq, gallery, testimonials, contact, privacy)');
  }

  // Check 2: SPA fallback must be the last active rule.
  const last = activeLines[activeLines.length - 1];
  const isSpaFallback =
    last &&
    last.raw.startsWith('/*') &&
    last.raw.includes('/index.html') &&
    last.raw.includes('200');

  if (isSpaFallback) {
    passes.push(`SPA fallback is the last active rule (line ${last.num}): ${last.raw}`);
  } else {
    failures.push(
      `SPA fallback "/* /index.html 200" is NOT the last active rule. Found: "${last?.raw}" at line ${last?.num}`
    );
  }

  // Report
  passes.forEach(p => console.log('PASS:', p));
  if (failures.length > 0) {
    failures.forEach(f => console.error('FAIL:', f));
    process.exit(1);
  }

  console.log(`\nChecked ${activeLines.length} active redirect rules. All checks passed.`);
}

run();
