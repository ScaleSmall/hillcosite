import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = resolve(__dirname, '../dist');

function loadServiceAreas() {
  const configPath = resolve(__dirname, '../src/config/serviceAreaWhitelist.ts');
  const configContent = readFileSync(configPath, 'utf-8');
  const displayNameMatches = [...configContent.matchAll(/displayName:\s*['"]([^'"]+)['"]/g)];
  return displayNameMatches.map(match => match[1]);
}

function generateServiceAreasDescription() {
  const areas = loadServiceAreas();
  if (areas.length === 0) return 'Hill Country Painting serves the Greater Austin area.';
  const topAreas = areas.slice(0, 6);
  const areasList = topAreas.join(', ');
  return `Hill Country Painting serves ${areasList}, and surrounding areas. Professional painting services throughout Greater Austin Area.`;
}

const serviceAreasDescription = generateServiceAreasDescription();

const geoAreasMeta = [
  {
    name: 'Steiner Ranch',
    slug: 'steiner-ranch-78732',
    description: 'Expert painting services for Steiner Ranch\'s distinctive Hill Country homes. Clean prep. Crisp lines. Reliable schedules.',
    neighborhoods: [
      { name: 'Rob Roy', slug: 'rob-roy', description: 'Professional painting services for Rob Roy homes in the Steiner Ranch area.' },
      { name: 'Davenport Ranch', slug: 'davenport-ranch', description: 'Expert painting for Davenport Ranch homes in the 78732 Steiner Ranch corridor. Custom finishes for Hill Country architecture.' },
      { name: 'River Place', slug: 'river-place', description: 'Professional painting services for River Place community homes.' },
      { name: 'Barclay Place', slug: 'barclay-place', description: 'Trusted painting contractors serving Barclay Place neighborhoods.' },
      { name: 'Chaparral / Cliffside', slug: 'chaparral-cliffside', description: 'Specialized painting for Chaparral and Cliffside homes in Steiner Ranch.' }
    ]
  },
  {
    name: 'West Lake Hills & Rollingwood',
    slug: 'west-lake-hills-and-rollingwood',
    description: 'Professional painting services for West Lake Hills and Rollingwood properties. Expert craftsmanship for quality homes.',
    neighborhoods: [
      { name: 'Rollingwood', slug: 'rollingwood', description: 'Professional painting services for Rollingwood residences.' },
      { name: 'West Lake Hills', slug: 'west-lake-hills', description: 'Expert painting for West Lake Hills core area homes.' },
      { name: 'Spanish Oaks', slug: 'spanish-oaks', description: 'Professional painting services for Spanish Oaks estates.' },
      { name: 'Davenport Ranch', slug: 'davenport-ranch-west', description: 'Professional painting for Davenport Ranch West near 360 and Westlake.' },
      { name: 'Lake Austin Hills', slug: 'lake-austin-hills', description: 'Professional painting for Lake Austin Hills residences.' }
    ]
  },
  {
    name: 'Barton Creek',
    slug: 'barton-creek',
    description: 'Professional painting services for Barton Creek homes. Careful craftsmanship for quality properties.',
    neighborhoods: [
      { name: 'Barton Creek Country Club Estates', slug: 'barton-creek-country-club-estates', description: 'Professional painting for Barton Creek Country Club Estates homes.' },
      { name: 'Fazio Foothills / Cliffside', slug: 'fazio-foothills-cliffside', description: 'Professional painting services for Fazio Foothills and Cliffside properties.' },
      { name: "Spyglass / Barton's Bluff", slug: 'spyglass-bartons-bluff', description: "Expert painting for Spyglass and Barton's Bluff residences." },
      { name: 'Lake Austin West Estates', slug: 'lake-austin-west-estates', description: 'Professional painting services for Lake Austin West Estates.' },
      { name: 'Barton Creek West', slug: 'barton-creek-west', description: 'Professional painting for Barton Creek West homes.' }
    ]
  },
  {
    name: 'Tarrytown',
    slug: 'tarrytown',
    description: "Specialized painting for Tarrytown's historic homes. Honoring architectural heritage with careful techniques.",
    neighborhoods: [
      { name: 'Tarrytown', slug: 'tarrytown', description: 'Historic home painting in the heart of Tarrytown.' },
      { name: 'Old Enfield', slug: 'old-enfield', description: "Preservation painting for Old Enfield's historic homes along Enfield Road." },
      { name: 'Pemberton Heights', slug: 'pemberton-heights', description: 'Professional painting for Pemberton Heights homes north of 29th Street.' },
      { name: 'Bryker Woods', slug: 'bryker-woods', description: 'Professional painting for Bryker Woods family homes and bungalows.' },
      { name: 'Clarksville', slug: 'clarksville', description: "Historic preservation painting for Clarksville's cottages and bungalows." }
    ]
  },
  {
    name: 'Downtown Austin',
    slug: 'downtown-austin-luxury',
    description: 'Professional painting services for downtown residences. Urban expertise with precision scheduling.',
    neighborhoods: [
      { name: 'Downtown Core / 78701', slug: 'downtown-core-78701', description: 'High-rise and condo painting in downtown Austin core.' },
      { name: 'Rainey Street District', slug: 'rainey-street-district', description: 'Modern painting services for Rainey Street residences.' },
      { name: 'Old West Austin', slug: 'old-west-austin-central', description: 'Historic painting for central Old West Austin between downtown and MoPac.' },
      { name: 'Zilker', slug: 'zilker', description: 'Professional painting for Zilker area residences.' },
      { name: 'Clarksville West', slug: 'clarksville-west', description: 'Expert painting for western Clarksville homes bordering MoPac.' }
    ]
  },
  {
    name: 'Allandale / Northwest Hills',
    slug: 'allandale-and-northwest-hills',
    description: "Trusted painting services for Allandale and Northwest Hills' distinctive homes. Quality work in established neighborhoods.",
    neighborhoods: [
      { name: 'Allandale', slug: 'allandale', description: 'Quality painting services for Allandale homes.' },
      { name: 'Northwest Hills', slug: 'northwest-hills', description: 'Professional painting for Northwest Hills residences.' },
      { name: 'Crestview', slug: 'crestview', description: 'Expert painting for Crestview neighborhood homes.' },
      { name: 'Quail Creek', slug: 'quail-creek', description: 'Professional painting for Quail Creek area properties.' },
      { name: 'Triangle / North Lamar', slug: 'triangle-north-lamar', description: 'Modern painting services for Triangle and North Lamar areas.' }
    ]
  },
  {
    name: 'Lakeway / Bee Cave / Lake Travis',
    slug: 'lakeway-bee-cave-and-lake-travis',
    description: 'Professional painting for Lake Travis area homes. Specialized expertise for lakefront properties and Hill Country homes.',
    neighborhoods: [
      { name: 'Lakeway', slug: 'lakeway', description: 'Lakefront painting services for Lakeway residences.' },
      { name: 'Rough Hollow', slug: 'rough-hollow', description: 'Professional painting for Rough Hollow community homes.' },
      { name: 'The Peninsula at Rough Hollow', slug: 'the-peninsula-at-rough-hollow', description: 'Expert painting for The Peninsula at Rough Hollow homes.' },
      { name: 'Serenity Hills', slug: 'serenity-hills', description: 'Professional painting for Serenity Hills properties.' },
      { name: 'Bee Cave', slug: 'bee-cave', description: 'Quality painting services for Bee Cave area homes.' }
    ]
  },
  {
    name: 'Circle C Ranch / Southwest Austin',
    slug: 'circle-c-ranch-and-southwest-austin',
    description: 'Professional painting services for Circle C Ranch and Southwest Austin communities. Quality craftsmanship you can trust.',
    neighborhoods: [
      { name: 'Circle C Ranch', slug: 'circle-c-ranch', description: 'Professional painting for Circle C Ranch homes.' },
      { name: 'Grey Rock', slug: 'grey-rock', description: 'Quality painting services for Grey Rock neighborhood.' },
      { name: 'Lost Creek', slug: 'lost-creek', description: 'Expert painting for Lost Creek area residences.' },
      { name: 'Shady Hollow', slug: 'shady-hollow', description: 'Trusted painting contractors for Shady Hollow homes.' },
      { name: 'West Oak Hill', slug: 'west-oak-hill', description: 'Professional painting for West Oak Hill properties.' }
    ]
  },
  {
    name: 'Pemberton Heights / Old West Austin',
    slug: 'pemberton-heights-and-old-west-austin-historic-luxury',
    description: "Specialized services for Pemberton Heights and Old West Austin's historic homes. Preserving architectural heritage.",
    neighborhoods: [
      { name: 'Pemberton Heights South', slug: 'pemberton-heights-south', description: 'Professional painting for southern Pemberton Heights properties near Westover.' },
      { name: 'Old Enfield West', slug: 'old-enfield-west', description: 'Historic preservation for western Old Enfield homes near Windsor Road.' },
      { name: 'Bryker Woods West', slug: 'bryker-woods-west', description: 'Professional painting for western Bryker Woods homes near MoPac.' },
      { name: 'Clarksville Historic District', slug: 'clarksville-historic', description: 'Preservation-certified painting for Clarksville Historic District properties.' },
      { name: 'Old West Austin Historic', slug: 'old-west-austin-historic', description: "Professional preservation painting for Old West Austin's most significant historic properties." }
    ]
  }
];

function buildGeoRoutes() {
  const routes = {};
  for (const hub of geoAreasMeta) {
    routes[`/areas/${hub.slug}`] = {
      title: `Professional House Painting in ${hub.name} | Hill Country Painting`,
      description: `${hub.description} Interior & exterior painting, cabinet refinishing. Serving all ${hub.name} neighborhoods. Free consultations. 2-year warranty.`,
      h1: `Professional House Painting in ${hub.name}`,
      content: `Hill Country Painting provides professional painting services throughout ${hub.name}. Interior painting, exterior painting, and cabinet refinishing with a 2-year warranty.`
    };
    for (const n of hub.neighborhoods) {
      routes[`/areas/${hub.slug}/${n.slug}`] = {
        title: `Professional House Painting in ${n.name} | Hill Country Painting`,
        description: `${n.description} Part of ${hub.name} service area. Interior & exterior painting, cabinet refinishing. 2-year warranty.`,
        h1: `Professional House Painting in ${n.name}`,
        content: `Hill Country Painting provides professional painting services in ${n.name}, part of the ${hub.name} area. Interior, exterior, and cabinet refinishing with a 2-year warranty.`
      };
    }
  }
  return routes;
}

const routeMetadata = {
  '/': {
    title: 'Austin House Painters: Exterior, Interior, Cabinets | Commercial',
    description: 'Professional interior, exterior, cabinet, and commercial painting in Austin. Clean prep, crisp lines, durable results. Insured, backed by a 2-year warranty.',
    h1: 'Austin House Painting Done Right',
    content: 'Professional interior, exterior, cabinet, and commercial painting in Austin. Clean prep, crisp lines, durable results. Insured, backed by a 2-year warranty.'
  },
  '/about': {
    title: 'About Us — Hill Country Painting',
    description: 'Meet the Hill Country Painting team. 15+ years painting experience. Family-owned Austin painting contractors. Insured, professional crew.',
    h1: 'About Hill Country Painting',
    content: 'Family-owned painting company serving Austin since 2019. Professional interior painting, exterior painting, and cabinet refinishing services.'
  },
  '/services': {
    title: 'Painting Services — Hill Country Painting',
    description: 'Interior painting, exterior painting, cabinet refinishing, commercial painting. Austin painting contractors. Free estimates. 2-year warranty.',
    h1: 'Professional Painting Services',
    content: 'Complete painting solutions for Austin homes and businesses. Interior painting, exterior painting, cabinet refinishing, and commercial services.'
  },
  '/services/interior-painting': {
    title: 'Interior Painting — Hill Country Painting',
    description: 'Interior painting Austin. Whole home painting, room painting. Clean prep, smooth finishes. Insured crew. 2-year warranty. Free estimates.',
    h1: 'Interior House Painting Services in Austin',
    content: 'Transform your home with professional interior painting. Expert preparation, premium paints, and meticulous application for lasting results.'
  },
  '/services/exterior-painting': {
    title: 'Exterior Painting — Hill Country Painting',
    description: 'Exterior painting Austin. Durable, weather-resistant finishes. Insured crew. 2-year warranty. Free estimates. Serving Austin, TX.',
    h1: 'Exterior House Painters in Austin, TX',
    content: 'Protect and beautify your home with professional exterior painting. Weather-resistant finishes designed for Texas climate.'
  },
  '/services/cabinet-refinishing': {
    title: 'Cabinet Painting & Staining — Hill Country Painting',
    description: 'Kitchen cabinet painting and staining. Transform your kitchen affordably. Professional spray finishes. Austin cabinet refinishing experts.',
    h1: 'Cabinet Painting & Staining Services',
    content: 'Professional cabinet refinishing services in Austin. Transform your kitchen with expert painting and staining at a fraction of replacement cost.'
  },
  '/services/commercial': {
    title: 'Commercial Painting — Hill Country Painting',
    description: 'Commercial painting Austin. Office painting, retail painting. Flexible scheduling. Minimal disruption. Professional commercial painters.',
    h1: 'Commercial Painting Services in Austin',
    content: 'Professional commercial painting for offices, retail spaces, and businesses. Flexible scheduling and minimal disruption to your operations.'
  },
  '/gallery': {
    title: 'Project Gallery — Hill Country Painting',
    description: 'View our completed Austin painting projects. Interior painting photos, exterior painting photos. Real Austin homes transformed.',
    h1: 'Our Painting Projects',
    content: 'Browse our gallery of completed painting projects throughout the Austin area. See the quality of our work and attention to detail.'
  },
  '/testimonials': {
    title: 'Customer Reviews — Hill Country Painting',
    description: 'Real reviews from Austin homeowners. See why customers choose Hill Country Painting. 5-star painting contractor reviews.',
    h1: 'What Our Customers Say',
    content: 'Read real reviews from satisfied customers throughout Austin, TX. See why homeowners trust Hill Country Painting.'
  },
  '/faq': {
    title: 'FAQ — Hill Country Painting',
    description: 'Answers to painting questions. Warranty info, service areas, timelines. Hill Country Painting FAQ for Austin homeowners. Get answers now.',
    h1: 'Frequently Asked Questions',
    content: 'Get answers to common questions about our painting services, warranty, process, and more. Expert guidance for your painting project.'
  },
  '/service-areas': {
    title: 'Service Areas — Hill Country Painting',
    description: serviceAreasDescription,
    h1: 'Our Service Areas in Austin',
    content: 'Professional painting services throughout Austin and surrounding areas. See all the communities we serve.'
  },
  '/service-areas/austin': {
    title: 'Austin TX House Painters — Hill Country Painting',
    description: 'Professional house painting in Austin, TX. Interior painting, exterior painting, cabinet refinishing. Insured crew. Free estimates. 2-year warranty.',
    h1: 'Professional House Painters in Austin, TX',
    content: 'Hill Country Painting serves all of Austin, TX with professional interior, exterior, and cabinet refinishing services. Free consultations. 2-year warranty.'
  },
  '/service-areas/west-lake-hills': {
    title: 'West Lake Hills House Painters — Hill Country Painting',
    description: 'Professional house painting in West Lake Hills, TX. Expert interior & exterior painting for West Lake Hills homes. Free estimates. 2-year warranty.',
    h1: 'Professional House Painters in West Lake Hills',
    content: 'Hill Country Painting provides professional painting services throughout West Lake Hills. Interior painting, exterior painting, and cabinet refinishing.'
  },
  '/service-areas/tarrytown': {
    title: 'Tarrytown House Painters — Hill Country Painting',
    description: 'Professional house painting in Tarrytown, Austin TX. Historic home specialists. Interior & exterior painting. Free estimates. 2-year warranty.',
    h1: 'Professional House Painters in Tarrytown',
    content: 'Hill Country Painting specializes in painting Tarrytown\'s historic homes. Interior, exterior, and cabinet refinishing with a 2-year warranty.'
  },
  '/service-areas/northwest-hills': {
    title: 'Northwest Hills House Painters — Hill Country Painting',
    description: 'Professional house painting in Northwest Hills, Austin TX. Interior & exterior painting for established homes. Free estimates. 2-year warranty.',
    h1: 'Professional House Painters in Northwest Hills',
    content: 'Hill Country Painting provides expert painting services throughout Northwest Hills. Interior painting, exterior painting, and cabinet refinishing.'
  },
  '/service-areas/west-lake-highlands': {
    title: 'West Lake Highlands House Painters — Hill Country Painting',
    description: 'Professional house painting in Westlake Highlands, Austin TX. Expert interior & exterior painting. Free estimates. 2-year warranty.',
    h1: 'Professional House Painters in Westlake Highlands',
    content: 'Hill Country Painting serves Westlake Highlands with professional interior, exterior, and cabinet refinishing services. Free consultations. 2-year warranty.'
  },
  '/service-areas/lakeway': {
    title: 'Lakeway House Painters — Hill Country Painting',
    description: 'Professional house painting in Lakeway, TX. Lakefront home specialists. Interior & exterior painting. Free estimates. 2-year warranty.',
    h1: 'Professional House Painters in Lakeway',
    content: 'Hill Country Painting provides professional painting services throughout Lakeway. Interior painting, exterior painting, and cabinet refinishing with a 2-year warranty.'
  },
  '/contact': {
    title: 'Contact Us — Hill Country Painting',
    description: 'Request free painting estimate. Austin painting contractors. Call (512) 240-2246 or fill out form. Fast response, detailed quotes.',
    h1: 'Get Your Free Painting Estimate',
    content: 'Contact Hill Country Painting for a free estimate on your painting project. Call us at (512) 240-2246 or fill out our simple form.'
  },
  '/financing': {
    title: 'Painting Financing — Hill Country Painting',
    description: 'Finance your painting project. Up to 24 months interest-free financing available. Austin painting contractors with flexible payment options.',
    h1: 'Painting Financing Options',
    content: 'Hill Country Painting offers flexible financing options for your painting project. Up to 24 months interest-free available through Wisetack.'
  },
  '/color-consultation': {
    title: 'Color Consultation — Hill Country Painting',
    description: 'Professional paint color consultation in Austin TX. Expert color guidance for interior and exterior painting. Hill Country Painting color specialists.',
    h1: 'Professional Paint Color Consultation',
    content: 'Expert paint color consultation services in Austin. Our color specialists help you choose the perfect palette for your home interior or exterior.'
  },
  '/blog': {
    title: 'Painting Tips & Guides — Hill Country Painting',
    description: 'Austin painting tips, guides, and advice from Hill Country Painting professionals. Learn about paint selection, maintenance, and home improvement.',
    h1: 'Painting Tips & Professional Guides',
    content: 'Expert painting advice, tips, and guides from Hill Country Painting. Learn about paint selection, preparation, and home improvement projects.'
  },
  '/guides/painting-costs-austin': {
    title: 'Austin Painting Costs 2024 — Hill Country Painting',
    description: 'How much does house painting cost in Austin TX? Interior painting costs, exterior painting costs, cabinet refinishing prices. Honest Austin painting cost guide.',
    h1: 'Austin House Painting Costs Guide',
    content: 'Complete guide to painting costs in Austin TX. Interior painting, exterior painting, and cabinet refinishing pricing with transparent estimates.'
  },
  '/guides/best-paint-texas-heat': {
    title: 'Best Paint for Texas Heat — Hill Country Painting',
    description: 'Best exterior paint for Texas heat and humidity. Top paint brands and products for Austin homes. Professional recommendations from Hill Country Painting.',
    h1: 'Best Paint for Texas Heat and Climate',
    content: 'Expert guide to choosing the best paint for Texas heat, humidity, and sun exposure. Recommendations from professional Austin painters.'
  },
  '/guides/hoa-color-tips-austin': {
    title: 'HOA Paint Color Tips Austin — Hill Country Painting',
    description: 'Navigating HOA paint color requirements in Austin TX. Expert tips for HOA compliance, color selection, and approval process for your home.',
    h1: 'HOA Paint Color Tips for Austin Homeowners',
    content: 'Expert guidance on HOA paint color requirements in Austin neighborhoods. Tips for getting approval and choosing compliant colors for your home.'
  },
  '/guides/how-often-paint-central-texas': {
    title: 'How Often to Paint Your Home in Central Texas — Hill Country Painting',
    description: 'How often should you repaint your Austin home? Exterior painting frequency, interior painting schedule. Expert guidance for Central Texas homeowners.',
    h1: 'How Often to Paint Your Central Texas Home',
    content: 'Expert guide on painting frequency for Central Texas homes. Learn how Texas climate affects how often you need to repaint interior and exterior surfaces.'
  },
  '/interior-painting-tarrytown': {
    title: 'Interior Painting Tarrytown — Hill Country Painting',
    description: 'Professional interior painting in Tarrytown, Austin TX. Expert painters for Tarrytown homes. Free estimates. Insured crew. 2-year warranty.',
    h1: 'Interior Painting in Tarrytown',
    content: 'Professional interior painting services for Tarrytown homes. Expert color consultation, thorough preparation, and premium finishes with a 2-year warranty.'
  },
  '/interior-painting-northwest-hills': {
    title: 'Interior Painting Northwest Hills — Hill Country Painting',
    description: 'Professional interior painting in Northwest Hills, Austin TX. Expert painters for Northwest Hills homes. Free estimates. Insured crew. 2-year warranty.',
    h1: 'Interior Painting in Northwest Hills',
    content: 'Professional interior painting services for Northwest Hills homes. Expert color consultation, thorough preparation, and premium finishes.'
  },
  '/interior-painting-west-lake-highlands': {
    title: 'Interior Painting Westlake Highlands — Hill Country Painting',
    description: 'Professional interior painting in Westlake Highlands, Austin TX. Expert painters for Westlake Highlands homes. Free estimates. 2-year warranty.',
    h1: 'Interior Painting in Westlake Highlands',
    content: 'Professional interior painting services for Westlake Highlands homes. Expert color consultation, thorough preparation, and premium finishes.'
  },
  '/interior-painting-lakeway': {
    title: 'Interior Painting Lakeway — Hill Country Painting',
    description: 'Professional interior painting in Lakeway, TX. Expert painters for Lakeway homes. Free estimates. Insured crew. 2-year warranty.',
    h1: 'Interior Painting in Lakeway',
    content: 'Professional interior painting services for Lakeway homes. Expert color consultation, thorough preparation, and premium finishes with a 2-year warranty.'
  },
  '/exterior-painting-tarrytown': {
    title: 'Exterior Painting Tarrytown — Hill Country Painting',
    description: 'Professional exterior painting in Tarrytown, Austin TX. Historic home specialists. Durable finishes. Free estimates. Insured crew. 2-year warranty.',
    h1: 'Exterior Painting in Tarrytown',
    content: 'Professional exterior painting services for Tarrytown homes. Weather-resistant finishes, thorough surface preparation, and 2-year warranty.'
  },
  '/exterior-painting-northwest-hills': {
    title: 'Exterior Painting Northwest Hills — Hill Country Painting',
    description: 'Professional exterior painting in Northwest Hills, Austin TX. Durable, weather-resistant finishes. Free estimates. Insured crew. 2-year warranty.',
    h1: 'Exterior Painting in Northwest Hills',
    content: 'Professional exterior painting services for Northwest Hills homes. Weather-resistant finishes designed for Texas climate with a 2-year warranty.'
  },
  '/exterior-painting-west-lake-highlands': {
    title: 'Exterior Painting Westlake Highlands — Hill Country Painting',
    description: 'Professional exterior painting in Westlake Highlands, Austin TX. Durable finishes for quality homes. Free estimates. 2-year warranty.',
    h1: 'Exterior Painting in Westlake Highlands',
    content: 'Professional exterior painting services for Westlake Highlands homes. Weather-resistant finishes and thorough preparation with a 2-year warranty.'
  },
  '/exterior-painting-lakeway': {
    title: 'Exterior Painting Lakeway — Hill Country Painting',
    description: 'Professional exterior painting in Lakeway, TX. Lakefront home specialists. Weather-resistant finishes. Free estimates. 2-year warranty.',
    h1: 'Exterior Painting in Lakeway',
    content: 'Professional exterior painting services for Lakeway homes. Weather-resistant finishes suited for lakefront properties. 2-year warranty.'
  },
  '/cabinet-refinishing-tarrytown': {
    title: 'Cabinet Refinishing Tarrytown — Hill Country Painting',
    description: 'Professional cabinet painting in Tarrytown, Austin TX. Kitchen cabinet refinishing specialists. Free estimates. Insured crew. 2-year warranty.',
    h1: 'Cabinet Refinishing in Tarrytown',
    content: 'Professional cabinet refinishing services for Tarrytown kitchens. Expert painting and staining at a fraction of replacement cost.'
  },
  '/cabinet-refinishing-northwest-hills': {
    title: 'Cabinet Refinishing Northwest Hills — Hill Country Painting',
    description: 'Professional cabinet painting in Northwest Hills, Austin TX. Kitchen cabinet refinishing specialists. Free estimates. 2-year warranty.',
    h1: 'Cabinet Refinishing in Northwest Hills',
    content: 'Professional cabinet refinishing services for Northwest Hills kitchens. Expert painting and staining at a fraction of replacement cost.'
  },
  '/cabinet-refinishing-west-lake-highlands': {
    title: 'Cabinet Refinishing Westlake Highlands — Hill Country Painting',
    description: 'Professional cabinet painting in Westlake Highlands, Austin TX. Kitchen cabinet refinishing specialists. Free estimates. 2-year warranty.',
    h1: 'Cabinet Refinishing in Westlake Highlands',
    content: 'Professional cabinet refinishing services for Westlake Highlands kitchens. Expert painting and staining at a fraction of replacement cost.'
  },
  '/cabinet-refinishing-lakeway': {
    title: 'Cabinet Refinishing Lakeway — Hill Country Painting',
    description: 'Professional cabinet painting in Lakeway, TX. Kitchen cabinet refinishing specialists. Free estimates. Insured crew. 2-year warranty.',
    h1: 'Cabinet Refinishing in Lakeway',
    content: 'Professional cabinet refinishing services for Lakeway kitchens. Expert painting and staining at a fraction of replacement cost.'
  },
  '/commercial-painting-tarrytown': {
    title: 'Commercial Painting Tarrytown — Hill Country Painting',
    description: 'Professional commercial painting in Tarrytown, Austin TX. Office and retail painting. Flexible scheduling. Free estimates. Fully insured.',
    h1: 'Commercial Painting in Tarrytown',
    content: 'Professional commercial painting services for Tarrytown businesses. Offices, retail spaces, and commercial properties with flexible scheduling.'
  },
  '/commercial-painting-northwest-hills': {
    title: 'Commercial Painting Northwest Hills — Hill Country Painting',
    description: 'Professional commercial painting in Northwest Hills, Austin TX. Office and retail painting. Flexible scheduling. Free estimates. Fully insured.',
    h1: 'Commercial Painting in Northwest Hills',
    content: 'Professional commercial painting services for Northwest Hills businesses. Flexible scheduling and minimal disruption to operations.'
  },
  '/commercial-painting-west-lake-highlands': {
    title: 'Commercial Painting Westlake Highlands — Hill Country Painting',
    description: 'Professional commercial painting in Westlake Highlands, Austin TX. Office and retail painting. Flexible scheduling. Free estimates.',
    h1: 'Commercial Painting in Westlake Highlands',
    content: 'Professional commercial painting services for Westlake Highlands businesses. Flexible scheduling and minimal disruption to operations.'
  },
  '/commercial-painting-lakeway': {
    title: 'Commercial Painting Lakeway — Hill Country Painting',
    description: 'Professional commercial painting in Lakeway, TX. Office and retail painting. Flexible scheduling. Free estimates. Fully insured.',
    h1: 'Commercial Painting in Lakeway',
    content: 'Professional commercial painting services for Lakeway businesses. Offices, retail spaces, and commercial properties with flexible scheduling.'
  },
  '/privacy': {
    title: 'Privacy Policy — Hill Country Painting',
    description: 'Privacy Policy for HillCo Paint. How we collect, use, and protect your personal information. Compliant with Meta Ads, CCPA, GDPR requirements.',
    h1: 'Privacy Policy for HillCo Paint',
    content: 'Our commitment to protecting your privacy and personal information. Learn how we collect, use, and safeguard your data.'
  },
  '/terms': {
    title: 'Terms of Service — Hill Country Painting',
    description: 'Terms of Service for HillCo Paint website and services. User agreements, warranty information, liability terms.',
    h1: 'Terms of Service',
    content: 'Terms and conditions for using the Hill Country Painting website and services. Important information about warranties and agreements.'
  },
  '/do-not-sell': {
    title: 'Do Not Sell My Info — Hill Country Painting',
    description: 'California Consumer Privacy Act (CCPA) opt-out. Do not sell or share my personal information. Privacy rights request form.',
    h1: 'Do Not Sell or Share My Personal Information',
    content: 'Exercise your privacy rights under California Consumer Privacy Act and similar state laws. Opt out of data selling and sharing.'
  }
};

Object.assign(routeMetadata, buildGeoRoutes());

function enhanceIndexHTML() {
  console.log('\nEnhancing HTML files with SEO content...\n');

  const baseHTML = readFileSync(resolve(distPath, 'index.html'), 'utf-8');

  let count = 0;

  for (const [route, metadata] of Object.entries(routeMetadata)) {
    const outputPath = route === '/'
      ? resolve(distPath, 'index.html')
      : resolve(distPath, route.slice(1) + '.html');

    let html = baseHTML;

    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${metadata.title}</title>`
    );

    html = html.replace(
      /<meta name="description" content=".*?"/,
      `<meta name="description" content="${metadata.description}"`
    );

    html = html.replace(
      /<meta property="og:title" content=".*?"/,
      `<meta property="og:title" content="${metadata.title}"`
    );

    html = html.replace(
      /<meta property="og:description" content=".*?"/,
      `<meta property="og:description" content="${metadata.description}"`
    );

    html = html.replace(
      /<meta name="twitter:title" content=".*?"/,
      `<meta name="twitter:title" content="${metadata.title}"`
    );

    html = html.replace(
      /<meta name="twitter:description" content=".*?"/,
      `<meta name="twitter:description" content="${metadata.description}"`
    );

    const canonicalUrl = route === '/'
      ? 'https://www.hillcopaint.com/'
      : `https://www.hillcopaint.com${route}`;
    html = html.replace(
      /<link rel="canonical" href=".*?"/,
      `<link rel="canonical" href="${canonicalUrl}"`
    );

    const noscriptContent = `
      <noscript>
        <div style="font-family: system-ui, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem;">
          <h1 style="color: #0f172a; font-size: 2rem; margin-bottom: 1rem;">${metadata.h1}</h1>
          <p style="color: #475569; font-size: 1.125rem; line-height: 1.75;">${metadata.content}</p>
          <p style="color: #64748b; margin-top: 1rem;">
            <strong>Call us:</strong> (512) 240-2246 for professional painting services in Austin, TX.
          </p>
        </div>
      </noscript>`;

    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root"></div>${noscriptContent}`
    );

    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html, 'utf-8');

    count++;
    console.log(`✓ Enhanced: ${route}`);
  }

  console.log(`\n✓ Enhanced ${count} pages with SEO content\n`);
}

enhanceIndexHTML();
