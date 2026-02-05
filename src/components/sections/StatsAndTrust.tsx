import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatsAndTrustProps {
  stats?: Stat[];
  surface?: 'white' | 'gray' | 'coral';
}

const StatsAndTrust = ({ stats, surface = 'gray' }: StatsAndTrustProps) => {
  const defaultStats: Stat[] = [
    {
      icon: <Users className="w-8 h-8 text-brand-azureDark" />,
      value: "350+",
      label: "Projects Completed"
    },
    {
      icon: <Award className="w-8 h-8 text-brand-azureDark" />,
      value: "2-Year",
      label: "Warranty"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-azureDark" />,
      value: "Insured",
      label: "Local Crew"
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-azureDark" />,
      value: "15+",
      label: "Years Experience"
    }
  ];

  const displayStats = stats || defaultStats;

  const surfaceClass = {
    white: 'bg-white',
    gray: 'bg-brand-gray-50',
    coral: 'bg-brand-coral'
  }[surface];

  return (
    <section className={`section-padding ${surfaceClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {displayStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-brand-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsAndTrust;