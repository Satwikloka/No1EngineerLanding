import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Smartphone, Code, Bike, Send, Globe, Package, Rocket, ChevronRight } from 'lucide-react';

export default function McLarenJourneyAnimation() {
  const [stage, setStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Handle mouse movement to control animation stage
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const relativeX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        
        // Calculate stage based on mouse position (0-4)
        const newStage = Math.min(4, Math.floor(relativeX * 5));
        setStage(newStage);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Journey stages
  const stages = [
    {
      title: "Research",
      icon: <Laptop className="w-6 h-6" />,
      description: "Initial project requirements gathering and planning",
      color: "#FF8000" // McLaren Papaya
    },
    {
      title: "Consultation",
      icon: <Bike className="w-6 h-6" />,
      description: "Personal client visit via bicycle to understand needs",
      color: "#FF8000" // McLaren Papaya
    },
    {
      title: "Development", 
      icon: <Code className="w-6 h-6" />,
      description: "High-performance coding and development",
      color: "#0090D4" // McLaren Blue
    },
    {
      title: "Testing",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Multi-platform quality assurance",
      color: "#0090D4" // McLaren Blue
    },
    {
      title: "Delivery",
      icon: <Send className="w-6 h-6" />,
      description: "Global delivery of completed project",
      color: "#FF8000" // McLaren Papaya
    }
  ];
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full bg-black rounded-lg overflow-hidden border border-[#333] p-4"
      style={{ position: 'relative' }}
    >
      {/* McLaren-style header */}
      <div className="absolute top-0 left-0 w-full h-16 flex items-center px-6 z-20">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-[#FF8000] flex items-center justify-center rounded-full">
            <span className="text-lg font-bold text-black">1</span>
          </div>
          <div className="font-bold text-white uppercase tracking-widest text-lg">Development Journey</div>
        </div>
      </div>
      
      {/* McLaren Papaya top accent */}
      <div className="absolute top-0 right-0 w-1/3 h-4 bg-[#FF8000]"></div>
      
      {/* McLaren Blue bottom accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-4 bg-[#0090D4]"></div>
      
      {/* Progress Track */}
      <div className="absolute top-32 left-4 right-4 h-2 bg-[#222] rounded-full overflow-hidden">
        {/* Dynamic progress indicator */}
        <motion.div 
          className="h-full rounded-full"
          style={{
            width: `${(stage / 4) * 100}%`,
            background: "linear-gradient(90deg, #FF8000, #0090D4)"
          }}
        ></motion.div>
      </div>
      
      {/* Stage Indicators */}
      <div className="absolute top-40 left-4 right-4 flex justify-between">
        {stages.map((s, i) => (
          <div key={i} className="relative">
            <motion.div 
              className={`w-12 h-12 rounded-full flex items-center justify-center ${i <= stage ? 'bg-' + s.color : 'bg-[#333]'}`}
              animate={{ 
                scale: i === stage ? [1, 1.1, 1] : 1,
                boxShadow: i === stage ? ['0 0 0 rgba(255,255,255,0)', '0 0 20px rgba(255,255,255,0.5)', '0 0 0 rgba(255,255,255,0)'] : 'none'
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {s.icon}
            </motion.div>
            <div className={`absolute top-14 left-1/2 transform -translate-x-1/2 text-center ${i === stage ? 'text-white' : 'text-gray-500'}`}>
              <div className="text-xs font-bold uppercase tracking-wider">{s.title}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Active Stage Description */}
      <motion.div 
        className="absolute top-64 left-0 right-0 px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={stage} // Force re-render animation on stage change
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl font-bold text-white mb-4" style={{ color: stages[stage].color }}>
          {stages[stage].title}
        </div>
        <div className="text-gray-400">
          {stages[stage].description}
        </div>
      </motion.div>
      
      {/* Visual Journey Animation */}
      <div className="absolute bottom-24 left-0 right-0">
        {/* Research Phase */}
        {stage === 0 && (
          <motion.div 
            className="w-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <motion.div
                className="w-40 h-24 bg-[#111] rounded border border-[#222] p-3 flex flex-col justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div 
                  className="w-full h-2 bg-[#FF8000] rounded mb-2"
                  animate={{ width: ['40%', '80%', '60%', '90%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="w-full h-2 bg-[#0090D4] rounded"
                  animate={{ width: ['60%', '30%', '70%', '40%'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                />
              </motion.div>
              <div className="absolute -bottom-8 left-0 right-0 text-xs text-center text-gray-500">
                Planning & Research
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Consultation Phase */}
        {stage === 1 && (
          <motion.div 
            className="w-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <motion.div 
                className="flex items-center"
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="mr-4">
                  <div className="w-6 h-6 rounded-full bg-[#222]" />
                  <div className="w-4 h-8 bg-[#FF8000] ml-1 mt-1" />
                </div>
                <div>
                  <Bike className="w-8 h-8 text-[#0090D4]" />
                </div>
                <motion.div 
                  className="ml-8 w-8 h-8 flex items-center justify-center bg-[#222] rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronRight className="w-4 h-4 text-[#FF8000]" />
                </motion.div>
                <div className="ml-8">
                  <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center">
                    <Package className="w-5 h-5 text-[#FF8000]" />
                  </div>
                </div>
              </motion.div>
              <div className="absolute -bottom-8 left-0 right-0 text-xs text-center text-gray-500">
                Personal Client Visit
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Development Phase */}
        {stage === 2 && (
          <motion.div 
            className="w-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <motion.div 
                className="bg-[#111] w-48 h-32 rounded border border-[#333] p-4"
                animate={{ boxShadow: ['0 0 0 rgba(0,144,212,0)', '0 0 20px rgba(0,144,212,0.5)', '0 0 0 rgba(0,144,212,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex justify-between mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#FF8000] flex items-center justify-center">
                    <span className="text-xs text-black font-bold">1</span>
                  </div>
                  <Code className="w-5 h-5 text-[#0090D4]" />
                </div>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex gap-1 mb-1">
                    <div className="h-2 w-6 bg-[#0090D4] rounded-sm"></div>
                    <div className="h-2 w-10 bg-[#333] rounded-sm"></div>
                  </div>
                  <div className="flex gap-1 mb-1">
                    <div className="h-2 w-4 bg-[#333] rounded-sm"></div>
                    <div className="h-2 w-8 bg-[#FF8000] rounded-sm"></div>
                    <div className="h-2 w-4 bg-[#333] rounded-sm"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-2 w-12 bg-[#333] rounded-sm"></div>
                    <div className="h-2 w-6 bg-[#0090D4] rounded-sm"></div>
                  </div>
                </motion.div>
              </motion.div>
              <div className="absolute -bottom-8 left-0 right-0 text-xs text-center text-gray-500">
                High-Performance Development
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Testing Phase */}
        {stage === 3 && (
          <motion.div 
            className="w-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <div className="flex items-center justify-center gap-8">
                <motion.div
                  className="w-16 h-28 bg-[#111] rounded border border-[#333] flex items-center justify-center"
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Smartphone className="w-8 h-8 text-[#0090D4]" />
                </motion.div>
                <motion.div
                  className="w-28 h-20 bg-[#111] rounded border border-[#333] flex items-center justify-center"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Laptop className="w-10 h-10 text-[#FF8000]" />
                </motion.div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Globe className="w-6 h-6 text-[#0090D4]" />
                </motion.div>
              </div>
              <div className="absolute -bottom-8 left-0 right-0 text-xs text-center text-gray-500">
                Multi-Platform Testing
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Delivery Phase */}
        {stage === 4 && (
          <motion.div 
            className="w-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <div className="flex items-center justify-center">
                <motion.div 
                  className="relative w-64 h-32"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {/* Delivery visualization */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#111] rounded-lg border border-[#333] flex items-center justify-center">
                    <Package className="w-8 h-8 text-[#FF8000]" />
                  </div>
                  
                  {/* Digital delivery stream */}
                  <motion.div
                    className="absolute left-20 top-1/2 -translate-y-1/2 w-[120px] h-2"
                    style={{ background: "linear-gradient(90deg, #FF8000, #0090D4)" }}
                    animate={{
                      width: ["0%", "100%"],
                      x: [0, 30]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                  ></motion.div>
                  
                  {/* Digital packets */}
                  <motion.div
                    className="absolute left-24 top-1/2 -translate-y-1/2 flex space-x-8"
                    animate={{ x: [0, 120] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#FF8000]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#0090D4]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FF8000]"></div>
                  </motion.div>
                  
                  {/* Global receiver */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#111] rounded-lg border border-[#333] flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[#0090D4]" />
                  </div>
                  
                  {/* Success indicator */}
                  <motion.div
                    className="absolute -top-2 right-0 w-8 h-8 rounded-full bg-[#111] border border-[#FF8000] flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: ['0 0 0 rgba(255,128,0,0)', '0 0 10px rgba(255,128,0,0.8)', '0 0 0 rgba(255,128,0,0)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Rocket className="w-4 h-4 text-[#FF8000]" />
                  </motion.div>
                </motion.div>
              </div>
              <div className="absolute -bottom-8 left-0 right-0 text-xs text-center text-white font-bold">
                DELIVERY COMPLETE
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}