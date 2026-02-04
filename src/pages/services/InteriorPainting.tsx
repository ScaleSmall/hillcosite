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

const InteriorPainting = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Interior Painting' }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Consultation & Planning',
      description: 'We assess your space, discuss color preferences, and create a detailed plan for your interior painting project.'
    },
    {
      number: 2,
      title: 'Furniture Protection',
      description: 'All furniture and belongings are carefully covered to ensure complete protection during painting.'
    },
    {
      number: 3,
      title: 'Surface Preparation',
      description: 'Thorough cleaning, patching, sanding, and priming ensures the best possible paint adhesion and finish.'
    },
    {
      number: 4,
      title: 'Professional Application',
      description: 'Expert application using high-quality tools and techniques for smooth, even coverage throughout your home.'
    },
    {
      number: 5,
      title: 'Quality Inspection',
      description: 'Detailed walkthrough to ensure every surface meets our high standards before project completion.'
    },
    {
      number: 6,
      title: 'Clean-up & Final Walk',
      description: 'Complete cleanup and final inspection with you to ensure complete satisfaction with the results.'
    }
  ];

  const relatedServices = [
  ]
  const testimonials = [
    {
      name: 'leslie lyon-house',
      location: 'Austin',
      rating: 5,
      text: 'So happy with the beautiful paint job Netty, Edgar, and Chuy did for the entire interior of our home. Their service went above and beyond our expectations. Fantastic value - the price point is beyond fair.',
      initials: 'LL'
    },
    {
      name: 'Richard Miller',
      location: 'Austin',
      rating: 5,
      text: 'We just moved to Austin and needed to paint the interior of our new home. The lead painter (Jose) was very helpful and provided us with great customer service. And his team did a fantastic job! We are 100% satisfied with their professional approach, and the final results!',
      initials: 'RM'
    },
    {
      name: 'Kara Steenhoek',
      location: 'Austin',
      rating: 5,
      text: 'Fantastic folks to work with! They made the process so easy. I would recommend them to anybody. Great price and quality workmanship.',
      initials: 'KS'
    }
  ];

  const faqs = [
    {
      question: 'How long does interior painting take?',
      answer: 'Most interior painting projects take 2-5 days depending on the size of the space and number of rooms. We provide a detailed timeline during your consultation.'
    },
    {
      question: 'Do I need to move all my furniture?',
      answer: 'No, our team will carefully cover and protect all furniture and belongings. We handle all the preparation so you don\'t have to.'
    },
    {
      question: 'What paint brands do you use?',
      answer: 'We use premium paint brands known for durability and coverage. We\'ll recommend the best options for your specific needs and budget.'
    },
    {
      question: 'Can you match any color?',
      answer: 'Yes, we offer full custom color matching services and can help you choose the perfect colors for your space.'
    },
    {
      question: 'How much does interior painting cost in Round Rock?',
      answer: 'Interior painting typically ranges from $3,200-$7,200 depending on home size, paint quality, and scope of work. We provide detailed estimates with transparent pricing.'
    },
    {
      question: 'How often should I repaint interior rooms?',
      answer: 'High-traffic areas like kitchens and hallways typically need repainting every 3-5 years, while bedrooms and formal rooms can go 7-10 years between paint jobs.'
    }
  ];

  const productData = getServiceProduct('interior-painting');

  return (
    <>
      <SEO
        title="Interior Painting — Hill Country Painting"
        description="Expert interior painting in Austin TX. Transform your home with professional painters. Clean prep, premium paints, 2-year warranty. Consultations available."
        canonical="/services/interior-painting"
        pageType="service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Interior Painting', url: '/services/interior-painting' }
        ]}
        service={{
          name: 'Interior Painting',
          description: 'Professional interior painting services for homes and businesses in Austin, Texas.',
          areaServed: ['Round Rock', 'Georgetown', 'Cedar Park', 'Pflugerville', 'Leander', 'Austin']
        }}
        faq={faqs}
        product={productData}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Interior painting background"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
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
            className="text-white font-semibold text-sm underline decoration-2 underline-offset-2 hover:text-accent-300 transition-colors drop-shadow-lg"
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

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Interior House Painters in Austin, TX
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Transform your home's interior with Austin's most trusted painting contractors. 100+ homes painted • Insured crew • 2-year warranty • Consultations available.
              </p>
              <div className="text-base text-white/90 font-medium drop-shadow">
                Clean prep. Crisp lines. Reliable schedules.
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

      {/* Proof Points */}
      <ProofPointsSection />

      {/* Quick Quote Form - Above the Fold */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
                Transform Your Austin Home's Interior
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Professional interior painting that enhances every room in your Austin home. Our experienced crew delivers clean preparation, premium materials, and precise application for lasting results.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full"></div>
                    <span>Complete furniture protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full"></div>
                    <span>Premium paint selection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full"></div>
                    <span>Free color consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full"></div>
                    <span>Complete daily cleanup</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <QuickQuoteForm service="Interior Painting" />
            </div>
          </div>
        </div>
      </section>

      {/* Pattern D: Process */}
      {/* Split Timeline Process Layout */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-25"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Our Interior Painting Process
            </h2>
            <p className="text-xl text-slate-600">
              Professional approach for lasting interior painting results
            </p>
          </div>

          {/* Desktop Split Timeline Layout */}
          <div className="hidden lg:block">
            <div className="relative max-w-4xl mx-auto">
              {/* Central Timeline */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 transform -translate-x-1/2"></div>

              {/* Timeline Steps */}
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={step.number} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}>
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className={`bg-white rounded-2xl p-8 shadow-xl border-l-4 ${
                        index % 3 === 0 ? 'border-blue-500' :
                        index % 3 === 1 ? 'border-indigo-500' : 'border-purple-500'
                      } transform transition-all duration-300 hover:shadow-2xl`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg ${
                            index % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                            index % 3 === 1 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' : 'bg-gradient-to-br from-purple-500 to-purple-600'
                          }`}>
                            {step.number}
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Central Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                        index % 3 === 0 ? 'bg-blue-500' :
                        index % 3 === 1 ? 'bg-indigo-500' : 'bg-purple-500'
                      }`}></div>
                    </div>

                    {/* Connecting Line */}
                    <div className={`w-5/12 flex ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                      <div className={`w-8 h-1 ${
                        index % 3 === 0 ? 'bg-blue-400' :
                        index % 3 === 1 ? 'bg-indigo-400' : 'bg-purple-400'
                      } rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 text-white rounded-xl flex items-center justify-center font-bold shadow-lg ${
                    index % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    index % 3 === 1 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' : 'bg-gradient-to-br from-purple-500 to-purple-600'
                  }`}>
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-300 to-purple-300 mt-4 rounded-full"></div>
                  )}
                </div>

                <div className={`flex-grow bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                  index % 3 === 0 ? 'border-blue-500' :
                  index % 3 === 1 ? 'border-indigo-500' : 'border-purple-500'
                }`}>
                  <h3 className="font-bold text-brand-gray-900 mb-3 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative flourish */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-full shadow-lg">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="text-slate-700 font-semibold">Professional Results, Every Step</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern C: Split Section */}
      <SplitSection
        title="Professional Interior Painting Services"
        description="Our interior painting services are designed to completely transform your living spaces while minimizing disruption to your daily routine."
        benefits={[
          { text: 'Complete surface preparation and priming' },
          { text: 'Premium paint selection and application' },
          { text: 'Furniture protection and room preparation' },
          { text: 'Clean, precise cutting and rolling techniques' },
          { text: 'Thorough cleanup after each work day' },
          { text: 'Insured crew with 15+ years experience' }
        ]}
        image="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Interior painting preparation Austin - Professional surface prep by Hill Country Painting"
      />

      {/* Pattern G: Testimonials */}
      <TestimonialsSection
        title="What Our Interior Painting Customers Say"
        testimonials={[testimonials[0], testimonials[1], testimonials[2]]}
      />

      {/* NAP and Map */}
      <NAPMapSection />

      <LocalSignals
        areaName="Austin"
        pageType="service"
      />

      {/* Pattern F: Mini-FAQ */}
      <MiniFAQ
        title="Interior Painting FAQ"
        faqs={faqs}
      />

      {/* Related Services in Austin */}
      <RelatedServices
        title="Complete Home Painting Services"
        location="Austin"
        services={[
          {
            title: 'Exterior Painting Austin',
            description: 'Weather-resistant exterior house painting services for Austin homes.',
            href: '/services/exterior-painting'
          },
          {
            title: 'Cabinet Painting Austin',
            description: 'Transform your kitchen cabinets with professional painting services.',
            href: '/services/cabinet-refinishing'
          },
          {
            title: 'Color Consultation Austin',
            description: 'Professional color consultation to choose the perfect interior paint colors.',
            href: '/color-consultation'
          },
          {
            title: 'Interior Painting Cost Guide',
            description: 'Complete guide to interior painting costs and budgeting for Austin homes.',
            href: '/guides/painting-costs-round-rock'
          }
        ]}
      />

      <ServiceLocationLinks service="interior" />

      {/* Pattern I: CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Interior?"
        subtitle="Get a consultation for professional interior painting in Austin"
        primaryCTA={{
          text: 'Get Consultation',
          href: '/contact'
        }}
      />
    </>
  );
};

export default InteriorPainting;
