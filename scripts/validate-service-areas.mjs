#!/usr/bin/env node

/**
 * Service Area Validator
 *
 * Comprehensive validation that ONLY whitelisted service areas appear on the site.
 * Enforces the single source of truth in src/config/serviceAreaWhitelist.ts
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
const bannedTerms = [];

// Parse ALLOWED_SERVICE_AREAS
const areaMatches = whitelistContent.matchAll(/displayName:\s*'([^']+)',\s*slug:\s*'([^']+)',/g);
for (const match of areaMatches) {
  allowedDisplayNames.push(match[1]);
  allowedSlugs.push(match[2]);
}

// Parse DISALLOWED_LOCATIONS
const bannedMatch = whitelistContent.match(/DISALLOWED_LOCATIONS\s*=\s*\[([\s\S]*?)\];/);
if (bannedMatch) {
  const bannedContent = bannedMatch[1];
  const bannedMatches = bannedContent.matchAll(/'([^']+)'/g);
  for (const match of bannedMatches) {
    bannedTerms.push(match[1]);
  }
}

console.log('📋 Whitelist Configuration:');
console.log(`   Allowed areas: ${allowedDisplayNames.length}`);
console.log(`   Allowed slugs: ${allowedSlugs.length}`);
console.log(`   Banned terms: ${bannedTerms.length}`);
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
  /serviceAreaWhitelist\.ts$/, // Allow the whitelist file itself
];

let errors = [];
let warnings = [];

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

      // A) Banned term scan
      for (const banned of bannedTerms) {
        const regex = new RegExp(banned, 'gi');
        if (regex.test(line)) {
          errors.push({
            type: 'BANNED_TERM',
            file: relativePath,
            line: lineNum,
            term: banned,
            text: line.trim().substring(0, 100)
          });
        }
      }

      // B) Service area enumeration scan - check for location names in object literals
      // Match patterns like: name: 'LocationName' or { name: 'LocationName' }
      const namePatternMatches = line.matchAll(/name:\s*['"]([^'"]+)['"]/g);
      for (const match of namePatternMatches) {
        const locationName = match[1];

        // Skip if it's clearly not a location (common false positives)
        if (
          locationName.includes('Painting') ||
          locationName.includes('Interior') ||
          locationName.includes('Exterior') ||
          locationName.includes('Cabinet') ||
          locationName.includes('Commercial') ||
          locationName.includes('Hill Country') ||
          locationName === 'name' ||
          locationName.length < 3
        ) {
          continue;
        }

        // Check if this looks like it's in a service area context
        const contextBefore = content.substring(Math.max(0, content.indexOf(line) - 200), content.indexOf(line));
        const isServiceAreaContext =
          /serviceArea/i.test(contextBefore) ||
          /areas/i.test(contextBefore) ||
          relativePath.includes('service-area') ||
          relativePath.includes('ServiceArea');

        if (isServiceAreaContext && !allowedDisplayNames.includes(locationName)) {
          // Check if it might be a slug version
          const possibleSlug = locationName.toLowerCase().replace(/\s+/g, '-');
          if (!allowedSlugs.includes(possibleSlug)) {
            warnings.push({
              type: 'UNKNOWN_LOCATION_NAME',
              file: relativePath,
              line: lineNum,
              location: locationName,
              text: line.trim().substring(0, 100)
            });
          }
        }
      }

      // C) Route slug scan - check /service-areas/<slug> patterns
      const routeMatches = line.matchAll(/\/service-areas\/([a-z0-9-]+)/g);
      for (const match of routeMatches) {
        const slug = match[1];
        if (!allowedSlugs.includes(slug)) {
          errors.push({
            type: 'INVALID_SERVICE_AREA_SLUG',
            file: relativePath,
            line: lineNum,
            slug: slug,
            text: line.trim().substring(0, 100)
          });
        }
      }

      // D) Schema City name scan
      const schemaMatches = line.matchAll(/name:\s*['"]([^'"]+)['"][\s,}]/g);
      if (line.includes("'@type': 'City'") || line.includes('"@type": "City"')) {
        for (const match of schemaMatches) {
          const cityName = match[1];
          // Check against allowed display names
          const matchesAllowed = allowedDisplayNames.some(allowed =>
            allowed === cityName ||
            allowed.split(',')[0].trim() === cityName
          );

          if (!matchesAllowed) {
            errors.push({
              type: 'SCHEMA_CITY_NOT_WHITELISTED',
              file: relativePath,
              line: lineNum,
              city: cityName,
              text: line.trim().substring(0, 100)
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
  console.log('🔍 Scanning for service area violations...\n');

  for (const dir of dirsToScan) {
    const fullPath = join(projectRoot, dir);
    try {
      scanDirectory(fullPath);
    } catch (err) {
      console.error(`Error scanning ${dir}:`, err.message);
    }
  }

  // Print results
  let hasFailures = false;

  if (errors.length > 0) {
    hasFailures = true;
    console.log(`\n❌ ERRORS: Found ${errors.length} violation(s)\n`);

    const byType = {};
    for (const error of errors) {
      if (!byType[error.type]) {
        byType[error.type] = [];
      }
      byType[error.type].push(error);
    }

    for (const [type, typeErrors] of Object.entries(byType)) {
      console.log(`\n${type} (${typeErrors.length} occurrence(s)):`);
      for (const error of typeErrors) {
        console.log(`  ${error.file}:${error.line}`);
        console.log(`    ${error.text}`);
        if (error.term) console.log(`    Term: "${error.term}"`);
        if (error.slug) console.log(`    Slug: "${error.slug}"`);
        if (error.city) console.log(`    City: "${error.city}"`);
        if (error.location) console.log(`    Location: "${error.location}"`);
      }
    }
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS: Found ${warnings.length} potential issue(s)\n`);

    for (const warning of warnings.slice(0, 10)) {
      console.log(`  ${warning.file}:${warning.line}`);
      console.log(`    ${warning.text}`);
      if (warning.location) console.log(`    Location: "${warning.location}"`);
    }

    if (warnings.length > 10) {
      console.log(`\n  ... and ${warnings.length - 10} more warnings`);
    }
  }

  if (!hasFailures && warnings.length === 0) {
    console.log('✅ VALIDATION PASSED');
    console.log(`   Checked: ${dirsToScan.join(', ')}`);
    console.log(`   Allowed areas: ${allowedDisplayNames.join(', ')}`);
    console.log(`   Banned terms: ${bannedTerms.join(', ')}`);
    process.exit(0);
  } else if (!hasFailures) {
    console.log('\n✅ VALIDATION PASSED (with warnings)');
    console.log('   Review warnings above - they may be false positives');
    process.exit(0);
  } else {
    console.log('\n❌ VALIDATION FAILED');
    console.log('   Fix all errors above before proceeding');
    process.exit(1);
  }
}

main();
