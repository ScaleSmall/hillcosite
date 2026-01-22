import React from 'react';
import { Home } from 'lucide-react';
import { usePricingData } from '../../hooks/usePricingData';

const TypicalHomeCosts = () => {
  const { data: pricingData } = usePricingData('painting-costs');

  const getCostFactor = (key: string, fallback: string) => {
    if (pricingData && pricingData[key]) {
      return pricingData[key].formatted;
    }
    return fallback;
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
            Typical Austin Home Painting Costs
          </h2>
          <p className="text-xl text-slate-600">
            Real examples from Austin neighborhoods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <Home className="w-12 h-12 text-deep-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-deep-900 mb-2">1,500 sq ft</h3>
            <p className="text-slate-600 mb-4">Typical Austin Ranch</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Interior:</span>
                <span className="font-semibold text-green-600">{getCostFactor('house_1500_interior', '$3,200 - $5,800')}</span>
              </div>
              <div className="flex justify-between">
                <span>Exterior:</span>
                <span className="font-semibold text-blue-600">{getCostFactor('house_1500_exterior', '$5,200 - $8,500')}</span>
              </div>
            </div>
          </div>

          <div className="card p-8 text-center border-2 border-deep-600">
            <Home className="w-12 h-12 text-deep-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-deep-900 mb-2">2,200 sq ft</h3>
            <p className="text-slate-600 mb-4">Average Austin Home</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Interior:</span>
                <span className="font-semibold text-green-600">{getCostFactor('house_2200_interior', '$4,400 - $7,200')}</span>
              </div>
              <div className="flex justify-between">
                <span>Exterior:</span>
                <span className="font-semibold text-blue-600">{getCostFactor('house_2200_exterior', '$6,800 - $11,000')}</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="bg-deep-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
          </div>

          <div className="card p-8 text-center">
            <Home className="w-12 h-12 text-deep-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-deep-900 mb-2">3,000+ sq ft</h3>
            <p className="text-slate-600 mb-4">Larger Austin Homes</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Interior:</span>
                <span className="font-semibold text-green-600">{getCostFactor('house_3000_interior', '$6,000 - $10,500')}</span>
              </div>
              <div className="flex justify-between">
                <span>Exterior:</span>
                <span className="font-semibold text-blue-600">{getCostFactor('house_3000_exterior', '$9,500 - $16,000')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypicalHomeCosts;
