#!/usr/bin/env node
import { resolve4, resolveCname, resolveNs } from 'dns/promises';

const baseUrl = 'https://www.hillcopaint.com';
const pagesProjectName = 'hillcosite';
const pagesTarget = 'hillcosite.pages.dev';
const accountId = '7b68f149b6054718ad2c6ff0634ae145';
const currentSupabaseUrl = 'https://ndggkorglcaznukkhapz.supabase.co';
const retiredSupabaseUrl = 'https://oyyfpkpzalhxztpcdjgq.supabase.co';
const googleBusinessProfileUrl = 'https://www.google.com/search?q=Hill+Country+Painting&kgmid=/g/11frssbq6p';
const googleKnowledgeGraphId = '/g/11frssbq6p';
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
const priorityLocalBusinessRoutes = [
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
  '/exterior-painting-austin',
  '/interior-painting-austin',
  '/cabinet-refinishing-austin',
  '/commercial-painting-austin',
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
const guideFaqSchemaRoutes = [
  '/guides/best-paint-texas-heat',
  '/guides/hoa-color-tips-austin',
  '/guides/how-often-paint-central-texas',
  '/guides/painting-costs-austin',
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
];
const crawlerEntityAssets = [
  '/robots.txt',
  '/llms.txt',
  '/llms-full.txt',
  '/ai.txt',
  '/entity-facts.json',
  '/citation-facts.json',
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
      const parsed = JSON.parse(match[1]);
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
      const h1Count = [...html.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)].length;
      const xRobotsTag = page.headers.get('x-robots-tag') || '';
      const noindex = /noindex/i.test(robotsContent) || /noindex/i.test(xRobotsTag);
      const hasError = /Something went wrong|Post Not Found|404 Not Found/i.test(html);
      const heroHtml = firstHeroSectionHtml(html);
      const bannedHeroImage = bannedHeroBackgroundImages.find(image => heroHtml.includes(image));

      if (bannedHeroImage) {
        heroImageProblems.push({ url, image: bannedHeroImage });
      }

      for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
        const targetRoute = normalizeInternalRoute(match[1]);

        if (targetRoute && targetRoute !== route && sitemapRouteSet.has(targetRoute)) {
          inboundSources.get(targetRoute)?.add(route);
        }
      }

      if (page.status !== 200 || canonicalCount !== 1 || !canonicalMatchesSelf || robotsCount !== 1 || !robotsIndexable || h1Count !== 1 || noindex || hasError) {
        problems.push({
          url,
          status: page.status,
          canonicalCount,
          canonicalHrefs,
          canonicalMatchesSelf,
          robotsCount,
          robotsContents,
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
    fail(`${problem.url}: status ${problem.status}, canonicals ${problem.canonicalCount}, canonicalSelf ${problem.canonicalMatchesSelf}, robots ${problem.robotsCount}, H1s ${problem.h1Count}, noindex ${problem.noindex}, error ${problem.hasError}`);
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
}

function hasAllValues(values, expectedValues) {
  return expectedValues.every(value => values.includes(value));
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
      entityFacts.sitemapUrlCount !== 182
    ) {
      fail('/entity-facts.json: live entity facts are missing canonical identity, GBP/kgmid, Austin service counties, priority topics, or sitemap count.');
    }
  } catch {
    fail('/entity-facts.json: live entity facts are not valid JSON.');
  }

  try {
    const citationFacts = JSON.parse(assetText.get('/citation-facts.json') || '{}');
    const citationIdentity = citationFacts.canonicalIdentity || {};
    const citationTopics = asArray(citationIdentity.priorityLocalSearchTopics);
    const citationCounties = asArray(citationIdentity.serviceCounties);

    if (
      citationIdentity.name !== 'Hill Country Painting' ||
      citationIdentity.website !== baseUrl ||
      citationIdentity.telephone !== '(512) 240-2246' ||
      citationIdentity.serviceAreaBusiness !== true ||
      citationIdentity.googleKnowledgeGraphId !== googleKnowledgeGraphId ||
      citationIdentity.googleBusinessProfile !== googleBusinessProfileUrl ||
      !hasAllValues(citationTopics, priorityLocalSearchTopics) ||
      !hasAllValues(citationCounties, greaterAustinServiceCounties)
    ) {
      fail('/citation-facts.json: live citation facts are missing canonical identity, GBP/kgmid, service counties, or priority topics.');
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

    if (response.status !== 200 || !hasSignal) {
      fail(`${route}: live Service schema is missing the ${phrase} alternateName, keywords, or serviceOutput signal.`);
    } else {
      passed += 1;
    }
  }

  console.log(`Live Austin service schema pages checked: ${passed}/${austinServiceSignals.size}`);
}

async function checkPriorityLocalBusinessSchema() {
  let passed = 0;

  for (const route of priorityLocalBusinessRoutes) {
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

    if (!hasCanonicalGbp || !hasKgIdentifier || !hasCanonicalPhone || !hasCountySignals || !hasPriorityTopics) {
      fail(`${route}: live LocalBusiness schema is missing canonical GBP URL, kgmid, phone, county service areas, or priority local search topics.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live priority LocalBusiness schema pages checked: ${passed}/${priorityLocalBusinessRoutes.length}`);
}

async function checkServiceAreaFaqSchema() {
  const passed = await checkFaqSchemaRoutes(serviceAreaFaqSchemaRoutes, 'service-area');

  console.log(`Live service-area FAQ schema pages checked: ${passed}/${serviceAreaFaqSchemaRoutes.length}`);
}

async function checkGuideFaqSchema() {
  const passed = await checkFaqSchemaRoutes(guideFaqSchemaRoutes, 'guide');

  console.log(`Live guide FAQ schema pages checked: ${passed}/${guideFaqSchemaRoutes.length}`);
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

async function checkGoogleEntityIdentifier() {
  const { response, text: html } = await fetchText(`${baseUrl}/?v=${Date.now()}`);
  const scripts = parseJsonLd(html, '/');
  const entitySchemas = scripts.filter(item => item?.['@id'] === `${baseUrl}/#organization` || item?.['@id'] === `${baseUrl}/#localbusiness`);
  const schemasWithIdentifier = entitySchemas.filter(schema =>
    schema.identifier?.propertyID === 'kgmid' &&
    schema.identifier?.value === googleKnowledgeGraphId &&
    schema.identifier?.url === googleBusinessProfileUrl
  );

  if (response.status !== 200 || schemasWithIdentifier.length < 2) {
    fail('/: live Organization and LocalBusiness schema should both include the Google Knowledge Graph ID identifier.');
    return;
  }

  console.log('Live Google entity identifier: Organization and LocalBusiness both include kgmid');
}

await checkDns();
await checkPagesDomain();
await checkSitemapPages();
await checkCrawlerEntityAssets();
await checkLegacyRedirects();
await checkSupabaseFeed();
await checkAustinSchema();
await checkPriorityLocalBusinessSchema();
await checkServiceAreaFaqSchema();
await checkGuideFaqSchema();
await checkGoogleEntityIdentifier();

if (failures.length) {
  console.error('\nLive SEO verification FAILED:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('\nLive SEO verification PASSED.');
