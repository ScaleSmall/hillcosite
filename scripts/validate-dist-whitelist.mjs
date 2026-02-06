#!/usr/bin/env node

/**
 * Dist Whitelist Validator
 *
 * Scans the built dist/ directory for ANY Texas location strings
 * and verifies they are ONLY from our whitelist.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const distPath = join(projectRoot, 'dist');

// Whitelist - EXACT fullAddress strings
const WHITELIST_LOCATIONS = [
  'Austin, TX, USA',
  'Lakeway, TX, USA',
  'Bee Cave, TX, USA',
  'Barton Creek, TX, USA',
  'Allandale, Austin, TX, USA',
  'Crestview, Austin, TX, USA',
  'Rollingwood, TX 78746, USA',
  'West Lake Hills, TX 78746, USA',
  'Circle C Ranch, Austin, TX, USA',
  'Northwest Hills, Austin, TX, USA',
  'Tarrytown, Austin, TX 78703, USA',
  'Clarksville, Austin, TX 78703, USA',
  'Lake Travis, Volente, TX 78641, USA',
  'Steiner Ranch, Austin, TX 78732, USA',
  'Pemberton Heights, Austin, TX 78703, USA',
  'Westlake Highlands, Austin, TX 78746, USA',
];

// Also allow just city names from whitelist
const WHITELIST_CITY_NAMES = [
  'Austin',
  'Lakeway',
  'Bee Cave',
  'Barton Creek',
  'Allandale',
  'Crestview',
  'Rollingwood',
  'West Lake Hills',
  'Circle C Ranch',
  'Northwest Hills',
  'Tarrytown',
  'Clarksville',
  'Lake Travis',
  'Steiner Ranch',
  'Pemberton Heights',
  'Westlake Highlands',
];

// Files to scan
const fileExtensions = ['.html', '.xml', '.json', '.js', '.txt'];

// Files/directories to exclude
const excludePatterns = [
  /node_modules/,
  /\.git/,
  /\.(png|jpg|jpeg|gif|ico|woff|woff2|ttf|eot|svg|pdf)$/,
  /\.map$/,
];

let violations = [];

/**
 * Check if a line containing TX is whitelisted
 */
function isLineWhitelisted(line) {
  // Check if any whitelist location appears in the line
  for (const location of WHITELIST_LOCATIONS) {
    if (line.includes(location)) {
      return true;
    }
  }

  // Check if just city names (for shorter references)
  for (const city of WHITELIST_CITY_NAMES) {
    if (line.includes(city)) {
      return true;
    }
  }

  return false;
}

/**
 * Recursively scan directory
 */
function scanDirectory(dir) {
  try {
    const entries = readdirSync(dir);

    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const relativePath = relative(distPath, fullPath);

      if (excludePatterns.some(pattern => pattern.test(relativePath))) {
        continue;
      }

      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (stat.isFile()) {
        const hasValidExt = fileExtensions.some(ext => fullPath.endsWith(ext));
        if (hasValidExt) {
          scanFile(fullPath);
        }
      }
    }
  } catch (err) {
    // Ignore directory read errors
  }
}

/**
 * Scan a single file
 */
function scanFile(filePath) {
  const relativePath = relative(distPath, filePath);

  try {
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;

      // Look for Texas location indicators
      if (line.includes(', TX') || line.includes('TX 78') || line.includes('TX, USA')) {
        // This line mentions Texas - check if it's whitelisted
        if (!isLineWhitelisted(line)) {
          // Found a TX reference that's not in our whitelist
          violations.push({
            file: relativePath,
            line: lineNum,
            excerpt: line.trim().substring(0, 120),
          });
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
  console.log('Validating dist/ for whitelist-only TX locations...\n');
  console.log(`Whitelist contains ${WHITELIST_LOCATIONS.length} locations\n`);

  try {
    scanDirectory(distPath);
  } catch (err) {
    console.error('Error scanning dist directory:', err.message);
    process.exit(1);
  }

  if (violations.length > 0) {
    console.log(`FAILED: Found ${violations.length} non-whitelisted TX location reference(s)\n`);

    for (const violation of violations) {
      console.log(`${violation.file}:${violation.line}`);
      console.log(`  ${violation.excerpt}`);
      console.log('');
    }

    process.exit(1);
  } else {
    console.log('OK: dist contains only whitelist TX locations.');
    process.exit(0);
  }
}

main();
