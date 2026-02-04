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
  cabinet: 'Cabinet Refinishing',
  commercial: 'Commercial Painting'
};

const serviceSlugs = {
  interior: 'interior-painting',
  exterior: 'exterior-painting',
  cabinet: 'cabinet-refinishing',
  commercial: 'commercial-painting'
};

const locations = [
  { name: 'Round Rock', slug: 'round-rock' },
  { name: 'Georgetown', slug: 'georgetown' },
  { name: 'Cedar Park', slug: 'cedar-park' },
  { name: 'Pflugerville', slug: 'pflugerville' },
  { name: 'Leander', slug: 'leander' },
  { name: 'Taylor', slug: 'taylor' },
  { name: 'Hutto', slug: 'hutto' },
  { name: 'Austin', slug: 'austin' },
  { name: 'West Lake Hills', slug: 'west-lake-hills' }
];

const ServiceLocationLinks: React.FC<ServiceLocationLinksProps> = ({ service, currentLocation }) => {
  const serviceName = serviceNames[service];
  const serviceSlug = serviceSlugs[service];

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
            Professional {serviceName.toLowerCase()} services throughout the Austin metro area
          </p>
        </div>
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
