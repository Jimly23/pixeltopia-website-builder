
import React from 'react';
import { Database, FileText, Video } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Found It?</h2>
          <p className="mt-4 text-gray-600">Revolutionizing recruitment with AI-powered solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Career Matching */}
          <div className="card-feature flex flex-col items-center text-center group" data-aos="fade-up">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-found-blue group-hover:text-white transition-colors duration-300">
              <Database className="w-8 h-8 text-found-blue group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Career Matching</h3>
            <p className="text-gray-600">Smart algorithms match your skills with the perfect opportunities</p>
          </div>
          
          {/* Resume Optimizer */}
          <div className="card-feature flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-found-blue group-hover:text-white transition-colors duration-300">
              <FileText className="w-8 h-8 text-found-blue group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Resume Optimizer</h3>
            <p className="text-gray-600">AI-powered tools to perfect your resume and stand out</p>
          </div>
          
          {/* Interview Prep */}
          <div className="card-feature flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-found-blue group-hover:text-white transition-colors duration-300">
              <Video className="w-8 h-8 text-found-blue group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Interview Prep</h3>
            <p className="text-gray-600">Practice with AI to ace your next interview</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
