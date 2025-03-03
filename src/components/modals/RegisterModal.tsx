import React, { useState } from 'react';
import Button3D from '../ui/Button3D';
import Modal from '../ui/Modal';
import { Eye, EyeOff } from 'lucide-react';
import HighlightedText from '../ui/HighlightedText';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div>
          Create Your <HighlightedText text="ACCOUNT" />
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

        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-white mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                       focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 
                       transition-all duration-300 text-white pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white
                       transition-colors duration-200"
            >
              {showConfirmPassword ? 
                <EyeOff className="h-5 w-5" /> : 
                <Eye className="h-5 w-5" />
              }
            </button>
          </div>
        </div>

        <Button3D type="submit" fullWidth className="py-4">
          Sign Up
        </Button3D>

        <div className="text-center text-sm text-white/60">
          Already have an account?{' '}
          <button 
            type="button"
            onClick={onLogin}
            className="text-white hover:text-silver transition-colors duration-200"
          >
            Sign in
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default RegisterModal;