
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "React Native Developer",
      company: "Developers Hub Coorporation",
      period: "Nov 2024 - Jan 2025",
      responsibilities: [
        "Collaborated with a team to develop cross-platform mobile applications.",
        "Gained hands-on experience with React Native, Firebase, and third-party libraries.",
        "Enhanced app functionality and performance through optimized code and UI improvements."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-theme-dark-surface">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Work Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-theme-accent1 to-theme-accent2 transform -translate-x-1/2"></div>
            
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-theme-accent1 transform -translate-x-1/2 z-10"></div>
                
                {/* Timeline content */}
                <div className="md:ml-auto md:w-1/2 md:pl-10 ml-8">
                  <div className="bg-theme-dark-bg p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                        <h4 className="text-lg text-theme-accent1 mb-2">{experience.company}</h4>
                      </div>
                      <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-theme-accent1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
