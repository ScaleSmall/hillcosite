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
const typoBlogPath = '/blog/how-to-deterimine-the-best-austin-exterior-house-painters';
const correctedBlogPath = '/blog/how-to-determine-the-best-austin-exterior-house-painters';
const googleBusinessProfileUrl = 'https://www.google.com/search?q=Hill+Country+Painting&kgmid=/g/11frssbq6p';
const googleKnowledgeGraphId = '/g/11frssbq6p';
const businessLatitude = 30.3337;
const businessLongitude = -97.8166;
const businessLogoUrl = `${baseUrl}/brand/hill-country-painting-logo-primary.png`;
const businessPrimaryImageUrl = `${baseUrl}/hill-country-painting-austin-homepage-hero.jpg`;
const businessDisambiguatingDescription = 'Austin, Texas service-area painting contractor serving Greater Austin homeowners, property managers, and commercial properties.';
const businessAlternateNames = [
  'Hill Country Painting LLC',
  'Hill Country Painting Austin',
  'Hill Country Painting of Austin',
];
const requiredCanonicalProviderKnowsAboutTopics = [
  'Austin house painters',
  'Austin exterior house painters',
  'Austin interior painters',
  'Austin cabinet painting',
  'Austin commercial painters',
  'painting contractors Austin',
  'Greater Austin painting contractor',
  'West Lake Hills painters',
];
const businessEmail = 'info@hillcopaint.com';
const businessPhone = '(512) 240-2246';
const businessPriceRange = '$$';
const businessPaymentAccepted = 'Cash, Check, Credit Card';
const businessCurrenciesAccepted = 'USD';
const businessOpeningHours = 'Mo-Fr 08:00-18:00';
const businessWeekdayOpens = '08:00';
const businessWeekdayCloses = '18:00';
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
const bannedVisibleValuePositioningSignals = [
  'fraction of replacement cost',
  'all budgets',
  'budget options',
  'budget requirements',
  'budget requires',
  'cheaper',
  'minor savings',
  'cost-effective',
  'price point',
  'fantastic value',
  'great price',
  'good price',
  'best price',
  'fair price',
  'great value',
  'good value',
  'lowest bid',
  'cheapest bid',
  'low-bid',
  'saved the homeowners',
  'on budget',
  'stay within budget',
];
const staleVisibleTrustProofSignals = [
  '100+ homes painted',
  '100+ projects',
  '100+ local projects',
  '100+ projects complete',
  '100+ projects completed',
  '350+ projects',
  '500+ homes painted',
  'family-owned painting company serving austin since 2019',
  'family-owned austin painting contractors',
];
const greaterAustinServiceCounties = [
  'Travis County',
  'Williamson County',
  'Hays County',
];
const greaterAustinServiceAreas = [
  'Austin',
  'West Lake Hills',
  'Rollingwood',
  'Tarrytown',
  'Northwest Hills',
  'West Lake Highlands',
  'Lakeway',
  'Bee Cave',
  'Lake Travis',
  'Steiner Ranch',
  'Barton Creek',
  'Circle C Ranch',
  'Pemberton Heights',
  'Old West Austin',
  'Clarksville',
  'Allandale',
  'Crestview',
  'Leander',
  'Georgetown',
  'Round Rock',
  'Cedar Park',
  'North Austin',
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
  '/house-painters-austin',
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
  '/house-painters-austin',
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
  '/house-painters-austin',
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
const coreServiceLocalDetailSignals = new Map([
  ['/services/interior-painting', 'Austin interior painters'],
  ['/services/exterior-painting', 'Austin exterior house painters'],
  ['/services/cabinet-refinishing', 'Austin cabinet painting'],
  ['/services/commercial', 'Austin commercial painters'],
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
const serviceAreaLocalIntentSignals = new Map([
  ['/service-areas/tarrytown', 'Tarrytown'],
  ['/service-areas/northwest-hills', 'Northwest Hills'],
  ['/service-areas/west-lake-hills', 'West Lake Hills'],
  ['/service-areas/west-lake-highlands', 'West Lake Highlands'],
  ['/service-areas/lakeway', 'Lakeway'],
  ['/service-areas/leander', 'Leander'],
  ['/service-areas/georgetown', 'Georgetown'],
  ['/service-areas/round-rock', 'Round Rock'],
  ['/service-areas/cedar-park', 'Cedar Park'],
  ['/service-areas/north-austin', 'North Austin'],
]);
const serviceAreaLocalSignalDetails = new Map([
  ['/service-areas/austin', { zip: '78746', nearby: 'Tarrytown', service: 'Austin exterior house painters' }],
  ['/service-areas/tarrytown', { zip: '78703', nearby: 'Old Enfield', service: 'Tarrytown house painters' }],
  ['/service-areas/northwest-hills', { zip: '78731', nearby: 'Allandale', service: 'Northwest Hills house painters' }],
  ['/service-areas/west-lake-hills', { zip: '78746', nearby: 'Rollingwood', service: 'West Lake Hills house painters' }],
  ['/service-areas/west-lake-highlands', { zip: '78738', nearby: 'Lake Pointe', service: 'West Lake Highlands house painters' }],
  ['/service-areas/lakeway', { zip: '78734', nearby: 'Rough Hollow', service: 'Lakeway house painters' }],
  ['/service-areas/leander', { zip: '78641', nearby: 'Crystal Falls', service: 'Leander house painters' }],
  ['/service-areas/georgetown', { zip: '78633', nearby: 'Sun City Georgetown', service: 'Georgetown house painters' }],
  ['/service-areas/round-rock', { zip: '78681', nearby: 'Forest Creek', service: 'Round Rock house painters' }],
  ['/service-areas/cedar-park', { zip: '78613', nearby: 'Avery Ranch', service: 'Cedar Park house painters' }],
  ['/service-areas/north-austin', { zip: '78758', nearby: 'The Domain', service: 'North Austin house painters' }],
]);
const coreServiceFaqSchemaRoutes = [
  {
    route: '/services/interior-painting',
    label: 'interior painting',
    localTerm: 'Austin',
    serviceTerm: 'interior',
  },
  {
    route: '/services/exterior-painting',
    label: 'exterior painting',
    localTerm: 'Austin',
    serviceTerm: 'exterior',
  },
  {
    route: '/services/cabinet-refinishing',
    label: 'cabinet refinishing',
    localTerm: 'Austin',
    serviceTerm: 'cabinet',
  },
  {
    route: '/services/commercial',
    label: 'commercial painting',
    localTerm: 'Austin',
    serviceTerm: 'commercial',
  },
];
const priorityServiceReviewContextRoutes = new Map([
  ['/house-painters-austin', 'Austin House Painters'],
  ['/services/interior-painting', 'Austin Interior Painting'],
  ['/services/exterior-painting', 'Austin Exterior Painting'],
  ['/services/cabinet-refinishing', 'Austin Cabinet Painting'],
  ['/services/commercial', 'Austin Commercial Painting'],
  ['/interior-painting-austin', 'Interior Painting Austin'],
  ['/exterior-painting-austin', 'Exterior Painting Austin'],
  ['/cabinet-refinishing-austin', 'Cabinet Refinishing Austin'],
  ['/commercial-painting-austin', 'Commercial Painting Austin'],
]);
const priorityAustinBlogServiceLinks = [
  ['/house-painters-austin', 'Austin House Painters'],
  ['/exterior-painting-austin', 'Austin Exterior House Painters'],
  ['/interior-painting-austin', 'Austin Interior Painters'],
  ['/cabinet-refinishing-austin', 'Austin Cabinet Painting'],
  ['/commercial-painting-austin', 'Austin Commercial Painters'],
];
const austinServiceFaqSchemaRoutes = [
  {
    route: '/house-painters-austin',
    label: 'Austin house painters',
    localTerm: 'Austin',
    serviceTerm: 'house',
  },
  {
    route: '/exterior-painting-austin',
    label: 'Austin exterior painting',
    localTerm: 'Austin',
    serviceTerm: 'exterior',
  },
  {
    route: '/interior-painting-austin',
    label: 'Austin interior painting',
    localTerm: 'Austin',
    serviceTerm: 'interior',
  },
  {
    route: '/cabinet-refinishing-austin',
    label: 'Austin cabinet painting',
    localTerm: 'Austin',
    serviceTerm: 'cabinet',
  },
  {
    route: '/commercial-painting-austin',
    label: 'Austin commercial painting',
    localTerm: 'Austin',
    serviceTerm: 'commercial',
  },
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
const visibleLocalTrustRoutes = [
  '/service-areas',
  '/house-painters-austin',
  ...coreServiceLocationGridRoutes.keys(),
  ...serviceAreaFaqSchemaRoutes,
];
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
  '/house-painters-austin',
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
  '18815 Obed River',
  '(512) 499-8450',
  '512-499-8450',
  '(512) 537-2078',
  '512-537-2078',
  '(512) 761-8283',
  '512-761-8283',
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
    ['/residential-kitchen-painting-round-rock', '/services/interior-painting'],
    ['/residential-nursery-painting-round-rock', '/services/interior-painting'],
    ['/residential-hallway-painting-round-rock', '/services/interior-painting'],
    ['/residential-ceiling-painting-round-rock', '/services/interior-painting'],
    ['/residential-trim-painting-round-rock', '/services/interior-painting'],
    ['/residential-door-painting-round-rock', '/services/interior-painting'],
    ['/residential-deck-painting-round-rock', '/services/exterior-painting'],
    ['/residential-fence-painting-round-rock', '/services/exterior-painting'],
    ['/residential-porch-painting-round-rock', '/services/exterior-painting'],
    ['/residential-stucco-painting-round-rock', '/services/exterior-painting'],
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
const crawlerSpecificMetaNames = [
  'googlebot',
  'bingbot',
  'gptbot',
  'chatgpt-user',
  'perplexitybot',
  'claudebot',
  'anthropic-ai',
  'cohere-ai',
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
const stalePublicSearchResultSamples = [
  { route: '/', canonical: '/' },
  { route: '/about', canonical: '/about' },
  { route: '/about/', redirect: '/about' },
  { route: '/privacy', noindex: '/privacy', robots: 'noindex, follow' },
  { route: '/terms/', redirect: '/terms' },
  { route: '/contact/', redirect: '/contact' },
  { route: '/faq/', redirect: '/faq' },
  { route: '/austin/', redirect: '/service-areas/austin' },
  { route: '/service-areas/', redirect: '/service-areas' },
  { route: '/services/interior-painting', canonical: '/services/interior-painting' },
  { route: '/services/interior-painting/', redirect: '/services/interior-painting' },
  { route: '/commercial-exterior-painting-round-rock/', redirect: '/services/commercial' },
  { route: '/service/residential-deck-painting-round-rock/', redirect: '/services/exterior-painting' },
  { route: '/service/residential-concrete-painting-round-rock/', redirect: '/services/exterior-painting' },
  { route: '/service/residential-nursery-painting-round-rock/', redirect: '/services/interior-painting' },
  { route: '/service/garage-painting-round-rock/', redirect: '/services' },
  { route: '/service/residential-foyer-painting-round-rock/', redirect: '/services/interior-painting' },
  { route: '/service/residential-hallway-painting-round-rock/', redirect: '/services/interior-painting' },
  { route: '/projects/', redirect: '/gallery' },
  { route: '/exterior-painting/', redirect: '/services/exterior-painting' },
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

function noindexCrawlerMetaProblems(html, expectedRobotsContent) {
  const expectedNofollow = /\bnofollow\b/i.test(expectedRobotsContent);
  const metaByName = new Map(
    [...html.matchAll(/<meta\b[^>]*>/gi)]
      .map(match => attrs(match[0]))
      .filter(tagAttrs => crawlerSpecificMetaNames.includes((tagAttrs.name || '').toLowerCase()))
      .map(tagAttrs => [(tagAttrs.name || '').toLowerCase(), tagAttrs.content || ''])
  );

  return crawlerSpecificMetaNames
    .map(name => {
      const content = metaByName.get(name) || '';

      if (!content) {
        return '';
      }

      if (!/\bnoindex\b/i.test(content) || (expectedNofollow && !/\bnofollow\b/i.test(content))) {
        return `${name}=${content}`;
      }

      return '';
    })
    .filter(Boolean);
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const transientFetchErrorPattern = /(terminated|UND_ERR_SOCKET|ECONNRESET|ETIMEDOUT|fetch failed|other side closed|socket)/i;

async function fetchWithRetry(url, options = {}, attempts = 4) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fetch(url, options);
    } catch (error) {
      lastError = error;
      const message = `${error?.message || ''} ${error?.cause?.message || ''} ${error?.cause?.code || ''}`;
      const isTransient = transientFetchErrorPattern.test(message);

      if (!isTransient || attempt === attempts) {
        throw error;
      }

      await sleep((250 * attempt) + Math.floor(Math.random() * 150));
    }
  }

  throw lastError;
}

async function fetchText(url, headers = {}) {
  const response = await fetchWithRetry(url, {
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

function itemListServiceItems(schema) {
  return asArray(schema?.itemListElement)
    .map(listItem => listItem?.item)
    .flatMap(item => [item, item?.about])
    .filter(item => schemaTypeIncludes(item, 'Service'));
}

function itemListHasCanonicalServiceProvider(schema) {
  const serviceItems = itemListServiceItems(schema);

  return serviceItems.length > 0 && serviceItems.every(service =>
    hasCanonicalServiceProvider(service) ||
    service?.provider?.['@id'] === `${baseUrl}/#localbusiness`
  );
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

function htmlTextContent(fragment) {
  return fragment
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeImageSource(value) {
  if (!value) {
    return '';
  }

  const decoded = value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'");

  try {
    const parsed = new URL(decoded, baseUrl);
    return `${parsed.origin}${parsed.pathname}`;
  } catch {
    return decoded.split(/[?#]/)[0];
  }
}

function imageSourcesFromHtml(html) {
  return [...String(html || '').matchAll(/<img\b[^>]*\bsrc=(["'])(.*?)\1/gi)]
    .map(match => normalizeImageSource(match[2]))
    .filter(Boolean);
}

function sectionContainingText(html, text) {
  const textIndex = String(html || '').indexOf(text);

  if (textIndex === -1) {
    return '';
  }

  const sectionStart = html.lastIndexOf('<section', textIndex);
  const endIndex = html.indexOf('</section>', textIndex);

  if (sectionStart === -1 || endIndex === -1) {
    return '';
  }

  return html.slice(sectionStart, endIndex + '</section>'.length);
}

function galleryHeroImageReuseProblems(html) {
  const heroHtml = sectionContainingText(html, 'Our Work Gallery');

  if (!heroHtml) {
    return ['missing-gallery-hero-section'];
  }

  const heroImages = [...new Set(imageSourcesFromHtml(heroHtml))];
  const outsideHeroHtml = heroHtml ? html.replace(heroHtml, '') : html;
  const outsideImageSet = new Set(imageSourcesFromHtml(outsideHeroHtml));

  return heroImages.filter(src => outsideImageSet.has(src));
}

function htmlHasVisibleAnchor(html, text, route) {
  const anchorMatches = html.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/gi);

  for (const match of anchorMatches) {
    const anchorHtml = match[0];
    const hrefMatch = anchorHtml.match(/\bhref=(["'])(.*?)\1/i);

    if (!hrefMatch || normalizeInternalRoute(hrefMatch[2]) !== route) {
      continue;
    }

    if (htmlTextContent(anchorHtml).includes(text)) {
      return true;
    }
  }

  return false;
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

function visibleTextFromHtml(html) {
  return html
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

function findSubMinimumVisibleCostRanges(text, minimum = 6000) {
  const matches = [];
  const pricePattern = /\$([0-9][0-9,]*)(?:\s*(?:-|–|to)\s*\$?([0-9][0-9,]*))?/g;

  for (const match of text.matchAll(pricePattern)) {
    const low = Number(match[1].replace(/,/g, ''));
    const high = match[2] ? Number(match[2].replace(/,/g, '')) : null;

    if (low < minimum || (high !== null && high < minimum)) {
      matches.push(match[0]);
    }
  }

  return matches;
}

function findSubMinimumStructuredPrices(value, minimum = 6000, path = 'schema', matches = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => findSubMinimumStructuredPrices(item, minimum, `${path}[${index}]`, matches));
    return matches;
  }

  if (!value || typeof value !== 'object') {
    return matches;
  }

  for (const [key, nestedValue] of Object.entries(value)) {
    if (/^(price|lowPrice|highPrice)$/i.test(key) && (typeof nestedValue === 'string' || typeof nestedValue === 'number')) {
      const amount = Number(String(nestedValue).replace(/[^0-9.]/g, ''));

      if (Number.isFinite(amount) && amount > 0 && amount < minimum) {
        matches.push(`${path}.${key}=${nestedValue}`);
      }
    }

    if (/^priceRange$/i.test(key) && typeof nestedValue === 'string' && /\$[0-9]/.test(nestedValue)) {
      for (const range of findSubMinimumVisibleCostRanges(nestedValue, minimum)) {
        matches.push(`${path}.${key}=${range}`);
      }
    }

    findSubMinimumStructuredPrices(nestedValue, minimum, `${path}.${key}`, matches);
  }

  return matches;
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

  const response = await fetchWithRetry(
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
      const response = await fetchWithRetry(currentUrl, {
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
      const page = await fetchWithRetry(`${url}?v=${Date.now()}`, {
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
  const lowVisibleCostProblems = [];
  const lowStructuredPriceProblems = [];
  const valuePositioningProblems = [];
  const staleTrustProofProblems = [];

  async function worker() {
    while (nextIndex < urls.length) {
      const url = urls[nextIndex++];
      const route = routePathFromUrl(url);
      const page = await fetchWithRetry(url, {
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
      const visibleText = visibleTextFromHtml(html);
      const lowVisibleCostRanges = findSubMinimumVisibleCostRanges(visibleText);
      const lowStructuredPrices = findSubMinimumStructuredPrices(parseJsonLd(html, route));
      const valuePositioningSignals = bannedVisibleValuePositioningSignals.filter(signal =>
        visibleText.toLowerCase().includes(signal)
      );
      const staleTrustProofSignals = staleVisibleTrustProofSignals.filter(signal =>
        visibleText.toLowerCase().includes(signal)
      );

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

      if (lowVisibleCostRanges.length > 0) {
        lowVisibleCostProblems.push({ url, ranges: [...new Set(lowVisibleCostRanges)] });
      }

      if (lowStructuredPrices.length > 0) {
        lowStructuredPriceProblems.push({ url, prices: [...new Set(lowStructuredPrices)] });
      }

      if (valuePositioningSignals.length > 0) {
        valuePositioningProblems.push({ url, signals: valuePositioningSignals });
      }

      if (staleTrustProofSignals.length > 0) {
        staleTrustProofProblems.push({ url, signals: staleTrustProofSignals });
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

  for (const problem of lowVisibleCostProblems.slice(0, 10)) {
    fail(`${problem.url}: live visible cost copy must not show project ranges below $6,000 (${problem.ranges.join(', ')})`);
  }

  if (lowVisibleCostProblems.length > 10) {
    fail(`${lowVisibleCostProblems.length - 10} additional live visible cost range problems not shown.`);
  }

  if (lowVisibleCostProblems.length === 0) {
    console.log('Live visible pricing guard: no project cost ranges below $6,000 found on sitemap pages');
  }

  for (const problem of lowStructuredPriceProblems.slice(0, 10)) {
    fail(`${problem.url}: live structured pricing must not show project values below $6,000 (${problem.prices.join(', ')})`);
  }

  if (lowStructuredPriceProblems.length > 10) {
    fail(`${lowStructuredPriceProblems.length - 10} additional live structured pricing problems not shown.`);
  }

  if (lowStructuredPriceProblems.length === 0) {
    console.log('Live structured pricing guard: no project schema values below $6,000 found on sitemap pages');
  }

  for (const problem of valuePositioningProblems.slice(0, 10)) {
    fail(`${problem.url}: live visible value-positioning copy should support full-scope $6,000+ projects, not bargain framing (${problem.signals.join(', ')})`);
  }

  if (valuePositioningProblems.length > 10) {
    fail(`${valuePositioningProblems.length - 10} additional live value-positioning problems not shown.`);
  }

  if (valuePositioningProblems.length === 0) {
    console.log('Live value-positioning guard: no bargain framing found on sitemap pages');
  }

  for (const problem of staleTrustProofProblems.slice(0, 10)) {
    fail(`${problem.url}: live local trust proof should use the canonical 3000+ project metric, not stale proof copy (${problem.signals.join(', ')})`);
  }

  if (staleTrustProofProblems.length > 10) {
    fail(`${staleTrustProofProblems.length - 10} additional live stale trust proof problems not shown.`);
  }

  if (staleTrustProofProblems.length === 0) {
    console.log('Live trust proof guard: no stale 100+/350+/500+ project proof found on sitemap pages');
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
      const response = await fetchWithRetry(`${baseUrl}${route}/?v=${Date.now()}`, {
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

function hasCanonicalProviderServiceCatalog(provider) {
  const offerText = JSON.stringify(provider?.makesOffer || []);
  const catalog = provider?.hasOfferCatalog || {};
  const catalogText = JSON.stringify(catalog);
  const requiredOfferPaths = [
    '/house-painters-austin#service',
    '/service-areas/austin#service',
    '/exterior-painting-austin#service',
    '/interior-painting-austin#service',
    '/cabinet-refinishing-austin#service',
    '/commercial-painting-austin#service',
    '/services/interior-painting#service',
    '/services/exterior-painting#service',
    '/services/cabinet-refinishing#service',
    '/services/commercial#service',
    '/color-consultation#service',
  ];
  const requiredCatalogServices = [
    'Interior painting',
    'Exterior painting',
    'Cabinet painting',
    'Cabinet refinishing',
    'Commercial painting',
    'Color consultation',
  ];

  return (
    Array.isArray(provider?.makesOffer) &&
    provider.makesOffer.length >= requiredOfferPaths.length &&
    schemaTypeIncludes(catalog, 'OfferCatalog') &&
    catalog?.name === 'Austin Painting Services' &&
    requiredOfferPaths.every(path => offerText.includes(`${baseUrl}${path}`)) &&
    requiredCatalogServices.every(service => catalogText.includes(service)) &&
    catalogText.includes(`${baseUrl}/#localbusiness`)
  );
}

function hasPaintingEstimateAction(schema) {
  return asArray(schema?.potentialAction).some(action => {
    const targets = asArray(action?.target);
    const targetUrls = targets.map(target => target?.urlTemplate).filter(Boolean);
    const object = action?.object || {};
    const serviceType = String(object.serviceType || '');

    return (
      schemaTypeIncludes(action, 'QuoteAction') &&
      action?.name === 'Request a painting estimate' &&
      hasCanonicalProviderObject(action?.provider) &&
      targetUrls.includes(`${baseUrl}/contact`) &&
      targetUrls.includes(`${baseUrl}/free-estimate`) &&
      targets.every(target => schemaTypeIncludes(target, 'EntryPoint')) &&
      schemaTypeIncludes(object, 'Service') &&
      object?.name === 'Painting estimate for Greater Austin homes and businesses' &&
      hasCanonicalServiceProvider(object) &&
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
  const alternateNames = asArray(provider?.alternateName);
  const availableLanguages = asArray(provider?.availableLanguage);
  const knowsAbout = asArray(provider?.knowsAbout);
  const areaServedNames = asArray(provider?.areaServed).map(area => area?.name).filter(Boolean);
  const serviceAreaNames = asArray(provider?.serviceArea).map(area => area?.name).filter(Boolean);
  const contactPoint = provider?.contactPoint || {};
  const openingHoursSpecification = provider?.openingHoursSpecification || {};
  const identifier = provider?.identifier || {};

  return (
    provider?.['@id'] === `${baseUrl}/#localbusiness` &&
    providerTypes.includes('LocalBusiness') &&
    providerTypes.includes('HousePainter') &&
    provider?.name === 'Hill Country Painting' &&
    provider?.legalName === 'Hill Country Painting LLC' &&
    hasAllValues(alternateNames, businessAlternateNames) &&
    provider?.disambiguatingDescription === businessDisambiguatingDescription &&
    provider?.naics === businessNaicsCode &&
    provider?.industry === businessNaicsDescription &&
    provider?.url === baseUrl &&
    provider?.email === businessEmail &&
    schemaTypeIncludes(contactPoint, 'ContactPoint') &&
    contactPoint?.telephone === businessPhone &&
    contactPoint?.contactType === 'customer service' &&
    provider?.logo?.['@type'] === 'ImageObject' &&
    provider?.logo?.url === businessLogoUrl &&
    provider?.logo?.contentUrl === businessLogoUrl &&
    JSON.stringify(provider?.image || []).includes(businessPrimaryImageUrl) &&
    JSON.stringify(provider?.image || []).includes(`${baseUrl}/#logo`) &&
    provider?.priceRange === businessPriceRange &&
    provider?.paymentAccepted === businessPaymentAccepted &&
    provider?.currenciesAccepted === businessCurrenciesAccepted &&
    availableLanguages.includes('English') &&
    hasAllValues(areaServedNames, [...greaterAustinServiceAreas, ...greaterAustinServiceCounties]) &&
    hasAllValues(serviceAreaNames, ['Greater Austin Area', ...greaterAustinServiceCounties]) &&
    provider?.hasMap === googleBusinessProfileUrl &&
    provider?.openingHours === businessOpeningHours &&
    schemaTypeIncludes(openingHoursSpecification, 'OpeningHoursSpecification') &&
    openingHoursSpecification?.opens === businessWeekdayOpens &&
    openingHoursSpecification?.closes === businessWeekdayCloses &&
    hasAllValues(knowsAbout, requiredCanonicalProviderKnowsAboutTopics) &&
    providerSameAs.includes(googleBusinessProfileUrl) &&
    hasValidAggregateRating(provider) &&
    hasCanonicalProviderServiceCatalog(provider) &&
    schemaTypeIncludes(identifier, 'PropertyValue') &&
    identifier?.propertyID === 'kgmid' &&
    identifier?.value === googleKnowledgeGraphId &&
    identifier?.url === googleBusinessProfileUrl
  );
}

function hasCanonicalProviderObject(provider) {
  return hasCanonicalServiceProvider({ provider });
}

function collectSchemaNodes(value, predicate, result = [], seen = new Set()) {
  if (!value || typeof value !== 'object' || seen.has(value)) {
    return result;
  }

  seen.add(value);

  if (predicate(value)) {
    result.push(value);
  }

  for (const child of Object.values(value)) {
    if (Array.isArray(child)) {
      for (const item of child) {
        collectSchemaNodes(item, predicate, result, seen);
      }
    } else {
      collectSchemaNodes(child, predicate, result, seen);
    }
  }

  return result;
}

function schemaTreeServicesHaveCanonicalProviders(schema) {
  const services = collectSchemaNodes(schema, item => schemaTypeIncludes(item, 'Service'));

  return services.length > 0 && services.every(service =>
    hasCanonicalServiceProvider(service) ||
    service?.provider?.['@id'] === `${baseUrl}/#localbusiness`
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

  if (!llmsFullText.includes(`${baseUrl}${correctedBlogPath}`) || llmsFullText.toLowerCase().includes('deterimine')) {
    fail('/llms-full.txt: live full LLM manifest must use the corrected exterior painters blog URL and title.');
  }

  const aiRequired = [
    'Austin house painters',
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/entity-facts.json`,
    `${baseUrl}/citation-facts.json`,
    `${baseUrl}/about`,
    `${baseUrl}/gallery`,
    `${baseUrl}/testimonials`,
    `${baseUrl}/faq`,
    `${baseUrl}/free-estimate`,
    `${baseUrl}/exterior-painting-austin`,
    `${baseUrl}/interior-painting-austin`,
    `${baseUrl}/cabinet-refinishing-austin`,
    `${baseUrl}/commercial-painting-austin`,
  ];

  if (!aiRequired.every(value => aiText.includes(value))) {
    fail('/ai.txt: live AI discovery file is missing Austin house painter positioning, canonical discovery URLs, priority trust/conversion URLs, or priority Austin service URLs.');
  }

  const typoPublicAsset = [...assetText.entries()]
    .find(([path, text]) => path !== '/robots.txt' && text.toLowerCase().includes('deterimine'));

  if (typoPublicAsset) {
    fail(`${typoPublicAsset[0]}: live crawler/entity asset must not include the misspelled blog slug/title.`);
  }

  if (!sitemapXml.includes(`${baseUrl}${correctedBlogPath}`) || sitemapXml.includes(`${baseUrl}${typoBlogPath}`)) {
    fail('/sitemap.xml: live sitemap must use the corrected exterior painters blog URL and exclude the misspelled URL.');
  }

  try {
    const entityFacts = JSON.parse(assetText.get('/entity-facts.json') || '{}');
    const areaServed = asArray(entityFacts.areaServed).map(area => area?.name || area).filter(Boolean);
    const serviceArea = asArray(entityFacts.serviceArea).map(area => area?.name || area).filter(Boolean);
    const knowsAbout = asArray(entityFacts.knowsAbout);
    const sameAs = asArray(entityFacts.sameAs);
    const alternateNames = asArray(entityFacts.alternateName);
    const priorityServicePages = asArray(entityFacts.priorityServicePages);
    const staleWarnings = JSON.stringify(entityFacts.staleCitationWarnings || []);
    const hasCanonicalOfferProviders =
      schemaTreeServicesHaveCanonicalProviders(entityFacts.makesOffer) &&
      schemaTreeServicesHaveCanonicalProviders(entityFacts.hasOfferCatalog);
    const hasCanonicalGeo =
      entityFacts.geo?.['@type'] === 'GeoCoordinates' &&
      Number(entityFacts.geo?.latitude) === businessLatitude &&
      Number(entityFacts.geo?.longitude) === businessLongitude;
    const hasCanonicalImageIdentity =
      entityFacts.logo?.['@type'] === 'ImageObject' &&
      entityFacts.logo?.url === businessLogoUrl &&
      entityFacts.logo?.contentUrl === businessLogoUrl &&
      JSON.stringify(entityFacts.image || []).includes(businessPrimaryImageUrl) &&
      JSON.stringify(entityFacts.image || []).includes(`${baseUrl}/#logo`);

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
      !priorityServicePages.some(page => page?.name === 'Austin house painters' && page?.url === `${baseUrl}/house-painters-austin`) ||
      !priorityServicePages.some(page => page?.name === 'Austin exterior house painters' && page?.url === `${baseUrl}/exterior-painting-austin`) ||
      !sameAs.includes(googleBusinessProfileUrl) ||
      !hasCanonicalSocialProfiles(sameAs) ||
      !hasCanonicalGeo ||
      !hasCanonicalImageIdentity ||
      !hasCanonicalOfferProviders ||
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
      fail('/entity-facts.json: live entity facts are missing canonical identity, logo/image signals, geo coordinates, offer provider identity, alternate names, disambiguating description, NAICS classification, GBP/kgmid, social profile sameAs links, Austin service counties, priority topics, priority Austin service pages, aggregate rating, sitemap count, stale slash URL warnings, or request-subdomain citation warning.');
    }
  } catch {
    fail('/entity-facts.json: live entity facts are not valid JSON.');
  }

  try {
    const citationFacts = JSON.parse(assetText.get('/citation-facts.json') || '{}');
    const citationIdentity = citationFacts.canonicalIdentity || {};
    const citationTopics = asArray(citationIdentity.priorityLocalSearchTopics);
    const citationPriorityServicePages = asArray(citationIdentity.priorityServicePages);
    const citationCounties = asArray(citationIdentity.serviceCounties);
    const sameAs = asArray(citationFacts.sameAs);
    const alternateNames = asArray(citationIdentity.alternateName);
    const staleWarnings = JSON.stringify(citationFacts.staleCitationWarnings || []);
    const knownCitationSources = JSON.stringify(citationFacts.knownExternalCitationSources || []);
    const verificationUrls = asArray(citationFacts.verificationUrls);
    const requiredCitationSourceUrls = [
      'https://www.chamberofcommerce.com/united-states/texas/hutto/painter/2012266792-hill-country-painting',
      'https://www.whereorg.com/hill-country-painting-42268739',
      'https://www.startus.cc/company/254309',
      'https://www.mapquest.com/us/texas/hill-country-painting-428908114',
      'https://www.yellowpages.com/pflugerville-tx/bpp/hill-country-painting-559089428',
      'https://www.startus.cc/company/454965',
      'https://www.startus.cc/company/hill-country-painting-round-rock',
      'https://www.storeboard.com/hillcountrypaintingofroundrock',
    ];
    const requiredCitationVerificationUrls = [
      `${baseUrl}/`,
      `${baseUrl}/about`,
      `${baseUrl}/contact`,
      `${baseUrl}/free-estimate`,
      `${baseUrl}/gallery`,
      `${baseUrl}/testimonials`,
      `${baseUrl}/faq`,
      `${baseUrl}/guides/painting-costs-austin`,
      `${baseUrl}/service-areas`,
      `${baseUrl}/house-painters-austin`,
      `${baseUrl}/service-areas/austin`,
      `${baseUrl}/exterior-painting-austin`,
      `${baseUrl}/interior-painting-austin`,
      `${baseUrl}/cabinet-refinishing-austin`,
      `${baseUrl}/commercial-painting-austin`,
      `${baseUrl}/entity-facts.json`,
      `${baseUrl}/citation-facts.json`,
      `${baseUrl}/sitemap.xml`,
    ];
    const hasCanonicalGeo =
      citationIdentity.geo?.['@type'] === 'GeoCoordinates' &&
      Number(citationIdentity.geo?.latitude) === businessLatitude &&
      Number(citationIdentity.geo?.longitude) === businessLongitude;
    const hasCanonicalImageIdentity =
      citationIdentity.logo?.['@type'] === 'ImageObject' &&
      citationIdentity.logo?.url === businessLogoUrl &&
      citationIdentity.logo?.contentUrl === businessLogoUrl &&
      JSON.stringify(citationIdentity.image || []).includes(businessPrimaryImageUrl) &&
      JSON.stringify(citationIdentity.image || []).includes(`${baseUrl}/#logo`);

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
      !hasCanonicalGeo ||
      !hasCanonicalImageIdentity ||
      !hasValidAggregateRating(citationIdentity) ||
      !hasAllValues(citationTopics, priorityLocalSearchTopics) ||
      !citationPriorityServicePages.some(page => page?.name === 'Austin house painters' && page?.url === `${baseUrl}/house-painters-austin`) ||
      !citationPriorityServicePages.some(page => page?.name === 'Austin commercial painters' && page?.url === `${baseUrl}/commercial-painting-austin`) ||
      !hasAllValues(citationCounties, greaterAustinServiceCounties) ||
      !hasAllValues(verificationUrls, requiredCitationVerificationUrls) ||
      !staleWarnings.includes(`${baseUrl}/austin/`) ||
      !staleWarnings.includes(`${baseUrl}/service-areas/austin`) ||
      !staleWarnings.includes(`${baseUrl}/exterior-painting/`) ||
      !staleWarnings.includes(`${baseUrl}/services/exterior-painting`) ||
      !staleWarnings.includes(`${baseUrl}/cabinet-refinishing/`) ||
      !staleWarnings.includes(`${baseUrl}/services/cabinet-refinishing`) ||
      !staleWarnings.includes(`${baseUrl}/commercial-painting/`) ||
      !staleWarnings.includes(`${baseUrl}/services/commercial`) ||
      !staleWarnings.includes('18815 Obed River') ||
      !staleWarnings.includes('(512) 537-2078') ||
      !staleWarnings.includes('(512) 761-8283') ||
      !staleWarnings.includes('https://request.hillcopaint.com/') ||
      !staleWarnings.includes(`${baseUrl}/contact`) ||
      !requiredCitationSourceUrls.every(url => knownCitationSources.includes(url))
    ) {
      fail('/citation-facts.json: live citation facts are missing canonical identity, logo/image signals, geo coordinates, verification URLs, alternate names, disambiguating description, NAICS classification, GBP/kgmid, social profile sameAs links, aggregate rating, service counties, priority topics, priority Austin service pages, stale citation source URLs, stale slash URL warnings, or request-subdomain citation warning.');
    }
  } catch {
    fail('/citation-facts.json: live citation facts are not valid JSON.');
  }

  console.log(`Live crawler/entity assets checked: ${passed}/${crawlerEntityAssets.length}`);
}

async function checkSupabaseFeed() {
  const { response, text: html } = await fetchText(`${baseUrl}/gallery?v=${Date.now()}`);
  const scripts = parseJsonLd(html, '/gallery');
  const imageGallerySchema = scripts.find(item =>
    schemaTypeIncludes(item, 'ImageGallery') &&
    item?.url === `${baseUrl}/gallery`
  );
  const projectProofSchema = scripts.find(item =>
    schemaTypeIncludes(item, 'ItemList') &&
    item?.['@id'] === `${baseUrl}/gallery#project-proof`
  );
  const projectProofText = JSON.stringify(projectProofSchema || {});
  const requiredProjectProofRoutes = [
    '/exterior-painting-austin',
    '/service-areas/austin',
    '/interior-painting-tarrytown',
    '/service-areas/tarrytown',
    '/cabinet-refinishing-west-lake-hills',
    '/service-areas/west-lake-hills',
    '/commercial-painting-north-austin',
    '/service-areas/north-austin',
  ];
  const projectProofItems = asArray(projectProofSchema?.itemListElement);
  const hasCanonicalProjectProviders = projectProofItems.every(listItem =>
    hasCanonicalProviderObject(listItem?.item?.provider) &&
    hasCanonicalProviderObject(listItem?.item?.about?.provider)
  );

  if (response.status !== 200) {
    fail(`/gallery returned ${response.status}`);
  }

  if (!html.includes(currentSupabaseUrl)) {
    fail(`/gallery does not include current Supabase project ${currentSupabaseUrl}`);
  }

  if (html.includes(retiredSupabaseUrl)) {
    fail(`/gallery still includes retired Supabase project ${retiredSupabaseUrl}`);
  }

  if (!imageGallerySchema || !hasCanonicalProviderObject(imageGallerySchema.provider)) {
    fail('/gallery ImageGallery schema is missing canonical LocalBusiness provider identity');
  }

  if (
    !projectProofSchema ||
    projectProofItems.length < 4 ||
    !hasCanonicalProviderObject(projectProofSchema.provider) ||
    !hasCanonicalProjectProviders
  ) {
    fail('/gallery project proof ItemList is missing canonical LocalBusiness provider identity on the list or project services');
  }

  if (!html.includes('Project Proof by Service and Area')) {
    fail('/gallery project proof visible section heading is missing');
  }

  for (const expectedSignal of [
    'Austin exterior repaint planning',
    'Tarrytown interior repaint preparation',
    'West Lake Hills cabinet finish work',
    'North Austin commercial painting scheduling',
  ]) {
    if (!html.includes(expectedSignal) || !projectProofText.includes(expectedSignal)) {
      fail(`/gallery project proof is missing ${expectedSignal}`);
    }
  }

  for (const expectedRoute of requiredProjectProofRoutes) {
    const expectedHref = `href="${expectedRoute}"`;
    if (!html.includes(expectedHref) || !projectProofText.includes(`${baseUrl}${expectedRoute}`)) {
      fail(`/gallery project proof must visibly and structurally link to ${expectedRoute}`);
    }
  }

  const reusedGalleryHeroImages = galleryHeroImageReuseProblems(html);
  if (reusedGalleryHeroImages.length > 0) {
    fail(`/gallery hero image(s) must not be reused elsewhere on the gallery page (${reusedGalleryHeroImages.join(', ')})`);
  }

  if (
    response.status === 200 &&
    html.includes(currentSupabaseUrl) &&
    !html.includes(retiredSupabaseUrl) &&
    imageGallerySchema &&
    hasCanonicalProviderObject(imageGallerySchema.provider) &&
    projectProofSchema &&
    hasCanonicalProviderObject(projectProofSchema.provider) &&
    reusedGalleryHeroImages.length === 0
  ) {
    console.log('Live Supabase gallery feed: current project present, retired project absent; ImageGallery provider identity, project proof schema, and gallery hero image uniqueness are canonical');
  }
}

async function checkLegacyRedirects() {
  let passed = 0;

  for (const [source, target] of liveLegacyRedirects) {
    const response = await fetchWithRetry(`${baseUrl}${source}?v=${Date.now()}`, {
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

async function checkStalePublicSearchResultSamples() {
  let passed = 0;

  for (const sample of stalePublicSearchResultSamples) {
    const response = await fetchWithRetry(`${baseUrl}${sample.route}?v=${Date.now()}`, {
      redirect: 'manual',
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });

    if (sample.redirect) {
      const location = response.headers.get('location') || '';
      const normalized = normalizeRedirectLocation(location);

      if (response.status !== 301 || normalized.host !== 'www.hillcopaint.com' || normalized.route !== sample.redirect) {
        fail(`${sample.route}: stale public search-result URL should 301 to ${sample.redirect}, found status ${response.status} location ${location || '(missing)'}`);
        continue;
      }

      passed += 1;
      continue;
    }

    const html = await response.text();
    const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gi)]
      .map(match => match[0])
      .filter(tag => (attrs(tag).rel || '').toLowerCase() === 'canonical');
    const canonicalHrefs = canonicalTags.map(tag => attrs(tag).href || '');
    const visibleTextLower = visibleTextFromHtml(html).toLowerCase();
    const staleSignals = [
      ...stalePublicIdentitySignals.filter(signal => html.includes(signal)),
      ...staleVisibleTrustProofSignals.filter(signal => visibleTextLower.includes(signal)),
      ...bannedVisibleValuePositioningSignals.filter(signal => visibleTextLower.includes(signal)),
    ];

    if (sample.noindex) {
      const xRobotsTag = response.headers.get('x-robots-tag') || '';
      const crawlerMetaProblems = noindexCrawlerMetaProblems(html, sample.robots || 'noindex, follow');

      if (
        response.status !== 200 ||
        xRobotsTag.toLowerCase() !== (sample.robots || 'noindex, follow') ||
        canonicalHrefs.length !== 1 ||
        canonicalHrefs[0] !== `${baseUrl}${sample.noindex}` ||
        staleSignals.length > 0 ||
        crawlerMetaProblems.length > 0
      ) {
        fail(`${sample.route}: stale public search-result noindex page should be live, canonical, clean, and have no crawler-specific index directives; found status ${response.status}, X-Robots-Tag "${xRobotsTag || '(missing)'}", canonicals ${canonicalHrefs.join(', ') || '(none)'}, stale ${staleSignals.join(', ') || 'none'}, crawler meta ${crawlerMetaProblems.join('; ') || 'ok'}`);
        continue;
      }

      passed += 1;
      continue;
    }

    if (
      response.status !== 200 ||
      canonicalHrefs.length !== 1 ||
      canonicalHrefs[0] !== `${baseUrl}${sample.canonical}` ||
      staleSignals.length > 0
    ) {
      fail(`${sample.route}: stale public search-result canonical page should be live, canonical, and free of stale visible signals; found status ${response.status}, canonicals ${canonicalHrefs.join(', ') || '(none)'}, stale ${staleSignals.join(', ') || 'none'}`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live stale public search-result samples checked: ${passed}/${stalePublicSearchResultSamples.length}`);
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
    const hubReferenceSchema = scripts.find(item =>
      schemaTypeIncludes(item, 'ItemList') &&
      item?.['@id'] === `${baseUrl}${route}#austin-house-painter-comparison`
    );
    const hubReferenceText = JSON.stringify(hubReferenceSchema || {});
    const hasAustinHousePaintersHubLink =
      html.includes('href="/house-painters-austin"') ||
      html.includes("href='/house-painters-austin'");
    const hasAustinHousePaintersHubSchema =
      hubReferenceSchema &&
      hasCanonicalProviderObject(hubReferenceSchema.provider) &&
      hubReferenceText.includes(`${baseUrl}/house-painters-austin`) &&
      hubReferenceText.includes(`${baseUrl}/house-painters-austin#webpage`);

    if (response.status !== 200 || !hasSignal || !hasServiceAreaCounties || !hasServiceEstimateAction || !hasServicePageConnection || !hasServiceProviderIdentity || !hasAustinHousePaintersHubLink || !hasAustinHousePaintersHubSchema) {
      fail(`${route}: live Service schema is missing the ${phrase} alternateName, keywords, serviceOutput, county serviceArea, estimate QuoteAction, WebPage connection, canonical provider identity, or Austin house-painters hub reference signal.`);
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

async function checkLocalServiceAreaIntentSchema() {
  let passed = 0;

  for (const [route, serviceAreaName] of serviceAreaLocalIntentSignals) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const serviceId = `${baseUrl}${route}#service`;
    const webpageId = `${baseUrl}${route}#webpage`;
    const serviceSchemas = scripts.filter(item => schemaTypeIncludes(item, 'Service') && item?.['@id'] === serviceId);
    const requiredSignals = [
      `${serviceAreaName} house painters`,
      `painting contractors ${serviceAreaName}`,
      `${serviceAreaName} cabinet painting`,
    ];
    const hasLocalIntentSignals = serviceSchemas.some(schema => {
      const alternateNames = asArray(schema.alternateName);
      const keywords = asArray(schema.keywords);
      const serviceOutput = String(schema.serviceOutput || '');

      return (
        requiredSignals.every(signal => alternateNames.includes(signal) && keywords.includes(signal)) &&
        serviceOutput.includes(`${serviceAreaName} house painters`) &&
        serviceOutput.includes('exterior painting') &&
        serviceOutput.includes('interior painting') &&
        serviceOutput.includes('cabinet painting') &&
        serviceOutput.includes('commercial painting') &&
        hasCanonicalServiceProvider(schema) &&
        schema?.mainEntityOfPage?.['@id'] === webpageId
      );
    });

    if (response.status !== 200 || !hasLocalIntentSignals) {
      fail(`${route}: live service-area Service schema is missing local house-painter, painting-contractor, cabinet, serviceOutput, provider, or WebPage signals.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live local service-area intent schema checked: ${passed}/${serviceAreaLocalIntentSignals.size}`);
}

async function checkAustinHousePaintersHubSchema() {
  const route = '/house-painters-austin';
  const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
  const scripts = parseJsonLd(html, route);
  const serviceId = `${baseUrl}${route}#service`;
  const webpageId = `${baseUrl}${route}#webpage`;
  const serviceSchemas = scripts.filter(item => schemaTypeIncludes(item, 'Service') && item?.['@id'] === serviceId);
  const requiredSignals = [
    'Austin house painters',
    'house painters Austin',
    'painting contractors Austin',
    'Austin painting contractors',
    'house painters near me Austin',
    'exterior painters near me Austin',
    'interior painters near me Austin',
    'cabinet painters near me Austin',
    'commercial painters near me Austin',
  ];
  const requiredVisibleRoutes = [
    '/exterior-painting-austin',
    '/interior-painting-austin',
    '/cabinet-refinishing-austin',
    '/commercial-painting-austin',
    '/service-areas/austin',
  ];
  const requiredAreaProofRoutes = [
    '/areas/tarrytown/tarrytown',
    '/areas/west-lake-hills-and-rollingwood/west-lake-hills',
    '/areas/allandale-and-northwest-hills/northwest-hills',
    '/areas/barton-creek',
    '/areas/west-lake-hills-and-rollingwood/rollingwood',
    '/areas/downtown-austin-luxury',
    '/areas/downtown-austin-luxury/zilker',
    '/areas/allandale-and-northwest-hills/allandale',
    '/areas/circle-c-ranch-and-southwest-austin/circle-c-ranch',
    '/areas/lakeway-bee-cave-and-lake-travis/lakeway',
    '/areas/lakeway-bee-cave-and-lake-travis/bee-cave',
    '/areas/north-austin',
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
    schema?.mainEntityOfPage?.['@id'] === webpageId
  );
  const faqSchema = scripts.find(item => schemaTypeIncludes(item, 'FAQPage'));
  const questions = Array.isArray(faqSchema?.mainEntity) ? faqSchema.mainEntity : [];
  const validQuestions = questions.filter(item =>
    schemaTypeIncludes(item, 'Question') &&
    item.name &&
    schemaTypeIncludes(item.acceptedAnswer, 'Answer') &&
    item.acceptedAnswer?.text
  );
  const faqText = validQuestions
    .map(item => `${item.name} ${item.acceptedAnswer?.text || ''}`)
    .join(' ')
    .toLowerCase();
  const hasFaq =
    validQuestions.length >= 6 &&
    faqText.includes('austin') &&
    faqText.includes('house') &&
    faqText.includes('house painters near me in austin') &&
    faqText.includes('google business profile') &&
    faqText.includes('written scopes');
  const hasVisibleRoutes = requiredVisibleRoutes.every(expectedRoute =>
    html.includes(`href="${expectedRoute}"`) || html.includes(`href='${expectedRoute}'`)
  );
  const areaProofSchema = scripts.find(item =>
    schemaTypeIncludes(item, 'ItemList') &&
    item?.['@id'] === `${baseUrl}/house-painters-austin#austin-area-proof`
  );
  const areaProofUrls = itemListUrls(areaProofSchema);
  const hasVisibleAreaProofRoutes = requiredAreaProofRoutes.every(expectedRoute =>
    html.includes(`href="${expectedRoute}"`) || html.includes(`href='${expectedRoute}'`)
  );
  const hasAreaProofSchema =
    areaProofSchema &&
    hasCanonicalProviderObject(areaProofSchema.about) &&
    requiredAreaProofRoutes.every(expectedRoute => areaProofUrls.includes(`${baseUrl}${expectedRoute}`));
  const hasSitewideNavigationLink =
    html.includes('Austin House Painters') &&
    (html.includes('href="/house-painters-austin"') || html.includes("href='/house-painters-austin'"));
  const hasGoogleProfileLink =
    html.includes(`href="${googleBusinessProfileUrl}"`) ||
    html.includes(`href="${googleBusinessProfileUrl.replace(/&/g, '&amp;')}"`);
  const hasVisibleTrust =
    hasGoogleProfileLink &&
    html.includes(`href="${canonicalPhoneHref}"`) &&
    html.includes('Hill Country Painting - Service Area Map') &&
    html.includes('Google Business Profile') &&
    html.includes('Google reviews') &&
    html.includes('Directions on Google Maps') &&
    html.includes('Serving Austin, TX and the Greater Austin area');

  if (
    response.status !== 200 ||
    !hasLocalIntentSignals ||
    !hasPriorityServiceOutput ||
    !hasServiceProviderIdentity ||
    !hasServicePageConnection ||
    !hasFaq ||
    !hasVisibleRoutes ||
    !hasVisibleAreaProofRoutes ||
    !hasAreaProofSchema ||
    !hasSitewideNavigationLink ||
    !hasVisibleTrust
  ) {
    fail(`${route}: live Austin house-painters hub is missing exact-intent Service schema, provider identity, FAQ schema, trust section, sitewide navigation link, priority Austin service links, or local area proof links/schema.`);
    return;
  }

  console.log('Live Austin house-painters hub includes exact-intent schema, FAQ, trust section, sitewide navigation link, and priority service links');
}

async function checkSitewidePriorityServiceNavigation() {
  const route = '/';
  const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
  const requiredSitewidePriorityServiceLinks = [
    ['Austin House Painters', '/house-painters-austin'],
    ['Austin Exterior House Painters', '/exterior-painting-austin'],
    ['Austin Interior Painters', '/interior-painting-austin'],
    ['Austin Cabinet Painting', '/cabinet-refinishing-austin'],
    ['Austin Commercial Painters', '/commercial-painting-austin'],
  ];
  const missingLinks = requiredSitewidePriorityServiceLinks.filter(([anchorText, expectedRoute]) =>
    !htmlHasVisibleAnchor(html, anchorText, expectedRoute)
  );

  if (response.status !== 200 || missingLinks.length > 0) {
    fail(`${route}: live sitewide navigation is missing priority Austin service links: ${missingLinks.map(([text, path]) => `${text} -> ${path}`).join(', ') || 'none'}.`);
    return;
  }

  console.log(`Live sitewide priority service navigation checked: ${requiredSitewidePriorityServiceLinks.length}/${requiredSitewidePriorityServiceLinks.length}`);
}

async function checkSitewideServiceLocationFooterAnchors() {
  const route = '/';
  const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
  const locations = [
    ['Austin', 'austin'],
    ['Tarrytown', 'tarrytown'],
    ['Northwest Hills', 'northwest-hills'],
    ['West Lake Hills', 'west-lake-hills'],
    ['Westlake Highlands', 'west-lake-highlands'],
    ['Lakeway', 'lakeway'],
    ['Leander', 'leander'],
    ['Georgetown', 'georgetown'],
    ['Round Rock', 'round-rock'],
    ['Cedar Park', 'cedar-park'],
    ['North Austin', 'north-austin'],
    ['Rollingwood', 'rollingwood'],
    ['Bee Cave', 'bee-cave'],
    ['Barton Creek', 'barton-creek'],
    ['Steiner Ranch', 'steiner-ranch'],
    ['Circle C Ranch', 'circle-c-ranch'],
  ];
  const serviceGroups = [
    ['Interior Painting', 'interior-painting'],
    ['Exterior Painting', 'exterior-painting'],
    ['Cabinet Painting', 'cabinet-refinishing'],
    ['Commercial Painting', 'commercial-painting'],
  ];
  const expectedLinks = serviceGroups.flatMap(([serviceLabel, routePrefix]) =>
    locations.map(([location, slug]) => [`${serviceLabel} ${location}`, `/${routePrefix}-${slug}`])
  );
  const missingLinks = expectedLinks.filter(([anchorText, expectedRoute]) =>
    !htmlHasVisibleAnchor(html, anchorText, expectedRoute)
  );

  if (response.status !== 200 || missingLinks.length > 0) {
    fail(`${route}: live footer is missing descriptive service-location anchor text: ${missingLinks.slice(0, 10).map(([text, path]) => `${text} -> ${path}`).join(', ') || 'none'}.`);
    return;
  }

  console.log(`Live descriptive service-location footer anchors checked: ${expectedLinks.length}/${expectedLinks.length}`);
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

async function checkServiceLocationLocalSignalDetails() {
  const { response: sitemapResponse, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml?v=${Date.now()}`);

  if (sitemapResponse.status !== 200) {
    fail('live sitemap could not be fetched for service-location local detail validation.');
    return;
  }

  const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(match => routePathFromUrl(match[1]))
    .filter(routeIsServiceLocation);
  let passed = 0;

  for (const route of routes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const hasLocalDetailSignals =
      html.includes('Painting Service Area Details') &&
      html.includes('ZIP Codes We Serve') &&
      html.includes('Nearby Areas') &&
      html.includes('Services Commonly Requested Here') &&
      !html.includes('common project scopes');

    if (response.status !== 200 || !hasLocalDetailSignals) {
      fail(`${route}: live service-location page is missing expanded local details for ZIP codes, nearby areas, service keywords, or still uses "common project scopes" wording.`);
      continue;
    }

    passed++;
  }

  console.log(`Live service-location local detail sections checked: ${passed}/${routes.length}`);
}

async function checkHubItemListSchema() {
  const hubs = [
    {
      route: '/',
      itemListId: `${baseUrl}/#austin-house-painter-services`,
      requiredRoutes: [
        '/house-painters-austin',
        '/exterior-painting-austin',
        '/interior-painting-austin',
        '/cabinet-refinishing-austin',
        '/commercial-painting-austin',
      ],
      label: 'homepage Austin house-painter services',
      requiredVisibleRoutes: ['/house-painters-austin'],
      requiredVisibleAnchors: [
        ['Austin painting contractors', '/house-painters-austin'],
      ],
    },
    {
      route: '/services',
      itemListId: `${baseUrl}/services#servicelist`,
      requiredRoutes: servicesHubItemListRoutes,
      label: 'services hub',
      requiredVisibleAnchors: [
        ['Austin painting contractors', '/house-painters-austin'],
      ],
    },
    {
      route: '/service-areas',
      itemListId: `${baseUrl}/service-areas#arealist`,
      requiredRoutes: serviceAreasHubItemListRoutes,
      label: 'service-area hub',
      requiredPageType: 'CollectionPage',
      requiredPageId: `${baseUrl}/service-areas#webpage`,
      requiredVisibleRoutes: serviceAreasHubVisibleServiceRoutes,
      requiredVisibleAnchors: [
        ['Austin painting contractors', '/house-painters-austin'],
      ],
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
    const hasCanonicalHubServiceProviders = itemListHasCanonicalServiceProvider(itemList);

    if (response.status !== 200 || !itemList || !hasRequiredRoutes || !hasCanonicalHubServiceProviders) {
      fail(`${hub.route}: live ${hub.label} ItemList is missing priority local SEO links or canonical provider identity on Service entries.`);
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

    if (hub.requiredVisibleAnchors) {
      const missingVisibleAnchors = hub.requiredVisibleAnchors.filter(([text, route]) =>
        !htmlHasVisibleAnchor(html, text, route)
      );

      if (missingVisibleAnchors.length > 0) {
        fail(`${hub.route}: live ${hub.label} is missing visible local-intent anchor(s): ${missingVisibleAnchors.map(([text, route]) => `${text} -> ${route}`).join(', ')}.`);
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

async function checkCoreServiceLocalSignalDetails() {
  let passed = 0;

  for (const [route, expectedSignal] of coreServiceLocalDetailSignals) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const hasGuideClusterLinks = guideFaqSchemaRoutes.every(guideRoute => html.includes(`href="${guideRoute}"`));
    const hasLocalDetailSignals =
      html.includes('Austin Painting Service Area Details') &&
      html.includes('ZIP Codes We Serve') &&
      html.includes('Nearby Areas') &&
      html.includes('Services Commonly Requested Here') &&
      html.includes('78746') &&
      html.includes('West Lake Hills') &&
      html.includes(expectedSignal);

    if (response.status !== 200 || !hasLocalDetailSignals || !hasGuideClusterLinks) {
      fail(`${route}: live core service page is missing expanded Austin ZIP, nearby-area, service-specific local intent details, or Austin painting guide cluster links.`);
      continue;
    }

    passed++;
  }

  console.log(`Live core service local detail sections checked: ${passed}/${coreServiceLocalDetailSignals.size}`);
}

async function checkServiceAreaLocalSignalDetails() {
  let passed = 0;

  for (const [route, expected] of serviceAreaLocalSignalDetails) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const hasAustinHousePaintersHubLink =
      html.includes('href="/house-painters-austin"') &&
      html.includes('Compare Austin house painters');
    const hasLocalDetailSignals =
      html.includes('Local Service Area Details') &&
      html.includes('ZIP Codes We Serve') &&
      html.includes('Nearby Areas') &&
      html.includes('Services Commonly Requested Here') &&
      html.includes(expected.zip) &&
      html.includes(expected.nearby) &&
      html.includes(expected.service);

    if (response.status !== 200 || !hasLocalDetailSignals || !hasAustinHousePaintersHubLink) {
      fail(`${route}: live service-area page is missing expanded ZIP, nearby-area, service-specific local intent details, or the Austin house-painters comparison hub link.`);
      continue;
    }

    passed++;
  }

  console.log(`Live service-area local detail sections checked: ${passed}/${serviceAreaLocalSignalDetails.size}`);
}

async function checkCoreServiceSchemaIntentSignals() {
  let passed = 0;

  for (const [route, expectedSignal] of coreServiceLocalDetailSignals) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const serviceId = `${baseUrl}${route}#service`;
    const serviceSchemas = scripts.filter(item => schemaTypeIncludes(item, 'Service') && item?.['@id'] === serviceId);
    const hasLocalIntentSignals = serviceSchemas.some(schema => {
      const alternateNames = asArray(schema.alternateName);
      const keywords = asArray(schema.keywords);
      const serviceOutput = String(schema.serviceOutput || '');

      return (
        [expectedSignal, 'Austin house painters', 'painting contractors Austin'].every(signal =>
          alternateNames.includes(signal) && keywords.includes(signal)
        ) &&
        serviceOutput.includes(expectedSignal) &&
        serviceOutput.includes('Greater Austin') &&
        hasPaintingEstimateAction(schema) &&
        hasCanonicalServiceProvider(schema)
      );
    });

    if (response.status !== 200 || !hasLocalIntentSignals) {
      fail(`${route}: live core service Service schema is missing local alternateName, keywords, serviceOutput, estimate action, or canonical provider signals.`);
      continue;
    }

    passed++;
  }

  console.log(`Live core service schema intent signals checked: ${passed}/${coreServiceLocalDetailSignals.size}`);
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

async function checkLocalServiceFaqSchemaRoutes(routes, routeType) {
  let passed = 0;

  for (const { route, label, localTerm, serviceTerm } of routes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const faqSchema = scripts.find(item => schemaTypeIncludes(item, 'FAQPage'));
    const questions = Array.isArray(faqSchema?.mainEntity) ? faqSchema.mainEntity : [];
    const validQuestions = questions.filter(item =>
      schemaTypeIncludes(item, 'Question') &&
      item.name &&
      schemaTypeIncludes(item.acceptedAnswer, 'Answer') &&
      item.acceptedAnswer?.text
    );
    const combinedText = validQuestions
      .map(item => `${item.name} ${item.acceptedAnswer?.text || ''}`)
      .join(' ')
      .toLowerCase();

    if (
      response.status !== 200 ||
      !faqSchema ||
      validQuestions.length < 5 ||
      !combinedText.includes(localTerm.toLowerCase()) ||
      !combinedText.includes(serviceTerm.toLowerCase())
    ) {
      fail(`${route}: live ${routeType} ${label} FAQPage schema is missing 5+ valid local service Q/A entries.`);
      continue;
    }

    passed += 1;
  }

  return passed;
}

async function checkCoreServiceFaqSchema() {
  const passed = await checkLocalServiceFaqSchemaRoutes(coreServiceFaqSchemaRoutes, 'core service');

  console.log(`Live core service FAQ schema pages checked: ${passed}/${coreServiceFaqSchemaRoutes.length}`);
}

async function checkAustinServiceFaqSchema() {
  const passed = await checkLocalServiceFaqSchemaRoutes(austinServiceFaqSchemaRoutes, 'priority');

  console.log(`Live Austin service FAQ schema pages checked: ${passed}/${austinServiceFaqSchemaRoutes.length}`);
}

async function checkGuideFaqSchema() {
  const passed = await checkFaqSchemaRoutes(guideFaqSchemaRoutes, 'guide');

  console.log(`Live guide FAQ schema pages checked: ${passed}/${guideFaqSchemaRoutes.length}`);
}

async function checkGuidePriorityAustinServiceLinks() {
  let passed = 0;

  for (const route of guideFaqSchemaRoutes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const missingLinks = priorityAustinBlogServiceLinks.filter(([serviceRoute]) => !html.includes(`href="${serviceRoute}"`));

    if (response.status !== 200 || missingLinks.length > 0) {
      fail(`${route}: live guide page should visibly link to priority Austin service pages; missing ${missingLinks.map(([, name]) => name).join(', ') || 'none'}.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live guide priority Austin service links checked: ${passed}/${guideFaqSchemaRoutes.length}`);
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
    const crawlerMetaProblems = noindexCrawlerMetaProblems(html, expectedRobots);

    if (staleIdentitySignal) {
      noindexStaleIdentityProblems.push({ route, signal: staleIdentitySignal });
    }

    if (
      response.status !== 200 ||
      xRobotsTag.toLowerCase() !== expectedRobots ||
      canonicalHrefs.includes(`${baseUrl}/`) ||
      staleIdentitySignal ||
      crawlerMetaProblems.length > 0
    ) {
      fail(`${route}: expected live 200 with X-Robots-Tag "${expectedRobots}", no homepage canonical, no stale NAP/brand strings, and no crawler-specific index directives; found status ${response.status}, X-Robots-Tag "${xRobotsTag || '(missing)'}", canonicals ${canonicalHrefs.join(', ') || '(none)'}, stale identity ${staleIdentitySignal || 'none'}, crawler meta ${crawlerMetaProblems.join('; ') || 'ok'}`);
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
  const schemasWithImageIdentity = entitySchemas.filter(schema =>
    schema.logo?.['@type'] === 'ImageObject' &&
    schema.logo?.url === businessLogoUrl &&
    schema.logo?.contentUrl === businessLogoUrl &&
    JSON.stringify(schema.image || []).includes(`${baseUrl}/#logo`)
  );
  const localBusinessSchema = entitySchemas.find(schema => schema?.['@id'] === `${baseUrl}/#localbusiness`);
  const localBusinessHasPrimaryImage = JSON.stringify(localBusinessSchema?.image || []).includes(businessPrimaryImageUrl);
  const homepageLinksCanonicalProfiles = canonicalSocialProfileUrls.every(profileUrl =>
    html.includes(`href="${profileUrl}"`)
  );

  if (response.status !== 200 || schemasWithIdentifier.length < 2 || schemasWithProfiles.length < 2 || schemasWithImageIdentity.length < 2 || !localBusinessHasPrimaryImage || !homepageLinksCanonicalProfiles) {
    fail('/: live Organization and LocalBusiness schema should include kgmid, canonical logo/image identity, sameAs social/GBP profiles, and homepage links to canonical social profiles.');
    return;
  }

  console.log('Live Google entity identifier: Organization and LocalBusiness both include kgmid, canonical logo/image identity, and sameAs profiles');
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

async function checkAboutPageSchema() {
  const route = '/about';
  const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
  const scripts = parseJsonLd(html, route);
  const aboutPageSchema = scripts.find(item =>
    schemaTypeIncludes(item, 'AboutPage') &&
    item?.['@id'] === `${baseUrl}${route}#aboutpage`
  );
  const relatedLinks = asArray(aboutPageSchema?.relatedLink);
  const mentionsText = JSON.stringify(aboutPageSchema?.mentions || []);
  const requiredRelatedLinks = [
    `${baseUrl}/services`,
    `${baseUrl}/service-areas/austin`,
    `${baseUrl}/testimonials`,
    `${baseUrl}/gallery`,
    `${baseUrl}/free-estimate`,
  ];
  const hasRelatedLinks = requiredRelatedLinks.every(link => relatedLinks.includes(link));
  const hasBusinessEntity =
    aboutPageSchema?.about?.['@id'] === `${baseUrl}/#localbusiness` &&
    aboutPageSchema?.mainEntity?.['@id'] === `${baseUrl}/#localbusiness` &&
    aboutPageSchema?.publisher?.['@id'] === `${baseUrl}/#organization`;

  if (
    response.status !== 200 ||
    !aboutPageSchema ||
    aboutPageSchema.url !== `${baseUrl}${route}` ||
    !hasBusinessEntity ||
    !hasRelatedLinks ||
    !mentionsText.includes('Austin house painters') ||
    !mentionsText.includes('Austin commercial painting')
  ) {
    fail(`${route}: live AboutPage schema should connect the trust page to the canonical LocalBusiness, priority proof pages, and Austin painting topics.`);
    return;
  }

  console.log('Live AboutPage schema connects the trust page to canonical local-business identity');
}

async function checkMainFaqPage() {
  const route = '/faq';
  const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
  const scripts = parseJsonLd(html, route);
  const faqSchema = scripts.find(item => schemaTypeIncludes(item, 'FAQPage'));
  const questions = Array.isArray(faqSchema?.mainEntity) ? faqSchema.mainEntity : [];
  const faqText = questions
    .map(item => `${item?.name || ''} ${item?.acceptedAnswer?.text || ''}`)
    .join(' ');
  const requiredFaqSignals = [
    'Austin exterior painting',
    'Austin interior painters',
    'Austin cabinet painting',
    'Austin commercial painting',
    'Greater Austin communities',
    'written estimate',
  ];
  const requiredFaqLinks = [
    '/service-areas/austin',
    '/exterior-painting-austin',
    '/interior-painting-austin',
    '/cabinet-refinishing-austin',
    '/commercial-painting-austin',
  ];
  const hasRequiredSignals = requiredFaqSignals.every(signal => faqText.includes(signal));
  const hasRequiredLinks = requiredFaqLinks.every(link => html.includes(`href="${link}"`));

  if (response.status !== 200 || !faqSchema || questions.length < 18 || !hasRequiredSignals || !hasRequiredLinks) {
    fail(`${route}: live FAQ page should include expanded Austin service FAQ schema and priority Austin service links.`);
    return;
  }

  console.log('Live FAQ page includes expanded Austin service FAQ schema and priority service links');
}

async function checkFinancingPage() {
  const route = '/financing';
  const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
  const scripts = parseJsonLd(html, route);
  const faqSchema = scripts.find(item => schemaTypeIncludes(item, 'FAQPage'));
  const questions = Array.isArray(faqSchema?.mainEntity) ? faqSchema.mainEntity : [];
  const faqText = questions
    .map(item => `${item?.name || ''} ${item?.acceptedAnswer?.text || ''}`)
    .join(' ');
  const localBusinessSchema = scripts.find(item =>
    schemaTypeIncludes(item, 'LocalBusiness') &&
    schemaTypeIncludes(item, 'HousePainter') &&
    item?.['@id'] === `${baseUrl}/#localbusiness`
  );
  const requiredSignals = [
    'Austin exterior painting',
    'Austin interior painting',
    'cabinet painting',
    'commercial painting',
    'written painting estimate',
    'soft credit check',
  ];
  const requiredLinks = [
    '/exterior-painting-austin',
    '/interior-painting-austin',
    '/cabinet-refinishing-austin',
    '/commercial-painting-austin',
    '/pre-approval',
  ];
  const hasRequiredSignals = requiredSignals.every(signal => faqText.includes(signal) || html.includes(signal));
  const hasRequiredLinks = requiredLinks.every(link => html.includes(`href="${link}"`));

  if (response.status !== 200 || !faqSchema || questions.length < 6 || !localBusinessSchema || !hasRequiredSignals || !hasRequiredLinks) {
    fail(`${route}: live financing page should include local painting financing FAQ schema, LocalBusiness schema, and priority service links.`);
    return;
  }

  console.log('Live financing page includes local painting financing FAQ schema, LocalBusiness schema, and priority service links');
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
  const quoteActionTargets = asArray(quoteAction?.target);
  const quoteActionTargetUrls = quoteActionTargets.map(target => target?.urlTemplate).filter(Boolean);
  const hasQuoteAction =
    hasCanonicalProviderObject(quoteAction?.provider) &&
    quoteActionTargetUrls.includes(`${baseUrl}/contact`) &&
    quoteActionTargetUrls.includes(`${baseUrl}/free-estimate`) &&
    quoteActionTargets.every(target => schemaTypeIncludes(target, 'EntryPoint')) &&
    schemaTypeIncludes(quoteAction?.object, 'Service');
  const hasLocalBusiness = scripts.some(item =>
    schemaTypeIncludes(item, 'LocalBusiness') &&
    schemaTypeIncludes(item, 'HousePainter') &&
    item?.['@id'] === `${baseUrl}/#localbusiness`
  );

  if (response.status !== 200 || !hasRequiredSignals || !hasQuoteAction || !hasLocalBusiness) {
    fail(`${route}: live free estimate page should be indexable with estimate intent copy, service links, canonical QuoteAction provider, and LocalBusiness schema.`);
    return;
  }

  console.log('Live free estimate page includes estimate intent, service links, canonical QuoteAction provider, and LocalBusiness schema');
}

async function checkPaintingCostProviderSchema() {
  const routes = ['/', '/guides/painting-costs-austin'];
  const requiredCostProjectAnchors = [
    ['Austin house painters', '/house-painters-austin'],
    ['Austin exterior house painters', '/exterior-painting-austin'],
    ['Austin interior painters', '/interior-painting-austin'],
    ['Austin cabinet painting', '/cabinet-refinishing-austin'],
    ['Austin commercial painters', '/commercial-painting-austin'],
    ['Request a written estimate', '/free-estimate'],
  ];
  let passed = 0;

  for (const route of routes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const paintingCostServiceSchema = scripts.find(item =>
      schemaTypeIncludes(item, 'Service') &&
      item?.serviceType === 'House Painting Services'
    );
    const typicalHomeCostsSchema = scripts.find(item =>
      schemaTypeIncludes(item, 'ItemList') &&
      item?.name === 'Austin House Painting Costs by Size'
    );
    const costProjectPathSchema = scripts.find(item =>
      schemaTypeIncludes(item, 'ItemList') &&
      item?.['@id'] === `${baseUrl}/guides/painting-costs-austin#cost-project-paths`
    );
    const costProjectPathUrls = itemListUrls(costProjectPathSchema);
    const hasCostGuideProjectPaths = route !== '/guides/painting-costs-austin' || (
      html.includes('Match the Price Range to the Right Austin Painting Scope') &&
      requiredCostProjectAnchors.every(([text, path]) =>
        htmlHasVisibleAnchor(html, text, path) &&
        costProjectPathUrls.includes(`${baseUrl}${path}`)
      ) &&
      schemaTreeServicesHaveCanonicalProviders(costProjectPathSchema)
    );

    if (
      response.status !== 200 ||
      !paintingCostServiceSchema ||
      !schemaTreeServicesHaveCanonicalProviders(paintingCostServiceSchema) ||
      !typicalHomeCostsSchema ||
      !schemaTreeServicesHaveCanonicalProviders(typicalHomeCostsSchema) ||
      !hasCostGuideProjectPaths
    ) {
      fail(`${route}: live painting cost and typical home cost schemas must carry canonical LocalBusiness provider identity, and the Austin cost guide must visibly and structurally link to priority Austin project paths.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live painting cost provider schemas checked: ${passed}/${routes.length}`);
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
  const sitemapRoutes = sitemapResponse.status === 200
    ? [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map(match => routePathFromUrl(match[1]))
    : [];
  const missingRoutes = sitemapRoutes.filter(sitemapRoute => !hrefRoutes.has(sitemapRoute));
  const hasCorrectedBlogPath = sitemapRoutes.includes(correctedBlogPath) && hrefRoutes.has(correctedBlogPath);
  const hasTypoBlogPath =
    sitemapRoutes.includes(typoBlogPath) ||
    hrefRoutes.has(typoBlogPath) ||
    html.toLowerCase().includes('deterimine') ||
    sitemapXml.toLowerCase().includes('deterimine');

  if (response.status !== 200 || sitemapResponse.status !== 200 || sitemapRoutes.length < 183 || missingRoutes.length > 0 || !hasCorrectedBlogPath || hasTypoBlogPath) {
    fail(`${route}: live HTML sitemap should link to every XML sitemap URL; missing ${missingRoutes.join(', ') || 'none'}.`);
    return;
  }

  console.log(`Live HTML sitemap discovery links checked: ${sitemapRoutes.length}/${sitemapRoutes.length}`);
}

async function checkBlogPriorityAustinServiceLinks() {
  const { response: sitemapResponse, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml?v=${Date.now()}`);

  if (sitemapResponse.status !== 200) {
    fail('live sitemap could not be fetched for blog priority Austin service link validation.');
    return;
  }

  const blogRoutes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(match => routePathFromUrl(match[1]))
    .filter(route => route.startsWith('/blog/'));
  let passed = 0;

  for (const route of blogRoutes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const blogPostingSchema = scripts.find(item => schemaTypeIncludes(item, 'BlogPosting'));
    const blogSchemaText = JSON.stringify(blogPostingSchema || {});
    const missingVisibleLinks = priorityAustinBlogServiceLinks.filter(([serviceRoute]) => !html.includes(`href="${serviceRoute}"`));
    const missingSchemaLinks = priorityAustinBlogServiceLinks.filter(([serviceRoute, serviceName]) =>
      !blogSchemaText.includes(`${baseUrl}${serviceRoute}`) ||
      !blogSchemaText.includes(`${baseUrl}${serviceRoute}#service`) ||
      !blogSchemaText.includes(serviceName) ||
      !blogSchemaText.includes(`${baseUrl}/#localbusiness`)
    );

    if (response.status !== 200 || !blogPostingSchema || missingVisibleLinks.length > 0 || missingSchemaLinks.length > 0) {
      fail(`${route}: live blog article should visibly and structurally connect to priority Austin service pages; missing visible ${missingVisibleLinks.map(([, name]) => name).join(', ') || 'none'}, missing schema ${missingSchemaLinks.map(([, name]) => name).join(', ') || 'none'}.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live blog priority Austin service links checked: ${passed}/${blogRoutes.length}`);
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
    'itemprop="sameAs"',
    'itemprop="hasMap"',
    'itemprop="identifier"',
    'itemprop="propertyID"',
    'itemprop="value"',
    'kgmid',
    googleKnowledgeGraphId,
  ].every(signal => html.includes(signal));

  if (response.status !== 200 || reviewSchemaCount < 10 || !hasGoogleReviewsCta || !hasGoogleProfileLink || !hasReviewSignals) {
    fail('/testimonials: live page is missing real-review schema semantics or the Google reviews trust link.');
    return;
  }

  console.log(`Live testimonials trust signals checked: ${reviewSchemaCount} marked-up reviews with Google review link`);
}

async function checkPriorityServiceReviewContext() {
  let passed = 0;

  for (const [route, expectedServiceName] of priorityServiceReviewContextRoutes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const reviewSchemaCount = (html.match(/itemtype="https:\/\/schema\.org\/Review"/g) || []).length;
    const hasServiceReviewedItem =
      html.includes('itemprop="itemReviewed"') &&
      html.includes('itemtype="https://schema.org/Service"') &&
      html.includes(`itemid="${baseUrl}${route}"`) &&
      html.includes(expectedServiceName) &&
      html.includes('itemprop="provider"') &&
      html.includes(`itemid="${baseUrl}/#localbusiness"`) &&
      html.includes(googleBusinessProfileUrl) &&
      html.includes('itemprop="reviewBody"');

    if (response.status !== 200 || reviewSchemaCount < 3 || !hasServiceReviewedItem) {
      fail(`${route}: live priority service page is missing service-specific Review markup tied to the canonical LocalBusiness provider.`);
      continue;
    }

    passed++;
  }

  console.log(`Live priority service review context checked: ${passed}/${priorityServiceReviewContextRoutes.size}`);
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
await checkStalePublicSearchResultSamples();
await checkSupabaseFeed();
await checkAustinSchema();
await checkAustinServiceAreaSchema();
await checkLocalServiceAreaIntentSchema();
await checkAustinHousePaintersHubSchema();
await checkSitewidePriorityServiceNavigation();
await checkSitewideServiceLocationFooterAnchors();
await checkServiceLocationServiceSchema();
await checkServiceLocationLocalSignalDetails();
await checkHubItemListSchema();
await checkCoreServiceLocationGrids();
await checkCoreServiceSchemaIntentSignals();
await checkCoreServiceLocalSignalDetails();
await checkServiceAreaLocalSignalDetails();
await checkPrimaryServiceAreaHubLinks();
await checkPriorityLocalBusinessSchema();
await checkServiceAreaFaqSchema();
await checkCoreServiceFaqSchema();
await checkAustinServiceFaqSchema();
await checkGuideFaqSchema();
await checkGuidePriorityAustinServiceLinks();
await checkVisibleLocalTrustSections();
await checkCrawlerControlRoutes();
await checkGoogleEntityIdentifier();
await checkWebsiteSearchActionSchema();
await checkBreadcrumbSchema();
await checkAboutPageSchema();
await checkMainFaqPage();
await checkFinancingPage();
await checkContactPageSchema();
await checkFreeEstimatePage();
await checkPaintingCostProviderSchema();
await checkHtmlSitemapDiscoveryLinks();
await checkBlogPriorityAustinServiceLinks();
await checkTestimonialsTrustSignals();
await checkPriorityServiceReviewContext();

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
