import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllRoutePaths } from '../src/config/routeData.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = getAllRoutePaths();

const distPath = path.resolve(__dirname, '../dist');
const port = 4173;

function escapeAttribute(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function withSelfCanonical(html, route) {
  const canonicalUrl = route === '/'
    ? 'https://www.hillcopaint.com/'
    : `https://www.hillcopaint.com${route}`;
  const canonicalTag = `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}">`;

  const withoutCanonicals = html.replace(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>\s*/gi, '');
  return withoutCanonicals.replace(/<\/head>/i, `${canonicalTag}\n</head>`);
}

async function startPreview() {
  const { spawn } = await import('child_process');
  const viteBin = path.resolve(__dirname, '../node_modules/vite/bin/vite.js');
  const preview = spawn(process.execPath, [viteBin, 'preview', '--port', String(port), '--strictPort'], {
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
        const response = await fetch(`http://127.0.0.1:${port}/`);
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

async function prerender() {
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
      const url = `http://localhost:${port}${route}`;
      console.log(`Prerendering: ${route}`);

      try {
        await page.goto(url, {
          waitUntil: 'domcontentloaded',
          timeout: 30000
        });

        await page.waitForFunction(() => {
          return document.body && document.body.textContent.trim().length > 500;
        }, { timeout: 5000 });

        const html = withSelfCanonical(await page.content(), route);

        if (!/<h1[\s>]/i.test(html)) {
          console.log(`  Warning: No H1 found for ${route}, continuing...`);
        }

        const outputPath = route === '/'
          ? path.join(distPath, 'index.html')
          : path.join(distPath, route.slice(1), 'index.html');

        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, html, 'utf-8');

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
