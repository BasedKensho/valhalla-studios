import React, { useState } from 'react';
import Button3D from './ui/Button3D';
import Modal from './ui/Modal';
import { Loader } from 'lucide-react';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmailValidated: (email: string) => void;
  onBackToLogin: () => void;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({
  isOpen,
  onClose,
  onEmailValidated,
  onBackToLogin
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call to validate email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Replace with actual API call to validate email exists
      const emailExists = true; // This should be the result of your API call
      
      if (emailExists) {
        onEmailValidated(email);
      } else {
        setError('No account found with this email address.');
      }
    } catch (error) {
      setError('Failed to verify email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={<>Verify Your <span className="highlight">Email</span></>}
    >
      <form onSubmit={validateEmail} className="space-y-6">
        <div>
          <label htmlFor="reset-email" className="block text-sm font-medium text-white mb-2 normal-text">
            Email Address
          </label>
          <input
            id="reset-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 
                     transition-all duration-300 text-white"
            placeholder="Enter your email address"
            required
            disabled={isLoading}
          />
          {error && (
            <p className="mt-2 text-sm text-red-400 normal-text">{error}</p>
          )}
        </div>

        <Button3D 
          type="submit" 
          fullWidth 
          className="py-4"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Loader className="h-5 w-5 animate-spin mr-2" />
              Verifying...
            </div>
          ) : (
            'Continue'
          )}
        </Button3D>

        <p className="text-center text-sm text-white/60 normal-text">
          <button 
            type="button"
            onClick={onBackToLogin}
            className="text-white hover:text-silver transition-colors duration-200"
          >
            Back to login
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default EmailCaptureModal;