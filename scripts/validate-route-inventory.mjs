#!/usr/bin/env node
/**
 * Route Inventory Validation Script
 *
 * Ensures consistency between:
 * 1. src/config/routes.ts (advertised routes)
 * 2. src/App.tsx (mounted routes)
 * 3. scripts/generate-sitemap.mjs (sitemap routes)
 *
 * Fails the build if any mismatch is detected.
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

let hasErrors = false;

function error(msg) {
  console.error(`\x1b[31mERROR:\x1b[0m ${msg}`);
  hasErrors = true;
}

function success(msg) {
  console.log(`\x1b[32m✓\x1b[0m ${msg}`);
}

function warn(msg) {
  console.log(`\x1b[33mWARN:\x1b[0m ${msg}`);
}

function extractPathsFromRoutesTsContent(content) {
  const paths = [];
  const staticRoutesMatch = content.match(/export const staticRoutes\s*=\s*\[([\s\S]*?)\];/);
  if (staticRoutesMatch) {
    const pathMatches = staticRoutesMatch[1].matchAll(/path:\s*['"]([^'"]+)['"]/g);
    for (const match of pathMatches) {
      paths.push(match[1]);
    }
  }
  return paths;
}

function extractPathsFromAppTsx(content) {
  const paths = [];
  const routeMatches = content.matchAll(/<Route\s+path="([^"]+)"/g);
  for (const match of routeMatches) {
    const path = match[1];
    if (path !== '*' && !path.includes(':')) {
      paths.push(path);
    }
  }
  return paths;
}

function extractPathsFromSitemapMjs(content) {
  const paths = [];

  const serviceLocationMatch = content.match(/const serviceLocationPages\s*=\s*\[([\s\S]*?)\];/);
  if (serviceLocationMatch) {
    const pathMatches = serviceLocationMatch[1].matchAll(/path:\s*['"]([^'"]+)['"]/g);
    for (const match of pathMatches) {
      paths.push(match[1]);
    }
  }

  const routesMatch = content.match(/const routes\s*=\s*\[([\s\S]*?)\];/);
  if (routesMatch) {
    const pathMatches = routesMatch[1].matchAll(/path:\s*['"]([^'"]+)['"]/g);
    for (const match of pathMatches) {
      paths.push(match[1]);
    }
  }

  return [...new Set(paths)];
}

console.log('\n=== Route Inventory Validation ===\n');

const routesTsPath = resolve(projectRoot, 'src/config/routes.ts');
const appTsxPath = resolve(projectRoot, 'src/App.tsx');
const sitemapMjsPath = resolve(projectRoot, 'scripts/generate-sitemap.mjs');

if (!existsSync(routesTsPath)) {
  error(`routes.ts not found at ${routesTsPath}`);
  process.exit(1);
}
if (!existsSync(appTsxPath)) {
  error(`App.tsx not found at ${appTsxPath}`);
  process.exit(1);
}
if (!existsSync(sitemapMjsPath)) {
  error(`generate-sitemap.mjs not found at ${sitemapMjsPath}`);
  process.exit(1);
}

const routesTsContent = readFileSync(routesTsPath, 'utf-8');
const appTsxContent = readFileSync(appTsxPath, 'utf-8');
const sitemapMjsContent = readFileSync(sitemapMjsPath, 'utf-8');

const routesTsPaths = extractPathsFromRoutesTsContent(routesTsContent);
const appTsxPaths = extractPathsFromAppTsx(appTsxContent);
const sitemapPaths = extractPathsFromSitemapMjs(sitemapMjsContent);

const appTsxSet = new Set(appTsxPaths);
const sitemapSet = new Set(sitemapPaths);
const routesTsSet = new Set(routesTsPaths);

console.log('1. Checking routes.ts paths are mounted in App.tsx...');
const unmountedFromRouteTs = routesTsPaths.filter(p => !appTsxSet.has(p));
if (unmountedFromRouteTs.length > 0) {
  error(`${unmountedFromRouteTs.length} paths in routes.ts are NOT mounted in App.tsx:`);
  unmountedFromRouteTs.forEach(p => console.log(`   - ${p}`));
} else {
  success(`All ${routesTsPaths.length} staticRoutes paths in routes.ts are mounted in App.tsx`);
}

console.log('\n2. Checking sitemap paths are mounted in App.tsx...');
const servicePaths = sitemapPaths.filter(p =>
  p.startsWith('/interior-') ||
  p.startsWith('/exterior-') ||
  p.startsWith('/cabinet-') ||
  p.startsWith('/commercial-painting-')
);
const unmountedFromSitemap = servicePaths.filter(p => !appTsxSet.has(p));
if (unmountedFromSitemap.length > 0) {
  error(`${unmountedFromSitemap.length} service-location paths in sitemap are NOT mounted in App.tsx:`);
  unmountedFromSitemap.forEach(p => console.log(`   - ${p}`));
} else {
  success(`All ${servicePaths.length} service-location paths in sitemap are mounted in App.tsx`);
}

console.log('\n3. Checking routes.ts and sitemap service-location pages match...');
const routesTsServicePaths = routesTsPaths.filter(p =>
  p.startsWith('/interior-') ||
  p.startsWith('/exterior-') ||
  p.startsWith('/cabinet-') ||
  p.startsWith('/commercial-painting-')
);

const inRoutesTsNotSitemap = routesTsServicePaths.filter(p => !sitemapSet.has(p));
const inSitemapNotRoutesTs = servicePaths.filter(p => !routesTsSet.has(p));

if (inRoutesTsNotSitemap.length > 0) {
  warn(`${inRoutesTsNotSitemap.length} service-location paths in routes.ts but not in sitemap:`);
  inRoutesTsNotSitemap.forEach(p => console.log(`   - ${p}`));
}

if (inSitemapNotRoutesTs.length > 0) {
  warn(`${inSitemapNotRoutesTs.length} service-location paths in sitemap but not in routes.ts:`);
  inSitemapNotRoutesTs.forEach(p => console.log(`   - ${p}`));
}

if (inRoutesTsNotSitemap.length === 0 && inSitemapNotRoutesTs.length === 0) {
  success(`routes.ts and sitemap service-location pages are in sync (${routesTsServicePaths.length} pages)`);
}

console.log('\n=== Summary ===');
console.log(`routes.ts static paths: ${routesTsPaths.length}`);
console.log(`App.tsx mounted routes: ${appTsxPaths.length}`);
console.log(`Sitemap static paths: ${sitemapPaths.length}`);
console.log(`Service-location pages: ${servicePaths.length}`);

if (hasErrors) {
  console.log('\n\x1b[31mValidation FAILED\x1b[0m - Fix the above errors before committing.\n');
  process.exit(1);
} else {
  console.log('\n\x1b[32mValidation PASSED\x1b[0m - Route inventory is consistent.\n');
  process.exit(0);
}
