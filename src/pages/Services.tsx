import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button3D from '../components/ui/Button3D';
import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';
import FirstClassOffers from '../components/services/FirstClassOffers';
import FirstClassSolutions from '../components/services/FirstClassSolutions';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0e0e0e] pt-20">
      {/* First Class Offers Section */}
      <AnimatedSection>
        <FirstClassOffers />
        <div className="flex justify-center mt-8">
          <Button3D 
            onClick={() => navigate('/book-a-call')}
            className="bg-[#B8860B] text-white hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]"
          >
            Book A Call
          </Button3D>
        </div>
      </AnimatedSection>

      {/* First Class Solutions Section */}
      <AnimatedSection>
        <FirstClassSolutions />
        <div className="flex justify-center mt-8">
          <Button3D 
            onClick={() => navigate('/book-a-call')}
            className="bg-[#B8860B] text-white hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]"
          >
            Book A Call
          </Button3D>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </div>
  );
};

export default Services;