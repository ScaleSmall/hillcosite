/**
 * SURFACE ROLE SYSTEM IN USE:
 *
 * This template uses the intentional surface hierarchy defined in src/config/surfaceRoles.ts
 *
 * Surfaces used in this template:
 * - Base Canvas (bg-white): Neighborhoods section, Map section
 * - Warm Surface (bg-brand-coral): Services section with white cards
 * - Neutral Surface (bg-brand-gray-50): Nearby areas section
 * - Emphasis Surface (bg-brand-azure): CTA section
 *
 * Surface Pattern: Hero (image) → White → Warm (coral cards) → Neutral (gray-50) → White → Azure CTA
 *
 * See src/config/surfaceRoles.ts for complete surface role documentation
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Paintbrush, ExternalLink, Home, ArrowLeft } from 'lucide-react';
import SEO from '../SEO';
import GoogleMapEmbed from '../GoogleMapEmbed';
import LocalSignals from '../LocalSignals';
import Breadcrumbs from '../Breadcrumbs';
import { businessConfig } from '../../config/business';
import type { HubArea } from '../../data/geoAreas';
import { getNearbyAreas } from '../../data/geoAreas';

interface HubAreaPageProps {
  hub: HubArea;
}

const HubAreaPage: React.FC<HubAreaPageProps> = ({ hub }) => {
  const pageTitle = `Professional House Painting in ${hub.name} | Hill Country Painting`;
  const mapQuery = `${hub.name}, TX`;
  const canonical = `/areas/${hub.slug}`;

  const areaServed = [hub.name, ...hub.neighborhoods.map(n => n.name)];
  const nearbyAreas = getNearbyAreas(hub.slug);

  return (
    <>
      <SEO
        title={pageTitle}
        description={`${hub.description} Serving ${hub.neighborhoods.map(n => n.name).join(', ')}. Consultations available and 2-year warranty.`}
        canonical={canonical}
        pageType="service"
        geoPlacename={hub.name}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: hub.name, url: canonical }
        ]}
        service={{
          name: `House Painting in ${hub.name}`,
          description: hub.description,
          areaServed
        }}
      />

      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-brand-azure hover:text-brand-azureDark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2 rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Service Areas</span>
            </Link>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Service Areas', href: '/service-areas' },
                { label: hub.name }
              ]}
            />
          </div>
        </div>
      </div>

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hub.heroImage}
            alt={`Professional house painting in ${hub.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-900/85 via-brand-gray-800/80 to-brand-gray-900/85"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-heading drop-shadow-lg">
              Professional House Painting in {hub.name}
            </h1>
            {hub.zipCode && (
              <p className="text-xl text-white font-medium">
                Serving {hub.zipCode} and surrounding neighborhoods
              </p>
            )}
            <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
              {hub.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
              >
                Get Consultation
              </Link>
              <a
                href={`tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
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
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-brand-azure" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900">
                Serving These Neighborhoods
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {hub.neighborhoods.map((neighborhood, index) => (
                <Link
                  key={index}
                  to={`/areas/${hub.slug}/${neighborhood.slug}`}
                  className="flex items-center gap-3 text-lg text-brand-gray-700 bg-brand-gray-50 p-4 rounded-lg hover:bg-brand-gray-50 hover:text-brand-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
                >
                  <Paintbrush className="w-5 h-5 text-brand-azure flex-shrink-0" />
                  <span>{neighborhood.name}</span>
                </Link>
              ))}
            </div>
            {hub.specialization && (
              <div className="mt-8 p-6 bg-brand-gray-50 rounded-lg border-l-4 border-brand-azure">
                <p className="text-lg text-brand-gray-900">{hub.specialization}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Warm Surface - Services section with white cards */}
      <section className="py-16 bg-brand-coral">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-8 text-center">
              Our Painting Services in {hub.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/services/interior-painting"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Interior Painting</h3>
                <p className="text-brand-gray-700">
                  Transform your home's interior with expert color consultation and flawless application.
                </p>
              </Link>
              <Link
                to="/services/exterior-painting"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Exterior Painting</h3>
                <p className="text-brand-gray-700">
                  Protect and beautify your home's exterior with premium paints built for Texas climate.
                </p>
              </Link>
              <Link
                to="/services/cabinet-refinishing"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Cabinet Painting</h3>
                <p className="text-brand-gray-700">
                  Refresh your kitchen with professional cabinet painting.
                </p>
              </Link>
              <Link
                to="/services/commercial"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Commercial Painting</h3>
                <p className="text-brand-gray-700">
                  Professional commercial painting services with minimal disruption to your business.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LocalSignals
        city="Austin"
        state="TX"
        areaName={hub.name}
        zipCodes={hub.zipCode ? [hub.zipCode] : undefined}
        nearbyAreas={hub.neighborhoods.slice(0, 8).map(n => n.name)}
      />

      {nearbyAreas.length > 0 && (
        <section className="py-16 bg-brand-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-6">
                Nearby Areas We Serve
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearbyAreas.map((nearbyHub) => (
                  <Link
                    key={nearbyHub.slug}
                    to={`/areas/${nearbyHub.slug}`}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-brand-gray-50 hover:text-brand-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
                  >
                    <Home className="w-4 h-4 text-brand-azure flex-shrink-0" />
                    <span className="text-sm font-medium">{nearbyHub.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 p-6 bg-brand-gray-50 rounded-lg border-2 border-brand-gray-200">
              <h2 className="text-2xl font-bold text-brand-gray-900 mb-3">Find Us on Google Maps</h2>
              <p className="text-brand-gray-700 mb-4">
                View reviews, service details, and directions on our Google Business Profile.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={businessConfig.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View our Google Business Profile
                </a>
                <a
                  href={businessConfig.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-gray-900 hover:bg-brand-gray-800 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gray-700 focus:ring-offset-2"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  See reviews & directions
                </a>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-8 text-center">
              Find Us in {hub.name}
            </h2>
            <GoogleMapEmbed query={mapQuery} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-azure">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-azure hover:bg-brand-gray-100 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
              >
                Request Consultation
              </Link>
              <a
                href={`tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-gray-900 text-white hover:bg-brand-gray-800 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
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

export default HubAreaPage;
