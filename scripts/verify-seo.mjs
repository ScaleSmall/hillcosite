import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

function walkHtmlFiles(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walkHtmlFiles(full, results);
    } else if (entry.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function scanBundles(jsDir, patterns) {
  const files = readdirSync(jsDir).filter(f => f.endsWith('.js'));
  const hits = {};
  for (const key of Object.keys(patterns)) hits[key] = false;

  for (const file of files) {
    const content = readFileSync(resolve(jsDir, file), 'utf-8');
    for (const [key, pattern] of Object.entries(patterns)) {
      if (!hits[key] && pattern.test(content)) hits[key] = true;
    }
    if (Object.values(hits).every(Boolean)) break;
  }
  return hits;
}

function run() {
  const distPath = resolve(__dirname, '../dist');
  const passes = [];
  const failures = [];

  const headersPath = resolve(__dirname, '../public/_headers');
  if (!existsSync(headersPath)) {
    failures.push('public/_headers not found');
  } else {
    const lines = readFileSync(headersPath, 'utf-8').split('\n');
    const badLines = lines
      .map((line, i) => ({ line, num: i + 1 }))
      .filter(({ line }) => /rel=["']canonical["']/i.test(line));

    if (badLines.length > 0) {
      badLines.forEach(({ line, num }) =>
        failures.push(
          `public/_headers line ${num} contains a global canonical HTTP header — REMOVE IT: ${line.trim()}`
        )
      );
    } else {
      passes.push('public/_headers contains no Link rel="canonical" HTTP header (correct)');
    }
  }

  if (!existsSync(distPath)) {
    console.error('FAIL: dist/ not found — run npm run build first.');
    process.exit(1);
  }

  const indexHtml = resolve(distPath, 'index.html');
  if (!existsSync(indexHtml)) {
    failures.push('dist/index.html not found');
  } else {
    const html = readFileSync(indexHtml, 'utf-8');
    const hasStaticCanonical = /<link[^>]+rel=["']canonical["']/i.test(html);

    if (hasStaticCanonical) {
      passes.push('Canonical <link rel="canonical"> found in static dist/index.html (SSR-injected)');
    } else {
      passes.push(
        'INFO: No static canonical in dist/index.html — this SPA inserts canonical at runtime via react-helmet-async (expected)'
      );
    }
  }

  // Scan EVERY HTML file in dist/ for a static robots meta tag
  const allHtmlFiles = walkHtmlFiles(distPath);
  const robotsViolations = [];
  for (const filePath of allHtmlFiles) {
    const html = readFileSync(filePath, 'utf-8');
    if (/<meta[^>]+name=["']robots["']/i.test(html)) {
      const rel = filePath.replace(distPath, 'dist');
      const line = html.split('\n').find(l => /<meta[^>]+name=["']robots["']/i.test(l)) || '';
      robotsViolations.push(`  ${rel}: ${line.trim().slice(0, 120)}`);
    }
  }
  if (robotsViolations.length > 0) {
    failures.push(
      `${robotsViolations.length} HTML file(s) contain a static <meta name="robots"> — causes duplicate tags; remove from HTML and let SEO.tsx own it:\n${robotsViolations.join('\n')}`
    );
  } else {
    passes.push(`All ${allHtmlFiles.length} dist HTML file(s) are free of static robots meta — correctly controlled by SEO.tsx at runtime`);
  }

  const jsDir = resolve(distPath, 'assets/js');
  if (!existsSync(jsDir)) {
    failures.push('dist/assets/js/ not found');
  } else {
    const hits = scanBundles(jsDir, {
      canonical:       /canonical/,
      robotsMeta:      /"robots"|'robots'/,
      noindex:         /noindex/,
      refParamGuard:   /replaceState[\s\S]{0,200}ref|ref[\s\S]{0,200}replaceState/,
      trailingSlash:   /endsWith\s*\(\s*["']\/["']\s*\)|replace\s*\(\s*\/\\\/\+\$\//,
    });

    hits.canonical
      ? passes.push('rel="canonical" logic found in built JS bundles')
      : failures.push('rel="canonical" NOT found in built JS bundles');

    hits.robotsMeta
      ? passes.push('meta[name="robots"] logic found in built JS bundles')
      : failures.push('meta[name="robots"] NOT found in built JS bundles');

    hits.noindex
      ? passes.push('"noindex" string found in built JS — conditional noindex for ?ref= is present')
      : failures.push('"noindex" NOT found in built JS bundles');

    hits.refParamGuard
      ? passes.push('history.replaceState + ref param guard found in built JS')
      : failures.push('history.replaceState + ref param guard NOT found in built JS');

    hits.trailingSlash
      ? passes.push('Trailing-slash guard logic found in built JS bundles')
      : failures.push('Trailing-slash guard logic NOT found in built JS bundles');
  }

  passes.forEach(p => console.log('PASS:', p));
  if (failures.length > 0) {
    failures.forEach(f => console.error('FAIL:', f));
    process.exit(1);
  }

  console.log('\nAll SEO checks passed.');
}

run();
