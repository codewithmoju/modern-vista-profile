
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form validation failed",
        description: "Please correct the errors in the form.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create a mailto link with the form data
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `;
      
      // Open the default email client
      window.open(`mailto:muhammadmoaimrmr786@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail client to complete the contact process.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly at muhammadmoaimrmr786@gmail.com",
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
            <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors transform hover:translate-x-1 duration-300">
              <Mail className="w-5 h-5 text-theme-accent1" aria-hidden="true" />
              <a href="mailto:muhammadmoaimrmr786@gmail.com" className="hover:text-theme-accent1 transition-colors">
                muhammadmoaimrmr786@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors transform hover:translate-x-1 duration-300">
              <Phone className="w-5 h-5 text-theme-accent1" aria-hidden="true" />
              <a href="tel:+923019684007" className="hover:text-theme-accent1 transition-colors">
                +92 301 9684007
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors transform hover:translate-x-1 duration-300">
              <MapPin className="w-5 h-5 text-theme-accent1" aria-hidden="true" />
              <span>Lahore, Pakistan</span>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/MuhammadMoaiz001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-theme-dark-bg hover:bg-theme-accent1/20 transform hover:scale-110 duration-300"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/M_Moaiz001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-theme-dark-bg hover:bg-theme-accent1/20 transform hover:scale-110 duration-300"
                  aria-label="X (Twitter)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammadmoaiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-theme-dark-bg hover:bg-theme-accent1/20 transform hover:scale-110 duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
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
              <label htmlFor="name" className="text-sm text-gray-300 mb-1 block">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required
                className={`w-full p-3 rounded-lg bg-theme-dark-surface border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:border-theme-accent1 focus:outline-none text-gray-300 transition-all duration-300`}
                aria-required="true"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-gray-300 mb-1 block">Your Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                required
                className={`w-full p-3 rounded-lg bg-theme-dark-surface border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:border-theme-accent1 focus:outline-none text-gray-300 transition-all duration-300`}
                aria-required="true"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-gray-300 mb-1 block">Your Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello! I'd like to discuss a project..." 
                rows={4} 
                required
                className={`w-full p-3 rounded-lg bg-theme-dark-surface border ${errors.message ? 'border-red-500' : 'border-gray-700'} focus:border-theme-accent1 focus:outline-none text-gray-300 transition-all duration-300`}
                aria-required="true"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <div className="text-sm text-gray-400 mb-4">
              <p>Clicking "Send Message" will open your default email client with your message pre-filled.</p>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex items-center justify-center space-x-2 w-full bg-theme-accent1 hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition-all disabled:opacity-70 hover:shadow-lg transform hover:scale-[1.02] duration-300"
              aria-label="Send message"
            >
              <span>{isSubmitting ? "Opening Email Client..." : "Send Message"}</span>
              <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
