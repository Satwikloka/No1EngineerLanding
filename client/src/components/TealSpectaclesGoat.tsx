import React from 'react';
import { motion } from 'framer-motion';

export default function TealSpectaclesGoat() {
  return (
    <div className="relative w-full h-full">
      <motion.svg 
        viewBox="0 0 300 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* White Goat Body */}
        <motion.path
          d="M150 250C194.183 250 230 214.183 230 170C230 125.817 194.183 90 150 90C105.817 90 70 125.817 70 170C70 214.183 105.817 250 150 250Z"
          fill="white"
          stroke="#F5F5F5"
          strokeWidth="2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        
        {/* Goat Face */}
        <motion.path
          d="M150 210C172.091 210 190 192.091 190 170C190 147.909 172.091 130 150 130C127.909 130 110 147.909 110 170C110 192.091 127.909 210 150 210Z"
          fill="#FCFCFC"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        
        {/* Left Ear */}
        <motion.path
          d="M100 120C100 120 80 100 70 80C70 80 90 95 110 110L100 120Z"
          fill="white"
          stroke="#F5F5F5"
          strokeWidth="1"
          initial={{ rotate: -20, x: -10, opacity: 0 }}
          animate={{ rotate: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        
        {/* Right Ear */}
        <motion.path
          d="M200 120C200 120 220 100 230 80C230 80 210 95 190 110L200 120Z"
          fill="white"
          stroke="#F5F5F5"
          strokeWidth="1"
          initial={{ rotate: 20, x: 10, opacity: 0 }}
          animate={{ rotate: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        
        {/* Horns */}
        <motion.path
          d="M120 100C120 100 110 80 100 50C100 50 120 70 130 90L120 100Z"
          fill="#EDEDED"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        
        <motion.path
          d="M180 100C180 100 190 80 200 50C200 50 180 70 170 90L180 100Z"
          fill="#EDEDED"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        
        {/* Beard */}
        <motion.path
          d="M150 210C150 210 140 230 130 250C130 250 150 240 170 250C170 250 160 230 150 210Z"
          fill="#F8F8F8"
          stroke="#F0F0F0"
          strokeWidth="1"
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Eyes */}
        <motion.circle
          cx="130"
          cy="160"
          r="5"
          fill="#333"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        />
        
        <motion.circle
          cx="170"
          cy="160"
          r="5"
          fill="#333"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        />
        
        {/* Nose */}
        <motion.path
          d="M140 180C140 180 150 185 160 180C160 180 155 190 145 190L140 180Z"
          fill="#333"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        />
        
        {/* Teal Spectacles - The highlight feature */}
        <motion.path
          d="M125 160C125 160 135 155 145 160C145 160 135 165 125 160Z"
          stroke="#00A19C"
          strokeWidth="3"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
        
        <motion.path
          d="M155 160C155 160 165 155 175 160C175 160 165 165 155 160Z"
          stroke="#00A19C"
          strokeWidth="3"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
        
        {/* Connection between spectacles */}
        <motion.path
          d="M145 160L155 160"
          stroke="#00A19C"
          strokeWidth="2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 1.1 }}
        />
        
        {/* Spectacle arms */}
        <motion.path
          d="M125 160L110 155"
          stroke="#00A19C"
          strokeWidth="2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
        
        <motion.path
          d="M175 160L190 155"
          stroke="#00A19C"
          strokeWidth="2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
        
        {/* Teal glint on glasses */}
        <motion.circle
          cx="132"
          cy="158"
          r="2"
          fill="#00A19C"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
        />
        
        <motion.circle
          cx="168"
          cy="158"
          r="2"
          fill="#00A19C"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
        />
      </motion.svg>
      
      {/* Text below the goat */}
      <motion.div
        className="absolute bottom-5 left-0 w-full text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <h3 className="text-xl font-bold text-[#00A19C]">G.O.A.T Engineer</h3>
        <p className="text-sm text-gray-600">Greatest Of All Time</p>
      </motion.div>
    </div>
  );
}