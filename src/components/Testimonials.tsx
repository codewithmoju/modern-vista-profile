import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [{
    content: "Moju was instrumental in developing our EduMate AI educational platform. He integrated complex AI features seamlessly and created a user-friendly interface. His technical knowledge in React Native and dedication to the project was impressive.",
    author: "Muhammad Kamran",
    position: "Project Coordinator",
    company: "Minhaj University Lahore",
    rating: 5,
    imageUrl: "/placeholder.svg",
    projectType: "EduMate AI Platform",
    date: "3 months ago",
    verified: true
  }, {
    content: "CodeWithMoju developed our BudgetO finance app with exceptional attention to detail. His React Native expertise and understanding of financial app requirements helped us deliver a high-quality product. Professional and reliable developer.",
    author: "Development Team",
    position: "Lead Developer",
    company: "NAM Studios",
    rating: 5,
    imageUrl: "/placeholder.svg",
    projectType: "BudgetO Finance App",
    date: "5 months ago",
    verified: true
  }, {
    content: "Working with CodeWithMoju on our Zenith Walls application was a great experience. He delivered a polished wallpaper app with smooth performance, beautiful UI, and excellent image optimization. Professional approach and quality code delivery.",
    author: "Muhammad Naeem",
    position: "App Owner",
    company: "Zenith Walls",
    rating: 5,
    imageUrl: "/placeholder.svg",
    projectType: "Zenith Walls App",
    date: "6 months ago",
    verified: true
  }];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section className="py-20 bg-theme-dark-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-4xl">💬</div>
        <div className="absolute bottom-20 right-20 text-3xl">⭐</div>
        <div className="absolute top-1/2 left-10 text-2xl">👥</div>
        <div className="absolute top-1/3 right-10 text-3xl">🎯</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-pro font-display">
            Client Reviews
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Real feedback from clients who have worked with me on their mobile app projects
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="card p-8 md:p-12 text-center relative"
          >
            {/* Large Quote Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-brand-secondary p-4 rounded-full">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Rating and Verification */}
            <div className="flex justify-center items-center gap-4 mb-6 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < testimonials[currentTestimonial].rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-600'
                    }`} 
                  />
                ))}
              </div>
              {testimonials[currentTestimonial].verified && (
                <span className="flex items-center gap-1 text-green-400 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified Client
                </span>
              )}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-white">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className="text-gray-300 text-sm">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-gray-400 text-xs">
                  {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].date}
                </p>
              </div>
            </div>

            {/* Project Type Badge */}
            <div className="mt-4">
              <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                Project: {testimonials[currentTestimonial].projectType}
              </span>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-brand-secondary/20 hover:bg-brand-secondary text-white rounded-full transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Testimonial Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentTestimonial === index ? 'bg-brand-secondary' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-brand-secondary/20 hover:bg-brand-secondary text-white rounded-full transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Recent Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer border ${
                  currentTestimonial === index 
                    ? 'bg-brand-secondary/5 border-brand-secondary/30 scale-105' 
                    : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-gray-600'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                {/* Header with rating and date */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-600'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>

                {/* Review content */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white text-sm">{testimonial.author}</h5>
                      <p className="text-gray-400 text-xs">{testimonial.position}</p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                {/* Project type */}
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <span className="text-xs text-gray-400">
                    Project: <span className="text-gray-300">{testimonial.projectType}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;