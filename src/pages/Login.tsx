import React, { useState } from 'react';
import Button3D from '../components/ui/Button3D';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="pt-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-display text-center mb-8">
          Welcome <span className="text-gold">Back</span>
        </h1>
        
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
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                       focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 
                       transition-all duration-300 text-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                       focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 
                       transition-all duration-300 text-white"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-gold 
                         focus:ring-gold/50"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                Remember me
              </label>
            </div>

            <a href="#" className="text-sm text-gold hover:text-silver transition-colors duration-200">
              Forgot password?
            </a>
          </div>

          <Button3D type="submit" fullWidth className="py-4">
            Sign In
          </Button3D>

          <p className="text-center text-sm text-white/60">
            Don't have an account?{' '}
            <a href="/get-started" className="text-gold hover:text-silver transition-colors duration-200">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;