import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getPrerenderPaths } from '../src/config/routeData.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');
const port = 4173;
const previewHost = '127.0.0.1';

function escapeAttribute(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function withSelfCanonical(html, route) {
  const canonicalUrl = expectedCanonicalUrl(route);
  const canonicalTag = `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}">`;

  const withoutCanonicals = html.replace(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>\s*/gi, '');
  return withoutCanonicals.replace(/<\/head>/i, `${canonicalTag}\n</head>`);
}

function expectedCanonicalUrl(route) {
  return route === '/'
    ? 'https://www.hillcopaint.com/'
    : `https://www.hillcopaint.com${route}`;
}

async function waitForHeadReady(page, route) {
  if (route !== '/') {
    return;
  }

  const canonicalUrl = expectedCanonicalUrl(route);

  await page.waitForFunction((expectedCanonical) => {
    const canonical = document.querySelector('link[rel="canonical"]')?.href || '';
    const description = document.querySelector('meta[name="description"]')?.content || '';
    const title = document.title || '';

    if (canonical !== expectedCanonical || description.trim().length < 50 || title.trim().length < 10) {
      return false;
    }

    const jsonLdText = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
      .map(script => script.textContent || '')
      .join('\n');

    return jsonLdText.includes('#localbusiness')
      && jsonLdText.includes('#organization')
      && jsonLdText.includes('#website')
      && jsonLdText.includes('hasOfferCatalog');
  }, { timeout: 15000 }, canonicalUrl);
}

function getAttribute(tag, attributeName) {
  const attributeRegex = new RegExp(`\\b${attributeName}\\s*=\\s*["']([^"']+)["']`, 'i');
  const match = tag.match(attributeRegex);
  return match ? match[1].trim().toLowerCase() : '';
}

function getDedupeMetaKey(tag) {
  const name = getAttribute(tag, 'name');
  const property = getAttribute(tag, 'property');

  if (name) {
    return `name:${name}`;
  }

  if (property) {
    return `property:${property}`;
  }

  return '';
}

function withDedupedHeadMeta(html) {
  const dedupeKeys = new Set([
    'name:description',
    'name:keywords',
    'name:robots',
    'name:googlebot',
    'name:bingbot',
    'name:twitter:card',
    'name:twitter:url',
    'name:twitter:title',
    'name:twitter:description',
    'name:twitter:image',
    'name:twitter:image:alt',
    'property:og:type',
    'property:og:url',
    'property:og:title',
    'property:og:description',
    'property:og:image',
    'property:og:image:width',
    'property:og:image:height',
    'property:og:image:alt',
    'property:og:site_name',
    'property:og:locale'
  ]);

  const metaRegex = /<meta\b[^>]*>\s*/gi;
  const lastOffsetByKey = new Map();

  for (const match of html.matchAll(metaRegex)) {
    const key = getDedupeMetaKey(match[0]);
    if (dedupeKeys.has(key)) {
      lastOffsetByKey.set(key, match.index);
    }
  }

  return html.replace(metaRegex, (tag, offset) => {
    const key = getDedupeMetaKey(tag);
    if (dedupeKeys.has(key) && lastOffsetByKey.get(key) !== offset) {
      return '';
    }
    return tag;
  });
}

async function startPreview() {
  const { spawn } = await import('child_process');
  const viteBin = path.resolve(__dirname, '../node_modules/vite/bin/vite.js');
  const preview = spawn(process.execPath, [viteBin, 'preview', '--host', previewHost, '--port', String(port), '--strictPort'], {
    stdio: 'pipe',
    shell: false
  });

  preview.stdout.on('data', (data) => {
    process.stdout.write(data.toString());
  });

  preview.stderr.on('data', (data) => {
    console.error(`Preview error: ${data}`);
  });

  return new Promise((resolve, reject) => {
    preview.on('error', reject);

    const startedAt = Date.now();
    const check = async () => {
      try {
        const response = await fetch(`http://${previewHost}:${port}/`);
        if (response.ok) {
          setTimeout(() => resolve(preview), 500);
          return;
        }
      } catch {
        // Keep polling until timeout.
      }

      if (Date.now() - startedAt > 30000) {
        preview.kill();
        reject(new Error('Preview server timeout'));
        return;
      }

      setTimeout(check, 500);
    };

    check();
  });
}

async function getRoutesToPrerender() {
  const routes = new Set(getPrerenderPaths());
  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

  try {
    const sitemap = await fs.readFile(sitemapPath, 'utf-8');
    const locRegex = /<loc>https:\/\/www\.hillcopaint\.com([^<]*)<\/loc>/g;

    for (const match of sitemap.matchAll(locRegex)) {
      routes.add(match[1] || '/');
    }
  } catch (error) {
    console.warn(`Warning: Could not read sitemap for prerender routes: ${error.message}`);
  }

  return Array.from(routes).sort((a, b) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  });
}

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function writeFileWithRetry(filePath, content, attempts = 5) {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      await fs.writeFile(filePath, content, 'utf-8');
      return;
    } catch (error) {
      if (!['EBUSY', 'EPERM', 'EACCES'].includes(error.code) || attempt === attempts) {
        throw error;
      }

      await wait(attempt * 250);
    }
  }
}

async function prerender() {
  const routes = await getRoutesToPrerender();

  console.log('Starting prerendering process...\n');
  console.log(`Found ${routes.length} routes to prerender\n`);

  let previewServer;
  let browser;

  try {
    console.log('Starting preview server...');
    previewServer = await startPreview();
    console.log('Preview server started\n');

    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    console.log('Browser launched\n');

    const page = await browser.newPage();
    const failedRoutes = [];

    for (const route of routes) {
      const url = `http://${previewHost}:${port}${route}`;
      console.log(`Prerendering: ${route}`);

      try {
        await page.goto(url, {
          waitUntil: 'domcontentloaded',
          timeout: 30000
        });

        const requiresContentHeading = route === '/blog' || route.startsWith('/blog/');
        await page.waitForFunction((requiresHeading) => {
          const text = document.body?.textContent || '';
          const isLoading = /Loading (post|posts|projects|gallery|results)\.\.\./i.test(text);
          return !isLoading && (!requiresHeading || document.querySelector('h1')) && text.trim().length > 500;
        }, { timeout: 15000 }, requiresContentHeading);
        await waitForHeadReady(page, route);

        const html = withSelfCanonical(withDedupedHeadMeta(await page.content()), route);

        if (!/<h1[\s>]/i.test(html)) {
          console.log(`  Warning: No H1 found for ${route}, continuing...`);
        }

        const outputPath = route === '/'
          ? path.join(distPath, 'index.html')
          : path.join(distPath, route.slice(1), 'index.html');

        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await writeFileWithRetry(outputPath, html);

        console.log(`  ✓ Saved to ${outputPath}`);
      } catch (error) {
        console.error(`  ✗ Failed to prerender ${route}:`, error.message);
        failedRoutes.push({ route, error: error.message });
      }
    }

    if (failedRoutes.length > 0) {
      console.error(`\n✗ ${failedRoutes.length} routes failed to prerender:`);
      failedRoutes.forEach(({ route, error }) => console.error(`  - ${route}: ${error}`));
      throw new Error('Prerender failed for one or more routes');
    }

    console.log('\n✓ Prerendering complete!');
  } catch (error) {
    console.error('Prerendering failed:', error);
    process.exitCode = 1;
  } finally {
    if (browser) {
      await browser.close();
    }
    if (previewServer) {
      previewServer.kill();
    }
  }
}

prerender();
