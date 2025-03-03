import React, { useState, useEffect } from 'react';
import Button3D from '../ui/Button3D';
import Modal from '../ui/Modal';
import { Eye, EyeOff } from 'lucide-react';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import HighlightedText from '../ui/HighlightedText';

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  userEmail?: string;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({ 
  isOpen, 
  onClose,
  onLogin,
  userEmail 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  // Password validation rules
  const validatePassword = (pass: string) => {
    const rules = [
      { test: /.{8,}/, message: "At least 8 characters" },
      { test: /[A-Z]/, message: "One uppercase letter" },
      { test: /[a-z]/, message: "One lowercase letter" },
      { test: /[0-9]/, message: "One number" },
      { test: /[^A-Za-z0-9]/, message: "One special character" }
    ];

    const failedRules = rules.filter(rule => !rule.test.test(pass));
    return failedRules.map(rule => rule.message);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isSuccess && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }

    if (isSuccess && countdown === 0) {
      onLogin();
      onClose();
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isSuccess, countdown, onLogin, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setErrors({});
    
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setErrors(prev => ({ ...prev, password: passwordErrors.join(', ') }));
      return;
    }

    if (password !== confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
    } catch (error) {
      setErrors(prev => ({ ...prev, password: "Failed to reset password. Please try again." }));
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setPassword('');
      setConfirmPassword('');
      setErrors({});
      setIsSuccess(false);
      setCountdown(3);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div>
          Reset Your <HighlightedText text="PASSWORD" />
        </div>
      }
    >
      {isSuccess ? (
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <LoadingSpinner size="lg" className="text-white shadow-[0_0_15px_rgba(216,216,216,0.3)]" />
          </div>
          <p className="text-white/80">
            Password successfully changed. You will be redirected to login in {countdown} seconds.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-white mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                id="new-password"
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
            {errors.password && (
              <p className="mt-2 text-sm text-red-400">{errors.password}</p>
            )}
            <ul className="mt-2 text-sm text-white/60 space-y-1">
              <li>• At least 8 characters</li>
              <li>• One uppercase letter</li>
              <li>• One lowercase letter</li>
              <li>• One number</li>
              <li>• One special character</li>
            </ul>
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
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-400">{errors.confirmPassword}</p>
            )}
          </div>

          <Button3D type="submit" fullWidth className="py-4">
            Reset Password
          </Button3D>

          <div className="text-center text-sm text-white/60">
            <button 
              type="button"
              onClick={onLogin}
              className="text-white hover:text-silver transition-colors duration-200"
            >
              Return to login
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default ResetPasswordModal;