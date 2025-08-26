import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Smartphone, Server, Zap, Shield, Layers, ChevronLeft, ChevronRight, Star } from "lucide-react";

const About = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const skills = [{
    icon: <Code2 className="w-12 h-12" />,
    title: "Frontend Development",
    description: "Creating beautiful, responsive user interfaces with modern web technologies",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Tailwind CSS", "Responsive Design"],
    gradient: "from-blue-500 to-cyan-400",
    projects: "5+ Web Applications",
    experience: "2+ Years"
  }, {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile Development",
    description: "Building cross-platform mobile apps with React Native for iOS and Android",
    technologies: ["React Native", "Expo CLI", "React Navigation", "AsyncStorage", "Push Notifications", "App Store Deployment"],
    gradient: "from-green-500 to-emerald-400",
    projects: "10+ Mobile Apps",
    experience: "2+ Years"
  }, {
    icon: <Server className="w-12 h-12" />,
    title: "Backend Integration",
    description: "Connecting mobile apps with backend services and databases",
    technologies: ["REST APIs", "Firebase", "Real-time Database", "Authentication", "Cloud Functions", "Node.js"],
    gradient: "from-purple-500 to-pink-400",
    projects: "8+ Integrations",
    experience: "2+ Years"
  }, {
    icon: <Zap className="w-12 h-12" />,
    title: "Performance Optimization",
    description: "Optimizing mobile applications for better performance and user experience",
    technologies: ["Code Optimization", "Memory Management", "Bundle Size Reduction", "Caching Strategies", "Performance Monitoring"],
    gradient: "from-yellow-500 to-orange-400",
    projects: "10+ Optimized Apps",
    experience: "2+ Years"
  }, {
    icon: <Shield className="w-12 h-12" />,
    title: "Security & Quality",
    description: "Implementing security best practices and maintaining code quality",
    technologies: ["Code Security", "Data Validation", "Secure Authentication", "Code Reviews", "Testing", "Quality Assurance"],
    gradient: "from-red-500 to-rose-400",
    projects: "All Projects Secured",
    experience: "2+ Years"
  }, {
    icon: <Layers className="w-12 h-12" />,
    title: "Architecture & Design",
    description: "Designing clean, maintainable code structure and app architecture",
    technologies: ["Component Architecture", "State Management", "Design Patterns", "Code Organization", "App Structure", "Documentation"],
    gradient: "from-indigo-500 to-purple-400",
    projects: "10+ Architectures",
    experience: "2+ Years"
  }];

  // Auto-rotate skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const nextSkill = () => {
    setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSkill = () => {
    setCurrentSkillIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };
  return (
    <section id="about" className="py-20 bg-theme-dark-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-4xl">👨‍💻</div>
        <div className="absolute bottom-20 right-20 text-3xl">🚀</div>
        <div className="absolute top-1/2 right-10 text-2xl">⚡</div>
        <div className="absolute bottom-1/3 left-10 text-3xl">💡</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text-pro font-display">
                About Me
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                  Transforming Ideas into 
                  <span className="text-brand-secondary font-bold"> Exceptional Mobile Experiences</span>
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent mx-auto rounded-full"></div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="order-2 lg:order-1 gpu-optimized"
            >
              <div className="relative">
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                    repeatType: "reverse"
                  }}
                  className="absolute -top-8 -left-8 w-16 h-16 bg-brand-secondary/20 rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                    repeatType: "reverse"
                  }}
                  className="absolute -bottom-6 -right-6 w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center"
                >
                  <span className="text-xl">🚀</span>
                </motion.div>
                
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-secondary/30 via-brand-accent/20 to-brand-highlight/30 p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      alt="codewithmoju - React Native Developer" 
                      className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700" 
                      src="/lovable-uploads/90dce04e-90f4-49dc-a702-309682fd39ee.jpg" 
                    />
                    {/* Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                </div>
                
                {/* Achievement Badges */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-4 right-4 bg-brand-highlight text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                >
                  ⭐ Top Rated
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="order-1 lg:order-2 gpu-optimized"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">
                    Crafting Digital 
                    <span className="gradient-text-pro"> Excellence</span>
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    I'm a passionate React Native Developer who transforms complex ideas into intuitive, 
                    high-performance mobile applications. My journey in mobile development is driven by 
                    an obsession with creating seamless user experiences that make a real difference.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="flex items-center space-x-4 p-4 bg-brand-secondary/10 rounded-2xl hover:bg-brand-secondary/20 ultra-smooth gpu-optimized"
                  >
                    <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Problem Solver</h4>
                      <p className="text-gray-400">Turning complex challenges into elegant solutions</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="flex items-center space-x-4 p-4 bg-brand-accent/10 rounded-2xl hover:bg-brand-accent/20 ultra-smooth gpu-optimized"
                  >
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Performance Focused</h4>
                      <p className="text-gray-400">Building fast, scalable, and efficient applications</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="flex items-center space-x-4 p-4 bg-brand-highlight/10 rounded-2xl hover:bg-brand-highlight/20 ultra-smooth gpu-optimized"
                  >
                    <div className="w-12 h-12 bg-brand-highlight rounded-xl flex items-center justify-center">
                      <span className="text-xl text-black">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Innovation Driven</h4>
                      <p className="text-gray-400">Always exploring cutting-edge technologies</p>
                    </div>
                  </motion.div>
                </div>

                {/* Impressive Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="text-center p-6 bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/10 rounded-2xl border border-brand-secondary/20 scale-smooth gpu-optimized"
                  >
                    <div className="text-3xl font-bold text-brand-secondary mb-2">10+</div>
                    <div className="text-sm text-gray-400 font-medium">Apps Built</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="text-center p-6 bg-gradient-to-br from-brand-accent/20 to-brand-accent/10 rounded-2xl border border-brand-accent/20 scale-smooth gpu-optimized"
                  >
                    <div className="text-3xl font-bold text-brand-accent mb-2">2+</div>
                    <div className="text-sm text-gray-400 font-medium">Years Exp</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="text-center p-6 bg-gradient-to-br from-brand-highlight/20 to-brand-highlight/10 rounded-2xl border border-brand-highlight/20 scale-smooth gpu-optimized"
                  >
                    <div className="text-3xl font-bold text-brand-highlight mb-2">3</div>
                    <div className="text-sm text-gray-400 font-medium">Clients</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-pro font-display">
                My Expertise
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Comprehensive skill set covering all aspects of modern mobile and web development
              </p>
            </div>

            {/* Main Skill Showcase */}
            <div className="max-w-5xl mx-auto mb-12">
              <motion.div
                key={currentSkillIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="card p-8 md:p-12 relative"
              >
                {/* Skill Icon */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className={`bg-gradient-to-r ${skills[currentSkillIndex].gradient} p-6 rounded-2xl shadow-2xl`}>
                    {skills[currentSkillIndex].icon}
                  </div>
                </div>

                <div className="text-center mt-8">
                  <h4 className="text-3xl font-bold text-white mb-4">
                    {skills[currentSkillIndex].title}
                  </h4>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                    {skills[currentSkillIndex].description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-200 mb-4">Technologies & Tools</h5>
                    <div className="flex flex-wrap justify-center gap-3">
                      {skills[currentSkillIndex].technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${skills[currentSkillIndex].gradient}/20 text-white border border-white/10`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience Stats */}
                  <div className="flex justify-center items-center gap-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-brand-secondary">
                        {skills[currentSkillIndex].projects}
                      </div>
                      <div className="text-sm text-gray-400">Projects Completed</div>
                    </div>
                    <div className="w-px h-12 bg-gray-600"></div>
                    <div>
                      <div className="text-2xl font-bold text-brand-accent">
                        {skills[currentSkillIndex].experience}
                      </div>
                      <div className="text-sm text-gray-400">Professional Experience</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <button
                  onClick={prevSkill}
                  className="p-3 bg-brand-secondary/20 hover:bg-brand-secondary text-white rounded-full transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Skill Indicators */}
                <div className="flex gap-2">
                  {skills.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSkillIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        currentSkillIndex === index ? 'bg-brand-secondary' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSkill}
                  className="p-3 bg-brand-secondary/20 hover:bg-brand-secondary text-white rounded-full transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Skills Grid Preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    currentSkillIndex === index 
                      ? 'bg-brand-secondary/20 border-2 border-brand-secondary scale-105' 
                      : 'bg-surface-dark hover:bg-surface-dark/80 hover:scale-105'
                  }`}
                  onClick={() => setCurrentSkillIndex(index)}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.gradient} text-white mb-3 mx-auto`}>
                    <div className="scale-75">
                      {skill.icon}
                    </div>
                  </div>
                  <h6 className="font-semibold text-white text-sm text-center leading-tight">
                    {skill.title}
                  </h6>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mind-Blowing Education Section */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-4xl md:text-6xl font-bold mb-8 gradient-text-pro font-display">
                  Academic Excellence
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Building a strong foundation in computer science and software engineering to create 
                  <span className="text-brand-accent font-semibold"> tomorrow's digital solutions</span>
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent mx-auto rounded-full mt-6"></div>
              </motion.div>
          </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-secondary via-brand-accent to-brand-highlight rounded-full hidden lg:block"></div>
              
              <div className="space-y-16">
                {/* Current Education - BSc */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className="lg:text-right">
                    <div className="card p-8 bg-gradient-to-br from-brand-secondary/10 via-brand-secondary/5 to-transparent border border-brand-secondary/20 hover:border-brand-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-secondary/10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center">
                            <span className="text-xl">🎓</span>
                          </div>
                          <div className="px-3 py-1 bg-brand-secondary/20 text-brand-secondary rounded-full text-sm font-medium">
                            Currently Studying
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-brand-secondary">2024</div>
                          <div className="text-sm text-gray-400">Present</div>
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-white mb-3">
                        Bachelor of Science in Software Engineering
                      </h4>
                      <p className="text-brand-secondary font-semibold mb-2 text-lg">
                        Minhaj University Lahore (MUL)
                      </p>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Pursuing comprehensive knowledge in software development, algorithms, data structures, 
                        and modern programming paradigms. Focus on mobile application development and 
                        software engineering principles.
                      </p>
                      
                      {/* Key Subjects */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-gray-200">Key Focus Areas:</h5>
                        <div className="flex flex-wrap gap-2">
                          {["Software Engineering", "Mobile Development", "Data Structures", "Algorithms", "Database Systems", "UI/UX Design"].map((subject, idx) => (
                            <span key={idx} className="px-3 py-1 bg-brand-secondary/20 text-brand-secondary rounded-full text-xs font-medium">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex justify-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center shadow-lg"
                    >
                      <span className="text-2xl">📚</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Previous Education - Intermediate */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className="hidden lg:flex justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center shadow-lg"
                    >
                      <span className="text-2xl">🏆</span>
                    </motion.div>
                  </div>
                  
                  <div className="lg:order-2">
                    <div className="card p-8 bg-gradient-to-br from-brand-accent/10 via-brand-accent/5 to-transparent border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center">
                            <span className="text-xl">🎯</span>
                          </div>
                          <div className="px-3 py-1 bg-brand-accent/20 text-brand-accent rounded-full text-sm font-medium">
                            Completed
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-brand-accent">2022</div>
                          <div className="text-sm text-gray-400">2024</div>
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-white mb-3">
                        Intermediate in Computer Science
                      </h4>
                      <p className="text-brand-accent font-semibold mb-2 text-lg">
                        Aims Group of Colleges, Shorkot Cantt
                      </p>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Built strong foundations in computer science fundamentals, programming concepts, 
                        and mathematical principles. This education sparked my passion for software 
                        development and mobile applications.
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-gray-200">Core Subjects:</h5>
                        <div className="flex flex-wrap gap-2">
                          {["Programming", "Mathematics", "Physics", "Computer Science", "Web Development", "Database Basics"].map((subject, idx) => (
                            <span key={idx} className="px-3 py-1 bg-brand-accent/20 text-brand-accent rounded-full text-xs font-medium">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Learning Philosophy */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mt-20"
                >
                  <div className="card p-12 bg-gradient-to-br from-brand-highlight/10 via-brand-highlight/5 to-transparent border border-brand-highlight/20 max-w-4xl mx-auto">
                    <motion.div 
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-20 h-20 bg-brand-highlight rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <span className="text-3xl text-black">💡</span>
              </motion.div>
                    
                    <h4 className="text-3xl font-bold text-white mb-4 font-display">
                      Continuous Learning Philosophy
                    </h4>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                      "Education is not just about degrees—it's about constantly evolving, learning new technologies, 
                      and applying knowledge to solve real-world problems. Every project is a new classroom."
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-brand-highlight mb-1">Always</div>
                        <div className="text-sm text-gray-400">Learning</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-brand-highlight mb-1">Growth</div>
                        <div className="text-sm text-gray-400">Mindset</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-brand-highlight mb-1">Future</div>
                        <div className="text-sm text-gray-400">Ready</div>
                      </div>
                    </div>
                  </div>
              </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;