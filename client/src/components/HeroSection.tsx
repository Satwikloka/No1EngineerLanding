import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Globe, Code, Share2 } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React from "react";
import DigitalNomadJourneyAnimation from "./DigitalNomadJourneyAnimation";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Main headline and intro */}
      <div className="max-w-7xl mx-auto pt-12 md:pt-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 z-10">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <span className="font-telugu inline-block text-sm tracking-wider font-medium bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text mb-2">
              స్వాగతం | నమస్కారం
            </span>
            <h1 className="title-lg mb-6 leading-none">
              Engineering Premium <span className="text-gradient-papaya-blue">Digital Experiences</span> That Drive Business Growth
            </h1>
            <p className="mb-8 text-slate-600 max-w-2xl">
              I'm a digital nomad engineer creating premium quality applications that solve complex business problems while delivering a delightful McLaren-inspired user experience. 
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start A Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a 
                href="#services" 
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
          
          {/* Tech stack logos */}
          <motion.div 
            className="mt-12 flex flex-wrap gap-6 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Tech Stack</span>
            {['React', 'Node.js', 'Flutter', 'Firebase', 'AWS'].map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#FF8000] to-[#0090D4]"></span>
                <span className="text-sm text-slate-600">{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Hero image */}
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 perspective-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="hero-image-grid p-4 relative z-10 rounded-lg shadow-xl card-glass border border-slate-200 border-opacity-30">
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none">
                <g opacity="0.2">
                  <path d="M0,0 L600,0 L600,600 L0,600 Z" fill="url(#grid-pattern)" />
                  <path d="M300,150 C350,150 400,250 400,300 S350,450 300,450 S200,350 200,300 S250,150 300,150 Z" 
                        fill="none" stroke="#FF8000" strokeWidth="2" strokeDasharray="4,4" />
                  <path d="M200,100 C400,150 450,350 350,450 S100,400 100,250 S200,100 200,100 Z" 
                        fill="none" stroke="#0090D4" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
                </g>
                <defs>
                  <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                    <rect width="2" height="2" fill="white" />
                  </pattern>
                </defs>
              </svg>
            </div>
            
            {/* Orange racing stripe - McLaren papaya */}
            <div className="absolute h-full w-16 left-16 top-0 bg-[#FF8000] opacity-60"></div>
            
            {/* Business journey representation */}
            <div className="absolute left-1/2 bottom-20 -translate-x-1/2">
              {/* Business person silhouette */}
              <div className="relative flex flex-col items-center">
                {/* Circular glow */}
                <div className="absolute -top-10 w-40 h-40 rounded-full radial-pulse-orange opacity-60"></div>
                
                {/* Person silhouette */}
                <div className="h-64 w-56 relative z-10">
                  {/* Satwik's photo */}
                  <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                    <img 
                      src="/attached_assets/Copy_of_passpic_satwik-removebg-preview.png" 
                      alt="Satwik Loka" 
                      className="h-36 w-36 object-cover rounded-full" 
                      style={{ 
                        filter: "drop-shadow(0 0 15px rgba(255, 128, 0, 0.5))",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tech icons */}
            <div className="absolute top-20 right-24">
              <motion.div 
                className="flex gap-5"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                {["#FF8000", "#0090D4", "#FFFFFF"].map((color, i) => (
                  <motion.div 
                    key={i}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color, opacity: 0.8 }}
                    whileHover={{ scale: 1.2, opacity: 1 }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 2, 
                      delay: i * 0.4,
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  />
                ))}
              </motion.div>
            </div>
            
            {/* Racing stripe accent - McLaren blue */}
            <div className="absolute right-0 top-0 h-full w-4 bg-[#0090D4] opacity-40"></div>
            
            {/* Dynamic particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  backgroundColor: i % 3 === 0 ? '#FF8000' : i % 3 === 1 ? '#0090D4' : '#FFFFFF',
                  opacity: Math.random() * 0.5 + 0.3,
                }}
                animate={{
                  y: [0, -30],
                  x: [0, Math.random() * 20 - 10],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
            
            {/* Floating code snippets */}
            <motion.div
              className="absolute top-40 right-40 px-4 py-3 rounded-lg bg-slate-800 text-xs text-white font-mono opacity-80"
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <div className="text-blue-400">const <span className="text-green-400">developer</span> = {`{`}</div>
              <div className="pl-4"><span className="text-purple-400">name</span>: <span className="text-orange-400">'Satwik'</span>,</div>
              <div className="pl-4"><span className="text-purple-400">skills</span>: [...],</div>
              <div className="pl-4"><span className="text-purple-400">isAwesome</span>: <span className="text-yellow-400">true</span></div>
              <div>{`}`};</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div 
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-xs uppercase tracking-wider text-slate-500">Scroll to explore</span>
          <motion.div 
            className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Digital Nomad Journey Animation - Move to its own section */}
      <motion.div 
        className="mt-32 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="title-md mb-4">My Digital Nomad Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience my unique business approach: Personal visits for gathering requirements, 
            and remote delivery of high-quality solutions with world-class development expertise.
          </p>
        </div>
        
        <div className="relative w-full">
          {/* Full display of journey animation */}
          <div className="h-[600px] perspective-container mx-auto max-w-5xl">
            <DigitalNomadJourneyAnimation />
          </div>
          
          {/* Instruction text */}
          <div className="text-center mt-6 text-slate-500 text-sm">
            Move your mouse from left to right to explore each phase of my business journey ⟵⟶
          </div>
        </div>
      </motion.div>
      
      {/* Feature highlights */}
      <motion.div 
        className="grid md:grid-cols-3 gap-6 mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div 
          className="card-glass flex flex-col space-y-4 p-6"
          variants={fadeIn}
        >
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#FF8000] to-orange-400 flex items-center justify-center text-white">
            <Globe className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">Global Reach</h3>
          <p className="text-slate-600">Working across timezones to deliver exceptional solutions to clients worldwide.</p>
        </motion.div>
        
        <motion.div 
          className="card-glass flex flex-col space-y-4 p-6"
          variants={fadeIn}
        >
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0090D4] to-blue-400 flex items-center justify-center text-white">
            <Code className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">Premium Code</h3>
          <p className="text-slate-600">Engineering excellence with clean, maintainable code that stands the test of time.</p>
        </motion.div>
        
        <motion.div 
          className="card-glass flex flex-col space-y-4 p-6"
          variants={fadeIn}
        >
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-300 flex items-center justify-center text-white">
            <Share2 className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">Personal Touch</h3>
          <p className="text-slate-600">Blending engineering expertise with cultural sensitivity to create truly personalized solutions.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}