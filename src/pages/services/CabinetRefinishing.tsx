import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import ProofPointsSection from '../../components/ProofPointsSection';
import QuickQuoteForm from '../../components/QuickQuoteForm';
import ImageWithGeo from '../../components/ImageWithGeo';
import RelatedServices from '../../components/RelatedServices';
import ComparisonSection from '../../components/sections/ComparisonSection';
import ProcessSection from '../../components/sections/ProcessSection';
import ServicesGrid from '../../components/sections/ServicesGrid';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';
import NAPMapSection from '../../components/NAPMapSection';
import LocalSignals from '../../components/LocalSignals';
import ServiceLocationLinks from '../../components/ServiceLocationLinks';
import { getServiceProduct } from '../../config/serviceProducts';

const CabinetRefinishing = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cabinet Painting' }
  ];

  const comparisonItems = [
    { feature: 'Timeline', option1: '3-7 days', option2: '2-4 weeks' },
    { feature: 'Dust & Mess', option1: 'Minimal', option2: 'Extensive' },
    { feature: 'Layout Change', option1: false, option2: true },
    { feature: 'Eco-Friendly', option1: true, option2: false },
    { feature: 'Custom Colors', option1: true, option2: true },
    { feature: 'Wood Grain Enhancement', option1: true, option2: true }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Assessment & Planning',
      description: 'Detailed evaluation of your cabinets and discussion of paint colors and finishes for your painting project.'
    },
    {
      number: 2,
      title: 'Careful Removal',
      description: 'Professional removal of doors and drawers with careful labeling for reassembly.'
    },
    {
      number: 3,
      title: 'Deep Cleaning',
      description: 'Thorough cleaning and degreasing of all cabinet surfaces to ensure proper adhesion.'
    },
    {
      number: 4,
      title: 'Professional Prep',
      description: 'Sanding, filling, and proper preparation for paint application to achieve professional results.'
    },
    {
      number: 5,
      title: 'Expert Application',
      description: 'Professional painting in controlled environment for flawless results.'
    },
    {
      number: 6,
      title: 'Final Walkthrough',
      description: 'Complete reassembly and final inspection with you.'
    }
  ];

  const relatedServices = [
    {
      title: 'Interior Painting',
      description: 'Complete your kitchen transformation with professional interior wall painting.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/interior-painting'
    },
    {
      title: 'Exterior Painting',
      description: 'Enhance your home\'s curb appeal with professional exterior painting.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/exterior-painting'
    },
    {
      title: 'Trim & Millwork',
      description: 'Professional painting of trim and millwork to complement your painted cabinets.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services'
    }
  ];

  const testimonials = [
    {
      name: 'Kara Steenhoek',
      location: 'Austin',
      rating: 5,
      text: 'Fantastic folks to work with! They made the process so easy. I would recommend them to anybody. Great price and quality workmanship.'
    },
    {
      name: 'Patricia Perez',
      location: 'Austin',
      rating: 5,
      text: 'This is the second time I hired Hill Country Painting. They are thorough and have great follow-up and follow through to make sure you are completely happy with the work.'
    },
    {
      name: 'Richard Miller',
      location: 'Austin',
      rating: 5,
      text: 'The lead painter was very helpful and provided us with great customer service. And his team did a fantastic job! We are 100% satisfied with their professional approach, and the final results!'
    }
  ];

  const faqs = [
    {
      question: 'Can you match any color?',
      answer: 'Yes, we offer full custom color matching for cabinet painting to achieve any desired painted finish.'
    },
    {
      question: 'Can you match any color or finish?',
      answer: 'Absolutely! We provide custom cabinet painting in any color you choose, with various finish options from matte to high-gloss to match your style.'
    },
    {
      question: 'What\'s your warranty?',
      answer: 'All cabinet painting work comes with our 2-year warranty covering both materials and workmanship.'
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, we are fully insured to protect your home and provide complete peace of mind.'
    },
    {
      question: 'How much does cabinet painting cost in Austin?',
      answer: 'Cabinet painting typically ranges from $3,000-$8,000 depending on kitchen size, number of cabinets, and finish selected. Much less than $15,000+ replacement costs.'
    }
  ];

  const productData = getServiceProduct('cabinet-refinishing');

  return (
    <>
      <SEO
        title="Cabinet Painting — Hill Country Painting"
        description="Professional cabinet painting in Austin. Save significantly vs replacement. Custom colors, professional finish, 2-year warranty."
        canonical="/services/cabinet-refinishing"
        pageType="service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Cabinet Painting', url: '/services/cabinet-refinishing' }
        ]}
        service={{
          name: 'Cabinet Painting',
          description: 'Professional cabinet painting services for kitchens and bathrooms in Austin, Texas.',
          areaServed: ['Austin', 'Tarrytown', 'West Lake Hills', 'Northwest Hills', 'West Lake Highlands', 'Lakeway', 'Cedar Park', 'Hutto']
        }}
        faq={faqs}
        product={productData}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cabinet painting background"
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

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-heading drop-shadow-lg">
                A Fresh Kitchen Without the Renovation Chaos
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Cabinet painting that transforms your kitchen in days, not weeks. Careful prep, factory-quality finish, and a process designed to keep your home functional.
              </p>
              <div className="text-base text-white font-semibold drop-shadow">
                No demolition. No extended disruption. Just a kitchen you'll love again.
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

      {/* Proof Points */}
      <ProofPointsSection surface="white" />

      {/* Quick Quote Form - Above the Fold */}
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
                What You Don't Have to Worry About
              </h2>
              <div className="space-y-6 text-lg text-brand-gray-600">
                <p>
                  Cabinet painting involves removing doors, working in your kitchen, and applying durable finishes. Here's what we handle:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Kitchen access during the project</strong> — Boxes and frames are painted in sections so you can still use your kitchen</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Tracking which door goes where</strong> — Every piece is labeled and photographed before removal for perfect reassembly</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Visible brush strokes</strong> — Doors are sprayed off-site in a controlled environment for a smooth, factory finish</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Grease and buildup</strong> — We thoroughly clean and degrease all surfaces before any painting begins</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Chipping within a year</strong> — Proper prep, primer, and quality paint mean durable results, not early failure</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <QuickQuoteForm service="Cabinet Painting" />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 text-center">
            Why Proper Cabinet Painting Matters
          </h2>
          <div className="space-y-4 text-lg text-brand-gray-600">
            <p>
              Cabinet painting isn't just rolling on a fresh coat. Kitchens involve grease, moisture, and constant contact—conditions that cause poorly applied paint to chip, peel, or yellow within months.
            </p>
            <p>
              Proper cabinet painting requires thorough degreasing, sanding, bonding primer, and multiple finish coats applied in a controlled environment. Shortcuts in any of these steps lead to early failure and frustration.
            </p>
            <p>
              When done correctly, painted cabinets last 7-10 years and provide a factory-quality finish at a fraction of replacement cost. Clear communication throughout prevents surprises and ensures you know exactly what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Pattern E: Comparison */}
      <ComparisonSection
        title="Cabinet Painting vs. Replacement"
        subtitle="Smart homeowners choose cabinet painting"
        option1Title="Cabinet Painting"
        option2Title="Cabinet Replacement"
        option1Price="$3,000 – $8,000"
        option2Price="$15,000 – $40,000+"
        option1Description="Transform with custom paint colors"
        option2Description="Expensive and time-consuming process"
        comparisons={comparisonItems}
        ctaText="Request an Estimate"
        ctaLink="/contact"
      />

      {/* Pattern D: Process */}
      <ProcessSection
        title="Our Cabinet Painting Process"
        subtitle="Professional techniques for factory-quality painted finishes"
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
                You'll receive a detailed timeline showing when doors are removed, when painting occurs off-site, and when reinstallation happens. No guessing.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Daily Updates</h3>
              <p className="text-brand-gray-600">
                We keep you informed about progress, drying times, and when your kitchen will be fully functional again.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Respectful Crews</h3>
              <p className="text-brand-gray-600">
                Our painters work carefully around your home, respect your schedule, and minimize disruption to daily routines.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Clean Job Sites</h3>
              <p className="text-brand-gray-600">
                Work areas are protected, dust is minimized, and we clean thoroughly each day rather than waiting until the end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Kitchen Solutions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Complete Kitchen Solutions
            </h2>
            <p className="text-xl text-brand-gray-600">
              Transform your entire kitchen with our comprehensive services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    width="400"
                    height="250"
                    className="w-full h-48 object-cover rounded-xl mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-gray-600 mb-6 leading-body">
                  {service.description}
                </p>
                <a href={service.link} className="btn-outline">
                  Explore Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NAPMapSection />

      <LocalSignals
        areaName="Austin"
        pageType="service"
      />

      {/* Pattern F: Mini-FAQ */}
      <MiniFAQ
        title="Cabinet Painting FAQ"
        faqs={faqs}
      />

      {/* Related Services */}
      <RelatedServices
        title="Complete Home Painting Services"
        location="Austin"
        services={[
          {
            title: 'Interior Painting',
            description: 'Professional interior painting services to complement your newly painted cabinets.',
            href: '/services/interior-painting'
          },
          {
            title: 'Exterior Painting',
            description: 'Weather-resistant exterior painting designed for Austin climate.',
            href: '/services/exterior-painting'
          },
          {
            title: 'Color Consultation',
            description: 'Expert color consultation to help choose the perfect cabinet and paint colors.',
            href: '/color-consultation'
          }
        ]}
      />

      <ServiceLocationLinks service="cabinet" />

      {/* Pattern I: CTA Banner */}
      <CTABanner
        title="Let's Talk About Your Kitchen"
        subtitle="We'll assess your cabinets, discuss finish options, and provide a clear timeline and cost estimate."
        primaryCTA={{
          text: 'Request a Consultation',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'View Cost Guide',
          href: '/guides/painting-costs-round-rock'
        }}
      />
    </>
  );
};

export default CabinetRefinishing;
