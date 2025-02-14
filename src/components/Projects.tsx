
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-theme-dark-surface p-6 rounded-lg card-hover"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <ul className="list-disc list-inside mb-4 text-gray-300">
                {project.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-theme-accent1 bg-opacity-20 text-theme-accent1 rounded-full text-sm"
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
