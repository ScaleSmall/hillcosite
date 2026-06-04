#!/usr/bin/env node
import { resolve4, resolveCname, resolveNs } from 'dns/promises';
import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const args = new Set(process.argv.slice(2));
const pageIndexingMode = args.has('--page-indexing');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');
const middlewareSource = readFileSync(resolve(projectRoot, 'functions/_middleware.ts'), 'utf8');
const locationsConfigSource = readFileSync(resolve(projectRoot, 'src/config/locations.ts'), 'utf8');
const baseUrl = 'https://www.hillcopaint.com';
const pagesProjectName = 'hillcosite';
const pagesTarget = 'hillcosite.pages.dev';
const accountId = '7b68f149b6054718ad2c6ff0634ae145';
const currentSupabaseUrl = 'https://ndggkorglcaznukkhapz.supabase.co';
const retiredSupabaseUrl = 'https://oyyfpkpzalhxztpcdjgq.supabase.co';
const canonicalPhoneHref = 'tel:+15122402246';
const googleBusinessProfileUrl = 'https://www.google.com/search?q=Hill+Country+Painting&kgmid=/g/11frssbq6p';
const googleKnowledgeGraphId = '/g/11frssbq6p';
const businessDisambiguatingDescription = 'Austin, Texas service-area painting contractor serving Greater Austin homeowners, property managers, and commercial properties.';
const businessAlternateNames = [
  'Hill Country Painting LLC',
  'Hill Country Painting Austin',
  'Hill Country Painting of Austin',
];
const businessNaicsCode = '238320';
const businessNaicsDescription = 'Painting and Wall Covering Contractors';
const canonicalSocialProfileUrls = [
  'https://www.facebook.com/Hillcopaint',
  'https://www.instagram.com/hill_country_painting_austin/',
  'https://x.com/Hill_Co_Paint',
  'https://www.youtube.com/@HillCountryPaintingAustin',
  'https://www.tiktok.com/@hillco_painting_austin',
];
const minimumAggregateRatingValue = 4.5;
const minimumAggregateReviewCount = 100;
const greaterAustinServiceCounties = [
  'Travis County',
  'Williamson County',
  'Hays County',
];
const priorityLocalSearchTopics = [
  'Austin house painters',
  'Austin exterior house painters',
  'Austin exterior painting',
  'Austin interior painters',
  'Austin interior painting',
  'Austin cabinet painting',
  'Austin cabinet painters',
  'Austin commercial painters',
  'Austin commercial painting',
  'house painters near me Austin',
  'exterior painters near me Austin',
  'interior painters near me Austin',
  'cabinet painters near me Austin',
  'commercial painters near me Austin',
];
const austinServiceSignals = new Map([
  ['/exterior-painting-austin', 'Austin exterior house painters'],
  ['/interior-painting-austin', 'Austin interior painters'],
  ['/cabinet-refinishing-austin', 'Austin cabinet painting'],
  ['/commercial-painting-austin', 'Austin commercial painters'],
]);
const servicesHubItemListRoutes = [
  '/services/interior-painting',
  '/services/exterior-painting',
  '/services/cabinet-refinishing',
  '/services/commercial',
  '/interior-painting-austin',
  '/exterior-painting-austin',
  '/cabinet-refinishing-austin',
  '/commercial-painting-austin',
];
const serviceAreasHubItemListRoutes = [
  '/service-areas/austin',
  '/service-areas/west-lake-hills',
  '/service-areas/northwest-hills',
  '/service-areas/lakeway',
  '/areas/west-lake-hills-and-rollingwood',
  '/areas/lakeway-bee-cave-and-lake-travis',
  '/exterior-painting-austin',
  '/interior-painting-austin',
  '/cabinet-refinishing-austin',
  '/commercial-painting-austin',
];
const serviceAreasHubVisibleServiceRoutes = [
  '/exterior-painting-austin',
  '/interior-painting-austin',
  '/cabinet-refinishing-austin',
  '/commercial-painting-austin',
];
const coreLocalBusinessRoutes = [
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
];
const localServicePrefixes = [
  '/interior-painting-',
  '/exterior-painting-',
  '/cabinet-refinishing-',
  '/commercial-painting-',
];
const serviceLocationServiceIntents = new Map([
  ['/interior-painting-', 'interior painters'],
  ['/exterior-painting-', 'exterior house painters'],
  ['/cabinet-refinishing-', 'cabinet painting'],
  ['/commercial-painting-', 'commercial painters'],
]);
const coreServiceLocationGridRoutes = new Map([
  ['/services/interior-painting', '/interior-painting-'],
  ['/services/exterior-painting', '/exterior-painting-'],
  ['/services/cabinet-refinishing', '/cabinet-refinishing-'],
  ['/services/commercial', '/commercial-painting-'],
]);
const serviceAreaFaqSchemaRoutes = [
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
  '/service-areas/west-lake-hills',
];
const primaryServiceAreaHubRoutes = [
  '/service-areas/austin',
  '/service-areas/tarrytown',
  '/service-areas/west-lake-hills',
  '/service-areas/northwest-hills',
  '/service-areas/west-lake-highlands',
  '/service-areas/lakeway',
  '/service-areas/leander',
  '/service-areas/georgetown',
  '/service-areas/round-rock',
  '/service-areas/cedar-park',
  '/service-areas/north-austin',
];
const visibleLocalTrustRoutes = ['/service-areas', ...serviceAreaFaqSchemaRoutes];
const guideFaqSchemaRoutes = [
  '/guides/best-paint-texas-heat',
  '/guides/hoa-color-tips-austin',
  '/guides/how-often-paint-central-texas',
  '/guides/painting-costs-austin',
];
const breadcrumbRoutes = [
  '/services',
  '/services/interior-painting',
  '/services/exterior-painting',
  '/services/cabinet-refinishing',
  '/services/commercial',
  '/interior-painting-austin',
  '/exterior-painting-austin',
  '/cabinet-refinishing-austin',
  '/commercial-painting-austin',
  '/service-areas',
  ...serviceAreaFaqSchemaRoutes,
  ...guideFaqSchemaRoutes,
  '/gallery',
  '/testimonials',
  '/contact',
  '/free-estimate',
];
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
  'traditional-home-exterior.jpg',
];
const stalePublicIdentitySignals = [
  'HillCo Paint',
  '5000 Plaza on the Lake',
  '5000 Plaza',
  '2808 Townes Lane',
  '111 Craft Street',
  '1101 Satellite View',
  '(512) 499-8450',
  '512-499-8450',
];
function extractMiddlewareRedirects(source) {
  const blockMatch = source.match(/const REDIRECTS[\s\S]*?=\s*{([\s\S]*?)\n};/);
  if (!blockMatch) {
    return [];
  }

  return [...blockMatch[1].matchAll(/^\s*['"]([^'"]+)['"]\s*:\s*['"]([^'"]+)['"]\s*,?/gm)]
    .map(match => [match[1], match[2]]);
}

function buildLiveLegacyRedirects() {
  const redirectMap = new Map([
    ['/sitemap.php', '/sitemap.xml'],
    ...extractMiddlewareRedirects(middlewareSource),
    ['/commercial-exterior-painting-round-rock', '/services/commercial'],
    ['/hotel-lobby-painting-round-rock', '/services/commercial'],
    ['/industrial-facility-coating-round-rock', '/services/commercial'],
    ['/residential-cabinet-painting-round-rock', '/services/cabinet-refinishing'],
    ['/residential-exterior-trim-painting-round-rock', '/services/exterior-painting'],
    ['/residential-interior-bedroom-painting-round-rock', '/services/interior-painting'],
    ['/service/residential-deck-painting-round-rock-gsc-sample', '/services/exterior-painting'],
    ['/service/residential-nursery-painting-round-rock', '/services/interior-painting'],
    ['/service/whole-home-cabinet-refinishing-round-rock', '/services/cabinet-refinishing'],
    ['/service/commercial-office-painting-round-rock-gsc-sample', '/services/commercial'],
    ['/service/definitely-not-a-real-painting-service-gsc-test', '/services'],
  ]);

  for (const [source, target] of [...redirectMap.entries()]) {
    if (source !== '/' && !source.endsWith('/') && !/\.[a-z0-9]+$/i.test(source)) {
      redirectMap.set(`${source}/`, target);
    }
  }

  return [...redirectMap.entries()].sort(([a], [b]) => a.localeCompare(b));
}

const liveLegacyRedirects = buildLiveLegacyRedirects();
const crawlerEntityAssets = [
  '/robots.txt',
  '/llms.txt',
  '/llms-full.txt',
  '/ai.txt',
  '/entity-facts.json',
  '/citation-facts.json',
];
const requiredRobotsAllowAgents = [
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-Video',
  'Googlebot-News',
  'Google-InspectionTool',
  'Storebot-Google',
  'GoogleOther',
  'GoogleOther-Image',
  'GoogleOther-Video',
  'Google-CloudVertexBot',
  'Google-Extended',
  'Bingbot',
  'OAI-SearchBot',
  'GPTBot',
  'ChatGPT-User',
  'OAI-AdsBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
  'Amazonbot',
];
const liveNoindexRoutes = [
  ['/search?q=test', 'noindex, follow'],
  ['/thank-you', 'noindex, follow'],
  ['/pre-approval', 'noindex, nofollow'],
  ['/privacy', 'noindex, follow'],
  ['/terms', 'noindex, follow'],
  ['/do-not-sell', 'noindex, follow'],
  ['/eula', 'noindex, follow'],
  ['/sitemap', 'noindex, follow'],
];
const liveUnknownRoutes = [
  '/does-not-exist-gsc-test',
  '/areas/not-a-real-area-gsc-test',
  '/functions/v1/fetch-gbp-rating',
  '/functions/v1/fetch-cpi-data',
  '/functions/v1/annual-pricing-automation',
  '/functions/v1/test-pricing-automation',
  '/functions/v1/send-pricing-notification',
  '/functions/v1/send-rating-alert',
  '/api/fetch-gbp-rating',
  '/api/pricing',
];
const allowedInternalNoindexRoutes = new Set(
  liveNoindexRoutes.map(([route]) => route.split('?')[0])
);
const liveLegacyRedirectSources = new Set(
  liveLegacyRedirects.map(([source]) => source.replace(/\/+$/, '') || '/')
);
const canonicalHostRoutes = [
  'http://hillcopaint.com/',
  'https://hillcopaint.com/',
  'http://www.hillcopaint.com/',
  'https://www.hillcopaint.com/',
  'https://hillcopaint.com/sitemap.xml',
];
const googleCrawlerUserAgents = [
  {
    label: 'Googlebot smartphone',
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  },
  {
    label: 'Google InspectionTool',
    userAgent: 'Mozilla/5.0 (compatible; Google-InspectionTool/1.0; +http://www.google.com/bot.html)',
  },
];
const googleCrawlerAccessRoutes = [
  '/',
  '/services',
  '/service-areas/austin',
  '/exterior-painting-austin',
  '/interior-painting-austin',
  '/cabinet-refinishing-austin',
  '/commercial-painting-austin',
  '/services/exterior-painting',
  '/services/interior-painting',
  '/services/cabinet-refinishing',
  '/services/commercial',
  '/gallery',
  '/testimonials',
  '/contact',
];
const crawlerChallengePattern = /Attention Required|Just a moment|Checking your browser|cf-browser-verification|cf-chl-widget|Access denied/i;

const failures = [];

function fail(message) {
  failures.push(message);
}

function attrs(tag) {
  const result = {};

  for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/g)) {
    result[match[1].toLowerCase()] = match[3];
  }

  return result;
}

async function fetchText(url, headers = {}) {
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      ...headers,
    },
  });
  return {
    response,
    text: await response.text(),
  };
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

function itemListUrls(schema) {
  return asArray(schema?.itemListElement)
    .map(item => item?.url || item?.item?.url)
    .filter(Boolean);
}

function routeIsServiceLocation(route) {
  return localServicePrefixes.some(prefix => route.startsWith(prefix));
}

function titleCaseSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map(part => part.length === 1 ? part.toUpperCase() : `${part[0].toUpperCase()}${part.slice(1)}`)
    .join(' ');
}

function expectedServiceLocationPhrase(route) {
  for (const [prefix, intent] of serviceLocationServiceIntents) {
    if (route.startsWith(prefix)) {
      const locationName = titleCaseSlug(route.slice(prefix.length));
      return `${locationName} ${intent}`;
    }
  }

  return null;
}

function serviceLocationSlugFromRoute(route) {
  const prefix = localServicePrefixes.find(item => route.startsWith(item));

  return prefix ? route.slice(prefix.length) : '';
}

function extractLocationLocalFacts(source) {
  const result = new Map();

  for (const match of source.matchAll(/['"]([^'"]+)['"]\s*:\s*{([\s\S]*?)\n\s{2}}\s*(?:,|\n};)/g)) {
    const slug = match[1];
    const body = match[2];
    const name = body.match(/name:\s*['"]([^'"]+)['"]/)?.[1] || '';
    const zipCodesBlock = body.match(/zipCodes:\s*\[([^\]]*)\]/)?.[1] || '';
    const neighborhoodsBlock = body.match(/neighborhoods:\s*\[([^\]]*)\]/)?.[1] || '';
    const latitude = Number(body.match(/coordinates:\s*{\s*lat:\s*([\d.-]+)/)?.[1]);
    const longitude = Number(body.match(/coordinates:\s*{\s*lat:\s*[\d.-]+,\s*lng:\s*([\d.-]+)/)?.[1]);

    result.set(slug, {
      name,
      zipCodes: [...zipCodesBlock.matchAll(/['"]([^'"]+)['"]/g)].map(item => item[1]),
      neighborhoods: [...neighborhoodsBlock.matchAll(/['"]([^'"]+)['"]/g)].map(item => item[1]),
      latitude,
      longitude,
    });
  }

  return result;
}

const locationLocalFacts = extractLocationLocalFacts(locationsConfigSource);

function serviceLocationHasLocalPlaceSchema(route, scripts) {
  const locationSlug = serviceLocationSlugFromRoute(route);
  const facts = locationLocalFacts.get(locationSlug);
  const placeSchema = scripts.find(item =>
    schemaTypeIncludes(item, 'Place') &&
    item?.['@id'] === `${baseUrl}${route}#service-area`
  );

  if (!facts || !placeSchema) {
    return false;
  }

  const zipValue = String(asArray(placeSchema.additionalProperty)
    .find(item => item?.name === 'ZIP codes served')?.value || '');
  const intentValue = String(asArray(placeSchema.additionalProperty)
    .find(item => item?.name === 'Primary local service intent')?.value || '');
  const neighborhoodNames = asArray(placeSchema.containsPlace)
    .map(place => place?.name)
    .filter(Boolean);

  return (
    placeSchema.name === `${facts.name}, TX` &&
    placeSchema?.containedInPlace?.name === 'Greater Austin Area' &&
    placeSchema?.address?.addressLocality === facts.name &&
    placeSchema?.address?.addressRegion === 'TX' &&
    placeSchema?.geo?.['@type'] === 'GeoCoordinates' &&
    Number(placeSchema?.geo?.latitude) === facts.latitude &&
    Number(placeSchema?.geo?.longitude) === facts.longitude &&
    facts.zipCodes.every(zipCode => zipValue.includes(zipCode)) &&
    facts.neighborhoods.every(neighborhood => neighborhoodNames.includes(neighborhood)) &&
    intentValue.toLowerCase().includes(facts.name.toLowerCase())
  );
}

function routeNeedsLocalBusinessSchema(route) {
  return (
    coreLocalBusinessRoutes.includes(route) ||
    route === '/service-areas' ||
    route.startsWith('/service-areas/') ||
    route.startsWith('/areas/') ||
    routeIsServiceLocation(route)
  );
}

function firstHeroSectionHtml(html) {
  const firstSectionIndex = html.search(/<section\b/i);

  if (firstSectionIndex === -1) {
    return html.slice(0, 30000);
  }

  const sectionCloseIndex = html.indexOf('</section>', firstSectionIndex);
  const endIndex = sectionCloseIndex === -1 ? firstSectionIndex + 30000 : sectionCloseIndex + '</section>'.length;

  return html.slice(firstSectionIndex, endIndex);
}

function routePathFromUrl(url) {
  const parsed = new URL(url, baseUrl);
  const path = parsed.pathname.replace(/\/+$/, '');

  return path || '/';
}

function normalizeRedirectLocation(location) {
  if (!location) {
    return { host: '', route: '' };
  }

  const parsed = new URL(location, baseUrl);
  const route = parsed.pathname.replace(/\/+$/, '') || '/';

  return { host: parsed.host, route };
}

function sameCanonicalUrl(left, right) {
  const leftUrl = new URL(left);
  const rightUrl = new URL(right);

  return (
    leftUrl.protocol === rightUrl.protocol &&
    leftUrl.host === rightUrl.host &&
    (leftUrl.pathname.replace(/\/+$/, '') || '/') === (rightUrl.pathname.replace(/\/+$/, '') || '/')
  );
}

function normalizeInternalRoute(href) {
  if (!href || /^(tel:|mailto:|sms:|javascript:)/i.test(href)) {
    return null;
  }

  const parsed = new URL(href, baseUrl);

  if (parsed.origin !== baseUrl) {
    return null;
  }

  const path = parsed.pathname.replace(/\/+$/, '');

  return path || '/';
}

function robotsAllowsAgent(robotsText, agent) {
  const groups = [];
  let currentGroup = [];

  for (const rawLine of robotsText.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (/^User-agent:/i.test(line) && currentGroup.length > 0) {
      groups.push(currentGroup);
      currentGroup = [line];
    } else if (line || currentGroup.length > 0) {
      currentGroup.push(line);
    }
  }

  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups.some(group => {
    const agents = group
      .filter(line => /^User-agent:/i.test(line))
      .map(line => line.replace(/^User-agent:\s*/i, '').trim().toLowerCase());
    const allowsRoot = group.some(line => /^Allow:\s*\/\s*$/i.test(line));
    const disallowsRoot = group.some(line => /^Disallow:\s*\/\s*$/i.test(line));

    return agents.includes(agent.toLowerCase()) && allowsRoot && !disallowsRoot;
  });
}

function parseJsonLd(html, route) {
  const scripts = [];

  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const rawJsonLd = match[1]
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&#x27;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
      const parsed = JSON.parse(rawJsonLd);
      const roots = Array.isArray(parsed) ? parsed : [parsed];

      for (const root of roots) {
        if (Array.isArray(root?.['@graph'])) {
          scripts.push(...root['@graph']);
        } else {
          scripts.push(root);
        }
      }
    } catch {
      fail(`${route}: invalid JSON-LD script`);
    }
  }

  return scripts;
}

async function checkDns() {
  const nsRecords = await resolveNs('hillcopaint.com');
  console.log(`DNS authority: ${nsRecords.join(', ')}`);

  let cnameRecords = [];
  try {
    cnameRecords = await resolveCname('www.hillcopaint.com');
  } catch {
    cnameRecords = [];
  }

  if (!cnameRecords.includes(pagesTarget)) {
    const [aRecords, pagesTargetARecords] = await Promise.all([
      resolve4('www.hillcopaint.com').catch(() => []),
      resolve4(pagesTarget).catch(() => []),
    ]);
    const pointsAtPagesTarget = aRecords.length > 0 && aRecords.every(record => pagesTargetARecords.includes(record));

    if (!pointsAtPagesTarget) {
      fail(`www.hillcopaint.com should CNAME to ${pagesTarget} or resolve to its proxied Pages IPs; current CNAME records: ${cnameRecords.join(', ') || 'none'}; A records: ${aRecords.join(', ') || 'none'}; ${pagesTarget} A records: ${pagesTargetARecords.join(', ') || 'none'}`);
    }
  }
}

async function checkPagesDomain() {
  const token = process.env.CLOUDFLARE_API_TOKEN;

  if (!token) {
    console.log('Cloudflare Pages domain check skipped: CLOUDFLARE_API_TOKEN is not set.');
    return;
  }

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${pagesProjectName}/domains`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const payload = await response.json();

  if (!payload.success) {
    fail(`Cloudflare Pages domain check failed: ${JSON.stringify(payload.errors || [])}`);
    return;
  }

  const domain = payload.result?.find(item => item.name === 'www.hillcopaint.com');

  if (!domain) {
    fail('www.hillcopaint.com is not attached to the hillcosite Cloudflare Pages project.');
    return;
  }

  console.log(`Pages custom domain: ${domain.name} is ${domain.status}`);

  if (domain.status !== 'active') {
    const message = domain.verification_data?.error_message || domain.validation_data?.status || 'pending validation';
    fail(`www.hillcopaint.com Pages custom domain is ${domain.status}: ${message}`);
  }
}

async function checkCanonicalHostRoutes() {
  let passed = 0;

  for (const startUrl of canonicalHostRoutes) {
    let currentUrl = startUrl;
    const seen = new Set();
    const chain = [];
    let finalResponse = null;

    for (let hop = 0; hop < 4; hop += 1) {
      if (seen.has(currentUrl)) {
        fail(`${startUrl}: canonical host redirect loop detected at ${currentUrl}`);
        break;
      }

      seen.add(currentUrl);
      const response = await fetch(currentUrl, {
        redirect: 'manual',
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });
      const location = response.headers.get('location');
      chain.push(`${response.status}${location ? ` -> ${location}` : ''}`);

      if (response.status >= 300 && response.status < 400 && location) {
        currentUrl = new URL(location, currentUrl).toString();
        continue;
      }

      finalResponse = response;
      break;
    }

    const expectedUrl = new URL(startUrl);
    expectedUrl.protocol = 'https:';
    expectedUrl.host = 'www.hillcopaint.com';
    const finalUrl = currentUrl;

    if (!finalResponse || finalResponse.status !== 200 || !sameCanonicalUrl(finalUrl, expectedUrl.toString())) {
      fail(`${startUrl}: expected canonical host chain to end at ${expectedUrl.toString()} with 200; found ${chain.join(' | ')}`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live canonical host routes checked: ${passed}/${canonicalHostRoutes.length}`);
}

async function checkGoogleCrawlerAccess() {
  let passed = 0;

  for (const { label, userAgent } of googleCrawlerUserAgents) {
    const assetChecks = [
      { route: '/robots.txt', requiredText: `Sitemap: ${baseUrl}/sitemap.xml` },
      { route: '/sitemap.xml', requiredText: `<loc>${baseUrl}/` },
    ];

    for (const { route, requiredText } of assetChecks) {
      const { response, text } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`, {
        'User-Agent': userAgent,
      });

      if (response.status !== 200 || !text.includes(requiredText) || crawlerChallengePattern.test(text)) {
        fail(`${route}: ${label} must receive a clean live crawler asset response; found status ${response.status}, required text ${text.includes(requiredText)}, challenge ${crawlerChallengePattern.test(text)}`);
        continue;
      }

      passed += 1;
    }

    for (const route of googleCrawlerAccessRoutes) {
      const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`, {
        'User-Agent': userAgent,
      });
      const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gi)]
        .map(match => match[0])
        .filter(tag => (attrs(tag).rel || '').toLowerCase() === 'canonical');
      const canonicalHrefs = canonicalTags.map(tag => attrs(tag).href || '');
      const robotsTags = [...html.matchAll(/<meta\b[^>]*>/gi)]
        .map(match => match[0])
        .filter(tag => (attrs(tag).name || '').toLowerCase() === 'robots');
      const robotsContent = robotsTags.map(tag => attrs(tag).content || '').join(' ');
      const expectedCanonical = route === '/' ? `${baseUrl}/` : `${baseUrl}${route}`;
      const hasExpectedCanonical = canonicalHrefs.length === 1 && canonicalHrefs[0] === expectedCanonical;
      const isIndexable = /index,\s*follow/i.test(robotsContent) && !/noindex/i.test(robotsContent);
      const hasChallenge = crawlerChallengePattern.test(html);

      if (
        response.status !== 200 ||
        !hasExpectedCanonical ||
        robotsTags.length !== 1 ||
        !isIndexable ||
        hasChallenge
      ) {
        fail(`${route}: ${label} must see clean indexable HTML; found status ${response.status}, canonical ${canonicalHrefs.join(', ') || '(none)'}, robots ${robotsContent || '(missing)'}, challenge ${hasChallenge}`);
        continue;
      }

      passed += 1;
    }
  }

  console.log(`Live Google crawler access checked: ${passed}/${googleCrawlerUserAgents.length * (googleCrawlerAccessRoutes.length + 2)}`);
}

async function checkGooglebotSitemapAccess() {
  const googlebot = googleCrawlerUserAgents.find(agent => agent.label === 'Googlebot smartphone');
  const { response, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml?v=${Date.now()}`, {
    'User-Agent': googlebot.userAgent,
  });

  if (response.status !== 200 || crawlerChallengePattern.test(sitemapXml)) {
    fail(`sitemap.xml: Googlebot smartphone must receive a clean sitemap response; found status ${response.status}, challenge ${crawlerChallengePattern.test(sitemapXml)}`);
    return;
  }

  const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  const problems = [];
  let passed = 0;
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < urls.length) {
      const url = urls[nextIndex++];
      const page = await fetch(`${url}?v=${Date.now()}`, {
        redirect: 'manual',
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          'User-Agent': googlebot.userAgent,
        },
      });
      const html = await page.text();
      const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gi)]
        .map(match => match[0])
        .filter(tag => (attrs(tag).rel || '').toLowerCase() === 'canonical');
      const canonicalHrefs = canonicalTags.map(tag => attrs(tag).href || '');
      const robotsTags = [...html.matchAll(/<meta\b[^>]*>/gi)]
        .map(match => match[0])
        .filter(tag => (attrs(tag).name || '').toLowerCase() === 'robots');
      const robotsContent = robotsTags.map(tag => attrs(tag).content || '').join(' ');
      const hasExpectedCanonical = canonicalHrefs.length === 1 && canonicalHrefs[0] === url;
      const isIndexable =
        robotsTags.length === 1 &&
        /index,\s*follow/i.test(robotsContent) &&
        /max-image-preview:large/i.test(robotsContent) &&
        !/noindex/i.test(robotsContent);
      const hasChallenge = crawlerChallengePattern.test(html);
      const staleIdentitySignal = stalePublicIdentitySignals.find(signal => html.includes(signal));

      if (page.status !== 200 || !hasExpectedCanonical || !isIndexable || hasChallenge || staleIdentitySignal) {
        problems.push({
          url,
          status: page.status,
          canonicalHrefs,
          robotsContent,
          hasChallenge,
          staleIdentitySignal,
        });
        continue;
      }

      passed += 1;
    }
  }

  await Promise.all(Array.from({ length: 8 }, worker));

  for (const problem of problems.slice(0, 10)) {
    fail(`${problem.url}: Googlebot smartphone must see clean indexable sitemap HTML; found status ${problem.status}, canonical ${problem.canonicalHrefs.join(', ') || '(none)'}, robots ${problem.robotsContent || '(missing)'}, challenge ${problem.hasChallenge}, stale identity ${problem.staleIdentitySignal || 'none'}`);
  }

  if (problems.length > 10) {
    fail(`${problems.length - 10} additional Googlebot sitemap access problems not shown.`);
  }

  console.log(`Live Googlebot sitemap access checked: ${passed}/${urls.length}`);
}

async function checkSitemapPages() {
  const { response, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml`);

  if (response.status !== 200) {
    fail(`sitemap.xml returned ${response.status}`);
    return;
  }

  const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  const sitemapRoutes = urls.map(routePathFromUrl);
  const sitemapRouteSet = new Set(sitemapRoutes);
  const inboundSources = new Map(sitemapRoutes.map(route => [route, new Set()]));
  const sitemapTitles = new Map();
  const sitemapDescriptions = new Map();
  const sitemapH1s = new Map();
  const unexpectedInternalLinks = new Map();
  const nonCanonicalPhoneLinks = new Map();
  let nextIndex = 0;
  const problems = [];
  const heroImageProblems = [];
  const staleIdentityProblems = [];

  async function worker() {
    while (nextIndex < urls.length) {
      const url = urls[nextIndex++];
      const route = routePathFromUrl(url);
      const page = await fetch(url, {
        redirect: 'manual',
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });
      const html = await page.text();
      const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gi)]
        .map(match => match[0])
        .filter(tag => (attrs(tag).rel || '').toLowerCase() === 'canonical');
      const canonicalHrefs = canonicalTags.map(tag => attrs(tag).href || '');
      const canonicalCount = canonicalTags.length;
      const canonicalMatchesSelf = canonicalHrefs.length === 1 && canonicalHrefs[0] === url;
      const robotsTags = [...html.matchAll(/<meta\b[^>]*>/gi)]
        .map(match => match[0])
        .filter(tag => (attrs(tag).name || '').toLowerCase() === 'robots');
      const robotsContents = robotsTags.map(tag => attrs(tag).content || '');
      const robotsContent = robotsContents.join(' ');
      const robotsCount = robotsTags.length;
      const robotsIndexable =
        robotsCount === 1 &&
        /index,\s*follow/i.test(robotsContent) &&
        /max-image-preview:large/i.test(robotsContent) &&
        !/noindex/i.test(robotsContent);
      const titleTags = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
      const title = titleTags.length === 1 ? titleTags[0][1].replace(/\s+/g, ' ').trim() : '';
      const descriptionTags = [...html.matchAll(/<meta\b[^>]*>/gi)]
        .map(match => match[0])
        .filter(tag => (attrs(tag).name || '').toLowerCase() === 'description');
      const description = descriptionTags.length === 1 ? (attrs(descriptionTags[0]).content || '').replace(/\s+/g, ' ').trim() : '';
      const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
      const h1Count = h1Matches.length;
      const h1 = h1Count === 1
        ? h1Matches[0][1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
        : '';
      const xRobotsTag = page.headers.get('x-robots-tag') || '';
      const noindex = /noindex/i.test(robotsContent) || /noindex/i.test(xRobotsTag);
      const hasError = /Something went wrong|Post Not Found|404 Not Found/i.test(html);
      const heroHtml = firstHeroSectionHtml(html);
      const bannedHeroImage = bannedHeroBackgroundImages.find(image => heroHtml.includes(image));
      const staleIdentitySignal = stalePublicIdentitySignals.find(signal => html.includes(signal));

      if (title) {
        sitemapTitles.set(title, [...(sitemapTitles.get(title) || []), route]);
      }

      if (description) {
        sitemapDescriptions.set(description, [...(sitemapDescriptions.get(description) || []), route]);
      }

      if (h1) {
        sitemapH1s.set(h1, [...(sitemapH1s.get(h1) || []), route]);
      }

      if (bannedHeroImage) {
        heroImageProblems.push({ url, image: bannedHeroImage });
      }

      if (staleIdentitySignal) {
        staleIdentityProblems.push({ url, signal: staleIdentitySignal });
      }

      for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
        const href = match[1].trim();

        if (/^tel:/i.test(href) && href !== canonicalPhoneHref) {
          nonCanonicalPhoneLinks.set(href, [...(nonCanonicalPhoneLinks.get(href) || []), route]);
        }

        const targetRoute = normalizeInternalRoute(href);

        if (!targetRoute) {
          continue;
        }

        if (targetRoute !== route && sitemapRouteSet.has(targetRoute)) {
          inboundSources.get(targetRoute)?.add(route);
        } else if (
          !sitemapRouteSet.has(targetRoute) &&
          !allowedInternalNoindexRoutes.has(targetRoute) &&
          !liveLegacyRedirectSources.has(targetRoute)
        ) {
          unexpectedInternalLinks.set(targetRoute, [...(unexpectedInternalLinks.get(targetRoute) || []), route]);
        }
      }

      if (page.status !== 200 || canonicalCount !== 1 || !canonicalMatchesSelf || robotsCount !== 1 || !robotsIndexable || titleTags.length !== 1 || descriptionTags.length !== 1 || h1Count !== 1 || noindex || hasError) {
        problems.push({
          url,
          status: page.status,
          canonicalCount,
          canonicalHrefs,
          canonicalMatchesSelf,
          robotsCount,
          robotsContents,
          titleCount: titleTags.length,
          descriptionCount: descriptionTags.length,
          h1Count,
          noindex,
          hasError,
        });
      }
    }
  }

  await Promise.all(Array.from({ length: 8 }, worker));

  console.log(`Live sitemap pages checked: ${urls.length}`);

  for (const problem of problems.slice(0, 10)) {
    fail(`${problem.url}: status ${problem.status}, canonicals ${problem.canonicalCount}, canonicalSelf ${problem.canonicalMatchesSelf}, robots ${problem.robotsCount}, titles ${problem.titleCount}, descriptions ${problem.descriptionCount}, H1s ${problem.h1Count}, noindex ${problem.noindex}, error ${problem.hasError}`);
  }

  if (problems.length > 10) {
    fail(`${problems.length - 10} additional sitemap page problems not shown.`);
  }

  for (const problem of heroImageProblems.slice(0, 10)) {
    fail(`${problem.url}: live hero section uses banned before/after-style image ${problem.image}`);
  }

  if (heroImageProblems.length > 10) {
    fail(`${heroImageProblems.length - 10} additional live hero image problems not shown.`);
  }

  if (heroImageProblems.length === 0) {
    console.log('Live hero image guard: no banned before/after-style hero images found');
  }

  for (const problem of staleIdentityProblems.slice(0, 10)) {
    fail(`${problem.url}: live page contains stale NAP/brand signal "${problem.signal}"`);
  }

  if (staleIdentityProblems.length > 10) {
    fail(`${staleIdentityProblems.length - 10} additional live stale NAP/brand signal problems not shown.`);
  }

  if (staleIdentityProblems.length === 0) {
    console.log('Live stale identity guard: no stale NAP/brand strings found on sitemap pages');
  }

  const duplicateMetadataProblems = [
    ...[...sitemapTitles.entries()]
      .filter(([value, routes]) => value && routes.length > 1)
      .map(([value, routes]) => `duplicate live sitemap title "${value}" on ${routes.join(', ')}`),
    ...[...sitemapDescriptions.entries()]
      .filter(([value, routes]) => value && routes.length > 1)
      .map(([value, routes]) => `duplicate live sitemap meta description "${value}" on ${routes.join(', ')}`),
    ...[...sitemapH1s.entries()]
      .filter(([value, routes]) => value && routes.length > 1)
      .map(([value, routes]) => `duplicate live sitemap H1 "${value}" on ${routes.join(', ')}`)
  ];

  for (const problem of duplicateMetadataProblems.slice(0, 10)) {
    fail(problem);
  }

  if (duplicateMetadataProblems.length > 10) {
    fail(`${duplicateMetadataProblems.length - 10} additional live duplicate metadata problems not shown.`);
  }

  if (duplicateMetadataProblems.length === 0) {
    console.log('Live metadata uniqueness guard: titles, descriptions, and H1s are unique');
  }

  const weakInternalLinkRoutes = [...inboundSources.entries()]
    .filter(([route, sources]) => route !== '/' && sources.size < 2)
    .map(([route, sources]) => ({ route, sources: [...sources] }));

  for (const item of weakInternalLinkRoutes.slice(0, 10)) {
    fail(`${baseUrl}${item.route}: live sitemap page has weak internal discovery (${item.sources.length} inbound source page(s))`);
  }

  if (weakInternalLinkRoutes.length > 10) {
    fail(`${weakInternalLinkRoutes.length - 10} additional live sitemap pages have weak internal discovery.`);
  }

  if (weakInternalLinkRoutes.length === 0) {
    console.log('Live internal discovery guard: all sitemap pages have 2+ inbound source pages');
  }

  const unexpectedInternalLinkProblems = [...unexpectedInternalLinks.entries()];

  for (const [targetRoute, sourceRoutes] of unexpectedInternalLinkProblems.slice(0, 10)) {
    fail(`${baseUrl}${targetRoute}: live internal link target is not in sitemap, noindex allowlist, or legacy redirect list; linked from ${[...new Set(sourceRoutes)].slice(0, 5).join(', ')}`);
  }

  if (unexpectedInternalLinkProblems.length > 10) {
    fail(`${unexpectedInternalLinkProblems.length - 10} additional unexpected live internal link targets not shown.`);
  }

  if (unexpectedInternalLinkProblems.length === 0) {
    console.log('Live internal link target guard: no unexpected non-sitemap links found');
  }

  const phoneLinkProblems = [...nonCanonicalPhoneLinks.entries()];

  for (const [href, sourceRoutes] of phoneLinkProblems.slice(0, 10)) {
    fail(`${href}: live phone link must use canonical ${canonicalPhoneHref}; found on ${[...new Set(sourceRoutes)].slice(0, 5).join(', ')}`);
  }

  if (phoneLinkProblems.length > 10) {
    fail(`${phoneLinkProblems.length - 10} additional non-canonical live phone links not shown.`);
  }

  if (phoneLinkProblems.length === 0) {
    console.log('Live phone link guard: all tel links use the canonical phone number');
  }
}

async function checkSitemapTrailingSlashRedirects() {
  const { response, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml?v=${Date.now()}`);

  if (response.status !== 200) {
    fail(`sitemap.xml returned ${response.status} during trailing-slash redirect validation`);
    return;
  }

  const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(match => routePathFromUrl(match[1]))
    .filter(route => route !== '/');
  let nextIndex = 0;
  let passed = 0;

  async function worker() {
    while (nextIndex < routes.length) {
      const route = routes[nextIndex++];
      const response = await fetch(`${baseUrl}${route}/?v=${Date.now()}`, {
        redirect: 'manual',
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });
      const location = response.headers.get('location') || '';
      const normalized = normalizeRedirectLocation(location);

      if (response.status !== 301 || normalized.host !== 'www.hillcopaint.com' || normalized.route !== route) {
        fail(`${route}/: expected live trailing-slash 301 redirect to ${route}, found status ${response.status} location ${location || '(missing)'}`);
        continue;
      }

      passed += 1;
    }
  }

  await Promise.all(Array.from({ length: 8 }, worker));
  console.log(`Live sitemap trailing-slash redirects checked: ${passed}/${routes.length}`);
}

function hasAllValues(values, expectedValues) {
  return expectedValues.every(value => values.includes(value));
}

function hasCanonicalSocialProfiles(values) {
  return hasAllValues(asArray(values), canonicalSocialProfileUrls);
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

function hasCanonicalServiceProvider(schema) {
  const provider = schema?.provider || {};
  const providerTypes = asArray(provider?.['@type']);
  const providerSameAs = asArray(provider?.sameAs);
  const identifier = provider?.identifier || {};

  return (
    provider?.['@id'] === `${baseUrl}/#localbusiness` &&
    providerTypes.includes('LocalBusiness') &&
    providerTypes.includes('HousePainter') &&
    provider?.name === 'Hill Country Painting' &&
    provider?.url === baseUrl &&
    provider?.hasMap === googleBusinessProfileUrl &&
    providerSameAs.includes(googleBusinessProfileUrl) &&
    schemaTypeIncludes(identifier, 'PropertyValue') &&
    identifier?.propertyID === 'kgmid' &&
    identifier?.value === googleKnowledgeGraphId &&
    identifier?.url === googleBusinessProfileUrl
  );
}

async function checkCrawlerEntityAssets() {
  const assetText = new Map();
  let passed = 0;

  for (const path of crawlerEntityAssets) {
    const { response, text } = await fetchText(`${baseUrl}${path}?v=${Date.now()}`);

    if (response.status !== 200) {
      fail(`${path}: live crawler/entity asset returned ${response.status}`);
      continue;
    }

    assetText.set(path, text);
    passed += 1;
  }

  const robotsText = assetText.get('/robots.txt') || '';
  const llmsText = assetText.get('/llms.txt') || '';
  const llmsFullText = assetText.get('/llms-full.txt') || '';
  const aiText = assetText.get('/ai.txt') || '';
  const { response: sitemapResponse, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml?v=${Date.now()}`);
  const liveSitemapUrlCount = sitemapResponse.status === 200
    ? [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].length
    : 0;

  if (sitemapResponse.status !== 200 || liveSitemapUrlCount === 0) {
    fail('/sitemap.xml: live sitemap could not be fetched for crawler/entity asset validation.');
  }

  if (
    !robotsText.includes(`Sitemap: ${baseUrl}/sitemap.xml`) ||
    /^\s*Disallow:\s*\/\s*$/im.test(robotsText)
  ) {
    fail('/robots.txt: live robots file is missing the canonical sitemap or blocks the site.');
  }

  const missingRobotsAllowAgents = requiredRobotsAllowAgents.filter(agent => !robotsAllowsAgent(robotsText, agent));

  if (missingRobotsAllowAgents.length > 0) {
    fail(`/robots.txt: live robots file is missing explicit Allow: / entries for ${missingRobotsAllowAgents.join(', ')}.`);
  }

  const llmsRequired = [
    '/llms-full.txt',
    '/entity-facts.json',
    '/citation-facts.json',
    'Austin house painters',
    `${baseUrl}/free-estimate`,
  ];

  if (!llmsRequired.every(value => llmsText.includes(value))) {
    fail('/llms.txt: live LLM manifest is missing full manifest, entity/citation facts, or Austin house painter positioning.');
  }

  const llmsFullRequired = [
    `${baseUrl}/`,
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/exterior-painting-austin`,
    `${baseUrl}/free-estimate`,
  ];

  if (!llmsFullRequired.every(value => llmsFullText.includes(value))) {
    fail('/llms-full.txt: live full LLM manifest is missing canonical homepage, sitemap, or Austin exterior painting URL.');
  }

  const aiRequired = [
    'Austin house painters',
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/entity-facts.json`,
    `${baseUrl}/citation-facts.json`,
  ];

  if (!aiRequired.every(value => aiText.includes(value))) {
    fail('/ai.txt: live AI discovery file is missing Austin house painter positioning or canonical discovery URLs.');
  }

  try {
    const entityFacts = JSON.parse(assetText.get('/entity-facts.json') || '{}');
    const areaServed = asArray(entityFacts.areaServed).map(area => area?.name || area).filter(Boolean);
    const serviceArea = asArray(entityFacts.serviceArea).map(area => area?.name || area).filter(Boolean);
    const knowsAbout = asArray(entityFacts.knowsAbout);
    const sameAs = asArray(entityFacts.sameAs);
    const alternateNames = asArray(entityFacts.alternateName);
    const staleWarnings = JSON.stringify(entityFacts.staleCitationWarnings || []);

    if (
      entityFacts.name !== 'Hill Country Painting' ||
      !hasAllValues(alternateNames, businessAlternateNames) ||
      entityFacts.disambiguatingDescription !== businessDisambiguatingDescription ||
      entityFacts.naics !== businessNaicsCode ||
      entityFacts.industry !== businessNaicsDescription ||
      entityFacts.url !== baseUrl ||
      entityFacts.telephone !== '(512) 240-2246' ||
      entityFacts.hasMap !== googleBusinessProfileUrl ||
      entityFacts.identifier?.propertyID !== 'kgmid' ||
      entityFacts.identifier?.value !== googleKnowledgeGraphId ||
      entityFacts.identifier?.url !== googleBusinessProfileUrl ||
      !hasAllValues(areaServed, greaterAustinServiceCounties) ||
      !hasAllValues(serviceArea, greaterAustinServiceCounties) ||
      !hasAllValues(knowsAbout, priorityLocalSearchTopics) ||
      !sameAs.includes(googleBusinessProfileUrl) ||
      !hasCanonicalSocialProfiles(sameAs) ||
      !hasValidAggregateRating(entityFacts) ||
      entityFacts.sitemapUrlCount !== liveSitemapUrlCount ||
      !staleWarnings.includes(`${baseUrl}/austin/`) ||
      !staleWarnings.includes(`${baseUrl}/service-areas/austin`) ||
      !staleWarnings.includes(`${baseUrl}/exterior-painting/`) ||
      !staleWarnings.includes(`${baseUrl}/services/exterior-painting`) ||
      !staleWarnings.includes(`${baseUrl}/cabinet-refinishing/`) ||
      !staleWarnings.includes(`${baseUrl}/services/cabinet-refinishing`) ||
      !staleWarnings.includes(`${baseUrl}/commercial-painting/`) ||
      !staleWarnings.includes(`${baseUrl}/services/commercial`) ||
      !staleWarnings.includes('https://request.hillcopaint.com/') ||
      !staleWarnings.includes(`${baseUrl}/contact`)
    ) {
      fail('/entity-facts.json: live entity facts are missing canonical identity, alternate names, disambiguating description, NAICS classification, GBP/kgmid, social profile sameAs links, Austin service counties, priority topics, aggregate rating, sitemap count, stale slash URL warnings, or request-subdomain citation warning.');
    }
  } catch {
    fail('/entity-facts.json: live entity facts are not valid JSON.');
  }

  try {
    const citationFacts = JSON.parse(assetText.get('/citation-facts.json') || '{}');
    const citationIdentity = citationFacts.canonicalIdentity || {};
    const citationTopics = asArray(citationIdentity.priorityLocalSearchTopics);
    const citationCounties = asArray(citationIdentity.serviceCounties);
    const sameAs = asArray(citationFacts.sameAs);
    const alternateNames = asArray(citationIdentity.alternateName);
    const staleWarnings = JSON.stringify(citationFacts.staleCitationWarnings || []);

    if (
      citationIdentity.name !== 'Hill Country Painting' ||
      !hasAllValues(alternateNames, businessAlternateNames) ||
      citationIdentity.disambiguatingDescription !== businessDisambiguatingDescription ||
      citationIdentity.naics !== businessNaicsCode ||
      citationIdentity.industry !== businessNaicsDescription ||
      citationIdentity.website !== baseUrl ||
      citationIdentity.telephone !== '(512) 240-2246' ||
      citationIdentity.serviceAreaBusiness !== true ||
      citationIdentity.googleKnowledgeGraphId !== googleKnowledgeGraphId ||
      citationIdentity.googleBusinessProfile !== googleBusinessProfileUrl ||
      !sameAs.includes(googleBusinessProfileUrl) ||
      !hasCanonicalSocialProfiles(sameAs) ||
      !hasValidAggregateRating(citationIdentity) ||
      !hasAllValues(citationTopics, priorityLocalSearchTopics) ||
      !hasAllValues(citationCounties, greaterAustinServiceCounties) ||
      !staleWarnings.includes(`${baseUrl}/austin/`) ||
      !staleWarnings.includes(`${baseUrl}/service-areas/austin`) ||
      !staleWarnings.includes(`${baseUrl}/exterior-painting/`) ||
      !staleWarnings.includes(`${baseUrl}/services/exterior-painting`) ||
      !staleWarnings.includes(`${baseUrl}/cabinet-refinishing/`) ||
      !staleWarnings.includes(`${baseUrl}/services/cabinet-refinishing`) ||
      !staleWarnings.includes(`${baseUrl}/commercial-painting/`) ||
      !staleWarnings.includes(`${baseUrl}/services/commercial`) ||
      !staleWarnings.includes('https://request.hillcopaint.com/') ||
      !staleWarnings.includes(`${baseUrl}/contact`)
    ) {
      fail('/citation-facts.json: live citation facts are missing canonical identity, alternate names, disambiguating description, NAICS classification, GBP/kgmid, social profile sameAs links, aggregate rating, service counties, priority topics, stale slash URL warnings, or request-subdomain citation warning.');
    }
  } catch {
    fail('/citation-facts.json: live citation facts are not valid JSON.');
  }

  console.log(`Live crawler/entity assets checked: ${passed}/${crawlerEntityAssets.length}`);
}

async function checkSupabaseFeed() {
  const { response, text: html } = await fetchText(`${baseUrl}/gallery?v=${Date.now()}`);

  if (response.status !== 200) {
    fail(`/gallery returned ${response.status}`);
  }

  if (!html.includes(currentSupabaseUrl)) {
    fail(`/gallery does not include current Supabase project ${currentSupabaseUrl}`);
  }

  if (html.includes(retiredSupabaseUrl)) {
    fail(`/gallery still includes retired Supabase project ${retiredSupabaseUrl}`);
  }

  if (response.status === 200 && html.includes(currentSupabaseUrl) && !html.includes(retiredSupabaseUrl)) {
    console.log('Live Supabase gallery feed: current project present, retired project absent');
  }
}

async function checkLegacyRedirects() {
  let passed = 0;

  for (const [source, target] of liveLegacyRedirects) {
    const response = await fetch(`${baseUrl}${source}?v=${Date.now()}`, {
      redirect: 'manual',
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });
    const location = response.headers.get('location') || '';
    const normalized = normalizeRedirectLocation(location);

    if (response.status !== 301 || normalized.host !== 'www.hillcopaint.com' || normalized.route !== target) {
      fail(`${source}: expected live 301 redirect to ${target}, found status ${response.status} location ${location || '(missing)'}`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live legacy redirects checked: ${passed}/${liveLegacyRedirects.length}`);
}

async function checkAustinSchema() {
  let passed = 0;

  for (const [route, phrase] of austinServiceSignals) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);

    const serviceId = `${baseUrl}${route}#service`;
    const serviceSchemas = scripts.filter(item => schemaTypeIncludes(item, 'Service') && item?.['@id'] === serviceId);

    const hasSignal = serviceSchemas.some(schema =>
      Array.isArray(schema.alternateName) &&
      schema.alternateName.includes(phrase) &&
      Array.isArray(schema.keywords) &&
      schema.keywords.includes(phrase) &&
      String(schema.serviceOutput || '').includes(phrase)
    );
    const hasServiceAreaCounties = serviceSchemas.some(schema => {
      const serviceAreaNames = asArray(schema.serviceArea).map(area => area?.name).filter(Boolean);

      return greaterAustinServiceCounties.every(county => serviceAreaNames.includes(county));
    });
    const hasServiceEstimateAction = serviceSchemas.some(schema => hasPaintingEstimateAction(schema));
    const hasServicePageConnection = serviceSchemas.some(schema =>
      schema?.mainEntityOfPage?.['@id'] === `${baseUrl}${route}#webpage`
    );
    const hasServiceProviderIdentity = serviceSchemas.some(schema => hasCanonicalServiceProvider(schema));

    if (response.status !== 200 || !hasSignal || !hasServiceAreaCounties || !hasServiceEstimateAction || !hasServicePageConnection || !hasServiceProviderIdentity) {
      fail(`${route}: live Service schema is missing the ${phrase} alternateName, keywords, serviceOutput, county serviceArea, estimate QuoteAction, WebPage connection, or canonical provider identity signal.`);
    } else {
      passed += 1;
    }
  }

  console.log(`Live Austin service schema pages checked: ${passed}/${austinServiceSignals.size}`);
}

async function checkAustinServiceAreaSchema() {
  const route = '/service-areas/austin';
  const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
  const scripts = parseJsonLd(html, route);
  const serviceId = `${baseUrl}${route}#service`;
  const serviceSchemas = scripts.filter(item => schemaTypeIncludes(item, 'Service') && item?.['@id'] === serviceId);
  const requiredSignals = [
    'Austin house painters',
    'house painters Austin',
    'painting contractors Austin',
    'Austin painting contractors',
  ];
  const hasLocalIntentSignals = serviceSchemas.some(schema => {
    const alternateNames = asArray(schema.alternateName);
    const keywords = asArray(schema.keywords);

    return requiredSignals.every(signal => alternateNames.includes(signal) && keywords.includes(signal));
  });
  const hasPriorityServiceOutput = serviceSchemas.some(schema => {
    const serviceOutput = String(schema.serviceOutput || '');

    return (
      serviceOutput.includes('Austin house painters') &&
      serviceOutput.includes('exterior painting') &&
      serviceOutput.includes('interior painting') &&
      serviceOutput.includes('cabinet painting') &&
      serviceOutput.includes('commercial painting')
    );
  });
  const hasServiceProviderIdentity = serviceSchemas.some(schema => hasCanonicalServiceProvider(schema));
  const hasServicePageConnection = serviceSchemas.some(schema =>
    schema?.mainEntityOfPage?.['@id'] === `${baseUrl}${route}#webpage`
  );

  if (response.status !== 200 || !hasLocalIntentSignals || !hasPriorityServiceOutput || !hasServiceProviderIdentity || !hasServicePageConnection) {
    fail(`${route}: live Service schema is missing Austin house painters, painting contractors Austin, priority service output, canonical provider, or WebPage connection signals.`);
    return;
  }

  console.log('Live Austin service-area schema includes house-painter and priority-service intent signals');
}

async function checkServiceLocationServiceSchema() {
  const { response: sitemapResponse, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml?v=${Date.now()}`);

  if (sitemapResponse.status !== 200) {
    fail('live sitemap could not be fetched for service-location Service schema validation.');
    return;
  }

  const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(match => routePathFromUrl(match[1]))
    .filter(routeIsServiceLocation);
  let passed = 0;

  for (const route of routes) {
    const expectedPhrase = expectedServiceLocationPhrase(route);

    if (!expectedPhrase) {
      fail(`${route}: could not derive expected local service phrase.`);
      continue;
    }

    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const serviceId = `${baseUrl}${route}#service`;
    const serviceSchemas = scripts.filter(item => schemaTypeIncludes(item, 'Service') && item?.['@id'] === serviceId);
    const hasSignal = serviceSchemas.some(schema =>
      Array.isArray(schema.alternateName) &&
      schema.alternateName.includes(expectedPhrase) &&
      Array.isArray(schema.keywords) &&
      schema.keywords.includes(expectedPhrase) &&
      String(schema.serviceOutput || '').includes(expectedPhrase)
    );
    const hasServiceAreaCounties = serviceSchemas.some(schema => {
      const serviceAreaNames = asArray(schema.serviceArea).map(area => area?.name).filter(Boolean);

      return greaterAustinServiceCounties.every(county => serviceAreaNames.includes(county));
    });
    const hasServiceEstimateAction = serviceSchemas.some(schema => hasPaintingEstimateAction(schema));
    const hasServicePageConnection = serviceSchemas.some(schema =>
      schema?.mainEntityOfPage?.['@id'] === `${baseUrl}${route}#webpage`
    );
    const hasServiceProviderIdentity = serviceSchemas.some(schema => hasCanonicalServiceProvider(schema));
    const hasLocalPlaceSchema = serviceLocationHasLocalPlaceSchema(route, scripts);

    if (response.status !== 200 || !hasSignal || !hasServiceAreaCounties || !hasServiceEstimateAction || !hasServicePageConnection || !hasServiceProviderIdentity || !hasLocalPlaceSchema) {
      fail(`${route}: live Service schema is missing the ${expectedPhrase} alternateName, keywords, serviceOutput, county serviceArea, estimate QuoteAction, WebPage connection, canonical provider identity signal, or local Place schema.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live service-location Service schema pages checked: ${passed}/${routes.length}`);
}

async function checkHubItemListSchema() {
  const hubs = [
    {
      route: '/services',
      itemListId: `${baseUrl}/services#servicelist`,
      requiredRoutes: servicesHubItemListRoutes,
      label: 'services hub',
    },
    {
      route: '/service-areas',
      itemListId: `${baseUrl}/service-areas#arealist`,
      requiredRoutes: serviceAreasHubItemListRoutes,
      label: 'service-area hub',
      requiredPageType: 'CollectionPage',
      requiredPageId: `${baseUrl}/service-areas#webpage`,
      requiredVisibleRoutes: serviceAreasHubVisibleServiceRoutes,
    },
  ];
  let passed = 0;

  for (const hub of hubs) {
    const { response, text: html } = await fetchText(`${baseUrl}${hub.route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, hub.route);
    const itemList = scripts.find(item =>
      schemaTypeIncludes(item, 'ItemList') &&
      item?.['@id'] === hub.itemListId
    );
    const urls = itemListUrls(itemList);
    const hasRequiredRoutes = hub.requiredRoutes.every(route => urls.includes(`${baseUrl}${route}`));

    if (response.status !== 200 || !itemList || !hasRequiredRoutes) {
      fail(`${hub.route}: live ${hub.label} ItemList is missing or does not include all priority local SEO links.`);
      continue;
    }

    if (hub.requiredPageType) {
      const pageSchema = scripts.find(item =>
        schemaTypeIncludes(item, hub.requiredPageType) &&
        item?.['@id'] === hub.requiredPageId
      );

      if (!pageSchema) {
        fail(`${hub.route}: live ${hub.label} is missing ${hub.requiredPageType} schema.`);
        continue;
      }
    }

    if (hub.requiredVisibleRoutes) {
      const hasVisibleRoutes = hub.requiredVisibleRoutes.every(route => html.includes(`href="${route}"`));

      if (!hasVisibleRoutes) {
        fail(`${hub.route}: live ${hub.label} is missing visible links to the priority Austin service-location pages.`);
        continue;
      }
    }

    passed += 1;
  }

  console.log(`Live hub ItemList schema pages checked: ${passed}/${hubs.length}`);
}

async function checkCoreServiceLocationGrids() {
  const { response: sitemapResponse, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml?v=${Date.now()}`);

  if (sitemapResponse.status !== 200) {
    fail('live sitemap could not be fetched for core service-location grid validation.');
    return;
  }

  let passed = 0;

  for (const [coreServiceRoute, servicePrefix] of coreServiceLocationGridRoutes) {
    const expectedRoutes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map(match => routePathFromUrl(match[1]))
      .filter(route => route.startsWith(servicePrefix));
    const { response, text: html } = await fetchText(`${baseUrl}${coreServiceRoute}?v=${Date.now()}`);

    if (expectedRoutes.length < 16) {
      fail(`${coreServiceRoute}: live sitemap should expose at least 16 service-location routes for ${servicePrefix}, found ${expectedRoutes.length}.`);
      continue;
    }

    const missingRoutes = expectedRoutes.filter(route => !html.includes(`href="${route}"`));

    if (response.status !== 200 || missingRoutes.length > 0) {
      fail(`${coreServiceRoute}: live service-location grid is missing links to ${missingRoutes.slice(0, 8).join(', ')}${missingRoutes.length > 8 ? '...' : ''}`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live core service-location grids checked: ${passed}/${coreServiceLocationGridRoutes.size}`);
}

async function checkPrimaryServiceAreaHubLinks() {
  const sourceRoutes = ['/', '/services', '/service-areas'];
  let passed = 0;

  for (const route of sourceRoutes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const linkedRoutes = new Set(
      [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)]
        .map(match => normalizeInternalRoute(match[1].trim()))
        .filter(Boolean)
    );
    const missingRoutes = primaryServiceAreaHubRoutes.filter(serviceAreaRoute => !linkedRoutes.has(serviceAreaRoute));

    if (response.status !== 200 || missingRoutes.length > 0) {
      fail(`${route}: live primary hub is missing service-area links to ${missingRoutes.join(', ') || '(none)'}`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live primary service-area hub links checked: ${passed}/${sourceRoutes.length}`);
}

async function checkPriorityLocalBusinessSchema() {
  const { response: sitemapResponse, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml`);

  if (sitemapResponse.status !== 200) {
    fail(`sitemap.xml returned ${sitemapResponse.status} before LocalBusiness schema route discovery`);
    return;
  }

  const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(match => routePathFromUrl(match[1]))
    .filter(routeNeedsLocalBusinessSchema);
  let passed = 0;

  for (const route of routes) {
    const path = route === '/' ? '/' : route;
    const { response, text: html } = await fetchText(`${baseUrl}${path}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const localBusinessSchema = scripts.find(item =>
      schemaTypeIncludes(item, 'LocalBusiness') &&
      schemaTypeIncludes(item, 'HomeAndConstructionBusiness') &&
      schemaTypeIncludes(item, 'HousePainter') &&
      item?.['@id'] === `${baseUrl}/#localbusiness`
    );

    if (response.status !== 200 || !localBusinessSchema) {
      fail(`${route}: live LocalBusiness/HomeAndConstructionBusiness/HousePainter schema is missing.`);
      continue;
    }

    const sameAs = Array.isArray(localBusinessSchema.sameAs) ? localBusinessSchema.sameAs : [];
    const identifier = localBusinessSchema.identifier;
    const hasCanonicalGbp =
      localBusinessSchema.hasMap === googleBusinessProfileUrl &&
      sameAs.includes(googleBusinessProfileUrl);
    const hasKgIdentifier =
      identifier?.propertyID === 'kgmid' &&
      identifier?.value === googleKnowledgeGraphId &&
      identifier?.url === googleBusinessProfileUrl;
    const hasCanonicalPhone = String(localBusinessSchema.telephone || '').includes('(512) 240-2246');
    const localBusinessAreaNames = asArray(localBusinessSchema.areaServed).map(area => area?.name).filter(Boolean);
    const localBusinessServiceAreaNames = asArray(localBusinessSchema.serviceArea).map(area => area?.name).filter(Boolean);
    const localBusinessKnowsAbout = JSON.stringify(localBusinessSchema.knowsAbout || []);
    const localBusinessAlternateNames = asArray(localBusinessSchema.alternateName);
    const hasCountySignals = greaterAustinServiceCounties.every(county =>
      localBusinessAreaNames.includes(county) &&
      localBusinessServiceAreaNames.includes(county)
    );
    const hasPriorityTopics = priorityLocalSearchTopics.every(topic => localBusinessKnowsAbout.includes(topic));
    const hasAggregateRating = hasValidAggregateRating(localBusinessSchema);
    const hasEstimateAction = hasPaintingEstimateAction(localBusinessSchema);
    const hasEntityDisambiguation =
      hasAllValues(localBusinessAlternateNames, businessAlternateNames) &&
      localBusinessSchema.disambiguatingDescription === businessDisambiguatingDescription;
    const hasNaicsClassification =
      localBusinessSchema.naics === businessNaicsCode &&
      localBusinessSchema.industry === businessNaicsDescription;

    if (!hasCanonicalGbp || !hasKgIdentifier || !hasCanonicalPhone || !hasCountySignals || !hasPriorityTopics || !hasAggregateRating || !hasEstimateAction || !hasEntityDisambiguation || !hasNaicsClassification) {
      fail(`${route}: live LocalBusiness schema is missing canonical GBP URL, kgmid, phone, alternate names, disambiguating description, NAICS classification, county service areas, priority local search topics, aggregate rating, or estimate QuoteAction.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live local LocalBusiness schema pages checked: ${passed}/${routes.length}`);
}

async function checkServiceAreaFaqSchema() {
  const passed = await checkFaqSchemaRoutes(serviceAreaFaqSchemaRoutes, 'service-area');

  console.log(`Live service-area FAQ schema pages checked: ${passed}/${serviceAreaFaqSchemaRoutes.length}`);
}

async function checkGuideFaqSchema() {
  const passed = await checkFaqSchemaRoutes(guideFaqSchemaRoutes, 'guide');

  console.log(`Live guide FAQ schema pages checked: ${passed}/${guideFaqSchemaRoutes.length}`);
}

async function checkVisibleLocalTrustSections() {
  const { response: sitemapResponse, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml?v=${Date.now()}`);
  const sitemapRoutes = sitemapResponse.status === 200
    ? [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
        .map(match => routePathFromUrl(match[1]))
    : [];
  const serviceLocationTrustRoutes = sitemapRoutes.filter(routeIsServiceLocation);
  const geoAreaTrustRoutes = sitemapRoutes.filter(route => route.startsWith('/areas/'));

  if (sitemapResponse.status !== 200) {
    fail('live sitemap could not be fetched for visible local trust-section validation.');
  }

  const routes = [...new Set([...visibleLocalTrustRoutes, ...serviceLocationTrustRoutes, ...geoAreaTrustRoutes])];
  let passed = 0;

  for (const route of routes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const hasGoogleProfileLink =
      html.includes(`href="${googleBusinessProfileUrl}"`) ||
      html.includes(`href="${googleBusinessProfileUrl.replace(/&/g, '&amp;')}"`);
    const hasCanonicalPhoneLink = html.includes(`href="${canonicalPhoneHref}"`);
    const hasMapSignal = html.includes('Hill Country Painting - Service Area Map');
    const hasVisibleGbpText = html.includes('Google Business Profile');
    const hasVisibleGoogleReviewsText = html.includes('Google reviews');
    const hasVisibleGoogleDirectionsText = html.includes('Directions on Google Maps');
    const hasServiceAreaText = html.includes('Serving Austin, TX and the Greater Austin area');

    if (response.status !== 200 || !hasGoogleProfileLink || !hasCanonicalPhoneLink || !hasMapSignal || !hasVisibleGbpText || !hasVisibleGoogleReviewsText || !hasVisibleGoogleDirectionsText || !hasServiceAreaText) {
      fail(`${route}: live page is missing the visible NAP/map/Google Business Profile, Google reviews, or Google Maps directions trust section.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live visible local trust sections checked: ${passed}/${routes.length}`);
}

async function checkFaqSchemaRoutes(routes, label) {
  let passed = 0;

  for (const route of routes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const faqSchema = scripts.find(item => schemaTypeIncludes(item, 'FAQPage'));

    if (response.status !== 200 || !faqSchema) {
      fail(`${route}: live ${label} FAQPage schema is missing.`);
      continue;
    }

    const questions = Array.isArray(faqSchema.mainEntity) ? faqSchema.mainEntity : [];
    const hasValidQuestionAnswer = questions.some(item =>
      schemaTypeIncludes(item, 'Question') &&
      item.name &&
      schemaTypeIncludes(item.acceptedAnswer, 'Answer') &&
      item.acceptedAnswer?.text
    );

    if (!hasValidQuestionAnswer) {
      fail(`${route}: live ${label} FAQPage schema has no valid Question/Answer entries.`);
      continue;
    }

    passed += 1;
  }

  return passed;
}

async function checkCrawlerControlRoutes() {
  let noindexPassed = 0;
  let notFoundPassed = 0;
  const noindexStaleIdentityProblems = [];

  for (const [route, expectedRobots] of liveNoindexRoutes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}${route.includes('?') ? '&' : '?'}v=${Date.now()}`);
    const xRobotsTag = response.headers.get('x-robots-tag') || '';
    const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gi)]
      .map(match => match[0])
      .filter(tag => (attrs(tag).rel || '').toLowerCase() === 'canonical');
    const canonicalHrefs = canonicalTags.map(tag => attrs(tag).href || '');
    const staleIdentitySignal = stalePublicIdentitySignals.find(signal => html.includes(signal));

    if (staleIdentitySignal) {
      noindexStaleIdentityProblems.push({ route, signal: staleIdentitySignal });
    }

    if (
      response.status !== 200 ||
      xRobotsTag.toLowerCase() !== expectedRobots ||
      canonicalHrefs.includes(`${baseUrl}/`) ||
      staleIdentitySignal
    ) {
      fail(`${route}: expected live 200 with X-Robots-Tag "${expectedRobots}", no homepage canonical, and no stale NAP/brand strings; found status ${response.status}, X-Robots-Tag "${xRobotsTag || '(missing)'}", canonicals ${canonicalHrefs.join(', ') || '(none)'}, stale identity ${staleIdentitySignal || 'none'}`);
      continue;
    }

    noindexPassed += 1;
  }

  if (noindexStaleIdentityProblems.length === 0) {
    console.log('Live noindex stale identity guard: no stale NAP/brand strings found on utility pages');
  }

  for (const route of liveUnknownRoutes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const xRobotsTag = response.headers.get('x-robots-tag') || '';
    const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gi)]
      .map(match => match[0])
      .filter(tag => (attrs(tag).rel || '').toLowerCase() === 'canonical');
    const canonicalHrefs = canonicalTags.map(tag => attrs(tag).href || '');

    if (
      response.status !== 404 ||
      xRobotsTag.toLowerCase() !== 'noindex, nofollow' ||
      canonicalHrefs.includes(`${baseUrl}/`)
    ) {
      fail(`${route}: expected live 404 with X-Robots-Tag "noindex, nofollow" and no homepage canonical; found status ${response.status}, X-Robots-Tag "${xRobotsTag || '(missing)'}", canonicals ${canonicalHrefs.join(', ') || '(none)'}`);
      continue;
    }

    notFoundPassed += 1;
  }

  console.log(`Live crawler control routes checked: noindex ${noindexPassed}/${liveNoindexRoutes.length}, 404 ${notFoundPassed}/${liveUnknownRoutes.length}`);
}

async function checkGoogleEntityIdentifier() {
  const { response, text: html } = await fetchText(`${baseUrl}/?v=${Date.now()}`);
  const scripts = parseJsonLd(html, '/');
  const entitySchemas = scripts.filter(item => item?.['@id'] === `${baseUrl}/#organization` || item?.['@id'] === `${baseUrl}/#localbusiness`);
  const schemasWithIdentifier = entitySchemas.filter(schema =>
    schema.identifier?.propertyID === 'kgmid' &&
    schema.identifier?.value === googleKnowledgeGraphId &&
    schema.identifier?.url === googleBusinessProfileUrl
  );
  const schemasWithProfiles = entitySchemas.filter(schema =>
    asArray(schema.sameAs).includes(googleBusinessProfileUrl) &&
    hasCanonicalSocialProfiles(schema.sameAs)
  );
  const homepageLinksCanonicalProfiles = canonicalSocialProfileUrls.every(profileUrl =>
    html.includes(`href="${profileUrl}"`)
  );

  if (response.status !== 200 || schemasWithIdentifier.length < 2 || schemasWithProfiles.length < 2 || !homepageLinksCanonicalProfiles) {
    fail('/: live Organization and LocalBusiness schema should include kgmid plus canonical sameAs social/GBP profiles, and the homepage should link the canonical social profiles.');
    return;
  }

  console.log('Live Google entity identifier: Organization and LocalBusiness both include kgmid and canonical sameAs profiles');
}

async function checkWebsiteSearchActionSchema() {
  const { response, text: html } = await fetchText(`${baseUrl}/?v=${Date.now()}`);
  const scripts = parseJsonLd(html, '/');
  const websiteSchema = scripts.find(item =>
    schemaTypeIncludes(item, 'WebSite') &&
    item?.['@id'] === `${baseUrl}/#website`
  );
  const searchAction = websiteSchema?.potentialAction;
  const target = searchAction?.target || {};

  if (
    response.status !== 200 ||
    !websiteSchema ||
    websiteSchema.name !== 'Hill Country Painting' ||
    websiteSchema.url !== baseUrl ||
    websiteSchema.publisher?.['@id'] !== `${baseUrl}/#organization` ||
    !schemaTypeIncludes(searchAction, 'SearchAction') ||
    !schemaTypeIncludes(target, 'EntryPoint') ||
    target.urlTemplate !== `${baseUrl}/search?q={search_term_string}` ||
    searchAction?.['query-input'] !== 'required name=search_term_string'
  ) {
    fail('/: live WebSite schema should include canonical publisher identity and SearchAction for on-site search.');
    return;
  }

  console.log('Live WebSite schema includes canonical publisher and SearchAction');
}

async function checkBreadcrumbSchema() {
  let passed = 0;

  for (const route of breadcrumbRoutes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const breadcrumbSchema = scripts.find(item => schemaTypeIncludes(item, 'BreadcrumbList'));
    const items = asArray(breadcrumbSchema?.itemListElement);
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    const positionsAreSequential = items.every((item, index) => item?.position === index + 1);
    const hasHomeStart = firstItem?.name === 'Home' && firstItem?.item === `${baseUrl}/`;
    const hasCurrentLastItem = Boolean(lastItem?.name) && !lastItem?.item;

    if (
      response.status !== 200 ||
      !breadcrumbSchema ||
      breadcrumbSchema?.['@id'] !== `${baseUrl}${route}#breadcrumb` ||
      items.length < 2 ||
      !positionsAreSequential ||
      !hasHomeStart ||
      !hasCurrentLastItem
    ) {
      fail(`${route}: live BreadcrumbList schema should have a canonical @id, start at Home, use sequential positions, and leave the current page as the final item.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live breadcrumb schema pages checked: ${passed}/${breadcrumbRoutes.length}`);
}

async function checkContactPageSchema() {
  const { response, text: html } = await fetchText(`${baseUrl}/contact?v=${Date.now()}`);
  const scripts = parseJsonLd(html, '/contact');
  const contactPageSchema = scripts.find(item =>
    schemaTypeIncludes(item, 'ContactPage') &&
    item?.['@id'] === `${baseUrl}/contact#contactpage`
  );
  const hasBusinessEntity =
    contactPageSchema?.about?.['@id'] === `${baseUrl}/#localbusiness` &&
    contactPageSchema?.mainEntity?.['@id'] === `${baseUrl}/#localbusiness`;
  const hasContactPoint =
    schemaTypeIncludes(contactPageSchema?.contactPoint, 'ContactPoint') &&
    String(contactPageSchema?.contactPoint?.telephone || '').includes('(512) 240-2246');

  if (response.status !== 200 || !contactPageSchema || !hasBusinessEntity || !hasContactPoint || !hasPaintingEstimateAction(contactPageSchema)) {
    fail('/contact: live ContactPage schema should connect the LocalBusiness, canonical phone, and estimate QuoteAction.');
    return;
  }

  console.log('Live contact page schema includes LocalBusiness contact and estimate action');
}

async function checkFreeEstimatePage() {
  const route = '/free-estimate';
  const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
  const scripts = parseJsonLd(html, route);
  const quoteAction = scripts.find(item =>
    schemaTypeIncludes(item, 'QuoteAction') &&
    item?.['@id'] === `${baseUrl}${route}#quoteaction`
  );
  const requiredSignals = [
    'Free Painting Estimate for Austin Homes and Businesses',
    'exterior painting',
    'interior painting',
    'cabinet refinishing',
    'commercial painting',
    `href="/contact"`,
    `href="/exterior-painting-austin"`,
    `href="/interior-painting-austin"`,
    `href="/cabinet-refinishing-austin"`,
    `href="/commercial-painting-austin"`,
  ];
  const hasRequiredSignals = requiredSignals.every(signal => html.includes(signal));
  const hasQuoteAction =
    quoteAction?.provider?.['@id'] === `${baseUrl}/#localbusiness` &&
    quoteAction?.target?.urlTemplate === `${baseUrl}/contact` &&
    schemaTypeIncludes(quoteAction?.target, 'EntryPoint') &&
    schemaTypeIncludes(quoteAction?.object, 'Service');
  const hasLocalBusiness = scripts.some(item =>
    schemaTypeIncludes(item, 'LocalBusiness') &&
    schemaTypeIncludes(item, 'HousePainter') &&
    item?.['@id'] === `${baseUrl}/#localbusiness`
  );

  if (response.status !== 200 || !hasRequiredSignals || !hasQuoteAction || !hasLocalBusiness) {
    fail(`${route}: live free estimate page should be indexable with estimate intent copy, service links, QuoteAction, and LocalBusiness schema.`);
    return;
  }

  console.log('Live free estimate page includes estimate intent, service links, QuoteAction, and LocalBusiness schema');
}

async function checkHtmlSitemapDiscoveryLinks() {
  const route = '/sitemap';
  const [{ response, text: html }, { response: sitemapResponse, text: sitemapXml }] = await Promise.all([
    fetchText(`${baseUrl}${route}?v=${Date.now()}`),
    fetchText(`${baseUrl}/sitemap.xml?v=${Date.now()}`)
  ]);
  const hrefRoutes = new Set(
    [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)]
      .map(match => normalizeInternalRoute(match[1]))
      .filter(Boolean)
  );
  const serviceLocationRoutes = sitemapResponse.status === 200
    ? [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map(match => routePathFromUrl(match[1]))
      .filter(routeIsServiceLocation)
    : [];
  const requiredRoutes = ['/free-estimate', ...primaryServiceAreaHubRoutes, ...serviceLocationRoutes];
  const missingRoutes = requiredRoutes.filter(requiredRoute => !hrefRoutes.has(requiredRoute));

  if (response.status !== 200 || sitemapResponse.status !== 200 || serviceLocationRoutes.length < 64 || missingRoutes.length > 0) {
    fail(`${route}: live HTML sitemap should link to free estimate, all primary service-area hubs, and service-location pages; missing ${missingRoutes.join(', ') || 'none'}.`);
    return;
  }

  console.log(`Live HTML sitemap discovery links checked: ${requiredRoutes.length}/${requiredRoutes.length}`);
}

async function checkTestimonialsTrustSignals() {
  const { response, text: html } = await fetchText(`${baseUrl}/testimonials?v=${Date.now()}`);
  const reviewSchemaCount = (html.match(/itemtype="https:\/\/schema\.org\/Review"/g) || []).length;
  const hasGoogleReviewsCta = html.includes('Read More Reviews on Google');
  const hasGoogleProfileLink =
    html.includes(`href="${googleBusinessProfileUrl}"`) ||
    html.includes(`href="${googleBusinessProfileUrl.replace(/&/g, '&amp;')}"`);
  const hasReviewSignals = [
    'itemprop="itemReviewed"',
    'itemtype="https://schema.org/LocalBusiness"',
    'itemprop="reviewRating"',
    'itemprop="reviewBody"',
    'itemprop="ratingValue"',
    'Hill Country Painting',
  ].every(signal => html.includes(signal));

  if (response.status !== 200 || reviewSchemaCount < 10 || !hasGoogleReviewsCta || !hasGoogleProfileLink || !hasReviewSignals) {
    fail('/testimonials: live page is missing real-review schema semantics or the Google reviews trust link.');
    return;
  }

  console.log(`Live testimonials trust signals checked: ${reviewSchemaCount} marked-up reviews with Google review link`);
}

if (pageIndexingMode) {
  console.log('Live DNS/custom-domain checks skipped for page-indexing validation mode.');
} else {
  await checkDns();
  await checkPagesDomain();
}

await checkCanonicalHostRoutes();
await checkGoogleCrawlerAccess();
await checkGooglebotSitemapAccess();
await checkSitemapPages();
await checkSitemapTrailingSlashRedirects();
await checkCrawlerEntityAssets();
await checkLegacyRedirects();
await checkSupabaseFeed();
await checkAustinSchema();
await checkAustinServiceAreaSchema();
await checkServiceLocationServiceSchema();
await checkHubItemListSchema();
await checkCoreServiceLocationGrids();
await checkPrimaryServiceAreaHubLinks();
await checkPriorityLocalBusinessSchema();
await checkServiceAreaFaqSchema();
await checkGuideFaqSchema();
await checkVisibleLocalTrustSections();
await checkCrawlerControlRoutes();
await checkGoogleEntityIdentifier();
await checkWebsiteSearchActionSchema();
await checkBreadcrumbSchema();
await checkContactPageSchema();
await checkFreeEstimatePage();
await checkHtmlSitemapDiscoveryLinks();
await checkTestimonialsTrustSignals();

if (failures.length) {
  console.error('\nLive SEO verification FAILED:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(pageIndexingMode
  ? '\nLive page-indexing SEO verification PASSED.'
  : '\nLive SEO verification PASSED.');
