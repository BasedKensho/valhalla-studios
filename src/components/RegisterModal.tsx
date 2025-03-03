import React, { useState } from 'react';
import Button3D from './ui/Button3D';
import Modal from './ui/Modal';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={<>Create Your <span className="highlight">Account</span></>}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2 normal-text">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 
                     transition-all duration-300 text-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white mb-2 normal-text">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 
                     transition-all duration-300 text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-white mb-2 normal-text">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 
                     transition-all duration-300 text-white"
            required
          />
        </div>

        <Button3D type="submit" fullWidth className="py-4">
          Sign Up
        </Button3D>

        <p className="text-center text-sm text-white/60 normal-text">
          Already have an account?{' '}
          <button 
            type="button"
            onClick={onLogin}
            className="text-white hover:text-silver transition-colors duration-200"
          >
            Sign in
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default RegisterModal;