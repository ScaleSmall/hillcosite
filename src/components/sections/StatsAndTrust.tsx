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
    <section className={`section-padding ${surfaceClass} relative overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-azureDark10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-regentGray10 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {displayStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 relative">
                {/* Icon background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-azure20 to-brand-azureDark20 rounded-full w-16 h-16 mx-auto group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  {stat.icon}
                </div>
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