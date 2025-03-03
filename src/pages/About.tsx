import React from 'react';
import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';
import MiquelStory from '../components/about/MiquelStory';
import TeamStory from '../components/about/TeamStory';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0e] pt-20">
      <AnimatedSection>
        <MiquelStory />
      </AnimatedSection>

      <AnimatedSection>
        <TeamStory />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </div>
  );
};

export default About;