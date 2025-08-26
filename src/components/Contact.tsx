
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, User, Clock, CheckCircle } from "lucide-react";
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
      window.open(`mailto:codewithmoju@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail client to complete the contact process.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly at codewithmoju@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-theme-dark-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-4xl">📧</div>
        <div className="absolute bottom-20 right-20 text-3xl">📱</div>
        <div className="absolute top-1/2 right-10 text-2xl">🌐</div>
        <div className="absolute bottom-1/3 left-10 text-3xl">💬</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-pro font-display">
            Let's Work Together
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Ready to bring your mobile app idea to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="card p-8">
              <h3 className="text-3xl font-bold mb-6 text-white font-display">Get In Touch</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I'm always excited to discuss new projects and opportunities. Whether you have a specific idea in mind or need consultation on mobile app development, I'd love to hear from you.
              </p>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-brand-secondary/10 rounded-xl hover:bg-brand-secondary/20 transition-all duration-300"
                >
                  <div className="bg-brand-secondary p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:codewithmoju@gmail.com" className="text-white font-medium hover:text-brand-secondary transition-colors">
                      codewithmoju@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-brand-accent/10 rounded-xl hover:bg-brand-accent/20 transition-all duration-300"
                >
                  <div className="bg-brand-accent p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+923019684007" className="text-white font-medium hover:text-brand-accent transition-colors">
                      +92 301 9684007
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-brand-highlight/10 rounded-xl hover:bg-brand-highlight/20 transition-all duration-300"
                >
                  <div className="bg-brand-highlight p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <span className="text-white font-medium">Lahore, Pakistan</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-white">Connect With Me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/codewithmoju"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-gray-800 hover:bg-brand-secondary rounded-full transition-colors duration-300 group"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="https://x.com/codewithmoju"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-gray-800 hover:bg-blue-500 rounded-full transition-colors duration-300 group"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/codewithmoju/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 text-center">
                <div className="text-2xl font-bold text-brand-secondary mb-1">24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-2xl font-bold text-brand-accent mb-1">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-white font-display">Send a Message</h3>
            <p className="text-gray-300 mb-8">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2 block">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name" 
                    required
                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } focus:border-brand-secondary focus:outline-none text-white transition-all duration-300 hover:bg-gray-800/70`}
                  />
                </div>
                {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2 block">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com" 
                    required
                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } focus:border-brand-secondary focus:outline-none text-white transition-all duration-300 hover:bg-gray-800/70`}
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2 block">
                  Project Details *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project idea, requirements, timeline, and budget..." 
                    rows={6} 
                    required
                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    } focus:border-brand-secondary focus:outline-none text-white transition-all duration-300 hover:bg-gray-800/70 resize-none`}
                  />
                </div>
                {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
              </div>

              <div className="bg-brand-secondary/10 p-4 rounded-xl border border-brand-secondary/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <p className="font-medium mb-1">What happens next?</p>
                    <ul className="space-y-1 text-gray-400">
                      <li>• I'll review your project details</li>
                      <li>• Get back to you within 24 hours</li>
                      <li>• Schedule a free consultation call</li>
                      <li>• Provide project timeline and quote</li>
                    </ul>
                  </div>
                </div>
              </div>

              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-brand-secondary to-brand-accent text-white px-8 py-4 rounded-xl font-semibold transition-all disabled:opacity-70 hover:shadow-lg hover:shadow-brand-secondary/25 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                <Send className="w-5 h-5" />
              </motion.button>

              <p className="text-xs text-gray-400 text-center">
                By sending this message, you agree to discuss your project with me. 
                Your information will be kept confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
