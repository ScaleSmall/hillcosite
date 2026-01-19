import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = resolve(__dirname, '../dist');

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
    const content = readFileSync(filePath, 'utf-8');

    // Match all canonical link tags
    const canonicalRegex = /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']\s*\/?>/gi;
    const matches = [...content.matchAll(canonicalRegex)];

    if (matches.length > 1) {
      hasErrors = true;
      const relativePath = filePath.replace(distPath, '');
      const urls = matches.map(m => m[1]);

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
