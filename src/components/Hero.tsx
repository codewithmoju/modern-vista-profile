
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            React Native Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-8"
          >
            Experienced in creating cross-platform mobile apps using React Native,
            Expo, REST APIs, and Firebase.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#projects"
              className="bg-theme-accent1 hover:bg-opacity-90 text-white px-8 py-3 rounded-lg transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-theme-accent2 text-theme-accent2 hover:bg-theme-accent2 hover:text-black px-8 py-3 rounded-lg transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
