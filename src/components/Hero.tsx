
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="bg-found-lightgray py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
          Hi, I'm <span className="text-found-darkblue">Found</span><span className="text-found-blue">It</span>
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mt-4 text-found-blue animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          AI-Powered Job Matching
        </h2>
        
        <p className="text-lg md:text-xl mt-8 text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          I create personalized job connections 
          where technology meets opportunity
        </p>
        
        <div className="mt-12 space-x-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <Button className="bg-found-darkblue text-white hover:bg-found-darkblue/90 px-8 py-6 rounded-md" size="lg">
            Find Jobs Now
          </Button>
          <Button variant="outline" className="bg-transparent border-found-blue text-found-blue hover:bg-found-blue/10 px-8 py-6 rounded-md" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
