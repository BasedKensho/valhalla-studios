import React from 'react';
import { Trophy, ShoppingBasket as Basketball, Apple, Users, TrendingUp, GraduationCap, FileWarning as Running, Globe2 } from 'lucide-react';
import HighlightedText from '../ui/HighlightedText';
import Carousel, { CarouselItem } from '../ui/Carousel/carousel';

const MiquelStory = () => {
  const stories = [
    {
      id: 1,
      title: "Chess Champion",
      icon: <Trophy className="h-8 w-8" />, 
      bullets: [
        "Started playing chess at 5 years old",
        "Competed against experienced players in their 50s to improve quickly"
      ],
      type: 'gold'
    },
    {
      id: 2,
      title: "Basketball Selected",
      icon: <Basketball className="h-8 w-8" />, 
      bullets: [
        "Played basketball for 12 years",
        "Joined the Catalan national team"
      ],
      type: 'silver'
    },
    {
      id: 3,
      title: "Nutrition University",
      icon: <Apple className="h-8 w-8" />, 
      bullets: [
        "Studied nutrition full-time for 4 years",
        "Optimized body and mind through advanced nutritional knowledge"
      ],
      type: 'gold'
    },
    {
      id: 4,
      title: "Building A Community",
      icon: <Users className="h-8 w-8" />, 
      bullets: [
        "Grew from 300 to 70,000 followers organically in just 6 months",
        "Learned that followers alone don't pay the bills"
      ],
      type: 'silver'
    },
    {
      id: 5,
      title: "Marketing And Business Strategy",
      icon: <TrendingUp className="h-8 w-8" />, 
      bullets: [
        "Scaled to €100,000+ revenue within 1.5 years of launching an online business",
        "Business established in February 2018"
      ],
      type: 'gold'
    },
    {
      id: 6,
      title: "Volunteering To Make $2.9M In 7 Days",
      icon: <GraduationCap className="h-8 w-8" />, 
      bullets: [
        "Helped launch a billion-dollar marketing formula in the Spanish-speaking world",
        "Enrolled 1,253 students in a single week",
        "Was immediately hired to teach marketing to top students"
      ],
      type: 'silver'
    },
    {
      id: 7,
      title: "I Run 2 Marathons Per Week",
      icon: <Running className="h-8 w-8" />, 
      bullets: [
        "Training to become a sub-4-minute miler",
        "Runs or works out twice a day, 6 days a week, covering a weekly mileage of 2 full marathons"
      ],
      type: 'gold'
    },
    {
      id: 8,
      title: "I Traveled 1,001 Days In A Row",
      icon: <Globe2 className="h-8 w-8" />, 
      bullets: [
        "Since November 2019, traveled across 3 continents and 25+ countries",
        "Mastered 4 languages while building a global network"
      ],
      type: 'silver'
    }
  ];

  const carouselItems: CarouselItem[] = stories.map(story => ({
    id: story.id,
    content: (
      <div 
        className={`relative h-[600px] rounded-xl overflow-hidden transform-gpu transition-all duration-500 hover:translate-y-[-8px] ${story.type === 'gold' ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'} border border-white/10 bg-gradient-to-br ${story.type === 'gold' ? 'from-[#B8860B]/10 to-[#B8860B]/5' : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5'}`}
      >
        <div className="relative h-full p-8 flex flex-col">
          <div className={`absolute ${story.type === 'gold' ? 'right-8' : 'left-8'} top-8 flex items-center gap-4`}>
            <div className={`text-2xl font-bold ${story.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'}`}>
              {story.id.toString().padStart(2, '0')}
            </div>
            <div className={`inline-flex items-center justify-center p-4 rounded-full backdrop-blur-sm ${story.type === 'gold' ? 'bg-[#B8860B]/20 text-[#B8860B]' : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'}`}>
              {story.icon}
            </div>
          </div>
          <div className="pt-24">
            <h3 className={`text-2xl font-display mb-8 ${story.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'}`}>
              {story.title}
            </h3>
            <ul className="space-y-6">
              {story.bullets.map((bullet, idx) => (
                <li 
                  key={idx} 
                  className="text-white/80 text-lg flex items-start"
                  style={{ transitionDelay: `${idx * 50}ms`, transform: 'translateZ(10px)' }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 ${story.type === 'gold' ? 'bg-[#B8860B]' : 'bg-[#DCDCDC]'}`} />
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
            Who is <HighlightedText text="MIQUEL GIRONÈS" />
          </h2>
          <p className="text-2xl font-display text-white/80">In 59 Seconds</p>
        </div>
        <Carousel 
          items={carouselItems}
          className="max-w-[1200px] mx-auto"
        />
      </div>
    </section>
  );
};

export default MiquelStory;

