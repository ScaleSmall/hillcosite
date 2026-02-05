import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Building2, Clock, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import ProofPointsSection from '../../components/ProofPointsSection';
import QuickQuoteForm from '../../components/QuickQuoteForm';
import ImageWithGeo from '../../components/ImageWithGeo';
import RelatedServices from '../../components/RelatedServices';
import SplitSection from '../../components/sections/SplitSection';
import ProcessSection from '../../components/sections/ProcessSection';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';
import NAPMapSection from '../../components/NAPMapSection';
import LocalSignals from '../../components/LocalSignals';
import ServiceLocationLinks from '../../components/ServiceLocationLinks';
import { getServiceProduct } from '../../config/serviceProducts';

const CommercialPainting = () => {
  const processSteps = [
    {
      number: 1,
      title: 'Site Assessment',
      description: 'Comprehensive evaluation of your commercial property including scheduling requirements and safety protocols.'
    },
    {
      number: 2,
      title: 'Detailed Proposal',
      description: 'Complete scope of work, timeline, and pricing with minimal business disruption planning.'
    },
    {
      number: 3,
      title: 'Prep & Protection',
      description: 'Professional surface preparation with complete protection of furniture, equipment, and inventory.'
    },
    {
      number: 4,
      title: 'Professional Execution',
      description: 'Expert application by insured crew with flexible scheduling including evenings and weekends.'
    },
    {
      number: 5,
      title: 'Quality Control',
      description: 'Ongoing inspection throughout project to ensure consistent, professional results.'
    },
    {
      number: 6,
      title: 'Final Walkthrough',
      description: 'Complete inspection and approval before project closeout with warranty documentation.'
    }
  ];

  const testimonials = [
    {
      name: 'Jason Hartley',
      location: 'Austin',
      rating: 5,
      text: 'Hill Country Painting did an outstanding job. They showed up on time, worked hard, and paid close attention to detail. Everything looks clean and professional.'
    },
    {
      name: 'Arashk Shirazi',
      location: 'Austin',
      rating: 5,
      text: 'Josh was very professional, honest and informative about options and gave the best advice and recommendations. The crew were respectful and very responsible about the quality of their work.'
    },
    {
      name: 'Chris Morgan',
      location: 'Austin',
      rating: 5,
      text: 'Great attention to detail, good communication and follow up. The crew was exceptional! Highly recommend.'
    }
  ];

  const faqs = [
    {
      question: 'Can you work outside business hours?',
      answer: 'Yes, we offer flexible scheduling including evenings and weekends to minimize disruption to your business operations.'
    },
    {
      question: 'How long does commercial painting take?',
      answer: 'Project timelines vary based on size and scope. Most commercial projects are completed within 1-3 weeks with minimal business disruption.'
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, we are fully insured with commercial liability coverage to protect your business.'
    },
    {
      question: 'Do you offer warranties on commercial painting?',
      answer: 'Yes, we provide a 2-year warranty on all commercial painting work, covering both materials and workmanship.'
    },
    {
      question: 'What types of commercial properties do you paint?',
      answer: 'We paint all types of commercial properties including offices, retail stores, restaurants, medical facilities, warehouses, and multi-unit properties.'
    },
    {
      question: 'How much does commercial painting cost?',
      answer: 'Commercial painting costs vary based on square footage, surface type, and project scope. We provide detailed estimates with transparent pricing.'
    }
  ];

  const productData = getServiceProduct('commercial-painting');

  return (
    <>
      <SEO
        title="Commercial Painting — Hill Country Painting"
        description="Professional commercial painting in Austin TX. Offices, retail, restaurants. Fully insured. Flexible scheduling. Minimal disruption. Consultations available."
        canonical="/services/commercial"
        pageType="service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Commercial Painting', url: '/services/commercial' }
        ]}
        service={{
          name: 'Commercial Painting',
          description: 'Professional commercial painting services for businesses in Austin, Texas.',
          areaServed: ['Round Rock', 'Georgetown', 'Cedar Park', 'Pflugerville', 'Leander', 'Austin']
        }}
        faq={faqs}
        product={productData}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Commercial painting background"
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
                Professional Results Without Disrupting Business
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Commercial painting scheduled around your operations. Flexible hours, protected spaces, and a process designed to keep your business running.
              </p>
              <div className="text-base text-white font-semibold drop-shadow">
                No surprises. No extended closures. Just professional results on schedule.
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
                What You Don't Have to Worry About
              </h2>
              <div className="space-y-6 text-lg text-brand-gray-600">
                <p>
                  Commercial painting requires coordination, insurance, and minimal disruption. Here's what we handle:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Business closure</strong> — We work evenings, weekends, or section-by-section to keep your operation running</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Liability concerns</strong> — Full commercial insurance coverage protects your property and operations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Unpredictable timelines</strong> — Detailed scheduling and daily communication prevent unexpected delays</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Customer or employee complaints</strong> — Professional crews work quietly, park considerately, and respect your space</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Equipment and inventory damage</strong> — Thorough protection protocols safeguard your assets throughout the project</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <QuickQuoteForm service="Commercial Painting" />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 text-center">
            Why Proper Commercial Painting Matters
          </h2>
          <div className="space-y-4 text-lg text-brand-gray-600">
            <p>
              Your business appearance affects customer perception, employee morale, and property value. Faded, peeling, or inconsistent paint signals neglect and drives customers away.
            </p>
            <p>
              Commercial painting requires coordination with business operations, proper insurance coverage, and crews who understand professionalism. Scheduling mishaps, uninsured contractors, or disruptive work practices cost you revenue and reputation.
            </p>
            <p>
              We coordinate around your schedule, maintain insurance for your protection, and work efficiently to minimize business disruption. Clear communication prevents surprises and ensures your operation continues smoothly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Commercial Painting Advantages
            </h2>
            <p className="text-xl text-brand-gray-600">
              Why businesses choose Hill Country Painting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand-azureDark" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-brand-gray-600">
                Evening and weekend work available to minimize business disruption
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-azureDark" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Fully Insured</h3>
              <p className="text-brand-gray-600">
                Full commercial liability coverage for your peace of mind
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-brand-azureDark" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">All Property Types</h3>
              <p className="text-brand-gray-600">
                Offices, retail, restaurants, medical facilities, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title="Our Commercial Painting Process"
        subtitle="Professional approach for minimal business disruption"
        steps={processSteps}
      />

      {/* What Makes This Experience Different */}
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
            What Makes This Experience Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Written Project Plans</h3>
              <p className="text-brand-gray-600">
                Detailed timelines showing work hours, access requirements, and completion dates so you can plan business operations accordingly.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Daily Updates</h3>
              <p className="text-brand-gray-600">
                Regular communication with designated point of contact to review progress, address concerns, and confirm next-day scheduling.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Respectful Crews</h3>
              <p className="text-brand-gray-600">
                Professional painters who understand commercial environments—courteous to customers, discreet around employees, and respectful of your operations.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Clean Job Sites</h3>
              <p className="text-brand-gray-600">
                Equipment staged out of customer view, work areas contained and protected, and thorough cleanup after each session.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SplitSection
        title="Expert Commercial Painting Services"
        description="Our commercial painting services are designed to deliver exceptional results while minimizing disruption to your business operations."
        benefits={[
          { text: 'Flexible scheduling including evenings and weekends' },
          { text: 'Fully insured with commercial liability coverage' },
          { text: 'Professional crew with commercial experience' },
          { text: 'Complete protection of furniture and equipment' },
          { text: 'Minimal disruption to business operations' },
          { text: 'Warranty on all commercial painting work' }
        ]}
        image="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Commercial painting preparation Austin"
      />

      <NAPMapSection />

      <LocalSignals
        areaName="Austin"
        pageType="service"
      />

      <MiniFAQ
        title="Commercial Painting FAQ"
        faqs={faqs}
      />

      <RelatedServices
        title="Complete Painting Services"
        location="Austin"
        services={[
          {
            title: 'Interior Painting Austin',
            description: 'Professional interior painting for commercial and residential properties.',
            href: '/services/interior-painting'
          },
          {
            title: 'Exterior Painting Austin',
            description: 'Weather-resistant exterior painting for commercial buildings.',
            href: '/services/exterior-painting'
          },
          {
            title: 'Color Consultation Austin',
            description: 'Professional color consultation for commercial spaces.',
            href: '/color-consultation'
          }
        ]}
      />

      <ServiceLocationLinks service="commercial" />

      <CTABanner
        title="Let's Discuss Your Commercial Project"
        subtitle="We'll assess your space, discuss scheduling options, and provide a detailed proposal that works with your operations."
        primaryCTA={{
          text: 'Schedule a Consultation',
          href: '/contact'
        }}
      />
    </>
  );
};

export default CommercialPainting;
