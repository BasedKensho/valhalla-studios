import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Building2, CreditCard, Network } from 'lucide-react';
import HighlightedText from './ui/HighlightedText';

const OfferCard = ({ 
  offer, 
  index 
}: { 
  offer: {
    icon: React.ReactNode;
    title: string;
    items: string[];
    image: string;
  };
  index: number;
}) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.05, 1.05, 1.05)
      translateZ(50px)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
      translateZ(0)
    `;
  };

  return (
    <div
      ref={cardRef}
      onClick={() => navigate(`/services/${offer.title.toLowerCase().replace(/\s+/g, '-')}`)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative h-[400px] rounded-xl overflow-hidden cursor-pointer group
        transform-gpu transition-all duration-500 ease-out
        hover:translate-y-[-8px]
        ${index % 2 === 0 
          ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
          : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
        }
        border border-white/10
        bg-gradient-to-br ${index % 2 === 0 
          ? 'from-[#B8860B]/10 to-[#B8860B]/5' 
          : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5'
        }
      `}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`
          absolute inset-0 bg-gradient-to-br ${index % 2 === 0 
            ? 'from-[#B8860B]/30 via-[#0e0e0e]/80 to-[#0e0e0e]/95' 
            : 'from-[#DCDCDC]/30 via-[#0e0e0e]/80 to-[#0e0e0e]/95'
          }
          transition-opacity duration-300 group-hover:opacity-90
        `} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col">
        {/* Card Number */}
        <div className={`
          absolute ${index % 2 === 0 ? 'left-4' : 'right-4'} top-4 
          font-display text-2xl font-bold
          ${index % 2 === 0 ? 'text-[#B8860B]/40' : 'text-[#DCDCDC]/40'}
        `}>
          {(index + 1).toString().padStart(2, '0')}
        </div>

        <div className="flex flex-col h-full pt-8">
          <div className={`
            mb-8 transform-gpu transition-all duration-300 
            group-hover:scale-110 group-hover:translate-z-30
            ${index % 2 === 0 ? 'text-[#B8860B]' : 'text-[#DCDCDC]'}
          `}
          style={{ transform: 'translateZ(30px)' }}>
            {offer.icon}
          </div>
          <h3 className={`
            text-xl font-display mb-8 transform-gpu transition-all duration-300
            group-hover:translate-z-20
            ${index % 2 === 0 ? 'text-[#B8860B]' : 'text-[#DCDCDC]'}
          `}
          style={{ transform: 'translateZ(20px)' }}>
            {offer.title}
          </h3>
          <ul className="space-y-6 flex-grow">
            {offer.items.map((item, idx) => (
              <li 
                key={idx} 
                className={`
                  text-white/80 flex items-center
                  transform-gpu transition-all duration-300
                  group-hover:translate-z-10
                  hover:text-white
                `}
                style={{ 
                  transitionDelay: `${idx * 50}ms`,
                  transform: 'translateZ(10px)'
                }}
              >
                <span className={`
                  w-1.5 h-1.5 rounded-full mr-3
                  ${index % 2 === 0 ? 'bg-[#B8860B]/40' : 'bg-[#DCDCDC]/40'}
                `} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Glow Effect */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 rounded-xl
          ${index % 2 === 0 
            ? 'bg-gradient-to-b from-[#B8860B]/5 to-transparent' 
            : 'bg-gradient-to-b from-[#DCDCDC]/5 to-transparent'
          }
        `} />
      </div>
    </div>
  );
};

const FirstClassOffers = () => {
  const offers = [
    {
      icon: <Download className="h-8 w-8" />,
      title: "Passport & Residencies",
      items: [
        "Paraguay Residency & Citizenship",
        "Mexican Passport & Residency",
        "Multiple Passports"
      ],
      image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&q=80"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Companies, Holdings & Trusts",
      items: [
        "US LLC",
        "UK LLP",
        "Panama Trust"
      ],
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "US Banking, Funding & Credit Cards",
      items: [
        "ITIN",
        "US Bank Accounts",
        "Access to American Credit"
      ],
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Access",
      items: [
        "Real Estate Investment",
        "Bank Relationships",
        "Top Lawyers"
      ],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-display text-center mb-16 tracking-wider">
        First Class <HighlightedText text="OFFERS" />
      </h2>

      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        style={{ perspective: '2000px' }}
      >
        {offers.map((offer, index) => (
          <OfferCard key={index} offer={offer} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FirstClassOffers;