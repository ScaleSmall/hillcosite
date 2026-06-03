import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = resolve(__dirname, '../dist');

function waitSync(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function readFileWithRetry(filePath, encoding = 'utf-8', attempts = 6) {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return readFileSync(filePath, encoding);
    } catch (error) {
      const isTemporaryLock = ['EBUSY', 'EPERM', 'EACCES'].includes(error.code);

      if (!isTemporaryLock || attempt === attempts) {
        throw error;
      }

      waitSync(attempt * 250);
    }
  }

  return readFileSync(filePath, encoding);
}

function getAllHtmlFiles(dir, fileList = []) {
  const files = readdirSync(dir);

  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function validateCanonicals() {
  console.log('\n🔍 Validating canonical tags in built HTML files...\n');

  const htmlFiles = getAllHtmlFiles(distPath);
  let hasErrors = false;
  let totalFiles = 0;
  let filesWithDuplicates = [];

  htmlFiles.forEach(filePath => {
    totalFiles++;
    const content = readFileWithRetry(filePath);

    // Match canonical links regardless of attribute order or extra attributes.
    const canonicalRegex = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/gi;
    const matches = [...content.matchAll(canonicalRegex)];

    if (matches.length > 1) {
      hasErrors = true;
      const relativePath = filePath.replace(distPath, '');
      const urls = matches.map(m => {
        const hrefMatch = m[0].match(/\bhref=["']([^"']+)["']/i);
        return hrefMatch ? hrefMatch[1] : '(missing href)';
      });

      filesWithDuplicates.push({
        file: relativePath,
        count: matches.length,
        urls
      });

      console.error(`❌ ${relativePath}`);
      console.error(`   Found ${matches.length} canonical tags:`);
      urls.forEach((url, i) => {
        console.error(`   ${i + 1}. ${url}`);
      });
      console.error('');
    }
  });

  if (hasErrors) {
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('❌ BUILD FAILED: Duplicate canonical tags detected!');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('');
    console.error(`Files with issues: ${filesWithDuplicates.length}/${totalFiles}`);
    console.error('');
    console.error('Multiple canonical tags on the same page will:');
    console.error('  • Confuse search engines about which URL is canonical');
    console.error('  • Dilute your SEO ranking signals');
    console.error('  • Cause indexing issues');
    console.error('');
    console.error('Fix: Ensure each page has exactly ONE canonical tag.');
    console.error('Check your SEO component and page templates.');
    console.error('');
    process.exit(1);
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Canonical validation passed!`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`   Checked ${totalFiles} HTML files`);
  console.log(`   No duplicate canonical tags found`);
  console.log('');
}

validateCanonicals();
