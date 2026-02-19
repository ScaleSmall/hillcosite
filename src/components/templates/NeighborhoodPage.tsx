/**
 * SURFACE ROLE SYSTEM IN USE:
 *
 * This template uses the intentional surface hierarchy defined in src/config/surfaceRoles.ts
 *
 * Surfaces used in this template:
 * - Base Canvas (bg-white): Introduction section with paragraphs, Other neighborhoods section
 * - Warm Surface (bg-brand-coral): Services section with white cards
 * - Neutral Surface (bg-brand-gray-50): Nearby areas section
 * - Emphasis Surface (bg-brand-azure): CTA section
 *
 * Surface Pattern: Hero (image) → White → Warm (coral cards) → White → Neutral (gray-50) → Azure CTA
 *
 * See src/config/surfaceRoles.ts for complete surface role documentation
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowLeft, Paintbrush, ExternalLink, Home } from 'lucide-react';
import SEO from '../SEO';
import GoogleMapEmbed from '../GoogleMapEmbed';
import LocalSignals from '../LocalSignals';
import Breadcrumbs from '../Breadcrumbs';
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
        description={`${neighborhood.description} Part of ${hub.name} service area. Interior & exterior painting, cabinet refinishing. Consultations available and 2-year warranty.`}
        canonical={canonical}
        pageType="service"
        geoPlacename={neighborhood.name}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: hub.name, url: `/areas/${hub.slug}` },
          { name: neighborhood.name, url: canonical }
        ]}
        service={{
          name: `House Painting in ${neighborhood.name}`,
          description: neighborhood.description,
          areaServed: [neighborhood.name]
        }}
      />

      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-brand-azure hover:text-brand-azureDark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2 rounded"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Service Areas</span>
            </Link>
            <span className="text-brand-gray-400">/</span>
            <Link
              to={`/areas/${hub.slug}`}
              className="inline-flex items-center gap-2 text-brand-azure hover:text-brand-azureDark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2 rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">{hub.name}</span>
            </Link>
          </div>
        </div>
      </div>

      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hub.heroImage}
            alt={`Professional house painting in ${neighborhood.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-900/90 via-brand-gray-800/85 to-brand-gray-900/90"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-heading drop-shadow-lg">
              Professional House Painting in {neighborhood.name}
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
              {neighborhood.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
              >
                Request a Consultation
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
            <div className="bg-brand-gray-50 p-6 rounded-lg border-l-4 border-brand-azure mb-8">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6 text-brand-azure" />
                <h2 className="text-2xl font-bold text-brand-gray-900">
                  Serving {neighborhood.name}
                </h2>
              </div>
              <p className="text-lg text-brand-gray-700">
                {neighborhood.name} is part of our {hub.name} service area. We provide professional painting services throughout this community.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-bold text-brand-gray-900 mb-4">
                Our Approach in {neighborhood.name}
              </h2>
              <p className="text-brand-gray-700 mb-4">
                We work throughout {neighborhood.name} with attention to the details that matter to residents: thorough surface preparation, clean work areas, predictable schedules, and respect for your home and neighbors.
              </p>
              <p className="text-brand-gray-700 mb-4">
                Projects are organized to minimize disruption. Equipment stays contained, music stays off, and crews arrive and leave as scheduled. You'll know what to expect each day.
              </p>
              <p className="text-brand-gray-700">
                {hub.specialization}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warm Surface - Services section with white cards */}
      <section className="py-16 bg-brand-coral">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-8 text-center">
              Our Services in {neighborhood.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to={hub.serviceLocationSlug ? `/interior-painting-${hub.serviceLocationSlug}` : '/services/interior-painting'}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Interior Painting</h3>
                <p className="text-brand-gray-700">
                  Color consultation and careful application for walls, trim, and ceilings.
                </p>
              </Link>
              <Link
                to={hub.serviceLocationSlug ? `/exterior-painting-${hub.serviceLocationSlug}` : '/services/exterior-painting'}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Exterior Painting</h3>
                <p className="text-brand-gray-700">
                  Thorough surface preparation and quality paints suited for Texas climate.
                </p>
              </Link>
              <Link
                to={hub.serviceLocationSlug ? `/cabinet-refinishing-${hub.serviceLocationSlug}` : '/services/cabinet-refinishing'}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Cabinet Painting</h3>
                <p className="text-brand-gray-700">
                  Kitchen and bathroom cabinet refinishing with durable finishes.
                </p>
              </Link>
              <Link
                to={hub.serviceLocationSlug ? `/commercial-painting-${hub.serviceLocationSlug}` : '/services/commercial'}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Commercial Painting</h3>
                <p className="text-brand-gray-700">
                  Painting for offices, retail, and commercial properties with coordinated scheduling.
                </p>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/services"
                className="text-brand-gray-700 hover:text-brand-azureDark font-medium underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure rounded"
              >
                View all painting services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LocalSignals
        city="Austin"
        state="TX"
        areaName={neighborhood.name}
        nearbyAreas={hub.neighborhoods.filter(n => n.slug !== neighborhood.slug).slice(0, 6).map(n => n.name)}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-6">
              Other Neighborhoods We Serve in {hub.name}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hub.neighborhoods
                .filter(n => n.slug !== neighborhood.slug)
                .map((n, index) => (
                  <Link
                    key={index}
                    to={`/areas/${hub.slug}/${n.slug}`}
                    className="flex items-center gap-2 p-3 bg-brand-gray-50 rounded-lg hover:bg-brand-gray-50 hover:text-brand-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
                  >
                    <Paintbrush className="w-4 h-4 text-brand-azure flex-shrink-0" />
                    <span className="text-sm font-medium">{n.name}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-gray-50">
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
              Find Us in {neighborhood.name}
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
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-azure hover:bg-brand-gray-100 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-azure"
              >
                Request a Consultation
              </Link>
              <a
                href={`tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-gray-900 text-white hover:bg-brand-gray-800 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-azure"
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
