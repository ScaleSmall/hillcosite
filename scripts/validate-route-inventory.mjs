#!/usr/bin/env node
/**
 * Route Inventory Validation Script
 *
 * Ensures consistency between:
 * 1. src/config/routeData.mjs (canonical route inventory)
 * 2. src/App.tsx (mounted routes)
 * 3. src/pages/locations/*.tsx (service-location page files)
 * 4. public/_redirects (redirect targets)
 * 5. public/sitemap.xml (sitemap URLs)
 * 7. src/config/canonicalMappings.ts (canonical mapping state)
 * 8. src/config/routes.ts (must not duplicate route arrays)
 *
 * Fails the build if any mismatch is detected.
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  getAllRoutePaths,
  getServiceLocationPaths,
  geoAreas
} from '../src/config/routeData.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

let hasErrors = false;
let hasWarnings = false;

function error(msg) {
  console.error(`\x1b[31mERROR:\x1b[0m ${msg}`);
  hasErrors = true;
}

function success(msg) {
  console.log(`\x1b[32m✓\x1b[0m ${msg}`);
}

function warn(msg) {
  console.log(`\x1b[33mWARN:\x1b[0m ${msg}`);
  hasWarnings = true;
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

function extractRedirectTargets(redirectsContent) {
  const targets = [];
  const lines = redirectsContent.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const parts = trimmed.split(/\s+/);
    if (parts.length >= 2) {
      let target = parts[1];
      if (target.startsWith('https://www.hillcopaint.com')) {
        target = target.replace('https://www.hillcopaint.com', '');
      }
      if (target.startsWith('/') && !target.includes(':') && target !== '/index.html') {
        targets.push({ target, line: trimmed });
      }
    }
  }
  return targets;
}

function extractSitemapPaths(sitemapContent) {
  const paths = [];
  const locRegex = /<loc>https:\/\/www\.hillcopaint\.com([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    paths.push(match[1]);
  }
  return paths;
}

function getLocationFileNames() {
  const locationsDir = resolve(projectRoot, 'src/pages/locations');
  if (!existsSync(locationsDir)) return [];
  return readdirSync(locationsDir)
    .filter(f => f.endsWith('.tsx'))
    .map(f => f.replace('.tsx', ''));
}

function componentNameToPath(componentName) {
  const mapping = {
    'InteriorPaintingAustin': '/interior-painting-austin',
    'InteriorPaintingTarrytown': '/interior-painting-tarrytown',
    'InteriorPaintingNorthwestHills': '/interior-painting-northwest-hills',
    'InteriorPaintingWestLakeHills': '/interior-painting-west-lake-hills',
    'InteriorPaintingWestLakeHighlands': '/interior-painting-west-lake-highlands',
    'InteriorPaintingLakeway': '/interior-painting-lakeway',
    'ExteriorPaintingAustin': '/exterior-painting-austin',
    'ExteriorPaintingTarrytown': '/exterior-painting-tarrytown',
    'ExteriorPaintingNorthwestHills': '/exterior-painting-northwest-hills',
    'ExteriorPaintingWestLakeHills': '/exterior-painting-west-lake-hills',
    'ExteriorPaintingWestLakeHighlands': '/exterior-painting-west-lake-highlands',
    'ExteriorPaintingLakeway': '/exterior-painting-lakeway',
    'CabinetRefinishingAustin': '/cabinet-refinishing-austin',
    'CabinetRefinishingTarrytown': '/cabinet-refinishing-tarrytown',
    'CabinetRefinishingNorthwestHills': '/cabinet-refinishing-northwest-hills',
    'CabinetRefinishingWestLakeHills': '/cabinet-refinishing-west-lake-hills',
    'CabinetRefinishingWestLakeHighlands': '/cabinet-refinishing-west-lake-highlands',
    'CabinetRefinishingLakeway': '/cabinet-refinishing-lakeway',
    'CommercialPaintingAustin': '/commercial-painting-austin',
    'CommercialPaintingTarrytown': '/commercial-painting-tarrytown',
    'CommercialPaintingNorthwestHills': '/commercial-painting-northwest-hills',
    'CommercialPaintingWestLakeHills': '/commercial-painting-west-lake-hills',
    'CommercialPaintingWestLakeHighlands': '/commercial-painting-west-lake-highlands',
    'CommercialPaintingLakeway': '/commercial-painting-lakeway',
  };
  return mapping[componentName] || null;
}

function getAllValidPaths(appTsxPaths) {
  const paths = new Set(appTsxPaths);
  geoAreas.forEach(area => {
    paths.add(`/areas/${area.hub}`);
    area.neighborhoods.forEach(n => paths.add(`/areas/${area.hub}/${n}`));
  });
  return paths;
}

console.log('\n=== Route Inventory Validation ===\n');

const appTsxPath = resolve(projectRoot, 'src/App.tsx');
const redirectsPath = resolve(projectRoot, 'public/_redirects');
const sitemapPath = resolve(projectRoot, 'public/sitemap.xml');
const canonicalMappingsPath = resolve(projectRoot, 'src/config/canonicalMappings.ts');
const routesTsPath = resolve(projectRoot, 'src/config/routes.ts');

if (!existsSync(appTsxPath)) {
  error(`App.tsx not found at ${appTsxPath}`);
  process.exit(1);
}

const appTsxContent = readFileSync(appTsxPath, 'utf-8');
const appTsxPaths = extractPathsFromAppTsx(appTsxContent);
const appTsxSet = new Set(appTsxPaths);

const routeDataPaths = getAllRoutePaths();
const routeDataSet = new Set(routeDataPaths);

const serviceLocationPaths = getServiceLocationPaths();
const serviceLocationSet = new Set(serviceLocationPaths);

console.log('1. Checking routeData.mjs paths are mounted in App.tsx...');
const unmountedFromRouteData = routeDataPaths.filter(p => !appTsxSet.has(p));
if (unmountedFromRouteData.length > 0) {
  error(`${unmountedFromRouteData.length} paths in routeData.mjs are NOT mounted in App.tsx:`);
  unmountedFromRouteData.forEach(p => console.log(`   - ${p}`));
} else {
  success(`All ${routeDataPaths.length} paths in routeData.mjs are mounted in App.tsx`);
}

console.log('\n2. Checking service-location pages have backing files...');
const locationFiles = getLocationFileNames();
const locationFilePaths = locationFiles.map(componentNameToPath).filter(Boolean);
const locationFilePathSet = new Set(locationFilePaths);

const missingFiles = serviceLocationPaths.filter(p => !locationFilePathSet.has(p));
if (missingFiles.length > 0) {
  error(`${missingFiles.length} service-location routes have no backing file:`);
  missingFiles.forEach(p => console.log(`   - ${p}`));
} else {
  success(`All ${serviceLocationPaths.length} service-location routes have backing files`);
}

console.log('\n3. Checking redirect targets in _redirects...');
if (existsSync(redirectsPath)) {
  const redirectsContent = readFileSync(redirectsPath, 'utf-8');
  const redirectTargets = extractRedirectTargets(redirectsContent);

  const validTargetPaths = getAllValidPaths(appTsxPaths);
  validTargetPaths.add('/');
  validTargetPaths.add('/index.html');

  const invalidTargets = redirectTargets.filter(({ target }) => {
    if (target.includes(':splat')) return false;
    if (target.includes(':ref')) return false;
    return !validTargetPaths.has(target);
  });

  if (invalidTargets.length > 0) {
    warn(`${invalidTargets.length} redirect targets may point to unmounted routes:`);
    invalidTargets.forEach(({ target }) => console.log(`   - ${target}`));
  } else {
    success(`All redirect targets in _redirects are valid`);
  }
} else {
  warn('_redirects file not found');
}

console.log('\n4. Checking sitemap.xml paths match mounted routes...');
if (existsSync(sitemapPath)) {
  const sitemapContent = readFileSync(sitemapPath, 'utf-8');
  const sitemapPaths = extractSitemapPaths(sitemapContent);

  const validPaths = getAllValidPaths(appTsxPaths);
  const invalidSitemapPaths = sitemapPaths.filter(p => {
    if (p.startsWith('/blog/')) return false;
    return !validPaths.has(p);
  });

  if (invalidSitemapPaths.length > 0) {
    error(`${invalidSitemapPaths.length} sitemap URLs do not match mounted routes:`);
    invalidSitemapPaths.forEach(p => console.log(`   - ${p}`));
  } else {
    const nonBlogPaths = sitemapPaths.filter(p => !p.startsWith('/blog/'));
    success(`All ${nonBlogPaths.length} non-blog sitemap URLs match mounted routes`);
  }
} else {
  warn('sitemap.xml not found - will be generated during build');
}

console.log('\n5. Checking canonicalMappings.ts state...');
if (existsSync(canonicalMappingsPath)) {
  const canonicalContent = readFileSync(canonicalMappingsPath, 'utf-8');

  const serviceAreaMatch = canonicalContent.match(/serviceAreaCanonicals\s*:\s*CanonicalMapping\[\]\s*=\s*\[([\s\S]*?)\];/);
  const serviceLocationMatch = canonicalContent.match(/serviceLocationCanonicals\s*:\s*CanonicalMapping\[\]\s*=\s*\[([\s\S]*?)\];/);

  const serviceAreaEmpty = !serviceAreaMatch || serviceAreaMatch[1].trim() === '';
  const serviceLocationEmpty = !serviceLocationMatch || serviceLocationMatch[1].trim() === '';

  const cedarParkToLeander = canonicalContent.includes('cedar-park') && canonicalContent.includes('leander');
  const huttoToTaylor = canonicalContent.includes('hutto') && canonicalContent.includes('taylor');

  if (cedarParkToLeander && serviceAreaEmpty) {
    warn('Code mentions cedar-park/leander but arrays are empty - no active mapping');
  }

  if (huttoToTaylor && serviceAreaEmpty) {
    warn('Code mentions hutto/taylor but arrays are empty - no active mapping');
  }

  if (serviceAreaEmpty && serviceLocationEmpty) {
    success('canonicalMappings.ts has empty arrays (no active mappings)');
  } else {
    warn('canonicalMappings.ts has active mappings - ensure docs reflect this');
  }
} else {
  warn('canonicalMappings.ts not found');
}

console.log('\n6. Checking routes.ts does not duplicate route inventory...');
if (existsSync(routesTsPath)) {
  const routesTsContent = readFileSync(routesTsPath, 'utf-8');

  const hasStaticRoutesArray = /export\s+const\s+staticRoutes\s*=\s*\[/.test(routesTsContent);
  const hasCoreStaticRoutesArray = /export\s+const\s+coreStaticRoutes\s*=\s*\[/.test(routesTsContent);
  const hasServiceLocationArray = /export\s+const\s+serviceLocationPages\s*=\s*\[/.test(routesTsContent);
  const hasGeoAreasArray = /export\s+const\s+geoAreas\s*=\s*\[/.test(routesTsContent);

  const hasDuplication = hasStaticRoutesArray || hasCoreStaticRoutesArray || hasServiceLocationArray || hasGeoAreasArray;

  if (hasDuplication) {
    error('routes.ts contains hardcoded route arrays - must import from routeData.mjs');
    if (hasStaticRoutesArray) console.log('   - Found: staticRoutes array');
    if (hasCoreStaticRoutesArray) console.log('   - Found: coreStaticRoutes array');
    if (hasServiceLocationArray) console.log('   - Found: serviceLocationPages array');
    if (hasGeoAreasArray) console.log('   - Found: geoAreas array');
  } else {
    success('routes.ts is a pure re-export layer (no duplicated arrays)');
  }
} else {
  warn('routes.ts not found');
}

console.log('\n=== Summary ===');
console.log(`routeData.mjs total paths: ${routeDataPaths.length}`);
console.log(`App.tsx mounted routes: ${appTsxPaths.length}`);
console.log(`Service-location pages: ${serviceLocationPaths.length}`);
console.log(`Location page files: ${locationFiles.length}`);

if (hasErrors) {
  console.log('\n\x1b[31mValidation FAILED\x1b[0m - Fix errors before committing.\n');
  process.exit(1);
} else if (hasWarnings) {
  console.log('\n\x1b[33mValidation PASSED with warnings\x1b[0m\n');
  process.exit(0);
} else {
  console.log('\n\x1b[32mValidation PASSED\x1b[0m - Route inventory is consistent.\n');
  process.exit(0);
}
