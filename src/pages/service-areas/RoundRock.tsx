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

const RoundRock = () => {
  const roundRockFAQs = [
    {
      question: 'Do you paint homes throughout Round Rock including Forest Creek and Mayfield Ranch?',
      answer: 'Yes — we work throughout Round Rock including Forest Creek, Mayfield Ranch, Brushy Creek, Round Rock Ranch, Vista Oaks, and surrounding neighborhoods. Round Rock is one of our most active service areas, and we understand the varied home styles and HOA requirements across the city.'
    },
    {
      question: 'How do you handle scheduling for busy Round Rock families?',
      answer: 'We understand that Round Rock families are busy — between work at Dell, Apple, or other nearby employers and active family schedules. We offer flexible scheduling including early start times and can often complete most projects within 1–3 days to minimize disruption to your household.'
    },
    {
      question: 'Do you offer exterior painting services suited to Round Rock\'s climate?',
      answer: 'Absolutely. Round Rock\'s hot summers and intense UV require exterior paints with high heat resistance. We use premium paints with UV inhibitors, apply proper primer systems, and ensure complete surface prep so the finish lasts for years rather than months.'
    },
    {
      question: 'Can you do cabinet painting in Round Rock kitchens?',
      answer: 'Yes — cabinet refinishing is one of our most popular services throughout Round Rock. We use a factory-applied process with spraying and light sanding between coats to achieve a smooth, durable finish that dramatically improves the look of your kitchen at a fraction of replacement cost.'
    }
  ];

  const testimonials = [
    {
      name: 'Chris & Amy W.',
      location: 'Forest Creek, Round Rock',
      rating: 5,
      text: 'Hill Country Painting did a full exterior repaint of our Forest Creek home. Excellent prep work — they caulked every gap and primed bare wood before painting. The finished result looks like a brand new house. Very pleased.',
      initials: 'CW'
    },
    {
      name: 'Michelle P.',
      location: 'Mayfield Ranch, Round Rock',
      rating: 5,
      text: 'We had our entire interior repainted including all the trim. The crew was professional, incredibly tidy, and the color advice they gave us was spot on. Our home feels completely transformed. Highly recommend to any Round Rock homeowner.',
      initials: 'MP'
    },
    {
      name: 'Kevin & Susan L.',
      location: 'Round Rock',
      rating: 5,
      text: 'Cabinet painting in our kitchen and bathrooms. The finish is smooth and durable — looks like professional cabinet doors from a store. Far better quality than other painters we\'ve used. This is our go-to painting company.',
      initials: 'KL'
    }
  ];

  const neighborhoods = [
    { name: 'Forest Creek', slug: 'forest-creek' },
    { name: 'Mayfield Ranch', slug: 'mayfield-ranch' },
    { name: 'Brushy Creek', slug: 'brushy-creek' },
    { name: 'Round Rock Ranch', slug: 'round-rock-ranch' },
    { name: 'Vista Oaks', slug: 'vista-oaks' },
  ];

  return (
    <>
      <SEO
        title="Round Rock TX Painting Services | Hill Country Painting | Forest Creek & Mayfield Ranch"
        description="Professional painting services in Round Rock, TX. Expert interior and exterior painting for Forest Creek, Mayfield Ranch, Brushy Creek, Round Rock Ranch, and Vista Oaks. Quality craftsmanship and reliable scheduling for Round Rock homeowners."
        canonical="/service-areas/round-rock"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Round Rock', url: '/service-areas/round-rock' }
        ]}
        service={{
          name: 'Round Rock Texas Painting Services',
          description: 'Professional residential and commercial painting services throughout Round Rock, Texas. Expert interior and exterior painting for Forest Creek, Mayfield Ranch, Brushy Creek, Round Rock Ranch, Vista Oaks, and surrounding communities.',
          areaServed: ['Round Rock', 'Forest Creek', 'Mayfield Ranch', 'Brushy Creek', 'Round Rock Ranch', 'Vista Oaks', 'Georgetown', 'Cedar Park']
        }}
        faq={roundRockFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/classic-home-exterior.jpg"
            alt="Professional Round Rock painting services for Forest Creek and Mayfield Ranch homes"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Round Rock, TX',
              latitude: 30.5083,
              longitude: -97.6789,
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
                Serving Round Rock, TX — 78664, 78665 & 78681
              </div>
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Round Rock Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Professional interior and exterior painting throughout Round Rock's neighborhoods. Reliable scheduling, quality finishes, and expert craftsmanship for every home from Forest Creek to Mayfield Ranch.
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
                Why Round Rock Homeowners Choose Hill Country Painting
              </h2>
              <p className="text-lg text-brand-gray-600 mb-8 leading-body">
                Round Rock has grown into one of Texas's most livable cities with a diverse mix of established neighborhoods and newer communities. We serve the full spectrum of Round Rock homes — from 1980s ranch homes in Vista Oaks to newer construction in Mayfield Ranch — with the same standard of quality.
              </p>
              <div className="space-y-4">
                {[
                  'Full service across all Round Rock zip codes (78664, 78665, 78681)',
                  'Flexible scheduling around tech and corporate work schedules',
                  'Thorough surface prep including caulking, patching, and priming',
                  'Heat-resistant exterior paints for Central Texas summers',
                  'Cabinet refinishing for kitchen and bathroom upgrades',
                  'Detailed color consultation to select the right palette'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-azure flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-6">Round Rock Neighborhoods We Serve</h3>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {neighborhoods.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/areas/round-rock/${n.slug}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <Home className="w-5 h-5 text-brand-azure flex-shrink-0" />
                    <span className="font-medium text-brand-gray-800 group-hover:text-brand-azureDark transition-colors">{n.name}</span>
                    <span className="ml-auto text-brand-azure text-sm">→</span>
                  </Link>
                ))}
              </div>
              <Link to="/areas/round-rock" className="btn-primary w-full text-center block">
                View All Round Rock Neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Painting Services in Round Rock"
        subtitle="Complete painting solutions for every Round Rock neighborhood"
      />

      <TestimonialsSection
        title="What Round Rock Homeowners Say"
        subtitle="Real feedback from Forest Creek, Mayfield Ranch, and Round Rock residents"
        testimonials={testimonials}
      />

      <MiniFAQ
        title="Round Rock Painting Questions"
        faqs={roundRockFAQs}
      />

      <CTABanner
        title="Ready to Refresh Your Round Rock Home?"
        subtitle="Request a consultation today — serving all of Round Rock including Forest Creek, Mayfield Ranch, and Brushy Creek"
        primaryCTA={{ text: 'Request a Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/gallery' }}
      />
    </>
  );
};

export default RoundRock;
