import { motion } from "framer-motion";
import { Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    content: "Working with Muhammad Moaiz was a great experience. His expertise in React Native helped us deliver our mobile app ahead of schedule with all the features we needed.",
    author: "Sarah Johnson",
    position: "Product Manager, Tech Innovations",
    imageUrl: "/placeholder.svg" // Using placeholder image
  }, {
    content: "Moaiz's attention to detail and problem-solving skills are exceptional. He quickly understood our requirements and delivered a high-quality mobile application.",
    author: "Ahmed Hassan",
    position: "CEO, Digital Solutions",
    imageUrl: "/placeholder.svg" // Using placeholder image
  }, {
    content: "I highly recommend Muhammad Moaiz for React Native development. His coding standards and communication skills made our project collaboration seamless.",
    author: "Michael Chen",
    position: "Tech Lead, Mobile Innovations",
    imageUrl: "/placeholder.svg" // Using placeholder image
  }];
  return <section className="py-20 bg-theme-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} className="text-3xl font-bold mb-4 text-center gradient-text font-display">
          Testimonials
        </motion.h2>
        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          What clients and colleagues say about working with me
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="bg-theme-dark-surface p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 text-theme-accent1">
                <Quote size={40} className="opacity-50" />
              </div>
              <div className="pt-4">
                <p className="text-gray-300 mb-6 italic relative z-10">"{testimonial.content}"</p>
                <div className="flex items-center">
                  
                  <div>
                    <h4 className="font-semibold text-white text-left">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm text-left">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;