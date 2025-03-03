import React from 'react';
import { Link } from 'react-router-dom';
import { User, Instagram, Twitter, Youtube, Send } from 'lucide-react';

const Footer = () => {
  const navigation = {
    account: [
      { name: 'My Account', href: '/account' },
      { name: "Winner's Hall", href: '/winners-hall' },
      { name: 'About', href: '/about' },
      { name: 'Book a Call', href: '/book-a-call' }
    ],
    social: [
      { 
        name: 'Instagram', 
        icon: Instagram, 
        href: 'https://www.instagram.com/miquel_girones/' 
      },
      { 
        name: 'X', 
        icon: Twitter, 
        href: 'https://x.com/miquelgirones1' 
      },
      { 
        name: 'YouTube', 
        icon: Youtube, 
        href: 'https://www.youtube.com/@TheFirstClassCitizen' 
      },
      { 
        name: 'Telegram', 
        icon: Send, 
        href: 'https://telegram.org/' 
      }
    ]
  };

  return (
    <footer className="bg-[#0e0e0e] border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Account Section */}
          <div>
            <div className="flex items-center gap-2 text-[#B8860B] mb-6">
              <User className="h-5 w-5" />
              <h3 className="text-lg font-display">Account</h3>
            </div>
            <ul className="space-y-4">
              {navigation.account.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-display text-[#B8860B] mb-6">Follow Us</h3>
            <ul className="space-y-4">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo and Copyright */}
          <div className="lg:col-span-2 flex flex-col items-start justify-between">
            <Link to="/" className="block mb-6">
              <img 
                src="/assets/FLC logo.svg" 
                alt="First Class Citizen" 
                className="h-12 w-auto"
              />
            </Link>
            <div className="text-white/60 space-y-2">
              <p>© {new Date().getFullYear()} First Class Citizen. All rights reserved.</p>
              <p className="text-sm">
                Empowering individuals with strategic sovereignty solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;