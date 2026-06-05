import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface LocalServiceLinksProps {
  locationName: string;
  locationSlug: string;
  intro?: string;
}

const localServices = [
  {
    label: 'exterior house painters',
    pathPrefix: '/exterior-painting-',
    description: 'Exterior prep, repairs, caulking, and coatings selected for Central Texas sun and storm exposure.'
  },
  {
    label: 'interior painters',
    pathPrefix: '/interior-painting-',
    description: 'Interior walls, ceilings, trim, doors, and occupied-home repainting with careful protection and cleanup.'
  },
  {
    label: 'cabinet painting',
    pathPrefix: '/cabinet-refinishing-',
    description: 'Kitchen, bath, and built-in cabinet refinishing with durable finishes for daily use.'
  },
  {
    label: 'commercial painters',
    pathPrefix: '/commercial-painting-',
    description: 'Office, retail, and commercial painting planned around access, operations, and low-disruption scheduling.'
  }
];

const LocalServiceLinks = ({
  locationName,
  locationSlug,
  intro = 'Choose the local painting service that matches your project scope.'
}: LocalServiceLinksProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
            {locationName} Painting Services by Project Type
          </h2>
          <p className="text-xl text-brand-gray-600 leading-body">
            {intro}
          </p>
          <Link
            to="/house-painters-austin"
            className="mt-5 inline-flex items-center font-semibold text-brand-azureDark hover:text-brand-azure focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2 rounded"
          >
            Compare Austin house painters for every project type
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {localServices.map((service) => {
            const href = `${service.pathPrefix}${locationSlug}`;
            const label = `${locationName} ${service.label}`;

            return (
              <Link
                key={href}
                to={href}
                className="card p-6 hover:shadow-lg transition-shadow duration-200 group"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 group-hover:text-brand-azureDark transition-colors mb-3">
                  {label}
                </h3>
                <p className="text-brand-gray-600 leading-body mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-brand-azureDark font-medium">
                  Explore {locationName} service
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocalServiceLinks;
