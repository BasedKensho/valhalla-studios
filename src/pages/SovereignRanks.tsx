import React from 'react';
import { Crown, Building2, Star, Briefcase } from 'lucide-react';
import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';
import HighlightedText from '../components/ui/HighlightedText';

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
      description: "Perfect for digital entrepreneurs and remote workers looking to optimize their tax situation. This level provides the foundational tools for international business and banking, helping you legally reduce your tax burden while maintaining full compliance.",
      benefits: [
        "Eliminate your personal tax burden legally",
        "Build international business structures",
        "Access global banking solutions",
        "Establish business credit history"
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
      description: "Designed for successful entrepreneurs and investors seeking enhanced global mobility and asset protection. This level combines citizenship acquisition with sophisticated financial structuring.",
      benefits: [
        "Secure additional citizenship options",
        "Protect assets through legal structures",
        "Access premium banking services",
        "Create generational wealth vehicles"
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
      description: "Tailored for high-net-worth individuals focused on wealth preservation and generational transfer. This comprehensive solution ensures your assets are protected and your legacy is secured.",
      benefits: [
        "Create robust asset protection structures",
        "Establish multiple citizenship options",
        "Implement succession planning",
        "Access exclusive investment opportunities"
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
      description: "Ultra-high-net-worth solutions providing the ultimate in privacy, protection, and global mobility. Completely customized to your unique situation and requirements.",
      benefits: [
        "Custom-tailored sovereignty strategies",
        "Private family office services",
        "Exclusive global opportunities",
        "Dedicated concierge support"
      ],
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80",
      type: 'silver' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-display text-center mb-4">
          <HighlightedText text="SOVEREIGN RANKS" />
        </h1>
        <p className="text-center text-lg text-white/80 mb-16 max-w-3xl mx-auto">
          Choose your path to sovereignty with our comprehensive solutions tailored to your needs and goals.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ranks.map((rank, index) => (
            <div
              key={index}
              className={`
                relative rounded-xl overflow-hidden
                transform-gpu transition-all duration-500
                hover:translate-y-[-8px]
                ${rank.type === 'gold'
                  ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
                  : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
                }
                border border-white/10
                bg-gradient-to-br ${rank.type === 'gold'
                  ? 'from-[#B8860B]/10 to-[#B8860B]/5' 
                  : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5'
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

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`
                  absolute ${rank.type === 'gold' ? 'left-8' : 'right-8'} top-8
                  inline-flex items-center justify-center p-4 rounded-full
                  backdrop-blur-sm
                  ${rank.type === 'gold' 
                    ? 'bg-[#B8860B]/20 text-[#B8860B]' 
                    : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'
                  }
                `}>
                  {rank.icon}
                </div>

                <div className="pt-24">
                  <div className={`text-lg mb-2 ${
                    rank.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
                  }`}>
                    {rank.level}
                  </div>
                  <h3 className="text-2xl font-display text-white mb-2">
                    {rank.title}
                  </h3>
                  <p className="text-white/60 mb-6">
                    {rank.range}
                  </p>

                  <p className="text-white/80 mb-8">
                    {rank.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-display text-white mb-4">Features</h4>
                      <ul className="space-y-3">
                        {rank.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-white/80">
                            <Star className={`h-4 w-4 mr-2 ${
                              rank.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
                            }`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-display text-white mb-4">Benefits</h4>
                      <ul className="space-y-3">
                        {rank.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-white/80">
                            <Star className={`h-4 w-4 mr-2 ${
                              rank.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
                            }`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </div>
  );
};

export default SovereignRanks;