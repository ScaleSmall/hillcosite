import React from 'react';
import { ExternalLink, Mail, MapPin, Navigation, Phone, Star } from 'lucide-react';
import GoogleMapEmbed from './GoogleMapEmbed';
import { businessConfig } from '../config/business';

const NAPMapSection = () => {
  const priorityServiceAreas = [
    'Austin',
    'West Lake Hills',
    'Rollingwood',
    'Tarrytown',
    'Lakeway',
    'Bee Cave',
    'Barton Creek',
    'Circle C Ranch',
    'Northwest Hills',
    'Cedar Park',
    'Round Rock',
    'Georgetown',
    'Leander'
  ];
  const googleTrustLinks = [
    {
      label: 'Google Business Profile',
      description: 'Confirm our Austin painting service details on Google.',
      icon: ExternalLink
    },
    {
      label: 'Google reviews',
      description: 'Read customer feedback from local painting projects.',
      icon: Star
    },
    {
      label: 'Directions on Google Maps',
      description: 'Open the service-area map and profile listing.',
      icon: Navigation
    }
  ];

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
                  <p className="text-brand-gray-600">
                    {businessConfig.name}<br />
                    Serving {businessConfig.serviceArea}
                  </p>
                  <p className="text-sm text-brand-gray-500 mt-2 leading-relaxed">
                    Interior painting, exterior painting, cabinet refinishing, and commercial painting across the Austin metro.
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
                    href={businessConfig.phoneHref}
                    className="text-brand-azure hover:text-brand-azureDark font-medium transition-colors"
                  >
                    {businessConfig.phone}
                  </a>
                  <p className="text-sm text-brand-gray-500 mt-1">
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

              <div className="pt-6 border-t border-brand-gray-200">
                <p className="text-brand-gray-600 leading-relaxed">
                  Serving Greater Austin homeowners, HOAs, property managers, and businesses with professional painting services.
                  Contact us today for a consultation on your project.
                </p>
                <p className="text-sm text-brand-gray-500 mt-3 leading-relaxed">
                  Priority service areas include {priorityServiceAreas.join(', ')}.
                </p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {googleTrustLinks.map(({ label, description, icon: Icon }) => (
                    <a
                      key={label}
                      href={businessConfig.googleBusinessProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-lg border border-brand-gray-200 bg-white p-4 text-left transition-colors hover:border-brand-azure focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
                    >
                      <span className="flex items-center gap-2 text-sm font-semibold text-brand-gray-900 group-hover:text-brand-azureDark">
                        <Icon className="h-4 w-4 text-brand-azure" aria-hidden="true" />
                        {label}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-brand-gray-500">
                        {description}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <GoogleMapEmbed
              query={`${businessConfig.name} Austin TX`}
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
