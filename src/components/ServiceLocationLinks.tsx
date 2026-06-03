import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface ServiceLocationLinksProps {
  service: 'interior' | 'exterior' | 'cabinet' | 'commercial';
  currentLocation?: string;
}

const serviceNames = {
  interior: 'Interior Painting',
  exterior: 'Exterior Painting',
  cabinet: 'Cabinet Painting',
  commercial: 'Commercial Painting'
};

const serviceSlugs = {
  interior: 'interior-painting',
  exterior: 'exterior-painting',
  cabinet: 'cabinet-refinishing',
  commercial: 'commercial-painting'
};

const austinIntentLinks = {
  interior: {
    label: 'Austin interior painters',
    href: '/interior-painting-austin',
    description: 'Interior painting scope, prep notes, FAQs, and estimate options for Austin homes.'
  },
  exterior: {
    label: 'Austin exterior house painters',
    href: '/exterior-painting-austin',
    description: 'Exterior prep, weather exposure, siding, stucco, and finish planning for Austin homes.'
  },
  cabinet: {
    label: 'Austin cabinet painting',
    href: '/cabinet-refinishing-austin',
    description: 'Cabinet painting and refinishing details for Austin kitchens, baths, islands, and built-ins.'
  },
  commercial: {
    label: 'Austin commercial painters',
    href: '/commercial-painting-austin',
    description: 'Commercial painting scheduling, site planning, and finish guidance for Austin businesses.'
  }
} as const;

const locations = [
  { name: 'Austin', slug: 'austin' },
  { name: 'Tarrytown', slug: 'tarrytown' },
  { name: 'Northwest Hills', slug: 'northwest-hills' },
  { name: 'West Lake Hills', slug: 'west-lake-hills' },
  { name: 'Westlake Highlands', slug: 'west-lake-highlands' },
  { name: 'Lakeway', slug: 'lakeway' },
  { name: 'Leander', slug: 'leander' },
  { name: 'Georgetown', slug: 'georgetown' },
  { name: 'Round Rock', slug: 'round-rock' },
  { name: 'Cedar Park', slug: 'cedar-park' },
  { name: 'North Austin', slug: 'north-austin' }
];

const ServiceLocationLinks: React.FC<ServiceLocationLinksProps> = ({ service, currentLocation }) => {
  const serviceName = serviceNames[service];
  const serviceSlug = serviceSlugs[service];
  const austinIntentLink = austinIntentLinks[service];
  const showAustinIntentLink = currentLocation !== 'austin';

  const filteredLocations = currentLocation
    ? locations.filter(loc => loc.slug !== currentLocation)
    : locations;

  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brand-gray-900 mb-2">
            {serviceName} by Location
          </h2>
          <p className="text-brand-gray-600">
            Professional {serviceName.toLowerCase()} services throughout Austin, TX
          </p>
        </div>

        {showAustinIntentLink && (
          <div className="mb-6">
            <Link
              to={austinIntentLink.href}
              className="flex flex-col gap-2 rounded-lg border border-brand-azure bg-white p-5 text-brand-gray-900 hover:border-brand-azureDark hover:bg-brand-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
            >
              <span className="inline-flex items-center gap-2 font-semibold text-brand-azureDark">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                {austinIntentLink.label}
              </span>
              <span className="text-sm text-brand-gray-600">
                {austinIntentLink.description}
              </span>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredLocations.map((location) => (
            <Link
              key={location.slug}
              to={`/${serviceSlug}-${location.slug}`}
              className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-brand-gray-200 hover:border-brand-gray-300 hover:bg-brand-gray-50 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-brand-azure flex-shrink-0" />
              <span className="text-brand-gray-700 group-hover:text-brand-azureDark font-medium text-sm">
                {serviceName} {location.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLocationLinks;
