
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA: React.FC = () => {
  return (
    <section className="blue-gradient-bg wavy-pattern text-white py-16 relative overflow-hidden">
      {/* Animated dots */}
      <div className="dot w-10 h-10 top-[20%] right-[15%]"></div>
      <div className="dot w-6 h-6 top-[60%] right-[30%]"></div>
      <div className="dot w-12 h-12 top-[30%] right-[50%]"></div>
      <div className="dot w-8 h-8 top-[70%] right-[70%]"></div>
      
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Ready to Transform Your Career?</h2>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Button className="bg-white text-found-blue hover:bg-blue-50 transition-all duration-300 font-medium py-2 px-6 rounded-md shadow-md">
            Find Jobs Now
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300">
            Post Jobs Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
