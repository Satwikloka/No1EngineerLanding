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
    const timer2 = setTimeout(() => setPhase(2), 3500); // Start fade out
    const timer3 = setTimeout(() => {
      setPhase(3);
      onComplete();
    }, 4500); // Animation complete

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
          {/* Holy effect background */}
          <motion.div
            className="absolute inset-0 opacity-60"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-[#000]" />
            
            {/* Radial light rays */}
            <motion.div 
              className="absolute inset-0 bg-[#00A19C] mix-blend-overlay opacity-40"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            {/* Light beams */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-[200vw] h-4 bg-[#00A19C] opacity-10"
                  style={{ 
                    transformOrigin: 'center',
                    rotate: `${i * 45}deg`,
                  }}
                  animate={{ 
                    opacity: [0.05, 0.15, 0.05],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Center content */}
          <div className="relative z-10 text-center">
            {/* Telugu Namaskaram text with paint splash */}
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
              {/* Paint splash effect */}
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
                  <motion.path
                    d="M20,60 Q60,20 100,70 Q140,120 180,60 Q220,10 260,70"
                    stroke="#00A19C"
                    strokeWidth="50"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: phase >= 1 ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </svg>
              </motion.div>
              
              {/* Main text */}
              <div className="relative z-10 px-12 py-8">
                <h1 className="font-telugu text-4xl md:text-6xl text-white mb-2">నమస్కారం</h1>
                <motion.p 
                  className="text-gray-300 text-lg md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase >= 1 ? 1 : 0 }}
                  transition={{ delay: 1.5 }}
                >
                  Welcome to no1.engineer
                </motion.p>
              </div>
            </motion.div>
            
            {/* Mercedes-inspired brand element */}
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              transition={{ delay: 2 }}
            >
              <div className="inline-block p-1 rounded-full border-2 border-[#00A19C]">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#00A19C] flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-white">n1e</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}