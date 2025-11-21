import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';

const TikTokIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
  </svg>
);

const XIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Interior Painting', href: '/services/interior-painting' },
    { name: 'Exterior Painting', href: '/services/exterior-painting' },
    { name: 'Cabinet Painting', href: '/services/cabinet-refinishing' },
    { name: 'Commercial Painting', href: '/services/commercial' },
  ];

  const guides = [
    { name: 'Painting Costs Austin', href: '/guides/painting-costs-round-rock' },
    { name: 'Best Paint for Texas Heat', href: '/guides/best-paint-texas-heat' },
    { name: 'HOA Color Tips Austin', href: '/guides/hoa-color-tips-round-rock' },
    { name: 'How Often to Paint in Texas', href: '/guides/how-often-paint-central-texas' },
  ];

  const mainNavigation = [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Guides', href: '/guides/painting-costs-round-rock', hasDropdown: true },
    { name: 'Industry Insights', href: '/blog' },
    { name: 'Color Consult', href: '/color-consultation' },
    { name: 'Gallery', href: '/gallery' },
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Hill Country Painting Logo"
              className="h-12 lg:h-16 w-auto"
              width="240"
              height="64"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center flex-1 justify-evenly">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.name === 'Services') setIsServicesOpen(true);
                      if (item.name === 'Guides') setIsGuidesOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Services') setIsServicesOpen(false);
                      if (item.name === 'Guides') setIsGuidesOpen(false);
                    }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 text-base font-semibold transition-colors duration-200 whitespace-nowrap ${
                        (item.name === 'Services' && location.pathname.startsWith('/services')) ||
                        (item.name === 'Guides' && location.pathname.startsWith('/guides'))
                          ? 'text-deep-700'
                          : 'text-slate-700 hover:text-deep-700'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className="transition-transform duration-200" />
                    </Link>

                    {/* Services Dropdown */}
                    {item.name === 'Services' && isServicesOpen && (
                      <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-3 text-slate-700 hover:bg-deep-50 hover:text-deep-700 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Guides Dropdown */}
                    {item.name === 'Guides' && isGuidesOpen && (
                      <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                        {guides.map((guide) => (
                          <Link
                            key={guide.name}
                            to={guide.href}
                            className="block px-4 py-3 text-slate-700 hover:bg-deep-50 hover:text-deep-700 transition-colors"
                          >
                            {guide.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-base font-semibold transition-colors duration-200 whitespace-nowrap ${
                      location.pathname === item.href
                        ? 'text-deep-700'
                        : 'text-slate-700 hover:text-deep-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <a
              href="tel:(512)240-2246"
              className="flex items-center space-x-2 text-slate-700 hover:text-deep-700 transition-colors text-base font-semibold whitespace-nowrap"
            >
              <Phone size={18} />
              <span>(512) 240-2246</span>
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 whitespace-nowrap"
            >
              Free Estimate
            </Link>
            <div className="grid grid-cols-3 gap-1.5 items-center ml-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-slate-600 hover:text-deep-700 transition-colors flex items-center justify-center w-6 h-6"
                  aria-label={social.ariaLabel}
                >
                  <social.icon size={22} className="block shrink-0" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-deep-700 hover:bg-slate-50 transition-colors flex items-center justify-center ml-auto"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-6 space-y-1">
            {mainNavigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 text-base font-semibold transition-colors duration-200 ${
                    location.pathname === item.href || 
                    (item.name === 'Services' && location.pathname.startsWith('/services/')) ||
                    (item.name === 'Guides' && location.pathname.startsWith('/guides/'))
                      ? 'text-deep-700'
                      : 'text-slate-700 hover:text-deep-700'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Mobile Services Submenu */}
                {item.name === 'Services' && item.hasDropdown && (
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-2 text-sm transition-colors duration-200 ${
                          location.pathname === service.href
                            ? 'text-deep-700 font-medium'
                            : 'text-slate-600 hover:text-deep-700'
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
                
                {/* Mobile Guides Submenu */}
                {item.name === 'Guides' && item.hasDropdown && (
                  <div className="pl-4 space-y-1">
                    {guides.map((guide) => (
                      <Link
                        key={guide.name}
                        to={guide.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-2 text-sm transition-colors duration-200 ${
                          location.pathname === guide.href
                            ? 'text-deep-700 font-medium'
                            : 'text-slate-600 hover:text-deep-700'
                        }`}
                      >
                        {guide.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <div className="grid grid-cols-3 gap-0.5 pb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-deep-700 transition-colors"
                    aria-label={social.ariaLabel}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
              <a
                href="tel:(512)240-2246"
                className="flex items-center space-x-2 text-slate-700 font-semibold py-2"
              >
                <Phone size={18} />
                <span>(512) 240-2246</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;