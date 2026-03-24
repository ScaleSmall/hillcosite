import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, MapPin, Home } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';
import MiniFAQ from '../../components/sections/MiniFAQ';
import TestimonialsSection from '../../components/sections/TestimonialsSection';

const CedarPark = () => {
  const cedarParkFAQs = [
    {
      question: 'Do you serve all Cedar Park neighborhoods including Avery Ranch and Ranch at Brushy Creek?',
      answer: 'Yes — we work throughout Cedar Park including Avery Ranch, Ranch at Brushy Creek, Buttercup Creek, Lakeline, and Twin Creeks. We know the HOA requirements for these communities and regularly help homeowners navigate the color approval process.'
    },
    {
      question: 'What makes exterior painting in Cedar Park different from other areas?',
      answer: 'Cedar Park sits northwest of Austin with intense summer heat and significant UV exposure. Homes in Cedar Park face sun from multiple angles throughout the day, so we use premium UV-resistant exterior paints with higher opacity and heat-reflective properties for a longer-lasting finish.'
    },
    {
      question: 'Can you help with new construction paint upgrades in Cedar Park communities?',
      answer: 'Yes — new construction in Cedar Park often uses builder-grade paint that fades, scuffs, and shows wear quickly. We can upgrade interior and exterior paint to professional-grade products that look better immediately and hold up for years longer than the original coating.'
    },
    {
      question: 'Do you offer cabinet painting in Cedar Park?',
      answer: 'Cabinet refinishing is extremely popular in Cedar Park — it\'s the most cost-effective way to transform a kitchen. We use a spray-application process with multiple coats and light sanding between coats for a smooth, durable finish that rivals factory-painted cabinets.'
    }
  ];

  const testimonials = [
    {
      name: 'Tyler & Megan B.',
      location: 'Avery Ranch, Cedar Park',
      rating: 5,
      text: 'Used Hill Country Painting for our exterior in Avery Ranch. They helped us pick a color that HOA approved on the first submission and the paint job itself is flawless. Neighbors have asked us who we used. Will use them again.',
      initials: 'TB'
    },
    {
      name: 'Amanda S.',
      location: 'Ranch at Brushy Creek, Cedar Park',
      rating: 5,
      text: 'Interior repaint of our entire home including all trim and doors. The crew was professional, punctual, and incredibly detail-oriented. The quality of the work far exceeded our expectations. Highly recommended for any Cedar Park homeowner.',
      initials: 'AS'
    },
    {
      name: 'James & Carol F.',
      location: 'Twin Creeks, Cedar Park',
      rating: 5,
      text: 'Cabinet painting in our Twin Creeks kitchen. The transformation is unbelievable — our old oak cabinets now look like custom white cabinets from a high-end renovation. Best home investment we\'ve made. Thank you Hill Country Painting.',
      initials: 'JF'
    }
  ];

  const neighborhoods = [
    { name: 'Ranch at Brushy Creek', slug: 'ranch-at-brushy-creek' },
    { name: 'Buttercup Creek', slug: 'buttercup-creek' },
    { name: 'Lakeline', slug: 'lakeline' },
    { name: 'Avery Ranch', slug: 'avery-ranch' },
    { name: 'Twin Creeks', slug: 'twin-creeks' },
  ];

  return (
    <>
      <SEO
        title="Cedar Park TX Painting Services | Hill Country Painting | Avery Ranch & Ranch at Brushy Creek"
        description="Professional painting services in Cedar Park, TX. Expert interior and exterior painting for Avery Ranch, Ranch at Brushy Creek, Buttercup Creek, Lakeline, and Twin Creeks. HOA color compliance and quality finishes for Cedar Park homeowners."
        canonical="/service-areas/cedar-park"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Cedar Park', url: '/service-areas/cedar-park' }
        ]}
        service={{
          name: 'Cedar Park Texas Painting Services',
          description: 'Professional residential and commercial painting services throughout Cedar Park, Texas. Expert interior and exterior painting for Avery Ranch, Ranch at Brushy Creek, Buttercup Creek, Lakeline, and Twin Creeks. HOA color compliance for Cedar Park communities.',
          areaServed: ['Cedar Park', 'Avery Ranch', 'Ranch at Brushy Creek', 'Buttercup Creek', 'Lakeline', 'Twin Creeks', 'Leander', 'Round Rock']
        }}
        faq={cedarParkFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-home-exterior-painting.jpg"
            alt="Professional Cedar Park painting services for Avery Ranch and master-planned communities"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Cedar Park, TX',
              latitude: 30.5052,
              longitude: -97.8203,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" />
                Serving Cedar Park, TX — 78613
              </div>
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Cedar Park Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Professional interior and exterior painting for Cedar Park's thriving master-planned communities. HOA color compliance, new construction upgrades, and quality finishes built for Central Texas heat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  Request an Estimate
                </Link>
                <a href="tel:(512)240-2246" className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-colors duration-200 border border-white/40">
                  <Phone className="w-5 h-5 mr-2" />
                  (512) 240-2246
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsAndTrust />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
                Why Cedar Park Homeowners Choose Hill Country Painting
              </h2>
              <p className="text-lg text-brand-gray-600 mb-8 leading-body">
                Cedar Park has become one of Austin's most desirable suburbs with world-class master-planned communities like Avery Ranch, Twin Creeks, and Ranch at Brushy Creek. We understand what Cedar Park homeowners expect — high standards, HOA compliance, and quality that matches the neighborhood.
              </p>
              <div className="space-y-4">
                {[
                  'HOA color compliance for Avery Ranch, Twin Creeks, and all Cedar Park communities',
                  'UV-resistant exterior paints for Cedar Park\'s intense sun exposure',
                  'New construction upgrades far beyond builder-grade quality',
                  'Cabinet refinishing for kitchen and bathroom transformations',
                  'Flexible scheduling for Cedar Park\'s busy families',
                  'Clean workspace and full cleanup at the end of every day'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-azure flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-6">Cedar Park Neighborhoods We Serve</h3>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {neighborhoods.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/areas/cedar-park/${n.slug}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <Home className="w-5 h-5 text-brand-azure flex-shrink-0" />
                    <span className="font-medium text-brand-gray-800 group-hover:text-brand-azureDark transition-colors">{n.name}</span>
                    <span className="ml-auto text-brand-azure text-sm">→</span>
                  </Link>
                ))}
              </div>
              <Link to="/areas/cedar-park" className="btn-primary w-full text-center block">
                View All Cedar Park Neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Painting Services in Cedar Park"
        subtitle="Complete painting solutions for every Cedar Park home and community"
      />

      <TestimonialsSection
        title="What Cedar Park Homeowners Say"
        subtitle="Real feedback from Avery Ranch, Twin Creeks, and Cedar Park residents"
        testimonials={testimonials}
      />

      <MiniFAQ
        title="Cedar Park Painting Questions"
        faqs={cedarParkFAQs}
      />

      <CTABanner
        title="Ready to Transform Your Cedar Park Home?"
        subtitle="Request a consultation today — serving all Cedar Park communities including Avery Ranch and Ranch at Brushy Creek"
        primaryCTA={{ text: 'Request a Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/gallery' }}
      />
    </>
  );
};

export default CedarPark;
