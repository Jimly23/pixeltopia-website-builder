
import React from 'react';
import { Users, Clipboard, BarChart3, ArrowRight } from 'lucide-react';

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
            {/* Arrow connectors (only visible on desktop) */}
            <div className="hidden md:flex absolute top-1/3 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
              <ArrowRight size={28} className="text-found-blue" />
            </div>
            <div className="hidden md:flex absolute top-1/3 left-2/3 transform -translate-y-1/2 -translate-x-1/2">
              <ArrowRight size={28} className="text-found-blue" />
            </div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-found-blue" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Create Profile</h4>
              <p className="text-gray-600 text-sm">AI analyzes your skills and experience</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-found-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 4v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2zm-8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-7-7h14M5 7h14"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Get Matched</h4>
              <p className="text-gray-600 text-sm">Receive personalized job recommendations</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-found-blue" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Apply & Track</h4>
              <p className="text-gray-600 text-sm">Manage applications in your dashboard</p>
            </div>
          </div>
        </div>
        
        {/* For Employers */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">For Employers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
            {/* Arrow connectors (only visible on desktop) */}
            <div className="hidden md:flex absolute top-1/3 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
              <ArrowRight size={28} className="text-found-blue" />
            </div>
            <div className="hidden md:flex absolute top-1/3 left-2/3 transform -translate-y-1/2 -translate-x-1/2">
              <ArrowRight size={28} className="text-found-blue" />
            </div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-found-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.586a1 1 0 0 1-.707-.293L13 3H5a2 2 0 0 0-2 2zm10.5 2.5V15M9 12h7"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Post a Job</h4>
              <p className="text-gray-600 text-sm">AI assists in writing job descriptions</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-found-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4v16a2 2 0 0 0 2 2h4.586a1 1 0 0 0 .707-.293L12 19h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2.586a1 1 0 0 1-.707-.293L15 3H4a2 2 0 0 0-2 1z"/>
                  <path d="M6 15l6-6 6 6"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Screen Automatically</h4>
              <p className="text-gray-600 text-sm">AI ranks and filters candidates</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-found-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="8" height="8" x="2" y="2" rx="2"/>
                  <rect width="8" height="8" x="14" y="2" rx="2"/>
                  <rect width="8" height="8" x="2" y="14" rx="2"/>
                  <rect width="8" height="8" x="14" y="14" rx="2"/>
                  <path d="M8 6h.01M16 6h.01M8 18h.01M16 18h.01"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Interview & Hire</h4>
              <p className="text-gray-600 text-sm">Complete hiring with built-in tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
