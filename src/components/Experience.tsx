import React from 'react';
import { Users, Award, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const positions = [
    {
      title: "Technical Head",
      organization: "ACM VVIT",
      period: "Mar 2024 - April 2025",
      type: "Leadership Role",
      achievements: [
        "Organized 5+ tech fests/workshops for 5000+ students",
        "Supervised 30+ juniors",
        "Published 10+ tech blogs with 500+ monthly readership on AI and development trends"
      ]
    },
    {
      title: "Team Lead",
      organization: "EPICS India, IUCEE",
      period: "Mar 2023 - Nov 2023",
      type: "Project Leadership",
      achievements: [
        "Led a team of 10+ on a social impact tech project connecting farmers to consumers",
        "Delivered user feedback loops and simplified farmer onboarding through interviews and app mockups"
      ]
    }
  ];

  const achievements = [
    {
      title: "Bronze Medal Academic Excellence",
      description: "Awarded for top performance in 1st Year (2023)"
    },
    {
      title: "Chairman's Club",
      description: "Selected among top 10 students institute-wide for outstanding academic and extracurricular contributions"
    },
    {
      title: "Technical Writing",
      description: "Authored 10+ blog posts for ACM VVIT, providing analysis on tech trends and reaching over 500 readers monthly"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Leadership roles and recognitions</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Positions of Responsibility */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-black" />
              Positions of Responsibility
            </h3>
            
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-black rounded-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-bold text-black">{position.title}</h4>
                        <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-xs font-medium">
                          {position.type}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 font-semibold mb-2">{position.organization}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Calendar className="w-4 h-4" />
                        {position.period}
                      </div>
                      <ul className="space-y-2">
                        {position.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-black" />
              Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-black hover:bg-white transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-black rounded-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black mb-2">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;