import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { renderTrustMetric } from '../../lib/metricRotation';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatsAndTrustProps {
  stats?: Stat[];
}

const StatsAndTrust = ({ stats }: StatsAndTrustProps) => {
  const location = useLocation();
  const trustMetric = renderTrustMetric({ seed: 'StatsAndTrust', pathname: location.pathname });

  const defaultStats: Stat[] = [
    {
      icon: <Users className="w-8 h-8 text-deep-600" />,
      value: trustMetric,
      label: "Track Record"
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