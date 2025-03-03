import React, { useState } from 'react';
import Button3D from '../ui/Button3D';
import Modal from '../ui/Modal';
import { Eye, EyeOff } from 'lucide-react';
import HighlightedText from '../ui/HighlightedText';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: () => void;
  onForgotPassword: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ 
  isOpen, 
  onClose, 
  onRegister,
  onForgotPassword 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div>
          Welcome <HighlightedText text="BACK" />
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                     focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 
                     transition-all duration-300 text-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                       focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 
                       transition-all duration-300 text-white pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white
                       transition-colors duration-200"
            >
              {showPassword ? 
                <EyeOff className="h-5 w-5" /> : 
                <Eye className="h-5 w-5" />
              }
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-white/10 bg-[#0e0e0e]/50 text-white 
                       focus:ring-white/20"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
              Remember me
            </label>
          </div>

          <button 
            type="button" 
            onClick={onForgotPassword}
            className="text-sm text-white hover:text-silver transition-colors duration-200"
          >
            Forgot password?
          </button>
        </div>

        <Button3D type="submit" fullWidth className="py-4">
          Sign In
        </Button3D>

        <div className="text-center text-sm text-white/60">
          Don't have an account?{' '}
          <button 
            type="button"
            onClick={onRegister}
            className="text-white hover:text-silver transition-colors duration-200"
          >
            Sign Up
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;