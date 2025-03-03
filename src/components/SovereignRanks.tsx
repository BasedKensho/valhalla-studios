import React from 'react';
import { Crown, Building2, Briefcase, Star } from 'lucide-react';
import { GoldButton, WhiteButton } from './ui/3D buttons';
import HighlightedText from './ui/HighlightedText';

const SovereignRanks = () => {
  const ranks = [
    {
      icon: <Building2 className="h-12 w-12" />,
      level: "Level 1",
      title: "0% Taxes",
      range: "$50K - $250K/year",
      features: [
        "Paraguay/Dubai 0% Tax Residency",
        "US LLC",
        "UK LLP",
        "Credit Cards"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
      type: 'gold' as const
    },
    {
      icon: <Crown className="h-12 w-12" />,
      level: "Level 2",
      title: "Passports",
      range: "$250K - $1M/year",
      features: [
        "Second Citizenship",
        "Holdings",
        "Trusts",
        "Global Banking"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      type: 'silver' as const
    },
    {
      icon: <Star className="h-12 w-12" />,
      level: "Level 3",
      title: "Legacy",
      range: "$1M - $20M Net Worth",
      features: [
        "Wealth Protection",
        "Multiple Passports",
        "Trust Setup"
      ],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
      type: 'gold' as const
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      level: "Level 4",
      title: "Bespoke Solutions",
      range: "+$30M Net Worth",
      features: [
        "Exclusive Sovereignty Services",
        "VIP Consulting"
      ],
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80",
      type: 'silver' as const
    }
  ];

  return (
    <section className="py-20 bg-[#0e0e0e]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display text-center mb-16">
          Sovereign <HighlightedText text="RANKS" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ranks.map((rank, index) => (
            <div
              key={index}
              className={`
                relative h-[480px] rounded-xl overflow-hidden
                transform-gpu transition-all duration-500
                hover:translate-y-[-8px]
                ${rank.type === 'gold'
                  ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
                  : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
                }
              `}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={rank.image}
                  alt={rank.title}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className={`
                  absolute inset-0 bg-gradient-to-b 
                  ${rank.type === 'gold'
                    ? 'from-[#B8860B]/30 via-[#0e0e0e]/80 to-[#0e0e0e]/95' 
                    : 'from-[#DCDCDC]/30 via-[#0e0e0e]/80 to-[#0e0e0e]/95'
                  }
                `} />
              </div>

              {/* Icon */}
              <div className={`
                absolute ${rank.type === 'gold' ? 'left-4' : 'right-4'} top-4
                inline-flex items-center justify-center p-4 rounded-full
                backdrop-blur-sm
                ${rank.type === 'gold' 
                  ? 'bg-[#B8860B]/20 text-[#B8860B]' 
                  : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'
                }
              `}>
                {rank.icon}
              </div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col pt-24">
                <div className="mb-6">
                  <div className={`text-lg mb-2 ${
                    rank.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
                  }`}>
                    {rank.level}
                  </div>
                  <h3 className="text-2xl font-display text-white mb-2">
                    {rank.title}
                  </h3>
                  <p className="text-white/60">
                    {rank.range}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {rank.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/80">
                      <Star className={`h-4 w-4 mr-2 ${
                        rank.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {rank.type === 'gold' ? (
                  <GoldButton fullWidth>
                    Learn More
                  </GoldButton>
                ) : (
                  <WhiteButton fullWidth>
                    Learn More
                  </WhiteButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SovereignRanks;