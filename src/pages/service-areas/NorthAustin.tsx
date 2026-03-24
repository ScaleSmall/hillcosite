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

const NorthAustin = () => {
  const northAustinFAQs = [
    {
      question: 'Do you serve neighborhoods near The Domain and North Austin\'s tech corridor?',
      answer: 'Yes — we regularly paint homes, condos, and townhomes in The Domain area, Balcones, Milwood, Jollyville, and Anderson Mill. We understand the scheduling needs of tech-industry professionals and offer flexible booking to accommodate work-from-home situations and busy schedules.'
    },
    {
      question: 'Can you paint mid-century ranch homes in Balcones and Milwood?',
      answer: 'Mid-century modern and ranch-style homes are a specialty. North Austin has a rich concentration of 1960s–1980s ranch homes in neighborhoods like Balcones and Milwood, and we know how to prepare these older surfaces properly, match period-appropriate color palettes, and achieve clean results on homes with original texture and millwork.'
    },
    {
      question: 'Do you work on condos and townhomes in North Austin?',
      answer: 'Absolutely. We have experience painting condos near The Domain and newer townhome developments in North Austin. We work around HOA rules, building-access requirements, and neighbor considerations to complete condo projects with minimal disruption.'
    },
    {
      question: 'How do I get an estimate for my North Austin home?',
      answer: 'Contact us through our website or call (512) 240-2246. We offer free, no-obligation estimates throughout North Austin. We\'ll schedule a walkthrough at a time that works for you, typically within a few days of your request.'
    }
  ];

  const testimonials = [
    {
      name: 'Rachel & Dan M.',
      location: 'Balcones, North Austin',
      rating: 5,
      text: 'Our 1970s ranch home in Balcones hadn\'t been painted in over a decade. Hill Country Painting did extensive surface prep and the result is absolutely stunning. The whole house looks decades newer. Clean, professional, and thorough.',
      initials: 'RM'
    },
    {
      name: 'Alex T.',
      location: 'Near The Domain, Austin',
      rating: 5,
      text: 'Painted my condo near The Domain. They worked around my work-from-home schedule, kept the space incredibly clean throughout, and the finish on my walls and trim is flawless. Very professional team.',
      initials: 'AT'
    },
    {
      name: 'Priya & Sam K.',
      location: 'Jollyville, North Austin',
      rating: 5,
      text: 'Full interior repaint of our Jollyville home. The crew was respectful of our furniture and belongings, the color consultation was helpful, and the quality of the finished work exceeded what we paid for it. Excellent value.',
      initials: 'PK'
    }
  ];

  const neighborhoods = [
    { name: 'The Domain Area', slug: 'the-domain' },
    { name: 'Balcones', slug: 'balcones' },
    { name: 'Milwood', slug: 'milwood' },
    { name: 'Jollyville', slug: 'jollyville' },
    { name: 'Anderson Mill', slug: 'anderson-mill' },
  ];

  return (
    <>
      <SEO
        title="North Austin Painting Services | Hill Country Painting | Balcones, Milwood & The Domain"
        description="Professional painting services in North Austin, TX. Expert interior and exterior painting for The Domain area, Balcones, Milwood, Jollyville, and Anderson Mill. Flexible scheduling for tech-industry professionals and quality finishes for every North Austin home."
        canonical="/service-areas/north-austin"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'North Austin', url: '/service-areas/north-austin' }
        ]}
        service={{
          name: 'North Austin Painting Services',
          description: 'Professional residential and commercial painting services throughout North Austin, Texas. Expert interior and exterior painting for The Domain area, Balcones, Milwood, Jollyville, Anderson Mill, and surrounding neighborhoods. Flexible scheduling for Austin tech professionals.',
          areaServed: ['North Austin', 'The Domain', 'Balcones', 'Milwood', 'Jollyville', 'Anderson Mill', 'Cedar Park', 'Round Rock']
        }}
        faq={northAustinFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-painting-austin-interior-hero.jpg"
            alt="Professional North Austin painting services for Balcones, Milwood, and The Domain area"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'North Austin, TX',
              latitude: 30.4070,
              longitude: -97.7200,
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
                Serving North Austin, TX — 78750, 78758, 78727 & 78729
              </div>
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                North Austin Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Professional painting for North Austin's diverse neighborhoods — from mid-century ranch homes in Balcones to condos near The Domain. Flexible scheduling for Austin's tech community and quality craftsmanship for every home.
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
                Why North Austin Homeowners Choose Hill Country Painting
              </h2>
              <p className="text-lg text-brand-gray-600 mb-8 leading-body">
                North Austin is home to Austin's tech corridor — from Apple's campus to The Domain and beyond. The neighborhoods here range from mid-century ranch homes in Balcones and Milwood to newer condos and townhomes near The Domain. We serve them all with the same quality and professionalism.
              </p>
              <div className="space-y-4">
                {[
                  'Flexible scheduling for work-from-home and tech-schedule professionals',
                  'Mid-century modern expertise for Balcones and Milwood ranch homes',
                  'Condo and townhome painting with minimal disruption to neighbors',
                  'Low-VOC interior options for families with children or pets',
                  'Thorough prep work — caulking, patching, and priming before every coat',
                  'Same-day cleanup and careful furniture and floor protection'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-azure flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-6">North Austin Neighborhoods We Serve</h3>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {neighborhoods.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/areas/north-austin/${n.slug}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <Home className="w-5 h-5 text-brand-azure flex-shrink-0" />
                    <span className="font-medium text-brand-gray-800 group-hover:text-brand-azureDark transition-colors">{n.name}</span>
                    <span className="ml-auto text-brand-azure text-sm">→</span>
                  </Link>
                ))}
              </div>
              <Link to="/areas/north-austin" className="btn-primary w-full text-center block">
                View All North Austin Neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Painting Services in North Austin"
        subtitle="Complete painting solutions for every North Austin neighborhood"
      />

      <TestimonialsSection
        title="What North Austin Homeowners Say"
        subtitle="Real feedback from Balcones, Milwood, Jollyville, and Domain-area residents"
        testimonials={testimonials}
      />

      <MiniFAQ
        title="North Austin Painting Questions"
        faqs={northAustinFAQs}
      />

      <CTABanner
        title="Ready to Refresh Your North Austin Home?"
        subtitle="Request a consultation today — serving Balcones, Milwood, Jollyville, Anderson Mill, and The Domain area"
        primaryCTA={{ text: 'Request a Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/gallery' }}
      />
    </>
  );
};

export default NorthAustin;
