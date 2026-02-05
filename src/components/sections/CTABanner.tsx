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

  const isLightBg = backgroundColor === 'coral';
  const textColorClass = isLightBg ? 'text-brand-gray-900' : 'text-white';

  const primaryBtnClass = isLightBg
    ? "btn-primary"
    : "btn-primary bg-white text-brand-azureDark hover:bg-brand-gray-100";

  const secondaryBtnClass = isLightBg
    ? "btn-outline border-brand-gray-900 text-brand-gray-900 hover:bg-brand-gray-900 hover:text-white"
    : "btn-outline border-white text-white hover:bg-white hover:text-brand-azureDark";

  const borderClass = isLightBg ? 'border-brand-gray-300' : 'border-white/20';
  const badgeBgClass = isLightBg ? 'bg-brand-gray-900/10' : 'bg-white/20';
  const badgeTextClass = isLightBg ? 'text-brand-gray-700' : 'text-white/90';

  return (
    <section className={`section-padding ${bgClasses[backgroundColor]} ${textColorClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${isLightBg ? 'text-brand-gray-600' : 'text-white/90'}`}>
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
        <div className={`flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t ${borderClass}`}>
          <div className={`flex items-center space-x-2 ${badgeTextClass}`}>
            <div className={`w-6 h-6 ${badgeBgClass} rounded-full flex items-center justify-center`}>
              <span className="text-xs font-bold">✓</span>
            </div>
            <span className="text-sm font-medium">Insured Local Crew</span>
          </div>
          <div className={`flex items-center space-x-2 ${badgeTextClass}`}>
            <div className={`w-6 h-6 ${badgeBgClass} rounded-full flex items-center justify-center`}>
              <span className="text-xs font-bold">2</span>
            </div>
            <span className="text-sm font-medium">2-Year Warranty</span>
          </div>
          <div className={`flex items-center space-x-2 ${badgeTextClass}`}>
            <div className={`w-6 h-6 ${badgeBgClass} rounded-full flex items-center justify-center`}>
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