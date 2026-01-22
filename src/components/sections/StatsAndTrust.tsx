import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatsAndTrustProps {
  stats?: Stat[];
}

const StatsAndTrust = ({ stats }: StatsAndTrustProps) => {
  const defaultStats: Stat[] = [
    {
      icon: <Users className="w-8 h-8 text-deep-600" />,
      value: "350+",
      label: "Projects Completed"
    },
    {
      icon: <Award className="w-8 h-8 text-deep-600" />,
      value: "2-Year",
      label: "Warranty"
    },
    {
      icon: <Shield className="w-8 h-8 text-deep-600" />,
      value: "Insured",
      label: "Local Crew"
    },
    {
      icon: <Clock className="w-8 h-8 text-deep-600" />,
      value: "15+",
      label: "Years Experience"
    }
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <img
            src="/winner_best_of_round_rock_2025_award.jpg"
            alt="Winner Best of Round Rock 2025 Award - Hill Country Painting"
            className="w-48 h-auto drop-shadow-2xl"
            width="192"
            height="192"
          />
          <p className="text-xl font-bold text-deep-900 mt-4">
            Award-Winning Service
          </p>
          <p className="text-slate-600 mt-2">
            Proudly serving Round Rock and the Greater Austin area
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {displayStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-deep-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">
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