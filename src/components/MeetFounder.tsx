import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GoldButton } from './ui/3D buttons';

const MeetFounder = () => {
  const navigate = useNavigate();

  return (
    <section className="py-14 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display relative mb-4">
            Meet the <span className="relative inline-block">
              <span className="text-white font-bold">Founder</span>
              <span 
                className="absolute -bottom-[2px] left-0 w-full h-[3px] rounded-[3px_1px]"
                style={{
                  background: 'linear-gradient(to right, #B8860B 0%, #DCDCDC 100%)',
                  boxShadow: '0 0 15px rgba(184,134,11,0.5), 0 0 30px rgba(184,134,11,0.3), 0 0 45px rgba(220,220,220,0.2)'
                }}
              />
            </span>
          </h2>
          <h3 className="text-xl font-display">
            I am{' '}
            <span 
              className="font-bold"
              style={{
                background: 'linear-gradient(to right, #B8860B 0%, #DCDCDC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                textShadow: '0 0 15px rgba(184,134,11,0.3)'
              }}
            >
              Miquel Gironès
            </span>
          </h3>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* First Card */}
          <div 
            className="group relative h-[400px]"
            style={{ perspective: '1000px' }}
          >
            <div 
              className="relative h-full transition-transform duration-500 transform-gpu group-hover:scale-[1.02] group-hover:translate-y-[-8px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/20 to-[#DCDCDC]/20 blur-xl rounded-xl"></div>
              <div 
                className="relative h-full rounded-xl overflow-hidden border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(184,134,11,0.15) 0%, rgba(14,14,14,0.95) 100%)',
                }}
              >
                {/* Animated gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(184,134,11,0.3) 0%, rgba(14,14,14,0) 70%)',
                  }}
                />
                <div className="flex flex-col h-full p-6 justify-end relative z-10">
                  <div className="text-3xl font-bold mb-2 text-[#B8860B]">01</div>
                  <h4 className="text-lg font-display text-white mb-2">I BUILT my online business</h4>
                  <p className="text-white/80 text-sm">
                    I grew my first online business to over 100,000€ within just 1.5 YEARS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div 
            className="group relative h-[400px]"
            style={{ perspective: '1000px' }}
          >
            <div 
              className="relative h-full transition-transform duration-500 transform-gpu group-hover:scale-[1.02] group-hover:translate-y-[-8px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DCDCDC]/20 to-[#B8860B]/20 blur-xl rounded-xl"></div>
              <div 
                className="relative h-full rounded-xl overflow-hidden border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(220,220,220,0.15) 0%, rgba(14,14,14,0.95) 100%)',
                }}
              >
                {/* Animated gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(220,220,220,0.3) 0%, rgba(14,14,14,0) 70%)',
                  }}
                />
                <div className="flex flex-col h-full p-6 justify-end relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-3xl font-bold mb-2 text-[#DCDCDC]">02</div>
                    <h4 className="text-lg font-display text-white mb-3">I traveled 1,001 DAYS in a row</h4>
                    <ul className="space-y-1.5 text-sm">
                      {[
                        "Since November 2019",
                        "3 Continents",
                        "+25 Countries",
                        "Mastering 4 languages"
                      ].map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-white/80">
                          <span className="w-1 h-1 rounded-full bg-[#DCDCDC] mr-2" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div 
            className="group relative h-[400px]"
            style={{ perspective: '1000px' }}
          >
            <div 
              className="relative h-full transition-transform duration-500 transform-gpu group-hover:scale-[1.02] group-hover:translate-y-[-8px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/20 to-[#DCDCDC]/20 blur-xl rounded-xl"></div>
              <div 
                className="relative h-full rounded-xl overflow-hidden border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(184,134,11,0.15) 0%, rgba(14,14,14,0.95) 100%)',
                }}
              >
                {/* Animated gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(184,134,11,0.3) 0%, rgba(14,14,14,0) 70%)',
                  }}
                />
                <div className="flex flex-col h-full p-6 justify-end relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-3xl font-bold mb-2 text-[#B8860B]">03</div>
                    <h4 className="text-lg font-display text-white mb-3">I became SOVEREIGN</h4>
                    <ul className="space-y-1.5 text-sm">
                      {[
                        "Multiple Passports",
                        "8 Residencies",
                        "7 Driving Licenses",
                        "22 Bank Accounts"
                      ].map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-white/80">
                          <span className="w-1 h-1 rounded-full bg-[#B8860B] mr-2" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button below cards */}
        <div className="flex justify-center mt-12">
          <GoldButton 
            onClick={() => navigate('/about')}
            className="text-sm py-2 px-8"
          >
            Full Story of Miquel Gironès
          </GoldButton>
        </div>
      </div>
    </section>
  );
};

export default MeetFounder;