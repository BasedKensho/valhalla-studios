import React from 'react';
import { Globe2, Building2, CreditCard, Network } from 'lucide-react';
import { GoldButton, WhiteButton } from './ui/3D buttons';
import HighlightedText from './ui/HighlightedText';
import Carousel, { CarouselItem } from './ui/Carousel/carousel';

interface Solution {
  id: number;
  title: string;
  icon: React.ReactNode;
  features: string[];
  description: string;
  image: string;
  type: 'gold' | 'silver';
}

const solutions: Solution[] = [
  {
    id: 1,
    title: "Paraguay Elite",
    icon: <Globe2 className="h-8 w-8" />,
    features: ["Residency", "RUC", "Banking"],
    description: "Secure your financial freedom with Paraguay's premier tax residency program and comprehensive banking solutions.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    type: 'gold'
  },
  {
    id: 2,
    title: "Mexico Elite",
    icon: <Building2 className="h-8 w-8" />,
    features: ["Citizenship", "Residency", "Investment"],
    description: "Fast-track your path to North American citizenship through Mexico's exclusive investment programs.",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&q=80",
    type: 'silver'
  },
  {
    id: 3,
    title: "Panama Elite",
    icon: <Network className="h-8 w-8" />,
    features: ["Crypto-friendly banking", "Trusts"],
    description: "Access Panama's sophisticated banking system and establish robust asset protection structures.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
    type: 'gold'
  },
  {
    id: 4,
    title: "US Banking & Credit",
    icon: <CreditCard className="h-8 w-8" />,
    features: ["ITIN", "Bank Accounts", "Funding"],
    description: "Build your US credit profile and access the world's largest financial market.",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80",
    type: 'silver'
  },
  {
    id: 5,
    title: "Business Incorporation",
    icon: <Building2 className="h-8 w-8" />,
    features: ["US LLC", "UK LLP"],
    description: "Establish your global business presence with strategic company formations in key jurisdictions.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80",
    type: 'gold'
  },
  {
    id: 6,
    title: "Other Services",
    icon: <Globe2 className="h-8 w-8" />,
    features: ["Licenses", "Citizenship by Descent"],
    description: "Explore additional pathways to global citizenship and business opportunities.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    type: 'silver'
  }
];

const FirstClassSolutions = () => {
  const carouselItems: CarouselItem[] = solutions.map(solution => ({
    id: solution.id,
    content: (
      <div 
        className={`
          relative h-[600px] rounded-xl overflow-hidden
          transform-gpu transition-all duration-500
          hover:translate-y-[-8px]
          ${solution.type === 'gold'
            ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
            : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
          }
        `}
      >
        <div className="absolute inset-0">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className={`
            absolute inset-0 bg-gradient-to-b 
            ${solution.type === 'gold'
              ? 'from-[#0e0e0e]/80 via-[#B8860B]/30 to-[#0e0e0e]/95' 
              : 'from-[#0e0e0e]/80 via-[#DCDCDC]/30 to-[#0e0e0e]/95'
            }
          `} />
        </div>

        <div className="relative h-full p-8 flex flex-col justify-between">
          <div>
            <div className={`
              inline-flex items-center justify-center p-3 rounded-full mb-6
              backdrop-blur-sm
              ${solution.type === 'gold' 
                ? 'bg-[#B8860B]/90' 
                : 'bg-[#DCDCDC]/90'
              }
            `}>
              {solution.icon}
            </div>
            <h3 className={`
              text-2xl font-display mb-4 
              ${solution.type === 'gold' 
                ? 'text-[#B8860B]' 
                : 'text-[#DCDCDC]'
              }
              font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
            `}>
              {solution.title}
            </h3>
            <ul className="space-y-4 mb-6">
              {solution.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <span className={`
                    w-1.5 h-1.5 rounded-full mr-3
                    ${solution.type === 'gold' 
                      ? 'bg-[#B8860B] shadow-[0_0_8px_rgba(184,134,11,0.5)]' 
                      : 'bg-[#DCDCDC] shadow-[0_0_8px_rgba(220,220,220,0.5)]'
                    }
                  `} />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-white/90 mb-8 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              {solution.description}
            </p>
          </div>

          {solution.type === 'gold' ? (
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
    )
  }));

  return (
    <section className="py-20 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display text-center mb-16">
          First Class <HighlightedText text="SOLUTIONS" />
        </h2>

        <Carousel items={carouselItems} />
      </div>
    </section>
  );
};

export default FirstClassSolutions;