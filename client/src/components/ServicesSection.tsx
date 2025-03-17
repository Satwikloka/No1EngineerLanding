import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Smartphone, Instagram, Globe, Store, Youtube, ArrowRight, X, ChevronRight, Code2, Database, LineChart, Headphones, Rocket, BarChart, MousePointer } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: {
    offerings: string[];
    technologies: string[];
    process: string[];
  };
  color: string;
}

// Array of services with English content
const services: ServiceProps[] = [
  {
    icon: <Smartphone size={24} />,
    title: "Mobile App Development",
    description: "Custom Android and iOS apps to reach your users directly and enhance your business capabilities.",
    details: {
      offerings: ["Native iOS Development", "Native Android Development", "React Native Cross-Platform", "Flutter Development", "App Store Optimization"],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
      process: ["Requirements Analysis", "UI/UX Design", "Development", "Testing", "Deployment & Maintenance"]
    },
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Globe size={24} />,
    title: "Website Development",
    description: "Responsive, fast-loading websites that showcase your business and attract new customers.",
    details: {
      offerings: ["Business Websites", "E-commerce Solutions", "Web Applications", "Landing Pages", "PWAs"],
      technologies: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "Three.js"],
      process: ["Discovery & Planning", "Wireframing", "Visual Design", "Development", "Launch & Support"]
    },
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: <Instagram size={24} />,
    title: "Social Media Marketing",
    description: "Strategic content creation and management to boost your visibility across all social platforms.",
    details: {
      offerings: ["Instagram Marketing", "Facebook Campaigns", "LinkedIn Business Growth", "TikTok Strategy", "Social Content Creation"],
      technologies: ["Meta Business Suite", "Hootsuite", "Canva", "Later", "Buffer"],
      process: ["Audit & Strategy", "Content Calendar", "Creation & Publishing", "Community Management", "Analytics & Optimization"]
    },
    color: "from-pink-500 to-rose-400"
  },
  {
    icon: <Store size={24} />,
    title: "E-commerce Solutions",
    description: "Complete online store setups with payment processing, inventory management, and SEO optimization.",
    details: {
      offerings: ["Shopify Development", "WooCommerce Stores", "Product Catalog Management", "Payment Integration", "Order Fulfillment Systems"],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Inventory Management Systems"],
      process: ["Store Setup", "Product Import", "Payment Gateway Integration", "Testing", "Launch & Marketing"]
    },
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: <Youtube size={24} />,
    title: "Video Marketing",
    description: "Creating engaging videos for your products and services, and promoting them on YouTube and social media.",
    details: {
      offerings: ["Product Demos", "Explainer Videos", "Social Media Shorts", "YouTube Channel Management", "Video Ads"],
      technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "YouTube Studio", "TikTok Creator Tools"],
      process: ["Concept Development", "Storyboarding", "Production", "Editing", "Distribution & Promotion"]
    },
    color: "from-red-500 to-orange-400"
  },
  {
    icon: <Code size={24} />,
    title: "Custom Software Solutions",
    description: "Tailored software for your business needs, streamlining your processes and improving efficiency.",
    details: {
      offerings: ["Business Process Automation", "CRM Systems", "Inventory Management", "Custom Dashboards", "Data Analytics Platforms"],
      technologies: ["Python", "JavaScript", "Node.js", "React", "SQL/NoSQL Databases"],
      process: ["Business Analysis", "Solution Architecture", "Development", "Integration", "Maintenance & Support"]
    },
    color: "from-violet-500 to-purple-400"
  }
];

// Tech pattern instead of traditional pattern
const TechPattern = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h60v60H0z" />
      <circle cx="30" cy="30" r="25" stroke="url(#tech-gradient)" strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="30" cy="30" r="15" stroke="url(#tech-gradient)" strokeWidth="1.5" />
      <path d="M20 20l20 20M40 20L20 40" stroke="url(#tech-gradient)" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="tech-gradient" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A19C" />
          <stop offset="1" stopColor="#7038FF" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);

// Function to render each service card with interactive expanding details
function ServiceItem({ icon, title, description, details, color }: ServiceProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className={`card group hover-lift rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm relative`}
      variants={slideUp}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
      initial={{ height: 'auto' }}
      animate={{ height: isExpanded ? 'auto' : 'auto' }}
      transition={{ height: { duration: 0.3 } }}
    >
      {/* Top color bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${color}`}></div>
      
      <div className="p-6">
        <div className="mb-6 relative">
          <div className={`absolute inset-0 -z-10 rounded-full w-12 h-12 bg-gradient-to-br ${color} opacity-20`}></div>
          <motion.div 
            className="text-[#00A19C]"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {icon}
          </motion.div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        
        <div 
          className="flex items-center space-x-2 text-sm mt-auto text-[#00A19C] cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{isExpanded ? "Show less" : "Learn more"}</span>
          <motion.div
            animate={isExpanded ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
      
      {/* Expandable detailed content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6 border-t border-gray-100 dark:border-gray-800 mt-4 pt-4"
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <Code2 size={16} className="mr-2 text-[#00A19C]" />
                  What we offer:
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {details.offerings.map((item, i) => (
                    <li key={i} className="text-xs flex items-start">
                      <div className="mt-1 mr-1.5 h-1.5 w-1.5 rounded-full bg-[#7038FF]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <Database size={16} className="mr-2 text-[#00A19C]" />
                  Technologies we use:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`text-xs py-1 px-2 rounded-full bg-gradient-to-r ${color} bg-opacity-10 text-gray-800 dark:text-gray-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <LineChart size={16} className="mr-2 text-[#00A19C]" />
                  Our process:
                </h4>
                <ol className="space-y-1">
                  {details.process.map((step, i) => (
                    <li key={i} className="text-xs flex items-center">
                      <span className="inline-block h-5 w-5 rounded-full bg-[#00A19C] text-white flex items-center justify-center mr-2 text-[10px]">{i+1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              
              <motion.div 
                className="mt-4 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#contact" 
                  className={`inline-block text-sm py-2 px-4 rounded-full bg-gradient-to-r ${color} text-white font-medium`}
                >
                  Get a quote
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Interactive Process Steps
const processSteps = [
  { 
    icon: <Headphones size={28} />, 
    title: "Consultation", 
    description: "We listen to your needs and understand your business goals." 
  },
  { 
    icon: <Code2 size={28} />, 
    title: "Development", 
    description: "Our team brings your vision to life with cutting-edge technology." 
  },
  { 
    icon: <Rocket size={28} />, 
    title: "Launch", 
    description: "We deploy your solution and ensure everything runs smoothly." 
  },
  { 
    icon: <BarChart size={28} />, 
    title: "Growth", 
    description: "Continuous optimization and support to scale your business." 
  }
];

export default function ServicesSection() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1 }}
            >
              <TechPattern />
            </motion.div>
            <h2 className="text-4xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00A19C] to-[#7038FF]">Our Services</h2>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Innovative solutions to propel your business forward in the digital world
          </p>
        </motion.div>
        
        {/* Interactive Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              custom={index * 0.2}
            >
              <ServiceItem {...service} />
            </motion.div>
          ))}
        </div>
        
        {/* Interactive Process Section */}
        <motion.div 
          className="mt-32 relative py-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A19C] to-[#7038FF]"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-12">How We Work With You</h3>
            
            {/* Interactive Process Timeline */}
            <div className="relative">
              {/* Line connecting all steps */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2"></div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    onMouseEnter={() => setActiveProcess(index)}
                    onMouseLeave={() => setActiveProcess(null)}
                  >
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center z-10 relative ${
                        activeProcess === index 
                          ? 'bg-gradient-to-r from-[#00A19C] to-[#7038FF] text-white' 
                          : 'bg-white dark:bg-gray-900 text-[#00A19C] border-2 border-[#00A19C]'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                    
                    {/* Step number indicator */}
                    <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-[#7038FF] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#7038FF] to-[#00A19C]"></div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#contact" 
              className="inline-block py-3 px-8 bg-gradient-to-r from-[#00A19C] to-[#7038FF] text-white font-semibold rounded-full shadow-lg"
            >
              Contact Us Now
            </a>
          </motion.div>
          
          {/* Mouse scroll indicator */}
          <motion.div 
            className="mt-8 flex flex-col items-center opacity-60"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity 
            }}
          >
            <MousePointer size={20} />
            <span className="text-xs mt-2">Click on services to learn more</span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Tech background pattern */}
      <div className="absolute right-0 bottom-0 -z-10 w-48 h-48 opacity-10">
        <svg width="192" height="192" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
          <circle cx="96" cy="96" r="64" fill="none" stroke="#00A19C" strokeWidth="1" strokeDasharray="4,4" />
          <circle cx="96" cy="96" r="32" fill="none" stroke="#7038FF" strokeWidth="1" />
          <path d="M32 96h128M96 32v128" fill="none" stroke="#00A19C" strokeWidth="1" strokeDasharray="2,2" />
          <path d="M53.7 53.7l84.6 84.6M138.3 53.7L53.7 138.3" fill="none" stroke="#7038FF" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      </div>
    </section>
  );
}
