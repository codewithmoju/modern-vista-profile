import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <ParallaxSection speed={0.2} direction="up" className="absolute top-1/4 left-1/4">
        <motion.div
          className="w-4 h-4 bg-theme-accent1/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ParallaxSection>
      
      <ParallaxSection speed={0.3} direction="down" className="absolute top-1/2 right-1/4">
        <motion.div
          className="w-6 h-6 border border-theme-accent2/30 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ParallaxSection>
      
      <ParallaxSection speed={0.1} direction="up" className="absolute bottom-1/4 left-1/3">
        <motion.div
          className="w-3 h-3 bg-theme-accent2/25 rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ParallaxSection>
      
      <ParallaxSection speed={0.4} direction="down" className="absolute top-3/4 right-1/3">
        <motion.div
          className="w-2 h-8 bg-gradient-to-b from-theme-accent1/20 to-transparent rounded-full"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ParallaxSection>
    </div>
  );
};

export default FloatingElements;