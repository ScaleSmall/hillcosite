import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceAreasSection from '../components/sections/ServiceAreasSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import CTABanner from '../components/sections/CTABanner';
import { geoAreas } from '../data/geoAreas';

const ServiceAreas = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas' }
  ];

  const allServiceAreas = [
    { name: 'Round Rock & Georgetown', href: '/service-areas/round-rock-georgetown' },
    { name: 'Pflugerville & Wells Branch', href: '/service-areas/pflugerville-wells-branch' },
    { name: 'Cedar Park', href: '/service-areas/cedar-park' },
    { name: 'Taylor & Hutto', href: '/service-areas/taylor-hutto' },
    { name: 'Leander', href: '/service-areas/leander' },
    { name: 'Austin', href: '/service-areas' }
  ];

  const featuredServices = [
    {
      title: 'Interior Painting',
      description: 'Professional interior painting services available throughout the Austin metro area.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/interior-painting'
    },
    {
      title: 'Exterior Painting',
      description: 'Weather-resistant exterior painting designed for Central Texas climate conditions.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/exterior-painting'
    },
    {
      title: 'Cabinet Painting',
      description: 'Kitchen and bathroom cabinet painting services across all service areas.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/cabinet-refinishing'
    },
    {
      title: 'Commercial Painting',
      description: 'Professional commercial painting services for offices, retail spaces, and businesses.',
      image: 'https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/commercial'
    }
  ];

  return (
    <>
      <SEO
        title="Service Areas | Round Rock Metro Painting Services | Hill Country Painting"
        description="Hill Country Painting serves Austin, Round Rock (78664, 78665), Pflugerville, Cedar Park, Georgetown, and surrounding areas. Professional painting services throughout Central Texas."
        canonical="/service-areas"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' }
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-deep-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-900 leading-heading">
              Austin Metro Service Areas
            </h1>
            <p className="text-xl text-slate-600 leading-body">
              Hill Country Painting proudly serves the Austin metro area with professional residential and commercial painting services. Clean prep, crisp lines, reliable schedules for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Free Estimate
              </Link>
              <a href="tel:(512)240-2246" className="btn-outline">
                Call (512) 240-2246
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern H: Service Areas Grid */}
      <ServiceAreasSection
        title="Austin Areas We Serve"
        subtitle="Professional painting services throughout the Austin metro area"
        areas={allServiceAreas}
      />

      {/* Hub Areas Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Additional Austin Neighborhoods We Serve
            </h2>
            <p className="text-xl text-slate-600">
              Specialized painting services throughout Greater Austin's diverse communities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geoAreas.map((hub) => (
              <Link
                key={hub.slug}
                to={`/areas/${hub.slug}`}
                className="card p-6 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-deep-900 group-hover:text-primary-700 transition-colors">
                    {hub.name}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {hub.description}
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  View {hub.neighborhoods.length} neighborhoods →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available in All Areas */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Our Services Throughout Austin
            </h2>
            <p className="text-xl text-slate-600">
              Complete painting solutions available in all service areas
            </p>
          </div>
          
          <div className="space-y-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <img
                      src={service.image}
                      alt={`${service.title} Austin - Hill Country Painting professional service`}
                      width="400"
                      height="250"
                      className="w-full h-52 object-cover rounded-lg"
                    />
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-bold text-deep-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-body text-lg">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-deep-100 text-deep-700 rounded-full text-sm font-medium">
                        Greater Austin Area
                      </span>
                      <span className="px-3 py-1 bg-deep-100 text-deep-700 rounded-full text-sm font-medium">
                        Free Estimates
                      </span>
                      <span className="px-3 py-1 bg-deep-100 text-deep-700 rounded-full text-sm font-medium">
                        2-Year Warranty
                      </span>
                    </div>
                    <a href={service.link} className="btn-secondary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern A: Stats */}
      <StatsAndTrust 
        stats={[
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">15</div>,
            value: "15+",
            label: "Service Areas"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">★</div>,
            value: "Local",
            label: "Austin Business"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>,
            value: "Insured",
            label: "Professionals"
          }
        ]}
      />

      {/* Pattern I: CTA Banner */}
      <CTABanner
        title="Ready to Get Started in Your Austin Area?"
        subtitle="Contact us today for a free estimate anywhere in Austin"
        primaryCTA={{
          text: 'Get Free Estimate',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'View Gallery',
          href: '/gallery'
        }}
      />
    </>
  );
};

export default ServiceAreas;