import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "SQL", "Dart"]
    },
    {
      title: "Frontend Technologies",
      skills: ["ReactJS", "NextJS", "Tailwind CSS", "Flutter", "HTML/CSS"]
    },
    {
      title: "Backend & APIs",
      skills: ["Django", "NodeJS", "REST APIs", "Firebase", "Express.js"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Firebase DB", "MongoDB"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "CI/CD", "Docker", "AWS", "Linux"]
    },
    {
      title: "Design & Others",
      skills: ["Figma", "Agile", "Alteryx", "Technical Writing", "UI/UX"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors duration-300">
              <h3 className="text-xl font-bold text-black mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300 hover:border-black hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;