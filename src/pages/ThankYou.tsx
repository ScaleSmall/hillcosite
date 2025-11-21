import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const ThankYou = () => {
  return (
    <>
      <SEO
        title="Thank You - Hill Country Painting"
        description="Thank you for contacting Hill Country Painting. We'll be in touch soon with your free estimate."
        canonical="/thank-you"
        robots="noindex, follow"
      />
      
      <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50 min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto" />
              <h1 className="text-4xl md:text-5xl font-bold text-deep-900">
                Thank You!
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We've received your request and will contact you within 24 hours to schedule your free estimate. 
                Hill Country Painting looks forward to transforming your Austin home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Link>
              <a href="tel:(512)240-2246" className="btn-outline">
                <Phone className="w-5 h-5 mr-2" />
                Call Us: (512) 240-2246
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 max-w-lg mx-auto">
              <h3 className="font-semibold text-deep-900 mb-3">
                What happens next?
              </h3>
              <div className="space-y-2 text-sm text-slate-600">
                <p>✓ We'll call within 24 hours to schedule your free estimate</p>
                <p>✓ On-site consultation and detailed proposal</p>
                <p>✓ Professional painting with 2-year warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;