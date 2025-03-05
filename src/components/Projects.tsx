import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "Food Delivery App",
    description: "A cross-platform React Native app with Firebase Authentication",
    technologies: ["React Native", "Firebase", "Redux", "Animation"],
    imageUrl: "/project-food-delivery.jpg",
    liveLink: "https://fooddelivery.example.com",
    codeLink: "https://github.com/MuhammadMoaiz001/food-delivery",
    caseStudyLink: "#"
  }, {
    title: "Personal Finance Tracker",
    description: "A finance management app for transaction tracking",
    technologies: ["React Native", "Firebase", "Charts", "Context API"],
    imageUrl: "/project-finance.jpg",
    liveLink: "https://financetracker.example.com",
    codeLink: "https://github.com/MuhammadMoaiz001/finance-tracker",
    caseStudyLink: "#"
  }, {
    title: "Wallpaper App",
    description: "Browse and download high-quality wallpapers",
    technologies: ["React Native", "API Integration", "UI/UX", "Redux"],
    imageUrl: "/project-wallpaper.jpg",
    liveLink: "https://wallpaperapp.example.com",
    codeLink: "https://github.com/MuhammadMoaiz001/wallpaper-app",
    caseStudyLink: "#"
  }, {
    title: "Weather Forecasting App",
    description: "Real-time weather updates and forecasts",
    technologies: ["React Native", "API Integration", "Animations", "Geolocation"],
    imageUrl: "/project-weather.jpg",
    liveLink: "https://weatherapp.example.com",
    codeLink: "https://github.com/MuhammadMoaiz001/weather-app",
    caseStudyLink: "#"
  }];
  return <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} className="text-3xl font-bold mb-4 text-center gradient-text font-display">
          Projects
        </motion.h2>
        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects showcasing my skills and experience as a React Native developer.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="bg-theme-dark-surface rounded-lg shadow-lg overflow-hidden group transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                {project.imageUrl ? <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> : <div className="w-full h-full bg-theme-dark-bg flex items-center justify-center">
                    <span className="text-4xl text-theme-accent1/50">No Image</span>
                  </div>}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-display">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-theme-accent1 bg-opacity-20 text-theme-accent1 rounded-full text-xs font-medium">
                        {tech}
                      </span>)}
                  </div>
                </div>
                
                {/* Project Links */}
                
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Projects;