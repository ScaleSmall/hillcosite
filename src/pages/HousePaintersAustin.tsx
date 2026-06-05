import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home, MapPin, PaintBucket, Phone, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import ImageWithGeo from '../components/ImageWithGeo';
import MiniFAQ from '../components/sections/MiniFAQ';
import NAPMapSection from '../components/NAPMapSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTABanner from '../components/sections/CTABanner';
import { canonicalBusinessProvider, siteBaseUrl } from '../lib/businessSchema';

const serviceLinks = [
  {
    title: 'Austin Exterior House Painters',
    href: '/exterior-painting-austin',
    icon: Home,
    description: 'Exterior repaints built for Austin sun, siding, stucco, trim, repairs, access, and long-term curb appeal.',
    scope: 'Most complete exterior repaint projects land in the $7,000-$16,000+ range once prep, access, repairs, and coating needs are reviewed.'
  },
  {
    title: 'Austin Interior Painters',
    href: '/interior-painting-austin',
    icon: PaintBucket,
    description: 'Interior painting for walls, trim, ceilings, rooms, and whole-home repaints with careful protection and daily cleanup.',
    scope: 'Whole-home and multi-room interior projects commonly begin around $6,500, with prep, masking, protection, materials, and cleanup included in the estimate.'
  },
  {
    title: 'Austin Cabinet Painting',
    href: '/cabinet-refinishing-austin',
    icon: ShieldCheck,
    description: 'Kitchen, bath, island, and built-in cabinet painting with durable finish planning for daily use.',
    scope: 'Cabinet painting projects often begin around $6,250 and are measured by doors, drawers, boxes, finish complexity, and prep expectations.'
  },
  {
    title: 'Austin Commercial Painters',
    href: '/commercial-painting-austin',
    icon: Building2,
    description: 'Interior and exterior commercial painting for Austin offices, retail spaces, property managers, and tenant improvements.',
    scope: 'Commercial painting is typically planned from $7,500+ around square footage, access, scheduling, surfaces, and business disruption planning.'
  }
] as const;

const areaLinks = [
  { name: 'Tarrytown', href: '/areas/tarrytown/tarrytown' },
  { name: 'West Lake Hills', href: '/areas/west-lake-hills-and-rollingwood/west-lake-hills' },
  { name: 'Northwest Hills', href: '/areas/allandale-and-northwest-hills/northwest-hills' },
  { name: 'Barton Creek', href: '/areas/barton-creek' },
  { name: 'Rollingwood', href: '/areas/west-lake-hills-and-rollingwood/rollingwood' },
  { name: 'Downtown Austin', href: '/areas/downtown-austin-luxury' },
  { name: 'Zilker', href: '/areas/downtown-austin-luxury/zilker' },
  { name: 'Allandale', href: '/areas/allandale-and-northwest-hills/allandale' },
  { name: 'Circle C Ranch', href: '/areas/circle-c-ranch-and-southwest-austin/circle-c-ranch' },
  { name: 'Lakeway', href: '/areas/lakeway-bee-cave-and-lake-travis/lakeway' },
  { name: 'Bee Cave', href: '/areas/lakeway-bee-cave-and-lake-travis/bee-cave' },
  { name: 'North Austin', href: '/areas/north-austin' }
] as const;

const faqs = [
  {
    question: 'Who should I call for house painters in Austin?',
    answer: 'Hill Country Painting serves Austin homeowners, property managers, and businesses with exterior painting, interior painting, cabinet painting, and commercial painting. Start with the house-painters hub, then choose the project type that best matches your scope.'
  },
  {
    question: 'Do Austin house painters handle both interior and exterior work?',
    answer: 'Yes. Hill Country Painting handles complete Austin interior and exterior painting projects, including prep, masking, protection, premium coatings, cleanup, and a written estimate. Cabinet painting and commercial painting are also available.'
  },
  {
    question: 'How much do professional Austin house painters cost?',
    answer: 'Complete professional painting projects are quoted from the minimum project floor upward, with most Austin estimates landing above that once the service type is clear: interior projects often begin around $6,500+, exteriors around $7,000+, cabinets around $6,250+, and commercial projects around $7,500+.'
  },
  {
    question: 'What makes a good Austin house-painting estimate?',
    answer: 'A good estimate explains prep, repairs, products, masking, number of coats, cleanup, warranty, project timing, and what is excluded. Hill Country Painting provides a clear written scope before work begins.'
  },
  {
    question: 'Do you serve neighborhoods outside central Austin?',
    answer: 'Yes. Hill Country Painting serves Greater Austin, including West Lake Hills, Tarrytown, Northwest Hills, Lakeway, Bee Cave, Barton Creek, Rollingwood, Cedar Park, Round Rock, Georgetown, Leander, and nearby communities.'
  },
  {
    question: 'Can I compare exterior, interior, cabinet, and commercial painters from one page?',
    answer: 'Yes. This page links directly to the Austin exterior house painters, Austin interior painters, Austin cabinet painting, and Austin commercial painters pages so you can choose the right project path without guessing.'
  },
  {
    question: 'How should I compare house painters near me in Austin?',
    answer: 'When comparing house painters near me in Austin, look for a local company with a current Google Business Profile, strong review history, clear service-area coverage, insured crews, and written scopes that explain prep, products, protection, cleanup, and warranty. Hill Country Painting publishes local service pages, neighborhood coverage, reviews, map links, and full-scope estimate guidance so homeowners can compare fit before booking.'
  }
];

const testimonials = [
  {
    name: 'Jason Hartley',
    location: 'Austin',
    rating: 5,
    text: 'Hill Country Painting did an outstanding job. They painted 7 rooms, two staircases, the exterior stucco, and shutters. Everything looks clean and professional.',
    initials: 'JH'
  },
  {
    name: 'Patricia Perez',
    location: 'Austin',
    rating: 5,
    text: 'They are thorough and have great follow-up and follow through to make sure you are completely happy with the work. They are neat and clean and have good communication.',
    initials: 'PP'
  },
  {
    name: 'Arashk Shirazi',
    location: 'Austin',
    rating: 5,
    text: 'Josh was very professional, honest and informative about options and gave the best advice and recommendations. The crew were respectful and responsible about the quality of their work.',
    initials: 'AS'
  }
];

const HousePaintersAustin = () => {
  const baseUrl = siteBaseUrl;
  const serviceItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${baseUrl}/house-painters-austin#service-list`,
    name: 'Austin house painters by project type',
    itemListElement: serviceLinks.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${baseUrl}${service.href}`,
      item: {
        '@type': 'Service',
        '@id': `${baseUrl}${service.href}#service`,
        name: service.title,
        provider: canonicalBusinessProvider,
        areaServed: {
          '@type': 'City',
          name: 'Austin'
        }
      }
    }))
  };
  const areaItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${baseUrl}/house-painters-austin#austin-area-proof`,
    name: 'Greater Austin house-painter service area proof',
    about: canonicalBusinessProvider,
    itemListElement: areaLinks.map((area, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${area.name} house painters`,
      url: `${baseUrl}${area.href}`,
      item: {
        '@type': 'Place',
        name: area.name,
        url: `${baseUrl}${area.href}`,
        containedInPlace: {
          '@type': 'City',
          name: 'Austin'
        }
      }
    }))
  };

  return (
    <>
      <SEO
        title="Austin House Painters | Exterior, Interior, Cabinets, Commercial"
        description="Austin house painters for exterior, interior, cabinet, and commercial painting. Service-specific project ranges with prep, protection, cleanup, and written estimates."
        canonical="/house-painters-austin"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Austin House Painters', url: '/house-painters-austin' }
        ]}
        service={{
          name: 'Austin House Painters',
          description: 'Professional Austin house painters for complete exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in Greater Austin.',
          areaServed: [
            'Austin',
            'Downtown Austin',
            'Tarrytown',
            'West Lake Hills',
            'Northwest Hills',
            'Barton Creek',
            'Rollingwood',
            'Zilker',
            'Allandale',
            'Circle C Ranch',
            'Lakeway',
            'Bee Cave',
            'North Austin'
          ],
          alternateName: [
            'Austin house painters',
            'house painters Austin',
            'painting contractors Austin',
            'Austin painting contractors',
            'Austin residential painters',
            'Austin exterior house painters',
            'Austin interior painters',
            'Austin cabinet painting',
            'Austin commercial painters',
            'house painters near me Austin',
            'exterior painters near me Austin',
            'interior painters near me Austin',
            'cabinet painters near me Austin',
            'commercial painters near me Austin'
          ],
          keywords: [
            'Austin house painters',
            'house painters Austin',
            'painting contractors Austin',
            'Austin painting contractors',
            'Austin residential painters',
            'Austin exterior house painters',
            'Austin interior painters',
            'Austin cabinet painting',
            'Austin commercial painters',
            'house painters near me Austin',
            'exterior painters near me Austin',
            'interior painters near me Austin',
            'cabinet painters near me Austin',
            'commercial painters near me Austin',
            'Greater Austin painting contractor'
          ],
          serviceOutput: 'Austin house painters service for complete exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in Austin, TX'
        }}
        faq={faqs}
        includeLocalBusiness={true}
        additionalSchema={[serviceItemList, areaItemList]}
      />

      <section className="relative py-32 md:py-40 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-painting-austin-homepage-hero.jpg"
            alt="Austin house painters serving Greater Austin homes and businesses"
            className="w-full h-full object-cover object-[center_60%]"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Austin, TX',
              latitude: 30.2672,
              longitude: -97.7431,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-brand-azureDark">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Greater Austin painting contractor
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Austin House Painters for Projects Done Right
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
              Exterior, interior, cabinet, and commercial painting for Austin homes and businesses. Every estimate is built around prep, protection, premium materials, cleanup, and a clear written plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-estimate" className="inline-flex items-center justify-center rounded-lg bg-brand-azureDark px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-azure focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                Request a Written Estimate
              </Link>
              <a href="tel:+15122402246" className="inline-flex items-center justify-center rounded-lg bg-brand-azureDark px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-azure focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                (512) 240-2246
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Choose the Right Austin Painting Path
            </h2>
            <p className="text-xl text-brand-gray-600 leading-body">
              A good painting estimate depends on the type of project. Use these Austin service pages to compare prep, timing, access, protection, and finish expectations before requesting a consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {serviceLinks.map(({ title, href, icon: Icon, description, scope }) => (
              <Link
                key={href}
                to={href}
                className="rounded-lg border border-brand-gray-200 bg-white p-6 transition-colors hover:border-brand-azure hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
              >
                <Icon className="h-8 w-8 text-brand-azureDark mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3">{title}</h3>
                <p className="text-brand-gray-600 leading-body mb-4">{description}</p>
                <p className="text-sm text-brand-gray-500 leading-relaxed mb-5">{scope}</p>
                <span className="inline-flex items-center font-semibold text-brand-azureDark">
                  View service page
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-5">
                What Austin Homeowners Should Expect
              </h2>
              <p className="text-lg text-brand-gray-600 leading-body mb-6">
                The lowest estimate is rarely the strongest choice when the home needs real prep, protection, reliable scheduling, and a finish that survives Central Texas sun and daily use. Hill Country Painting plans each project around the finished result and the work required to get there.
              </p>
              <ul className="space-y-4">
                {[
                  'Written estimates that explain prep, coatings, protection, cleanup, and warranty expectations.',
                  'Project planning for Austin weather, HOA requirements, access, occupied homes, and business schedules.',
                  'Pricing is built around the real prep and protection the job needs, with service-specific ranges instead of one-size-fits-all numbers.',
                  'Internal paths to the Austin service page that matches your project type.'
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-brand-gray-700 leading-relaxed">
                    <ShieldCheck className="mt-1 h-5 w-5 flex-shrink-0 text-brand-azureDark" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-brand-gray-200 bg-white p-6">
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">
                Greater Austin Areas
              </h3>
              <p className="text-brand-gray-600 leading-body mb-5">
                Hill Country Painting serves Austin and nearby high-value neighborhoods from one consistent local painting process.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {areaLinks.map((area) => (
                  <Link
                    key={area.href}
                    to={area.href}
                    className="rounded-lg bg-brand-gray-50 px-3 py-2 text-sm font-semibold text-brand-gray-800 transition-colors hover:bg-white hover:text-brand-azureDark focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/service-areas/austin"
                className="mt-6 inline-flex items-center font-semibold text-brand-azureDark hover:text-brand-azure"
              >
                View the Austin service area
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection
        title="Austin Customer Feedback"
        subtitle="Real project feedback from local homeowners"
        testimonials={testimonials}
        structuredReviews={true}
        reviewedItem={{
          type: 'Service',
          name: 'Austin House Painters',
          url: '/house-painters-austin',
          serviceType: 'House painting services',
          areaServed: 'Austin, TX and the Greater Austin area'
        }}
      />

      <MiniFAQ title="Austin House Painters FAQ" faqs={faqs} surface="white" />

      <NAPMapSection />

      <CTABanner
        title="Ready to Price Your Austin Painting Project?"
        subtitle="Request a written estimate for exterior, interior, cabinet, or commercial painting."
        primaryCTA={{
          text: 'Request a Written Estimate',
          href: '/free-estimate'
        }}
        secondaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:+15122402246'
        }}
      />
    </>
  );
};

export default HousePaintersAustin;
