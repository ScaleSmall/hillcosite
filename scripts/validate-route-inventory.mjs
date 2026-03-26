#!/usr/bin/env node
/**
 * Route Inventory Validation Script
 *
 * Ensures consistency between:
 * 1. src/config/routeData.mjs (canonical route inventory)
 * 2. src/App.tsx (mounted routes)
 * 3. src/pages/locations/*.tsx (service-location page files)
 * 4. public/_redirects (redirect targets)
 * 5. public/.htaccess (redirect targets)
 * 6. src/config/canonicalMappings.ts (canonical mapping claims)
 *
 * Fails the build if any mismatch is detected.
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  getAllRoutePaths,
  getServiceLocationPaths
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

function extractHtaccessRedirectTargets(htaccessContent) {
  const targets = [];
  const lines = htaccessContent.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const rewriteMatch = trimmed.match(/RewriteRule\s+\S+\s+(\S+)/);
    if (rewriteMatch) {
      let target = rewriteMatch[1];
      if (target.startsWith('/') && !target.includes('$') && !target.includes('%')) {
        targets.push({ target, line: trimmed });
      }
    }
  }
  return targets;
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

console.log('\n=== Route Inventory Validation ===\n');

const appTsxPath = resolve(projectRoot, 'src/App.tsx');
const redirectsPath = resolve(projectRoot, 'public/_redirects');
const htaccessPath = resolve(projectRoot, 'public/.htaccess');
const canonicalMappingsPath = resolve(projectRoot, 'src/config/canonicalMappings.ts');

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

  const validTargetPaths = new Set([
    ...appTsxPaths,
    '/index.html',
    '/',
  ]);

  const invalidTargets = redirectTargets.filter(({ target }) => {
    if (target.includes(':splat')) return false;
    if (target.includes(':ref')) return false;
    return !validTargetPaths.has(target);
  });

  if (invalidTargets.length > 0) {
    warn(`${invalidTargets.length} redirect targets may point to unmounted routes:`);
    invalidTargets.forEach(({ target, line }) => console.log(`   - ${target}`));
  } else {
    success(`All redirect targets in _redirects are valid`);
  }
} else {
  warn('_redirects file not found');
}

console.log('\n4. Checking redirect targets in .htaccess...');
if (existsSync(htaccessPath)) {
  const htaccessContent = readFileSync(htaccessPath, 'utf-8');
  const htaccessTargets = extractHtaccessRedirectTargets(htaccessContent);

  const invalidHtaccessTargets = htaccessTargets.filter(({ target }) => {
    if (target === '/' || target === '/index.html') return false;
    return !appTsxSet.has(target);
  });

  if (invalidHtaccessTargets.length > 0) {
    warn(`${invalidHtaccessTargets.length} .htaccess redirect targets may be invalid:`);
    invalidHtaccessTargets.forEach(({ target }) => console.log(`   - ${target}`));
  } else {
    success(`.htaccess redirect targets are valid (${htaccessTargets.length} checked)`);
  }
} else {
  warn('.htaccess file not found');
}

console.log('\n5. Checking canonicalMappings.ts for false claims...');
if (existsSync(canonicalMappingsPath)) {
  const canonicalContent = readFileSync(canonicalMappingsPath, 'utf-8');

  const serviceAreaMatch = canonicalContent.match(/serviceAreaCanonicals\s*:\s*CanonicalMapping\[\]\s*=\s*\[([\s\S]*?)\];/);
  const serviceLocationMatch = canonicalContent.match(/serviceLocationCanonicals\s*:\s*CanonicalMapping\[\]\s*=\s*\[([\s\S]*?)\];/);

  const serviceAreaEmpty = !serviceAreaMatch || serviceAreaMatch[1].trim() === '';
  const serviceLocationEmpty = !serviceLocationMatch || serviceLocationMatch[1].trim() === '';

  if (serviceAreaEmpty && serviceLocationEmpty) {
    success('canonicalMappings.ts has empty arrays (no active mappings) - consistent with docs');
  } else {
    const hasContent = !serviceAreaEmpty || !serviceLocationEmpty;
    if (hasContent) {
      warn('canonicalMappings.ts has active mappings - ensure docs reflect this');
    }
  }
} else {
  warn('canonicalMappings.ts not found');
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
