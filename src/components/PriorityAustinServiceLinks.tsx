import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { priorityAustinServiceLinks } from '../lib/priorityAustinServices';

type PriorityAustinServiceLinksSurface = 'white' | 'gray';

interface PriorityAustinServiceLinksProps {
  areaName: string;
  surface?: PriorityAustinServiceLinksSurface;
}

const surfaceClasses = {
  white: 'bg-white',
  gray: 'bg-brand-gray-50'
} as const;

const PriorityAustinServiceLinks = ({
  areaName,
  surface = 'white'
}: PriorityAustinServiceLinksProps) => (
  <section className={`section-padding ${surfaceClasses[surface]}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 text-brand-azureDark font-semibold mb-3">
          <MapPin className="w-5 h-5" aria-hidden="true" />
          Austin Service Paths
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
          Compare Austin Painting Services for {areaName} Projects
        </h2>
        <p className="text-lg text-brand-gray-600 leading-body">
          Homeowners and property managers comparing house painters across Greater Austin can use these service pages to match the right project path before requesting an estimate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        {priorityAustinServiceLinks.map((service) => (
          <Link
            key={service.href}
            to={service.href}
            className="card p-5 hover:shadow-lg transition-shadow duration-200 group"
          >
            <h3 className="text-lg font-bold text-brand-gray-900 group-hover:text-brand-azureDark transition-colors mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-brand-gray-600 leading-body mb-4">
              {service.description}
            </p>
            <span className="inline-flex items-center text-sm font-semibold text-brand-azureDark">
              View service
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PriorityAustinServiceLinks;
