import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Globe, Code, Share2 } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React, { useEffect, useState, useRef } from "react";
import McLarenJourneyAnimation from './McLarenJourneyAnimation';
import MercedesJourneyAnimation from './MercedesJourneyAnimation';

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

  // Animation phase descriptions with premium McLaren-inspired styling
  const phases = [
    "Innovation & Discovery",
    "Client Engagement",
    "Requirements Engineering",
    "Precision Development",
    "Performance Delivery"
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="perspective-container w-full h-full overflow-hidden flex flex-col items-center justify-center"
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
              className="absolute transform -translate-x-1/2 -bottom-12"
              style={{ left: `${(index / 4) * 100}%` }}
            >
              <motion.div 
                className={`w-4 h-4 rounded-full transition-all duration-500 mb-2 mx-auto flex items-center justify-center
                  ${index <= animationPhase ? 'bg-gradient-to-br from-[#FF8000] to-[#0090D4] shadow-[0_0_15px_rgba(255,128,0,0.7)]' : 'bg-slate-700'}`}
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-2 h-2 rounded-full ${index <= animationPhase ? 'bg-white' : 'bg-slate-600'}`}></div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                <span className={`text-xs font-medium tracking-wider uppercase bg-slate-100 px-2 py-1 rounded-md shadow-md 
                  ${index <= animationPhase ? 'text-slate-900 bg-opacity-90' : 'text-slate-500 bg-opacity-60'}`}
                  style={{ fontSize: '0.7rem' }}
                >
                  {phase}
                </span>
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
            
            {/* Tech Stack elements - McLaren style tech branding */}
            <div className="absolute top-2 left-5 right-5 z-10">
              {/* Modern branded tech logo orbit */}
              <div className="relative h-24 flex justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-dashed border-gray-300 opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-dashed border-gray-300 opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-dashed border-gray-300 opacity-20"></div>
                
                {/* Orbiting tech brand logos */}
                {[
                  {
                    id: "google",
                    color: "linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)",
                    angle: 0,
                    size: 14,
                    orbit: 14,
                    speed: 15
                  },
                  {
                    id: "playstore",
                    color: "linear-gradient(135deg, #FF8000, #F78422)",
                    angle: 72,
                    size: 16,
                    orbit: 18,
                    speed: 20
                  },
                  {
                    id: "instagram",
                    color: "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
                    angle: 144,
                    size: 12,
                    orbit: 22,
                    speed: 25
                  },
                  {
                    id: "react",
                    color: "linear-gradient(135deg, #61DAFB, #5A67D8)",
                    angle: 216,
                    size: 15,
                    orbit: 16,
                    speed: 18
                  },
                  {
                    id: "twitter",
                    color: "linear-gradient(135deg, #1DA1F2, #0077B5)",
                    angle: 288,
                    size: 13,
                    orbit: 20,
                    speed: 22
                  }
                ].map((logo) => (
                  <motion.div
                    key={logo.id}
                    className="absolute top-1/2 left-1/2 flex items-center justify-center shadow-lg rounded-xl"
                    style={{ 
                      width: `${logo.size}px`,
                      height: `${logo.size}px`,
                      background: logo.color,
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                    }}
                    animate={{
                      x: [
                        Math.cos(logo.angle * (Math.PI / 180)) * logo.orbit,
                        Math.cos((logo.angle + 360) * (Math.PI / 180)) * logo.orbit
                      ],
                      y: [
                        Math.sin(logo.angle * (Math.PI / 180)) * logo.orbit,
                        Math.sin((logo.angle + 360) * (Math.PI / 180)) * logo.orbit
                      ],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      x: { duration: logo.speed, repeat: Infinity, ease: "linear" },
                      y: { duration: logo.speed, repeat: Infinity, ease: "linear" },
                      scale: { 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        ease: "easeInOut",
                        delay: logo.angle / 360 * 3
                      }
                    }}
                  >
                    {logo.id === "google" && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                      </svg>
                    )}
                    {logo.id === "playstore" && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    )}
                    {logo.id === "instagram" && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                      </svg>
                    )}
                    {logo.id === "react" && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z" />
                      </svg>
                    )}
                    {logo.id === "twitter" && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                      </svg>
                    )}
                  </motion.div>
                ))}
                
                {/* Central logo - Highlight for Play Store */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl shadow-xl flex items-center justify-center"
                  style={{ 
                    background: "linear-gradient(135deg, #FF8000, #F78422)",
                    boxShadow: "0 0 20px rgba(255, 128, 0, 0.5)"
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    scale: { duration: 3, repeat: Infinity, repeatType: "reverse" },
                    rotate: { duration: 6, repeat: Infinity, repeatType: "mirror" }
                  }}
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </motion.div>
              </div>
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
    icon: <Globe className="h-6 w-6 text-white" />
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
    icon: <Code className="h-6 w-6 text-white" />
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
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#FF8000] to-[#0090D4] text-white inline-block mb-6 shadow-md">
                SATWIK LOKA | THE NO.1 ENGINEER
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 decoration-line">
                Expert Development <br/>
                <span className="title-lg">For Digital Excellence</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-lg">
                Premium app and web development with a personal touch. 
                From in-person client meetings to world-class remote delivery.
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
          
          {/* Hero image/illustration */}
          <motion.div
            className="relative h-[600px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Premium Mercedes-inspired profile card */}
            <motion.div 
              className="relative w-[450px] h-[450px] rounded-lg border border-gray-200 shadow-2xl overflow-hidden bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
            >
              {/* Mercedes style top accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#00A19C]"></div>
              
              {/* Silver arrow accent */}
              <div className="absolute left-0 top-2 bottom-0 w-1 bg-gradient-to-b from-[#00A19C] to-gray-300"></div>
              
              {/* Profile Image */}
              <div className="pt-8 px-6 flex justify-center">
                <motion.div 
                  className="w-32 h-32 rounded-full bg-gray-200 border-4 border-[#00A19C] overflow-hidden shadow-lg"
                  animate={{ 
                    boxShadow: ['0 0 0 rgba(0, 161, 156, 0.3)', '0 0 16px rgba(0, 161, 156, 0.5)', '0 0 0 rgba(0, 161, 156, 0.3)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img 
                    src="/attached_assets/Copy_of_passpic_satwik-removebg-preview.png" 
                    alt="Satwik Loka Profile" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Profile Info */}
              <div className="pt-6 px-8 text-center">
                <motion.h3
                  className="text-2xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Satwik Loka
                </motion.h3>
                <motion.p
                  className="text-[#00A19C] font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  App Developer & Digital Nomad
                </motion.p>
              </div>
              
              {/* Stats Grid */}
              <div className="mt-8 grid grid-cols-3 gap-4 px-6">
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg text-center"
                  whileHover={{ y: -3, backgroundColor: "#f8f8f8" }}
                >
                  <h4 className="text-3xl font-bold text-[#00A19C]">7+</h4>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg text-center"
                  whileHover={{ y: -3, backgroundColor: "#f8f8f8" }}
                >
                  <h4 className="text-3xl font-bold text-[#00A19C]">120+</h4>
                  <p className="text-sm text-gray-600">Projects</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg text-center"
                  whileHover={{ y: -3, backgroundColor: "#f8f8f8" }}
                >
                  <h4 className="text-3xl font-bold text-[#00A19C]">30+</h4>
                  <p className="text-sm text-gray-600">Clients</p>
                </motion.div>
              </div>
              
              {/* Skills */}
              <div className="mt-8 px-6">
                <h4 className="text-sm font-medium text-gray-600 mb-3">TECHNICAL EXPERTISE</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#00A19C] mr-2"></div>
                    <span className="text-sm">React Native</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#00A19C] mr-2"></div>
                    <span className="text-sm">Flutter</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#00A19C] mr-2"></div>
                    <span className="text-sm">React.js</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#00A19C] mr-2"></div>
                    <span className="text-sm">Node.js</span>
                  </div>
                </div>
              </div>
              
              {/* Mercedes-inspired badge */}
              <div className="absolute bottom-6 right-6">
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-md overflow-hidden border-2 border-[#00A19C]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="text-xl font-bold text-[#00A19C]">NO.1</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Digital Nomad Animation Showcase - Full Section */}
        <motion.div 
          id="journey-animation"
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
              <McLarenJourneyAnimation />
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
            className="card-glass flex flex-col space-y-4 group" 
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00A19C] to-[#67C7C4] flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-100">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Tech Expert</h3>
            <p className="text-slate-600">Bringing global tech expertise to local markets with personalized solutions</p>
            <div className="flex items-center space-x-2 text-[#00A19C] text-sm transition-all">
              <span className="font-medium">App Development</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="card-glass flex flex-col space-y-4 group" 
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#333333] to-[#666666] flex items-center justify-center text-white mb-4 shadow-lg shadow-gray-200">
              <Share2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Personal Consultation</h3>
            <p className="text-slate-600">Meeting clients in person to understand requirements before delivering remotely</p>
            <div className="flex items-center space-x-2 text-gray-700 text-sm transition-all">
              <span className="font-medium">Digital Solutions</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="card-glass flex flex-col space-y-4 group" 
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#CFD0D0] to-[#E5E5E5] flex items-center justify-center text-gray-800 mb-4 shadow-lg shadow-gray-200">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Global Delivery</h3>
            <p className="text-slate-600">Providing premium development services with world-class expertise and rapid delivery</p>
            <div className="flex items-center space-x-2 text-gray-500 text-sm transition-all">
              <span className="font-medium">Web & Mobile Development</span>
            </div>
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
