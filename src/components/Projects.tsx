
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Eye, Star, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [{
    title: "EduMate AI Platform",
    description: "AI-powered educational mobile application developed for Muhammad Kamran from Minhaj University. Features personalized learning paths, intelligent tutoring system, and progress tracking for enhanced learning experience.",
    technologies: ["Expo", "React Navigation", "Gemini AI", "Push Notifications", "Reanimated"],
    imageUrl: "/lovable-uploads/07331ae1-46f9-43f4-b002-e023eb4c5678.png",
    slug: "edumate-ai",
    category: "AI Education",
    duration: "4 months",
    role: "Lead Mobile Developer",
    client: "Muhammad Kamran - Minhaj University Lahore",
    features: ["AI Tutoring", "Personalized Learning", "Progress Analytics", "Adaptive Content", "Smart Recommendations"],
    challenges: "Integrated complex AI algorithms into mobile app while maintaining optimal performance and user experience",
    techIcons: ["📱", "🤖", "🧠", "📈"]
  }, {
    title: "BudgetO",
    description: "Personal finance management application developed for NAM Studios. Features expense tracking, budget planning, and financial analytics with intuitive charts and data visualization.",
    technologies: ["React Native Expo", "React Navigation", "Firebase", "Reanimated", "Chart.js"],
    imageUrl: "/project-finance.png",
    slug: "budgeto",
    category: "Finance & Banking",
    duration: "2.5 months",
    role: "Mobile Developer",
    client: "NAM Studios",
    features: ["Expense Tracking", "Budget Planning", "Financial Analytics", "Goal Setting", "Data Visualization"],
    challenges: "Created comprehensive financial analytics system and ensured data security for sensitive financial information",
    techIcons: ["📱", "💰", "📊", "🔥"]
  }, {
    title: "Zenith Walls",
    description: "Premium wallpaper mobile application developed for Muhammad Naeem. Features high-quality curated collections, advanced search functionality, and seamless download experience.",
    technologies: ["Expo", "React Navigation", "Wallpapers API", "AsyncStorage", "Image Processing"],
    imageUrl: "/project-wallpaper.png",
    slug: "zenith-walls",
    category: "Lifestyle & Design",
    duration: "2 months",
    role: "Mobile Developer",
    client: "Muhammad Naeem",
    features: ["HD Wallpaper Collections", "Smart Search", "Offline Access", "Category Filters", "User Favorites"],
    challenges: "Optimized image loading and caching system for smooth browsing with thousands of high-resolution images",
    techIcons: ["📱", "🖼️", "🎨", "⚡"]
  }, {
    title: "Food Delivery App",
    description: "Practice project - Comprehensive food delivery mobile application with real-time order tracking, multiple payment options, and intuitive user interface. Built to enhance React Native skills.",
    technologies: ["React Native CLI", "React Navigation", "Firebase", "React Native Reanimated", "Maps Integration"],
    imageUrl: "/project-food-delivery.jpg",
    slug: "food-delivery-practice",
    category: "Practice Project",
    duration: "2 months",
    role: "Solo Developer",
    client: "Practice Project",
    features: ["Real-time Tracking", "Multiple Payments", "Restaurant Discovery", "Order History", "Rating System"],
    challenges: "Built complete food delivery ecosystem from scratch to practice real-time features and payment integration",
    techIcons: ["📱", "🍕", "📍", "💳"]
  }, {
    title: "SkyCart Weather App",
    description: "Practice project - Advanced weather forecasting mobile application providing accurate weather data, interactive maps, and beautiful animated weather displays. Built to improve API integration skills.",
    technologies: ["Expo", "Weather API", "React Navigation", "Push Notifications", "Maps Integration"],
    imageUrl: "/project-weather.jpeg",
    slug: "skycast-weather-practice",
    category: "Practice Project",
    duration: "1.5 months",
    role: "Solo Developer",
    client: "Practice Project",
    features: ["Accurate Forecasts", "Weather Animations", "Location Services", "Weather Alerts", "Beautiful UI"],
    challenges: "Created smooth weather animations and integrated multiple weather APIs to practice complex API handling",
    techIcons: ["📱", "🌤️", "📍", "🎨"]
  }];

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 gradient-bg gpu-optimized">
      <div className="container mx-auto px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-4xl">💻</div>
          <div className="absolute bottom-20 right-20 text-3xl">🚀</div>
          <div className="absolute top-1/2 right-10 text-2xl">⚡</div>
          <div className="absolute bottom-1/3 left-10 text-3xl">📱</div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-pro font-display">
              Featured Projects
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              A showcase of client work and practice projects demonstrating my React Native expertise
            </p>
          </motion.div>

          {/* Main Project Showcase */}
          <div className="max-w-6xl mx-auto mb-12">
            <motion.div
              key={currentProjectIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ 
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="card p-8 md:p-12 relative overflow-hidden gpu-optimized"
            >
              {/* Project Image */}
              {/* <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-2xl overflow-hidden bg-gray-800">
                    <img 
                      src={projects[currentProjectIndex].imageUrl} 
                      alt={projects[currentProjectIndex].title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                    projects[currentProjectIndex].client.includes('Practice') ? 'bg-purple-500' : 'bg-brand-accent'
                  }`}>
                    {projects[currentProjectIndex].client.includes('Practice') ? 'P' : 'C'}
                  </div>
                </div>
              </div> */}

              <div className="text-center mt-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800 flex-shrink-0">
                    <img 
                      src={projects[currentProjectIndex].imageUrl} 
                      alt={projects[currentProjectIndex].title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-display">
                    {projects[currentProjectIndex].title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    projects[currentProjectIndex].client.includes('Practice') 
                      ? 'bg-purple-500/20 text-purple-400' 
                      : 'bg-brand-accent/20 text-brand-accent'
                  }`}>
                    {projects[currentProjectIndex].client.includes('Practice') ? 'Practice Project' : 'Client Work'}
                  </span>
                  <span className="px-3 py-1 bg-brand-highlight/20 text-brand-highlight rounded-full text-sm font-medium">
                    {projects[currentProjectIndex].duration}
                  </span>
                </div>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  {projects[currentProjectIndex].description}
                </p>

                {/* Client & Role Info */}
                <div className="flex justify-center items-center gap-8 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-brand-secondary" />
                    <div>
                      <p className="text-sm text-gray-400">Client</p>
                      <p className="text-white font-medium">{projects[currentProjectIndex].client}</p>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-accent" />
                    <div>
                      <p className="text-sm text-gray-400">Role</p>
                      <p className="text-white font-medium">{projects[currentProjectIndex].role}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-200 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {projects[currentProjectIndex].technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${
                          idx % 4 === 0 ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' :
                          idx % 4 === 1 ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' :
                          idx % 4 === 2 ? 'bg-green-500/10 border-green-500/30 text-green-400' :
                          'bg-orange-500/10 border-orange-500/30 text-orange-400'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-200 mb-4">Key Features</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {projects[currentProjectIndex].features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-200 mb-4">Technical Challenge</h4>
                  <p className="text-gray-400 italic max-w-3xl mx-auto">
                    "{projects[currentProjectIndex].challenges}"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={prevProject}
                className="p-3 bg-brand-secondary/20 hover:bg-brand-secondary text-white rounded-full ultra-smooth hover-lift gpu-optimized"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Project Indicators */}
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      currentProjectIndex === index ? 'bg-brand-secondary' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="p-3 bg-brand-secondary/20 hover:bg-brand-secondary text-white rounded-full ultra-smooth hover-lift gpu-optimized"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Projects Grid Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className={`p-4 rounded-xl cursor-pointer ultra-smooth border gpu-optimized scale-smooth ${
                  currentProjectIndex === index 
                    ? 'bg-brand-secondary/20 border-2 border-brand-secondary scale-105' 
                    : 'bg-surface-dark hover:bg-surface-dark/80 hover:scale-105 border-gray-700'
                }`}
                onClick={() => setCurrentProjectIndex(index)}
              >
                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-gray-800">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
                    project.client.includes('Practice') ? 'bg-purple-500' : 'bg-brand-accent'
                  }`}></div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  {/* <div className="w-4 h-4 rounded overflow-hidden bg-gray-700 flex-shrink-0">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div> */}
                  <h6 className="font-semibold text-white text-sm text-center leading-tight line-clamp-2 flex-1">
                    {project.title}
                  </h6>
                </div>
                <p className="text-xs text-gray-400 text-center mt-1">{project.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
