
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "NemoDelivers",
      description: "A cross-platform food delivery app connecting users with local restaurants",
      technologies: ["React Native", "Firebase", "Redux", "Animation"],
      imageUrl: "/project-food-delivery.jpg",
      slug: "nemodelivers"
    }, 
    {
      title: "BudgetO",
      description: "A finance management app for transaction tracking and budget planning",
      technologies: ["React Native", "Firebase", "Charts", "Context API"],
      imageUrl: "/project-finance.png",
      slug: "budgeto"
    }, 
    {
      title: "Zenith Walls",
      description: "Browse and download high-quality wallpapers for your devices",
      technologies: ["React Native", "API Integration", "UI/UX", "Redux"],
      imageUrl: "/project-wallpaper.png",
      slug: "zenithwalls"
    }, 
    {
      title: "Sky Cast",
      description: "Real-time weather updates and forecasts with location tracking",
      technologies: ["React Native", "API Integration", "Animations", "Geolocation"],
      imageUrl: "/project-weather.jpeg",
      slug: "skycast"
    },
    {
      title: "EduMate AI",
      description: "AI-driven educational app that personalizes learning experiences",
      technologies: ["React Native", "Machine Learning", "API Integration", "Firebase"],
      imageUrl: "/lovable-uploads/07331ae1-46f9-43f4-b002-e023eb4c5678.png",
      slug: "edumate-ai"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-4 text-center gradient-text font-display"
        >
          Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          Here are some of my recent projects showcasing my skills and experience as a React Native developer.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-theme-dark-surface rounded-lg shadow-lg overflow-hidden group transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-display">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-theme-accent1 bg-opacity-20 text-theme-accent1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex mt-4">
                  <Link 
                    to={`/project/${project.slug}`} 
                    className="flex items-center text-theme-accent1 hover:text-theme-accent2 transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    <span className="text-sm">View Details</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
