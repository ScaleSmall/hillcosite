#!/usr/bin/env node
import puppeteer from 'puppeteer';

const baseUrl = (process.env.HILLCO_CANONICAL_UAT_BASE_URL || 'https://www.hillcopaint.com').replace(/\/+$/, '');
const failures = [];

function fail(message) {
  failures.push(message);
  console.error(`FAIL: ${message}`);
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function urlFor(path) {
  return `${baseUrl}${path}`;
}

async function waitForUrl(page, predicate, label) {
  const deadline = Date.now() + 15000;

  while (Date.now() < deadline) {
    const href = await page.evaluate(() => window.location.href);
    if (predicate(href)) return;
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  fail(`Timed out waiting for expected client-side URL state after loading ${label}`);
}

async function load(page, path, waitForUrlPredicate = null) {
  const target = urlFor(path);
  await page.goto(target, { waitUntil: 'networkidle2', timeout: 45000 });
  await page.waitForSelector('link[rel="canonical"]', { timeout: 15000 });

  if (waitForUrlPredicate) {
    await waitForUrl(page, waitForUrlPredicate, target);
  }

  await page.waitForFunction(
    () => Boolean(document.querySelector('meta[name="robots"]')?.getAttribute('content')),
    { timeout: 15000 }
  );

  return page.evaluate(() => ({
    href: window.location.href,
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    title: document.title,
    canonical: document.querySelector('link[rel="canonical"]')?.href || '',
    canonicalOuterHtml: document.querySelector('link[rel="canonical"]')?.outerHTML || '',
    canonicalCount: document.querySelectorAll('link[rel="canonical"]').length,
    robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
  }));
}

function hasIndexFollow(robots) {
  return /\bindex\b/i.test(robots) && /\bfollow\b/i.test(robots) && !/\bnoindex\b/i.test(robots);
}

function hasNoindexFollow(robots) {
  return /\bnoindex\b/i.test(robots) && /\bfollow\b/i.test(robots) && !/\bnofollow\b/i.test(robots);
}

async function checkRefCanonical(page) {
  const state = await load(
    page,
    '/services/interior-painting?ref=test&utm_source=google#section',
    href => !href.includes('ref=')
  );

  assert(state.canonical === urlFor('/services/interior-painting'), 'ref URL canonical must resolve to the clean service URL');
  assert(!state.canonical.includes('?') && !state.canonical.includes('#'), 'canonical must not include query string or hash');
  assert(state.href === urlFor('/services/interior-painting?utm_source=google#section'), 'ref param must be stripped while other params and hash remain');
  assert(state.canonicalCount === 1, 'page must have exactly one canonical link');

  if (failures.length === 0) pass('Canonical excludes ref/query/hash while preserving non-ref tracking state in the address bar');
}

async function checkRobots(page) {
  const ref = await load(page, '/about?ref=partner', href => !href.includes('ref='));
  assert(hasNoindexFollow(ref.robots), 'about page with ref must be noindex, follow');
  assert(ref.search === '', 'about page ref query must be stripped after load');

  const clean = await load(page, '/about');
  assert(hasIndexFollow(clean.robots), 'about page without ref must stay indexable');

  const utm = await load(page, '/about?utm_source=google');
  assert(hasIndexFollow(utm.robots), 'about page with non-ref tracking must stay indexable');
  assert(utm.search === '?utm_source=google', 'non-ref tracking query must remain in the address bar');

  const upper = await load(page, '/about?REF=partner', href => !href.includes('REF='));
  assert(hasNoindexFollow(upper.robots), 'uppercase REF query must be treated as ref and noindexed');
  assert(upper.search === '', 'uppercase REF query must be stripped after load');

  if (failures.length === 0) pass('Robots behavior matches ref/no-ref indexing rules');
}

async function checkTrailingSlash(page) {
  const privacy = await load(
    page,
    '/privacy/?utm_source=email#section2',
    href => new URL(href).pathname === '/privacy'
  );
  assert(privacy.pathname === '/privacy', 'privacy trailing slash must normalize to /privacy');
  assert(privacy.search === '?utm_source=email', 'privacy trailing slash normalization must preserve query');
  assert(privacy.hash === '#section2', 'privacy trailing slash normalization must preserve hash');
  assert(/privacy/i.test(privacy.title) && !/404|not found/i.test(privacy.title), 'privacy route must render the privacy page, not a 404');

  const blog = await load(page, '/blog/', href => new URL(href).pathname === '/blog');
  assert(blog.pathname === '/blog', 'blog trailing slash must normalize to /blog');
  assert(!/404|not found/i.test(blog.title), 'blog route must render the blog page, not a 404');

  if (failures.length === 0) pass('Trailing slash normalization preserves query/hash and renders canonical routes');
}

async function checkRuntimeCanonical(page) {
  const state = await load(page, '/services/interior-painting');
  assert(state.canonicalOuterHtml.includes('rel="canonical"'), 'runtime canonical link must be present');
  assert(
    state.canonicalOuterHtml.includes('data-rh="true"') || state.canonicalOuterHtml.includes('data-seo-runtime="true"'),
    'runtime canonical must be owned by Helmet or the SEO runtime updater'
  );
  assert(state.canonical === urlFor('/services/interior-painting'), 'runtime canonical must match the current canonical route');

  if (failures.length === 0) pass('Runtime canonical tag is present and owned by the SEO metadata layer');
}

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    page.setDefaultTimeout(45000);
    await page.setViewport({ width: 1366, height: 900 });

    await checkRefCanonical(page);
    await checkRobots(page);
    await checkTrailingSlash(page);
    await checkRuntimeCanonical(page);
  } finally {
    await browser.close();
  }

  if (failures.length) {
    console.error(`\nManual canonical UAT FAILED with ${failures.length} issue(s).`);
    process.exit(1);
  }

  console.log('\nManual canonical UAT passed.');
}

main().catch(error => {
  console.error(`Manual canonical UAT crashed: ${error?.message || error}`);
  process.exit(1);
});
