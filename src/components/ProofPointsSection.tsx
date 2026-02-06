import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Clock, Phone } from 'lucide-react';

interface ProofPointsSectionProps {
  className?: string;
  surface?: 'white' | 'gray' | 'coral';
}

const ProofPointsSection = ({ className = '', surface = 'coral' }: ProofPointsSectionProps) => {
  const proofPoints = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: "350+",
      label: "Projects Completed",
      description: "Trusted by homeowners across Austin"
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      value: "2-Year",
      label: "Warranty",
      description: "Comprehensive coverage on all work"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      value: "Insured",
      label: "Local Crew",
      description: "Fully insured professionals"
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      value: "15+ Years",
      label: "Experience",
      description: "Established Austin painting experts"
    }
  ];

  const iconMap: { [key: string]: typeof Users } = {
    'Users': Users,
    'Award': Award,
    'Shield': Shield,
    'Clock': Clock
  };

  const surfaceClass = {
    white: 'bg-white',
    gray: 'bg-brand-gray-50',
    coral: 'bg-brand-coral'
  }[surface];

  return (
    <section className={`section-padding ${surfaceClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-azureDark">
            Why Austin Homeowners Choose Us
          </h2>
          <p className="text-xl text-brand-gray-700">
            Proven results you can trust
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {proofPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  {React.cloneElement(point.icon, { className: 'w-8 h-8 text-brand-azure' })}
                </div>
              </div>
              <div className="text-3xl font-bold mb-2 text-brand-azureDark">
                {point.value}
              </div>
              <div className="text-brand-azureDark font-semibold mb-2">
                {point.label}
              </div>
              <div className="text-sm text-brand-gray-700">
                {point.description}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure text-white font-semibold rounded-lg hover:bg-brand-azureDark transition-colors duration-200"
          >
            Request a Consultation
          </Link>
          <a
            href="tel:(512)240-2246"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-azureDark text-brand-azureDark font-semibold rounded-lg hover:bg-brand-azureDark hover:text-white transition-colors duration-200"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (512) 240-2246
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProofPointsSection;