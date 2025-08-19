import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Simplified floating elements with reduced animations */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-theme-accent1/15 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: 'transform' }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-4 h-4 border border-theme-accent2/20 rotate-45"
        animate={{
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: 'transform' }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-theme-accent2/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default FloatingElements;