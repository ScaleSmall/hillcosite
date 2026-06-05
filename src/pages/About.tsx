import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SplitSection from '../components/sections/SplitSection';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import CTABanner from '../components/sections/CTABanner';
import { siteBaseUrl } from '../lib/businessSchema';

const About = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ];

  const aboutStats = [
    {
      icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">15</div>,
      value: "15+ Years",
      label: "Experience"
    },
    {
      icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">3k</div>,
      value: "3000+",
      label: "Projects Completed"
    },
    {
      icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">★</div>,
      value: "5-Star",
      label: "Reviews"
    },
    {
      icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">✓</div>,
      value: "Insured",
      label: "Austin Local"
    }
  ];
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${siteBaseUrl}/about#aboutpage`,
    url: `${siteBaseUrl}/about`,
    name: 'About Hill Country Painting',
    description: 'About Hill Country Painting, an insured Austin service-area painting contractor serving Greater Austin homes and businesses.',
    isPartOf: {
      '@id': `${siteBaseUrl}/#website`
    },
    about: {
      '@id': `${siteBaseUrl}/#localbusiness`
    },
    mainEntity: {
      '@id': `${siteBaseUrl}/#localbusiness`
    },
    publisher: {
      '@id': `${siteBaseUrl}/#organization`
    },
    primaryImageOfPage: {
      '@id': `${siteBaseUrl}/#logo`
    },
    relatedLink: [
      `${siteBaseUrl}/services`,
      `${siteBaseUrl}/service-areas/austin`,
      `${siteBaseUrl}/testimonials`,
      `${siteBaseUrl}/gallery`,
      `${siteBaseUrl}/free-estimate`
    ],
    mentions: [
      'Austin house painters',
      'Austin exterior painting',
      'Austin interior painting',
      'Austin cabinet painting',
      'Austin commercial painting',
      'Greater Austin service-area painting contractor'
    ]
  };

  return (
    <>
      <SEO
        title="About — Hill Country Painting"
        description="Austin painting pros. 15+ years experience. 3000+ projects completed. Insured crew with 2-year warranty. Clean prep, crisp lines, reliable schedules."
        canonical="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
        includeLocalBusiness={true}
        additionalSchema={aboutPageSchema}
      />

      {/* Hero */}
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 leading-heading">
              About Hill Country Painting
            </h1>
            <p className="text-xl text-brand-gray-600 leading-body">
              We provide residential and commercial painting services across Austin with consistent communication, thorough preparation, and respect for your schedule and space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Request a Consultation
              </Link>
              <Link to="/gallery" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern C: Story */}
      <SplitSection
        title="How We Work"
        description="Hill Country Painting was established to provide straightforward, professionally managed painting services to Austin homeowners and businesses. Over 15 years, we've built a process that removes uncertainty from painting projects—from initial consultation through final walkthrough."
        benefits={[
          { text: 'Austin-based with knowledge of local conditions and requirements' },
          { text: '15+ years serving Austin, TX' },
          { text: 'Fully insured crew trained in proper procedures' },
          { text: '2-year warranty covering workmanship' },
          { text: 'Clear written estimates with no hidden costs' },
          { text: 'Systematic approach to prep, application, and cleanup' }
        ]}
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Austin painting professionals - Hill Country Painting experienced crew at work"
      />

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-gray-900 mb-4">Local Austin Focus</h2>
              <p className="text-brand-gray-700 leading-relaxed">
                Our work is shaped by Central Texas weather, HOA expectations, mature landscaping, and the mix of historic, lake-area, and newer homes across Greater Austin.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-gray-900 mb-4">Clear Project Control</h2>
              <p className="text-brand-gray-700 leading-relaxed">
                Each estimate outlines prep, materials, access needs, scheduling, and cleanup so homeowners understand what is included before work begins.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-gray-900 mb-4">Built for Durability</h2>
              <p className="text-brand-gray-700 leading-relaxed">
                Interior, exterior, cabinet, and commercial projects are planned around surface condition first, because lasting paint depends on prep before color.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern A: Years/Projects Stats */}
      <StatsAndTrust stats={aboutStats} />

      {/* Pattern I: CTA Banner */}
      <CTABanner
        title="Ready to Discuss Your Project?"
        subtitle="We provide clear estimates and straightforward timelines for painting projects across Austin"
        primaryCTA={{
          text: 'Request a Consultation',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:+15122402246'
        }}
      />
    </>
  );
};

export default About;
