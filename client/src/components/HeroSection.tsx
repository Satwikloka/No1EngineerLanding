import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Globe, Code, Share2 } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React from "react";
import TealSpectaclesGoat from './TealSpectaclesGoat';

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
          {/* Hero Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="title-xl mb-6">
              Software Engineering with Precision
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-8">
              Experience software development expertise at the highest level of craftsmanship. 
              Delivering premium applications with Mercedes-AMG inspired engineering precision.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <span className="relative z-10">Discuss Your Project</span>
              </a>
              <a href="#workflow" className="btn-outline">
                <span className="flex items-center gap-2">
                  Explore My Process <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </motion.div>
          
          {/* Goat with Teal Spectacles Logo */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md p-6">
              {/* G.O.A.T with teal spectacles */}
              <div className="h-[300px] md:h-[400px] relative">
                <TealSpectaclesGoat />
                
                {/* Profile overlay */}
                <motion.div 
                  className="absolute bottom-20 right-0 w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg overflow-hidden z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <img 
                    src="/attached_assets/Copy_of_passpic_satwik-removebg-preview.png" 
                    alt="Satwik Loka" 
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="text-center mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <h2 className="text-xl font-bold mb-1 text-[#333333]">Satwik Loka</h2>
                <div className="flex items-center gap-1 justify-center text-sm text-slate-600">
                  <Globe className="w-4 h-4 text-[#00A19C]" />
                  <span>Full-Stack Engineer</span>
                </div>
              </motion.div>
              
              {/* Tech orbit */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute top-1/4 right-5 w-8 h-8 rounded-full bg-[#00A19C] flex items-center justify-center shadow-lg"
                  animate={{ 
                    rotate: [0, 360],
                    x: [0, 20, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                >
                  <Code className="w-4 h-4 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-1/4 left-5 w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center shadow-lg"
                  animate={{ 
                    rotate: [0, -360],
                    x: [0, -20, 0],
                    y: [0, 10, 0]
                  }}
                  transition={{ duration: 25, repeat: Infinity }}
                >
                  <Share2 className="w-4 h-4 text-white" />
                </motion.div>
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