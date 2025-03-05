
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery App",
      description: "A cross-platform React Native app with Firebase Authentication",
      features: [
        "Built with React Native and Firebase Authentication",
        "Integrated third-party libraries for enhanced app performance",
        "Optimized navigation and added animations for an intuitive user experience",
      ],
      tags: ["React Native", "Firebase", "Animation"],
      imageUrl: "/project-food-delivery.jpg",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Personal Finance Tracker",
      description: "A finance management app for transaction tracking",
      features: [
        "Developed a finance management app enabling transaction tracking and categorization",
        "Implemented Firebase for secure user authentication and real-time data storage",
        "Visualized data with charts for better user insights",
      ],
      tags: ["React Native", "Firebase", "Charts"],
      imageUrl: "/project-finance.jpg",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Wallpaper App",
      description: "Browse and download high-quality wallpapers",
      features: [
        "Created a React Native app to browse and download high-quality wallpapers",
        "Integrated API for fetching wallpapers and added search/filter functionality",
        "Designed a responsive UI for seamless performance across devices",
      ],
      tags: ["React Native", "API Integration", "UI/UX"],
      imageUrl: "/project-wallpaper.jpg",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Weather Forecasting App",
      description: "Real-time weather updates and forecasts",
      features: [
        "Built a weather app with real-time updates and a 7-day forecast",
        "Integrated API for global city search and weather data display",
        "Enhanced user experience with smooth animations and responsive UI",
      ],
      tags: ["React Native", "API Integration", "Animations"],
      imageUrl: "/project-weather.jpg",
      liveLink: "#",
      codeLink: "#",
    },
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
              className="bg-theme-dark-surface p-6 rounded-lg shadow-md"
            >
              <div className="relative overflow-hidden mb-6 rounded-md bg-theme-dark-bg aspect-video flex items-center justify-center">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl text-theme-accent1/20 flex items-center justify-center h-full">
                    <Code />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-theme-accent2 text-black p-2 rounded-full"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.codeLink && (
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-theme-accent1 text-white p-2 rounded-full"
                        aria-label="View Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-theme-accent1 bg-opacity-20 text-theme-accent1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
