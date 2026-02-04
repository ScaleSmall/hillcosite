#!/usr/bin/env node

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const SRC_DIR = 'src';
const GUIDES_PATH = 'src/pages/guides';

// Files to scan for brand invariants (in addition to src/**)
const ADDITIONAL_FILES = [
  'index.html',
  'tailwind.config.js',
  'src/index.css'
];

// Forbidden tokens from original brand guard
const LEGACY_FORBIDDEN = [
  '\\bprimary-',
  '\\bdeep-',
  '\\baccent-',
  'hover:scale',
  'group-hover:scale'
];

// Slate color token prefixes (not position/transform tokens)
const SLATE_COLOR_PREFIXES = [
  'bg-slate-',
  'text-slate-',
  'border-slate-',
  'from-slate-',
  'to-slate-',
  'ring-slate-',
  'divide-slate-',
  'outline-slate-',
  'shadow-slate-'
];

// Red color token prefixes
const RED_COLOR_PREFIXES = [
  'bg-red-',
  'text-red-',
  'border-red-',
  'ring-red-',
  'from-red-',
  'to-red-',
  'divide-red-',
  'outline-red-',
  'shadow-red-'
];

function scanDirectory(dir, files = []) {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath, files);
    } else if (entry.endsWith('.tsx') || entry.endsWith('.ts') || entry.endsWith('.jsx') || entry.endsWith('.js')) {
      files.push(fullPath);
    }
  }

  return files;
}

function checkFile(filePath) {
  // Skip files in guides directory
  if (filePath.includes(GUIDES_PATH)) {
    return [];
  }

  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const violations = [];

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    // Check legacy forbidden tokens
    for (const pattern of LEGACY_FORBIDDEN) {
      const regex = new RegExp(pattern);
      if (regex.test(line)) {
        violations.push({
          file: filePath,
          line: lineNumber,
          content: line.trim(),
          token: pattern
        });
      }
    }

    // Check slate color tokens
    for (const prefix of SLATE_COLOR_PREFIXES) {
      if (line.includes(prefix)) {
        violations.push({
          file: filePath,
          line: lineNumber,
          content: line.trim(),
          token: prefix
        });
      }
    }

    // Check red color tokens
    for (const prefix of RED_COLOR_PREFIXES) {
      if (line.includes(prefix)) {
        violations.push({
          file: filePath,
          line: lineNumber,
          content: line.trim(),
          token: prefix
        });
      }
    }
  });

  return violations;
}

function checkTailwindBrandPalette() {
  try {
    const content = readFileSync('tailwind.config.js', 'utf-8');

    // Check for brand.azure
    const hasAzure = content.includes("azure: '#1F7A8C'");
    const hasAzureDark = content.includes("azureDark: '#0B3C49'");
    const hasCoral = content.includes("coral: '#E36414'");

    // Check for all 10 gray shades (50-900)
    const grayShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const hasAllGrays = grayShades.every(shade => {
      const pattern = new RegExp(`${shade}:\\s*['"]#[0-9A-Fa-f]{6}['"]`);
      return pattern.test(content);
    });

    return {
      pass: hasAzure && hasAzureDark && hasCoral && hasAllGrays,
      details: !hasAzure ? 'Missing brand.azure' :
               !hasAzureDark ? 'Missing brand.azureDark' :
               !hasCoral ? 'Missing brand.coral' :
               !hasAllGrays ? 'Missing complete brand.gray palette (50-900)' :
               'Complete'
    };
  } catch (error) {
    return { pass: false, details: `Error reading tailwind.config.js: ${error.message}` };
  }
}

function checkFontsInvariant() {
  try {
    const content = readFileSync('index.html', 'utf-8');

    const hasGoogleFonts = content.includes('fonts.googleapis.com');
    const hasMontserrat = content.includes('Montserrat');
    const hasOpenSans = content.includes('Open+Sans') || content.includes('Open Sans');

    return {
      pass: hasGoogleFonts && hasMontserrat && hasOpenSans,
      details: !hasGoogleFonts ? 'Missing fonts.googleapis.com' :
               !hasMontserrat ? 'Missing Montserrat font' :
               !hasOpenSans ? 'Missing Open Sans font' :
               'Complete'
    };
  } catch (error) {
    return { pass: false, details: `Error reading index.html: ${error.message}` };
  }
}

function checkThemeColorInvariant() {
  try {
    const content = readFileSync('index.html', 'utf-8');

    const hasThemeColor = content.includes('<meta name="theme-color" content="#1F7A8C"');

    return {
      pass: hasThemeColor,
      details: hasThemeColor ? 'Complete' : 'Missing or incorrect theme-color meta tag (#1F7A8C required)'
    };
  } catch (error) {
    return { pass: false, details: `Error reading index.html: ${error.message}` };
  }
}

function checkButtonInvariant() {
  try {
    const content = readFileSync('src/index.css', 'utf-8');

    // Check .btn-primary
    const primaryMatch = content.match(/\.btn-primary\s*\{[^}]*\}/s);
    const hasPrimaryFontHeading = primaryMatch && primaryMatch[0].includes('font-heading');
    const hasPrimaryFocusRing = primaryMatch && primaryMatch[0].includes('focus:ring-brand-azure');

    // Check .btn-secondary
    const secondaryMatch = content.match(/\.btn-secondary\s*\{[^}]*\}/s);
    const hasSecondaryFontHeading = secondaryMatch && secondaryMatch[0].includes('font-heading');
    const hasSecondaryFocusRing = secondaryMatch && secondaryMatch[0].includes('focus:ring-brand-azure');

    // Check .btn-outline
    const outlineMatch = content.match(/\.btn-outline\s*\{[^}]*\}/s);
    const hasOutlineFontHeading = outlineMatch && outlineMatch[0].includes('font-heading');
    const hasOutlineFocusRing = outlineMatch && outlineMatch[0].includes('focus:ring-brand-azure');

    const allPass = hasPrimaryFontHeading && hasPrimaryFocusRing &&
                    hasSecondaryFontHeading && hasSecondaryFocusRing &&
                    hasOutlineFontHeading && hasOutlineFocusRing;

    return {
      pass: allPass,
      details: !hasPrimaryFontHeading ? '.btn-primary missing font-heading' :
               !hasPrimaryFocusRing ? '.btn-primary missing focus:ring-brand-azure' :
               !hasSecondaryFontHeading ? '.btn-secondary missing font-heading' :
               !hasSecondaryFocusRing ? '.btn-secondary missing focus:ring-brand-azure' :
               !hasOutlineFontHeading ? '.btn-outline missing font-heading' :
               !hasOutlineFocusRing ? '.btn-outline missing focus:ring-brand-azure' :
               'Complete'
    };
  } catch (error) {
    return { pass: false, details: `Error reading src/index.css: ${error.message}` };
  }
}

function checkBrandLogoLocation() {
  const requiredLogos = [
    'public/brand/hill-country-painting-logo-primary.png',
    'public/brand/hill-country-painting-logo-reverse.png',
    'public/brand/hill-country-painting-logo-secondary.png'
  ];

  const forbiddenLogos = [
    'public/hill-country-painting-logo-primary.png',
    'public/hill-country-painting-logo-reverse.png',
    'public/hill-country-painting-logo-secondary.png'
  ];

  const missingRequired = requiredLogos.filter(logo => !existsSync(logo));
  const foundForbidden = forbiddenLogos.filter(logo => existsSync(logo));

  const pass = missingRequired.length === 0 && foundForbidden.length === 0;

  let details = 'Complete';
  if (missingRequired.length > 0) {
    details = `Missing logos in /public/brand/: ${missingRequired.map(l => l.replace('public/brand/', '')).join(', ')}`;
  } else if (foundForbidden.length > 0) {
    details = `Loose logos found in /public root: ${foundForbidden.map(l => l.replace('public/', '')).join(', ')}`;
  }

  return { pass, details };
}

function main() {
  console.log('Running brand guard...\n');

  // Phase 1: Check forbidden tokens
  let tokenViolations = [];

  // Scan src directory
  const srcFiles = scanDirectory(SRC_DIR);
  for (const file of srcFiles) {
    const violations = checkFile(file);
    tokenViolations.push(...violations);
  }

  // Scan additional files (but they shouldn't have the same token restrictions)
  // We scan them for completeness but typically they won't have violations
  for (const additionalFile of ADDITIONAL_FILES) {
    if (existsSync(additionalFile)) {
      const violations = checkFile(additionalFile);
      tokenViolations.push(...violations);
    }
  }

  // Phase 2: Check brand invariants
  console.log('BRAND INVARIANT CHECKS:\n');

  const invariants = [
    { name: 'A) Tailwind Brand Palette', check: checkTailwindBrandPalette() },
    { name: 'B) Google Fonts (Montserrat + Open Sans)', check: checkFontsInvariant() },
    { name: 'C) Theme Color (#1F7A8C)', check: checkThemeColorInvariant() },
    { name: 'D) Button Typography + Focus Rings', check: checkButtonInvariant() },
    { name: 'E) Brand Logo Location', check: checkBrandLogoLocation() }
  ];

  let invariantFailures = 0;
  for (const invariant of invariants) {
    const status = invariant.check.pass ? 'PASS' : 'FAIL';
    const symbol = invariant.check.pass ? '✓' : '✗';
    console.log(`${symbol} ${invariant.name}: ${status}`);
    if (!invariant.check.pass) {
      console.log(`  Details: ${invariant.check.details}`);
      invariantFailures++;
    }
  }

  console.log('');

  // Report results
  const hasTokenViolations = tokenViolations.length > 0;
  const hasInvariantFailures = invariantFailures > 0;

  if (hasTokenViolations) {
    console.log('FORBIDDEN TOKEN VIOLATIONS:\n');
    for (const violation of tokenViolations) {
      console.log(`${violation.file}:${violation.line}`);
      console.log(`  Token: ${violation.token}`);
      console.log(`  Line: ${violation.content}`);
      console.log('');
    }
    console.log(`Total token violations: ${tokenViolations.length}\n`);
  }

  if (!hasTokenViolations && !hasInvariantFailures) {
    console.log('Brand guard passed: No forbidden tokens found, all invariants satisfied.\n');
    process.exit(0);
  } else {
    console.log('Brand guard FAILED:\n');
    if (hasTokenViolations) {
      console.log(`  - ${tokenViolations.length} forbidden token violation(s)`);
    }
    if (hasInvariantFailures) {
      console.log(`  - ${invariantFailures} invariant failure(s)`);
    }
    console.log('');
    process.exit(1);
  }
}

main();
