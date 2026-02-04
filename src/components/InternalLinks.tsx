import React from 'react';
import { Link } from 'react-router-dom';

interface InternalLink {
  title: string;
  description: string;
  href: string;
}

interface InternalLinksProps {
  links: InternalLink[];
  title?: string;
}

const InternalLinks: React.FC<InternalLinksProps> = ({ links, title = 'Related Resources' }) => {
  if (!links || links.length === 0) return null;

  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-gray-900 mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="card p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-brand-gray-900 mb-2">
                {link.title}
              </h3>
              <p className="text-brand-gray-600 text-sm">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
