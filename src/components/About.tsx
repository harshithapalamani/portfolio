import React from 'react';
import { Code, Cpu, Globe, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "AI Integration",
      description: "Creating intelligent applications with AI/ML capabilities"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Deployment & DevOps",
      description: "Experienced in CI/CD, cloud deployment, and system optimization"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Team Leadership",
      description: "Leading development teams and mentoring junior developers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Self-driven Full Stack Developer with strong foundation in ReactJS, NextJS, Django, and Flutter, 
              and growing proficiency in GoLang. Demonstrated ability to build AI-integrated applications, 
              deploy user-facing tools, and contribute to open-source development.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Experienced in RESTful API design, SQL, Git, CI/CD, and Agile practices. Passionate about 
              scalable systems and delivering value through clean, modular code.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-100 text-black px-4 py-2 rounded-lg border border-gray-300">
                <span className="font-semibold">3+</span> Years Experience
              </div>
              <div className="bg-gray-100 text-black px-4 py-2 rounded-lg border border-gray-300">
                <span className="font-semibold">10+</span> Projects Completed
              </div>
              <div className="bg-gray-100 text-black px-4 py-2 rounded-lg border border-gray-300">
                <span className="font-semibold">200+</span> Monthly Readers
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;