import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface MiniFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  surface?: 'white' | 'gray' | 'coral';
}

const MiniFAQ = ({ title, subtitle, faqs, surface = 'gray' }: MiniFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const surfaceClass = {
    white: 'bg-white',
    gray: 'bg-brand-gray-50',
    coral: 'bg-brand-coral'
  }[surface];

  return (
    <section className={`section-padding ${surfaceClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-brand-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-brand-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-inset"
              >
                <h3 className="font-semibold text-brand-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-azureDark flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-azureDark flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-4">
                  <p className="text-brand-gray-600 leading-body">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniFAQ;
