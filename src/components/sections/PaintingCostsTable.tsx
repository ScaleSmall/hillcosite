import React from 'react';
import { usePricingData } from '../../hooks/usePricingData';

const PaintingCostsTable = () => {
  const { data: pricingData } = usePricingData('painting-costs');

  const getCostFactor = (key: string, fallback: string) => {
    if (pricingData && pricingData[key]) {
      return pricingData[key].formatted;
    }
    return fallback;
  };

  const costFactors = [
    {
      factor: 'Home Size',
      interior: getCostFactor('cost_factor_home_size_interior', '$2,500 - $6,000'),
      exterior: getCostFactor('cost_factor_home_size_exterior', '$4,000 - $10,000'),
      details: 'Based on square footage and room count'
    },
    {
      factor: 'Paint Quality',
      interior: getCostFactor('cost_factor_paint_quality_interior', '+$300 - $800'),
      exterior: getCostFactor('cost_factor_paint_quality_exterior', '+$500 - $1,200'),
      details: 'Premium paints last longer, better coverage'
    },
    {
      factor: 'Preparation Work',
      interior: getCostFactor('cost_factor_prep_work_interior', '+$200 - $600'),
      exterior: getCostFactor('cost_factor_prep_work_exterior', '+$800 - $2,000'),
      details: 'Repairs, priming, surface prep requirements'
    },
    {
      factor: 'Color Changes',
      interior: getCostFactor('cost_factor_color_changes_interior', '+$150 - $400'),
      exterior: getCostFactor('cost_factor_color_changes_exterior', '+$300 - $800'),
      details: 'Dark to light colors require additional coats'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
            Austin Painting Costs by Project Type
          </h2>
          <p className="text-xl text-slate-600">
            Based on local Austin projects
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-deep-700 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Cost Factor</th>
                <th className="px-6 py-4 text-center">Interior Range</th>
                <th className="px-6 py-4 text-center">Exterior Range</th>
                <th className="px-6 py-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {costFactors.map((factor, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-semibold text-deep-900">{factor.factor}</td>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">{factor.interior}</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-medium">{factor.exterior}</td>
                  <td className="px-6 py-4 text-slate-600">{factor.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PaintingCostsTable;
