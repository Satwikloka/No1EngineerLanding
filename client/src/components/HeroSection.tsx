import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Globe, Code, Cpu, Share2, Layers } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React, { useEffect, useState, useRef } from "react";

// Digital Nomad Journey Animation - 4K Business Journey
const DigitalNomadJourneyAnimation = () => {
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

  // Animation phase descriptions
  const phases = [
    "Research & Discovery",
    "Client Meeting",
    "Requirements Gathering",
    "Development",
    "Delivery & Launch"
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="perspective-container w-full h-full overflow-hidden flex flex-col items-center justify-center"
      style={{ y, scale, opacity }}
    >
      {/* Journey progress indicator */}
      <div className="absolute top-0 w-full flex justify-between px-6 py-2 z-20">
        <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
          <motion.div 
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-purple-600 to-orange-500"
            style={{ width: `${(animationPhase / 4) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
          
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="absolute transform -translate-x-1/2 -bottom-8"
              style={{ left: `${(index / 4) * 100}%` }}
            >
              <div 
                className={`w-3 h-3 rounded-full transition-colors duration-300 mb-1 mx-auto ${
                  index <= animationPhase ? 'bg-gradient-to-r from-purple-600 to-orange-500' : 'bg-gray-300'
                }`}
              />
              <span className={`text-xs whitespace-nowrap ${
                index <= animationPhase ? 'text-gray-800 font-medium' : 'text-gray-400'
              }`}>
                {phase}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main 3D scene */}
      <div className="transform-3d relative w-full h-[450px] mt-20">
        {/* Road/path that connects all journey phases */}
        <div className="absolute bottom-20 left-0 right-0 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 z-0" />
        
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
          {/* Person at desk */}
          <motion.div 
            className="relative w-40 h-60"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Desk */}
            <div className="absolute bottom-0 w-full h-10 rounded-md bg-gradient-to-r from-indigo-800 to-indigo-600" />
            
            {/* Laptop */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-16">
              <div className="w-24 h-12 rounded-t-md bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
                <div className="w-20 h-10 rounded-sm bg-gradient-to-br from-purple-500 to-orange-500 p-1">
                  <motion.div
                    className="w-full h-1 bg-white mb-1 rounded-full"
                    animate={{ width: ['60%', '80%', '40%', '90%'], x: [0, 2, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-full h-1 bg-white mb-1 rounded-full"
                    animate={{ width: ['40%', '70%', '90%', '60%'], x: [0, -2, 1, 0] }}
                    transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
                  />
                </div>
              </div>
              <div className="w-24 h-4 rounded-b-md bg-gradient-to-r from-gray-700 to-gray-600" />
            </div>
            
            {/* Person */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-30">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 relative">
                {/* Face details */}
                <div className="absolute top-3 left-2 w-1.5 h-1.5 rounded-full bg-white" />
                <div className="absolute top-3 right-2 w-1.5 h-1.5 rounded-full bg-white" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-white" />
              </div>
              
              {/* Body - Business Suit */}
              <div className="w-14 h-20 -mt-2 -ml-2 rounded-md bg-gradient-to-b from-indigo-600 to-indigo-800">
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-2 bg-white rounded-sm" />
              </div>
            </div>
            
            {/* Floating search/research elements */}
            <motion.div
              className="absolute top-5 right-0 w-14 h-14 rounded-lg glass flex items-center justify-center"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ 
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.3)"
              }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7C3AED" strokeWidth="2" />
                <path d="M21 21L16.65 16.65" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
            
            <motion.div
              className="absolute top-10 left-0 w-12 h-12 rounded-lg glass flex items-center justify-center"
              animate={{ y: [0, -8, 0], rotate: [0, -5, 0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
              style={{ 
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 8px 32px rgba(251,146,60,0.3)"
              }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#EA580C" strokeWidth="2" />
                <path d="M3 9H21" stroke="#EA580C" strokeWidth="2" />
                <path d="M9 21V9" stroke="#EA580C" strokeWidth="2" />
              </svg>
            </motion.div>
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold bg-white bg-opacity-70 px-3 py-1 rounded-full">Research Phase</div>
        </motion.div>
        
        {/* Phase 1: Client Meeting - Business person on bicycle */}
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
              
              {/* Frame */}
              <div className="absolute bottom-7 left-7 w-26 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transform rotate-45" />
              <div className="absolute bottom-7 left-7 w-26 h-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transform -rotate-15" />
              <div className="absolute bottom-7 right-7 w-14 h-2 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full transform rotate-15" />
              
              {/* Handlebar */}
              <div className="absolute bottom-16 right-7 w-2 h-10 bg-gray-800 rounded-full" />
              <div className="absolute bottom-24 right-7 w-8 h-2 bg-gray-800 rounded-full" />
              
              {/* Seat */}
              <div className="absolute bottom-18 left-12 w-10 h-3 bg-gray-800 rounded-md" />
              <div className="absolute bottom-10 left-14 w-2 h-8 bg-gray-800 rounded-full" />
            </div>
            
            {/* Business Person */}
            <div className="absolute bottom-22 left-16 w-10 h-40">
              {/* Head */}
              <div className="absolute top-0 w-8 h-8 rounded-full bg-gradient-to-r from-gray-800 to-gray-700">
                {/* Face details */}
                <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-white" />
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-white" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-white" />
              </div>
              
              {/* Suit */}
              <div className="absolute top-7 left-1 w-6 h-15 rounded-md bg-indigo-700">
                {/* Tie */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-red-500" />
              </div>
              
              {/* Briefcase */}
              <motion.div
                className="absolute top-18 left-8 w-8 h-6 rounded-sm bg-gradient-to-r from-amber-700 to-amber-600"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-sm bg-amber-900" />
              </motion.div>
              
              {/* Legs */}
              <motion.div
                className="absolute top-22 left-2 w-2 h-10 bg-gray-700 rounded-md origin-top"
                animate={{ rotate: [25, 65, 25] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-22 left-4 w-2 h-10 bg-gray-700 rounded-md origin-top"
                animate={{ rotate: [65, 25, 65] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            
            {/* Laptop bag */}
            <motion.div
              className="absolute bottom-26 left-18 w-10 h-8 rounded-md bg-gradient-to-r from-blue-700 to-blue-500"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-blue-300 rounded-sm" />
            </motion.div>
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold bg-white bg-opacity-70 px-3 py-1 rounded-full">Client Meeting</div>
        </motion.div>
        
        {/* Phase 2: Requirements Gathering - Meeting at client location */}
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
          {/* Office building and meeting */}
          <motion.div className="relative w-60 h-60">
            {/* Building */}
            <div className="absolute bottom-0 w-50 h-40 bg-gradient-to-t from-blue-900 to-blue-700 rounded-t-lg">
              {/* Windows */}
              <div className="grid grid-cols-3 gap-2 p-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-full h-6 bg-blue-200" 
                    style={{ opacity: Math.random() * 0.5 + 0.5 }}
                  />
                ))}
              </div>
              
              {/* Door */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-14 bg-blue-500">
                <div className="absolute top-1/2 right-2 w-1 h-2 bg-yellow-400 rounded-full" />
              </div>
            </div>
            
            {/* Meeting table */}
            <div className="absolute bottom-4 left-16 w-30 h-20">
              {/* Table */}
              <div className="absolute bottom-0 w-30 h-6 rounded-md bg-amber-800" />
              
              {/* People */}
              <div className="absolute bottom-6 left-4 w-6 h-12">
                <div className="w-6 h-6 rounded-full bg-gray-700" />
                <div className="w-6 h-6 mt-1 bg-indigo-700 rounded-t-md" />
              </div>
              
              <div className="absolute bottom-6 right-4 w-6 h-12">
                <div className="w-6 h-6 rounded-full bg-gray-800" />
                <div className="w-6 h-6 mt-1 bg-blue-800 rounded-t-md" />
              </div>
              
              {/* Laptop on table */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-7">
                <div className="w-10 h-5 bg-gray-800 rounded-t-sm" />
                <div className="w-10 h-2 bg-gray-700 rounded-b-sm" />
              </div>
              
              {/* Notes/documents */}
              <motion.div
                className="absolute bottom-7 left-10 w-6 h-8 bg-white shadow-md transform rotate-3"
                animate={{ rotate: [3, 5, 3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-0.5 bg-gray-400 mt-1" />
                <div className="w-full h-0.5 bg-gray-400 mt-1" />
                <div className="w-3/4 h-0.5 bg-gray-400 mt-1" />
              </motion.div>
            </div>
            
            {/* Thought bubbles with requirements */}
            <motion.div
              className="absolute top-4 left-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
              animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ boxShadow: "0 8px 32px rgba(59, 130, 246, 0.2)" }}
            >
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 5h16v2H4zm0 4h16v2H4zm0 4h10v2H4z" />
              </svg>
            </motion.div>
            
            <motion.div
              className="absolute top-10 left-32 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
              animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              style={{ boxShadow: "0 8px 32px rgba(236, 72, 153, 0.2)" }}
            >
              <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 5C8.58 5 5 8.58 5 13s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V8h2v2z" />
              </svg>
            </motion.div>
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold bg-white bg-opacity-70 px-3 py-1 rounded-full">Requirements Gathering</div>
        </motion.div>
        
        {/* Phase 3: Development - Working on laptop with tech stack */}
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
          {/* Developer with tech stack */}
          <motion.div className="relative w-60 h-60">
            {/* Desk setup */}
            <div className="absolute bottom-0 w-50 h-10 bg-amber-800 rounded-md" />
            
            {/* Person */}
            <div className="absolute bottom-10 left-20 w-10 h-30">
              <div className="w-8 h-8 rounded-full bg-gray-800 mx-auto" />
              <div className="w-10 h-16 bg-indigo-700 rounded-md mt-1" />
            </div>
            
            {/* Laptop */}
            <div className="absolute bottom-10 left-16 w-18 h-14">
              <div className="w-18 h-10 bg-gray-800 rounded-t-md flex items-center justify-center">
                <motion.div 
                  className="w-16 h-8 rounded-sm overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}
                >
                  {/* Code on screen */}
                  <motion.div 
                    className="grid grid-cols-1 gap-1 p-1"
                    animate={{ y: [-8, 0, -8] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  >
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="h-0.5 bg-white opacity-70" style={{ width: `${Math.random() * 50 + 50}%` }} />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
              <div className="w-18 h-4 bg-gray-700 rounded-b-md" />
            </div>
            
            {/* Tech Stack elements */}
            <div className="absolute top-5 left-5 right-5 flex justify-around">
              {/* Tech logos */}
              {[
                "linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)", // Google
                "linear-gradient(135deg, #A50044, #F78422)",                   // Play Store
                "linear-gradient(135deg, #1DA1F2, #0077B5)",                   // Social media
                "linear-gradient(135deg, #61DAFB, #764ABC)"                    // Web tech
              ].map((bg, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-lg shadow-xl flex items-center justify-center"
                  style={{ background: bg }}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: i % 2 === 0 ? [0, 10, 0, -10, 0] : [0, -10, 0, 10, 0]
                  }}
                  transition={{ 
                    y: { duration: 2 + i * 0.5, repeat: Infinity },
                    rotate: { duration: 5, repeat: Infinity }
                  }}
                >
                  {i === 0 && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />
                    </svg>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Code blocks floating */}
            <motion.div
              className="absolute -top-4 right-5 w-16 h-20 rounded-md overflow-hidden"
              style={{ background: "rgba(15,23,42,0.9)" }}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 3, 0, -3, 0]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity },
                rotate: { duration: 6, repeat: Infinity }
              }}
            >
              <div className="p-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-1 mb-1 rounded-full" 
                    style={{ 
                      width: `${Math.random() * 50 + 30}%`,
                      background: i % 3 === 0 ? "#EC4899" : i % 3 === 1 ? "#7C3AED" : "#FFFFFF",
                      opacity: 0.8
                    }} 
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold bg-white bg-opacity-70 px-3 py-1 rounded-full">Development</div>
        </motion.div>
        
        {/* Phase 4: Delivery & Launch - Tech products and launch */}
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
          {/* Launch and delivery */}
          <motion.div className="relative w-60 h-60">
            {/* Rocket launch platform */}
            <div className="absolute bottom-0 w-40 h-8 bg-gray-800 rounded-md" />
            
            {/* Rocket/app launch */}
            <motion.div
              className="absolute bottom-8 left-16 w-12 h-24"
              animate={{ 
                y: animationPhase === 4 ? [-20, -50, -80] : 0,
                opacity: animationPhase === 4 ? [1, 1, 0] : 1
              }}
              transition={{ duration: 2, repeat: animationPhase === 4 ? Infinity : 0 }}
            >
              {/* Rocket body */}
              <div className="w-12 h-20 bg-gradient-to-b from-purple-600 to-indigo-700 rounded-t-2xl">
                {/* Window */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-300 border-2 border-white" />
                
                {/* App logo */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 rounded-md bg-white flex items-center justify-center">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-orange-500" />
                </div>
              </div>
              
              {/* Rocket fins */}
              <div className="absolute bottom-0 -left-2 w-4 h-6 bg-indigo-500 rounded-l-md" />
              <div className="absolute bottom-0 -right-2 w-4 h-6 bg-indigo-500 rounded-r-md" />
              
              {/* Exhaust flames */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-10"
                animate={{ 
                  height: [8, 14, 8],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
                <div className="w-full h-full bg-gradient-to-b from-orange-500 via-yellow-400 to-transparent rounded-b-2xl" />
              </motion.div>
            </motion.div>
            
            {/* Delivery elements */}
            <motion.div 
              className="absolute top-5 left-0 w-14 h-14 rounded-md bg-white shadow-xl flex items-center justify-center"
              animate={{ 
                x: [0, 10, 0],
                y: [0, -5, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute top-16 right-2 w-14 h-14 rounded-md bg-white shadow-xl flex items-center justify-center"
              animate={{ 
                x: [0, -10, 0],
                y: [0, -5, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute top-25 left-30 w-14 h-14 rounded-md bg-white shadow-xl flex items-center justify-center"
              animate={{ 
                x: [0, 5, 0],
                y: [0, -10, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
              </svg>
            </motion.div>
            
            {/* Confetti */}
            {animationPhase === 4 && Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: [
                    "#7C3AED", "#EC4899", "#F59E0B", "#10B981", "#3B82F6"
                  ][Math.floor(Math.random() * 5)],
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                  opacity: [1, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 1 + Math.random() * 1,
                  repeat: Infinity,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </motion.div>
          
          <div className="mt-4 text-sm font-semibold bg-white bg-opacity-70 px-3 py-1 rounded-full">Delivery & Launch</div>
        </motion.div>
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-gray-600 pb-2">
        Move your mouse left to right to explore the journey ←→
      </div>
    </motion.div>
  );
};

// Engineering milestones for the Timeline
const engineeringMilestones = [
  {
    year: "1500 BCE",
    title: "Ancient Engineering",
    description: "Early hydraulic systems and architectural innovations",
    icon: <Layers className="h-6 w-6 text-white" />
  },
  {
    year: "1800s",
    title: "Modern Engineering",
    description: "Development of agricultural and irrigation techniques",
    icon: <Share2 className="h-6 w-6 text-white" />
  },
  {
    year: "1950s",
    title: "Independent India",
    description: "Establishment of technical institutions and industrial growth",
    icon: <Cpu className="h-6 w-6 text-white" />
  },
  {
    year: "2000s",
    title: "IT Revolution",
    description: "Rise of Hyderabad as a global tech hub",
    icon: <Code className="h-6 w-6 text-white" />
  },
  {
    year: "Today",
    title: "Digital Nomad",
    description: "Global tech solutions with cultural roots",
    icon: <Globe className="h-6 w-6 text-white" />
  }
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effects for scrolling
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 opacity-30" style={{
        background: "radial-gradient(circle at top right, rgba(124,58,237,0.1), transparent 50%)",
      }}></div>
      
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 opacity-20" style={{
        background: "radial-gradient(circle at bottom left, rgba(251,146,60,0.1), transparent 60%)",
      }}></div>
      
      {/* Main content container */}
      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div 
            className="relative"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-orange-400 text-white inline-block mb-6">
                The No.1 Engineer
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 decoration-line">
                Transforming Business <br/>
                <span className="title-lg">Through Digital Innovation</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-lg">
                Global tech solutions with cultural roots in <span className="font-telugu">తెలుగు</span> engineering excellence. 
                Bringing world-class digital nomad expertise to your projects.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
              style={{ opacity: contentOpacity }}
            >
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              
              <a href="#about" className="btn-outline">
                Explore Services
              </a>
            </motion.div>
            
            {/* Tech stack icons */}
            <motion.div 
              className="mt-16 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{ opacity: contentOpacity }}
            >
              <span className="text-sm text-slate-500">Tech stack:</span>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                  >
                    <div 
                      className="w-6 h-6 rounded-full" 
                      style={{ 
                        background: `linear-gradient(135deg, var(--color-deep-purple), var(--color-orange-cream))`
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* 3D Animation */}
          <motion.div
            className="relative h-[600px] perspective-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <DigitalNomadJourneyAnimation />
          </motion.div>
        </div>
        
        {/* Engineering Journey Timeline */}
        <motion.div 
          id="engineering-journey"
          className="mt-32 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="title-md mb-4">Engineering Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From ancient Indian engineering wisdom to modern digital nomad solutions, our approach combines 
              timeless principles with cutting-edge technology.
            </p>
          </div>
          
          <div className="relative grid md:grid-cols-5 gap-6">
            {/* Timeline line */}
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#EA580C] opacity-20 hidden md:block"></div>
            
            {engineeringMilestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="card-glass flex flex-col items-center text-center space-y-4 hover-lift relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -top-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EA580C] flex items-center justify-center shadow-lg">
                  {milestone.icon}
                </div>
                
                <h3 className="text-xl font-semibold mt-6">{milestone.title}</h3>
                <div className="text-sm font-medium text-[#7C3AED]">{milestone.year}</div>
                <p className="text-sm text-slate-600">{milestone.description}</p>
              </motion.div>
            ))}
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
            className="card-glass flex flex-col space-y-4 group" 
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] flex items-center justify-center text-white mb-4">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Tech Nomad</h3>
            <p className="text-slate-600">Working in global markets while utilizing local cultural expertise and insights</p>
            <a href="#services" className="flex items-center space-x-2 text-[#7C3AED] text-sm group-hover:translate-x-1 transition-all">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          
          <motion.div 
            className="card-glass flex flex-col space-y-4 group" 
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#EA580C] to-[#FB923C] flex items-center justify-center text-white mb-4">
              <Share2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Cultural Connection</h3>
            <p className="text-slate-600">Integrating Telugu culture and traditions into modern technology solutions</p>
            <a href="#services" className="flex items-center space-x-2 text-[#EA580C] text-sm group-hover:translate-x-1 transition-all">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          
          <motion.div 
            className="card-glass flex flex-col space-y-4 group" 
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#5EEAD4] to-[#99F6E4] flex items-center justify-center text-white mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Global Innovation</h3>
            <p className="text-slate-600">Advancing Indian engineering heritage with modern digital solutions for worldwide impact</p>
            <a href="#services" className="flex items-center space-x-2 text-[#0D9488] text-sm group-hover:translate-x-1 transition-all">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="mt-24 text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" className="text-slate-400 hover:text-slate-800 transition-colors">
            <ChevronDown className="h-6 w-6 mx-auto" />
            <span className="text-sm block mt-2">Scroll to explore</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
