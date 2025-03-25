
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const particleContainerRef = useRef<HTMLDivElement>(null);
  
  // Create particles animation
  useEffect(() => {
    if (!particleContainerRef.current) return;
    
    const container = particleContainerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create new particles
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 10 + 2;
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      const opacity = Math.random() * 0.5 + 0.1;
      const delay = Math.random() * 4;
      const duration = Math.random() * 10 + 10;
      
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.opacity = opacity.toString();
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      
      container.appendChild(particle);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, []);
  
  return (
    <section className="relative blue-gradient-bg wavy-pattern text-white overflow-hidden">
      <div ref={particleContainerRef} className="particle-container"></div>
      
      {/* Animated dots */}
      <div className="dot w-12 h-12 top-[20%] right-[15%]"></div>
      <div className="dot w-8 h-8 top-[60%] right-[30%]"></div>
      <div className="dot w-16 h-16 top-[30%] right-[50%]"></div>
      <div className="dot w-10 h-10 top-[70%] right-[70%]"></div>
      
      {/* Digital lines */}
      <div className="absolute w-full h-full pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <path d="M0,0 L1000,200 M0,100 L1000,300 M0,200 L1000,400 M0,300 L1000,500 M0,400 L1000,600" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 py-20 md:py-32 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
            Your Career, Powered <br />by AI
          </h1>
          <p className="text-lg md:text-xl mt-6 text-blue-100 max-w-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Get matched to dream jobs with AI-powered recommendations tailored to your skills and aspirations.
          </p>
          <div className="mt-8 space-x-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button className="bg-white text-found-blue hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 font-medium py-2 px-6 rounded-md shadow-md">
              Find Jobs Now
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Post Jobs Free
            </Button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="relative">
            <svg width="320" height="300" viewBox="0 0 320 300" fill="none" className="animate-float">
              <path d="M160 40C93.8 40 40 93.8 40 160C40 226.2 93.8 280 160 280C226.2 280 280 226.2 280 160C280 93.8 226.2 40 160 40Z" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" />
              <path d="M160 15C79.5 15 15 79.5 15 160C15 240.5 79.5 305 160 305C240.5 305 305 240.5 305 160C305 79.5 240.5 15 160 15Z" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="5 5" />
              <path d="M160 70C110.3 70 70 110.3 70 160C70 209.7 110.3 250 160 250C209.7 250 250 209.7 250 160C250 110.3 209.7 70 160 70Z" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
              <g className="animate-pulse-light">
                <circle cx="160" cy="160" r="5" fill="white" />
                <circle cx="120" cy="140" r="3" fill="white" />
                <circle cx="200" cy="140" r="3" fill="white" />
                <circle cx="100" cy="180" r="3" fill="white" />
                <circle cx="220" cy="180" r="3" fill="white" />
                <circle cx="140" cy="100" r="3" fill="white" />
                <circle cx="180" cy="220" r="3" fill="white" />
              </g>
              <path d="M90 160C90 160 120 120 160 120C200 120 230 160 230 160C230 160 200 200 160 200C120 200 90 160 90 160Z" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="160" cy="160" r="15" fill="rgba(255, 255, 255, 0.5)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
