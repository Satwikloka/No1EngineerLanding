import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Car, Briefcase, MapPin, ClipboardCheck } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-tr from-orange-300 to-red-300 mix-blend-multiply"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -top-10 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-teal-200 to-purple-200 mix-blend-multiply"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-200 to-purple-200 mix-blend-multiply"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>
      
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left side: Road to Requirements Animation */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[350px] md:h-[450px]">
              {/* Road path */}
              <div className="absolute inset-x-10 top-1/4 bottom-10 bg-gray-200 rounded-lg overflow-hidden">
                {/* Road markings */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {/* Center line */}
                  <motion.div 
                    className="absolute left-0 right-0 top-1/2 h-2"
                    style={{ marginTop: -2 }}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                      <motion.div 
                        key={i}
                        className="absolute h-full w-10 bg-white"
                        style={{ left: `${i * 10}%` }}
                        animate={{ x: [0, -1000] }}
                        transition={{ 
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
                
                {/* Car representation moving on the road */}
                <motion.div
                  className="absolute top-1/2 -mt-8 left-10"
                  animate={{ 
                    x: [0, 50, 100, 150, 100, 150, 200],
                    y: [0, -5, 0, -10, 0, -5, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="bg-[#00A19C] p-2 rounded-lg shadow-lg transform rotate-90">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                
                {/* Map pins/destinations along the road */}
                <motion.div
                  className="absolute top-1/4 right-1/4"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <Briefcase className="w-4 h-4 text-[#333333]" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-[#333333]" />
                </motion.div>
                
                <motion.div
                  className="absolute top-1/5 right-1/2"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4 text-[#00A19C]" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-[#00A19C]" />
                </motion.div>
                
                <motion.div
                  className="absolute top-1/3 right-1/6"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <ClipboardCheck className="w-4 h-4 text-[#333333]" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-[#333333]" />
                </motion.div>
              </div>
              
              {/* Message bubbles */}
              <motion.div
                className="absolute top-1/4 left-1/4 bg-white rounded-lg p-3 shadow-lg max-w-[180px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-sm">Gathering requirements at client location</p>
                <div className="absolute -bottom-2 left-5 w-4 h-4 bg-white transform rotate-45" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-1/4 right-1/4 bg-[#00A19C] text-white rounded-lg p-3 shadow-lg max-w-[180px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-sm">Transforming ideas into Mercedes-quality solutions</p>
                <div className="absolute -bottom-2 right-5 w-4 h-4 bg-[#00A19C] transform rotate-45" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side: Content & Call to Action */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Mercedes F1 inspired accent line */}
              <div className="absolute left-0 top-0 w-1 h-20 bg-[#00A19C]"></div>
              
              <div className="pl-6">
                <h1 className="title-xl mb-6">
                  On-site Requirements Gathering
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-8">
                  We don't just build from specifications — we visit your location to understand your business environment, workflows, and challenges firsthand. This ensures Mercedes-AMG level precision in every solution.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A19C] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-slate-600">Face-to-face meetings with stakeholders</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A19C] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-slate-600">Workflow observation and documentation</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A19C] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-slate-600">User interviews and pain point identification</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="btn-primary">
                    <span className="relative z-10">Schedule a Visit</span>
                  </a>
                  <a href="#workflow" className="btn-outline">
                    <span className="flex items-center gap-2">
                      Explore My Process <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="flex flex-col items-center text-slate-500 hover:text-slate-800 transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}