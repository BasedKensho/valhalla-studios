import React from 'react';
import Hero from '../components/Hero';
import FirstClassOffers from '../components/FirstClassOffers';
import SovereignRanks from '../components/SovereignRanks';
import FirstClassSolutions from '../components/FirstClassSolutions';
import MeetFounder from '../components/MeetFounder';
import Expectations from '../components/Expectations';
import Testimonials from '../components/Testimonials';
import SocialProof from '../components/SocialProof';
import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';
import { Youtube, Phone, CreditCard } from 'lucide-react';
import { GoldButton } from '../components/ui/3D buttons';

const Home = () => {
  const faqs = [
    {
      icon: <Youtube className="h-8 w-8" />,
      title: "Where to start?",
      content: (
        <div className="space-y-4">
          <p>Choose your path:</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCDCDC] mr-2" />
              <span>FREE: YouTube/Twitter</span>
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCDCDC] mr-2" />
              <span>ACTION: Book a 30-min call</span>
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCDCDC] mr-2" />
              <span>COMMITTED: 60-min Sovereign Plan</span>
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCDCDC] mr-2" />
              <span>CLEAR: Select & pay for service</span>
            </li>
          </ul>
          <GoldButton fullWidth className="mt-4">
            Book A Call
          </GoldButton>
        </div>
      ),
      type: 'silver' as const
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "How to become a Paraguay Tax Resident?",
      content: (
        <div className="space-y-4">
          <p>Process completed in under 90 days:</p>
          <GoldButton fullWidth className="mt-4">
            Learn More
          </GoldButton>
        </div>
      ),
      type: 'gold' as const
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "How to access US banking and credit?",
      content: (
        <div className="space-y-4">
          <p>Comprehensive package includes:</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCDCDC] mr-2" />
              <span>ITIN setup</span>
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCDCDC] mr-2" />
              <span>US Credit Guide</span>
            </li>
          </ul>
          <GoldButton fullWidth className="mt-4">
            Get Started
          </GoldButton>
        </div>
      ),
      type: 'silver' as const
    }
  ];

  return (
    <main className="scroll-smooth">
      <section className="relative">
        <Hero />
      </section>

      <AnimatedSection className="relative bg-[#0e0e0e]">
        <FirstClassOffers />
      </AnimatedSection>

      <AnimatedSection className="relative bg-[#0e0e0e]">
        <SovereignRanks />
      </AnimatedSection>

      <AnimatedSection className="relative bg-[#0e0e0e]">
        <FirstClassSolutions />
      </AnimatedSection>

      <AnimatedSection className="relative bg-[#0e0e0e]">
        <MeetFounder />
      </AnimatedSection>

      <AnimatedSection className="relative bg-[#0e0e0e]">
        <Expectations />
      </AnimatedSection>

      <AnimatedSection className="relative bg-[#0e0e0e]">
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection className="relative bg-[#0e0e0e]">
        <SocialProof />
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="relative bg-[#0e0e0e]">
        <section className="py-20 bg-[#0e0e0e] overflow-hidden">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display text-center mb-16">
              Common <span className="relative inline-block">
                <span className="text-white font-bold">QUESTIONS</span>
                <span 
                  className="absolute -bottom-[2px] left-0 w-full h-[3px] rounded-[3px_1px]"
                  style={{
                    background: 'linear-gradient(to right, #B8860B 0%, #DCDCDC 100%)',
                    boxShadow: '0 0 15px rgba(184,134,11,0.5), 0 0 30px rgba(184,134,11,0.3), 0 0 45px rgba(220,220,220,0.2)'
                  }}
                />
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`
                    relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer
                    transform-gpu transition-all duration-300
                    hover:translate-y-[-8px]
                    ${faq.type === 'gold'
                      ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
                      : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
                    }
                    border border-white/10
                    bg-gradient-to-br ${faq.type === 'gold'
                      ? 'from-[#B8860B]/10 to-[#B8860B]/5' 
                      : 'from-[#DCDCDC]/10 to-[#DCDCDC]/5'
                    }
                  `}
                >
                  <div className="relative h-full p-6 flex flex-col">
                    {/* Icon */}
                    <div className={`
                      inline-flex items-center justify-center p-4 rounded-full mb-6
                      backdrop-blur-sm
                      ${faq.type === 'gold' 
                        ? 'bg-[#B8860B]/20 text-[#B8860B]' 
                        : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'
                      }
                      transform-gpu transition-all duration-300
                      group-hover:scale-110
                    `}>
                      {faq.icon}
                    </div>

                    {/* Question */}
                    <h3 className={`text-xl font-display mb-4 ${
                      faq.type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
                    }`}>
                      {faq.title}
                    </h3>

                    {/* Content */}
                    <div className="text-white/80">
                      {faq.content}
                    </div>

                    {/* Glowing Effect */}
                    <div className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 rounded-xl
                      ${faq.type === 'gold'
                        ? 'shadow-[0_8px_32px_rgba(184,134,11,0.3)]'
                        : 'shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
                      }
                    `} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </main>
  );
};

export default Home;