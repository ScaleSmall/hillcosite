import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  title?: string;
  location?: string;
  services: RelatedService[];
  className?: string;
}

const RelatedServices = ({ 
  title = "Related Services", 
  location = "Austin", 
  services, 
  className = "" 
}: RelatedServicesProps) => {
  return (
    <section className={`section-padding bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-deep-900 mb-4">
            {title} in {location}
          </h2>
          <p className="text-lg text-slate-600">
            Complete your project with our comprehensive painting services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 hover:border-deep-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-deep-900 mb-2 group-hover:text-deep-700">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-deep-600 font-medium text-sm group-hover:text-deep-700">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;