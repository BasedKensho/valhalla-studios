import React, { useState } from 'react';
import Button3D from '../components/ui/Button3D';
import { Calendar, Clock, Globe2, MessageSquare } from 'lucide-react';
import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';
import HighlightedText from '../components/ui/HighlightedText';

const BookACall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timezone: '',
    preferredTime: '',
    message: ''
  });

  const services = [
    "Passport & Residencies",
    "Companies, Holdings & Trusts",
    "US Banking & Credit Cards",
    "Network Access",
    "Paraguay Elite",
    "Mexico Elite",
    "Panama Elite",
    "Business Incorporation",
    "Other Services"
  ];

  const timezones = [
    'UTC-8 (PST)',
    'UTC-5 (EST)',
    'UTC+0 (GMT)',
    'UTC+1 (CET)',
    'UTC+8 (CST)'
  ];

  const timeSlots = [
    'Morning (9AM - 12PM)',
    'Afternoon (1PM - 5PM)',
    'Evening (6PM - 9PM)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-display text-center mb-4">
          Schedule a <HighlightedText text="CONSULTATION" />
        </h1>
        <p className="text-center text-lg text-white/80 mb-12">
          Take the first step towards true sovereignty and financial freedom.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                         focus:border-[#B8860B] focus:outline-none focus:ring-1 focus:ring-[#B8860B]/50 
                         transition-all duration-300 text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                         focus:border-[#B8860B] focus:outline-none focus:ring-1 focus:ring-[#B8860B]/50 
                         transition-all duration-300 text-white"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                       focus:border-[#B8860B] focus:outline-none focus:ring-1 focus:ring-[#B8860B]/50 
                       transition-all duration-300 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
              Service of Interest
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                       focus:border-[#B8860B] focus:outline-none focus:ring-1 focus:ring-[#B8860B]/50 
                       transition-all duration-300 text-white"
              required
            >
              <option value="">Select a Service</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="timezone" className="block text-sm font-medium text-white mb-2">
                <div className="flex items-center">
                  <Globe2 className="h-4 w-4 mr-2 text-[#B8860B]" />
                  Your Timezone
                </div>
              </label>
              <select
                id="timezone"
                value={formData.timezone}
                onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                         focus:border-[#B8860B] focus:outline-none focus:ring-1 focus:ring-[#B8860B]/50 
                         transition-all duration-300 text-white"
                required
              >
                <option value="">Select Timezone</option>
                {timezones.map((timezone) => (
                  <option key={timezone} value={timezone}>{timezone}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-white mb-2">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-[#B8860B]" />
                  Preferred Time
                </div>
              </label>
              <select
                id="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                         focus:border-[#B8860B] focus:outline-none focus:ring-1 focus:ring-[#B8860B]/50 
                         transition-all duration-300 text-white"
                required
              >
                <option value="">Select Time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-[#B8860B]" />
                Additional Information
              </div>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 bg-[#0e0e0e]/50 border border-white/10 rounded-lg 
                       focus:border-[#B8860B] focus:outline-none focus:ring-1 focus:ring-[#B8860B]/50 
                       transition-all duration-300 text-white"
              placeholder="Tell us about your goals and requirements..."
            />
          </div>

          <Button3D 
            type="submit" 
            fullWidth 
            className="py-4"
          >
            <div className="flex items-center justify-center">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </div>
          </Button3D>
        </form>
      </div>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </div>
  );
};

export default BookACall;