
import { motion } from "framer-motion";
import { ChevronRight, Github, Linkedin, Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20">
      {/* Background decorative elements - enhanced */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-lg md:text-xl text-theme-accent2 font-medium mb-4 tracking-wide">
              👋 Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text tracking-tight font-display">
              Muhammad Moaiz
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 mb-6 font-display">
              <span className="relative inline-block">
                <span className="relative z-10">React Native Developer</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-theme-accent1/20 -z-10"></span>
              </span>
            </h2>
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
            robust functionality. Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium rounded-lg shadow-glow transition-all hover:shadow-xl hover:scale-105 duration-300 ease-out w-full md:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-theme-accent1 via-purple-600 to-theme-accent1"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative flex items-center gap-2 text-white font-medium">
                View Projects
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-theme-accent2 bg-transparent border-2 border-theme-accent2 rounded-lg hover:bg-theme-accent2 hover:text-black transition-all hover:shadow-xl hover:scale-105 duration-300 ease-out w-full md:w-auto"
            >
              <span className="relative flex items-center gap-2">
                Contact Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium bg-transparent border-2 border-gray-600 text-gray-300 rounded-lg hover:border-white hover:text-white transition-all hover:shadow-xl hover:scale-105 duration-300 ease-out w-full md:w-auto"
            >
              <span className="relative flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center items-center gap-6"
          >
            <a
              href="https://github.com/MuhammadMoaiz001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadmoaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
