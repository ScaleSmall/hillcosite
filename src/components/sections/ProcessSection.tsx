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
    <section className="section-padding bg-brand-gray-50">
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
            <div key={step.number} className="card p-8 text-center h-full flex flex-col">
              <div className="w-16 h-16 bg-brand-azureDark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-brand-gray-600 leading-body flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;