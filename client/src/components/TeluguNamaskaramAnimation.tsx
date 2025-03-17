import React from 'react';
import { motion } from 'framer-motion';

export default function TeluguNamaskaramAnimation() {
  return (
    <div className="flex items-center">
      <motion.div 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Telugu Text */}
        <motion.div
          className="flex items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="font-telugu text-xl text-[#00A19C] mr-2">నమస్కారం</span>
        </motion.div>
        
        {/* Paint Splash Effect */}
        <motion.div 
          className="absolute -z-10 top-0 left-0 w-full h-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M20,40 Q40,20 60,40 Q80,60 100,40 Q120,20 140,40 Q160,60 180,40"
              stroke="#00A19C"
              strokeWidth="30"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
      
      {/* English Welcome */}
      <motion.span 
        className="ml-2 text-black text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Welcome
      </motion.span>
    </div>
  );
}