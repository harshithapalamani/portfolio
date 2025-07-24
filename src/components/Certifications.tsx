import React from 'react';
import { Award, ExternalLink, BookOpen } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Stanford University Certification",
      issuer: "Stanford University",
      category: "Computer Science",
      color: "bg-black",
      credentialId: "TWLAXHUPJ7CW",
      issueDate: "Jul 2025"
    },
    {
      name: "Programming in Java",
      issuer: "NPTEL",
      category: "Programming",
      color: "bg-black"
    },
    {
      name: "Entrepreneurial Thinking",
      issuer: "IUCEE",
      category: "Business",
      color: "bg-black"
    },
    {
      name: "Alteryx Designer Certifications",
      issuer: "ALTERYX",
      category: "Data Analytics",
      color: "bg-black"
    },
    {
      name: "Deep Learning for Computer Vision",
      issuer: "WORLDQUANT UNIVERSITY",
      category: "Machine Learning",
      color: "bg-black"
    },
    {
      name: "UI Design",
      issuer: "University of Minnesota",
      category: "Design",
      color: "bg-black"
    },
    {
      name: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      category: "Cloud Computing",
      color: "bg-black"
    },
    {
      name: "Hardware and Operating Systems",
      issuer: "edX Verified Certificate",
      category: "Computer Science",
      color: "bg-black"
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Courses</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-4">Continuous learning and professional development</p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <span key={index} className="bg-white text-black px-4 py-2 rounded-full shadow-md text-sm font-medium border border-gray-300">
                {category}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200">
              <div className="h-1 bg-black"></div>
              
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-black transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-black font-medium mb-2">{cert.issuer}</p>
                    <span className="inline-block bg-gray-100 text-black px-3 py-1 rounded-full text-sm border border-gray-300">
                      {cert.category}
                    </span>
                    {cert.credentialId && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-500">
                          <span className="font-medium">Credential ID:</span> {cert.credentialId}
                        </p>
                        {cert.issueDate && (
                          <p className="text-xs text-gray-500">
                            <span className="font-medium">Issued:</span> {cert.issueDate}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center justify-center gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-black" />
              <h3 className="text-2xl font-bold text-gray-900">Continuous Learning</h3>
            </div>
            <p className="text-gray-600">
              I'm committed to staying updated with the latest technologies and best practices in software development.
              Currently exploring advanced GoLang concepts and cloud architecture patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;