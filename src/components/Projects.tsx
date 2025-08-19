import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Bot, Shield, Image } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Image Generator App",
      description: "Built a full-stack SaaS platform for generating AI images from user prompts using Cloudinary API. Achieved 90%+ prompt-to-image accuracy and deployed with responsive routing and image caching.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "Cloudinary API"],
      icon: <Image className="w-8 h-8 text-white" />,
      metrics: "90%+ accuracy, 98% test success rate",
      githubUrl: "https://github.com/harshithapalamani/rendernova.git", // Add your GitHub URL here
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "Community Service App",
      description: "Designed a mobile app to connect rural citizens with village service officers by building role-based UI and cloud database structure. Tested with simulated input to handle 50+ community requests.",
      technologies: ["Flutter", "Firebase"],
      icon: <Smartphone className="w-8 h-8 text-white" />,
      metrics: "50+ requests handled, role-based access",
      gradient: "from-purple-500 to-blue-500",
      githubUrl: "https://github.com/harshithapalamani/rendernova" // Add your GitHub URL here
    },
    {
      title: "Student-Alumni Platform",
      description: "Developed a full-stack portal to connect students with alumni mentors through custom dashboards and secure login, serving as an internal use case for 300+ students.",
      technologies: ["ReactJS", "Django"],
      icon: <Globe className="w-8 h-8 text-white" />,
      metrics: "300+ students served",
      gradient: "from-teal-500 to-blue-500",
      githubUrl: "https://github.com/harshithapalamani/alumni-student-intelligent-platform" // Add your GitHub URL here
    },
    {
      title: "Gemini AI Chatbot Clone",
      description: "Created a conversational AI clone using Gemini API by Google; implemented message flow logic to handle context-aware conversations, achieving 95%+ retention in session.",
      technologies: ["ReactJS", "Gemini API", "Vercel"],
      icon: <Bot className="w-8 h-8 text-white" />,
      metrics: "95%+ session retention",
      gradient: "from-blue-600 to-purple-600",
      githubUrl: "https://github.com/harshithapalamani/alumni-student-intelligent-platform" // Add your GitHub URL here
    },
    {
      title: "Fake News Detection App",
      description: "Built and deployed a tool to detect misinformation using LLM-based semantic analysis; analyzed over 100 news articles with 87% accuracy and provided real-time explanations.",
      technologies: ["Streamlit", "Gemini API", "Python"],
      icon: <Shield className="w-8 h-8 text-white" />,
      metrics: "87% accuracy, 100+ articles analyzed",
      gradient: "from-purple-600 to-teal-600",
      githubUrl: "https://github.com/harshithapalamani/app-news-detect" // Add your GitHub URL here
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="h-2 bg-black"></div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-black rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium border border-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-3">
                    <span className="font-medium">Key Metrics:</span> {project.metrics}
                  </p>
                  
                  <div>
                    {project.githubUrl && project.githubUrl.trim() !== "" ? (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors text-sm w-fit"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    ) : (
                      <button 
                        className="flex items-center gap-2 bg-gray-200 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed text-sm w-fit"
                        disabled
                      >
                        <Github className="w-4 h-4" />
                        Add Repository Link
                      </button>
                    )}
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

export default Projects;