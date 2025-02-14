
import { motion } from "framer-motion";
import { ChevronRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-theme-accent1 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-theme-accent2 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
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
            <h2 className="text-lg md:text-xl text-theme-accent2 font-medium mb-4">
              👋 Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text tracking-tight">
              Muhammad Moaiz
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 mb-6">
              React Native Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Passionate React Native developer with expertise in creating beautiful, 
            high-performance mobile applications. Specialized in cross-platform development 
            using React Native, Expo, and Firebase. Committed to crafting seamless user 
            experiences and innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium bg-theme-accent1 text-white rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-105 duration-300 ease-out"
            >
              <span className="relative flex items-center gap-2">
                View Projects
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-theme-accent2 bg-transparent border-2 border-theme-accent2 rounded-lg hover:bg-theme-accent2 hover:text-black transition-all hover:shadow-xl hover:scale-105 duration-300 ease-out"
            >
              <span className="relative flex items-center gap-2">Contact Me</span>
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
