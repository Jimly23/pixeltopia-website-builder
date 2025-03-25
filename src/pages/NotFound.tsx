
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-found-lightgray">
        <div className="text-center px-6 py-24 max-w-2xl">
          <h1 className="text-6xl font-bold text-found-blue mb-6 animate-fade-in-up">404</h1>
          <p className="text-2xl text-gray-700 mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Oops! Page not found
          </p>
          <p className="text-gray-600 mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button
            className="btn-primary animate-fade-in-up"
            style={{animationDelay: '0.3s'}}
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
