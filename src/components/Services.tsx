import React from 'react';
import { ImportIcon as PassportIcon, Calculator, Globe2, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <PassportIcon className="h-12 w-12 text-gold" />,
      title: "Passport Portfolio",
      description: "Strategic citizenship acquisition through investment, ancestry, and naturalization paths."
    },
    {
      icon: <Calculator className="h-12 w-12 text-silver" />,
      title: "Tax Optimization",
      description: "Legal tax reduction strategies through international structuring and residency planning."
    },
    {
      icon: <Globe2 className="h-12 w-12 text-gold" />,
      title: "Global Residency",
      description: "Multiple residency solutions for location independence and lifestyle optimization."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-silver" />,
      title: "Wealth Protection",
      description: "Asset protection strategies across multiple jurisdictions for maximum security."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display text-center mb-16 tracking-wider text-white special-text">
          Our <span className="highlight">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-white/10 hover:border-gold/30 transition-all duration-300
                       backdrop-blur-sm bg-white/5 hover:bg-white/10 group card"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display text-white mb-3 special-text">{service.title}</h3>
              <p className="text-white/80 normal-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;