import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = resolve(__dirname, '../dist');

const routeMetadata = {
  '/': {
    title: 'Hill Country Painting — Professional Painting Contractors Austin',
    description: 'Expert Austin house painters. Interior, exterior, cabinet painting. 15+ years experience. Insured crew. 2-year warranty. Serving Austin metro.',
    h1: 'Austin House Painting Done Right',
    content: 'Professional interior, exterior, and cabinet refinishing in Austin. Clean prep, crisp lines, durable results. Insured, backed by a 2-year warranty.'
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
    description: 'Exterior painting Austin. Durable, weather-resistant finishes. Insured crew. 2-year warranty. Free estimates. Serving Austin metro areas.',
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
    content: 'Read real reviews from satisfied customers throughout the Austin metro area. See why homeowners trust Hill Country Painting.'
  },
  '/faq': {
    title: 'FAQ — Hill Country Painting',
    description: 'Answers to painting questions. Warranty info, service areas, timelines. Hill Country Painting FAQ for Austin homeowners. Get answers now.',
    h1: 'Frequently Asked Questions',
    content: 'Get answers to common questions about our painting services, warranty, process, and more. Expert guidance for your painting project.'
  },
  '/service-areas': {
    title: 'Service Areas — Hill Country Painting',
    description: 'Serving Round Rock, Georgetown, Cedar Park, Leander, Pflugerville. Austin painting contractors. See all service areas.',
    h1: 'Our Service Areas in Austin',
    content: 'Professional painting services throughout Austin and surrounding areas. See all the communities we serve.'
  },
  '/contact': {
    title: 'Contact Us — Hill Country Painting',
    description: 'Request free painting estimate. Austin painting contractors. Call (512) 240-2246 or fill out form. Fast response, detailed quotes.',
    h1: 'Get Your Free Painting Estimate',
    content: 'Contact Hill Country Painting for a free estimate on your painting project. Call us at (512) 240-2246 or fill out our simple form.'
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

function enhanceIndexHTML() {
  console.log('\nEnhancing HTML files with SEO content...\n');

  const baseHTML = readFileSync(resolve(distPath, 'index.html'), 'utf-8');

  let count = 0;

  for (const [route, metadata] of Object.entries(routeMetadata)) {
    const outputPath = route === '/'
      ? resolve(distPath, 'index.html')
      : resolve(distPath, route.slice(1), 'index.html');

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
