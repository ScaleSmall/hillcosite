import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Palette, Lightbulb, Eye, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import ProcessSection from '../components/sections/ProcessSection';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import MiniFAQ from '../components/sections/MiniFAQ';
import CTABanner from '../components/sections/CTABanner';

const ColorConsultation = () => {

  const processSteps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We assess your space, lighting conditions, existing decor, and discuss your style preferences and goals.'
    },
    {
      number: 2,
      title: 'Color Analysis',
      description: 'Professional evaluation of how different colors will work with your home\'s architecture, lighting, and furnishings.'
    },
    {
      number: 3,
      title: 'Custom Palette Creation',
      description: 'Development of a personalized color scheme with primary, accent, and coordinating colors for each space.'
    },
    {
      number: 4,
      title: 'Final Recommendations',
      description: 'Detailed color specifications with paint brands, finish recommendations, and application guidance.'
    },
    {
      number: 5,
      title: 'Implementation Support',
      description: 'Ongoing support during your painting project to ensure colors meet your expectations.'
    }
  ];

  const consultationStats = [
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      value: "Expert",
      label: "Color Analysis"
    },
    {
      icon: <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-azureDark font-bold">✓</div>,
      value: "Free",
      label: "With Service"
    },
    {
      icon: <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-azureDark font-bold">∞</div>,
      value: "Unlimited",
      label: "Color Options"
    },
    {
      icon: <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-azureDark font-bold">15</div>,
      value: "15+ Years",
      label: "Design Experience"
    }
  ];

  const testimonials = [
    {
      name: 'Janet Martin',
      location: 'Austin',
      rating: 5,
      text: 'Melissa consulted with us on our colors and was instrumental in helping us choose the perfect color palate for our new home. Excellence from beginning to the end!',
      initials: 'JM'
    },
    {
      name: 'Valerie Bauhofer',
      location: 'Austin',
      rating: 5,
      text: 'I am satisfied with the professionalism of the entire crew, including Josh, Justin and Maria; specifically with their flexibility in addressing a problem with color selections.',
      initials: 'VB'
    },
    {
      name: 'Steven Smallfield',
      location: 'Austin',
      rating: 5,
      text: 'The house was dark and depressing now its bright and we love it. They managed to get great coverage after a solid coat of primer.',
      initials: 'SS'
    }
  ];

  const faqs = [
    {
      question: 'Is color consultation included with painting services?',
      answer: 'Yes, we provide free color consultation as part of all our interior and exterior painting projects to ensure you get the perfect results.'
    },
    {
      question: 'Can I get color consultation without painting services?',
      answer: 'Absolutely! We offer standalone color consultation services for homeowners who want professional guidance before starting their project.'
    },
    {
      question: 'How long does a color consultation take?',
      answer: 'Initial consultations typically take 30 minutes, depending on the size of your project and number of rooms being considered.'
    },
    {
      question: 'What if I don\'t like the recommended colors?',
      answer: 'We work with you until you\'re completely satisfied. Our goal is to find colors that you absolutely love for your space.'
    },
    {
      question: 'Can you match colors from inspiration photos?',
      answer: 'Yes, we can help translate inspiration from photos, fabric, or other sources into practical paint colors for your home.'
    }
  ];

  return (
    <>
      <SEO
        title="Color Consultation Austin | Professional Paint Color Advice | Hill Country Painting"
        description="Expert color consultation in Austin. Professional paint color advice, custom palettes, and design guidance. Free with painting services. Transform your space."
        canonical="/color-consultation"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Color Consultation', url: '/color-consultation' }
        ]}
        service={{
          name: 'Color Consultation',
          description: 'Professional color consultation and paint color selection services for homes and businesses in Austin, Texas.',
          areaServed: ['Austin', 'Round Rock', 'Georgetown', 'Pflugerville', 'Leander', 'Lakeway', 'Bee Cave', 'Taylor', 'Barton Creek']
        }}
        faq={faqs}
      />

      {/* Vibrant Color-Themed Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Colorful Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-azure via-brand-coral to-brand-azureDark"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-coral via-brand-azure to-brand-azureDark mix-blend-screen opacity-20"></div>
        </div>

        {/* Floating Color Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-coral rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-brand-azure rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-brand-coral rounded-full opacity-70"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-brand-azure rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-coral rounded-full opacity-20"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-4">
                <Palette className="w-5 h-5 mr-2" />
                Professional Color Expertise
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-heading drop-shadow-lg">
                Color Consultation Austin
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md max-w-3xl mx-auto">
                Transform your space with professional color guidance in Austin. Expert analysis, custom palettes, and perfect color harmony that brings your vision to life.
              </p>
              <div className="text-lg text-white font-medium drop-shadow bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 inline-block">
                Free consultation with all painting services
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-brand-azureDark font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                <Palette className="w-5 h-5 mr-2" />
                Request a Consultation
              </Link>
              <a href="tel:(512)240-2246" className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-azureDark transition-[background-color,color] duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                <Phone className="w-5 h-5 mr-2" />
                Call (512) 240-2246
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Color Wheel Section */}
      <section className="section-padding bg-gradient-to-br from-brand-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-coral to-brand-coral80 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-brand-azure20 to-brand-azure10 rounded-full opacity-40 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-brand-coral rounded-full text-brand-azureDark font-medium">
                  <Eye className="w-4 h-4 mr-2" />
                  Professional Color Vision
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900">
                  The Science of Perfect Color Selection
                </h2>
                <p className="text-lg text-brand-gray-600 leading-body">
                  Choosing colors isn't just about what looks pretty—it's about understanding how light, space, and psychology work together to create the perfect atmosphere for your Austin home.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-brand-azure">
                  <Lightbulb className="w-8 h-8 text-brand-azure mb-3" />
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Lighting Analysis</h3>
                  <p className="text-sm text-brand-gray-600">Understanding how Austin's natural light affects color throughout the day</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-brand-azureDark">
                  <Heart className="w-8 h-8 text-brand-azureDark mb-3" />
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Mood Creation</h3>
                  <p className="text-sm text-brand-gray-600">Colors that enhance your lifestyle and emotional well-being</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-brand-azure">
                  <Eye className="w-8 h-8 text-brand-azure mb-3" />
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Space Perception</h3>
                  <p className="text-sm text-brand-gray-600">Making rooms feel larger, cozier, brighter, or more intimate</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-brand-azureDark">
                  <Palette className="w-8 h-8 text-brand-azureDark mb-3" />
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Harmony Design</h3>
                  <p className="text-sm text-brand-gray-600">Creating flow and cohesion throughout your entire home</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Request a Consultation
                </Link>
                <a href="tel:(512)240-2246" className="btn-secondary">
                  Call (512) 240-2246
                </a>
              </div>
            </div>
            
            {/* Right Content - Color Visualization */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-brand-gray-900 mb-6 text-center">Color Harmony Wheel</h3>
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-coral via-brand-azure to-brand-azureDark opacity-80"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-azure via-brand-azureDark to-brand-coral opacity-70"></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-coral via-brand-azure to-brand-azureDark opacity-60"></div>
                  <div className="absolute inset-12 rounded-full bg-white flex items-center justify-center">
                    <Palette className="w-16 h-16 text-brand-azure" />
                  </div>
                </div>
                <p className="text-center text-brand-gray-600">
                  Professional color theory creates perfect harmony for your Austin home
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection
        steps={processSteps}
      />

      {/* Stats Section */}
      <StatsAndTrust
        stats={consultationStats}
      />

      {/* Testimonials */}
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Real experiences from Austin homeowners"
        testimonials={testimonials}
      />

      {/* FAQ Section */}
      <MiniFAQ
        title="Color Consultation Questions"
        faqs={faqs}
      />

      {/* CTA Banner */}
      <CTABanner
        title="Let's Talk About Your Project"
        subtitle="Get professional color consultation and expert painting services in Austin. Free consultation with all painting projects."
        primaryCTA={{
          text: "Request a Color Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Call (512) 240-2246",
          href: "tel:(512)240-2246"
        }}
        backgroundColor="coral"
      />
    </>
  );
};

export default ColorConsultation;