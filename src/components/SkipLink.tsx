import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-brand-azure focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
