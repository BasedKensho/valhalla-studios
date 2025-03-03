import React from 'react';
import { Users, Clock, Building2, Globe2, Network, Star } from 'lucide-react';
import HighlightedText from '../ui/HighlightedText';
import Carousel, { CarouselItem } from '../ui/Carousel/carousel';

const TeamStory = () => {
  const stories = [
    {
      id: 1,
      title: "Miquel at the Start",
      icon: <Users className="h-8 w-8" />, 
      bullets: [
        "Began his journey in November 2019",
        "Kickstarted with conferences on Global Options and 0% Taxes in Tulum, Mexico"
      ],
      type: 'gold'
    },
    {
      id: 2,
      title: "Hundreds of Interviews",
      icon: <Clock className="h-8 w-8" />, 
      bullets: [
        "Personally tested new bank accounts, residencies, and citizenships—with his own money on the line",
        "Vetted partners and removed unreliable connections"
      ],
      type: 'silver'
    },
    {
      id: 3,
      title: "Partners Met in Person",
      icon: <Building2 className="h-8 w-8" />, 
      bullets: [
        "Built solid partnerships through in-person meetings across Dubai, USA, Colombia, Mexico, Dominican Republic, Panama, Portugal, Spain, Serbia, and Georgia"
      ],
      type: 'gold'
    },
    {
      id: 4,
      title: "Fast. Like, Really Fast.",
      icon: <Clock className="h-8 w-8" />, 
      bullets: [
        "Average Telegram response time: 2 minutes",
        "Competitors take 2 days via email"
      ],
      type: 'silver'
    },
    {
      id: 5,
      title: "The Impossible Done Immediately",
      icon: <Star className="h-8 w-8" />, 
      bullets: [
        "Convert money, open anonymous banks, and secure EU residencies",
        "Once qualified, you unlock UNLIMITED OPTIONS"
      ],
      type: 'gold'
    },
    {
      id: 6,
      title: "Energy + Experience",
      icon: <Users className="h-8 w-8" />, 
      bullets: [
        "Core team averages 27 years old",
        "Partners and Providers have 20+ years of niche experience and elite connections"
      ],
      type: 'silver'
    },
    {
      id: 7,
      title: "Multiple Offices Worldwide",
      icon: <Globe2 className="h-8 w-8" />, 
      bullets: [
        "Primarily an online operation, but offers in-person meetings with team & partners",
        "Reach out, and we'll connect you to the closest office"
      ],
      type: 'gold'
    },
    {
      id: 8,
      title: "Offline Meetups",
      icon: <Network className="h-8 w-8" />, 
      bullets: [
        "Team, clients, and partners meet in person regularly",
        "These exclusive events build deep, lasting relationships and powerful business opportunities"
      ],
      type: 'silver'
    }
  ];

  const carouselItems: CarouselItem[] = stories.map(story => ({
    id: story.id,
    content: (
      <div 
        className={`
          relative h-[600px] rounded-xl overflow-hidden
          transform-gpu transition-all duration-500
          hover:translate-y-[-8px]
          ${story.type === 'gold'
            ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
            : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
          }
          border border-white/10
          bg-gradient-to-br ${story.type === 'gold'
            ? 'from-[#B8860B]/10 to-[#B8860B]/5' 
            : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5'
          }
        `}
      >
        {/* Content */}
        <div className="relative h-full p-8 flex flex-col">
          {/* Number and Icon */}
          <div className={`
            absolute ${story.type === 'gold' ? 'left-8' : 'right-8'} top-8
            flex items-center gap-4
          `}>
            <div className={`
              text-2xl font-bold
              ${story.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'}
            `}>
              {story.id.toString().padStart(2, '0')}
            </div>
            <div className={`
              inline-flex items-center justify-center p-4 rounded-full
              backdrop-blur-sm
              ${story.type === 'gold' 
                ? 'bg-[#B8860B]/20 text-[#B8860B]' 
                : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'
              }
            `}>
              {story.icon}
            </div>
          </div>

          {/* Title and Content */}
          <div className="pt-24">
            <h3 className={`text-2xl font-display mb-8 ${
              story.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
            }`}>
              {story.title}
            </h3>

            <ul className="space-y-6">
              {story.bullets.map((bullet, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center text-white/80 text-lg"
                >
                  <span className={`
                    w-1.5 h-1.5 rounded-full mr-3
                    ${story.type === 'gold' ? 'bg-[#B8860B]' : 'bg-[#DCDCDC]'}
                  `} />
                  {bullet}
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display mb-4">
            Who is <HighlightedText text="THE FIRST CLASS CITIZEN TEAM" />
          </h2>
        </div>

        <Carousel 
          items={carouselItems}
          className="max-w-[1200px] mx-auto"
        />
      </div>
    </section>
  );
};

export default TeamStory;
