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
  // Note: Structured data is handled by SEO component to avoid duplicates
  const visibleItems = items[0]?.href === '/' && items[0]?.label.toLowerCase() === 'home'
    ? items.slice(1)
    : items;

  return (
    <>
      <nav aria-label="Breadcrumb" className={`min-w-0 text-sm ${className}`}>
        <ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-brand-gray-600">
          <li className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:text-brand-azureDark transition-colors">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {visibleItems.map((item, index) => (
            <li key={index} className="flex min-w-0 items-center">
              <ChevronRight className="mx-1 h-4 w-4 flex-shrink-0 text-brand-gray-400" />
              {item.href && index < visibleItems.length - 1 ? (
                <Link
                  to={String(item.href)}
                  className="min-w-0 break-words hover:text-brand-azureDark transition-colors"
                >
                  {String(item.label)}
                </Link>
              ) : (
                <span className="min-w-0 break-words font-medium text-brand-gray-800" aria-current="page">
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
