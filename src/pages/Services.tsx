import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';
import SplitSection from '../components/sections/SplitSection';
import ServiceAreasSection from '../components/sections/ServiceAreasSection';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import CTABanner from '../components/sections/CTABanner';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      title: 'Interior Painting',
      description: 'Professional interior painting services that transform your living spaces with clean prep, quality materials, and expert application.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/interior-painting',
      features: ['Room-by-room painting', 'Color consultation', 'Furniture protection', 'Premium finishes']
    },
    {
      title: 'Exterior Painting',
      description: 'Weather-resistant exterior painting designed for Austin\'s climate. Protect and beautify your home\'s exterior with lasting results.',
      image: '/exterior-painting-services-austin.jpg',
      link: '/services/exterior-painting',
      features: ['Pressure washing prep', 'Weather-resistant paints', 'Trim & detail work', 'Surface repairs']
    },
    {
      title: 'Cabinet Painting',
      description: 'Transform your kitchen for significantly less than replacement. Professional cabinet painting with custom colors and factory-quality finishes.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/cabinet-refinishing',
      features: ['Custom painting', 'Factory sprayed finish', 'A cost-effective alternative to replacement']
    },
    {
      title: 'Commercial Painting',
      description: 'Professional painting for offices, retail spaces, and commercial properties. Flexible scheduling with minimal business disruption.',
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/commercial',
      features: ['Flexible scheduling', 'Commercial-grade materials', 'Minimal disruption', 'Project management']
    }
  ];

  return (
    <>
      <SEO
        title="Services — Hill Country Painting"
        description="Complete Austin painting: interior, exterior, cabinets, commercial. Professional crew. 2-year warranty. Consultations available. Serving Austin metro."
        canonical="/services"
        pageType="collection"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gray-900 leading-tight">
              Complete Painting Services in Austin
            </h1>
            <p className="text-xl text-brand-gray-600 leading-body">
              From interior and exterior painting to cabinet painting and commercial projects, we deliver professional results backed by our 2-year warranty. Serving Austin and surrounding areas. Clean prep, crisp lines, reliable schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-brand-azureDark hover:bg-brand-azure text-white font-heading font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2 transition-colors duration-200">
                Request a Consultation
              </Link>
              <a href="tel:(512)240-2246" className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-azureDark hover:border-brand-azure text-brand-azureDark hover:text-brand-azure font-heading font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2 transition-colors duration-200">
                Call (512) 240-2246
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards - Warm Surface */}
      <section className="section-padding bg-brand-coral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {allServices.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    width="600"
                    height="400"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-brand-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-lg text-brand-gray-600 leading-body">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-brand-gray-700">
                        <ArrowRight className="w-4 h-4 text-brand-azureDark mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="btn-primary inline-flex"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreasSection
        title="Austin Areas We Serve"
        subtitle="Professional painting services throughout the Austin metro area"
        areas={[
          { name: 'Austin', href: '/service-areas/austin' },
          { name: 'Tarrytown', href: '/service-areas/tarrytown' },
          { name: 'West Lake Hills', href: '/service-areas/west-lake-hills' },
          { name: 'Northwest Hills', href: '/service-areas/northwest-hills' },
          { name: 'Westlake Highlands', href: '/service-areas/west-lake-highlands' },
          { name: 'Lakeway', href: '/service-areas/lakeway' }
        ]}
      />

      {/* Why Choose Us */}
      <SplitSection
        title="Why Choose Hill Country Painting?"
        description="We're more than just painters – we're Austin neighbors committed to transforming homes with the highest standards of quality and professionalism."
        benefits={[
          { text: 'Insured local crew with 15+ years experience' },
          { text: '2-year warranty on all painting services' },
          { text: 'Free color consultation and project planning' },
          { text: 'Clean preparation and professional execution' },
          { text: 'Reliable scheduling and clear communication' },
          { text: 'Complete cleanup after every project' }
        ]}
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Professional painting team Hill Country Painting Austin"
        imageLeft={true}
      />

      {/* Stats */}
      <StatsAndTrust />

      {/* Related Services for Austin */}
      <RelatedServices
        title="Complete Painting Solutions"
        location="Austin"
        services={[
          {
            title: 'Interior Painting Austin',
            description: 'Professional interior house painting services throughout Austin and surrounding areas.',
            href: '/services/interior-painting'
          },
          {
            title: 'Exterior Painting Austin',
            description: 'Weather-resistant exterior painting designed for Austin\'s climate conditions.',
            href: '/services/exterior-painting'
          },
          {
            title: 'Cabinet Painting Austin',
            description: 'Kitchen and bathroom cabinet painting services at a fraction of replacement cost.',
            href: '/services/cabinet-refinishing'
          }
        ]}
      />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Get a consultation for any of our professional painting services"
        primaryCTA={{
          text: 'Request a Consultation',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:(512) 240-2246'
        }}
      />
    </>
  );
};

export default Services;