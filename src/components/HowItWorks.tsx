
import React from 'react';
import { Users, Clipboard, ChevronRight, BarChart3 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-found-lightgray">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
        </div>
        
        {/* For Job Seekers */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12">For Job Seekers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">
            {/* Arrow connectors (only visible on desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
              <ChevronRight size={32} className="text-found-blue" />
            </div>
            <div className="hidden md:block absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2">
              <ChevronRight size={32} className="text-found-blue" />
            </div>
            
            {/* Step 1 */}
            <div className="step-card">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-found-blue" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Create Profile</h4>
                <p className="text-gray-600 text-sm">AI analyzes your skills and experience</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="step-card">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Clipboard className="w-7 h-7 text-found-blue" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Get Matched</h4>
                <p className="text-gray-600 text-sm">Receive personalized job recommendations</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="step-card">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-found-blue" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Apply & Track</h4>
                <p className="text-gray-600 text-sm">Manage applications in your dashboard</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* For Employers */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">For Employers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">
            {/* Arrow connectors (only visible on desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
              <ChevronRight size={32} className="text-found-blue" />
            </div>
            <div className="hidden md:block absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2">
              <ChevronRight size={32} className="text-found-blue" />
            </div>
            
            {/* Step 1 */}
            <div className="step-card">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-found-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                    <polyline points="7.5 19.79 7.5 14.6 3 12" />
                    <polyline points="21 12 16.5 14.6 16.5 19.79" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Post a Job</h4>
                <p className="text-gray-600 text-sm">AI assists in writing job descriptions</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="step-card">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-found-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19.6 3.2l1.6-1.6M2.8 20.4l1.6-1.6M6.4 3.2l-1.6-1.6M21.2.8l-6.4 6.4" />
                    <path d="M14 7.8A6 6 0 004 16a4.83 4.83 0 004.8 5.6h0a4.83 4.83 0 005.6-4.8A6 6 0 0014 7.8z" />
                    <path d="M17.6 20.4l1.6 1.6" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Screen Automatically</h4>
                <p className="text-gray-600 text-sm">AI ranks and filters candidates</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="step-card">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-found-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Interview & Hire</h4>
                <p className="text-gray-600 text-sm">Complete hiring with built-in tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
