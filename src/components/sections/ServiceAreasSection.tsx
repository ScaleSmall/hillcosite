import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceArea {
  name: string;
  href?: string;
}

interface ServiceAreasSectionProps {
  title?: string;
  subtitle?: string;
  areas: ServiceArea[];
}

const ServiceAreasSection = ({ title, subtitle, areas }: ServiceAreasSectionProps) => {
  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-brand-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, index) => (
            area.href ? (
              <Link
                key={index}
                to={area.href}
                className="px-6 py-3 bg-white hover:bg-brand-gray-50 text-brand-azureDark hover:text-brand-gray-800 border border-brand-gray-200 hover:border-brand-gray-300 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
              >
                {area.name}
              </Link>
            ) : (
              <span
                key={index}
                className="px-6 py-3 bg-white text-brand-azureDark border border-brand-gray-200 rounded-full font-medium"
              >
                {area.name}
              </span>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;