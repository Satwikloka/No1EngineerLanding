import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TeluguNamaskaramOpenerProps {
  onComplete: () => void;
}

export default function TeluguNamaskaramOpener({ onComplete }: TeluguNamaskaramOpenerProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Automatically progress through the animation phases
    const timer1 = setTimeout(() => setPhase(1), 1000); // Show the text
    const timer2 = setTimeout(() => setPhase(2), 4500); // Start fade out
    const timer3 = setTimeout(() => {
      setPhase(3);
      onComplete();
    }, 5500); // Animation complete

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 2 ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: phase === 2 ? 1 : 0.3 }}
        >
          {/* Holy effect background with divine light */}
          <motion.div
            className="absolute inset-0 opacity-70"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-[#000]" />
            
            {/* Central divine light source */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vh] h-[40vh] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0,161,156,0.5) 0%, rgba(0,161,156,0.2) 40%, rgba(0,0,0,0) 70%)"
              }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            {/* Pulsating radial glow */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,161,156,0.05) 50%, rgba(0,0,0,0) 70%)"
              }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            {/* Light beams - more refined */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-[300vw] h-[2vh]"
                  style={{ 
                    transformOrigin: 'center',
                    rotate: `${i * 30}deg`,
                    background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,161,156,0.15) 50%, rgba(255,255,255,0) 100%)",
                    filter: "blur(3px)"
                  }}
                  animate={{ 
                    opacity: [0.1, 0.25, 0.1],
                    scale: [0.8, 1.1, 0.8]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
            
            {/* Divine particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#00A19C]"
                  style={{ 
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    filter: "blur(1px)",
                    opacity: Math.random() * 0.5 + 0.3
                  }}
                  animate={{ 
                    y: [0, -Math.random() * 100 - 50, 0],
                    x: [0, Math.sin(i) * 30, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Center content with glowing effect */}
          <div className="relative z-10 text-center">
            {/* Telugu Namaskaram text with elegant holy effect */}
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: phase >= 1 ? 1 : 0, 
                scale: phase >= 1 ? 1 : 0.8,
                y: phase >= 1 ? 0 : 20
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Holy glow behind text */}
              <motion.div
                className="absolute -z-10 inset-0 w-full h-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: phase >= 1 ? [0, 1.2, 1] : 0, 
                  opacity: phase >= 1 ? 1 : 0
                }}
                transition={{ 
                  duration: 1,
                  delay: 0.3,
                  times: [0, 0.6, 1]
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Glow effect background */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  
                  <motion.path
                    d="M20,60 Q60,20 100,70 Q140,120 180,60 Q220,10 260,70"
                    stroke="#00A19C"
                    strokeWidth="60"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    opacity="0.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: phase >= 1 ? 1 : 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  
                  {/* Main path */}
                  <motion.path
                    d="M20,60 Q60,20 100,70 Q140,120 180,60 Q220,10 260,70"
                    stroke="#00A19C"
                    strokeWidth="50"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: phase >= 1 ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </svg>
              </motion.div>
              
              {/* Main text with glow effect */}
              <div className="relative z-10 px-12 py-8">
                <motion.h1 
                  className="font-telugu text-5xl md:text-7xl text-white mb-2"
                  style={{ 
                    textShadow: "0 0 15px rgba(0,161,156,0.8), 0 0 30px rgba(0,161,156,0.4)" 
                  }}
                  animate={{ 
                    textShadow: [
                      "0 0 15px rgba(0,161,156,0.8), 0 0 30px rgba(0,161,156,0.4)",
                      "0 0 20px rgba(0,161,156,0.9), 0 0 40px rgba(0,161,156,0.6)",
                      "0 0 15px rgba(0,161,156,0.8), 0 0 30px rgba(0,161,156,0.4)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  నమస్కారం
                </motion.h1>
                <motion.p 
                  className="text-gray-200 text-lg md:text-xl"
                  style={{ 
                    textShadow: "0 0 10px rgba(255,255,255,0.5)" 
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase >= 1 ? 1 : 0 }}
                  transition={{ delay: 1.5 }}
                >
                  Welcome to no1.engineer
                </motion.p>
              </div>
            </motion.div>
            
            {/* Mercedes-inspired brand element with divine glow */}
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              transition={{ delay: 2 }}
            >
              <div className="inline-block p-1 rounded-full border-2 border-[#00A19C]" 
                   style={{ boxShadow: "0 0 20px rgba(0,161,156,0.6)" }}>
                <motion.div 
                  className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-[#00A19C] flex items-center justify-center"
                  animate={{ boxShadow: [
                    "0 0 10px rgba(0,161,156,0.6), inset 0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(0,161,156,0.8), inset 0 0 15px rgba(255,255,255,0.8)",
                    "0 0 10px rgba(0,161,156,0.6), inset 0 0 10px rgba(255,255,255,0.5)"
                  ]}}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-white">n1e</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}