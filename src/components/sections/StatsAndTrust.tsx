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
      value: "3000+",
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
            <div key={index} className="text-center group p-6 rounded-lg hover:bg-brand-azure5 transition-colors duration-300">
              <div className="flex justify-center mb-4 relative">
                <div className="p-4 rounded-full bg-gradient-to-br from-brand-azure10 to-brand-azureDark10 group-hover:from-brand-azure20 group-hover:to-brand-azureDark20 transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-brand-gray-600 font-medium">
                {stat.label}
              </div>
              <div className="h-1 w-12 mx-auto mt-3 bg-gradient-to-r from-brand-azure to-brand-regentGray opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsAndTrust;