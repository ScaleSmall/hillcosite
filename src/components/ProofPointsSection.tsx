import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Award, Users, Clock, Phone } from 'lucide-react';
import { renderTrustMetric } from '../lib/metricRotation';

interface ProofPointsSectionProps {
  className?: string;
}

const ProofPointsSection = ({ className = '' }: ProofPointsSectionProps) => {
  const location = useLocation();
  const trustMetric = renderTrustMetric({ seed: 'ProofPointsSection', pathname: location.pathname });

  const proofPoints = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: trustMetric,
      label: "Track Record",
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

  return (
    <section className={`section-padding bg-gradient-to-r from-deep-700 to-deep-800 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Austin Homeowners Choose Us
          </h2>
          <p className="text-xl text-white/90">
            Proven results you can trust
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {proofPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {point.icon}
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">
                {point.value}
              </div>
              <div className="text-white/90 font-medium mb-2">
                {point.label}
              </div>
              <div className="text-sm text-white/70">
                {point.description}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-deep-700 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200 mr-4"
          >
            Get Free Estimate
          </Link>
          <a 
            href="tel:(512)240-2246" 
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-deep-700 transition-colors duration-200"
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