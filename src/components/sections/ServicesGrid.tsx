import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageWithGeo from '../ImageWithGeo';

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServicesGridProps {
  services?: Service[];
  title?: string;
  subtitle?: string;
}

const ServicesGrid = ({ services, title, subtitle }: ServicesGridProps) => {
  const defaultServices: Service[] = [
    {
      title: "Interior Painting",
      description: "Transform your home's interior with professional painting that enhances every room.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/interior-painting"
    },
    {
      title: "Exterior Painting",
      description: "Protect and beautify your home's exterior with durable, weather-resistant finishes.",
      image: "/hill-country-home-exterior-painting.jpg",
      link: "/services/exterior-painting"
    },
    {
      title: "Cabinet Painting",
      description: "Transform your kitchen with professional cabinet painting at a fraction of replacement cost.",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/cabinet-refinishing"
    },
    {
      title: "Commercial Painting",
      description: "Professional painting services for offices, retail spaces, and commercial properties.",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/commercial"
    }
  ];

  const displayServices = services || defaultServices;

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <ImageWithGeo
                  src={service.image}
                  alt={`${service.title} Austin Texas - Hill Country Painting professional service`}
                  width="400"
                  height="250"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  location={{
                    name: 'Austin, TX',
                    latitude: 30.2672,
                    longitude: -97.7431,
                    region: 'Texas'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-body">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-brand-azureDark hover:text-brand-gray-800 font-medium transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;