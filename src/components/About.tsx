import React from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';
import Button3D from '../components/ui/Button3D';

const About = () => {
  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-[#B8860B] !important" />,
      number: "500+",
      label: "Satisfied Clients"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#DCDCDC] !important" />,
      number: "50+",
      label: "Countries Served"
    },
    {
      icon: <Award className="h-8 w-8 text-[#B8860B] !important" />,
      number: "20+",
      label: "Years Experience"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#DCDCDC] !important" />,
      number: "$2B+",
      label: "Assets Protected"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`
                text-center p-6 rounded-xl 
                border border-white/10 
                bg-gradient-to-br ${index % 2 === 0 
                  ? 'from-[#B8860B]/10 to-[#B8860B]/5 hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
                  : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5 hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
                }
                transform-gpu transition-all duration-300
                hover:border-white/20 hover:translate-y-[-8px]
                hover:bg-[#0e0e0e]/50
              `}
            >
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <div className={`text-3xl font-display mb-2 ${
                index % 2 === 0 ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
              }`}>
                {achievement.number}
              </div>
              <div className="text-white/60">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
