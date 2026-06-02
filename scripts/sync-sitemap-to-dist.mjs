#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicSitemapPath = resolve(projectRoot, 'public/sitemap.xml');
const distSitemapPath = resolve(projectRoot, 'dist/sitemap.xml');

if (!existsSync(publicSitemapPath)) {
  console.error(`Missing generated sitemap at ${publicSitemapPath}`);
  process.exit(1);
}

mkdirSync(dirname(distSitemapPath), { recursive: true });
copyFileSync(publicSitemapPath, distSitemapPath);

const publicSitemap = readFileSync(publicSitemapPath, 'utf8');
const distSitemap = readFileSync(distSitemapPath, 'utf8');

if (publicSitemap !== distSitemap) {
  console.error('dist/sitemap.xml does not match public/sitemap.xml after sync');
  process.exit(1);
}

const urlCount = (publicSitemap.match(/<loc>/g) || []).length;
console.log(`Synced sitemap to dist/sitemap.xml (${urlCount} URLs)`);
