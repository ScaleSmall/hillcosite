import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function run() {
  const failures = [];
  const passes = [];

  // Check 1: _redirects exists and contains only Cloudflare Pages-valid rules.
  const redirectsPath = resolve(__dirname, '../public/_redirects');
  if (!existsSync(redirectsPath)) {
    failures.push('public/_redirects not found');
  } else {
    const content = readFileSync(redirectsPath, 'utf-8');
    const activeLines = content
      .split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('#'));

    const invalidHostRules = activeLines.filter(l => /^https?:\/\//i.test(l));
    if (invalidHostRules.length > 0) {
      failures.push(`Invalid absolute host rule(s) found in _redirects: ${invalidHostRules.join('; ')}`);
    } else {
      passes.push('No invalid absolute host rules in _redirects');
    }

    const legacyRedirectRules = activeLines
      .map((line, index) => ({ line, index: index + 1, parts: line.split(/\s+/) }))
      .filter(({ parts }) => parts.length >= 3 && parts[2] === '301');

    if (legacyRedirectRules.length < 18) {
      failures.push(`Expected at least 18 explicit legacy 301 rules in _redirects, found ${legacyRedirectRules.length}`);
    } else {
      passes.push(`Explicit legacy 301 rules present in _redirects (${legacyRedirectRules.length})`);
    }

    const badLegacyTargets = legacyRedirectRules.filter(({ parts }) => {
      const target = parts[1];
      return !target.startsWith('https://www.hillcopaint.com/');
    });

    if (badLegacyTargets.length > 0) {
      failures.push(`Legacy redirect target(s) must stay on https://www.hillcopaint.com: ${badLegacyTargets.map(item => item.line).join(', ')}`);
    } else {
      passes.push('Legacy redirect targets stay on the canonical host');
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
  const routesConfigPath = resolve(__dirname, '../public/_routes.json');
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

    if (
      content.includes("url.hostname.toLowerCase() !== 'www.hillcopaint.com'") &&
      content.includes("url.protocol = 'https'") &&
      content.includes("url.hostname = 'www.hillcopaint.com'")
    ) {
      passes.push('Middleware handles host/protocol canonicalization');
    } else {
      failures.push('Middleware missing canonical https://www.hillcopaint.com redirect handling');
    }
  }

  if (!existsSync(routesConfigPath)) {
    failures.push('public/_routes.json not found');
  } else if (existsSync(redirectsPath)) {
    const redirectsContent = readFileSync(redirectsPath, 'utf-8');
    const routesConfig = JSON.parse(readFileSync(routesConfigPath, 'utf-8'));
    const excludedRoutes = new Set(routesConfig.exclude || []);
    const staticRedirectSources = redirectsContent
      .split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('#'))
      .map(line => line.split(/\s+/)[0])
      .filter(Boolean);
    const missingExclusions = staticRedirectSources.filter(source => !excludedRoutes.has(source));

    if (missingExclusions.length > 0) {
      failures.push(`Static redirect source(s) missing from _routes.json exclude: ${missingExclusions.join(', ')}`);
    } else {
      passes.push('Static redirect sources are excluded from Functions routing');
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
