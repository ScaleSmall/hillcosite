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
      title: 'Initial Walk-Through',
      description: 'We visit your home to examine surfaces, discuss your preferences, and answer questions about the process, timeline, and materials.'
    },
    {
      number: 2,
      title: 'Protection Setup',
      description: 'Before any work begins, we protect floors, furniture, and fixtures with drop cloths and plastic sheeting.'
    },
    {
      number: 3,
      title: 'Surface Preparation',
      description: 'We clean walls, repair imperfections, sand rough areas, and apply primer where needed. Proper prep determines how long your paint will last.'
    },
    {
      number: 4,
      title: 'Paint Application',
      description: 'We apply finish coats systematically—cutting in edges first, then rolling walls and ceilings for consistent coverage.'
    },
    {
      number: 5,
      title: 'Daily Cleanup',
      description: 'At the end of each work day, we remove debris, organize materials, and ensure your home remains livable during the project.'
    },
    {
      number: 6,
      title: 'Final Walkthrough',
      description: 'We review the completed work room by room with you, address any concerns, and ensure you\'re satisfied before we leave.'
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
      question: 'How long does interior painting typically take?',
      answer: 'Most interior projects take 2-5 days depending on room count, ceiling height, and surface conditions. We provide a specific timeline after assessing your space.'
    },
    {
      question: 'Do we need to move furniture ourselves?',
      answer: 'No. We move what needs to be moved and protect everything else with drop cloths and plastic sheeting. You won\'t need to do any furniture moving.'
    },
    {
      question: 'What paint do you use?',
      answer: 'We use Sherwin-Williams and Benjamin Moore products. During your consultation, we\'ll recommend specific products based on the room type and your durability requirements.'
    },
    {
      question: 'Can you help with color selection?',
      answer: 'Yes. We can provide color guidance during your consultation and help you understand how different colors will look in your specific lighting conditions.'
    },
    {
      question: 'What does interior painting cost in Austin?',
      answer: 'Interior projects typically range from $3,200-$7,200 depending on square footage, ceiling height, and paint quality. We provide detailed written estimates with clear pricing.'
    },
    {
      question: 'How often should interior paint be refreshed?',
      answer: 'High-traffic areas like kitchens and hallways typically need attention every 3-5 years. Bedrooms and formal rooms often last 7-10 years before showing wear.'
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
          areaServed: ['Round Rock', 'Georgetown', 'Leander', 'Pflugerville', 'Taylor', 'Austin']
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
            className="text-white font-semibold text-sm underline decoration-2 underline-offset-2 hover:text-brand-azure transition-colors drop-shadow-lg"
          >
            Click to estimate financing
          </Link>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Your Home, Refreshed Without the Disruption
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Interior painting that protects your belongings, respects your schedule, and keeps you informed at every step.
              </p>
              <div className="text-base text-white font-semibold drop-shadow">
                No surprises. No mess. Just a beautifully refreshed home.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  Request a Consultation
                </Link>
                <a href="tel:(512)240-2246" className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  <Phone className="w-5 h-5 mr-2" />
                  (512) 240-2246
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
                  We understand that inviting painters into your home can feel overwhelming. Here's what we handle so you don't have to:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Moving furniture</strong> — We shift what needs to move and protect everything else in place</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Paint splatters and spills</strong> — Drop cloths and careful masking protect floors, trim, and fixtures</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Wondering when we'll show up</strong> — We confirm arrival times and communicate any changes immediately</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Daily mess</strong> — We clean up completely at the end of each day, not when the project ends</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-azureDark rounded-full mt-2"></div>
                    <span><strong>Rushed prep work</strong> — We don't cut corners on surface preparation, even when it takes longer</span>
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

      {/* Why This Matters */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 text-center">
            Why Proper Interior Painting Matters
          </h2>
          <div className="space-y-4 text-lg text-brand-gray-600">
            <p>
              Paint isn't just about color. When applied correctly, it protects walls from moisture, wear, and fading. When rushed or poorly prepped, it peels, cracks, and needs redoing within a few years.
            </p>
            <p>
              Proper surface preparation—cleaning, patching, sanding, priming—determines how long your paint lasts. We don't skip these steps because they prevent callbacks and ensure you won't need touch-ups next year.
            </p>
            <p>
              Clear communication prevents stress. You'll know exactly what's happening each day, when we'll arrive, and what to expect. No guessing, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pattern D: Process - Neutral Surface */}
      {/* Split Timeline Process Layout */}
      <section className="section-padding bg-brand-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-azure/20 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-brand-azureDark/20 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-azure/20 rounded-full opacity-25"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Our Interior Painting Process
            </h2>
            <p className="text-xl text-brand-gray-600">
              Professional approach for lasting interior painting results
            </p>
          </div>

          {/* Desktop Split Timeline Layout */}
          <div className="hidden lg:block">
            <div className="relative max-w-4xl mx-auto">
              {/* Central Timeline */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-azureDark transform -translate-x-1/2"></div>

              {/* Timeline Steps */}
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={step.number} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}>
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-brand-azure transform transition-[box-shadow,transform] duration-300 hover:shadow-2xl">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-brand-azureDark">
                            {step.number}
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <p className="text-brand-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Central Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-brand-azureDark"></div>
                    </div>

                    {/* Connecting Line */}
                    <div className={`w-5/12 flex ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                      <div className="w-8 h-1 bg-brand-azure rounded-full"></div>
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
                  <div className="w-12 h-12 text-white rounded-xl flex items-center justify-center font-bold shadow-lg bg-brand-azureDark">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-1 h-12 bg-brand-azure mt-4 rounded-full"></div>
                  )}
                </div>

                <div className="flex-grow bg-white rounded-xl p-6 shadow-lg border-l-4 border-brand-azure">
                  <h3 className="font-bold text-brand-gray-900 mb-3 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative flourish */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full shadow-lg border-2 border-brand-gray-200">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-brand-azureDark rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-brand-azure rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-brand-azureDark rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="text-brand-gray-700 font-semibold">Professional Results, Every Step</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-brand-azure rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <div className="w-3 h-3 bg-brand-azureDark rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                <div className="w-3 h-3 bg-brand-azure rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
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
                You receive a written timeline before we start. No vague estimates—you'll know exactly what happens each day.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Daily Updates</h3>
              <p className="text-brand-gray-600">
                We check in at the end of each work day to review progress, answer questions, and confirm the next day's plan.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Respectful Crews</h3>
              <p className="text-brand-gray-600">
                Our painters treat your home with care. They remove shoes, ask before moving personal items, and keep music and conversation at reasonable levels.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-gray-900">Clean Job Sites</h3>
              <p className="text-brand-gray-600">
                We don't wait until project completion to clean up. Tools are organized, debris is removed daily, and floors are protected at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

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
        title="Let's Talk About Your Project"
        subtitle="No pressure, no sales pitch. Just a conversation about what you'd like to accomplish."
        primaryCTA={{
          text: 'Request a Consultation',
          href: '/contact'
        }}
      />
    </>
  );
};

export default InteriorPainting;
