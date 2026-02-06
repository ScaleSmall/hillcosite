#!/usr/bin/env node

/**
 * Service Area Validator (Whitelist-Only)
 *
 * Validates that ONLY whitelisted service areas appear in the codebase.
 * Uses positive validation (whitelist) rather than negative checks.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Import whitelist from source
const whitelistPath = join(projectRoot, 'src/config/serviceAreaWhitelist.ts');
const whitelistContent = readFileSync(whitelistPath, 'utf8');

// Extract allowed areas and slugs from the whitelist file
const allowedDisplayNames = [];
const allowedSlugs = [];
const allowedFullAddresses = [];

// Parse ALLOWED_SERVICE_AREAS
const areaMatches = whitelistContent.matchAll(/displayName:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*fullAddress:\s*'([^']+)',/g);
for (const match of areaMatches) {
  allowedDisplayNames.push(match[1]);
  allowedSlugs.push(match[2]);
  allowedFullAddresses.push(match[3]);
}

console.log('Whitelist Configuration:');
console.log(`  Allowed areas: ${allowedDisplayNames.length}`);
console.log(`  Allowed slugs: ${allowedSlugs.length}`);
console.log('');

// Directories to scan
const dirsToScan = ['src', 'public'];

// Files to exclude
const excludePatterns = [
  /node_modules/,
  /\.git/,
  /dist/,
  /build/,
  /\.tar\.gz$/,
  /\.(png|jpg|jpeg|gif|ico|woff|woff2|ttf|eot|svg|pdf)$/,
  /validate-service-areas\.mjs$/,
  /serviceAreaWhitelist\.ts$/,
];

let errors = [];

/**
 * Recursively scan a directory
 */
function scanDirectory(dir) {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const relativePath = relative(projectRoot, fullPath);

    if (excludePatterns.some(pattern => pattern.test(relativePath))) {
      continue;
    }

    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (stat.isFile()) {
      scanFile(fullPath);
    }
  }
}

/**
 * Scan a single file for violations
 */
function scanFile(filePath) {
  const relativePath = relative(projectRoot, filePath);

  try {
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;

      // RULE 1: Check /service-areas/<slug> patterns - slug must be in whitelist
      const routeMatches = line.matchAll(/\/service-areas\/([a-z0-9-]+)/g);
      for (const match of routeMatches) {
        const slug = match[1];
        if (!allowedSlugs.includes(slug)) {
          errors.push({
            type: 'INVALID_SERVICE_AREA_SLUG',
            file: relativePath,
            line: lineNum,
            value: slug,
            text: line.trim().substring(0, 80)
          });
        }
      }

      // RULE 2: Check schema City names in JSON-LD
      if (line.includes("'@type': 'City'") || line.includes('"@type": "City"')) {
        const nameMatches = line.matchAll(/name:\s*['"]([^'"]+)['"]/g);
        for (const match of nameMatches) {
          const cityName = match[1];
          // Check if this city name is in our whitelist display names
          if (!allowedDisplayNames.includes(cityName)) {
            errors.push({
              type: 'SCHEMA_CITY_NOT_WHITELISTED',
              file: relativePath,
              line: lineNum,
              value: cityName,
              text: line.trim().substring(0, 80)
            });
          }
        }
      }
    }
  } catch (err) {
    // Ignore read errors (binary files, etc.)
  }
}

/**
 * Main execution
 */
function main() {
  console.log('Scanning for service area violations...\n');

  for (const dir of dirsToScan) {
    const fullPath = join(projectRoot, dir);
    try {
      scanDirectory(fullPath);
    } catch (err) {
      console.error(`Error scanning ${dir}:`, err.message);
    }
  }

  // Print results
  if (errors.length > 0) {
    console.log(`FAILED: Found ${errors.length} violation(s)\n`);

    const byType = {};
    for (const error of errors) {
      if (!byType[error.type]) {
        byType[error.type] = [];
      }
      byType[error.type].push(error);
    }

    for (const [type, typeErrors] of Object.entries(byType)) {
      console.log(`${type} (${typeErrors.length}):`);
      for (const error of typeErrors) {
        console.log(`  ${error.file}:${error.line}`);
        console.log(`    Value: "${error.value}"`);
        console.log(`    Line: ${error.text}`);
      }
      console.log('');
    }

    process.exit(1);
  } else {
    console.log('OK: whitelist-only service areas. No violations found.');
    process.exit(0);
  }
}

main();
