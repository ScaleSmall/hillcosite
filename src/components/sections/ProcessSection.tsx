import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle?: string;
  steps: Step[];
}

const ProcessSection = ({ title, subtitle, steps }: ProcessSectionProps) => {
  return (
    <section className="section-padding bg-brand-gray-50 border-t-4 border-b-4 border-brand-azure20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="card p-8 text-center h-full flex flex-col relative overflow-hidden group border-l-4 border-brand-azure hover:border-brand-azureDark transition-colors duration-300">
              {/* Highlight bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-azure via-brand-azureDark to-brand-regentGray opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-azureDark to-brand-azure text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-brand-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-brand-gray-600 leading-body flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;