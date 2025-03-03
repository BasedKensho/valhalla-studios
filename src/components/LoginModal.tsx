import React, { useState } from 'react';
import Button3D from './ui/Button3D';
import Modal from './ui/Modal';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={<>Welcome <span className="highlight">Back</span></>}
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-white/10 bg-white/5 text-white 
                       focus:ring-white/20"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-white normal-text">
              Remember me
            </label>
          </div>

          <button 
            type="button" 
            onClick={onForgotPassword}
            className="text-sm text-white hover:text-silver transition-colors duration-200 normal-text"
          >
            Forgot password?
          </button>
        </div>

        <Button3D type="submit" fullWidth className="py-4">
          Sign In
        </Button3D>

        <p className="text-center text-sm text-white/60 normal-text">
          Don't have an account?{' '}
          <button 
            type="button"
            onClick={onRegister}
            className="text-white hover:text-silver transition-colors duration-200"
          >
            Create an Account
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default LoginModal;