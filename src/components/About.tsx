import { motion } from "framer-motion";
import { Code2, Smartphone, Server, Leaf, Brain, Users } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import codingEnvironment from "@/assets/coding-environment.png";
import techStack from "@/assets/tech-stack.png";
const About = () => {
  // Skills with proficiency levels
  const technicalSkills = [{
    name: "React Native",
    level: 90
  }, {
    name: "JavaScript",
    level: 85
  }, {
    name: "Firebase",
    level: 80
  }, {
    name: "REST APIs",
    level: 75
  }, {
    name: "React JS",
    level: 70
  }, {
    name: "UI/UX Design",
    level: 65
  }];
  const skills = [{
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React JS"
  }, {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Development",
    description: "React Native, Expo CLI, React Navigation"
  }, {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Integration",
    description: "REST APIs, Firebase, Real-time Database"
  }, {
    icon: <Leaf className="w-6 h-6" />,
    title: "Performance Optimization",
    description: "Code Optimization, UI/UX Enhancement"
  }, {
    icon: <Brain className="w-6 h-6" />,
    title: "Problem Solving",
    description: "Analytical Thinking, Creative Solutions"
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Team Collaboration",
    description: "Project Management, Leadership"
  }];
  return <section id="about" className="py-20 bg-theme-dark-surface relative overflow-hidden">
      {/* Background Parallax Elements */}
      <ParallaxSection speed={0.3} direction="up" className="absolute top-10 right-0 w-1/3 h-1/2 opacity-5">
        <img 
          src={codingEnvironment} 
          alt="Coding environment" 
          className="w-full h-full object-contain"
        />
      </ParallaxSection>
      
      <ParallaxSection speed={0.4} direction="down" className="absolute bottom-10 left-0 w-1/4 h-1/3 opacity-10">
        <img 
          src={techStack} 
          alt="Technology stack" 
          className="w-full h-full object-contain"
        />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">About Me</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} className="w-full md:w-1/3">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-theme-accent1/20 to-theme-accent2/20 p-2">
                <img alt="Muhammad Moaiz" className="w-full h-auto rounded-lg" src="/lovable-uploads/90dce04e-90f4-49dc-a702-309682fd39ee.jpg" />
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-300 mb-4">
                As a React Native Developer, I've dedicated myself to mastering the art of building seamless cross-platform mobile applications. My journey began with a passion for creating user-friendly interfaces and has evolved into a comprehensive skill set encompassing frontend development, backend integration, and performance optimization.
              </p>
              <p className="text-gray-300">
                Currently pursuing a BSc in Software Engineering at Minhaj University Lahore, I combine academic knowledge with hands-on experience to deliver high-quality mobile solutions. I'm constantly exploring new technologies and methodologies to enhance my development capabilities and create applications that not only meet but exceed client expectations.
              </p>
            </motion.div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">Technical Proficiency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => <motion.div key={skill.name} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="bg-theme-dark-bg p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div className="bg-gradient-to-r from-theme-accent1 to-theme-accent2 h-2.5 rounded-full" initial={{
                  width: 0
                }} whileInView={{
                  width: `${skill.level}%`
                }} transition={{
                  duration: 1,
                  delay: index * 0.1
                }}></motion.div>
                  </div>
                </motion.div>)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="p-6 bg-theme-dark-bg rounded-lg">
                <div className="text-theme-accent1 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>)}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
            <div className="space-y-6">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} className="p-6 bg-theme-dark-bg rounded-lg">
                <h4 className="text-xl font-semibold mb-2">BSc in Software Engineering</h4>
                <p className="text-gray-400">Minhaj university Lahore (MUL) • 2024-continue</p>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} className="p-6 bg-theme-dark-bg rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Intermediate in Computer Science</h4>
                <p className="text-gray-400">Aims group of Colleges, shorkot cantt • 2022-2024</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;