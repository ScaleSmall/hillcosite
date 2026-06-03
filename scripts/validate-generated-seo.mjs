#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { dirname, extname, join, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');
const distPath = resolve(projectRoot, 'dist');
const sitemapPath = resolve(projectRoot, 'public/sitemap.xml');
const distSitemapPath = resolve(projectRoot, 'dist/sitemap.xml');
const functionSitemapPath = resolve(projectRoot, 'functions/generatedSitemap.ts');
const functionRoutesPath = resolve(projectRoot, 'functions/generatedRoutes.ts');
const middlewarePath = resolve(projectRoot, 'functions/_middleware.ts');
const localSeoPath = resolve(projectRoot, 'src/config/localSeo.ts');
const locationsConfigPath = resolve(projectRoot, 'src/config/locations.ts');
const serviceProductsPath = resolve(projectRoot, 'src/config/serviceProducts.ts');
const colorConsultationPath = resolve(projectRoot, 'src/pages/ColorConsultation.tsx');
const googleMapEmbedPath = resolve(projectRoot, 'src/components/GoogleMapEmbed.tsx');
const gbpRatingHookPath = resolve(projectRoot, 'src/hooks/useGBPRating.ts');
const aiManifestGeneratorPath = resolve(projectRoot, 'scripts/generate-ai-manifests.mjs');
const publicEnvPath = resolve(projectRoot, 'public/env.js');
const sitemapPhpPath = resolve(projectRoot, 'public/sitemap.php');
const galleryPagePath = resolve(projectRoot, 'src/pages/Gallery.tsx');
const robotsPath = resolve(projectRoot, 'public/robots.txt');
const llmsPath = resolve(projectRoot, 'public/llms.txt');
const llmsFullPath = resolve(projectRoot, 'public/llms-full.txt');
const aiPath = resolve(projectRoot, 'public/ai.txt');
const entityFactsPath = resolve(projectRoot, 'public/entity-facts.json');
const citationFactsPath = resolve(projectRoot, 'public/citation-facts.json');
const headersPath = resolve(projectRoot, 'public/_headers');
const redirectsPath = resolve(projectRoot, 'public/_redirects');
const routesConfigPath = resolve(projectRoot, 'public/_routes.json');

function waitSync(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function readFileWithRetry(filePath, encoding = 'utf8', attempts = 6) {
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
const baseUrl = 'https://www.hillcopaint.com';
const googleBusinessProfileUrl = 'https://www.google.com/search?q=Hill+Country+Painting&kgmid=/g/11frssbq6p';
const googleKnowledgeGraphId = '/g/11frssbq6p';
const canonicalPhoneHref = 'tel:+15122402246';
const currentSupabaseUrl = 'https://ndggkorglcaznukkhapz.supabase.co';
const retiredSupabaseUrls = ['https://oyyfpkpzalhxztpcdjgq.supabase.co'];
const minimumAggregateRatingValue = 4.5;
const minimumAggregateReviewCount = 100;
const intentionallyNoindexUtilityPaths = ['/privacy', '/terms', '/do-not-sell', '/eula', '/sitemap'];
const allowedInternalNoindexPaths = new Set(['/404', '/pre-approval', '/search', '/thank-you', ...intentionallyNoindexUtilityPaths]);
const allowedNonSitemapLinks = new Set(['/pre-approval', '/search', '/thank-you', ...intentionallyNoindexUtilityPaths]);
const internalRedirectTargets = new Map([
  ['/project', '/gallery'],
  ['/projects', '/gallery'],
  ['/service/custom-home-painting-round-rock', '/services'],
  ['/services/wood-staining', '/services/exterior-painting'],
  ['/services/masonry-priming', '/services/exterior-painting'],
  ['/services/priming-and-prep', '/services/exterior-painting'],
  ['/services/masonry-restoration', '/services/exterior-painting'],
  ['/services/masonry-painting', '/services/exterior-painting'],
  ['/services/caulking-and-repair', '/services/exterior-painting'],
  ['/services/masonry-coatings', '/services/exterior-painting'],
  ['/services/pressure-washing', '/services/exterior-painting'],
  ['/services/lead-safe-painting', '/services/exterior-painting'],
]);
const requiredLegacyRedirects = new Map([
  ['/austin', '/service-areas/austin'],
  ['/exterior-painting', '/services/exterior-painting'],
  ['/cabinet-refinishing', '/services/cabinet-refinishing'],
  ['/cabinet-refinishing-pflugerville', '/services/cabinet-refinishing'],
  ['/projects', '/gallery'],
  ['/project', '/gallery'],
  ['/service-area', '/service-areas'],
  ['/service/living-room-painting-round-rock', '/services/interior-painting'],
  ['/service/residential-deck-painting-round-rock', '/services/exterior-painting'],
  ['/service/residential-concrete-painting-round-rock', '/services/exterior-painting'],
  ['/service/garage-painting', '/services'],
  ['/service/mobile-home-painting', '/services'],
  ['/service/townhouse-painting-round-rock', '/services'],
  ['/service/residential-foyer-painting-round-rock', '/services/interior-painting'],
  ['/service/residential-hallway-painting-round-rock', '/services/interior-painting'],
  ['/service/custom-home-painting-round-rock', '/services'],
]);
const staticLegacyRedirects = new Map([
  ['/service/residential-concrete-painting-round-rock/', `${baseUrl}/services/exterior-painting`],
  ['/service/residential-concrete-painting-round-rock', `${baseUrl}/services/exterior-painting`],
  ['/service/residential-concrete-painting/', `${baseUrl}/services/exterior-painting`],
  ['/service/residential-concrete-painting', `${baseUrl}/services/exterior-painting`],
  ['/residential-concrete-painting-round-rock/', `${baseUrl}/services/exterior-painting`],
  ['/residential-concrete-painting-round-rock', `${baseUrl}/services/exterior-painting`],
  ['/residential-concrete-painting/', `${baseUrl}/services/exterior-painting`],
  ['/residential-concrete-painting', `${baseUrl}/services/exterior-painting`],
  ['/service/mobile-home-painting/', `${baseUrl}/services`],
  ['/service/mobile-home-painting', `${baseUrl}/services`],
  ['/service/garage-painting/', `${baseUrl}/services`],
  ['/service/garage-painting', `${baseUrl}/services`],
  ['/service/townhouse-painting-round-rock/', `${baseUrl}/services`],
  ['/service/townhouse-painting-round-rock', `${baseUrl}/services`],
  ['/cabinet-refinishing/', `${baseUrl}/services/cabinet-refinishing`],
  ['/cabinet-refinishing', `${baseUrl}/services/cabinet-refinishing`],
  ['/cabinet-refinishing-pflugerville/', `${baseUrl}/services/cabinet-refinishing`],
  ['/cabinet-refinishing-pflugerville', `${baseUrl}/services/cabinet-refinishing`],
]);
const imageExtensions = new Set(['.avif', '.gif', '.ico', '.jpeg', '.jpg', '.png', '.svg', '.webp']);
const assetExtensions = new Set([...imageExtensions, '.css', '.js', '.json', '.map', '.txt', '.webmanifest', '.xml']);
const bannedHeroBackgroundImages = [
  'before_and_after-1-sep_16_2025_10_14am-u7me.jpg',
  'before_and_after-5-nov_14_2025_11_37am-nahg.jpg',
  'before_and_after-6-sep_12_2025_11_32am-vj7w.jpg',
  'classic-home-exterior.jpg',
  'custom-kitchen-painting.jpg',
  'exterior-tarrytown.jpg',
  'kitchen-transformation-west-lake-hills.jpg',
  'living-room-update-central-austin.jpg',
  'modern-interior-design.jpg',
  'traditional-home-exterior.jpg'
];
const localServicePrefixes = [
  '/interior-painting-',
  '/exterior-painting-',
  '/cabinet-refinishing-',
  '/commercial-painting-'
];
const coreLocalBusinessRoutes = new Set([
  '/',
  '/about',
  '/services',
  '/services/interior-painting',
  '/services/exterior-painting',
  '/services/cabinet-refinishing',
  '/services/commercial',
  '/gallery',
  '/testimonials',
  '/faq',
  '/color-consultation',
  '/contact',
]);
const requiredGeoHubServiceLocationSlugs = new Map([
  ['/areas/steiner-ranch-78732', 'steiner-ranch'],
  ['/areas/west-lake-hills-and-rollingwood', 'west-lake-hills'],
  ['/areas/barton-creek', 'barton-creek'],
  ['/areas/circle-c-ranch-and-southwest-austin', 'circle-c-ranch']
]);
const requiredServiceAreaServiceLocationSlugs = new Map([
  ['/service-areas/austin', 'austin'],
  ['/service-areas/tarrytown', 'tarrytown'],
  ['/service-areas/northwest-hills', 'northwest-hills'],
  ['/service-areas/west-lake-hills', 'west-lake-hills'],
  ['/service-areas/west-lake-highlands', 'west-lake-highlands'],
  ['/service-areas/lakeway', 'lakeway'],
  ['/service-areas/leander', 'leander'],
  ['/service-areas/georgetown', 'georgetown'],
  ['/service-areas/round-rock', 'round-rock'],
  ['/service-areas/cedar-park', 'cedar-park'],
  ['/service-areas/north-austin', 'north-austin']
]);
const requiredServiceAreaFaqSchemaRoutes = [
  '/service-areas/austin',
  '/service-areas/cedar-park',
  '/service-areas/georgetown',
  '/service-areas/lakeway',
  '/service-areas/leander',
  '/service-areas/north-austin',
  '/service-areas/northwest-hills',
  '/service-areas/round-rock',
  '/service-areas/tarrytown',
  '/service-areas/west-lake-highlands',
  '/service-areas/west-lake-hills'
];
const requiredGuideFaqSchemaRoutes = [
  '/guides/best-paint-texas-heat',
  '/guides/hoa-color-tips-austin',
  '/guides/how-often-paint-central-texas',
  '/guides/painting-costs-austin'
];

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function readRequired(filePath, label) {
  if (!existsSync(filePath)) {
    fail(`${label} is missing at ${filePath}`);
    return '';
  }
  return readFileSync(filePath, 'utf8');
}

function walkFiles(dir, predicate, out = []) {
  if (!existsSync(dir)) {
    return out;
  }

  for (const name of readdirSync(dir)) {
    const filePath = join(dir, name);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      walkFiles(filePath, predicate, out);
    } else if (!predicate || predicate(filePath)) {
      out.push(filePath);
    }
  }

  return out;
}

function validateHeroBackgroundImageSources() {
  const sourceFiles = walkFiles(resolve(projectRoot, 'src'), filePath => /\.(tsx?|mts|mjs|jsx?)$/.test(filePath));
  const bannedPattern = bannedHeroBackgroundImages.map(image => image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const heroFieldPattern = new RegExp(`\\b(heroImage|hero)\\s*:\\s*["']/(${bannedPattern})["']`, 'g');
  const heroSrcPattern = new RegExp(`src=["']/(${bannedPattern})["']`, 'g');

  for (const filePath of sourceFiles) {
    const source = readFileSync(filePath, 'utf8');
    const relativePath = relative(projectRoot, filePath).replace(/\\/g, '/');

    for (const match of source.matchAll(heroFieldPattern)) {
      fail(`${relativePath}: hero background uses banned before/after image /${match[2]}`);
    }

    if (relativePath.startsWith('src/pages/service-areas/')) {
      for (const match of source.matchAll(heroSrcPattern)) {
        fail(`${relativePath}: hero image src uses banned before/after image /${match[1]}`);
      }
    }
  }
}

function routeFromHtmlFile(filePath) {
  const rel = relative(distPath, filePath).replace(/\\/g, '/');

  if (rel === 'index.html') {
    return '/';
  }

  if (rel === '404.html') {
    return '/404';
  }

  if (rel.endsWith('/index.html')) {
    return `/${rel.slice(0, -'/index.html'.length)}`;
  }

  return `/${rel.replace(/\.html$/, '')}`;
}

function attrs(tag) {
  const result = {};

  for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/g)) {
    result[match[1].toLowerCase()] = match[3];
  }

  return result;
}

function jsonLdItems(html, routePath) {
  const items = [];

  for (const [index, match] of [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].entries()) {
    const raw = match[1]
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&#x27;/g, "'");

    try {
      const parsed = JSON.parse(raw);
      const roots = Array.isArray(parsed) ? parsed : [parsed];

      for (const root of roots) {
        if (Array.isArray(root?.['@graph'])) {
          items.push(...root['@graph']);
        } else {
          items.push(root);
        }
      }
    } catch (error) {
      fail(`${routePath}: invalid JSON-LD block ${index + 1}: ${error.message}`);
    }
  }

  return items;
}

function schemaTypeIncludes(item, typeName) {
  const schemaType = item?.['@type'];
  return Array.isArray(schemaType) ? schemaType.includes(typeName) : schemaType === typeName;
}

function asArray(value) {
  if (value === null || value === undefined) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function isServiceLocationRoute(routePath) {
  return localServicePrefixes.some(prefix => routePath.startsWith(prefix));
}

function isLocalBusinessSchemaRoute(routePath) {
  return (
    coreLocalBusinessRoutes.has(routePath) ||
    routePath === '/service-areas' ||
    routePath.startsWith('/service-areas/') ||
    routePath.startsWith('/areas/') ||
    isServiceLocationRoute(routePath)
  );
}

function hasValidAggregateRating(schema) {
  const aggregateRating = schema?.aggregateRating || {};
  const ratingValue = Number(aggregateRating.ratingValue);
  const reviewCount = Number(aggregateRating.reviewCount);
  const bestRating = Number(aggregateRating.bestRating);
  const worstRating = Number(aggregateRating.worstRating);

  return (
    schemaTypeIncludes(aggregateRating, 'AggregateRating') &&
    Number.isFinite(ratingValue) &&
    ratingValue >= minimumAggregateRatingValue &&
    ratingValue <= 5 &&
    Number.isFinite(reviewCount) &&
    reviewCount >= minimumAggregateReviewCount &&
    bestRating === 5 &&
    worstRating === 1
  );
}

function hasPaintingEstimateAction(schema) {
  return asArray(schema?.potentialAction).some(action => {
    const target = action?.target || {};
    const object = action?.object || {};
    const serviceType = String(object.serviceType || '');

    return (
      schemaTypeIncludes(action, 'QuoteAction') &&
      action?.name === 'Request a painting estimate' &&
      action?.provider?.['@id'] === `${baseUrl}/#localbusiness` &&
      target?.urlTemplate === `${baseUrl}/contact` &&
      schemaTypeIncludes(target, 'EntryPoint') &&
      schemaTypeIncludes(object, 'Service') &&
      object?.name === 'Painting estimate for Greater Austin homes and businesses' &&
      serviceType.includes('Interior painting') &&
      serviceType.includes('exterior painting') &&
      serviceType.includes('cabinet painting') &&
      serviceType.includes('commercial painting')
    );
  });
}

function itemListUrls(schema) {
  return asArray(schema?.itemListElement)
    .map(item => item?.url || item?.item?.url)
    .filter(Boolean);
}

function stripQueryAndHash(value) {
  return value.split('#')[0].split('?')[0];
}

function safeDecodePath(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function isSkippedProtocol(value) {
  return /^(mailto|tel|sms|data|blob|javascript):/i.test(value);
}

function isExternalUrl(value) {
  return /^(https?:)?\/\//i.test(value) && !value.startsWith(baseUrl);
}

function normalizeRoutePath(value, currentRoute = '/') {
  if (!value || value.startsWith('#') || isSkippedProtocol(value)) {
    return '';
  }

  if (value.startsWith(baseUrl)) {
    value = value.slice(baseUrl.length) || '/';
  } else if (/^https?:\/\//i.test(value) || value.startsWith('//')) {
    return '';
  }

  try {
    const currentPath = currentRoute.endsWith('/') ? currentRoute : `${currentRoute}/`;
    const url = new URL(value, `${baseUrl}${currentPath}`);
    if (url.origin !== baseUrl) {
      return '';
    }
    value = url.pathname;
  } catch {
    return '';
  }

  return stripQueryAndHash(value).replace(/\/$/, '') || '/';
}

function normalizeAnchorText(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function assertPriorityAnchor(pages, sourceRoute, expectedText, expectedRoute) {
  const page = pages.get(sourceRoute);

  if (!page) {
    fail(`${sourceRoute}: missing page for priority local-search anchor validation`);
    return;
  }

  for (const match of page.html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const targetRoute = normalizeRoutePath(match[1].trim(), sourceRoute);
    const anchorText = normalizeAnchorText(match[2]);

    if (targetRoute === expectedRoute && anchorText.includes(expectedText)) {
      return;
    }
  }

  fail(`${sourceRoute}: missing priority local-search anchor "${expectedText}" to ${expectedRoute}`);
}

function assertExactAnchorTargets(pages, expectedText, expectedRoute) {
  const mismatches = [];
  let matches = 0;

  for (const [sourceRoute, page] of pages) {
    for (const match of page.html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
      const targetRoute = normalizeRoutePath(match[1].trim(), sourceRoute);
      const anchorText = normalizeAnchorText(match[2]);

      if (anchorText.toLowerCase() === expectedText.toLowerCase()) {
        matches += 1;

        if (targetRoute !== expectedRoute) {
          mismatches.push(`${sourceRoute} links "${expectedText}" to ${targetRoute}`);
        }
      }
    }
  }

  if (matches === 0) {
    fail(`missing exact priority local-search anchor "${expectedText}" to ${expectedRoute}`);
  }

  for (const mismatch of mismatches) {
    fail(`${mismatch}; exact priority anchors should point to ${expectedRoute}`);
  }
}

function assertAnchorPrefixTargets(pages, expectedText, expectedRoute) {
  const mismatches = [];
  let matches = 0;
  const normalizedExpected = expectedText.toLowerCase();

  for (const [sourceRoute, page] of pages) {
    for (const match of page.html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
      const targetRoute = normalizeRoutePath(match[1].trim(), sourceRoute);
      const anchorText = normalizeAnchorText(match[2]);
      const normalizedAnchorText = anchorText.toLowerCase();

      if (normalizedAnchorText === normalizedExpected || normalizedAnchorText.startsWith(`${normalizedExpected} `)) {
        matches += 1;

        if (targetRoute !== expectedRoute) {
          mismatches.push(`${sourceRoute} links "${expectedText}"-labeled anchor to ${targetRoute}`);
        }
      }
    }
  }

  if (matches === 0) {
    fail(`missing Austin-labeled local-search anchor prefix "${expectedText}" to ${expectedRoute}`);
  }

  for (const mismatch of mismatches) {
    fail(`${mismatch}; Austin-labeled service anchors should point to ${expectedRoute}`);
  }
}

function assertPageContains(pages, sourceRoute, expectedText) {
  const page = pages.get(sourceRoute);

  if (!page) {
    fail(`${sourceRoute}: missing page for priority local-search text validation`);
    return;
  }

  if (!normalizeAnchorText(page.html).includes(expectedText)) {
    fail(`${sourceRoute}: missing priority local-search text "${expectedText}"`);
  }
}

function htmlFileForRoute(routePath) {
  if (routePath === '/') {
    return resolve(distPath, 'index.html');
  }

  return resolve(distPath, routePath.slice(1), 'index.html');
}

function routeExists(routePath, sitemapSet) {
  return sitemapSet.has(routePath) || existsSync(htmlFileForRoute(routePath));
}

function redirectedRouteExists(routePath, sitemapSet) {
  const targetRoute = internalRedirectTargets.get(routePath);
  return targetRoute ? routeExists(targetRoute, sitemapSet) : false;
}

function extractSitemapPaths(xml) {
  return [...xml.matchAll(/<loc>https:\/\/www\.hillcopaint\.com([^<]*)<\/loc>/g)]
    .map(match => match[1] || '/');
}

function extractMiddlewareRedirects(source) {
  const blockMatch = source.match(/const REDIRECTS[\s\S]*?=\s*{([\s\S]*?)\n};/);
  if (!blockMatch) {
    return [];
  }

  return [...blockMatch[1].matchAll(/^\s*['"]([^'"]+)['"]\s*:\s*['"]([^'"]+)['"]\s*,?/gm)]
    .map(match => ({
      source: match[1],
      target: match[2]
    }));
}

function extractStaticRedirects(source) {
  return source
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))
    .map(line => {
      const [sourcePath, target, code] = line.split(/\s+/);
      return { source: sourcePath, target, code };
    });
}

function expectedCanonical(routePath) {
  return routePath === '/' ? `${baseUrl}/` : `${baseUrl}${routePath}`;
}

function getMetaTags(html, selector) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map(match => match[0])
    .filter(tag => selector(attrs(tag)));
}

function getLocalAssetPath(value) {
  if (!value || isSkippedProtocol(value) || isExternalUrl(value)) {
    return '';
  }

  if (value.startsWith(baseUrl)) {
    value = value.slice(baseUrl.length) || '/';
  } else if (/^https?:\/\//i.test(value) || value.startsWith('//')) {
    return '';
  }

  if (!value.startsWith('/')) {
    return '';
  }

  const cleanPath = safeDecodePath(stripQueryAndHash(value));
  if (!cleanPath || cleanPath === '/') {
    return '';
  }

  return cleanPath;
}

function assertLocalAssetExists(value, sourceRoute, sourceLabel) {
  const localPath = getLocalAssetPath(value);
  if (!localPath) {
    return;
  }

  const ext = extname(localPath).toLowerCase();
  if (ext && !assetExtensions.has(ext)) {
    return;
  }

  if (!existsSync(resolve(distPath, localPath.slice(1)))) {
    fail(`${sourceRoute}: missing local asset ${value} referenced by ${sourceLabel}`);
  }
}

function collectAssetRefsFromHtml(html) {
  const refs = [];

  for (const match of html.matchAll(/<(img|script|source|video|audio|iframe)\b[^>]*(src|poster)=["']([^"']+)["'][^>]*>/gi)) {
    refs.push({ value: match[3], label: `<${match[1]} ${match[2]}>` });
  }

  for (const match of html.matchAll(/<link\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
    const tagAttrs = attrs(match[0]);
    const rel = (tagAttrs.rel || '').toLowerCase();

    if (/^(stylesheet|preload|modulepreload|icon|apple-touch-icon|manifest)$/.test(rel)) {
      refs.push({ value: match[1], label: `<link rel="${rel}">` });
    }
  }

  for (const match of html.matchAll(/\bsrcset=["']([^"']+)["']/gi)) {
    for (const candidate of match[1].split(',')) {
      const value = candidate.trim().split(/\s+/)[0];
      refs.push({ value, label: 'srcset' });
    }
  }

  for (const match of html.matchAll(/<meta\b[^>]*content=["']([^"']+)["'][^>]*>/gi)) {
    const tagAttrs = attrs(match[0]);
    const key = (tagAttrs.property || tagAttrs.name || '').toLowerCase();

    if (key.includes('image') || key === 'og:logo') {
      refs.push({ value: match[1], label: `<meta ${key}>` });
    }
  }

  return refs;
}

function collectUrlsFromJsonLd(value, out = []) {
  if (Array.isArray(value)) {
    value.forEach(item => collectUrlsFromJsonLd(item, out));
    return out;
  }

  if (value && typeof value === 'object') {
    for (const [key, nestedValue] of Object.entries(value)) {
      if (typeof nestedValue === 'string' && /^(url|contenturl|image|logo|thumbnailurl)$/i.test(key)) {
        out.push(nestedValue);
      } else {
        collectUrlsFromJsonLd(nestedValue, out);
      }
    }
  }

  return out;
}

function extractDisallowRules(robotsText) {
  return robotsText
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => /^disallow\s*:/i.test(line))
    .map(line => line.replace(/^disallow\s*:/i, '').trim())
    .filter(Boolean);
}

function robotsRuleBlocksPath(rule, routePath) {
  if (rule === '/') {
    return true;
  }

  const cleanRule = rule.replace(/\*.*$/, '').replace(/\$$/, '');
  return cleanRule && routePath.startsWith(cleanRule);
}

function validateCssAssets(cssFiles) {
  for (const filePath of cssFiles) {
    const css = readFileSync(filePath, 'utf8');
    const rel = relative(distPath, filePath).replace(/\\/g, '/');

    for (const match of css.matchAll(/url\((["']?)([^"')]+)\1\)/gi)) {
      const value = match[2].trim();
      if (!value || isSkippedProtocol(value) || isExternalUrl(value) || /^https?:\/\//i.test(value)) {
        continue;
      }

      const cleanValue = safeDecodePath(stripQueryAndHash(value));
      const resolvedAsset = cleanValue.startsWith('/')
        ? resolve(distPath, cleanValue.slice(1))
        : resolve(dirname(filePath), cleanValue);

      if (!existsSync(resolvedAsset)) {
        fail(`${rel}: missing CSS asset ${value}`);
      }
    }
  }
}

function extractGeneratedFunctionSitemap(source) {
  const countMatch = source.match(/generatedSitemapUrlCount\s*=\s*(\d+)/);
  const xmlMatch = source.match(/generatedSitemapXml\s*=\s*("(?:\\.|[^"\\])*")/s);

  return {
    count: countMatch ? Number(countMatch[1]) : -1,
    xml: xmlMatch ? JSON.parse(xmlMatch[1]) : ''
  };
}

function extractGeneratedSpaRoutes(source) {
  const countMatch = source.match(/generatedSpaRouteCount\s*=\s*(\d+)/);
  const routesMatch = source.match(/generatedSpaRoutes\s*=\s*(\[[\s\S]*?\])\s*as const/);

  return {
    count: countMatch ? Number(countMatch[1]) : -1,
    routes: routesMatch ? JSON.parse(routesMatch[1]) : []
  };
}

function extractStringArrayConst(source, constName) {
  const pattern = new RegExp(`const\\s+${constName}\\s*=\\s*\\[([\\s\\S]*?)\\](?:\\s+as\\s+const)?`);
  const match = source.match(pattern);

  if (!match) {
    return [];
  }

  return [...match[1].matchAll(/['"]([^'"]+)['"]/g)].map(item => item[1]);
}

function extractLocationServiceAreaSlugs(source) {
  const result = new Map();

  for (const match of source.matchAll(/['"]([^'"]+)['"]\s*:\s*{[\s\S]*?serviceAreaSlug:\s*['"]([^'"]+)['"]/g)) {
    result.set(match[1], match[2]);
  }

  return result;
}

function serviceLocationSlugFromRoute(routePath) {
  const prefix = localServicePrefixes.find(item => routePath.startsWith(item));

  return prefix ? routePath.slice(prefix.length) : '';
}

function pageLinksToRoute(page, sourceRoute, expectedRoute) {
  return [...page.html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)]
    .some(match => normalizeRoutePath(match[1].trim(), sourceRoute) === expectedRoute);
}

function pageLinksToHref(page, expectedHref) {
  return [...page.html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)]
    .some(match => match[1].trim().replace(/&amp;/g, '&') === expectedHref);
}

function pageHasVisibleLocalTrustSection(page) {
  return (
    pageLinksToHref(page, googleBusinessProfileUrl) &&
    pageLinksToHref(page, canonicalPhoneHref) &&
    page.html.includes('View Hill Country Painting on Google') &&
    page.html.includes('Hill Country Painting - Service Area Map') &&
    page.html.includes('Serving Austin, TX and the Greater Austin area')
  );
}

function run() {
  console.log('\n=== Generated SEO Validation ===\n');

  const sitemapXml = readRequired(sitemapPath, 'sitemap.xml');
  const distSitemapXml = readRequired(distSitemapPath, 'dist/sitemap.xml');
  const functionSitemapSource = readRequired(functionSitemapPath, 'functions/generatedSitemap.ts');
  const functionRoutesSource = readRequired(functionRoutesPath, 'functions/generatedRoutes.ts');
  const middlewareSource = readRequired(middlewarePath, 'functions/_middleware.ts');
  const localSeoSource = readRequired(localSeoPath, 'src/config/localSeo.ts');
  const locationsConfigSource = readRequired(locationsConfigPath, 'src/config/locations.ts');
  const serviceProductsSource = readRequired(serviceProductsPath, 'src/config/serviceProducts.ts');
  const colorConsultationSource = readRequired(colorConsultationPath, 'src/pages/ColorConsultation.tsx');
  const googleMapEmbedSource = readRequired(googleMapEmbedPath, 'src/components/GoogleMapEmbed.tsx');
  const gbpRatingHookSource = readRequired(gbpRatingHookPath, 'src/hooks/useGBPRating.ts');
  const aiManifestGeneratorSource = readRequired(aiManifestGeneratorPath, 'scripts/generate-ai-manifests.mjs');
  const publicEnvSource = readRequired(publicEnvPath, 'public/env.js');
  const sitemapPhpSource = readRequired(sitemapPhpPath, 'public/sitemap.php');
  const galleryPageSource = readRequired(galleryPagePath, 'src/pages/Gallery.tsx');
  const robotsText = readRequired(robotsPath, 'robots.txt');
  const llmsText = readRequired(llmsPath, 'llms.txt');
  const llmsFullText = readRequired(llmsFullPath, 'llms-full.txt');
  const aiText = readRequired(aiPath, 'ai.txt');
  const entityFactsText = readRequired(entityFactsPath, 'entity-facts.json');
  const citationFactsText = readRequired(citationFactsPath, 'citation-facts.json');
  const headersText = readRequired(headersPath, '_headers');
  const redirectsText = readRequired(redirectsPath, '_redirects');
  const routesConfigText = readRequired(routesConfigPath, '_routes.json');

  validateHeroBackgroundImageSources();

  if (sitemapXml && distSitemapXml && sitemapXml !== distSitemapXml) {
    fail('dist/sitemap.xml must exactly match the generated public/sitemap.xml');
  }

  if (sitemapXml && functionSitemapSource) {
    const functionSitemap = extractGeneratedFunctionSitemap(functionSitemapSource);
    const publicUrlCount = (sitemapXml.match(/<loc>/g) || []).length;

    if (functionSitemap.xml !== sitemapXml) {
      fail('functions/generatedSitemap.ts must exactly match the generated public/sitemap.xml');
    }

    if (functionSitemap.count !== publicUrlCount) {
      fail(`functions/generatedSitemap.ts URL count ${functionSitemap.count} should be ${publicUrlCount}`);
    }
  }

  if (!existsSync(distPath)) {
    fail(`dist is missing at ${distPath}`);
  }

  const shortRevalidationCache = 'public, max-age=60, must-revalidate';

  for (const aiManifestPath of ['/llms.txt', '/llms-full.txt', '/ai.txt', '/entity-facts.json', '/citation-facts.json']) {
    const pattern = new RegExp(`${aiManifestPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+[\\s\\S]*?Cache-Control:\\s*${shortRevalidationCache.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
    if (!pattern.test(headersText)) {
      fail(`${aiManifestPath}: _headers should use short revalidation cache for AI/citation freshness`);
    }

    if (!middlewareSource.includes(`'${aiManifestPath}'`)) {
      fail(`${aiManifestPath}: middleware should explicitly serve AI/citation assets with short cache headers`);
    }
  }

  if (!middlewareSource.includes(`headers.set('Cache-Control', '${shortRevalidationCache}')`)) {
    fail('functions/_middleware.ts must enforce short revalidation cache headers for AI/citation assets');
  }

  const hostCanonicalizationSignals = [
    "url.hostname.toLowerCase() !== 'www.hillcopaint.com'",
    "forwardedProto !== 'https'",
    "url.protocol = 'https'",
    "url.hostname = 'www.hillcopaint.com'",
    'status: 301'
  ];

  for (const signal of hostCanonicalizationSignals) {
    if (!middlewareSource.includes(signal)) {
      fail(`functions/_middleware.ts must preserve host/protocol canonicalization signal: ${signal}`);
    }
  }

  const sitemapPaths = extractSitemapPaths(sitemapXml);
  const sitemapSet = new Set(sitemapPaths);
  const generatedSpaRouteData = extractGeneratedSpaRoutes(functionRoutesSource);
  const generatedSpaRoutes = generatedSpaRouteData.routes;
  const generatedSpaRouteSet = new Set(generatedSpaRoutes);
  const configuredGreaterAustinAreas = extractStringArrayConst(localSeoSource, 'greaterAustinServiceAreas');
  const configuredGreaterAustinCounties = extractStringArrayConst(localSeoSource, 'greaterAustinServiceCounties');
  const configuredPriorityLocalSearchTopics = extractStringArrayConst(localSeoSource, 'priorityLocalSearchTopics');
  const locationServiceAreaSlugs = extractLocationServiceAreaSlugs(locationsConfigSource);
  const middlewareRedirects = extractMiddlewareRedirects(middlewareSource);
  const middlewareRedirectMap = new Map(middlewareRedirects.map(redirect => [redirect.source, redirect.target]));
  const staticRedirects = extractStaticRedirects(redirectsText);
  const staticRedirectMap = new Map(staticRedirects.map(redirect => [redirect.source, redirect]));
  const htmlFiles = walkFiles(distPath, filePath => filePath.endsWith('.html'));
  const cssFiles = walkFiles(distPath, filePath => filePath.endsWith('.css'));
  const jsFiles = walkFiles(distPath, filePath => filePath.endsWith('.js'));
  const pages = new Map(htmlFiles.map(filePath => [
    routeFromHtmlFile(filePath),
    { filePath, html: readFileWithRetry(filePath) }
  ]));

  const inbound = new Map(sitemapPaths.map(routePath => [routePath, 0]));
  const nonSitemapInternalLinks = new Map();
  const disallowRules = extractDisallowRules(robotsText);
  const sitemapTitles = new Map();
  const sitemapDescriptions = new Map();
  const sitemapH1s = new Map();

  for (const routePath of sitemapPaths) {
    const locationSlug = serviceLocationSlugFromRoute(routePath);

    if (!locationSlug) {
      continue;
    }

    const serviceAreaSlug = locationServiceAreaSlugs.get(locationSlug);
    const expectedServiceAreaRoute = serviceAreaSlug ? `/service-areas/${serviceAreaSlug}` : '';
    const page = pages.get(routePath);

    if (!serviceAreaSlug) {
      fail(`${routePath}: service-location page has no matching serviceAreaSlug in src/config/locations.ts`);
      continue;
    }

    if (!page) {
      fail(`${routePath}: missing generated HTML for service-area link validation`);
      continue;
    }

    const linksToServiceArea = pageLinksToRoute(page, routePath, expectedServiceAreaRoute);

    if (!linksToServiceArea) {
      fail(`${routePath}: service-location page should link to local service-area hub ${expectedServiceAreaRoute}`);
    }
  }

  for (const [hubRoute, serviceLocationSlug] of requiredGeoHubServiceLocationSlugs) {
    const routesToCheck = sitemapPaths.filter(routePath => routePath === hubRoute || routePath.startsWith(`${hubRoute}/`));

    if (routesToCheck.length === 0) {
      fail(`${hubRoute}: required local hub route is missing from sitemap`);
      continue;
    }

    for (const routePath of routesToCheck) {
      const page = pages.get(routePath);

      if (!page) {
        fail(`${routePath}: missing generated HTML for hub-to-service-location link validation`);
        continue;
      }

      for (const prefix of localServicePrefixes) {
        const expectedRoute = `${prefix}${serviceLocationSlug}`;

        if (!pageLinksToRoute(page, routePath, expectedRoute)) {
          fail(`${routePath}: high-value local area page should link to ${expectedRoute}`);
        }
      }
    }
  }

  for (const [serviceAreaRoute, serviceLocationSlug] of requiredServiceAreaServiceLocationSlugs) {
    const page = pages.get(serviceAreaRoute);

    if (!page) {
      fail(`${serviceAreaRoute}: missing generated HTML for service-area local service link validation`);
      continue;
    }

    for (const prefix of localServicePrefixes) {
      const expectedRoute = `${prefix}${serviceLocationSlug}`;

      if (!pageLinksToRoute(page, serviceAreaRoute, expectedRoute)) {
        fail(`${serviceAreaRoute}: service-area page should link to local service page ${expectedRoute}`);
      }
    }

    if (!pageHasVisibleLocalTrustSection(page)) {
      fail(`${serviceAreaRoute}: service-area page should include the visible NAP/map/Google Business Profile trust section`);
    }
  }

  const serviceAreasHubPage = pages.get('/service-areas');
  if (!serviceAreasHubPage) {
    fail('/service-areas: missing generated HTML for visible local trust validation');
  } else if (!pageHasVisibleLocalTrustSection(serviceAreasHubPage)) {
    fail('/service-areas: service-area hub should include the visible NAP/map/Google Business Profile trust section');
  }

  for (const serviceAreaRoute of requiredServiceAreaFaqSchemaRoutes) {
    const page = pages.get(serviceAreaRoute);

    if (!page) {
      fail(`${serviceAreaRoute}: missing generated HTML for service-area FAQ schema validation`);
      continue;
    }

    if (!/"@type"\s*:\s*"FAQPage"/.test(page.html)) {
      fail(`${serviceAreaRoute}: service-area page with visible FAQs should include FAQPage schema`);
    }
  }

  for (const guideRoute of requiredGuideFaqSchemaRoutes) {
    const page = pages.get(guideRoute);

    if (!page) {
      fail(`${guideRoute}: missing generated HTML for guide FAQ schema validation`);
      continue;
    }

    if (!/"@type"\s*:\s*"FAQPage"/.test(page.html)) {
      fail(`${guideRoute}: guide page with visible FAQs should include FAQPage schema`);
    }
  }

  if (!publicEnvSource.includes(`VITE_SUPABASE_URL: "${currentSupabaseUrl}"`)) {
    fail(`public/env.js must point VITE_SUPABASE_URL at ${currentSupabaseUrl}`);
  }

  if (!sitemapPhpSource.includes(`$supabaseUrl = '${currentSupabaseUrl}';`)) {
    fail(`public/sitemap.php must request sitemap data from ${currentSupabaseUrl}`);
  }

  if (!middlewareSource.includes(`const CURRENT_SUPABASE_URL = '${currentSupabaseUrl}';`)) {
    fail(`functions/_middleware.ts must point CURRENT_SUPABASE_URL at ${currentSupabaseUrl}`);
  }

  for (const signal of [
    'GREATER_AUSTIN_COUNTY_SERVICE_AREAS',
    'Travis County',
    'Williamson County',
    'Hays County',
    'schema.serviceArea = countyServiceAreas',
    'schema.mainEntityOfPage',
    'schema.potentialAction = requestEstimateAction',
    "name: 'Request a painting estimate'"
  ]) {
    if (!middlewareSource.includes(signal)) {
      fail(`functions/_middleware.ts Austin service schema repair must preserve ${signal}`);
    }
  }

  if (googleMapEmbedSource.includes('maps/embed?pb=')) {
    fail('src/components/GoogleMapEmbed.tsx must not use the old hard-coded Google Maps pb embed fallback');
  }

  if (!googleMapEmbedSource.includes('maps?q=') || !googleMapEmbedSource.includes('output=embed')) {
    fail('src/components/GoogleMapEmbed.tsx must use a query-based Google Maps fallback embed');
  }

  if (!gbpRatingHookSource.includes('../config/business') || !gbpRatingHookSource.includes('businessConfig.aggregateRating')) {
    fail('src/hooks/useGBPRating.ts must use the canonical Google review rating data from src/config/business.ts');
  }

  if (
    gbpRatingHookSource.includes("reviewCount: '150'") ||
    gbpRatingHookSource.includes('reviewCount: 150') ||
    gbpRatingHookSource.includes('Using placeholder values until client provides live API credentials')
  ) {
    fail('src/hooks/useGBPRating.ts must not carry stale placeholder Google review data');
  }

  for (const retiredSupabaseUrl of retiredSupabaseUrls) {
    if (galleryPageSource.includes(retiredSupabaseUrl)) {
      fail(`src/pages/Gallery.tsx must not load retired Supabase project ${retiredSupabaseUrl}`);
    }

    if (publicEnvSource.includes(retiredSupabaseUrl)) {
      fail(`public/env.js must not point at retired Supabase project ${retiredSupabaseUrl}`);
    }

    if (sitemapPhpSource.includes(retiredSupabaseUrl)) {
      fail(`public/sitemap.php must not request sitemap data from retired Supabase project ${retiredSupabaseUrl}`);
    }

    for (const filePath of [...htmlFiles, ...jsFiles]) {
      const source = readFileSync(filePath, 'utf8');
      if (source.includes(retiredSupabaseUrl)) {
        fail(`${relative(projectRoot, filePath)} contains retired Supabase project ${retiredSupabaseUrl}`);
      }
    }
  }

  [
    ['/', 'Austin house painters', '/service-areas/austin'],
    ['/', 'house painters Austin', '/service-areas/austin'],
    ['/', 'painting contractors Austin', '/services'],
    ['/', 'Exterior painting service overview', '/services/exterior-painting'],
    ['/', 'Interior painting service overview', '/services/interior-painting'],
    ['/', 'Cabinet refinishing service overview', '/services/cabinet-refinishing'],
    ['/', 'Commercial painting service overview', '/services/commercial'],
    ['/', 'Austin exterior house painters', '/exterior-painting-austin'],
    ['/', 'Austin interior painters', '/interior-painting-austin'],
    ['/', 'Austin cabinet painting', '/cabinet-refinishing-austin'],
    ['/', 'Austin commercial painters', '/commercial-painting-austin'],
    ['/services', 'Exterior painting service overview', '/services/exterior-painting'],
    ['/services', 'Interior painting service overview', '/services/interior-painting'],
    ['/services', 'Cabinet refinishing service overview', '/services/cabinet-refinishing'],
    ['/services', 'Commercial painting service overview', '/services/commercial'],
    ['/services', 'house painters Austin', '/service-areas/austin'],
    ['/services', 'painting contractors Austin', '/services'],
    ['/services', 'Austin exterior house painters', '/exterior-painting-austin'],
    ['/services', 'Austin interior painters', '/interior-painting-austin'],
    ['/services', 'Austin cabinet painting', '/cabinet-refinishing-austin'],
    ['/services', 'Austin commercial painters', '/commercial-painting-austin'],
    ['/services/exterior-painting', 'Austin exterior house painters', '/exterior-painting-austin'],
    ['/services/interior-painting', 'Austin interior painters', '/interior-painting-austin'],
    ['/services/cabinet-refinishing', 'Austin cabinet painting', '/cabinet-refinishing-austin'],
    ['/services/commercial', 'Austin commercial painters', '/commercial-painting-austin'],
    ['/service-areas/austin', 'Austin exterior house painters', '/exterior-painting-austin'],
    ['/service-areas/austin', 'Austin interior painters', '/interior-painting-austin'],
    ['/service-areas/austin', 'Austin cabinet painting', '/cabinet-refinishing-austin'],
    ['/service-areas/austin', 'Austin commercial painters', '/commercial-painting-austin'],
    ['/service-areas', 'Round Rock house painters', '/service-areas/round-rock'],
    ['/service-areas', 'Cedar Park house painters', '/service-areas/cedar-park'],
    ['/service-areas', 'Georgetown house painters', '/service-areas/georgetown'],
    ['/service-areas', 'Leander house painters', '/service-areas/leander']
  ].forEach(([sourceRoute, expectedText, expectedRoute]) => {
    assertPriorityAnchor(pages, sourceRoute, expectedText, expectedRoute);
  });

  [
    ['Austin exterior house painters', '/exterior-painting-austin'],
    ['Austin interior painters', '/interior-painting-austin'],
    ['Austin cabinet painting', '/cabinet-refinishing-austin'],
    ['Austin commercial painters', '/commercial-painting-austin'],
    ['Austin house painters', '/service-areas/austin'],
    ['house painters Austin', '/service-areas/austin'],
    ['painting contractors Austin', '/services']
  ].forEach(([expectedText, expectedRoute]) => {
    assertExactAnchorTargets(pages, expectedText, expectedRoute);
  });

  [
    ['Exterior Painting in Austin', '/exterior-painting-austin'],
    ['Interior Painting in Austin', '/interior-painting-austin'],
    ['exterior painting in Austin', '/exterior-painting-austin'],
    ['Exterior Painting Austin', '/exterior-painting-austin'],
    ['Interior Painting Austin', '/interior-painting-austin'],
    ['Cabinet Painting Austin', '/cabinet-refinishing-austin'],
    ['Commercial Painting Austin', '/commercial-painting-austin']
  ].forEach(([expectedText, expectedRoute]) => {
    assertAnchorPrefixTargets(pages, expectedText, expectedRoute);
  });

  [
    ['/exterior-painting-austin', 'Austin exterior house painters'],
    ['/interior-painting-austin', 'Austin interior painters'],
    ['/cabinet-refinishing-austin', 'Austin cabinet painting'],
    ['/commercial-painting-austin', 'Austin commercial painters'],
    ['/exterior-painting-austin', 'painting contractors Austin'],
    ['/interior-painting-austin', 'painting contractors Austin'],
    ['/cabinet-refinishing-austin', 'painting contractors Austin'],
    ['/commercial-painting-austin', 'painting contractors Austin']
  ].forEach(([sourceRoute, expectedText]) => {
    assertPageContains(pages, sourceRoute, expectedText);
  });

  if (generatedSpaRouteData.count !== generatedSpaRouteSet.size) {
    fail(`functions/generatedRoutes.ts route count ${generatedSpaRouteData.count} should be ${generatedSpaRouteSet.size}`);
  }

  if (generatedSpaRoutes.length !== generatedSpaRouteSet.size) {
    fail('functions/generatedRoutes.ts contains duplicate routes');
  }

  if (configuredGreaterAustinAreas.length === 0) {
    fail('src/config/localSeo.ts must export greaterAustinServiceAreas');
  }

  if (!aiManifestGeneratorSource.includes("extractStringArrayConst(localSeoSource, 'greaterAustinServiceAreas')")) {
    fail('scripts/generate-ai-manifests.mjs must generate service areas from src/config/localSeo.ts');
  }

  if (!aiManifestGeneratorSource.includes("extractStringArrayConst(localSeoSource, 'greaterAustinServiceCounties')")) {
    fail('scripts/generate-ai-manifests.mjs must generate service counties from src/config/localSeo.ts');
  }

  if (!aiManifestGeneratorSource.includes("extractStringArrayConst(localSeoSource, 'priorityLocalSearchTopics')")) {
    fail('scripts/generate-ai-manifests.mjs must generate priority search topics from src/config/localSeo.ts');
  }

  if (!serviceProductsSource.includes("import { greaterAustinServiceAreas } from './localSeo'")) {
    fail('src/config/serviceProducts.ts must import the canonical greaterAustinServiceAreas list');
  }

  if ((serviceProductsSource.match(/areaServed:\s*greaterAustinServiceAreas/g) || []).length < 4) {
    fail('src/config/serviceProducts.ts service products must use greaterAustinServiceAreas for areaServed');
  }

  if (!colorConsultationSource.includes("import { greaterAustinServiceAreas } from '../config/localSeo'")) {
    fail('src/pages/ColorConsultation.tsx must import the canonical greaterAustinServiceAreas list');
  }

  if (!/areaServed:\s*greaterAustinServiceAreas/.test(colorConsultationSource)) {
    fail('src/pages/ColorConsultation.tsx service schema must use greaterAustinServiceAreas for areaServed');
  }

  for (const requiredArea of ['Austin', 'Leander', 'Georgetown', 'Round Rock', 'Cedar Park', 'North Austin']) {
    if (!configuredGreaterAustinAreas.includes(requiredArea)) {
      fail(`greaterAustinServiceAreas is missing priority area ${requiredArea}`);
    }
  }

  for (const requiredCounty of ['Travis County', 'Williamson County', 'Hays County']) {
    if (!configuredGreaterAustinCounties.includes(requiredCounty)) {
      fail(`greaterAustinServiceCounties is missing priority county ${requiredCounty}`);
    }
  }

  for (const requiredTopic of ['Austin house painters', 'house painters near me Austin', 'exterior painters near me Austin', 'Austin commercial painters']) {
    if (!configuredPriorityLocalSearchTopics.includes(requiredTopic)) {
      fail(`priorityLocalSearchTopics is missing priority topic ${requiredTopic}`);
    }
  }

  if (!middlewareSource.includes("import { generatedSpaRoutes } from './generatedRoutes'")) {
    fail('functions/_middleware.ts must import the generated SPA route allowlist');
  }

  if (/path\.startsWith\('\/areas\/'\)|path\.startsWith\('\/blog\/'\)/.test(middlewareSource)) {
    fail('functions/_middleware.ts must not use broad /areas/* or /blog/* SPA fallbacks');
  }

  for (const routePath of sitemapPaths) {
    if (!generatedSpaRouteSet.has(routePath)) {
      fail(`${routePath}: sitemap URL is missing from generated Cloudflare SPA route allowlist`);
    }
  }

  for (const utilityRoute of ['/search', '/thank-you', '/pre-approval']) {
    if (!generatedSpaRouteSet.has(utilityRoute)) {
      fail(`${utilityRoute}: utility prerender route is missing from generated Cloudflare SPA route allowlist`);
    }
  }

  if (!llmsText.includes(`${baseUrl}/llms-full.txt`)) {
    fail('llms.txt must link to the full AI route index');
  }

  if (!llmsText.includes(`${baseUrl}/entity-facts.json`) || !aiText.includes(`${baseUrl}/entity-facts.json`)) {
    fail('AI manifest files must link to entity-facts.json');
  }

  if (!llmsText.includes(`${baseUrl}/citation-facts.json`) || !aiText.includes(`${baseUrl}/citation-facts.json`)) {
    fail('AI manifest files must link to citation-facts.json');
  }

  if (!llmsText.includes('Austin house painters') || !aiText.includes('Austin house painters')) {
    fail('AI manifest files must include priority Greater Austin local search topics');
  }

  for (const routePath of sitemapPaths) {
    const canonicalUrl = expectedCanonical(routePath);
    if (!llmsFullText.includes(canonicalUrl)) {
      fail(`llms-full.txt is missing sitemap URL ${canonicalUrl}`);
    }
  }

  for (const routePath of generatedSpaRoutes) {
    if (!existsSync(htmlFileForRoute(routePath))) {
      fail(`${routePath}: generated Cloudflare SPA route has no prerendered HTML file`);
    }
  }

  try {
    const entityFacts = JSON.parse(entityFactsText);
    if (entityFacts.name !== 'Hill Country Painting') {
      fail('entity-facts.json must use the canonical business name');
    }
    if (entityFacts.url !== baseUrl) {
      fail(`entity-facts.json URL should be ${baseUrl}`);
    }
    if (entityFacts.telephone !== '(512) 240-2246') {
      fail('entity-facts.json must include the canonical phone number');
    }
    if (entityFacts.contactPoint?.telephone !== '(512) 240-2246') {
      fail('entity-facts.json must include a canonical customer service contactPoint');
    }
    if (entityFacts.openingHoursSpecification?.opens !== '08:00' || entityFacts.openingHoursSpecification?.closes !== '18:00') {
      fail('entity-facts.json must include canonical weekday opening hours');
    }
    if (entityFacts.paymentAccepted !== 'Cash, Check, Credit Card' || entityFacts.currenciesAccepted !== 'USD') {
      fail('entity-facts.json must include canonical payment and currency details');
    }
    if (entityFacts.sitemapUrlCount !== sitemapPaths.length) {
      fail(`entity-facts.json sitemapUrlCount ${entityFacts.sitemapUrlCount} should be ${sitemapPaths.length}`);
    }
    if (!Array.isArray(entityFacts.subjectOf) || !entityFacts.subjectOf.includes(`${baseUrl}/citation-facts.json`)) {
      fail('entity-facts.json must reference citation-facts.json');
    }
    if (!Array.isArray(entityFacts.staleCitationWarnings) || entityFacts.staleCitationWarnings.length < 3) {
      fail('entity-facts.json must include stale citation warnings for NAP cleanup');
    }
    const entityPriorityLocalSearchTopics = Array.isArray(entityFacts.priorityLocalSearchTopics)
      ? entityFacts.priorityLocalSearchTopics
      : [];
    if (!entityPriorityLocalSearchTopics.includes('Austin house painters')) {
      fail('entity-facts.json must include priority Greater Austin local search topics');
    }
    for (const requiredTopic of configuredPriorityLocalSearchTopics) {
      if (!entityPriorityLocalSearchTopics.includes(requiredTopic) || !JSON.stringify(entityFacts.knowsAbout || []).includes(requiredTopic)) {
        fail(`entity-facts.json must include priority local search topic ${requiredTopic}`);
      }
    }
    const entityAreaNames = asArray(entityFacts.areaServed).map(area => area?.name).filter(Boolean);
    const entityServiceAreaNames = asArray(entityFacts.serviceArea).map(area => area?.name).filter(Boolean);
    for (const requiredArea of configuredGreaterAustinAreas) {
      if (!entityAreaNames.includes(requiredArea)) {
        fail(`entity-facts.json areaServed is missing ${requiredArea}`);
      }
    }
    for (const requiredCounty of configuredGreaterAustinCounties) {
      if (!entityAreaNames.includes(requiredCounty) || !entityServiceAreaNames.includes(requiredCounty)) {
        fail(`entity-facts.json is missing county service signal ${requiredCounty}`);
      }
    }
    if (!Array.isArray(entityFacts.priorityServicePages) || !entityFacts.priorityServicePages.some(page => page?.name === 'Austin exterior house painters' && page?.url === `${baseUrl}/exterior-painting-austin`)) {
      fail('entity-facts.json must include Austin priority service pages');
    }
    if (!Array.isArray(entityFacts.makesOffer) || !JSON.stringify(entityFacts.makesOffer).includes(`${baseUrl}/cabinet-refinishing-austin`)) {
      fail('entity-facts.json must connect priority Austin service pages to LocalBusiness offers');
    }
    if (entityFacts.hasMap !== googleBusinessProfileUrl || !Array.isArray(entityFacts.sameAs) || !entityFacts.sameAs.includes(googleBusinessProfileUrl)) {
      fail('entity-facts.json must include the canonical Google Business Profile URL with Knowledge Graph ID');
    }
    if (entityFacts.identifier?.propertyID !== 'kgmid' || entityFacts.identifier?.value !== googleKnowledgeGraphId || entityFacts.identifier?.url !== googleBusinessProfileUrl) {
      fail('entity-facts.json must include the Google Knowledge Graph ID as a PropertyValue identifier');
    }
    if (!hasValidAggregateRating(entityFacts)) {
      fail('entity-facts.json must include a valid Google aggregate rating summary');
    }
  } catch (error) {
    fail(`entity-facts.json is invalid JSON (${error.message})`);
  }

  try {
    const citationFacts = JSON.parse(citationFactsText);
    const identity = citationFacts.canonicalIdentity || {};

    if (identity.name !== 'Hill Country Painting') {
      fail('citation-facts.json must use the canonical business name');
    }
    if (identity.website !== baseUrl) {
      fail(`citation-facts.json website should be ${baseUrl}`);
    }
    if (identity.telephone !== '(512) 240-2246') {
      fail('citation-facts.json must include the canonical phone number');
    }
    if (identity.contactPoint?.telephone !== '(512) 240-2246') {
      fail('citation-facts.json must include a canonical customer service contactPoint');
    }
    if (identity.openingHoursSpecification?.opens !== '08:00' || identity.openingHoursSpecification?.closes !== '18:00') {
      fail('citation-facts.json must include canonical weekday opening hours');
    }
    if (identity.paymentAccepted !== 'Cash, Check, Credit Card' || identity.currenciesAccepted !== 'USD') {
      fail('citation-facts.json must include canonical payment and currency details');
    }
    if (identity.serviceAreaBusiness !== true) {
      fail('citation-facts.json must identify Hill Country Painting as a service-area business');
    }
    if (!Array.isArray(identity.serviceAreas) || !identity.serviceAreas.includes('Rollingwood') || !identity.serviceAreas.includes('Bee Cave')) {
      fail('citation-facts.json must include high-value Greater Austin service areas');
    }
    const warnings = JSON.stringify(citationFacts.staleCitationWarnings || []);
    if (!warnings.includes('(512) 499-8450') || !warnings.includes('2808 Townes Lane')) {
      fail('citation-facts.json must warn against known stale external NAP values');
    }
    if (!warnings.includes('111 Craft Street') || !warnings.includes('1101 Satellite View') || !warnings.includes('/round-rock/') || !warnings.includes('8:00 AM-8:00 AM')) {
      fail('citation-facts.json must warn against known stale directory address, URL, and hours variants');
    }
    const citationPriorityLocalSearchTopics = Array.isArray(identity.priorityLocalSearchTopics)
      ? identity.priorityLocalSearchTopics
      : [];
    if (!citationPriorityLocalSearchTopics.includes('Austin house painters')) {
      fail('citation-facts.json must include priority Greater Austin local search topics');
    }
    for (const requiredTopic of configuredPriorityLocalSearchTopics) {
      if (!citationPriorityLocalSearchTopics.includes(requiredTopic)) {
        fail(`citation-facts.json must include priority local search topic ${requiredTopic}`);
      }
    }
    if (!Array.isArray(identity.priorityServicePages) || !identity.priorityServicePages.some(page => page?.name === 'Austin commercial painters' && page?.url === `${baseUrl}/commercial-painting-austin`)) {
      fail('citation-facts.json must include Austin priority service pages');
    }
    for (const requiredCounty of configuredGreaterAustinCounties) {
      if (!Array.isArray(identity.serviceCounties) || !identity.serviceCounties.includes(requiredCounty)) {
        fail(`citation-facts.json must include service county ${requiredCounty}`);
      }
    }
    if (identity.googleBusinessProfile !== googleBusinessProfileUrl || !Array.isArray(citationFacts.sameAs) || !citationFacts.sameAs.includes(googleBusinessProfileUrl)) {
      fail('citation-facts.json must include the canonical Google Business Profile URL with Knowledge Graph ID');
    }
    if (identity.googleKnowledgeGraphId !== googleKnowledgeGraphId) {
      fail('citation-facts.json must include the Google Knowledge Graph ID');
    }
    if (!hasValidAggregateRating(identity)) {
      fail('citation-facts.json must include a valid Google aggregate rating summary');
    }
  } catch (error) {
    fail(`citation-facts.json is invalid JSON (${error.message})`);
  }

  for (const publicAsset of ['llms.txt', 'llms-full.txt', 'ai.txt', 'entity-facts.json', 'citation-facts.json']) {
    if (!existsSync(resolve(distPath, publicAsset))) {
      fail(`${publicAsset} was not copied into the deployable dist artifact`);
    }
  }

  for (const routePath of sitemapPaths) {
    if (!pages.has(routePath)) {
      fail(`${routePath}: sitemap URL has no generated HTML file`);
    }

    const blockingRule = disallowRules.find(rule => robotsRuleBlocksPath(rule, routePath));
    if (blockingRule) {
      fail(`${routePath}: sitemap URL is blocked by robots.txt rule Disallow: ${blockingRule}`);
    }
  }

  for (const [legacyPath, expectedTarget] of requiredLegacyRedirects) {
    const actualTarget = middlewareRedirectMap.get(legacyPath);
    if (actualTarget !== expectedTarget) {
      fail(`${legacyPath}: expected legacy redirect to ${expectedTarget}, found ${actualTarget || '(missing)'}`);
    }
  }

  try {
    const routesConfig = JSON.parse(routesConfigText);
    const excludedRoutes = new Set(routesConfig.exclude || []);

    for (const [legacyPath, expectedTarget] of staticLegacyRedirects) {
      const staticRedirect = staticRedirectMap.get(legacyPath);

      if (!staticRedirect) {
        fail(`${legacyPath}: missing static _redirects rule for direct legacy redirect`);
      } else if (staticRedirect.target !== expectedTarget || staticRedirect.code !== '301') {
        fail(`${legacyPath}: expected static 301 redirect to ${expectedTarget}, found ${staticRedirect.target || '(missing)'} ${staticRedirect.code || '(default)'}`);
      }

      if (!excludedRoutes.has(legacyPath)) {
        fail(`${legacyPath}: _routes.json must exclude this legacy path so Cloudflare Pages _redirects can run before Functions`);
      }
    }
  } catch (error) {
    fail(`_routes.json is invalid JSON (${error.message})`);
  }

  for (const { source, target } of middlewareRedirects) {
    if (!target) {
      fail(`${source}: middleware redirect target could not be parsed`);
      continue;
    }

    if (!routeExists(target, sitemapSet) && !allowedNonSitemapLinks.has(target)) {
      fail(`${source}: middleware redirect target ${target} is not a generated route`);
    }
  }

  for (const { source: routePath } of middlewareRedirects) {
    if (sitemapSet.has(routePath)) {
      fail(`${routePath}: sitemap URL is also listed in middleware redirects`);
    }
  }

  for (const [routePath, page] of pages) {
    const { html } = page;
    const isSitemapPage = sitemapSet.has(routePath);
    const canonicalTags = [...html.matchAll(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/gi)].map(match => match[0]);
    const robotsTags = getMetaTags(html, tagAttrs => (tagAttrs.name || '').toLowerCase() === 'robots');
    const robotsContent = robotsTags.map(tag => attrs(tag).content || '').join(' ');
    const titleTags = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
    const descriptionTags = getMetaTags(html, tagAttrs => (tagAttrs.name || '').toLowerCase() === 'description');
    const ogDescriptionTags = getMetaTags(html, tagAttrs => (tagAttrs.property || '').toLowerCase() === 'og:description');
    const twitterDescriptionTags = getMetaTags(html, tagAttrs => (tagAttrs.name || '').toLowerCase() === 'twitter:description');
    const schemaItems = jsonLdItems(html, routePath);

    if (isSitemapPage) {
      if (html.includes('HillCo Paint')) {
        fail(`${routePath}: uses non-canonical entity name "HillCo Paint"; expected Hill Country Painting`);
      }

      if (canonicalTags.length !== 1) {
        fail(`${routePath}: expected exactly one canonical tag, found ${canonicalTags.length}`);
      } else {
        const canonicalHref = attrs(canonicalTags[0]).href;
        const expected = expectedCanonical(routePath);
        if (canonicalHref !== expected) {
          fail(`${routePath}: canonical ${canonicalHref || '(missing)'} should be ${expected}`);
        }
      }

      if (/noindex/i.test(robotsContent)) {
        fail(`${routePath}: sitemap URL is marked noindex`);
      }

      if (robotsTags.length > 1) {
        fail(`${routePath}: duplicate robots meta tags found`);
      }

      if (titleTags.length !== 1 || !titleTags[0][1].trim()) {
        fail(`${routePath}: expected one non-empty title tag, found ${titleTags.length}`);
      } else {
        const title = titleTags[0][1].replace(/\s+/g, ' ').trim();
        sitemapTitles.set(title, [...(sitemapTitles.get(title) || []), routePath]);
        if (title.length < 10 || title.length > 70) {
          warn(`${routePath}: title length is ${title.length} characters`);
        }
      }

      if (descriptionTags.length !== 1) {
        fail(`${routePath}: expected one meta description, found ${descriptionTags.length}`);
      } else {
        const description = (attrs(descriptionTags[0]).content || '').replace(/\s+/g, ' ').trim();
        sitemapDescriptions.set(description, [...(sitemapDescriptions.get(description) || []), routePath]);
        if (description.length < 50 || description.length > 170) {
          warn(`${routePath}: meta description length is ${description.length} characters`);
        }
      }

      if (ogDescriptionTags.length > 1) {
        fail(`${routePath}: duplicate og:description tags found`);
      }

      if (twitterDescriptionTags.length > 1) {
        fail(`${routePath}: duplicate twitter:description tags found`);
      }

      const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
      if (h1Matches.length === 0) {
        fail(`${routePath}: missing H1`);
      } else {
        if (h1Matches.length > 1) {
          fail(`${routePath}: expected one H1, found ${h1Matches.length}`);
        }

        const h1 = (h1Matches[0]?.[1] || '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        sitemapH1s.set(h1, [...(sitemapH1s.get(h1) || []), routePath]);

        if (routePath !== '/' && h1 === 'Austin House Painting Done Right') {
          fail(`${routePath}: prerendered page is using the homepage fallback H1`);
        }
      }

      if (/<h1\b[^>]*>\s*Something went wrong\s*<\/h1>/i.test(html) || /We're sorry, but something unexpected happened/i.test(html)) {
        fail(`${routePath}: prerendered sitemap page contains the generic application error state`);
      }

      const visibleWordCount = html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .length;

      if (visibleWordCount < 500) {
        fail(`${routePath}: prerendered sitemap page is thin (${visibleWordCount} visible words)`);
      }

      if (!schemaItems.some(item => schemaTypeIncludes(item, 'WebPage'))) {
        fail(`${routePath}: sitemap page is missing WebPage structured data`);
      }

      if (routePath === '/') {
        const requiredHomepageEntitySignals = [
          '#localbusiness',
          '#organization',
          '#website',
          'hasOfferCatalog',
          'makesOffer',
          'serviceArea',
          'subjectOf',
          'entity-facts.json',
          'citation-facts.json',
          'Google Knowledge Graph ID',
          'propertyID',
          'kgmid',
          '/exterior-painting-austin',
          '/interior-painting-austin',
          '/cabinet-refinishing-austin',
          '/commercial-painting-austin',
          '(512) 240-2246'
        ];

        for (const signal of requiredHomepageEntitySignals) {
          if (!html.includes(signal)) {
            fail(`${routePath}: homepage is missing required entity signal ${signal}`);
          }
        }
      }

      if (routePath === '/contact') {
        const requiredContactEntitySignals = [
          '#localbusiness',
          '#organization',
          'hasMap',
          'sameAs',
          'serviceArea',
          'entity-facts.json',
          'citation-facts.json',
          googleBusinessProfileUrl,
          'kgmid=/g/11frssbq6p',
          '(512) 240-2246',
          'Greater Austin Area'
        ];

        for (const signal of requiredContactEntitySignals) {
          if (!html.includes(signal)) {
            fail(`${routePath}: contact page is missing required business identity signal ${signal}`);
          }
        }

        const contactPageSchema = schemaItems.find(item =>
          schemaTypeIncludes(item, 'ContactPage') &&
          item?.['@id'] === `${baseUrl}/contact#contactpage`
        );

        if (!contactPageSchema) {
          fail(`${routePath}: contact page is missing ContactPage structured data`);
        } else {
          const hasBusinessEntity =
            contactPageSchema.about?.['@id'] === `${baseUrl}/#localbusiness` &&
            contactPageSchema.mainEntity?.['@id'] === `${baseUrl}/#localbusiness`;
          const hasContactPoint =
            schemaTypeIncludes(contactPageSchema.contactPoint, 'ContactPoint') &&
            String(contactPageSchema.contactPoint?.telephone || '').includes('(512) 240-2246');

          if (!hasBusinessEntity || !hasContactPoint || !hasPaintingEstimateAction(contactPageSchema)) {
            fail(`${routePath}: ContactPage schema must connect the LocalBusiness, canonical phone, and estimate QuoteAction`);
          }
        }
      }

      if (routePath === '/testimonials') {
        const reviewSchemaCount = (html.match(/itemtype="https:\/\/schema\.org\/Review"/g) || []).length;
        const requiredTestimonialsSignals = [
          'Read More Reviews on Google',
          googleBusinessProfileUrl.replace(/&/g, '&amp;'),
          'itemprop="itemReviewed"',
          'itemtype="https://schema.org/LocalBusiness"',
          'itemprop="reviewRating"',
          'itemprop="reviewBody"',
          'itemprop="ratingValue"',
          'Hill Country Painting'
        ];

        if (reviewSchemaCount < 10) {
          fail(`${routePath}: testimonials page should mark up the real customer reviews as Review entities`);
        }

        for (const signal of requiredTestimonialsSignals) {
          if (!html.includes(signal)) {
            fail(`${routePath}: testimonials page is missing required review trust signal ${signal}`);
          }
        }
      }

      if (routePath === '/services') {
        const servicesItemList = schemaItems.find(item =>
          schemaTypeIncludes(item, 'ItemList') &&
          item?.['@id'] === `${baseUrl}/services#servicelist`
        );
        const serviceListUrls = itemListUrls(servicesItemList);

        if (!servicesItemList) {
          fail(`${routePath}: services hub is missing ItemList structured data`);
        }

        for (const requiredServiceUrl of [
          `${baseUrl}/services/interior-painting`,
          `${baseUrl}/services/exterior-painting`,
          `${baseUrl}/services/cabinet-refinishing`,
          `${baseUrl}/services/commercial`,
          `${baseUrl}/interior-painting-austin`,
          `${baseUrl}/exterior-painting-austin`,
          `${baseUrl}/cabinet-refinishing-austin`,
          `${baseUrl}/commercial-painting-austin`
        ]) {
          if (!serviceListUrls.includes(requiredServiceUrl)) {
            fail(`${routePath}: services hub ItemList is missing ${requiredServiceUrl}`);
          }
        }
      }

      if (routePath === '/service-areas') {
        const serviceAreasCollection = schemaItems.find(item =>
          schemaTypeIncludes(item, 'CollectionPage') &&
          item?.['@id'] === `${baseUrl}/service-areas#webpage`
        );
        const areasItemList = schemaItems.find(item =>
          schemaTypeIncludes(item, 'ItemList') &&
          item?.['@id'] === `${baseUrl}/service-areas#arealist`
        );
        const areaListUrls = itemListUrls(areasItemList);

        if (!serviceAreasCollection) {
          fail(`${routePath}: service-area hub should use CollectionPage structured data`);
        }

        if (!areasItemList) {
          fail(`${routePath}: service-area hub is missing ItemList structured data`);
        }

        for (const requiredAreaUrl of [
          `${baseUrl}/service-areas/austin`,
          `${baseUrl}/service-areas/west-lake-hills`,
          `${baseUrl}/service-areas/northwest-hills`,
          `${baseUrl}/service-areas/lakeway`,
          `${baseUrl}/areas/west-lake-hills-and-rollingwood`,
          `${baseUrl}/areas/lakeway-bee-cave-and-lake-travis`
        ]) {
          if (!areaListUrls.includes(requiredAreaUrl)) {
            fail(`${routePath}: service-area hub ItemList is missing ${requiredAreaUrl}`);
          }
        }
      }

      if (isLocalBusinessSchemaRoute(routePath)) {
        const localBusinessSchema = schemaItems.find(item =>
          schemaTypeIncludes(item, 'LocalBusiness') &&
          schemaTypeIncludes(item, 'PaintingContractor') &&
          item?.['@id'] === `${baseUrl}/#localbusiness`
        );

        if (!localBusinessSchema) {
          fail(`${routePath}: priority local SEO page is missing LocalBusiness/PaintingContractor schema`);
        } else {
          const identifier = localBusinessSchema.identifier;
          const sameAs = Array.isArray(localBusinessSchema.sameAs) ? localBusinessSchema.sameAs : [];

          if (localBusinessSchema.hasMap !== googleBusinessProfileUrl || !sameAs.includes(googleBusinessProfileUrl)) {
            fail(`${routePath}: LocalBusiness schema must include the canonical Google Business Profile URL`);
          }

          if (identifier?.propertyID !== 'kgmid' || identifier?.value !== googleKnowledgeGraphId || identifier?.url !== googleBusinessProfileUrl) {
            fail(`${routePath}: LocalBusiness schema must include the Google Knowledge Graph ID PropertyValue`);
          }

          if (!String(localBusinessSchema.telephone || '').includes('(512) 240-2246')) {
            fail(`${routePath}: LocalBusiness schema must include the canonical phone number`);
          }

          if (!hasValidAggregateRating(localBusinessSchema)) {
            fail(`${routePath}: LocalBusiness schema must include a valid aggregate rating signal`);
          }

          if (!hasPaintingEstimateAction(localBusinessSchema)) {
            fail(`${routePath}: LocalBusiness schema must include a QuoteAction for requesting a painting estimate`);
          }

          const localBusinessAreaNames = asArray(localBusinessSchema.areaServed).map(area => area?.name).filter(Boolean);
          const localBusinessServiceAreaNames = asArray(localBusinessSchema.serviceArea).map(area => area?.name).filter(Boolean);
          const localBusinessKnowsAbout = JSON.stringify(localBusinessSchema.knowsAbout || []);

          for (const requiredCounty of configuredGreaterAustinCounties) {
            if (!localBusinessAreaNames.includes(requiredCounty) || !localBusinessServiceAreaNames.includes(requiredCounty)) {
              fail(`${routePath}: LocalBusiness schema is missing county service signal ${requiredCounty}`);
            }
          }

          for (const requiredTopic of configuredPriorityLocalSearchTopics) {
            if (!localBusinessKnowsAbout.includes(requiredTopic)) {
              fail(`${routePath}: LocalBusiness schema knowsAbout is missing ${requiredTopic}`);
            }
          }
        }
      }

      const isDetailedServiceRoute = routePath.startsWith('/services/')
        || /^\/(interior-painting|exterior-painting|cabinet-refinishing|commercial-painting)-/.test(routePath);

      if (isDetailedServiceRoute) {
        const requiredServiceSignals = [
          `${expectedCanonical(routePath)}#service`,
          `${baseUrl}/#localbusiness`,
          'availableChannel',
          'servicePhone',
          'mainEntity',
          'Greater Austin Area'
        ];

        for (const signal of requiredServiceSignals) {
          if (!html.includes(signal)) {
            fail(`${routePath}: service page is missing required structured-data signal ${signal}`);
          }
        }

        const expectedServiceId = `${expectedCanonical(routePath)}#service`;
        const expectedWebPageId = `${expectedCanonical(routePath)}#webpage`;
        const serviceWebPage = schemaItems.find(item => schemaTypeIncludes(item, 'WebPage') && item?.['@id'] === expectedWebPageId);

        if (serviceWebPage?.mainEntity?.['@id'] !== expectedServiceId) {
          fail(`${routePath}: WebPage schema mainEntity should be ${expectedServiceId}`);
        }

        if (routePath.startsWith('/services/')) {
          const serviceSchema = schemaItems.find(item => schemaTypeIncludes(item, 'Service') && item?.['@id'] === expectedServiceId);
          const areaNames = (serviceSchema?.areaServed || [])
            .map(area => area?.name)
            .filter(Boolean);

          for (const requiredArea of ['Austin', 'Leander', 'Georgetown', 'Round Rock', 'Cedar Park', 'North Austin']) {
            if (!areaNames.includes(requiredArea)) {
              fail(`${routePath}: core service schema areaServed is missing ${requiredArea}`);
            }
          }
        }

        const austinServiceSchemaSignals = new Map([
          ['/exterior-painting-austin', 'Austin exterior house painters'],
          ['/interior-painting-austin', 'Austin interior painters'],
          ['/cabinet-refinishing-austin', 'Austin cabinet painting'],
          ['/commercial-painting-austin', 'Austin commercial painters']
        ]);
        const expectedAustinServiceAlias = austinServiceSchemaSignals.get(routePath);

        if (expectedAustinServiceAlias) {
          const serviceSchema = schemaItems.find(item => schemaTypeIncludes(item, 'Service') && item?.['@id'] === expectedServiceId);
          const alternateNames = Array.isArray(serviceSchema?.alternateName) ? serviceSchema.alternateName : [];
          const keywords = Array.isArray(serviceSchema?.keywords) ? serviceSchema.keywords : [];
          const serviceAreaNames = asArray(serviceSchema?.serviceArea).map(area => area?.name).filter(Boolean);

          for (const signal of [expectedAustinServiceAlias, 'painting contractors Austin', 'house painters Austin']) {
            if (!alternateNames.includes(signal)) {
              fail(`${routePath}: Service schema alternateName is missing ${signal}`);
            }

            if (!keywords.includes(signal)) {
              fail(`${routePath}: Service schema keywords are missing ${signal}`);
            }
          }

          if (!String(serviceSchema?.serviceOutput || '').includes(expectedAustinServiceAlias)) {
            fail(`${routePath}: Service schema serviceOutput should include ${expectedAustinServiceAlias}`);
          }

          if (serviceSchema?.mainEntityOfPage?.['@id'] !== expectedWebPageId) {
            fail(`${routePath}: Service schema mainEntityOfPage should be ${expectedWebPageId}`);
          }

          if (!hasPaintingEstimateAction(serviceSchema)) {
            fail(`${routePath}: Service schema must include a QuoteAction for requesting a painting estimate`);
          }

          for (const requiredCounty of configuredGreaterAustinCounties) {
            if (!serviceAreaNames.includes(requiredCounty)) {
              fail(`${routePath}: Service schema serviceArea is missing county signal ${requiredCounty}`);
            }
          }
        }
      }
    } else if (!allowedInternalNoindexPaths.has(routePath) && !/noindex/i.test(robotsContent)) {
      fail(`${routePath}: generated non-sitemap page should be explicitly noindex or added to sitemap`);
    }

    for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
      const href = match[1].trim();
      if (/^tel:/i.test(href) && href !== canonicalPhoneHref) {
        fail(`${routePath}: non-canonical phone link ${href}; expected ${canonicalPhoneHref}`);
      }

      const targetRoute = normalizeRoutePath(href, routePath);
      if (!targetRoute) {
        continue;
      }

      if (!routeExists(targetRoute, sitemapSet)) {
        if (redirectedRouteExists(targetRoute, sitemapSet)) {
          continue;
        }

        fail(`${routePath}: broken internal link to ${href}`);
        continue;
      }

      if (sitemapSet.has(targetRoute) && targetRoute !== routePath) {
        inbound.set(targetRoute, (inbound.get(targetRoute) || 0) + 1);
      } else if (!sitemapSet.has(targetRoute)) {
        nonSitemapInternalLinks.set(targetRoute, (nonSitemapInternalLinks.get(targetRoute) || 0) + 1);
      }
    }

    for (const ref of collectAssetRefsFromHtml(html)) {
      assertLocalAssetExists(ref.value, routePath, ref.label);
    }

    for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
      const jsonText = match[1].trim();
      if (!jsonText) {
        continue;
      }

      try {
        const structuredData = JSON.parse(jsonText);
        for (const url of collectUrlsFromJsonLd(structuredData)) {
          const ext = extname(stripQueryAndHash(url)).toLowerCase();
          if (imageExtensions.has(ext)) {
            assertLocalAssetExists(url, routePath, 'JSON-LD image URL');
          }
        }
      } catch (error) {
        fail(`${routePath}: invalid JSON-LD (${error.message})`);
      }
    }
  }

  validateCssAssets(cssFiles);

  for (const [routePath, count] of inbound) {
    if (routePath === '/') {
      continue;
    }

    if (count === 0) {
      fail(`${routePath}: sitemap page has no internal inbound links`);
    } else if (count < 2 && !['/privacy', '/terms', '/do-not-sell', '/eula'].includes(routePath)) {
      fail(`${routePath}: sitemap page has weak internal inbound link count (${count}); add contextual crawl paths before indexing`);
    }
  }

  for (const [title, routes] of sitemapTitles) {
    if (title && routes.length > 1) {
      fail(`duplicate sitemap title "${title}" on ${routes.join(', ')}`);
    }
  }

  for (const [description, routes] of sitemapDescriptions) {
    if (description && routes.length > 1) {
      fail(`duplicate sitemap meta description "${description}" on ${routes.join(', ')}`);
    }
  }

  for (const [h1, routes] of sitemapH1s) {
    if (h1 && routes.length > 1) {
      fail(`duplicate sitemap H1 "${h1}" on ${routes.join(', ')}`);
    }
  }

  for (const [routePath, count] of nonSitemapInternalLinks) {
    if (!allowedNonSitemapLinks.has(routePath)) {
      fail(`${routePath}: internal non-sitemap route is linked ${count} time(s)`);
    }
  }

  console.log(`HTML files checked: ${htmlFiles.length}`);
  console.log(`Sitemap URLs checked: ${sitemapPaths.length}`);
  console.log(`CSS files checked: ${cssFiles.length}`);
  console.log(`JS files checked: ${jsFiles.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (warnings.length > 0) {
    warnings.slice(0, 25).forEach(message => console.warn(`WARN: ${message}`));
    if (warnings.length > 25) {
      console.warn(`WARN: ${warnings.length - 25} additional warnings omitted`);
    }
  }

  if (errors.length > 0) {
    console.error('\nGenerated SEO validation FAILED:');
    errors.forEach(message => console.error(`ERROR: ${message}`));
    process.exit(1);
  }

  console.log('\nGenerated SEO validation PASSED.');
}

run();
