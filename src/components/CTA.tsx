
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA: React.FC = () => {
  return (
    <section className="bg-found-lightgray py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Ready to Transform Your Career?</h2>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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

export default CTA;
