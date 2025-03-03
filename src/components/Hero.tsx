import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone } from 'lucide-react';
import { GoldButton } from './ui/3D buttons';
import backgroundImage from '../assets/miquel/Miquel 6.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(14,14,14,0.95) 95%, #0e0e0e 100%), url(${backgroundImage})`
      }}
    >
      <div className="relative z-10 h-full max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 flex items-end pb-32">
            <div className="max-w-2xl">
              <h1 className="font-montserrat text-[36px] leading-tight mb-6 tracking-tight font-bold">
                <div className="relative inline-block">PAY 0% TAXES</div>
                <br />
                <div className="relative inline-block">
                  GET MULTIPLE PASSPORTS
                  <div 
                    className="absolute -bottom-[2px] left-0 right-0 h-[3px] rounded-[3px_1px]"
                    style={{
                      background: 'linear-gradient(to right, #B8860B 0%, #DCDCDC 100%)',
                      boxShadow: '0 0 10px rgba(184,134,11,0.5), 0 0 20px rgba(184,134,11,0.3), 0 0 30px rgba(220,220,220,0.2)'
                    }}
                  />
                </div>
              </h1>
              
              <p className="text-xl font-montserrat text-white tracking-wide font-light mb-8">
                Welcome to the home of Successful and Sovereign individuals.
              </p>

              <div className="inline-block perspective-[1000px] group">
                <GoldButton 
                  onClick={() => navigate('/book-a-call')} 
                  className="text-xs px-6 py-2 uppercase tracking-wider font-medium group relative
                           after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_20px_rgba(184,134,11,0.2)]
                           after:opacity-0 after:transition-opacity after:duration-300
                           hover:after:opacity-100"
                >
                  <span className="flex items-center">
                    <span className="mr-2">Book A Call</span>
                    <Smartphone className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </GoldButton>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 right-8">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star === 2 || star === 4 ? 'text-[#B8860B]' : 'text-white'} fill-current ${
                      star === 2 || star === 4 
                        ? 'drop-shadow-[0_0_8px_rgba(184,134,11,0.8)]' 
                        : 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white whitespace-nowrap">
                Trusted by +100,000 men of distinction
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
