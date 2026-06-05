import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import { businessConfig } from '../config/business';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
  </svg>
);

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Color Consultation', href: '/color-consultation' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Free Estimate', href: '/free-estimate' },
  ];

  const services = [
    { name: 'Austin House Painters', href: '/house-painters-austin' },
    { name: 'Austin Exterior House Painters', href: '/exterior-painting-austin' },
    { name: 'Austin Interior Painters', href: '/interior-painting-austin' },
    { name: 'Austin Cabinet Painting', href: '/cabinet-refinishing-austin' },
    { name: 'Austin Commercial Painters', href: '/commercial-painting-austin' },
    { name: 'Interior Painting', href: '/services/interior-painting' },
    { name: 'Exterior Painting', href: '/services/exterior-painting' },
    { name: 'Cabinet Painting', href: '/services/cabinet-refinishing' },
    { name: 'Commercial Painting', href: '/services/commercial' },
  ];

  const serviceAreas = [
    { name: 'Austin', href: '/service-areas/austin' },
    { name: 'Tarrytown', href: '/service-areas/tarrytown' },
    { name: 'Northwest Hills', href: '/service-areas/northwest-hills' },
    { name: 'West Lake Hills', href: '/service-areas/west-lake-hills' },
    { name: 'Westlake Highlands', href: '/service-areas/west-lake-highlands' },
    { name: 'Lakeway', href: '/service-areas/lakeway' },
    { name: 'Leander', href: '/service-areas/leander' },
    { name: 'Georgetown', href: '/service-areas/georgetown' },
    { name: 'Round Rock', href: '/service-areas/round-rock' },
    { name: 'Cedar Park', href: '/service-areas/cedar-park' },
    { name: 'North Austin', href: '/service-areas/north-austin' },
  ];

  const guides = [
    { name: 'Best Paint for Texas Heat', href: '/guides/best-paint-texas-heat' },
    { name: 'How Often to Paint', href: '/guides/how-often-paint-central-texas' },
    { name: 'Austin Painting Costs', href: '/guides/painting-costs-austin' },
    { name: 'HOA Color Tips', href: '/guides/hoa-color-tips-austin' },
  ];

  const serviceLocationLinks = [
    {
      service: 'Interior Painting',
      locations: [
        { name: 'Austin', href: '/interior-painting-austin' },
        { name: 'Tarrytown', href: '/interior-painting-tarrytown' },
        { name: 'Northwest Hills', href: '/interior-painting-northwest-hills' },
        { name: 'West Lake Hills', href: '/interior-painting-west-lake-hills' },
        { name: 'Westlake Highlands', href: '/interior-painting-west-lake-highlands' },
        { name: 'Lakeway', href: '/interior-painting-lakeway' },
        { name: 'Leander', href: '/interior-painting-leander' },
        { name: 'Georgetown', href: '/interior-painting-georgetown' },
        { name: 'Round Rock', href: '/interior-painting-round-rock' },
        { name: 'Cedar Park', href: '/interior-painting-cedar-park' },
        { name: 'North Austin', href: '/interior-painting-north-austin' },
        { name: 'Rollingwood', href: '/interior-painting-rollingwood' },
        { name: 'Bee Cave', href: '/interior-painting-bee-cave' },
        { name: 'Barton Creek', href: '/interior-painting-barton-creek' },
        { name: 'Steiner Ranch', href: '/interior-painting-steiner-ranch' },
        { name: 'Circle C Ranch', href: '/interior-painting-circle-c-ranch' },
      ]
    },
    {
      service: 'Exterior Painting',
      locations: [
        { name: 'Austin', href: '/exterior-painting-austin' },
        { name: 'Tarrytown', href: '/exterior-painting-tarrytown' },
        { name: 'Northwest Hills', href: '/exterior-painting-northwest-hills' },
        { name: 'West Lake Hills', href: '/exterior-painting-west-lake-hills' },
        { name: 'Westlake Highlands', href: '/exterior-painting-west-lake-highlands' },
        { name: 'Lakeway', href: '/exterior-painting-lakeway' },
        { name: 'Leander', href: '/exterior-painting-leander' },
        { name: 'Georgetown', href: '/exterior-painting-georgetown' },
        { name: 'Round Rock', href: '/exterior-painting-round-rock' },
        { name: 'Cedar Park', href: '/exterior-painting-cedar-park' },
        { name: 'North Austin', href: '/exterior-painting-north-austin' },
        { name: 'Rollingwood', href: '/exterior-painting-rollingwood' },
        { name: 'Bee Cave', href: '/exterior-painting-bee-cave' },
        { name: 'Barton Creek', href: '/exterior-painting-barton-creek' },
        { name: 'Steiner Ranch', href: '/exterior-painting-steiner-ranch' },
        { name: 'Circle C Ranch', href: '/exterior-painting-circle-c-ranch' },
      ]
    },
    {
      service: 'Cabinet Refinishing',
      locations: [
        { name: 'Austin', href: '/cabinet-refinishing-austin' },
        { name: 'Tarrytown', href: '/cabinet-refinishing-tarrytown' },
        { name: 'Northwest Hills', href: '/cabinet-refinishing-northwest-hills' },
        { name: 'West Lake Hills', href: '/cabinet-refinishing-west-lake-hills' },
        { name: 'Westlake Highlands', href: '/cabinet-refinishing-west-lake-highlands' },
        { name: 'Lakeway', href: '/cabinet-refinishing-lakeway' },
        { name: 'Leander', href: '/cabinet-refinishing-leander' },
        { name: 'Georgetown', href: '/cabinet-refinishing-georgetown' },
        { name: 'Round Rock', href: '/cabinet-refinishing-round-rock' },
        { name: 'Cedar Park', href: '/cabinet-refinishing-cedar-park' },
        { name: 'North Austin', href: '/cabinet-refinishing-north-austin' },
        { name: 'Rollingwood', href: '/cabinet-refinishing-rollingwood' },
        { name: 'Bee Cave', href: '/cabinet-refinishing-bee-cave' },
        { name: 'Barton Creek', href: '/cabinet-refinishing-barton-creek' },
        { name: 'Steiner Ranch', href: '/cabinet-refinishing-steiner-ranch' },
        { name: 'Circle C Ranch', href: '/cabinet-refinishing-circle-c-ranch' },
      ]
    },
    {
      service: 'Commercial Painting',
      locations: [
        { name: 'Austin', href: '/commercial-painting-austin' },
        { name: 'Tarrytown', href: '/commercial-painting-tarrytown' },
        { name: 'Northwest Hills', href: '/commercial-painting-northwest-hills' },
        { name: 'West Lake Hills', href: '/commercial-painting-west-lake-hills' },
        { name: 'Westlake Highlands', href: '/commercial-painting-west-lake-highlands' },
        { name: 'Lakeway', href: '/commercial-painting-lakeway' },
        { name: 'Leander', href: '/commercial-painting-leander' },
        { name: 'Georgetown', href: '/commercial-painting-georgetown' },
        { name: 'Round Rock', href: '/commercial-painting-round-rock' },
        { name: 'Cedar Park', href: '/commercial-painting-cedar-park' },
        { name: 'North Austin', href: '/commercial-painting-north-austin' },
        { name: 'Rollingwood', href: '/commercial-painting-rollingwood' },
        { name: 'Bee Cave', href: '/commercial-painting-bee-cave' },
        { name: 'Barton Creek', href: '/commercial-painting-barton-creek' },
        { name: 'Steiner Ranch', href: '/commercial-painting-steiner-ranch' },
        { name: 'Circle C Ranch', href: '/commercial-painting-circle-c-ranch' },
      ]
    },
  ];

  const hubAreas = [
    { name: 'Allandale / Northwest Hills', href: '/areas/allandale-and-northwest-hills' },
    { name: 'Barton Creek', href: '/areas/barton-creek' },
    { name: 'Circle C Ranch / Southwest Austin', href: '/areas/circle-c-ranch-and-southwest-austin' },
    { name: 'Downtown Austin', href: '/areas/downtown-austin-luxury' },
    { name: 'Cedar Park', href: '/areas/cedar-park' },
    { name: 'Georgetown', href: '/areas/georgetown' },
    { name: 'Lakeway / Bee Cave / Lake Travis', href: '/areas/lakeway-bee-cave-and-lake-travis' },
    { name: 'Leander', href: '/areas/leander' },
    { name: 'North Austin', href: '/areas/north-austin' },
    { name: 'Pemberton Heights / Old West Austin', href: '/areas/pemberton-heights-and-old-west-austin-historic-luxury' },
    { name: 'Round Rock', href: '/areas/round-rock' },
    { name: 'Steiner Ranch', href: '/areas/steiner-ranch-78732' },
    { name: 'Tarrytown', href: '/areas/tarrytown' },
    { name: 'West Lake Hills & Rollingwood', href: '/areas/west-lake-hills-and-rollingwood' },
  ];

  const socialLinks = [
    { name: 'TikTok', href: businessConfig.socialProfiles.tiktok, icon: TikTokIcon, ariaLabel: 'Follow us on TikTok' },
    { name: 'Instagram', href: businessConfig.socialProfiles.instagram, icon: Instagram, ariaLabel: 'Follow us on Instagram' },
    { name: 'YouTube', href: businessConfig.socialProfiles.youtube, icon: Youtube, ariaLabel: 'Subscribe on YouTube' },
    { name: 'X (Twitter)', href: businessConfig.socialProfiles.x, icon: XIcon, ariaLabel: 'Follow us on X' },
    { name: 'Facebook', href: businessConfig.socialProfiles.facebook, icon: Facebook, ariaLabel: 'Like us on Facebook' },
    { name: 'Google Business Profile', href: businessConfig.googleBusinessProfileUrl, icon: MapPin, ariaLabel: 'View our Google Business Profile' },
  ];

  return (
    <footer className="bg-brand-azureDark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info - NAP Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/brand/hill-country-painting-logo-reverse.png"
                alt="Hill Country Painting Logo"
                className="h-12 w-auto"
                width="150"
                height="150"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="border-l-2 border-brand-azure pl-3">
              <p className="font-semibold text-white text-lg">{businessConfig.name}</p>
              <p className="text-brand-gray-300 text-sm">Professional Painting Contractors</p>
            </div>
            <p className="text-brand-gray-300 text-sm">
              {businessConfig.tagline}
            </p>
            <div className="space-y-2 bg-gradient-to-br from-brand-azureDark80 to-brand-azureDark rounded-lg p-3 border border-brand-azure20">
              <a
                href={businessConfig.phoneHref}
                className="flex items-center space-x-2 text-white hover:text-brand-azure transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-brand-azure rounded"
              >
                <Phone size={16} />
                <span>{businessConfig.phone}</span>
              </a>
              <a
                href={`mailto:${businessConfig.email}`}
                className="flex items-center space-x-2 text-white hover:text-brand-azure transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure rounded"
              >
                <Mail size={16} />
                <span>{businessConfig.email}</span>
              </a>
              <div className="flex items-start space-x-2 text-brand-gray-300">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block">{businessConfig.address.displayShort}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-0.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray-300 hover:text-brand-azure transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure rounded"
                  aria-label={social.ariaLabel}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-brand-gray-300 hover:text-brand-azure transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-azure rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-brand-gray-300 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral rounded"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    to={area.href}
                    className="text-brand-gray-300 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral rounded"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <ul className="space-y-2">
              {guides.map((guide) => (
                <li key={guide.name}>
                  <Link
                    to={guide.href}
                    className="text-brand-gray-300 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral rounded"
                  >
                    {guide.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hub Areas */}
          <div>
            <ul className="space-y-2">
              {hubAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    to={area.href}
                    className="text-brand-gray-300 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral rounded"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Location-Specific Services */}
        <div className="border-t border-brand-coral/20 pt-8 mt-8">
          <p className="text-brand-gray-400 text-xs uppercase tracking-wider font-medium mb-4">Services by Location</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceLocationLinks.map((group) => (
              <div key={group.service}>
                <p className="text-brand-gray-300 text-xs font-semibold mb-2">{group.service}</p>
                <ul className="space-y-1">
                  {group.locations.map((loc) => (
                    <li key={loc.href}>
                      <Link
                        to={loc.href}
                        className="text-brand-gray-400 hover:text-brand-azure transition-colors text-xs focus:outline-none focus:ring-2 focus:ring-brand-azure rounded"
                      >
                        {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-brand-coral/20 pt-8 mt-8">
          <div className="text-brand-gray-300 text-sm text-center">
            <div className="mb-4">© {currentYear} Hill Country Painting. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy" className="hover:text-brand-azure transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure rounded">Privacy Policy</Link>
              <span className="text-brand-gray-400">•</span>
              <Link to="/terms" className="hover:text-brand-azure transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure rounded">Terms of Service</Link>
              <span className="text-brand-gray-400">•</span>
              <Link to="/eula" className="hover:text-brand-azure transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure rounded">EULA</Link>
              <span className="text-brand-gray-400">•</span>
              <Link to="/sitemap" className="hover:text-brand-azure transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure rounded">Sitemap</Link>
              <span className="text-brand-gray-400">•</span>
              <Link to="/financing" className="hover:text-brand-azure transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure rounded">Financing</Link>
              <span className="text-brand-gray-400">•</span>
              <Link to="/free-estimate" className="hover:text-brand-azure transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure rounded">Free Estimate</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
