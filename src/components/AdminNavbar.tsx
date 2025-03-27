
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminNavbar: React.FC = () => {
  return (
    <nav className="bg-found-darkblue py-4 px-8 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/admin" className="flex items-center space-x-2">
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
            <h1 className="font-bold text-xl text-white">Admin Dashboard</h1>
            <p className="text-[10px] text-gray-300 -mt-1">Found It Management Portal</p>
          </div>
        </Link>
        
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">
            View Site
          </Link>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
