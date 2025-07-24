import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-4">Let's discuss your next project or opportunity</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="p-3 bg-black rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:harshithapalamani@gmail.com" className="text-black hover:text-gray-700">
                    harshithapalamani@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="p-3 bg-black rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:9010915106" className="text-black hover:text-gray-700">
                    9010915106
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="p-3 bg-black rounded-lg">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/harshithapalamani" className="text-black hover:text-gray-700">
                    linkedin.com/in/harshithapalamani
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="p-3 bg-black rounded-lg">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <a href="https://github.com/harshithapalamani" className="text-black hover:text-gray-700">
                    github.com/harshithapalamani
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;