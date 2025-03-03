import React from 'react';
import { Download, Building2, CreditCard, Network } from 'lucide-react';
import HighlightedText from '../ui/HighlightedText';
import Carousel, { CarouselItem } from '../ui/Carousel/carousel';

const FirstClassOffers = () => {
  const offers = [
    {
      icon: <Download className="h-8 w-8" />,
      title: "Passport & Residencies",
      description: "Strategic citizenship acquisition through investment, ancestry, and naturalization paths.",
      benefits: [
        "Multiple citizenship planning",
        "Fast-track processing",
        "Document preparation",
        "Local support"
      ],
      image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&q=80",
      type: 'gold'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Companies, Holdings & Trusts",
      description: "Comprehensive business structures for international operations and asset protection.",
      benefits: [
        "Tax-efficient structuring",
        "Asset protection",
        "Global banking access",
        "Compliance management"
      ],
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
      type: 'silver'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "US Banking & Credit Cards",
      description: "Access to premium US banking services and credit building opportunities.",
      benefits: [
        "ITIN application support",
        "Bank account setup",
        "Credit building strategy",
        "Ongoing support"
      ],
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80",
      type: 'gold'
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Access",
      description: "Connect with our exclusive network of international professionals and opportunities.",
      benefits: [
        "Elite networking events",
        "Investment opportunities",
        "Professional introductions",
        "Market insights"
      ],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80",
      type: 'silver'
    }
  ];

  const carouselItems: CarouselItem[] = offers.map((offer, index) => ({
    id: index,
    content: (
      <div 
        className={`
          relative h-[600px] rounded-xl overflow-hidden
          transform-gpu transition-all duration-500
          hover:translate-y-[-8px]
          ${offer.type === 'gold'
            ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
            : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
          }
          border border-white/10
          bg-gradient-to-br ${offer.type === 'gold'
            ? 'from-[#B8860B]/10 to-[#B8860B]/5' 
            : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5'
          }
        `}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`
            absolute inset-0 bg-gradient-to-br ${offer.type === 'gold'
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
            ${offer.type === 'gold' 
              ? 'bg-[#B8860B]/20 text-[#B8860B]' 
              : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'
            }
          `}>
            {offer.icon}
          </div>

          <h3 className={`text-2xl font-display mb-4 ${
            offer.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
          }`}>
            {offer.title}
          </h3>

          <p className="text-white/80 text-lg mb-8">
            {offer.description}
          </p>

          <div className="flex-grow">
            <h4 className="text-white font-display mb-4">Benefits:</h4>
            <ul className="space-y-4">
              {offer.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-white/80">
                  <span className={`
                    w-1.5 h-1.5 rounded-full mr-3
                    ${offer.type === 'gold' ? 'bg-[#B8860B]' : 'bg-[#DCDCDC]'}
                  `} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }));

  return (
    <section className="py-20 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display text-center mb-16">
          First Class <HighlightedText text="OFFERS" />
        </h2>

        <Carousel 
          items={carouselItems}
          className="max-w-[1200px] mx-auto"
        />
      </div>
    </section>
  );
};

export default FirstClassOffers;