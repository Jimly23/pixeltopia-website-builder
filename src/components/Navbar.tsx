
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 px-8 md:px-12 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-found-blue text-white p-1 rounded">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path d="M19.5 6.75a.75.75 0 00-1.5 0v10.5a1.5 1.5 0 01-1.5 1.5h-10.5a.75.75 0 000 1.5h10.5a3 3 0 003-3V6.75z" />
              <path d="M3.75 5.25a3 3 0 013-3h10.5a.75.75 0 010 1.5h-10.5a1.5 1.5 0 00-1.5 1.5v10.5a.75.75 0 01-1.5 0v-10.5z" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-800">Found It</h1>
            <p className="text-[10px] text-gray-500 -mt-1">Career Clarity. Superior Growth.</p>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/jobseeker" className="text-gray-600 hover:text-found-blue transition-colors">For Job Seekers</Link>
          <a href="#" className="text-gray-600 hover:text-found-blue transition-colors">For Employers</a>
          <a href="#" className="text-gray-600 hover:text-found-blue transition-colors">About Us</a>
          <a href="#" className="text-gray-600 hover:text-found-blue transition-colors">Contact</a>
          <Link to="/admin" className="text-gray-600 hover:text-found-blue transition-colors">Admin</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/login" className="text-gray-600 hover:text-found-blue font-medium hidden md:block">Log In</Link>
          <Link to="/signup">
            <Button className="bg-found-blue hover:bg-found-blue-dark transition-colors">Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
