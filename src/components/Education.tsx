import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Vasireddy Venkatadri Institute of Technology",
      location: "Guntur, Andhra Pradesh",
      period: "Sep 2022 - Present",
      status: "Current",
      description: "Pursuing Computer Science and Engineering with focus on Full Stack Development and AI/ML"
    },
    {
      degree: "Intermediate Education",
      field: "Mathematics, Physics, Chemistry",
      institution: "Bhashyam College of Education",
      location: "Hyderabad, Telangana",
      period: "Mar 2020 - Apr 2022",
      status: "Completed",
      description: "Completed intermediate education with strong foundation in Mathematics and Science"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Education</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Academic journey and achievements</p>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="group">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl">
                <div className="grid lg:grid-cols-3 gap-6">
                  
                  {/* Icon and Status */}
                  <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                    <div className="bg-black p-4 rounded-xl mb-4 group-hover:bg-gray-800 transition-colors">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      edu.status === 'Current' 
                        ? 'bg-black text-white' 
                        : 'bg-gray-200 text-black'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  {/* Main Information */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-black mb-2">{edu.degree}</h3>
                    <p className="text-lg font-semibold text-gray-700 mb-2">{edu.field}</p>
                    <p className="text-xl text-black font-medium mb-3">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;