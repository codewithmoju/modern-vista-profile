
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-theme-dark-surface/80 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold gradient-text"
        >
          Muhammad Moaiz
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          {["About", "Projects", "Experience", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="flex space-x-4">
          <a
            href="https://github.com/MuhammadMoaiz001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadmoaiz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:muhammadmoaimrmr786@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
