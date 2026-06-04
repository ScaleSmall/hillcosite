import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, ClipboardCheck, Home, Paintbrush, Phone, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/sections/CTABanner';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import { businessConfig } from '../config/business';
import { greaterAustinServiceAreas } from '../config/localSeo';
import { canonicalBusinessProvider, siteBaseUrl } from '../lib/businessSchema';

const estimateSteps = [
  {
    icon: ClipboardCheck,
    title: 'Share the project',
    text: 'Tell us whether you need interior painting, exterior painting, cabinet refinishing, commercial painting, or a mixed scope.'
  },
  {
    icon: CalendarCheck,
    title: 'Schedule the visit',
    text: 'We review the space, timing, prep needs, surfaces, colors, and any HOA or access details that affect the quote.'
  },
  {
    icon: Paintbrush,
    title: 'Get a written estimate',
    text: 'You receive a clear painting estimate with scope, preparation, materials, timeline, and next steps for your Austin-area project.'
  }
];

const estimateServices = [
  { name: 'Exterior painting estimates', href: '/exterior-painting-austin' },
  { name: 'Interior painting estimates', href: '/interior-painting-austin' },
  { name: 'Cabinet painting estimates', href: '/cabinet-refinishing-austin' },
  { name: 'Commercial painting estimates', href: '/commercial-painting-austin' }
];

const faqs = [
  {
    question: 'Are Hill Country Painting estimates free?',
    answer: 'Yes. Hill Country Painting provides free painting estimates for Austin-area interior painting, exterior painting, cabinet painting, cabinet refinishing, and commercial painting projects.'
  },
  {
    question: 'What should I include when requesting a painting estimate?',
    answer: 'Include the project address, service type, rooms or exterior areas involved, approximate timing, and any color, repair, HOA, cabinet, or commercial scheduling details you already know.'
  },
  {
    question: 'How fast will Hill Country Painting respond?',
    answer: 'Hill Country Painting responds promptly during business hours and typically follows up within one business day to discuss the project and schedule the estimate visit.'
  },
  {
    question: 'Which Austin-area communities can request an estimate?',
    answer: 'Estimate requests are available across Austin and Greater Austin communities including West Lake Hills, Tarrytown, Northwest Hills, Lakeway, Bee Cave, Leander, Georgetown, Round Rock, Cedar Park, and North Austin.'
  }
];

const FreeEstimate = () => {
  const baseUrl = siteBaseUrl;
  const estimateAction = {
    '@context': 'https://schema.org',
    '@type': 'QuoteAction',
    '@id': `${baseUrl}/free-estimate#quoteaction`,
    name: 'Request a painting estimate',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/contact`,
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform'
      ]
    },
    provider: canonicalBusinessProvider,
    object: {
      '@type': 'Service',
      name: 'Painting estimate for Greater Austin homes and businesses',
      serviceType: 'Interior painting, exterior painting, cabinet painting, cabinet refinishing, and commercial painting',
      provider: canonicalBusinessProvider,
      areaServed: greaterAustinServiceAreas.map(area => ({
        '@type': 'Place',
        name: area
      }))
    }
  };

  return (
    <>
      <SEO
        title="Free Painting Estimate in Austin | Hill Country Painting"
        description="Request a free Austin painting estimate for exterior, interior, cabinet, and commercial painting. Clear written scopes, responsive scheduling, insured crew."
        canonical="/free-estimate"
        includeLocalBusiness={true}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Free Estimate', url: '/free-estimate' }
        ]}
        faq={faqs}
        additionalSchema={estimateAction}
      />

      <section className="relative overflow-hidden py-24 md:py-32 lg:py-36">
        <div className="absolute inset-0 z-0">
          <img
            src="/hill-country-painting-austin-homepage-hero.jpg"
            alt="Hill Country Painting Austin home ready for a professional painting estimate"
            className="h-full w-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-azure">
              Austin painting estimates
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Free Painting Estimate for Austin Homes and Businesses
            </h1>
            <p className="mb-8 text-lg leading-8 text-white md:text-xl">
              Request a clear written estimate for exterior painting, interior painting, cabinet refinishing, or commercial painting in Austin and the Greater Austin area.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand-azure px-7 py-4 font-semibold text-white transition-colors hover:bg-brand-azureDark focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
              >
                Start Estimate Request
              </Link>
              <a
                href={businessConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-4 font-semibold text-brand-azureDark transition-colors hover:bg-brand-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {businessConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <StatsAndTrust
        stats={[
          {
            icon: <ShieldCheck className="h-8 w-8 text-white" />,
            value: 'Insured',
            label: 'Painting Crew'
          },
          {
            icon: <ClipboardCheck className="h-8 w-8 text-white" />,
            value: 'Written',
            label: 'Estimate Scope'
          },
          {
            icon: <Home className="h-8 w-8 text-white" />,
            value: 'Austin',
            label: 'Service Area'
          },
          {
            icon: <Paintbrush className="h-8 w-8 text-white" />,
            value: '4',
            label: 'Core Services'
          }
        ]}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-gray-900">
              What Happens After You Request an Estimate
            </h2>
            <p className="text-lg text-brand-gray-600">
              The estimate process is built around clarity: project scope, preparation, materials, schedule, and the finish you want.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {estimateSteps.map((step) => (
              <div key={step.title} className="rounded-lg border border-brand-gray-200 bg-brand-gray-50 p-6">
                <step.icon className="mb-4 h-8 w-8 text-brand-azureDark" />
                <h3 className="mb-3 text-xl font-bold text-brand-gray-900">{step.title}</h3>
                <p className="text-brand-gray-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-brand-gray-900">
                Estimate Requests for the Painting Work People Search for Most
              </h2>
              <p className="mb-6 text-lg text-brand-gray-700">
                Hill Country Painting handles the main Austin painting services homeowners, property managers, and businesses ask for: durable exterior painting, clean interior repainting, cabinet refinishing, and commercial painting.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {estimateServices.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="rounded-lg border border-brand-gray-200 bg-white px-4 py-3 font-semibold text-brand-azureDark transition-colors hover:border-brand-azure hover:text-brand-azure"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-brand-gray-900">Helpful details to include</h3>
              <ul className="space-y-3 text-brand-gray-700">
                <li>Project address and city</li>
                <li>Interior, exterior, cabinet, or commercial scope</li>
                <li>Approximate timing or deadline</li>
                <li>Known repairs, color changes, HOA needs, or access notes</li>
                <li>Photos or measurements if you already have them</li>
              </ul>
              <Link to="/contact" className="btn-primary mt-6 inline-flex">
                Open Estimate Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-brand-gray-900">
            Free Estimate Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-brand-gray-200 p-6">
                <h3 className="mb-2 text-xl font-bold text-brand-gray-900">{faq.question}</h3>
                <p className="text-brand-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready for a Clear Painting Estimate?"
        subtitle="Tell us about your Austin-area project and we will help you plan the next step."
        primaryCTA={{
          text: 'Request Free Estimate',
          href: '/contact'
        }}
        secondaryCTA={{
          text: `Call ${businessConfig.phone}`,
          href: businessConfig.phoneHref
        }}
      />
    </>
  );
};

export default FreeEstimate;
