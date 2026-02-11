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
  backgroundColor?: 'primary' | 'secondary' | 'accent' | 'coral';
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
    accent: 'bg-brand-coral',
    coral: 'bg-brand-coral'
  };

  const isLightBg = backgroundColor === 'coral' || backgroundColor === 'accent';
  const textColorClass = isLightBg ? 'text-brand-azureDark' : 'text-white';

  const primaryBtnClass = isLightBg
    ? "btn-primary"
    : "bg-white text-brand-azureDark hover:bg-brand-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200";

  const secondaryBtnClass = isLightBg
    ? "border-2 border-brand-azureDark text-brand-azureDark hover:bg-brand-azureDark hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
    : "border-2 border-white text-white hover:bg-white hover:text-brand-azureDark font-semibold px-8 py-4 rounded-lg transition-colors duration-200";

  const borderClass = isLightBg ? 'border-brand-azureDark/20' : 'border-white/20';
  const badgeBgClass = isLightBg ? 'bg-white' : 'bg-white/20';
  const badgeTextClass = isLightBg ? 'text-brand-azureDark' : 'text-white';

  return (
    <section className={`section-padding ${bgClasses[backgroundColor]} ${textColorClass} border-t-4 ${isLightBg ? 'border-brand-azure' : 'border-brand-azure40'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${isLightBg ? 'text-brand-gray-700' : 'text-white'}`}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryCTA.href} className={primaryBtnClass}>
            {primaryCTA.text}
          </Link>
          {secondaryCTA && (
            secondaryCTA.href.startsWith('tel:') ? (
              <a href={secondaryCTA.href} className={secondaryBtnClass}>
                {secondaryCTA.text}
              </a>
            ) : (
              <Link to={secondaryCTA.href} className={secondaryBtnClass}>
                {secondaryCTA.text}
              </Link>
            )
          )}
        </div>

        {/* Trust Badges */}
        <div className={`flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t ${borderClass}`}>
          <div className={`flex items-center space-x-2 ${badgeTextClass}`}>
            <div className={`w-8 h-8 ${badgeBgClass} rounded-full flex items-center justify-center shadow-md bg-gradient-to-br from-brand-azure20 to-brand-azureDark20`}>
              <span className={`text-sm font-bold ${isLightBg ? 'text-brand-azure' : 'text-brand-azure'}`}>✓</span>
            </div>
            <span className="text-sm font-semibold">Insured Local Crew</span>
          </div>
          <div className={`flex items-center space-x-2 ${badgeTextClass}`}>
            <div className={`w-8 h-8 ${badgeBgClass} rounded-full flex items-center justify-center shadow-md bg-gradient-to-br from-brand-azure20 to-brand-azureDark20`}>
              <span className={`text-sm font-bold ${isLightBg ? 'text-brand-azure' : 'text-brand-azure'}`}>2</span>
            </div>
            <span className="text-sm font-semibold">2-Year Warranty</span>
          </div>
          <div className={`flex items-center space-x-2 ${badgeTextClass}`}>
            <div className={`w-8 h-8 ${badgeBgClass} rounded-full flex items-center justify-center shadow-md bg-gradient-to-br from-brand-azure20 to-brand-azureDark20`}>
              <span className={`text-sm font-bold ${isLightBg ? 'text-brand-azure' : 'text-brand-azure'}`}>★</span>
            </div>
            <span className="text-sm font-semibold">3000+ Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;