import React from 'react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundColor?: 'primary' | 'secondary' | 'accent';
}

const CTABanner = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundColor = 'primary'
}: CTABannerProps) => {
  const bgClasses = {
    primary: 'bg-brand-azureDark',
    secondary: 'bg-brand-gray-900',
    accent: 'bg-brand-coral'
  };

  return (
    <section className={`section-padding ${bgClasses[backgroundColor]} text-white`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryCTA.href} className="btn-primary bg-white text-brand-azureDark hover:bg-brand-gray-100">
            {primaryCTA.text}
          </Link>
          {secondaryCTA && (
            secondaryCTA.href.startsWith('tel:') ? (
              <a href={secondaryCTA.href} className="btn-outline border-white text-white hover:bg-white hover:text-brand-azureDark">
                {secondaryCTA.text}
              </a>
            ) : (
              <Link to={secondaryCTA.href} className="btn-outline border-white text-white hover:bg-white hover:text-brand-azureDark">
                {secondaryCTA.text}
              </Link>
            )
          )}
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center space-x-2 text-white/90">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">✓</span>
            </div>
            <span className="text-sm font-medium">Insured Local Crew</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">2</span>
            </div>
            <span className="text-sm font-medium">2-Year Warranty</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">★</span>
            </div>
            <span className="text-sm font-medium">350+ Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;