
import { motion } from "framer-motion";
import { Code2, Smartphone, Server, Leaf, Brain, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, React JS",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "React Native, Expo CLI, React Navigation",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Integration",
      description: "REST APIs, Firebase, Real-time Database",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Code Optimization, UI/UX Enhancement",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Analytical Thinking, Creative Solutions",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Project Management, Leadership",
    },
  ];

  return (
    <section id="about" className="py-20 bg-theme-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">About Me</h2>
          <div className="mb-12">
            <p className="text-gray-300 mb-6">
              Experienced React Native Developer skilled in creating cross-platform mobile apps using React Native, Expo,
              REST APIs, and Firebase. Focused on building user-friendly apps with smooth performance and reliable
              backend integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-theme-dark-bg rounded-lg card-hover"
              >
                <div className="text-theme-accent1 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 bg-theme-dark-bg rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-2">BSc in Software Engineering</h4>
                <p className="text-gray-400">Minhaj university Lahore (MUL) • 2024-continue</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 bg-theme-dark-bg rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-2">Intermediate in Computer Science</h4>
                <p className="text-gray-400">Aims group of Colleges, shorkot cantt • 2022-2024</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
