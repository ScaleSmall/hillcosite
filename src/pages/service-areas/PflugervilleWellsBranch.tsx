import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Home, Users, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const PflugervilleWellsBranch = () => {
  const pflugervilleFAQs = [
    {
      question: 'Do you work with Pflugerville HOA requirements?',
      answer: 'Yes, Pflugerville has many HOA-governed communities including Blackhawk, Falcon Pointe, and Windermere. We understand HOA approval processes and ensure all exterior work meets community standards and architectural guidelines.'
    },
    {
      question: 'Can you coordinate around Pflugerville events like Pfall Chili Pfest?',
      answer: 'Absolutely. We\'re familiar with major Pflugerville events and festivals and can coordinate project schedules around community activities to ensure smooth completion without disruption.'
    },
    {
      question: 'Do you serve both Pflugerville and Wells Branch?',
      answer: 'Yes, we serve the entire Pflugerville area including Wells Branch, which straddles the Austin and Pflugerville boundary. We understand the unique character of both communities and provide consistent quality service throughout the area.'
    }
  ];

  return (
    <>
      <SEO
        title="Pflugerville & Wells Branch Painting | Professional Painters | Hill Country Painting"
        description="Professional painting in Pflugerville & Wells Branch, TX. Expert interior/exterior painting for Blackhawk, Falcon Pointe. Consultations available."
        canonical="/service-areas/pflugerville-wells-branch"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Pflugerville & Wells Branch', url: '/service-areas/pflugerville-wells-branch' }
        ]}
        service={{
          name: 'Pflugerville & Wells Branch Professional Painting Services',
          description: 'Professional residential and commercial painting services throughout Pflugerville and Wells Branch, Texas. Specializing in HOA-compliant work, family neighborhoods, and diverse communities. Expert painters serving Pflugerville with quality craftsmanship.',
          areaServed: ['Pflugerville', 'Wells Branch', 'Blackhawk', 'Falcon Pointe', 'Windermere', 'Springbrook', 'Cambridge Heights']
        }}
        faq={pflugervilleFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional Pflugerville and Wells Branch painting services"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Pflugerville, TX',
              latitude: 30.4394,
              longitude: -97.6200,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Pflugerville & Wells Branch Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Expert painting for Pflugerville and Wells Branch family neighborhoods. From Blackhawk to Falcon Pointe, we serve diverse communities with exceptional craftsmanship. HOA-compliant work, new construction expertise, and quality finishes for growing neighborhoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  Get Free Pflugerville Estimate
                </Link>
                <a href="tel:(512)240-2246" className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  <Phone className="w-5 h-5 mr-2" />
                  (512) 240-2246
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsAndTrust
        stats={[
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">100+</div>,
            value: "100+",
            label: "Pflugerville Projects"
          },
          {
            icon: <Users className="w-8 h-8 text-deep-600" />,
            value: "Community",
            label: "Focused"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <Zap className="w-8 h-8 text-deep-600" />,
            value: "Fast",
            label: "Service"
          }
        ]}
      />

      <ServicesGrid
        title="Pflugerville & Wells Branch Painting Services"
        subtitle="Professional craftsmanship for every neighborhood"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-900 mb-4">
              Pflugerville & Wells Branch Neighborhoods We Serve
            </h2>
            <p className="text-xl text-slate-600">
              Expert painting throughout Pflugerville's diverse communities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <Home className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-deep-900 mb-2">Blackhawk</h3>
              <p className="text-slate-600">Professional painting for Blackhawk homes with HOA compliance and quality finishes.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <Users className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-deep-900 mb-2">Wells Branch</h3>
              <p className="text-slate-600">Expert painting for the diverse Wells Branch community straddling Austin and Pflugerville.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <Zap className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-deep-900 mb-2">Falcon Pointe</h3>
              <p className="text-slate-600">Quality painting for established and new Falcon Pointe family homes.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Pflugerville Home?"
        subtitle="Get a consultation from Pflugerville's trusted painting professionals"
        primaryCTA={{
          text: "Get Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Call (512) 240-2246",
          href: "tel:(512)240-2246"
        }}
      />
    </>
  );
};

export default PflugervilleWellsBranch;
