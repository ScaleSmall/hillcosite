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
      title: 'Exterior Assessment',
      description: 'We inspect all surfaces for damage, moisture issues, and areas requiring repair before painting begins.'
    },
    {
      number: 2,
      title: 'Color & Material Discussion',
      description: 'We review color options, HOA requirements if applicable, and recommend paints suited to Austin\'s climate.'
    },
    {
      number: 3,
      title: 'Surface Preparation',
      description: 'We pressure wash, scrape loose paint, sand rough areas, fill cracks, and prime bare wood or stucco as needed.'
    },
    {
      number: 4,
      title: 'Paint Application',
      description: 'We apply weather-resistant finish coats using spray or brush methods appropriate for each surface type.'
    },
    {
      number: 5,
      title: 'Trim & Detail Work',
      description: 'We complete all trim, fascia, and accent areas—ensuring clean lines and thorough coverage.'
    },
    {
      number: 6,
      title: 'Site Cleanup & Review',
      description: 'We remove all materials, clean the work area, and review the finished project with you before leaving.'
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
          areaServed: ['Austin', 'Lakeway', 'Bee Cave', 'Barton Creek', 'Allandale', 'Crestview', 'Rollingwood', 'West Lake Hills', 'Circle C Ranch', 'Northwest Hills', 'Tarrytown', 'Clarksville', 'Lake Travis', 'Steiner Ranch', 'Pemberton Heights', 'Westlake Highlands']
        }}
        faq={faqs}
        product={productData}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-home-exterior-painting.png"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Protection That Lasts Through Texas Weather
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Exterior painting designed for Austin's intense heat and UV exposure. Proper prep, climate-appropriate materials, and a process you can count on.
              </p>
              <div className="text-base text-white font-semibold drop-shadow">
                No shortcuts. No surprises. Just lasting protection for your home.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  Request a Consultation
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
                What You Don't Have to Worry About
              </h2>
              <div className="space-y-6 text-lg text-brand-gray-600">
                <p>
                  Exterior painting involves scaffolding, ladders, and pressure washing. Here's what we handle so you can relax:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Choosing the wrong paint</strong> — We select products specifically rated for Texas heat and UV exposure</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Landscaping damage</strong> — Shrubs, plants, and outdoor furniture are protected or relocated before work begins</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>HOA approval</strong> — We help you navigate color restrictions and provide documentation for architectural review</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Hidden damage</strong> — We identify and repair wood rot, damaged trim, and compromised surfaces during prep</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Weather delays</strong> — We monitor forecasts and adjust scheduling to avoid rain, extreme heat, or humidity issues</span>
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

      {/* Why This Matters */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 text-center">
            Why Proper Exterior Painting Matters
          </h2>
          <div className="space-y-4 text-lg text-brand-gray-600">
            <p>
              Your exterior paint is your home's primary defense against sun, rain, and temperature swings. When applied correctly with proper prep, it protects siding, trim, and wood from rot and weather damage for 7-10 years.
            </p>
            <p>
              Rushed prep leads to peeling within a year or two. Improper paint selection causes premature fading and chalking. Weather-inappropriate application timing results in poor adhesion and early failure.
            </p>
            <p>
              We don't paint in extreme heat, high humidity, or when rain is forecasted. We don't skip surface repairs or use interior-grade products outside. These decisions prevent callbacks and ensure your investment lasts.
            </p>
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
        image="/hill-country-home-exterior-painting.png"
        imageAlt="Hill Country Painting exterior work - Professional surface prep and application"
      />

      {/* What Makes This Experience Different */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
            What Makes This Experience Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Written Project Plans</h3>
              <p className="text-brand-gray-600">
                You'll receive a detailed timeline showing what gets painted each day, when we'll need access to different areas, and how we'll protect your property.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Daily Updates</h3>
              <p className="text-brand-gray-600">
                We communicate progress every day, notify you of any discovered issues before proceeding, and confirm weather-dependent scheduling adjustments.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Respectful Crews</h3>
              <p className="text-brand-gray-600">
                Our painters park considerately, respect neighbor boundaries, keep noise reasonable, and ask before accessing side yards or gated areas.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Clean Job Sites</h3>
              <p className="text-brand-gray-600">
                Equipment is staged neatly, drop cloths protect driveways and walkways, and we remove debris daily rather than leaving it until project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            href: '/guides/painting-costs-austin'
          }
        ]}
      />

      <ServiceLocationLinks service="exterior" />

      <CTABanner
        title="Let's Discuss Your Exterior Project"
        subtitle="We'll assess your surfaces, discuss your concerns, and provide straightforward recommendations."
        primaryCTA={{
          text: 'Request a Consultation',
          href: '/contact'
        }}
      />
    </>
  );
};

export default ExteriorPainting;
