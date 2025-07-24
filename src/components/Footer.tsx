import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Sri Harshithapalamani</h3>
            <p className="text-gray-400">Full Stack Developer & AI Enthusiast</p>
          </div>
          
          {/* <div className="flex justify-center items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and</span>
            <Code className="w-4 h-4 text-emerald-500" />
            <span>using React & Tailwind CSS</span>
          </div>
           */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sri Harshithapalamani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;