import React from 'react';
import { Clock, Users, Award, Layout } from 'lucide-react';
import HighlightedText from './ui/HighlightedText';
import Carousel, { CarouselItem } from './ui/Carousel/carousel';

const Expectations = () => {
  const expectations = [
    {
      id: 1,
      icon: <Clock className="h-8 w-8" />,
      title: "Speed",
      bullets: [
        "Pay Premium, Save Time",
        "Right connections in place",
        "VIP priority service",
        "Unmatched efficiency"
      ],
      type: 'gold'
    },
    {
      id: 2,
      icon: <Users className="h-8 w-8" />,
      title: "Wealthy, Smart, Successful",
      bullets: [
        "High-caliber clientele",
        "Quality-focused mindset",
        "Value over price",
        "Results-driven approach"
      ],
      type: 'silver'
    },
    {
      id: 3,
      icon: <Award className="h-8 w-8" />,
      title: "Punctual, Professional, Seasoned",
      bullets: [
        "Multiple passports holders",
        "Experienced with residencies",
        "0% tax experts",
        "Sovereign Grandmasters"
      ],
      type: 'gold'
    },
    {
      id: 4,
      icon: <Layout className="h-8 w-8" />,
      title: "All your Setup in One Place",
      bullets: [
        "Panama Trust setup",
        "UAE Company formation",
        "Paraguay Tax Residency",
        "US LLC & Banking"
      ],
      type: 'silver'
    }
  ];

  const carouselItems: CarouselItem[] = expectations.map(expectation => ({
    id: expectation.id,
    content: (
      <div 
        className={`
          relative h-[500px] rounded-xl overflow-hidden
          transform-gpu transition-all duration-500
          hover:translate-y-[-8px]
          ${expectation.type === 'gold'
            ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
            : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
          }
          border border-white/10
          bg-gradient-to-br ${expectation.type === 'gold'
            ? 'from-[#B8860B]/10 to-[#B8860B]/5' 
            : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5'
          }
        `}
      >
        <div className="relative h-full p-8 flex flex-col items-center text-center">
          <div className={`
            inline-flex items-center justify-center p-4 rounded-full mb-6
            backdrop-blur-sm
            ${expectation.type === 'gold' 
              ? 'bg-[#B8860B]/20 text-[#B8860B]' 
              : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'
            }
            transform-gpu transition-all duration-300
            group-hover:scale-110 group-hover:translate-y-[-4px]
          `}>
            {expectation.icon}
          </div>

          <h3 className={`
            text-2xl font-display mb-8
            ${expectation.type === 'gold' 
              ? 'text-[#B8860B]' 
              : 'text-[#DCDCDC]'
            }
          `}>
            {expectation.title}
          </h3>

          <ul className="space-y-4 text-left w-full">
            {expectation.bullets.map((bullet, idx) => (
              <li 
                key={idx} 
                className="flex items-center text-white/80 text-lg"
                style={{ 
                  transitionDelay: `${idx * 50}ms`,
                  transform: 'translateZ(10px)'
                }}
              >
                <span className={`
                  w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0
                  ${expectation.type === 'gold' 
                    ? 'bg-[#B8860B]' 
                    : 'bg-[#DCDCDC]'
                  }
                `} />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Glowing Circle Effect */}
          <div className={`
            absolute -bottom-32 w-64 h-64 rounded-full blur-3xl opacity-20
            ${expectation.type === 'gold'
              ? 'bg-[#B8860B]'
              : 'bg-[#DCDCDC]'
            }
          `} />
        </div>
      </div>
    )
  }));

  return (
    <section className="py-20 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display text-center mb-16">
          Why <HighlightedText text="US?" />
        </h2>

        <Carousel 
          items={carouselItems}
          className="max-w-[1200px] mx-auto"
        />
      </div>
    </section>
  );
};

export default Expectations;