
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
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
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
