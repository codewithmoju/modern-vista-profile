
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { updatePageTitle, logPageView } from "@/utils/seo";

const Index = () => {
  useEffect(() => {
    // Update page title when component mounts
    updatePageTitle("Portfolio");
    
    // Log page view for analytics
    logPageView("/");
    
    // Add structured data for better SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Muhammad Moaiz - React Native Developer Portfolio",
      "description": "Portfolio showcasing React Native development projects and skills",
      "url": window.location.href,
      "mainEntity": {
        "@type": "ProfilePage",
        "mainEntityOfPage": window.location.href
      }
    });
    document.head.appendChild(script);
    
    return () => {
      // Clean up when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-theme-dark-bg min-h-screen">
      <Header />
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <About />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Projects />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Experience />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Testimonials />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.div>
      
      <footer className="py-6 bg-theme-dark-surface text-center text-gray-400 text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Muhammad Moaiz. All rights reserved.</p>
          <a 
            href="#" 
            className="inline-block mt-2 hover:text-theme-accent1 transition-colors"
            aria-label="Back to top"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
