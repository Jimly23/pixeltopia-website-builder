
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 px-8 md:px-12 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
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
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="group relative">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-found-blue transition-colors">
              <span>For Job Seekers</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-3 w-48 mt-1">
              <a href="#" className="block py-2 px-3 hover:bg-gray-50 rounded-md">Find Jobs</a>
              <a href="#" className="block py-2 px-3 hover:bg-gray-50 rounded-md">Resume Builder</a>
              <a href="#" className="block py-2 px-3 hover:bg-gray-50 rounded-md">Career Advice</a>
            </div>
          </div>
          
          <div className="group relative">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-found-blue transition-colors">
              <span>For Employers</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-3 w-48 mt-1">
              <a href="#" className="block py-2 px-3 hover:bg-gray-50 rounded-md">Post a Job</a>
              <a href="#" className="block py-2 px-3 hover:bg-gray-50 rounded-md">Talent Search</a>
              <a href="#" className="block py-2 px-3 hover:bg-gray-50 rounded-md">Pricing</a>
            </div>
          </div>
          
          <a href="#" className="text-gray-600 hover:text-found-blue transition-colors">About Us</a>
          <a href="#" className="text-gray-600 hover:text-found-blue transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-3">
          <a href="#" className="text-gray-600 hover:text-found-blue font-medium hidden md:block">Log In</a>
          <Button className="bg-found-blue hover:bg-found-blue-dark transition-colors">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
