import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  option1: boolean | string;
  option2: boolean | string;
}

interface ComparisonSectionProps {
  title: string;
  subtitle?: string;
  option1Title: string;
  option2Title: string;
  option1Price: string;
  option2Price: string;
  option1Description: string;
  option2Description: string;
  comparisons: ComparisonItem[];
  ctaText?: string;
  ctaLink?: string;
  surface?: 'white' | 'gray' | 'coral';
}

const ComparisonSection = ({
  title,
  subtitle,
  option1Title,
  option2Title,
  option1Price,
  option2Price,
  option1Description,
  option2Description,
  comparisons,
  ctaText,
  ctaLink,
  surface = 'white'
}: ComparisonSectionProps) => {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600" />
      ) : (
        <X className="w-5 h-5 text-brand-coral" />
      );
    }
    return <span className="text-sm text-brand-gray-600">{value}</span>;
  };

  const surfaceClass = {
    white: 'bg-white',
    gray: 'bg-brand-gray-50',
    coral: 'bg-brand-coral'
  }[surface];

  return (
    <section className={`section-padding ${surfaceClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-brand-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Option 1 */}
          <div className="card p-8 border-2 border-brand-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-2">
                {option1Title}
              </h3>
              <div className="text-3xl font-bold text-brand-azureDark mb-2">
                {option1Price}
              </div>
              <p className="text-brand-gray-600">
                {option1Description}
              </p>
            </div>
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <span className="text-brand-gray-700">{item.feature}</span>
                  <div className="flex justify-center min-w-[24px]">
                    {renderValue(item.option1)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Option 2 */}
          <div className="card p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-2">
                {option2Title}
              </h3>
              <div className="text-3xl font-bold text-brand-gray-500 mb-2">
                {option2Price}
              </div>
              <p className="text-brand-gray-600">
                {option2Description}
              </p>
            </div>
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <span className="text-brand-gray-700">{item.feature}</span>
                  <div className="flex justify-center min-w-[24px]">
                    {renderValue(item.option2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {ctaText && ctaLink && (
          <div className="text-center mt-12">
            {ctaLink.startsWith('/') ? (
              <Link to={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
            ) : (
              <a href={ctaLink} className="btn-primary">
                {ctaText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ComparisonSection;