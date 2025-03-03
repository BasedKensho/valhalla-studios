import React from 'react';
import { MessageSquare, Instagram, Send } from 'lucide-react';

const ContactButton = ({ 
  icon, 
  label, 
  type,
  href 
}: { 
  icon: React.ReactNode;
  label: string;
  type: 'gold' | 'silver';
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      relative group
      flex items-center justify-center gap-3
      px-8 py-4 rounded-full
      transform-gpu transition-all duration-300
      hover:translate-y-[-4px]
      border border-white/10
      ${type === 'gold'
        ? 'bg-[#B8860B]/10 hover:shadow-[0_8px_32px_rgba(184,134,11,0.3)]'
        : 'bg-[#DCDCDC]/10 hover:shadow-[0_8px_32px_rgba(220,220,220,0.3)]'
      }
    `}
    style={{ perspective: '1000px' }}
  >
    {/* Icon and Label */}
    <div className="relative z-10 flex items-center gap-3">
      <span className={`${
        type === 'gold' ? 'text-[#B8860B]' : 'text-[#DCDCDC]'
      }`}>
        {icon}
      </span>
      <span className="text-white font-medium">{label}</span>
    </div>

    {/* 3D Hover Effect */}
    <div 
      className={`
        absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
        transition-all duration-300 transform-gpu group-hover:scale-[1.02]
        ${type === 'gold'
          ? 'bg-gradient-to-r from-[#B8860B]/20 to-transparent'
          : 'bg-gradient-to-r from-[#DCDCDC]/20 to-transparent'
        }
      `}
    />

    {/* Glow Effect */}
    <div 
      className={`
        absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
        transition-opacity duration-300 blur-xl
        ${type === 'gold'
          ? 'bg-[#B8860B]/20'
          : 'bg-[#DCDCDC]/20'
        }
      `}
    />
  </a>
);

const Contact = () => {
  return (
    <section className="py-20 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display mb-4">
            Contact the <span className="relative inline-block">
              <span className="text-white font-bold">TEAM</span>
              <span 
                className="absolute -bottom-[2px] left-0 w-full h-[3px] rounded-[3px_1px]"
                style={{
                  background: 'linear-gradient(to right, #B8860B 0%, #DCDCDC 100%)',
                  boxShadow: '0 0 15px rgba(184,134,11,0.5), 0 0 30px rgba(184,134,11,0.3), 0 0 45px rgba(220,220,220,0.2)'
                }}
              />
            </span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Connect with us through your preferred platform for personalized assistance.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <ContactButton
            icon={<MessageSquare className="h-6 w-6" />}
            label="WhatsApp"
            type="silver"
            href="https://api.whatsapp.com/send/?phone=17868913724&text&type=phone_number&app_absent=0"
          />
          <ContactButton
            icon={<Send className="h-6 w-6" />}
            label="Telegram"
            type="gold"
            href="https://telegram.org/"
          />
          <ContactButton
            icon={<Instagram className="h-6 w-6" />}
            label="Instagram DM"
            type="silver"
            href="https://www.instagram.com/miquel_girones/"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;