
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Project data with detailed information
const projectsData = {
  nemodelivers: {
    name: "NemoDelivers",
    tagline: "Food Delivery Made Easy",
    description: "A cross-platform food delivery app connecting users with local restaurants.",
    fullDescription: "NemoDelivers is a comprehensive food delivery platform that connects users with local restaurants, offering a seamless ordering experience. The app features an intuitive interface for browsing restaurants, exploring menus, and placing orders with just a few taps.",
    coverImage: "/project-food-delivery.jpg",
    features: [
      {
        title: "Restaurant Discovery",
        description: "Browse through a curated list of local restaurants with detailed information about cuisine types, operating hours, and customer ratings."
      },
      {
        title: "Real-time Order Tracking",
        description: "Track your order in real-time from preparation to delivery with an interactive map interface."
      },
      {
        title: "Multiple Payment Options",
        description: "Pay with credit cards, digital wallets, or cash on delivery for a convenient checkout experience."
      },
      {
        title: "Personalized Recommendations",
        description: "Get restaurant and dish recommendations based on your previous orders and preferences."
      }
    ],
    testimonials: [
      {
        quote: "NemoDelivers has completely changed how I order food. The interface is intuitive and I can find all my favorite restaurants in one place.",
        author: "Sarah M.",
        role: "Regular User"
      },
      {
        quote: "As a restaurant owner, partnering with NemoDelivers has significantly increased our orders and expanded our customer base.",
        author: "John D.",
        role: "Restaurant Partner"
      }
    ],
    technologies: ["React Native", "Firebase", "Redux", "Animation"],
    primaryColor: "from-orange-500 to-red-600",
    lightColor: "bg-orange-100",
    darkColor: "bg-orange-900",
    accentColor: "text-orange-500"
  },
  budgeto: {
    name: "BudgetO",
    tagline: "Take Control of Your Finances",
    description: "A finance management app for transaction tracking and budget planning.",
    fullDescription: "BudgetO is a comprehensive financial management tool designed to help users track expenses, set and monitor budgets, and gain insights into their spending habits. The app provides a visual dashboard with intuitive charts and graphs that make financial planning accessible to everyone.",
    coverImage: "/project-finance.png",
    features: [
      {
        title: "Expense Tracking",
        description: "Easily log and categorize your daily expenses to maintain a clear record of your spending."
      },
      {
        title: "Budget Planning",
        description: "Set monthly budgets for different expense categories and receive alerts when approaching limits."
      },
      {
        title: "Financial Insights",
        description: "Get detailed analytics and reports on your spending patterns and financial health."
      },
      {
        title: "Saving Goals",
        description: "Create and track progress toward your saving goals with visual progress indicators."
      }
    ],
    testimonials: [
      {
        quote: "BudgetO has helped me become more disciplined with my spending. The visual breakdowns make it easy to see where my money is going.",
        author: "Michael T.",
        role: "Premium User"
      },
      {
        quote: "I've tried many finance apps, but BudgetO strikes the perfect balance between functionality and simplicity.",
        author: "Elena K.",
        role: "Financial Advisor"
      }
    ],
    technologies: ["React Native", "Firebase", "Charts", "Context API"],
    primaryColor: "from-green-500 to-teal-600",
    lightColor: "bg-green-100",
    darkColor: "bg-green-900",
    accentColor: "text-green-500"
  },
  zenithwalls: {
    name: "Zenith Walls",
    tagline: "Stunning Wallpapers for Every Device",
    description: "Browse and download high-quality wallpapers for your devices.",
    fullDescription: "Zenith Walls is a premium wallpaper application offering thousands of high-quality backgrounds for smartphones, tablets, and desktops. The app features a clean, minimalist interface that puts the focus on stunning visuals while making discovery and download a breeze.",
    coverImage: "/project-wallpaper.png",
    features: [
      {
        title: "Extensive Collection",
        description: "Access thousands of high-resolution wallpapers across multiple categories like nature, abstract, minimal, and more."
      },
      {
        title: "Smart Search",
        description: "Find the perfect wallpaper with our intelligent search and filtering system based on colors, themes, and keywords."
      },
      {
        title: "Daily Updates",
        description: "Discover new wallpapers every day with our featured section and daily recommendations."
      },
      {
        title: "Device Optimization",
        description: "Automatically adjusts wallpapers to fit perfectly on your specific device screen resolution."
      }
    ],
    testimonials: [
      {
        quote: "Zenith Walls has the best collection of minimal wallpapers I've ever seen. My phone has never looked better!",
        author: "Alex W.",
        role: "Graphic Designer"
      },
      {
        quote: "I love how easy it is to find and apply new wallpapers. The categories are well-organized and the search function is powerful.",
        author: "Jamie L.",
        role: "Tech Enthusiast"
      }
    ],
    technologies: ["React Native", "API Integration", "UI/UX", "Redux"],
    primaryColor: "from-purple-500 to-indigo-600",
    lightColor: "bg-purple-100",
    darkColor: "bg-purple-900",
    accentColor: "text-purple-500"
  },
  skycast: {
    name: "Sky Cast",
    tagline: "Weather Forecasts You Can Trust",
    description: "Real-time weather updates and forecasts with location tracking.",
    fullDescription: "Sky Cast delivers accurate, real-time weather information with a beautiful, intuitive interface. The app provides current conditions, hourly forecasts, and extended predictions with dynamic visuals that adapt to the weather and time of day. Advanced features include severe weather alerts, radar maps, and detailed meteorological data.",
    coverImage: "/project-weather.jpeg",
    features: [
      {
        title: "Real-Time Updates",
        description: "Get minute-by-minute weather updates based on your current location with high accuracy."
      },
      {
        title: "Interactive Maps",
        description: "Explore interactive radar maps showing precipitation, temperature, and wind patterns in your area."
      },
      {
        title: "7-Day Forecast",
        description: "Plan ahead with detailed 7-day forecasts including temperature, precipitation chance, and wind conditions."
      },
      {
        title: "Weather Alerts",
        description: "Receive timely notifications about severe weather conditions and changes in your area."
      }
    ],
    testimonials: [
      {
        quote: "Sky Cast has become my go-to weather app. The forecasts are remarkably accurate and the interface is gorgeous.",
        author: "Robert J.",
        role: "Outdoor Enthusiast"
      },
      {
        quote: "As someone who works outdoors, having reliable weather information is crucial. Sky Cast has never let me down.",
        author: "Susan M.",
        role: "Landscape Photographer"
      }
    ],
    technologies: ["React Native", "API Integration", "Animations", "Geolocation"],
    primaryColor: "from-blue-500 to-cyan-600",
    lightColor: "bg-blue-100",
    darkColor: "bg-blue-900",
    accentColor: "text-blue-500"
  },
  "edumate-ai": {
    name: "EduMate AI",
    tagline: "Personalized Learning Powered by AI",
    description: "AI-driven educational app that personalizes learning experiences.",
    fullDescription: "EduMate AI revolutionizes education by delivering personalized learning experiences driven by artificial intelligence. The app adapts to each student's learning style, pace, and preferences, creating custom study plans and interactive lessons that optimize knowledge retention and skill development.",
    coverImage: "/placeholder.svg",
    features: [
      {
        title: "Adaptive Learning Paths",
        description: "The AI analyzes your learning patterns and creates customized learning paths that adapt in real-time to your progress."
      },
      {
        title: "Virtual AI Tutor",
        description: "Get assistance from an intelligent virtual tutor that can answer questions, explain concepts, and provide feedback 24/7."
      },
      {
        title: "Interactive Content",
        description: "Engage with multimedia lessons, quizzes, and challenges designed to make learning engaging and effective."
      },
      {
        title: "Progress Analytics",
        description: "Track your learning journey with detailed analytics and insights to understand strengths and areas for improvement."
      }
    ],
    testimonials: [
      {
        quote: "EduMate AI has transformed how my daughter studies. The personalized approach has significantly improved her grades and confidence.",
        author: "Patricia N.",
        role: "Parent"
      },
      {
        quote: "As an educator, I'm impressed by EduMate's ability to adapt to different learning styles. It's like having a teaching assistant for each student.",
        author: "Dr. Thomas L.",
        role: "Education Professor"
      }
    ],
    technologies: ["React Native", "Machine Learning", "API Integration", "Firebase"],
    primaryColor: "from-pink-500 to-rose-600",
    lightColor: "bg-pink-100",
    darkColor: "bg-pink-900",
    accentColor: "text-pink-500"
  }
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<any>(null);
  
  useEffect(() => {
    // Get project data based on slug
    if (slug && projectsData[slug as keyof typeof projectsData]) {
      setProject(projectsData[slug as keyof typeof projectsData]);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-theme-dark-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
          <Link to="/" className="text-theme-accent1 hover:text-theme-accent2 transition-colors">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-theme-dark-bg min-h-screen">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${project.primaryColor} relative`}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-gray-200 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-white mb-6">{project.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech: string) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-white bg-opacity-20 text-white rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="py-16 bg-theme-dark-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white font-display mb-6">Overview</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.fullDescription}
              </p>
              <div className="flex gap-4">
                <button className={`px-6 py-3 rounded-lg font-medium bg-gradient-to-r ${project.primaryColor} text-white`}>
                  Download App
                </button>
                <button className="px-6 py-3 rounded-lg font-medium bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src={project.coverImage} 
                alt={project.name} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-theme-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white font-display mb-4">Key Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover what makes {project.name} stand out from other applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature: any, index: number) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg ${project.lightColor} bg-opacity-5 hover:bg-opacity-10 transition-all duration-300`}
              >
                <h3 className={`text-xl font-semibold mb-3 ${project.accentColor}`}>{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-theme-dark-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white font-display mb-4">See It In Action</h2>
              <p className="text-gray-300 mb-8">
                Explore {project.name} with our interactive demonstration
              </p>
              
              <div className={`aspect-video rounded-xl overflow-hidden border-4 ${project.darkColor} border-opacity-50 shadow-2xl`}>
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <p className="text-gray-400">Interactive demo would appear here</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-theme-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white font-display mb-4">What Users Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Real feedback from people who use {project.name}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {project.testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-theme-dark-bg p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 mr-1" fill="#FBBF24" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className={`py-16 bg-gradient-to-r ${project.primaryColor}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white font-display mb-4">Ready to Experience {project.name}?</h2>
            <p className="text-white opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied users and discover why {project.name} is the preferred choice.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
              Download Now
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* More Projects */}
      <section className="py-16 bg-theme-dark-bg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white font-display">More Projects</h2>
            <Link to="/#projects" className="text-theme-accent1 flex items-center hover:text-theme-accent2 transition-colors">
              View All
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(projectsData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, proj]: [string, any]) => (
                <Link 
                  key={key} 
                  to={`/project/${key}`}
                  className="bg-theme-dark-surface rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={proj.coverImage} 
                      alt={proj.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{proj.name}</h3>
                    <p className="text-gray-400 text-sm">{proj.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
