import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TeluguNamaskaramOpenerProps {
  onComplete: () => void;
}

export default function TeluguNamaskaramOpener({ onComplete }: TeluguNamaskaramOpenerProps) {
  const [stage, setStage] = useState(0);
  
  useEffect(() => {
    // Progress through animation stages
    if (stage === 0) {
      const timer = setTimeout(() => {
        setStage(1);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
    
    if (stage === 1) {
      const timer = setTimeout(() => {
        setStage(2);
      }, 3500);
      
      return () => clearTimeout(timer);
    }
    
    if (stage === 2) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          {/* Stage 0: Initial Fade In */}
          {stage === 0 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* Bold gradient Telugu text */}
              <div className="space-y-2">
                <motion.h1 
                  className="font-telugu text-gradient-telugu text-6xl md:text-8xl"
                  style={{
                    backgroundSize: "200% 200%",
                    animationName: "gradient-shift",
                    animationDuration: "3s",
                    animationIterationCount: "infinite"
                  }}
                >
                  నమస్కారం
                </motion.h1>
                <motion.p 
                  className="text-white text-xl md:text-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Namaskaram
                </motion.p>
                <p className="text-slate-300 text-lg font-cursive pt-2">Welcome to no1.engineer</p>
              </div>
            </motion.div>
          )}
          
          {/* Stage 1: Divine Holy Effect with Animation */}
          {stage === 1 && (
            <motion.div 
              className="text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Telugu text with divine rays */}
              <div className="relative">
                {/* Light rays */}
                <div className="absolute inset-0 -z-10">
                  {[...Array(12)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute top-1/2 left-1/2 h-[2px] w-[300px] origin-left"
                      style={{
                        background: "linear-gradient(90deg, #00A19C, transparent)",
                        rotate: `${i * 30}deg`,
                        translateX: "-50%",
                        translateY: "-50%"
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: [0, 0.8, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: 1, 
                        repeatType: "mirror",
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </div>
                
                {/* Divine circles */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full -z-10"
                  style={{
                    background: "radial-gradient(circle, rgba(0,161,156,0.2) 0%, rgba(124,58,237,0.1) 50%, transparent 70%)"
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />
                
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full -z-20"
                  style={{
                    background: "radial-gradient(circle, rgba(0,161,156,0.1) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)"
                  }}
                  animate={{ 
                    scale: [1.2, 1.8, 1.2],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 0.5
                  }}
                />
                
                {/* Particles */}
                <div className="absolute inset-0 -z-10">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-[#00A19C]"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, Math.random() * 60 - 30],
                        y: [0, Math.random() * 60 - 30],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: Math.random() * 1
                      }}
                    />
                  ))}
                </div>
                
                {/* Glowing Telugu text */}
                <div className="flex flex-col items-center">
                  <motion.h1 
                    className="font-telugu text-gradient-telugu text-7xl md:text-9xl mb-2 relative"
                    style={{ 
                      textShadow: "0 0 15px rgba(0,161,156,0.5), 0 0 30px rgba(124,58,237,0.3)"
                    }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 15px rgba(0,161,156,0.5), 0 0 30px rgba(124,58,237,0.3)",
                        "0 0 20px rgba(0,161,156,0.8), 0 0 40px rgba(124,58,237,0.6)",
                        "0 0 15px rgba(0,161,156,0.5), 0 0 30px rgba(124,58,237,0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: 1, repeatType: "mirror" }}
                  >
                    నమస్కారం
                  </motion.h1>
                  
                  <motion.p 
                    className="text-white text-2xl md:text-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    Namaskaram
                  </motion.p>
                </div>
              </div>
              
              {/* Welcome message */}
              <motion.p 
                className="text-white text-xl md:text-2xl font-cursive"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Welcome to the world of engineering excellence
              </motion.p>
            </motion.div>
          )}
          
          {/* Stage 2: Elegant Fade Out */}
          {stage === 2 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="space-y-2">
                <h1 className="font-telugu text-gradient-telugu text-7xl md:text-9xl">నమస్కారం</h1>
                <p className="text-white text-2xl md:text-3xl">Namaskaram</p>
                <p className="text-white text-xl md:text-2xl font-cursive mt-4">Welcome to the world of engineering excellence</p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}