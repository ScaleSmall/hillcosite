#!/usr/bin/env node
import { resolve4, resolveCname, resolveNs } from 'dns/promises';

const args = new Set(process.argv.slice(2));
const pageIndexingMode = args.has('--page-indexing');
const baseUrl = 'https://www.hillcopaint.com';
const pagesProjectName = 'hillcosite';
const pagesTarget = 'hillcosite.pages.dev';
const accountId = '7b68f149b6054718ad2c6ff0634ae145';
const currentSupabaseUrl = 'https://ndggkorglcaznukkhapz.supabase.co';
const retiredSupabaseUrl = 'https://oyyfpkpzalhxztpcdjgq.supabase.co';
const canonicalPhoneHref = 'tel:+15122402246';
const googleBusinessProfileUrl = 'https://www.google.com/search?q=Hill+Country+Painting&kgmid=/g/11frssbq6p';
const googleKnowledgeGraphId = '/g/11frssbq6p';
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
  'Austin interior painters',
  'Austin cabinet painting',
  'Austin commercial painters',
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
const liveLegacyRedirects = [
  ['/sitemap.php', '/sitemap.xml'],
  ['/service/residential-concrete-painting-round-rock', '/services/exterior-painting'],
  ['/service/residential-concrete-painting-round-rock/', '/services/exterior-painting'],
  ['/service/residential-concrete-painting', '/services/exterior-painting'],
  ['/residential-concrete-painting-round-rock', '/services/exterior-painting'],
  ['/residential-concrete-painting', '/services/exterior-painting'],
  ['/service/mobile-home-painting', '/services'],
  ['/service/garage-painting', '/services'],
  ['/service/townhouse-painting-round-rock', '/services'],
  ['/cabinet-refinishing', '/services/cabinet-refinishing'],
  ['/cabinet-refinishing-pflugerville', '/services/cabinet-refinishing'],
  ['/round-rock', '/service-areas/round-rock'],
  ['/round-rock-2', '/service-areas/round-rock'],
  ['/austin', '/service-areas/austin'],
  ['/service-area', '/service-areas'],
  ['/project', '/gallery'],
  ['/projects', '/gallery'],
  ['/commercial-tarrytown', '/commercial-painting-tarrytown'],
  ['/blog/when-to-repaint-a-home-in-austin-hill-country-painting', '/blog'],
  ['/guides/painting-costs-round-rock', '/guides/painting-costs-austin'],
  ['/areas/downtown-austin-luxury/old-west-austin', '/areas/downtown-austin-luxury/old-west-austin-central'],
  ['/service/definitely-not-a-real-painting-service-gsc-test', '/services'],
];
const crawlerEntityAssets = [
  '/robots.txt',
  '/llms.txt',
  '/llms-full.txt',
  '/ai.txt',
  '/entity-facts.json',
  '/citation-facts.json',
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

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
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
    const aRecords = await resolve4('www.hillcopaint.com').catch(() => []);
    fail(`www.hillcopaint.com should CNAME to ${pagesTarget}; current CNAME records: ${cnameRecords.join(', ') || 'none'}; A records: ${aRecords.join(', ') || 'none'}`);
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

  if (
    !robotsText.includes(`Sitemap: ${baseUrl}/sitemap.xml`) ||
    !robotsText.includes('User-agent: Googlebot') ||
    /^\s*Disallow:\s*\/\s*$/im.test(robotsText)
  ) {
    fail('/robots.txt: live robots file is missing the canonical sitemap, Googlebot access, or blocks the site.');
  }

  const llmsRequired = [
    '/llms-full.txt',
    '/entity-facts.json',
    '/citation-facts.json',
    'Austin house painters',
  ];

  if (!llmsRequired.every(value => llmsText.includes(value))) {
    fail('/llms.txt: live LLM manifest is missing full manifest, entity/citation facts, or Austin house painter positioning.');
  }

  const llmsFullRequired = [
    `${baseUrl}/`,
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/exterior-painting-austin`,
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

    if (
      entityFacts.name !== 'Hill Country Painting' ||
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
      entityFacts.sitemapUrlCount !== 182
    ) {
      fail('/entity-facts.json: live entity facts are missing canonical identity, GBP/kgmid, social profile sameAs links, Austin service counties, priority topics, aggregate rating, or sitemap count.');
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

    if (
      citationIdentity.name !== 'Hill Country Painting' ||
      citationIdentity.website !== baseUrl ||
      citationIdentity.telephone !== '(512) 240-2246' ||
      citationIdentity.serviceAreaBusiness !== true ||
      citationIdentity.googleKnowledgeGraphId !== googleKnowledgeGraphId ||
      citationIdentity.googleBusinessProfile !== googleBusinessProfileUrl ||
      !sameAs.includes(googleBusinessProfileUrl) ||
      !hasCanonicalSocialProfiles(sameAs) ||
      !hasValidAggregateRating(citationIdentity) ||
      !hasAllValues(citationTopics, priorityLocalSearchTopics) ||
      !hasAllValues(citationCounties, greaterAustinServiceCounties)
    ) {
      fail('/citation-facts.json: live citation facts are missing canonical identity, GBP/kgmid, social profile sameAs links, aggregate rating, service counties, or priority topics.');
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

    if (response.status !== 200 || !hasSignal || !hasServiceAreaCounties || !hasServiceEstimateAction || !hasServicePageConnection) {
      fail(`${route}: live Service schema is missing the ${phrase} alternateName, keywords, serviceOutput, county serviceArea, estimate QuoteAction, or WebPage connection signal.`);
    } else {
      passed += 1;
    }
  }

  console.log(`Live Austin service schema pages checked: ${passed}/${austinServiceSignals.size}`);
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

    passed += 1;
  }

  console.log(`Live hub ItemList schema pages checked: ${passed}/${hubs.length}`);
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
      schemaTypeIncludes(item, 'PaintingContractor') &&
      item?.['@id'] === `${baseUrl}/#localbusiness`
    );

    if (response.status !== 200 || !localBusinessSchema) {
      fail(`${route}: live LocalBusiness/PaintingContractor schema is missing.`);
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
    const hasCountySignals = greaterAustinServiceCounties.every(county =>
      localBusinessAreaNames.includes(county) &&
      localBusinessServiceAreaNames.includes(county)
    );
    const hasPriorityTopics = priorityLocalSearchTopics.every(topic => localBusinessKnowsAbout.includes(topic));
    const hasAggregateRating = hasValidAggregateRating(localBusinessSchema);
    const hasEstimateAction = hasPaintingEstimateAction(localBusinessSchema);

    if (!hasCanonicalGbp || !hasKgIdentifier || !hasCanonicalPhone || !hasCountySignals || !hasPriorityTopics || !hasAggregateRating || !hasEstimateAction) {
      fail(`${route}: live LocalBusiness schema is missing canonical GBP URL, kgmid, phone, county service areas, priority local search topics, aggregate rating, or estimate QuoteAction.`);
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
  const serviceLocationTrustRoutes = sitemapResponse.status === 200
    ? [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
        .map(match => routePathFromUrl(match[1]))
        .filter(routeIsServiceLocation)
    : [];

  if (sitemapResponse.status !== 200) {
    fail('live sitemap could not be fetched for service-location trust-section validation.');
  }

  const routes = [...new Set([...visibleLocalTrustRoutes, ...serviceLocationTrustRoutes])];
  let passed = 0;

  for (const route of routes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const hasGoogleProfileLink =
      html.includes(`href="${googleBusinessProfileUrl}"`) ||
      html.includes(`href="${googleBusinessProfileUrl.replace(/&/g, '&amp;')}"`);
    const hasCanonicalPhoneLink = html.includes(`href="${canonicalPhoneHref}"`);
    const hasMapSignal = html.includes('Hill Country Painting - Service Area Map');
    const hasVisibleGbpText = html.includes('View Hill Country Painting on Google');
    const hasServiceAreaText = html.includes('Serving Austin, TX and the Greater Austin area');

    if (response.status !== 200 || !hasGoogleProfileLink || !hasCanonicalPhoneLink || !hasMapSignal || !hasVisibleGbpText || !hasServiceAreaText) {
      fail(`${route}: live page is missing the visible NAP/map/Google Business Profile trust section.`);
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

  for (const [route, expectedRobots] of liveNoindexRoutes) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}${route.includes('?') ? '&' : '?'}v=${Date.now()}`);
    const xRobotsTag = response.headers.get('x-robots-tag') || '';
    const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gi)]
      .map(match => match[0])
      .filter(tag => (attrs(tag).rel || '').toLowerCase() === 'canonical');
    const canonicalHrefs = canonicalTags.map(tag => attrs(tag).href || '');

    if (
      response.status !== 200 ||
      xRobotsTag.toLowerCase() !== expectedRobots ||
      canonicalHrefs.includes(`${baseUrl}/`)
    ) {
      fail(`${route}: expected live 200 with X-Robots-Tag "${expectedRobots}" and no homepage canonical; found status ${response.status}, X-Robots-Tag "${xRobotsTag || '(missing)'}", canonicals ${canonicalHrefs.join(', ') || '(none)'}`);
      continue;
    }

    noindexPassed += 1;
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
      items.length < 2 ||
      !positionsAreSequential ||
      !hasHomeStart ||
      !hasCurrentLastItem
    ) {
      fail(`${route}: live BreadcrumbList schema should start at Home, use sequential positions, and leave the current page as the final item.`);
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
await checkSitemapPages();
await checkCrawlerEntityAssets();
await checkLegacyRedirects();
await checkSupabaseFeed();
await checkAustinSchema();
await checkHubItemListSchema();
await checkPriorityLocalBusinessSchema();
await checkServiceAreaFaqSchema();
await checkGuideFaqSchema();
await checkVisibleLocalTrustSections();
await checkCrawlerControlRoutes();
await checkGoogleEntityIdentifier();
await checkWebsiteSearchActionSchema();
await checkBreadcrumbSchema();
await checkContactPageSchema();
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
