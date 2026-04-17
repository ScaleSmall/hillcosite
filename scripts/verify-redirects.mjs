import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function run() {
  const failures = [];
  const passes = [];

  // Check 1: _redirects exists and has host normalization rules
  const redirectsPath = resolve(__dirname, '../public/_redirects');
  if (!existsSync(redirectsPath)) {
    failures.push('public/_redirects not found');
  } else {
    const content = readFileSync(redirectsPath, 'utf-8');
    const activeLines = content
      .split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('#'));

    const hasHttpNonWww = activeLines.some(l => l.startsWith('http://hillcopaint.com/'));
    const hasHttpWww = activeLines.some(l => l.startsWith('http://www.hillcopaint.com/'));
    const hasHttpsNonWww = activeLines.some(l => l.startsWith('https://hillcopaint.com/'));

    if (hasHttpNonWww && hasHttpWww && hasHttpsNonWww) {
      passes.push('Host/protocol normalization rules present in _redirects');
    } else {
      failures.push('Missing host/protocol normalization rules in _redirects');
    }

    // Warn if SPA rewrites are still in _redirects (they should be in middleware now)
    const hasSpaFallback = activeLines.some(l => l.includes('/index.html') && l.includes('200'));
    if (hasSpaFallback) {
      failures.push('SPA rewrite rules found in _redirects — these should be handled by functions/_middleware.ts');
    } else {
      passes.push('No SPA rewrite rules in _redirects (correctly handled by middleware)');
    }
  }

  // Check 2: Middleware exists and has SPA route handling
  const middlewarePath = resolve(__dirname, '../functions/_middleware.ts');
  if (!existsSync(middlewarePath)) {
    failures.push('functions/_middleware.ts not found');
  } else {
    const content = readFileSync(middlewarePath, 'utf-8');

    if (content.includes('SPA_ROUTES') || content.includes('isSpaRoute')) {
      passes.push('Middleware contains SPA route table');
    } else {
      failures.push('Middleware missing SPA route handling (SPA_ROUTES / isSpaRoute)');
    }

    if (content.includes('env.ASSETS.fetch')) {
      passes.push('Middleware uses env.ASSETS.fetch for serving index.html');
    } else {
      failures.push('Middleware missing env.ASSETS.fetch — SPA routes may not be served');
    }

    if (content.includes('404')) {
      passes.push('Middleware has 404 fallback handling');
    } else {
      failures.push('Middleware missing 404 fallback');
    }
  }

  // Report
  passes.forEach(p => console.log('PASS:', p));
  if (failures.length > 0) {
    failures.forEach(f => console.error('FAIL:', f));
    process.exit(1);
  }

  console.log('\nAll routing checks passed.');
}

run();
