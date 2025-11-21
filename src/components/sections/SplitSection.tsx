import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

interface Benefit {
  text: string;
}

interface SplitSectionProps {
  title: string;
  description: string;
  benefits: Benefit[];
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const SplitSection = ({
  title,
  description,
  benefits,
  image,
  imageAlt,
  imageLeft = false,
  ctaText,
  ctaLink
}: SplitSectionProps) => {
  const ContentSection = () => (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-deep-900">
        {title}
      </h2>
      <p className="text-lg text-slate-600 leading-body">
        {description}
      </p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-deep-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700">{benefit.text}</span>
          </li>
        ))}
      </ul>
      {ctaText && ctaLink && (
        <div className="pt-4">
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
  );

  const ImageSection = () => (
    <div className="relative">
      <img
        src={image}
        alt={imageAlt}
        width="1200"
        height="800"
        className="w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  );

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imageLeft ? 'lg:grid-flow-col' : ''}`}>
          {imageLeft ? (
            <>
              <ImageSection />
              <ContentSection />
            </>
          ) : (
            <>
              <ContentSection />
              <ImageSection />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SplitSection;