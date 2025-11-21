import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/about',
  '/services',
  '/services/interior-painting',
  '/services/exterior-painting',
  '/services/cabinet-refinishing',
  '/services/commercial',
  '/gallery',
  '/testimonials',
  '/faq',
  '/service-areas',
  '/service-areas/round-rock-georgetown',
  '/service-areas/pflugerville-wells-branch',
  '/service-areas/cedar-park',
  '/service-areas/taylor-hutto',
  '/service-areas/leander',
  '/service-areas/west-lake-hills',
  '/color-consultation',
  '/contact',
  '/guides/painting-costs-round-rock',
  '/guides/best-paint-texas-heat',
  '/guides/hoa-color-tips-round-rock',
  '/guides/how-often-paint-central-texas',
  '/privacy',
  '/terms',
  '/do-not-sell',
];

const distPath = path.resolve(__dirname, '../dist');
const port = 4173;

async function startPreview() {
  const { spawn } = await import('child_process');
  return new Promise((resolve, reject) => {
    const preview = spawn('npx', ['vite', 'preview', '--port', String(port), '--strictPort'], {
      stdio: 'pipe',
      shell: true
    });

    preview.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('localhost')) {
        setTimeout(() => resolve(preview), 2000);
      }
    });

    preview.stderr.on('data', (data) => {
      console.error(`Preview error: ${data}`);
    });

    preview.on('error', reject);

    setTimeout(() => reject(new Error('Preview server timeout')), 30000);
  });
}

async function prerender() {
  console.log('Starting prerendering process...\n');

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

    for (const route of routes) {
      const url = `http://localhost:${port}${route}`;
      console.log(`Prerendering: ${route}`);

      try {
        await page.goto(url, {
          waitUntil: 'networkidle0',
          timeout: 30000
        });

        await page.waitForFunction(() => {
          return document.querySelector('h1') !== null;
        }, { timeout: 10000 }).catch(() => {
          console.log(`  Warning: No H1 found for ${route}, continuing...`);
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        const html = await page.content();

        const outputPath = route === '/'
          ? path.join(distPath, 'index.html')
          : path.join(distPath, route.slice(1), 'index.html');

        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, html, 'utf-8');

        console.log(`  ✓ Saved to ${outputPath}`);
      } catch (error) {
        console.error(`  ✗ Failed to prerender ${route}:`, error.message);
      }
    }

    console.log('\n✓ Prerendering complete!');
  } catch (error) {
    console.error('Prerendering failed:', error);
    process.exit(1);
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
