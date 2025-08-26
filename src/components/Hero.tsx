
import { motion } from "framer-motion";
import { ChevronRight, Github, Linkedin, ArrowRight, Twitter, Instagram, Facebook, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Mobile App Developer",
    "React Native Expert",
    "UI/UX Designer",
    "Full Stack Developer",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20 gpu-optimized">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        
        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-32 right-32 text-4xl opacity-20 gpu-optimized"
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            repeatType: "reverse"
          }}
        >
          ⚛️
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-3xl opacity-20 gpu-optimized"
          animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            delay: 1,
            ease: [0.4, 0, 0.2, 1],
            repeatType: "reverse"
          }}
        >
          📱
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-20 text-2xl opacity-20 gpu-optimized"
          animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            delay: 2,
            ease: [0.4, 0, 0.2, 1],
            repeatType: "reverse"
          }}
        >
          🔥
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="max-w-4xl mx-auto text-center gpu-optimized"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Sparkles className="w-6 h-6 text-brand-highlight animate-pulse" />
              <h2 className="text-lg md:text-xl text-brand-accent font-medium tracking-wide">
                Hello, I'm
              </h2>
              <Sparkles className="w-6 h-6 text-brand-highlight animate-pulse" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text tracking-tight font-display"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            >
              Code With Moju
            </motion.h1>
            
            <motion.div
              className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6 font-display h-16 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-secondary">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
                <motion.span 
                  className="absolute bottom-1 left-0 h-3 bg-brand-accent/30 -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: `${displayText.length * 0.6}em` }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </motion.div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            I craft elegant, high-performance mobile applications that users love. Specializing in 
            <span className="text-theme-accent2"> React Native</span> and <span className="text-theme-accent1">Firebase</span>, 
            I transform ideas into seamless cross-platform experiences with pixel-perfect UI and 
            robust functionality. With a passion for creating intuitive user experiences, I'm dedicated to building solutions that make a difference.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <motion.a 
              href="#projects" 
              className="btn-primary group relative inline-flex items-center justify-center px-8 py-4 font-bold rounded-xl shadow-2xl text-white transition-all duration-300 ease-out hover:shadow-xl w-full md:w-auto overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-secondary bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></span>
              <span className="relative flex items-center gap-2 text-white font-bold">
                <Zap className="w-5 h-5" />
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-brand-accent bg-transparent border-2 border-brand-accent rounded-xl hover:bg-brand-accent hover:text-white transition-all duration-300 ease-out hover:shadow-lg w-full md:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center items-center gap-6"
          >
            <a 
              href="https://github.com/codewithmoju" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300 icon-hover-ring p-2"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://x.com/codewithmoju" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300 icon-hover-ring p-2"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/codewithmoju/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300 icon-hover-ring p-2"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://instagram.com/codewithmoju" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300 icon-hover-ring p-2"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://facebook.com/codewithmoju" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300 icon-hover-ring p-2"
            >
              <Facebook size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
