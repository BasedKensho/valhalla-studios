import React from 'react';
import { Star, Award, Globe2, Building2 } from 'lucide-react';

interface TestimonialCardProps {
  icon: React.ReactNode;
  type: 'gold' | 'silver';
  title: string;
  description: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  icon,
  type,
  title,
  description,
  author,
  role
}) => (
  <div className="relative">
    <div 
      className={`
        group relative h-[400px] rounded-xl overflow-hidden
        transform-gpu transition-all duration-500
        hover:translate-y-[-8px]
        ${type === 'gold'
          ? 'hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]' 
          : 'hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
        }
      `}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative h-full rounded-xl overflow-hidden border border-white/10"
        style={{
          background: type === 'gold'
            ? 'linear-gradient(135deg, rgba(184,134,11,0.15) 0%, rgba(14,14,14,0.95) 100%)'
            : 'linear-gradient(135deg, rgba(220,220,220,0.15) 0%, rgba(14,14,14,0.95) 100%)'
        }}
      >
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
          style={{
            background: type === 'gold'
              ? 'radial-gradient(circle at 50% 50%, rgba(184,134,11,0.3) 0%, rgba(14,14,14,0) 70%)'
              : 'radial-gradient(circle at 50% 50%, rgba(220,220,220,0.3) 0%, rgba(14,14,14,0) 70%)'
          }}
        />

        <div className="relative h-full p-8 flex flex-col">
          {/* Icon */}
          <div className={`
            inline-flex items-center justify-center p-4 rounded-full mb-6
            backdrop-blur-sm
            ${type === 'gold' 
              ? 'bg-[#B8860B]/20 text-[#B8860B]' 
              : 'bg-[#DCDCDC]/20 text-[#DCDCDC]'
            }
            transform-gpu transition-all duration-300
            group-hover:scale-110
          `}>
            {icon}
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className={`text-xl font-display mb-4 ${
              type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
            }`}>
              {title}
            </h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              "{description}"
            </p>
          </div>

          {/* Author */}
          <div className="mt-auto">
            <p className="text-white font-medium">{author}</p>
            <p className={`text-sm ${
              type === 'gold' ? 'text-[#B8860B]/80' : 'text-[#DCDCDC]/80'
            }`}>
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center space-x-2 mt-6">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-6 w-6 ${
            type === 'gold' 
              ? 'text-[#B8860B] drop-shadow-[0_0_8px_rgba(184,134,11,0.5)]' 
              : 'text-[#DCDCDC] drop-shadow-[0_0_8px_rgba(220,220,220,0.5)]'
          }`} 
          fill="currentColor"
        />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Complete Financial Freedom",
      description: "The Paraguay residency program exceeded all expectations. Within 90 days, I had my new tax residency and banking setup complete. Now I legally pay 0% tax on my online business income.",
      author: "David Chen",
      role: "Digital Entrepreneur",
      type: 'silver' as const
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Multiple Passports Success",
      description: "Thanks to First Class Citizen, I now hold three passports and have established a robust international banking network. The freedom and opportunities this has created are invaluable.",
      author: "Marcus Schmidt",
      role: "International Investor",
      type: 'gold' as const
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "US Banking Excellence",
      description: "From ITIN to credit cards and business funding, the US banking program opened doors I never thought possible. My credit score is now over 750 and growing.",
      author: "Ana Rodriguez",
      role: "Business Owner",
      type: 'silver' as const
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Life-Changing Results",
      description: "The network and connections I've gained through First Class Citizen have been transformative. From real estate deals to private banking opportunities, it's been incredible.",
      author: "James Morrison",
      role: "Real Estate Investor",
      type: 'gold' as const
    }
  ];

  return (
    <section className="py-20 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display text-center mb-16">
          Client <span className="relative inline-block">
            <span className="text-white font-bold">SUCCESS</span>
            <span 
              className="absolute -bottom-[2px] left-0 w-full h-[3px] rounded-[3px_1px]"
              style={{
                background: 'linear-gradient(to right, #B8860B 0%, #DCDCDC 100%)',
                boxShadow: '0 0 15px rgba(184,134,11,0.5), 0 0 30px rgba(184,134,11,0.3), 0 0 45px rgba(220,220,220,0.2)'
              }}
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;