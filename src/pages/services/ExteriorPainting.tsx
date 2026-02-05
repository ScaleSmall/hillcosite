import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import ProofPointsSection from '../../components/ProofPointsSection';
import QuickQuoteForm from '../../components/QuickQuoteForm';
import RelatedServices from '../../components/RelatedServices';
import ImageWithGeo from '../../components/ImageWithGeo';
import SplitSection from '../../components/sections/SplitSection';
import ProcessSection from '../../components/sections/ProcessSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';
import NAPMapSection from '../../components/NAPMapSection';
import LocalSignals from '../../components/LocalSignals';
import ServiceLocationLinks from '../../components/ServiceLocationLinks';
import { getServiceProduct } from '../../config/serviceProducts';

const ExteriorPainting = () => {
  const processSteps = [
    {
      number: 1,
      title: 'Property Assessment',
      description: 'Thorough evaluation of your exterior surfaces, including inspection for damage, moisture, and structural issues.'
    },
    {
      number: 2,
      title: 'Color Selection',
      description: 'Professional color consultation and material recommendations for Texas climate and HOA requirements.'
    },
    {
      number: 3,
      title: 'Surface Preparation',
      description: 'Power washing, scraping, sanding, caulking, and priming to ensure proper paint adhesion and longevity.'
    },
    {
      number: 4,
      title: 'Professional Application',
      description: 'Expert spray and brush application using premium weather-resistant paints designed for Texas heat.'
    },
    {
      number: 5,
      title: 'Detail Work',
      description: 'Precise trim work, fascia, and accent painting to complete your home\'s transformation.'
    },
    {
      number: 6,
      title: 'Final Inspection',
      description: 'Complete walkthrough and quality check to ensure exceptional results and your complete satisfaction.'
    }
  ];

  const testimonials = [
    {
      name: 'Jason Hartley',
      location: 'Austin',
      rating: 5,
      text: 'Hill Country Painting did an outstanding job. They painted 7 rooms (one with a two-story ceiling), two staircases, the exterior stucco, and shutters. Everything looks clean and professional. They showed up on time, worked hard, and paid close attention to detail.',
      initials: 'JH'
    },
    {
      name: 'Chris Morgan',
      location: 'Austin',
      rating: 5,
      text: 'Great attention to detail, good communication and follow up - Lalo\'s crew was exceptional! Highly recommend. The house looks FANTASTIC.',
      initials: 'CM'
    },
    {
      name: 'paul budreau',
      location: 'Austin',
      rating: 5,
      text: 'Hill Country Painting made my whole house beautiful, first I had them paint the outside house, they did such a excellent job at a good price that I had them also paint inside the house, which wasn\'t planed but I wanted to take advantage of their quality work.',
      initials: 'PB'
    }
  ];

  const faqs = [
    {
      question: 'How long does exterior painting take?',
      answer: 'Most exterior painting projects take 3-7 days depending on home size, weather, and scope of work. We provide a detailed timeline during your consultation.'
    },
    {
      question: 'What type of paint do you use for Texas weather?',
      answer: 'We use premium weather-resistant paints specifically formulated for Texas heat, UV exposure, and humidity. These paints are designed to last 7-10 years.'
    },
    {
      question: 'Do you handle HOA approvals?',
      answer: 'Yes, we help you select HOA-approved colors and can provide documentation for your architectural review board.'
    },
    {
      question: 'How much does exterior painting cost?',
      answer: 'Exterior painting typically ranges from $4,500-$12,000 depending on home size, paint quality, and prep work needed. We provide detailed estimates with transparent pricing.'
    },
    {
      question: 'When is the best time to paint exteriors in Texas?',
      answer: 'Spring and fall are ideal for exterior painting in Texas. We avoid extreme summer heat and winter cold for optimal paint application and curing.'
    },
    {
      question: 'Do you repair damaged siding or trim?',
      answer: 'Yes, we repair wood rot, damaged siding, and trim as part of our preparation process to ensure a quality, long-lasting finish.'
    }
  ];

  const productData = getServiceProduct('exterior-painting');

  return (
    <>
      <SEO
        title="Exterior Painting — Hill Country Painting"
        description="Expert exterior painting in Austin TX. Weather-resistant finishes for Texas climate. Professional prep, premium paints, 2-year warranty. Consultations available."
        canonical="/services/exterior-painting"
        pageType="service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Exterior Painting', url: '/services/exterior-painting' }
        ]}
        service={{
          name: 'Exterior Painting',
          description: 'Professional exterior painting services for homes and businesses in Austin, Texas.',
          areaServed: ['Round Rock', 'Georgetown', 'Cedar Park', 'Pflugerville', 'Leander', 'Austin']
        }}
        faq={faqs}
        product={productData}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-home-exterior-painting.jpg"
            alt="Hill Country Painting professional exterior painting project in Austin"
            className="w-full h-full object-cover"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </div>

        {/* Financing Badge - Bottom Left */}
        <div className="absolute bottom-8 left-8 z-20 hidden lg:flex flex-col items-center gap-2">
          <Link
            to="/financing"
            className="group block transition-transform duration-300"
          >
            <img
              src="/financing-24-month-interest-free-badge.png"
              alt="Up to 24 months interest-free financing available - Click for details"
              className="w-48 h-auto drop-shadow-2xl"
              width="192"
              height="192"
            />
          </Link>
          <Link
            to="/financing"
            className="text-white font-semibold text-sm underline decoration-2 underline-offset-2 hover:text-brand-azure transition-colors drop-shadow-lg"
          >
            Click to estimate financing
          </Link>
        </div>

        {/* Award Badge - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2">
          <div className="transition-transform duration-300">
            <img
              src="/winner_best_of_round_rock_2025_award.jpg"
              alt="Winner Best of Round Rock 2025 Award - Hill Country Painting"
              className="w-48 h-auto drop-shadow-2xl"
              width="192"
              height="192"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Exterior House Painters in Austin, TX
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Protect and beautify your Austin home with professional exterior painting. Weather-resistant finishes • HOA expertise • 100+ projects • 2-year warranty.
              </p>
              <div className="text-base text-white/90 font-medium drop-shadow">
                Texas heat specialist. Premium paints. Reliable results.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  Get Consultation
                </Link>
                <a href="tel:(512)240-2246" className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (512) 240-2246
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProofPointsSection surface="white" />

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
                Professional Exterior Painting in Austin
              </h2>
              <div className="space-y-6 text-lg text-brand-gray-600">
                <p>
                  Transform your home's curb appeal with professional exterior painting designed for Texas climate. Our experienced crew delivers exceptional preparation, premium materials, and flawless application.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full"></div>
                    <span>Weather-resistant paints</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full"></div>
                    <span>HOA color expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full"></div>
                    <span>Complete surface prep</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full"></div>
                    <span>7-10 year durability</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <QuickQuoteForm service="Exterior Painting" />
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title="Our Exterior Painting Process"
        subtitle="Professional approach for lasting exterior painting results"
        steps={processSteps}
      />

      <SplitSection
        title="Expert Exterior Painting Services"
        description="Our exterior painting services protect your home from Texas weather while enhancing its beauty and value."
        benefits={[
          { text: 'Complete surface preparation including power washing and repairs' },
          { text: 'Premium weather-resistant paints for Texas climate' },
          { text: 'HOA color consultation and approval assistance' },
          { text: 'Professional spray and brush application techniques' },
          { text: 'Detailed trim, fascia, and accent work' },
          { text: 'Fully insured with 2-year warranty on all work' }
        ]}
        image="/hill-country-home-exterior-painting.jpg"
        imageAlt="Hill Country Painting exterior work - Professional surface prep and application"
      />

      <TestimonialsSection
        title="What Our Exterior Painting Customers Say"
        testimonials={testimonials}
      />

      <NAPMapSection />

      <LocalSignals
        areaName="Austin"
        pageType="service"
      />

      <MiniFAQ
        title="Exterior Painting FAQ"
        faqs={faqs}
      />

      <RelatedServices
        title="Complete Home Painting Services"
        location="Austin"
        services={[
          {
            title: 'Interior Painting Austin',
            description: 'Transform your interior spaces with professional painting services.',
            href: '/services/interior-painting'
          },
          {
            title: 'Cabinet Painting Austin',
            description: 'Refresh your kitchen cabinets with professional painting.',
            href: '/services/cabinet-refinishing'
          },
          {
            title: 'Color Consultation Austin',
            description: 'Expert color consultation for exterior and interior projects.',
            href: '/color-consultation'
          },
          {
            title: 'Exterior Painting Cost Guide',
            description: 'Complete guide to exterior painting costs for Austin homes.',
            href: '/guides/painting-costs-round-rock'
          }
        ]}
      />

      <ServiceLocationLinks service="exterior" />

      <CTABanner
        title="Ready to Enhance Your Home's Exterior?"
        subtitle="Get a consultation for professional exterior painting in Austin"
        primaryCTA={{
          text: 'Get Consultation',
          href: '/contact'
        }}
      />
    </>
  );
};

export default ExteriorPainting;
