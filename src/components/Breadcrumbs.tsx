import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  // Generate structured data for breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const listItem: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: String(item.label)
      };

      if (item.href) {
        listItem.item = `https://hillcopaint.com${String(item.href)}`;
      }

      return listItem;
    })
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex items-center space-x-2 text-slate-600">
          <li>
            <Link to="/" className="flex items-center hover:text-deep-700 transition-colors">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
              {item.href && index < items.length - 1 ? (
                <Link
                  to={String(item.href)}
                  className="hover:text-deep-700 transition-colors"
                >
                  {String(item.label)}
                </Link>
              ) : (
                <span className="text-slate-800 font-medium" aria-current="page">
                  {String(item.label)}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;