import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };
  return <section id="contact" className="py-20 contact-gradient">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} className="text-3xl font-bold mb-12 text-center gradient-text">
          Get In Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail className="w-5 h-5 text-theme-accent1" />
              <span>muhammadmoaimrmr786@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone className="w-5 h-5 text-theme-accent1" />
              <span>+92 301 9684007</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-5 h-5 text-theme-accent1" />
              <span>Lahore, Pakistan</span>
            </div>
          </motion.div>

          <motion.form initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-theme-dark-surface border border-gray-700 focus:border-theme-accent1 focus:outline-none text-gray-300" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-theme-dark-surface border border-gray-700 focus:border-theme-accent1 focus:outline-none text-gray-300" />
            </div>
            <div>
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg bg-theme-dark-surface border border-gray-700 focus:border-theme-accent1 focus:outline-none text-gray-300"></textarea>
            </div>
            <button type="submit" className="flex items-center justify-center space-x-2 w-full bg-theme-accent1 hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition-all">
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>;
};
export default Contact;