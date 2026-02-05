import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface NextStepsProps {
  title?: string;
  description?: string;
  serviceTitle?: string;
  serviceDescription?: string;
  serviceLink?: string;
  className?: string;
}

const NextStepsSection = ({
  title = "Let's Discuss Your Project",
  description = "We'll visit your property, review the scope, and provide transparent pricing with no obligation.",
  serviceTitle,
  serviceDescription,
  serviceLink,
  className = ""
}: NextStepsProps) => {
  return (
    <section className={`section-padding bg-brand-coral ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-brand-azureDark">
            {title}
          </h2>
          <p className="text-xl text-brand-gray-700">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary CTA - Contact */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-brand-azure/20 hover:border-brand-azure hover:shadow-xl transition-all">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-brand-azure/10 rounded-xl flex items-center justify-center">
                <Phone className="w-7 h-7 text-brand-azure" />
              </div>
              <h3 className="text-2xl font-bold text-brand-azureDark">Schedule a Consultation</h3>
              <p className="text-brand-gray-700 leading-relaxed">
                We'll visit your property, review the scope, answer questions, and provide a detailed written estimate. No obligation.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors shadow-sm"
                >
                  Request Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:(512)240-2246"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-azureDark text-brand-azureDark hover:bg-brand-azureDark hover:text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call (512) 240-2246
                </a>
              </div>
            </div>
          </div>

          {/* Related Service */}
          {serviceTitle && serviceLink && (
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-brand-gray-300/50 hover:border-brand-gray-400 hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-brand-gray-100 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-brand-azureDark" />
                </div>
                <h3 className="text-2xl font-bold text-brand-azureDark">{serviceTitle}</h3>
                <p className="text-brand-gray-700 leading-relaxed">
                  {serviceDescription || `Learn more about our ${serviceTitle.toLowerCase()} services.`}
                </p>
                <Link
                  to={serviceLink}
                  className="inline-flex items-center text-brand-azure font-semibold hover:text-brand-azureDark transition-colors pt-2"
                >
                  Learn More About This Service
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

          {/* Default - Services Overview */}
          {!serviceTitle && (
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-brand-gray-300/50 hover:border-brand-gray-400 hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-brand-gray-100 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-brand-azureDark" />
                </div>
                <h3 className="text-2xl font-bold text-brand-azureDark">Explore Our Services</h3>
                <p className="text-brand-gray-700 leading-relaxed">
                  Discover our complete range of professional painting services for residential and commercial properties.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-brand-azure font-semibold hover:text-brand-azureDark transition-colors pt-2"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
