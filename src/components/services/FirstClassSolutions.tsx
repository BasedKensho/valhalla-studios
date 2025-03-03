import React from 'react';
import { Globe2, Building2, CreditCard, Network, Briefcase, Star } from 'lucide-react';
import HighlightedText from '../ui/HighlightedText';
import Carousel, { CarouselItem } from '../ui/Carousel/carousel';

const FirstClassSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Paraguay Elite",
      icon: <Globe2 className="h-8 w-8" />,
      description: "Secure your financial freedom with Paraguay's premier tax residency program.",
      benefits: [
        "0% tax on foreign income",
        "Fast processing time",
        "Minimal physical presence",
        "Path to citizenship"
      ],
      features: ["Residency", "RUC", "Banking"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
      type: 'gold'
    },
    {
      id: 2,
      title: "Mexico Elite",
      icon: <Building2 className="h-8 w-8" />,
      description: "Fast-track your path to North American citizenship through Mexico's exclusive programs.",
      benefits: [
        "Rapid naturalization",
        "Visa-free travel",
        "Business opportunities",
        "Tax advantages"
      ],
      features: ["Citizenship", "Residency", "Investment"],
      image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&q=80",
      type: 'silver'
    },
    {
      id: 3,
      title: "Panama Elite",
      icon: <Network className="h-8 w-8" />,
      description: "Access Panama's sophisticated banking system and establish robust asset protection.",
      benefits: [
        "Private banking access",
        "Asset protection",
        "Business opportunities",
        "Tax advantages"
      ],
      features: ["Crypto-friendly banking", "Trusts"],
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
      type: 'gold'
    },
    {
      id: 4,
      title: "US Banking & Credit",
      icon: <CreditCard className="h-8 w-8" />,
      description: "Build your US credit profile and access the world's largest financial market.",
      benefits: [
        "ITIN acquisition",
        "Bank account setup",
        "Credit building",
        "Business funding"
      ],
      features: ["ITIN", "Bank Accounts", "Funding"],
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80",
      type: 'silver'
    },
    {
      id: 5,
      title: "Business Incorporation",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Establish your global business presence with strategic company formations.",
      benefits: [
        "Tax optimization",
        "Asset protection",
        "Banking access",
        "Global operations"
      ],
      features: ["US LLC", "UK LLP", "Compliance"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      type: 'gold'
    },
    {
      id: 6,
      title: "Other Services",
      icon: <Star className="h-8 w-8" />,
      description: "Additional pathways to enhance your global citizenship portfolio.",
      benefits: [
        "Professional licensing",
        "Ancestry research",
        "Document preparation",
        "Legal support"
      ],
      features: ["Licenses", "Citizenship by Descent", "Consulting"],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
      type: 'silver'
    }
  ];

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
          border border-white/10
          bg-gradient-to-br ${solution.type === 'gold'
            ? 'from-[#B8860B]/10 to-[#B8860B]/5' 
            : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5'
          }
        `}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className={`
            absolute inset-0 bg-gradient-to-b 
            ${solution.type === 'gold'
              ? 'from-[#B8860B]/30 via-[#0e0e0e]/80 to-[#0e0e0e]/95' 
              : 'from-[#DCDCDC]/30 via-[#0e0e0e]/80 to-[#0e0e0e]/95'
            }
          `} />
        </div>

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col">
          <div className={`
            inline-flex items-center justify-center p-4 rounded-full mb-6
            backdrop-blur-sm
            ${solution.type === 'gold' 
              ? 'bg-[#B8860B]/20 text-[#B8860B]' 
              : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'
            }
          `}>
            {solution.icon}
          </div>

          <h3 className={`text-2xl font-display mb-4 ${
            solution.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
          }`}>
            {solution.title}
          </h3>

          <p className="text-white/80 text-lg mb-8">
            {solution.description}
          </p>

          <div className="grid grid-cols-1 gap-8 flex-grow">
            <div>
              <h4 className="text-white font-display mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white/80">
                    <span className={`
                      w-1.5 h-1.5 rounded-full mr-3
                      ${solution.type === 'gold' ? 'bg-[#B8860B]' : 'bg-[#DCDCDC]'}
                    `} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display mb-4">Benefits:</h4>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-white/80">
                    <span className={`
                      w-1.5 h-1.5 rounded-full mr-3
                      ${solution.type === 'gold' ? 'bg-[#B8860B]' : 'bg-[#DCDCDC]'}
                    `} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

        <Carousel 
          items={carouselItems}
          className="max-w-[1200px] mx-auto"
        />
      </div>
    </section>
  );
};

export default FirstClassSolutions;