import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

type LocalSearchLinksVariant = 'home' | 'services' | 'areas';
type LocalSearchLinksSurface = 'white' | 'gray';

interface LocalSearchLinksProps {
  variant?: LocalSearchLinksVariant;
  surface?: LocalSearchLinksSurface;
}

const linkGroups = {
  home: {
    title: 'Popular Austin Painting Searches',
    subtitle: 'Fast paths to the most requested painting help across Greater Austin. Homeowners comparing house painters Austin wide can quickly reach the right local service page.',
    links: [
      { label: 'Austin house painters', href: '/service-areas/austin' },
      { label: 'house painters Austin', href: '/service-areas/austin' },
      { label: 'painting contractors Austin', href: '/services' },
      { label: 'Austin exterior house painters', href: '/services/exterior-painting' },
      { label: 'Austin interior painters', href: '/services/interior-painting' },
      { label: 'Austin cabinet painting', href: '/services/cabinet-refinishing' },
      { label: 'Austin commercial painters', href: '/services/commercial' }
    ]
  },
  services: {
    title: 'Find Painting Help by Need',
    subtitle: 'Choose the Austin painting service that matches your project. Property owners comparing painting contractors Austin wide can review each service before requesting a consultation.',
    links: [
      { label: 'Austin exterior house painters', href: '/services/exterior-painting' },
      { label: 'Austin interior painters', href: '/services/interior-painting' },
      { label: 'Austin cabinet painting', href: '/services/cabinet-refinishing' },
      { label: 'Austin commercial painters', href: '/services/commercial' },
      { label: 'Austin house painters', href: '/service-areas/austin' },
      { label: 'painting contractors Austin', href: '/services' },
      { label: 'house painters Austin', href: '/service-areas/austin' }
    ]
  },
  areas: {
    title: 'House Painters by Greater Austin Area',
    subtitle: 'Local painting crews for homes and businesses across the north and west Austin metro.',
    links: [
      { label: 'Austin house painters', href: '/service-areas/austin' },
      { label: 'Round Rock house painters', href: '/service-areas/round-rock' },
      { label: 'Cedar Park house painters', href: '/service-areas/cedar-park' },
      { label: 'Georgetown house painters', href: '/service-areas/georgetown' },
      { label: 'Leander house painters', href: '/service-areas/leander' },
      { label: 'North Austin house painters', href: '/service-areas/north-austin' }
    ]
  }
} as const;

const surfaceClasses = {
  white: 'bg-white',
  gray: 'bg-brand-gray-50'
} as const;

const LocalSearchLinks: React.FC<LocalSearchLinksProps> = ({
  variant = 'home',
  surface = 'white'
}) => {
  const group = linkGroups[variant];

  return (
    <section className={`section-padding ${surfaceClasses[surface]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-brand-azureDark font-semibold mb-3">
            <Search className="w-5 h-5" aria-hidden="true" />
            Local Painting Search
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
            {group.title}
          </h2>
          <p className="text-lg text-brand-gray-600 leading-body">
            {group.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {group.links.map((link) => (
            <Link
              key={link.href + link.label}
              to={link.href}
              className="flex items-center justify-between gap-4 px-5 py-4 bg-white border border-brand-gray-200 rounded-lg text-brand-gray-900 hover:border-brand-azure hover:text-brand-azureDark hover:shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
            >
              <span className="font-semibold">{link.label}</span>
              <ArrowRight className="w-4 h-4 text-brand-azureDark flex-shrink-0" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalSearchLinks;
