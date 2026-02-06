#!/usr/bin/env node

/**
 * Location Validator
 *
 * Scans src/** and public/** for disallowed location mentions.
 * Enforces the whitelist defined in src/config/serviceAreaWhitelist.ts
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// DISALLOWED locations - these MUST NOT appear anywhere
const DISALLOWED_LOCATIONS = [
  'Cedar Park',
  'Hutto',
  'Round Rock',
  'Georgetown',
  'Leander',
  'Pflugerville',
  'Taylor',
  'Wells Branch',
];

// Patterns to search for (case-insensitive)
const patterns = DISALLOWED_LOCATIONS.map(loc => ({
  name: loc,
  regex: new RegExp(loc, 'gi')
}));

// Directories to scan
const dirsToScan = ['src', 'public'];

// Files to exclude from scanning
const excludePatterns = [
  /node_modules/,
  /\.git/,
  /dist/,
  /build/,
  /\.tar\.gz$/,
  /\.png$/,
  /\.jpg$/,
  /\.jpeg$/,
  /\.gif$/,
  /\.ico$/,
  /\.woff$/,
  /\.woff2$/,
  /\.ttf$/,
  /\.eot$/,
  /\.svg$/,
  /\.pdf$/,
  /validate-locations\.mjs$/,
  /serviceAreaWhitelist\.ts$/  // Allow the whitelist file itself
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

    // Skip excluded patterns
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
 * Scan a single file for disallowed locations
 */
function scanFile(filePath) {
  const relativePath = relative(projectRoot, filePath);

  try {
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;

      for (const pattern of patterns) {
        const matches = line.match(pattern.regex);
        if (matches) {
          for (const match of matches) {
            errors.push({
              file: relativePath,
              line: lineNum,
              location: pattern.name,
              text: line.trim().substring(0, 100)
            });
          }
        }
      }
    }
  } catch (err) {
    // Skip binary files or files that can't be read as text
    if (err.code !== 'ENOENT') {
      // Ignore read errors for this validator
    }
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Scanning for disallowed location mentions...\n');

  for (const dir of dirsToScan) {
    const fullPath = join(projectRoot, dir);
    try {
      scanDirectory(fullPath);
    } catch (err) {
      console.error(`Error scanning ${dir}:`, err.message);
    }
  }

  if (errors.length === 0) {
    console.log('✅ OK: No disallowed locations found');
    console.log(`   Checked: ${dirsToScan.join(', ')}`);
    console.log(`   Disallowed: ${DISALLOWED_LOCATIONS.join(', ')}`);
    process.exit(0);
  } else {
    console.log(`❌ FAILED: Found ${errors.length} disallowed location mention(s)\n`);

    // Group by location
    const byLocation = {};
    for (const error of errors) {
      if (!byLocation[error.location]) {
        byLocation[error.location] = [];
      }
      byLocation[error.location].push(error);
    }

    for (const [location, locationErrors] of Object.entries(byLocation)) {
      console.log(`\n"${location}" (${locationErrors.length} occurrence(s)):`);
      for (const error of locationErrors) {
        console.log(`  ${error.file}:${error.line}`);
        console.log(`    ${error.text}`);
      }
    }

    console.log(`\n❌ Validation FAILED: Remove all disallowed locations from the codebase`);
    process.exit(1);
  }
}

main();
