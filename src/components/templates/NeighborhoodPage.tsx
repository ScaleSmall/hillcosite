import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowLeft, Paintbrush } from 'lucide-react';
import SEO from '../SEO';
import GoogleMapEmbed from '../GoogleMapEmbed';
import { businessConfig } from '../../config/business';
import type { HubArea, Neighborhood } from '../../data/geoAreas';

interface NeighborhoodPageProps {
  hub: HubArea;
  neighborhood: Neighborhood;
}

const NeighborhoodPage: React.FC<NeighborhoodPageProps> = ({ hub, neighborhood }) => {
  const pageTitle = `Professional House Painting in ${neighborhood.name} | Hill Country Painting`;
  const mapQuery = `${neighborhood.name}, TX`;
  const canonical = `/areas/${hub.slug}/${neighborhood.slug}`;

  return (
    <>
      <SEO
        title={pageTitle}
        description={`${neighborhood.description} Part of ${hub.name} service area. Interior & exterior painting, cabinet refinishing. Free estimates and 2-year warranty.`}
        canonical={canonical}
        pageType="service"
        geoPlacename={neighborhood.name}
        service={{
          name: `House Painting in ${neighborhood.name}`,
          description: neighborhood.description,
          areaServed: [neighborhood.name]
        }}
        business={{
          name: businessConfig.name,
          type: 'PaintingContractor',
          telephone: businessConfig.phone,
          email: businessConfig.email,
          address: {
            addressLocality: businessConfig.address.addressLocality,
            addressRegion: businessConfig.address.addressRegion,
            addressCountry: businessConfig.address.addressCountry
          }
        }}
      />

      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hub.heroImage}
            alt={`Professional house painting in ${neighborhood.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-deep-900/90 via-deep-800/85 to-primary-900/90"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Link
              to={`/areas/${hub.slug}`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {hub.name}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-heading drop-shadow-lg">
              Professional House Painting in {neighborhood.name}
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
              {neighborhood.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Free Estimate
              </Link>
              <a
                href={`tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                {businessConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-primary-600 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-deep-900">
                  Serving {neighborhood.name}
                </h2>
              </div>
              <p className="text-lg text-slate-700">
                {neighborhood.name} is part of our {hub.name} service area. We provide professional painting services throughout this community.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-bold text-deep-900 mb-4">
                Why Choose Hill Country Painting for {neighborhood.name}?
              </h2>
              <p className="text-slate-700 mb-4">
                As trusted painting contractors serving {neighborhood.name}, we understand the unique needs of homes in this area. Our team delivers clean prep, crisp lines, and reliable schedules on every project.
              </p>
              <p className="text-slate-700">
                {hub.specialization}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-8 text-center">
              Our Services in {neighborhood.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/services/interior-painting"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-deep-900 mb-2">Interior Painting</h3>
                <p className="text-slate-700">
                  Expert color consultation and flawless application for your home's interior.
                </p>
              </Link>
              <Link
                to="/services/exterior-painting"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-deep-900 mb-2">Exterior Painting</h3>
                <p className="text-slate-700">
                  Premium exterior painting built for Texas weather and your home's protection.
                </p>
              </Link>
              <Link
                to="/services/cabinet-refinishing"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-deep-900 mb-2">Cabinet Painting</h3>
                <p className="text-slate-700">
                  Kitchen and bathroom cabinet painting for a fresh, updated look.
                </p>
              </Link>
              <Link
                to="/services/commercial"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-deep-900 mb-2">Commercial Painting</h3>
                <p className="text-slate-700">
                  Professional painting for offices, retail spaces, and commercial properties.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-deep-900 mb-6">
              Other Neighborhoods We Serve in {hub.name}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hub.neighborhoods
                .filter(n => n.slug !== neighborhood.slug)
                .map((n, index) => (
                  <Link
                    key={index}
                    to={`/areas/${hub.slug}/${n.slug}`}
                    className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-primary-50 hover:text-primary-900 transition-colors"
                  >
                    <Paintbrush className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{n.name}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-8 text-center">
              Find Us in {neighborhood.name}
            </h2>
            <GoogleMapEmbed query={mapQuery} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Paint Your {neighborhood.name} Home?
            </h2>
            <p className="text-xl text-white/90">
              Get your free estimate today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 hover:bg-slate-100 font-semibold rounded-lg transition-colors duration-200"
              >
                Request Free Estimate
              </Link>
              <a
                href={`tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-deep-900 text-white hover:bg-deep-800 font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {businessConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NeighborhoodPage;
