import React from 'react';
import { Helmet } from 'react-helmet-async';
import { usePricingData } from '../../hooks/usePricingData';
import { canonicalBusinessProvider } from '../../lib/businessSchema';

const PaintingCostsTable = () => {
  const { data: pricingData } = usePricingData('painting-costs');

  const getCostFactor = (key: string, fallback: string) => {
    if (pricingData && pricingData[key]) {
      return pricingData[key].formatted;
    }
    return fallback;
  };

  const extractPrice = (priceString: string): { min: number; max: number } | null => {
    const match = priceString.match(/\$?([\d,]+)\s*-\s*\$?([\d,]+)/);
    if (match) {
      return {
        min: parseInt(match[1].replace(/,/g, '')),
        max: parseInt(match[2].replace(/,/g, ''))
      };
    }
    return null;
  };

  const interiorHomeSize = getCostFactor('cost_factor_home_size_interior', '$6,000 - $10,000');
  const exteriorHomeSize = getCostFactor('cost_factor_home_size_exterior', '$6,000 - $14,000');

  const interiorPrice = extractPrice(interiorHomeSize);
  const exteriorPrice = extractPrice(exteriorHomeSize);

  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
  const priceValidDate = priceValidUntil.toISOString().split('T')[0];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "House Painting Services",
    "provider": canonicalBusinessProvider,
    "areaServed": {
      "@type": "City",
      "name": "Austin, Texas"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Painting Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Interior Painting",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Interior House Painting - Austin TX",
                "description": "Professional interior painting services for Austin homes",
                "image": "https://www.hillcopaint.com/hill-country-painting-austin-interior-hero.jpg",
                "provider": canonicalBusinessProvider
              },
              "seller": canonicalBusinessProvider,
              "price": String(interiorPrice?.min || 6000),
              "priceCurrency": "USD",
              "priceValidUntil": priceValidDate,
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Exterior Painting",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Exterior House Painting - Austin TX",
                "description": "Professional exterior painting services for Austin homes",
                "image": "https://www.hillcopaint.com/classic-home-exterior.jpg",
                "provider": canonicalBusinessProvider
              },
              "seller": canonicalBusinessProvider,
              "price": String(exteriorPrice?.min || 6000),
              "priceCurrency": "USD",
              "priceValidUntil": priceValidDate,
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      ]
    }
  };

  const costFactors = [
    {
      factor: 'Home Size',
      interior: getCostFactor('cost_factor_home_size_interior', '$6,000 - $10,000'),
      exterior: getCostFactor('cost_factor_home_size_exterior', '$6,000 - $14,000'),
      details: 'Full professional project pricing based on square footage, room count, and site conditions'
    },
    {
      factor: 'Paint Quality',
      interior: 'Included in $6,000+ scopes',
      exterior: 'Included in $6,000+ scopes',
      details: 'Premium coatings are specified as part of a complete written scope, not as a surprise add-on'
    },
    {
      factor: 'Preparation Work',
      interior: 'Scoped from $6,000+',
      exterior: 'Scoped from $6,000+',
      details: 'Repairs, priming, masking, sanding, and surface prep are reviewed before pricing is finalized'
    },
    {
      factor: 'Color Changes',
      interior: 'Scoped from $6,000+',
      exterior: 'Scoped from $6,000+',
      details: 'Major color changes may require extra coats and are built into the written estimate'
    }
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
            Austin Painting Costs by Full Project Scope
          </h2>
          <p className="text-xl text-brand-gray-600">
            Professional repaint scopes begin at $6,000 and include preparation, premium materials, protection, cleanup, and a written estimate
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-brand-azureDark text-white">
              <tr>
                <th className="px-6 py-4 text-left">Cost Factor</th>
                <th className="px-6 py-4 text-center">Interior Full-Scope Range</th>
                <th className="px-6 py-4 text-center">Exterior Full-Scope Range</th>
                <th className="px-6 py-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {costFactors.map((factor, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-brand-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-semibold text-brand-gray-900">{factor.factor}</td>
                  <td className="px-6 py-4 text-center text-brand-azureDark font-medium">{factor.interior}</td>
                  <td className="px-6 py-4 text-center text-brand-azure font-medium">{factor.exterior}</td>
                  <td className="px-6 py-4 text-brand-gray-600">{factor.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
};

export default PaintingCostsTable;
