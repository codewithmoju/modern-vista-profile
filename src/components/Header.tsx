
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, Twitter } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ["About", "Projects", "Experience", "Contact"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollPosition > 50 
          ? "bg-theme-dark-surface/90 backdrop-blur-lg shadow-lg" 
          : "bg-theme-dark-surface/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-bold gradient-text font-display"
        >
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-display">CodewithMoju</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-sm text-gray-300 hover:text-white transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-theme-accent1 after:transition-all after:duration-300"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white transition-colors focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/codewithmoju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300 icon-hover-ring p-2"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://x.com/codewithmoju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300 icon-hover-ring p-2"
            aria-label="X (Twitter) Profile"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/codewithmoju/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300 icon-hover-ring p-2"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:codewithmoju@gmail.com"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300 icon-hover-ring p-2"
            aria-label="Email Me"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-theme-dark-surface shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700 last:border-0"
                >
                  {item}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 justify-center">
                <a
                  href="https://github.com/MuhammadMoaiz001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://twitter.com/M_Moaiz001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="X (Twitter) Profile"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammadmoaiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:codewithmoju@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email Me"
                >
                  <Mail size={24} />
                </a>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
