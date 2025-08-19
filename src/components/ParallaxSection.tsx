import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
  disabled?: boolean;
}

const ParallaxSection = ({ 
  children, 
  className = "", 
  speed = 0.3, 
  direction = "up",
  disabled = false
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [50 * speed, -50 * speed] : [-50 * speed, 50 * speed]
  );

  return (
    <motion.div
      ref={ref}
      style={{ 
        y,
        willChange: 'transform'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;