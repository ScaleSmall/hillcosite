import React from 'react';
import { Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { usePricingData } from '../../hooks/usePricingData';
import { createTypicalHomeCostSchema } from '../../lib/paintingCostSchemas';

const TypicalHomeCosts = () => {
  const { data: pricingData } = usePricingData('painting-costs');

  const getCostFactor = (key: string, fallback: string) => {
    if (pricingData && pricingData[key]) {
      return pricingData[key].formatted;
    }
    return fallback;
  };

  const house1500Interior = getCostFactor('house_1500_interior', '$6,250 - $8,500');
  const house1500Exterior = getCostFactor('house_1500_exterior', '$6,750 - $10,500');
  const house2200Interior = getCostFactor('house_2200_interior', '$6,500 - $10,500');
  const house2200Exterior = getCostFactor('house_2200_exterior', '$8,500 - $14,000');
  const house3000Interior = getCostFactor('house_3000_interior', '$9,000 - $15,000');
  const house3000Exterior = getCostFactor('house_3000_exterior', '$12,000 - $20,000');

  const productSchema = createTypicalHomeCostSchema(pricingData);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
            Typical Full-Scope Austin Home Painting Costs
          </h2>
          <p className="text-xl text-brand-gray-600">
            Example ranges start at service-specific entry points and move with prep, protection, access, coatings, cleanup, and the written project plan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <Home className="w-12 h-12 text-brand-azureDark mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-2">1,500 sq ft</h3>
            <p className="text-brand-gray-600 mb-4">Full-scope Austin repaint with prep and protection</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Interior:</span>
                <span className="font-semibold text-brand-azureDark">{getCostFactor('house_1500_interior', '$6,250 - $8,500')}</span>
              </div>
              <div className="flex justify-between">
                <span>Exterior:</span>
                <span className="font-semibold text-brand-azure">{getCostFactor('house_1500_exterior', '$6,750 - $10,500')}</span>
              </div>
            </div>
          </div>

          <div className="card p-8 text-center border-2 border-brand-azureDark">
            <Home className="w-12 h-12 text-brand-azureDark mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-2">2,200 sq ft</h3>
            <p className="text-brand-gray-600 mb-4">Full-scope average Austin home with written scope</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Interior:</span>
                <span className="font-semibold text-brand-azureDark">{getCostFactor('house_2200_interior', '$6,500 - $10,500')}</span>
              </div>
              <div className="flex justify-between">
                <span>Exterior:</span>
                <span className="font-semibold text-brand-azure">{getCostFactor('house_2200_exterior', '$8,500 - $14,000')}</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="bg-brand-azureDark text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
          </div>

          <div className="card p-8 text-center">
            <Home className="w-12 h-12 text-brand-azureDark mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-2">3,000+ sq ft</h3>
            <p className="text-brand-gray-600 mb-4">Full-scope larger Austin home with detailed prep</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Interior:</span>
                <span className="font-semibold text-brand-azureDark">{getCostFactor('house_3000_interior', '$9,000 - $15,000')}</span>
              </div>
              <div className="flex justify-between">
                <span>Exterior:</span>
                <span className="font-semibold text-brand-azure">{getCostFactor('house_3000_exterior', '$12,000 - $20,000')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TypicalHomeCosts;
