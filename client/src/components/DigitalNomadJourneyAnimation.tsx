import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { Code, Send, Lightbulb, Users, Rocket } from "lucide-react";

// Digital Nomad Journey Animation with Satwik's photo
export const DigitalNomadJourneyAnimation = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0.5]);
  
  // Progress through the journey animation phases based on mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const width = rect.width;
      
      // Calculate which phase of the journey we're in (0-4) based on mouse position
      const phase = Math.floor((mouseX / width) * 5);
      setAnimationPhase(Math.min(4, Math.max(0, phase)));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation phase descriptions with premium McLaren-inspired styling
  const phases = [
    { name: "Research", telugu: "పరిశోధన", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Client Meeting", telugu: "క్లయింట్ మీటింగ్", icon: <Users className="h-5 w-5" /> },
    { name: "Requirements", telugu: "అవసరాలు", icon: <Code className="h-5 w-5" /> },
    { name: "Development", telugu: "డెవలప్మెంట్", icon: <Code className="h-5 w-5" /> },
    { name: "Delivery", telugu: "డెలివరీ", icon: <Send className="h-5 w-5" /> }
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="perspective-container w-full h-full overflow-hidden flex flex-col items-center justify-center relative"
      style={{ y, scale, opacity }}
    >
      {/* McLaren-inspired premium journey indicator */}
      <div className="absolute top-0 w-full flex justify-between px-6 py-4 z-20">
        <div className="relative w-full h-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full mt-2 shadow-lg overflow-hidden">
          {/* Racing stripe */}
          <div className="absolute inset-y-0 left-0 w-full h-full">
            <div className="h-1/3 w-full bg-black bg-opacity-20"></div>
          </div>
          
          {/* Dynamic progress bar - McLaren papaya and blue inspired */}
          <motion.div 
            className="absolute left-0 top-0 h-full rounded-full"
            style={{ 
              width: `${(animationPhase / 4) * 100}%`, 
              background: "linear-gradient(90deg, #FF8000 0%, #FF9D45 50%, #0090D4 100%)",
              boxShadow: "0 0 15px rgba(255, 128, 0, 0.7)"
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Highlight effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-30"></div>
          </motion.div>
          
          {/* Phase indicators - McLaren racing style */}
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="absolute transform -translate-x-1/2" 
              style={{ 
                left: `${(index / 4) * 100}%`, 
                top: 0,
                zIndex: 10
              }}
            >
              <motion.div 
                className={`relative flex flex-col items-center ${animationPhase === index ? 'scale-110' : 'scale-90'}`}
                animate={{ y: animationPhase === index ? -5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Checkpoint dots */}
                <div className={`h-6 w-6 rounded-full shadow-lg flex items-center justify-center ${animationPhase === index ? 'bg-[#FF8000]' : 'bg-gray-400'}`} style={{ marginTop: '-6px' }}>
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                
                {/* Labels */}
                <div className="mt-4 w-32 flex flex-col items-center justify-center">
                  <span className={`text-sm font-semibold whitespace-nowrap ${animationPhase === index ? 'text-[#FF8000]' : 'text-gray-600'}`}>
                    {phase.name}
                  </span>
                  <span className={`text-xs mt-1 font-telugu whitespace-nowrap ${animationPhase === index ? 'text-[#0090D4]' : 'text-gray-500'}`}>
                    {phase.telugu}
                  </span>
                </div>
                
                {/* Icon */}
                <div className={`absolute top-[-6px] h-6 w-6 rounded-full shadow-lg flex items-center justify-center ${animationPhase === index ? 'bg-[#0090D4]' : 'bg-gray-600'}`}>
                  <motion.div 
                    className="text-white"
                    animate={{ rotate: animationPhase === index ? [0, 10, -10, 0] : 0 }}
                    transition={{ duration: 1, repeat: animationPhase === index ? Infinity : 0, repeatType: "loop" }}
                  >
                    {phase.icon}
                  </motion.div>
                </div>
                
                {/* Connected lines */}
                {index < 4 && (
                  <div className="absolute left-full top-1/2 w-[calc(25vw-2.5rem)] h-px bg-gradient-to-r from-slate-400 to-transparent -z-10"></div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main 3D scene with McLaren-inspired design */}
      <div className="transform-3d relative w-full h-[500px] mt-24">
        {/* Racing track that connects all journey phases */}
        <div className="absolute bottom-20 left-0 right-0 h-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 z-0 shadow-lg overflow-hidden">
          {/* Track markings */}
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-white bg-opacity-40"></div>
          </div>
          <div className="absolute inset-0 flex">
            <motion.div 
              className="flex-1 flex justify-around items-center"
              animate={{ x: [-20, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="h-2 w-8 bg-white opacity-60"></div>
              ))}
            </motion.div>
          </div>
          {/* McLaren-style racing stripe */}
          <div className="absolute inset-y-0 left-0 right-0 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8000] via-[#FF9D45] to-transparent"></div>
          </div>
        </div>
        
        {/* Journey connection lines */}
        <div className="absolute bottom-20 left-[10%] w-[80%] h-40 z-0">
          <svg className="w-full h-full" viewBox="0 0 800 100" fill="none">
            <motion.path 
              d="M0,50 C100,80 200,20 400,50 C600,80 700,20 800,50" 
              stroke="url(#journey-gradient)" 
              strokeWidth="2" 
              strokeDasharray="6,6" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="journey-gradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#FF8000" />
                <stop offset="50%" stopColor="#FF9D45" />
                <stop offset="100%" stopColor="#0090D4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Phase 0: Research & Discovery - Laptop with multiple screens floating */}
        <motion.div
          className="absolute h-[300px] flex flex-col items-center"
          style={{ 
            left: '10%', 
            bottom: '70px',
            opacity: animationPhase === 0 ? 1 : 0.4,
            scale: animationPhase === 0 ? 1 : 0.9,
            zIndex: animationPhase === 0 ? 10 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Person at desk researching */}
          <motion.div 
            className="relative w-40 h-60 bg-white rounded-lg shadow-xl overflow-hidden"
            animate={{ 
              y: animationPhase === 0 ? [0, -5, 0] : 0,
              rotate: animationPhase === 0 ? [0, 1, 0, -1, 0] : 0
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            {/* Satwik's photo */}
            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
              <img 
                src="/attached_assets/Copy_of_passpic_satwik-removebg-preview.png" 
                alt="Satwik Loka" 
                className="h-24 w-24 object-cover rounded-full"
                style={{ 
                  filter: "drop-shadow(0 0 8px rgba(255, 128, 0, 0.3))",
                }}
              />
            </div>
            
            {/* Laptop */}
            <div className="absolute bottom-8 left-4 w-32 h-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded opacity-70"></div>
              <div className="absolute top-1/4 left-0 right-0 h-px bg-white opacity-20"></div>
            </div>
            
            {/* Animated code particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#FF8000] to-[#0090D4]"
                style={{
                  top: `${Math.random() * 60}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold font-telugu bg-white bg-opacity-70 px-3 py-1 rounded-full">పరిశోధన</div>
        </motion.div>
        
        {/* Phase 1: Client Engagement - Bicycle with businessman visiting clients */}
        <motion.div
          className="absolute h-[300px] flex flex-col items-center"
          style={{ 
            left: '30%', 
            bottom: '70px',
            opacity: animationPhase === 1 ? 1 : 0.4,
            scale: animationPhase === 1 ? 1 : 0.9,
            zIndex: animationPhase === 1 ? 10 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Business person on bicycle */}
          <motion.div
            className="relative w-50 h-60"
            animate={{ 
              x: animationPhase === 1 ? [0, 10, 0] : 0,
              rotate: animationPhase === 1 ? [0, 1, 0, -1, 0] : 0
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Character with Satwik's photo */}
            <div className="relative w-40 h-40 mb-6">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                <img 
                  src="/attached_assets/Copy_of_passpic_satwik-removebg-preview.png" 
                  alt="Satwik Loka" 
                  className="h-24 w-24 object-cover rounded-full"
                  style={{ 
                    filter: "drop-shadow(0 0 8px rgba(255, 128, 0, 0.3))",
                  }}
                />
              </div>
              
              {/* Briefcase */}
              <motion.div 
                className="absolute -right-4 bottom-2 w-10 h-8 bg-gradient-to-b from-[#0F172A] to-[#1E293B] rounded"
                animate={{ rotate: animationPhase === 1 ? [0, 5, 0, -5, 0] : 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute top-2 left-3 right-3 h-1 bg-[#FF8000] rounded"></div>
              </motion.div>
            </div>
            
            {/* Bicycle */}
            <div className="absolute bottom-10 w-40 h-20">
              {/* Wheels */}
              <motion.div 
                className="absolute bottom-0 left-0 w-14 h-14 rounded-full border-4 border-gray-800"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-14 h-14 rounded-full border-4 border-gray-800"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Frame - McLaren colors */}
              <div className="absolute bottom-7 left-7 w-26 h-2 bg-gradient-to-r from-[#FF8000] to-[#0090D4] rounded-full transform rotate-45" />
              <div className="absolute bottom-7 left-7 w-26 h-2 bg-gradient-to-r from-[#0090D4] to-[#FF8000] rounded-full transform -rotate-15" />
            </div>
            
            {/* Environment elements */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  backgroundColor: i % 2 === 0 ? '#FF8000' : '#0090D4',
                  opacity: Math.random() * 0.7 + 0.3,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold font-telugu bg-white bg-opacity-70 px-3 py-1 rounded-full">క్లయింట్ మీటింగ్</div>
        </motion.div>
        
        {/* Phase 2: Requirements Engineering - Planning documents and specifications */}
        <motion.div
          className="absolute h-[300px] flex flex-col items-center"
          style={{ 
            left: '50%', 
            bottom: '70px',
            opacity: animationPhase === 2 ? 1 : 0.4,
            scale: animationPhase === 2 ? 1 : 0.9,
            zIndex: animationPhase === 2 ? 10 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Professional with documents */}
          <motion.div 
            className="relative w-40 h-60"
            animate={{ 
              y: animationPhase === 2 ? [0, -5, 0] : 0
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Satwik's photo */}
            <div className="absolute left-0 top-0 w-full h-28 flex items-center justify-center">
              <img 
                src="/attached_assets/Copy_of_passpic_satwik-removebg-preview.png" 
                alt="Satwik Loka" 
                className="h-24 w-24 object-cover rounded-full"
                style={{ 
                  filter: "drop-shadow(0 0 8px rgba(255, 128, 0, 0.3))",
                }}
              />
            </div>
            
            {/* Requirements documents */}
            <div className="absolute top-36 left-2 right-2 bottom-0">
              <motion.div 
                className="absolute left-0 top-0 w-32 h-40 bg-white rounded shadow-lg transform rotate-3 border-l-4 border-[#0090D4]"
                animate={{ 
                  rotate: animationPhase === 2 ? [3, 0, 3] : 3,
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Document lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-1 bg-gray-300 rounded my-3 mx-4"
                    style={{ width: `${60 + Math.random() * 30}%` }}
                  ></div>
                ))}
              </motion.div>
              
              <motion.div 
                className="absolute left-4 top-4 w-32 h-40 bg-white rounded shadow-lg transform -rotate-2 border-l-4 border-[#FF8000]"
                animate={{ 
                  rotate: animationPhase === 2 ? [-2, -5, -2] : -2,
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Document lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-1 bg-gray-300 rounded my-3 mx-4"
                    style={{ width: `${60 + Math.random() * 30}%` }}
                  ></div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold font-telugu bg-white bg-opacity-70 px-3 py-1 rounded-full">అవసరాలు</div>
        </motion.div>
        
        {/* Phase 3: Development - Code building and engineering */}
        <motion.div
          className="absolute h-[300px] flex flex-col items-center"
          style={{ 
            left: '70%', 
            bottom: '70px',
            opacity: animationPhase === 3 ? 1 : 0.4,
            scale: animationPhase === 3 ? 1 : 0.9,
            zIndex: animationPhase === 3 ? 10 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Developer at workstation */}
          <motion.div 
            className="relative w-40 h-60"
            animate={{ 
              y: animationPhase === 3 ? [0, -2, 0] : 0
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {/* Satwik's photo */}
            <div className="absolute left-0 top-0 w-full h-28 flex items-center justify-center">
              <img 
                src="/attached_assets/Copy_of_passpic_satwik-removebg-preview.png" 
                alt="Satwik Loka" 
                className="h-24 w-24 object-cover rounded-full"
                style={{ 
                  filter: "drop-shadow(0 0 8px rgba(255, 128, 0, 0.3))",
                }}
              />
            </div>
            
            {/* Computer screens with code */}
            <div className="absolute top-32 left-0 right-0 bottom-0 flex items-center justify-center">
              {/* Main development screen */}
              <motion.div 
                className="w-32 h-24 bg-[#0F172A] rounded-lg overflow-hidden shadow-lg border-2 border-[#1E293B] relative"
                animate={{ 
                  rotateY: animationPhase === 3 ? [0, 5, 0, -5, 0] : 0
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {/* Code lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="h-1 my-2 mx-2 rounded"
                    style={{ 
                      width: `${30 + Math.random() * 60}%`,
                      backgroundColor: i % 3 === 0 ? '#FF8000' : i % 3 === 1 ? '#0090D4' : '#4ADE80',
                      opacity: 0.7
                    }}
                    animate={{
                      width: animationPhase === 3 ? 
                        [`${30 + Math.random() * 60}%`, `${30 + Math.random() * 60}%`] : 
                        `${30 + Math.random() * 60}%`,
                      opacity: animationPhase === 3 ? [0.7, 1, 0.7] : 0.7
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  ></motion.div>
                ))}
                
                {/* Cursor */}
                <motion.div 
                  className="absolute h-2 w-1 bg-white"
                  style={{ 
                    top: '70%',
                    left: '60%'
                  }}
                  animate={{
                    opacity: animationPhase === 3 ? [1, 0, 1] : 1
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity
                  }}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold font-telugu bg-white bg-opacity-70 px-3 py-1 rounded-full">డెవలప్మెంట్</div>
        </motion.div>
        
        {/* Phase 4: Delivery - Project launch and remote delivery */}
        <motion.div
          className="absolute h-[300px] flex flex-col items-center"
          style={{ 
            left: '90%', 
            bottom: '70px',
            opacity: animationPhase === 4 ? 1 : 0.4,
            scale: animationPhase === 4 ? 1 : 0.9,
            zIndex: animationPhase === 4 ? 10 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Final product with growth/launch indicators */}
          <motion.div 
            className="relative w-40 h-60"
            animate={{ 
              y: animationPhase === 4 ? [0, -10, 0] : 0
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Satwik's photo */}
            <div className="absolute left-0 top-0 w-full h-28 flex items-center justify-center">
              <img 
                src="/attached_assets/Copy_of_passpic_satwik-removebg-preview.png" 
                alt="Satwik Loka" 
                className="h-24 w-24 object-cover rounded-full" 
                style={{ 
                  filter: "drop-shadow(0 0 8px rgba(255, 128, 0, 0.3))",
                }}
              />
            </div>
            
            {/* Rocket launch visualization */}
            <motion.div 
              className="absolute top-32 left-12 h-16 w-16"
              animate={{ 
                y: animationPhase === 4 ? [0, -20, -40] : 0,
                opacity: animationPhase === 4 ? [1, 0.8, 0] : 1,
                scale: animationPhase === 4 ? [1, 0.8, 0.6] : 1
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <div className="relative h-full w-full">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-12 w-6 bg-gradient-to-t from-[#FF8000] to-[#0090D4] rounded-lg"></div>
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-b-[#0090D4] border-l-transparent border-r-transparent"></div>
                
                {/* Rocket flames */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-8"
                  animate={{
                    height: animationPhase === 4 ? [8, 12, 8] : 8
                  }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-[#FF8000] to-[#FFFFFF] rounded-b-lg opacity-70"></div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Cloud/smoke particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 5 + 2}px`,
                  height: `${Math.random() * 5 + 2}px`,
                  bottom: `${Math.random() * 20 + 20}%`,
                  left: `${Math.random() * 30 + 35}%`,
                  backgroundColor: i % 2 === 0 ? '#FF8000' : '#FFFFFF',
                  opacity: 0.5,
                }}
                animate={{
                  y: animationPhase === 4 ? [0, -30] : 0,
                  x: animationPhase === 4 ? [0, (Math.random() - 0.5) * 30] : 0,
                  opacity: animationPhase === 4 ? [0.5, 0] : 0.5,
                  scale: animationPhase === 4 ? [1, 0] : 1,
                }}
                transition={{
                  duration: 1 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
            
            {/* Success indicators */}
            {animationPhase === 4 && (
              <motion.div className="absolute top-20 left-0 right-0 flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF8000] to-[#0090D4] flex items-center justify-center text-white shadow-lg"
                >
                  <Rocket className="h-5 w-5" />
                </motion.div>
              </motion.div>
            )}
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold font-telugu bg-white bg-opacity-70 px-3 py-1 rounded-full">డెలివరీ</div>
        </motion.div>
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-gray-600 pb-2 font-telugu">
        జర్నీని అన్వేషించడానికి మీ మౌస్‌ని ఎడమ నుండి కుడికి కదిలించండి ←→
      </div>
    </motion.div>
  );
};

export default DigitalNomadJourneyAnimation;