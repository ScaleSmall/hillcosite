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
  title = "Ready to Get Started?",
  description = "Transform your space with professional painting services from Hill Country Painting.",
  serviceTitle,
  serviceDescription,
  serviceLink,
  className = ""
}: NextStepsProps) => {
  return (
    <section className={`section-padding bg-gradient-to-br from-brand-gray-50 to-slate-100 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary CTA - Contact */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900">Get Your Consultation</h3>
              <p className="text-slate-600">
                Schedule a consultation for your painting project. No obligation, just honest advice and transparent pricing.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Request Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="tel:(512)240-2246"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-azureDark text-brand-azureDark hover:bg-brand-gray-50 font-semibold rounded-lg transition-colors"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call (512) 240-2246
                </a>
              </div>
            </div>
          </div>

          {/* Related Service */}
          {serviceTitle && serviceLink && (
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-gray-100 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-brand-azureDark" />
                </div>
                <h3 className="text-xl font-bold text-brand-gray-900">{serviceTitle}</h3>
                <p className="text-slate-600">
                  {serviceDescription || `Learn more about our ${serviceTitle.toLowerCase()} services.`}
                </p>
                <Link
                  to={serviceLink}
                  className="inline-flex items-center text-brand-azureDark font-semibold hover:text-brand-azureDark transition-colors"
                >
                  Learn More About This Service
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Default - Services Overview */}
          {!serviceTitle && (
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-gray-100 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-brand-azureDark" />
                </div>
                <h3 className="text-xl font-bold text-brand-gray-900">Explore Our Services</h3>
                <p className="text-slate-600">
                  Discover our complete range of professional painting services for residential and commercial properties.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-brand-azureDark font-semibold hover:text-brand-azureDark transition-colors"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4" />
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
