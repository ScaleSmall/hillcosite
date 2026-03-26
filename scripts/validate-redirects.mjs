#!/usr/bin/env node
/**
 * Redirect and Sitemap Validation
 *
 * Validates redirect targets and sitemap URLs against the canonical route inventory.
 * Imports all route data from routeData.mjs - no local route arrays.
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  geoAreas,
  getStaticRoutes,
  getServiceLocationPaths
} from '../src/config/routeData.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const additionalValidRoutes = [
  '/pre-approval',
  '/search',
  '/thank-you',
  '/eula',
  '/sitemap',
];

function getAllValidRoutes() {
  const routes = new Set();

  getStaticRoutes().forEach(r => routes.add(r.path));

  additionalValidRoutes.forEach(r => routes.add(r));

  geoAreas.forEach(area => {
    routes.add(`/areas/${area.hub}`);
    area.neighborhoods.forEach(neighborhood => {
      routes.add(`/areas/${area.hub}/${neighborhood}`);
    });
  });

  return routes;
}

function parseRedirectsFile(filePath) {
  if (!existsSync(filePath)) {
    console.warn(`Warning: ${filePath} not found`);
    return [];
  }

  const content = readFileSync(filePath, 'utf-8');
  const redirects = [];

  content.split('\n').forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const parts = trimmed.split(/\s+/);
    if (parts.length >= 2) {
      const from = parts[0];
      let to = parts[1];

      if (to.startsWith('https://') || to.startsWith('http://')) {
        return;
      }

      if (from.includes('*') || from.includes(':splat')) {
        return;
      }

      to = to.replace(/\s+\d+!?$/, '');

      redirects.push({
        from,
        to,
        line: index + 1,
        file: filePath
      });
    }
  });

  return redirects;
}

function validateRedirects() {
  const validRoutes = getAllValidRoutes();
  const redirectsPath = resolve(__dirname, '../public/_redirects');
  const redirects = parseRedirectsFile(redirectsPath);

  const errors = [];
  const warnings = [];

  redirects.forEach(redirect => {
    const target = redirect.to;

    if (target === '/index.html') return;

    if (!validRoutes.has(target)) {
      const isServicePath = target.startsWith('/services');
      const isAreaPath = target.startsWith('/areas') || target.startsWith('/service-areas');

      if (isServicePath || isAreaPath) {
        errors.push({
          type: 'INVALID_TARGET',
          message: `Redirect target "${target}" does not exist`,
          from: redirect.from,
          line: redirect.line,
          file: redirect.file
        });
      } else {
        warnings.push({
          type: 'UNKNOWN_TARGET',
          message: `Redirect target "${target}" may not exist (could be dynamic)`,
          from: redirect.from,
          line: redirect.line,
          file: redirect.file
        });
      }
    }
  });

  return { errors, warnings, totalChecked: redirects.length };
}

function validateSitemap() {
  const validRoutes = getAllValidRoutes();
  const sitemapPath = resolve(__dirname, '../public/sitemap.xml');

  if (!existsSync(sitemapPath)) {
    return { errors: [], warnings: [{ message: 'sitemap.xml not found' }], totalChecked: 0 };
  }

  const content = readFileSync(sitemapPath, 'utf-8');
  const locRegex = /<loc>https:\/\/www\.hillcopaint\.com([^<]+)<\/loc>/g;

  const errors = [];
  let match;
  let count = 0;

  while ((match = locRegex.exec(content)) !== null) {
    const path = match[1];
    count++;

    if (path.startsWith('/blog/')) continue;

    if (!validRoutes.has(path)) {
      errors.push({
        type: 'SITEMAP_INVALID_URL',
        message: `Sitemap URL path "${path}" does not match a valid route`,
        path
      });
    }
  }

  return { errors, warnings: [], totalChecked: count };
}

function run() {
  console.log('Validating redirects and sitemap...\n');

  const redirectResults = validateRedirects();
  const sitemapResults = validateSitemap();

  let hasErrors = false;

  if (redirectResults.errors.length > 0) {
    hasErrors = true;
    console.error('REDIRECT ERRORS:');
    redirectResults.errors.forEach(err => {
      console.error(`  Line ${err.line}: ${err.from} -> ${err.message}`);
    });
    console.error('');
  }

  if (redirectResults.warnings.length > 0) {
    console.warn('REDIRECT WARNINGS:');
    redirectResults.warnings.forEach(warn => {
      console.warn(`  Line ${warn.line}: ${warn.from} -> ${warn.message}`);
    });
    console.warn('');
  }

  if (sitemapResults.errors.length > 0) {
    hasErrors = true;
    console.error('SITEMAP ERRORS:');
    sitemapResults.errors.forEach(err => {
      console.error(`  ${err.message}`);
    });
    console.error('');
  }

  console.log(`Checked ${redirectResults.totalChecked} redirects`);
  console.log(`Checked ${sitemapResults.totalChecked} sitemap URLs`);
  console.log(`Valid routes: ${getAllValidRoutes().size}`);

  if (hasErrors) {
    console.error('\nValidation FAILED with errors above.');
    process.exit(1);
  } else {
    console.log('\nValidation PASSED.');
  }
}

run();
