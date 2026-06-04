import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

type PaintingGuideLinksSurface = 'white' | 'gray';

interface PaintingGuideLinksProps {
  surface?: PaintingGuideLinksSurface;
}

const guides = [
  {
    title: 'Best Austin Exterior House Painters',
    href: '/blog/how-to-determine-the-best-austin-exterior-house-painters',
    description: 'How Austin homeowners can compare exterior painters by prep, reviews, warranty, and local project management.'
  },
  {
    title: 'Recommended Home Exterior Painters',
    href: '/blog/recommendations-on-home-exterior-painters',
    description: 'What to look for in an exterior painting estimate before choosing a contractor for a Central Texas home.'
  },
  {
    title: 'Four Types of Paint',
    href: '/blog/what-are-the-4-types-of-paint',
    description: 'A practical guide to acrylic, oil-based, enamel, and specialty coatings for Austin painting projects.'
  },
  {
    title: 'October Exterior Painting',
    href: '/blog/is-october-too-late-to-paint-outside',
    description: 'When fall exterior painting works in Austin and what crews check before applying coatings.'
  }
];

const PaintingGuideLinks: React.FC<PaintingGuideLinksProps> = ({ surface = 'gray' }) => {
  const sectionClass = surface === 'white' ? 'bg-white' : 'bg-brand-gray-50';

  return (
    <section className={`section-padding ${sectionClass}`} aria-labelledby="painting-guide-links-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-3 text-brand-azureDark font-semibold mb-3">
            <BookOpen className="w-5 h-5" aria-hidden="true" />
            <span>Austin Painting Guides</span>
          </div>
          <h2 id="painting-guide-links-heading" className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
            Planning Help for Exterior Painting Decisions
          </h2>
          <p className="text-lg text-brand-gray-600 leading-body">
            Read the most useful Hill Country Painting guides for comparing Austin house painters, choosing exterior coatings, and timing work around Central Texas conditions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              to={guide.href}
              className="group h-full rounded-lg border border-brand-regentGray20 bg-white p-5 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-azure"
            >
              <h3 className="text-lg font-bold text-brand-gray-900 group-hover:text-brand-azureDark transition-colors mb-3">
                {guide.title}
              </h3>
              <p className="text-sm text-brand-gray-600 leading-relaxed mb-4">
                {guide.description}
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-brand-azureDark">
                Read guide
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingGuideLinks;
