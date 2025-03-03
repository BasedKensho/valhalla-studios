import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button3D from './ui/Button3D';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';
import ResetPasswordModal from './modals/ResetPasswordModal';
import EmailCaptureModal from './modals/EmailCaptureModal';
import logo from '../assets/FLC logo.svg'; // Importing the logo

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showEmailCaptureModal, setShowEmailCaptureModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0e0e0e]/25 backdrop-blur-sm border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 h-[72px] relative flex items-center justify-between">
        {/* Left Section - Burger Menu and Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Burger Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              className={`text-white transition-transform duration-300 flex items-center w-[72px] h-[72px] justify-center ${isHovered ? 'scale-110' : 'scale-100'}`}
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-64 backdrop-blur-md bg-[#0e0e0e]/25 border border-white/10 rounded-lg shadow-lg py-2 z-50">
                {[
                  { id: 'account', href: '/account', label: 'My Account' },
                  { id: 'ranks', href: '/sovereign-ranks', label: 'Sovereign Ranks' }
                ].map((item) => (
                  <Link 
                    key={item.id}
                    to={item.href}
                    className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Services and About Buttons */}
          <Link to="/services" className="text-white hover:text-silver transition-colors duration-200 text-sm">
            Services
          </Link>
          <Link to="/about" className="text-white hover:text-silver transition-colors duration-200 text-sm">
            About
          </Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 perspective-[2000px]">
          <Link 
            to="/" 
            className="block transform-gpu transition-all duration-300 hover:scale-110 hover:translate-z-[30px]"
          >
            <img 
              src={logo}  // Updated to use imported logo
              alt="First Class Citizen" 
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <button 
            className="text-white hover:text-silver transition-colors duration-200 text-sm"
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </button>
          <button 
            className="text-white hover:text-silver transition-colors duration-200 text-sm"
            onClick={() => setShowRegisterModal(true)}
          >
            Sign Up
          </button>
          <Button3D onClick={() => navigate('/book-a-call')} className="hidden md:block text-sm py-2 px-6">
            Book A Call
          </Button3D>
        </div>
      </div>

      {/* Authentication Modals */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
      />
      <RegisterModal 
        isOpen={showRegisterModal} 
        onClose={() => setShowRegisterModal(false)}
      />
      <EmailCaptureModal
        isOpen={showEmailCaptureModal}
        onClose={() => setShowEmailCaptureModal(false)}
      />
      <ResetPasswordModal 
        isOpen={showResetPasswordModal} 
        onClose={() => setShowResetPasswordModal(false)}
      />
    </nav>
  );
};

export default Navbar;


