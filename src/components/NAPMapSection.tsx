import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import GoogleMapEmbed from './GoogleMapEmbed';
import { businessConfig } from '../config/business';

const NAPMapSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
              Contact Us
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gray-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-azure" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-1">Service Area</h3>
                  <p className="text-slate-600">
                    {businessConfig.name}<br />
                    Serving {businessConfig.address.displayFull}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gray-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-azure" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${businessConfig.phone}`}
                    className="text-brand-azure hover:text-brand-azureDark font-medium transition-colors"
                  >
                    {businessConfig.phone}
                  </a>
                  <p className="text-sm text-slate-500 mt-1">
                    Mon-Fri: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gray-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-azure" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="text-brand-azure hover:text-brand-azureDark font-medium transition-colors break-all"
                  >
                    {businessConfig.email}
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  Serving the Austin metro area with professional painting services.
                  Contact us today for a consultation on your project.
                </p>
              </div>
            </div>
          </div>

          <div>
            <GoogleMapEmbed
              query="Austin, TX"
              title={`${businessConfig.name} - Service Area Map`}
              height="450"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NAPMapSection;
