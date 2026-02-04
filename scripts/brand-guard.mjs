#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const SRC_DIR = 'src';
const GUIDES_PATH = 'src/pages/guides';

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

function main() {
  console.log('🔍 Running brand guard...\n');

  const files = scanDirectory(SRC_DIR);
  const allViolations = [];

  for (const file of files) {
    const violations = checkFile(file);
    allViolations.push(...violations);
  }

  if (allViolations.length === 0) {
    console.log('✅ Brand guard passed: No forbidden tokens found.\n');
    process.exit(0);
  }

  console.log('❌ Brand Guard failed: forbidden tokens found\n');
  console.log('Violations:\n');

  for (const violation of allViolations) {
    console.log(`${violation.file}:${violation.line}`);
    console.log(`  Token: ${violation.token}`);
    console.log(`  Line: ${violation.content}`);
    console.log('');
  }

  console.log(`\nTotal violations: ${allViolations.length}\n`);
  process.exit(1);
}

main();
