import React from 'react';
import CountUp from 'react-countup';
import { Twitter, Youtube, Instagram } from 'lucide-react';
import { GoldButton, WhiteButton } from './ui/3D buttons';

const SocialProof = () => {
  const stats = [
    {
      icon: <Twitter className="h-8 w-8" />,
      platform: "Twitter followers",
      count: 6572,
      suffix: "+",
      type: "gold",
      buttonText: "Visit Twitter",
      link: "https://x.com/miquelgirones1"
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      platform: "Instagram",
      count: 160000,
      type: "silver",
      buttonText: "Visit Instagram",
      link: "https://www.instagram.com/miquel_girones/"
    },
    {
      icon: <Youtube className="h-8 w-8" />,
      platform: "YouTube",
      count: 2025,
      suffix: "+",
      type: "gold",
      buttonText: "Subscribe",
      link: "https://www.youtube.com/@TheFirstClassCitizen"
    }
  ];

  return (
    <section className="py-20 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                relative p-8 rounded-xl overflow-hidden
                border border-white/10
                bg-gradient-to-br ${stat.type === 'gold'
                  ? 'from-[#B8860B]/10 to-[#B8860B]/5 hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
                  : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5 hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
                }
                transform-gpu transition-all duration-300
                hover:border-white/20 hover:translate-y-[-8px]
                group
              `}
            >
              {/* Icon */}
              <div className={`
                inline-flex items-center justify-center p-4 rounded-full mb-6
                backdrop-blur-sm
                ${stat.type === 'gold' 
                  ? 'bg-[#B8860B]/20 text-[#B8860B]' 
                  : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'
                }
                transform-gpu transition-all duration-300
                group-hover:scale-110
              `}>
                {stat.icon}
              </div>

              {/* Platform */}
              <h3 className={`text-xl font-display mb-4 ${
                stat.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
              }`}>
                {stat.platform}
              </h3>

              {/* Counter */}
              <div className="mb-6">
                <div className={`text-4xl font-bold mb-2 ${
                  stat.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
                }`}>
                  <CountUp
                    end={stat.count}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
              </div>

              {/* Button */}
              {stat.type === 'gold' ? (
                <GoldButton
                  onClick={() => window.open(stat.link, '_blank')}
                  fullWidth
                  className="py-3"
                >
                  {stat.buttonText}
                </GoldButton>
              ) : (
                <WhiteButton
                  onClick={() => window.open(stat.link, '_blank')}
                  fullWidth
                  className="py-3"
                >
                  {stat.buttonText}
                </WhiteButton>
              )}

              {/* Glowing Circle Effect */}
              <div className={`
                absolute -bottom-32 w-64 h-64 rounded-full blur-3xl opacity-20
                ${stat.type === 'gold'
                  ? 'bg-[#B8860B]'
                  : 'bg-[#DCDCDC]'
                }
              `} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;