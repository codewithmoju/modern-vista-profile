
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission for now
      // In a real implementation, you would send this data to a server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 contact-gradient">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
          aria-label="Contact section"
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail className="w-5 h-5 text-theme-accent1" aria-hidden="true" />
              <a href="mailto:muhammadmoaimrmr786@gmail.com" className="hover:text-theme-accent1 transition-colors">
                muhammadmoaimrmr786@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone className="w-5 h-5 text-theme-accent1" aria-hidden="true" />
              <a href="tel:+923019684007" className="hover:text-theme-accent1 transition-colors">
                +92 301 9684007
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-5 h-5 text-theme-accent1" aria-hidden="true" />
              <span>Lahore, Pakistan</span>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit} 
            className="space-y-4"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required
                className="w-full p-3 rounded-lg bg-theme-dark-surface border border-gray-700 focus:border-theme-accent1 focus:outline-none text-gray-300" 
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required
                className="w-full p-3 rounded-lg bg-theme-dark-surface border border-gray-700 focus:border-theme-accent1 focus:outline-none text-gray-300" 
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows={4} 
                required
                className="w-full p-3 rounded-lg bg-theme-dark-surface border border-gray-700 focus:border-theme-accent1 focus:outline-none text-gray-300"
                aria-required="true"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex items-center justify-center space-x-2 w-full bg-theme-accent1 hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition-all disabled:opacity-70"
              aria-label="Send message"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
