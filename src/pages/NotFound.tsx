import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, Palette, Phone } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Hill Country Painting Austin"
        description="The page you're looking for doesn't exist. Visit our home page or contact Hill Country Painting for professional Austin painting services."
        robots="noindex, nofollow"
      />
      
      <section className="section-padding bg-brand-gray-50 min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-brand-coral text-brand-azureDark rounded-full text-sm font-medium">
                  Looking for Austin painting services?
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-brand-gray-900">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-gray-900">
                Page Not Found
              </h2>
              <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
                You've reached Hill Country Painting! Whether you came from Google, a city-specific link, or just browsing - we're here to help with all your Austin area painting needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                <Home className="w-5 h-5 mr-2" />
                View Our Services
              </Link>
              <Link to="/contact" className="btn-secondary">
                <Palette className="w-5 h-5 mr-2" />
                Request a Consultation
              </Link>
              <a href="tel:(512)240-2246" className="btn-outline">
                <Phone className="w-5 h-5 mr-2" />
                Call (512) 240-2246
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 max-w-lg mx-auto">
              <h3 className="font-semibold text-brand-gray-900 mb-3">
                We serve all Austin areas including:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-brand-gray-600">
                <span>• Round Rock</span>
                <span>• Pflugerville</span>
                <span>• Cedar Park</span>
                <span>• Georgetown</span>
              <span>• Hutto</span>
              <span>• Leander</span>
              <span>• Taylor</span>
                <span>• And more!</span>
              </div>
            </div>

            <div className="pt-8 border-t border-brand-gray-200">
              <h3 className="text-lg font-semibold text-brand-gray-900 mb-4">
                Our Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link to="/services/interior-painting" className="text-brand-azureDark hover:text-brand-azureDark transition-colors">
                  Interior Painting
                </Link>
                <Link to="/services/exterior-painting" className="text-brand-azureDark hover:text-brand-azureDark transition-colors">
                  Exterior Painting
                </Link>
                <Link to="/services/cabinet-refinishing" className="text-brand-azureDark hover:text-brand-azureDark transition-colors">
                  Cabinet Painting
                </Link>
                <Link to="/services/commercial" className="text-brand-azureDark hover:text-brand-azureDark transition-colors">
                  Commercial Painting
                </Link>
                <Link to="/gallery" className="text-brand-azureDark hover:text-brand-azureDark transition-colors">
                  Gallery
                </Link>
                <Link to="/testimonials" className="text-brand-azureDark hover:text-brand-azureDark transition-colors">
                  Testimonials
                </Link>
                <Link to="/faq" className="text-brand-azureDark hover:text-brand-azureDark transition-colors">
                  FAQ
                </Link>
                <Link to="/contact" className="text-brand-azureDark hover:text-brand-azureDark transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;