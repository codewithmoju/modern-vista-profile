
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-theme-dark-bg p-8 rounded-lg card-hover"
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">React Native Developer</h3>
                <h4 className="text-xl text-theme-accent1 mb-2">Developers Hub Corporation</h4>
              </div>
              <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Nov 2024 - Jan 2025</span>
              </div>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Collaborated with a team to develop cross-platform mobile applications.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Gained hands-on experience with React Native, Firebase, and third-party libraries.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Enhanced app functionality and performance through optimized code and UI improvements.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
