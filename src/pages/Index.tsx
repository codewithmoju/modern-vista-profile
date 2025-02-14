
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
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
