import React from 'react';
import { Github, Linkedin, Mail, Phone, Download, ArrowRight, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black">SH</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-black transition-colors font-medium scroll-smooth">About</a>
              <a href="#projects" className="text-gray-600 hover:text-black transition-colors font-medium scroll-smooth">Projects</a>
              <a href="#experience" className="text-gray-600 hover:text-black transition-colors font-medium scroll-smooth">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors font-medium scroll-smooth">Contact</a>
              <a href="#contact" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                Hi, I'm
                <span className="block text-gray-600">Sri Harshitha</span>
              </h1>
              
              <p className="text-xl text-gray-600 font-light">
                Full Stack Developer & AI Enthusiast
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              I craft scalable web applications with modern technologies, specializing in React, Django, 
              and AI integration. Passionate about creating digital experiences that make a difference.
            </p>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Hyderabad, India</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:harshithapalamani@gmail.com"
                className="group bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 font-medium"
              >
                <Mail className="w-5 h-5" />
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/Fullstack-url.pdf" 
                download="SriHarshitha_Resume.pdf"
                className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3 font-medium"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-sm text-gray-500">Follow me:</span>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/harshithapalamani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="tel:9010915106" 
                  className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Stats/Info Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="text-3xl font-bold text-black mb-2">3+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="text-3xl font-bold text-black mb-2">10+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="text-3xl font-bold text-black mb-2">200+</div>
                <div className="text-gray-600 text-sm">Monthly Readers</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="text-3xl font-bold text-black mb-2">7+</div>
                <div className="text-gray-600 text-sm">Certifications</div>
              </div>
            </div>

            {/* Featured Skills */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-black mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Django', 'Flutter', 'NextJS', 'Python', 'JavaScript','TypeScript'].map((skill) => (
                  <span key={skill} className="bg-black text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;