import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';
import { businessConfig, getDisplayAddress } from '../config/business';

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
  ];

  const services = [
    { name: 'Interior Painting', href: '/services/interior-painting' },
    { name: 'Exterior Painting', href: '/services/exterior-painting' },
    { name: 'Cabinet Painting', href: '/services/cabinet-refinishing' },
    { name: 'Commercial Painting', href: '/services/commercial' },
  ];

  const serviceAreas = [
    { name: 'Austin', href: '/service-areas/austin' },
    { name: 'Round Rock & Georgetown', href: '/service-areas/round-rock-georgetown' },
    { name: 'Pflugerville & Wells Branch', href: '/service-areas/pflugerville-wells-branch' },
    { name: 'Cedar Park', href: '/service-areas/cedar-park' },
    { name: 'Taylor & Hutto', href: '/service-areas/taylor-hutto' },
    { name: 'Leander', href: '/service-areas/leander' },
    { name: 'West Lake Hills', href: '/service-areas/west-lake-hills' },
  ];

  const guides = [
    { name: 'Painting Costs Guide', href: '/guides/painting-costs-round-rock' },
    { name: 'Best Paint for Texas Heat', href: '/guides/best-paint-texas-heat' },
    { name: 'HOA Color Tips', href: '/guides/hoa-color-tips-round-rock' },
    { name: 'How Often to Paint', href: '/guides/how-often-paint-central-texas' },
  ];

  const hubAreas = [
    { name: 'Allandale / Northwest Hills', href: '/areas/allandale-and-northwest-hills' },
    { name: 'Barton Creek', href: '/areas/barton-creek' },
    { name: 'Circle C Ranch / Southwest Austin', href: '/areas/circle-c-ranch-and-southwest-austin' },
    { name: 'Downtown Austin', href: '/areas/downtown-austin-luxury' },
    { name: 'Lakeway / Bee Cave / Lake Travis', href: '/areas/lakeway-bee-cave-and-lake-travis' },
    { name: 'Pemberton Heights / Old West Austin', href: '/areas/pemberton-heights-and-old-west-austin-historic-luxury' },
    { name: 'Steiner Ranch', href: '/areas/steiner-ranch-78732' },
    { name: 'Tarrytown', href: '/areas/tarrytown' },
    { name: 'West Lake Hills & Rollingwood', href: '/areas/west-lake-hills-and-rollingwood' },
  ];

  const socialLinks = [
    { name: 'TikTok', href: 'https://www.tiktok.com/@hillco_painting_austin', icon: TikTokIcon, ariaLabel: 'Follow us on TikTok' },
    { name: 'Instagram', href: 'https://www.instagram.com/hill_country_painting_austin/', icon: Instagram, ariaLabel: 'Follow us on Instagram' },
    { name: 'YouTube', href: 'https://www.youtube.com/@HillCountryPaintingAustin', icon: Youtube, ariaLabel: 'Subscribe on YouTube' },
    { name: 'X (Twitter)', href: 'https://x.com/Hill_Co_Paint', icon: XIcon, ariaLabel: 'Follow us on X' },
    { name: 'Facebook', href: 'https://www.facebook.com/Hillcopaint', icon: Facebook, ariaLabel: 'Like us on Facebook' },
    { name: 'LinkedIn', href: 'https://hillcopaint.com', icon: Linkedin, ariaLabel: 'Connect on LinkedIn' },
  ];

  return (
    <footer className="bg-deep-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info - NAP Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/brand/hill-country-painting-logo-reverse.png"
                alt="Hill Country Painting Logo"
                className="h-12 w-auto"
                width="144"
                height="48"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="border-l-2 border-primary-500 pl-3">
              <p className="font-semibold text-white text-lg">{businessConfig.name}</p>
              <p className="text-slate-300 text-sm">Professional Painting Contractors</p>
            </div>
            <p className="text-slate-300 text-sm">
              {businessConfig.tagline}
            </p>
            <div className="space-y-2 bg-deep-800/50 rounded-lg p-3">
              <a
                href={`tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center space-x-2 text-white hover:text-accent-400 transition-colors font-medium"
              >
                <Phone size={16} />
                <span>{businessConfig.phone}</span>
              </a>
              <a
                href={`mailto:${businessConfig.email}`}
                className="flex items-center space-x-2 text-white hover:text-accent-400 transition-colors"
              >
                <Mail size={16} />
                <span>{businessConfig.email}</span>
              </a>
              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block">{getDisplayAddress('full')}</span>
                  <span className="text-xs text-slate-400">Serving Greater Austin</span>
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
                  className="text-slate-300 hover:text-white transition-colors"
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
                    className="text-slate-300 hover:text-white transition-colors text-sm"
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
                    className="text-slate-300 hover:text-white transition-colors text-sm"
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
                    className="text-slate-300 hover:text-white transition-colors text-sm"
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
                    className="text-slate-300 hover:text-white transition-colors text-sm"
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
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-deep-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-300 text-sm text-center md:text-left">
              <div>© {currentYear} Hill Country Painting. All rights reserved.</div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span className="text-slate-500">•</span>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <span className="text-slate-500">•</span>
                <Link to="/eula" className="hover:text-white transition-colors">EULA</Link>
                <span className="text-slate-500">•</span>
                <Link to="/financing" className="hover:text-white transition-colors">Financing</Link>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link to="/contact" className="btn-primary">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;