import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, Code, Smartphone, Globe, Award, Target, Stars, Zap, BrainCircuit } from "lucide-react";
import { fadeIn, slideIn } from "@/lib/framer-animations";
import React, { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax scrolling effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 500]);
  
  // Grid cells configuration for the animated background
  const numCols = 40;
  const numRows = 20;
  
  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  
  // Random stars array for the space effect
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    animationDuration: Math.random() * 5 + 3,
  }));
  
  // Feature icons with modern animation
  const features = [
    { 
      icon: <Code className="w-5 h-5" />, 
      title: "App Development", 
      description: "Custom solutions tailored to your business needs",
      color: "#00A19C"
    },
    { 
      icon: <BrainCircuit className="w-5 h-5" />, 
      title: "AI Integration", 
      description: "Cutting-edge AI solutions for modern businesses",
      color: "#7038FF" 
    },
    { 
      icon: <Target className="w-5 h-5" />, 
      title: "AI Marketing", 
      description: "Targeted campaigns that deliver real results",
      color: "#FE7F2D" 
    }
  ];
  
  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-[#050b1f] text-white"
      ref={containerRef}
    >
      {/* Animated background with advanced effects */}
      <div className="absolute inset-0 opacity-60">
        {/* Animated gradient circles */}
        <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#00A19C]/20 to-[#00A19C]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-[#7038FF]/20 to-[#7038FF]/5 blur-[100px]" />
        
        {/* Space effect with enhanced stars */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: star.animationDuration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern that reacts to mouse movement */}
        <div className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${numCols}, 1fr)`,
            gridTemplateRows: `repeat(${numRows}, 1fr)`,
          }}
        >
          {Array.from({ length: numCols * numRows }).map((_, i) => {
            const row = Math.floor(i / numCols);
            const col = i % numCols;
            
            return (
              <motion.div
                key={i}
                className="relative"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [
                    0.1,
                    Math.abs(Math.sin((row + col) * 0.1)) * 0.3,
                    0.1
                  ]
                }}
                transition={{
                  duration: 3 + Math.sin(row * col) * 2,
                  repeat: Infinity,
                  delay: (row + col) * 0.02,
                }}
              >
                <motion.div
                  className="absolute inset-1 rounded-md bg-[#00A19C]"
                  style={{ opacity: 0.1 }}
                  animate={{
                    scale: [
                      1,
                      Math.abs((mousePosition.x / (containerRef.current ? containerRef.current.offsetWidth : 1)) - (col / numCols)) < 0.2 &&
                      Math.abs((mousePosition.y / (containerRef.current ? containerRef.current.offsetHeight : 1)) - (row / numRows)) < 0.2
                        ? 1.5
                        : 1,
                    ],
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Main hero content with two columns layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 flex flex-col lg:flex-row items-center">
        {/* Left column - Text content */}
        <motion.div 
          className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12"
          variants={slideIn('left', '', 0.3, 0.8)}
          initial="hidden"
          animate="visible"
        >
          {/* Badges */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#00A19C]/20 border border-[#00A19C]/30 text-[#00A19C] text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
              <Award className="w-3 h-3" />
              <span>Top-Rated</span>
            </div>
            
            <div className="bg-[#7038FF]/20 border border-[#7038FF]/30 text-[#7038FF] text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
              <Target className="w-3 h-3" />
              <span>AI Specialist</span>
            </div>
            
            <div className="bg-[#FE7F2D]/20 border border-[#FE7F2D]/30 text-[#FE7F2D] text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>Fast Delivery</span>
            </div>
          </motion.div>
          
          {/* Main heading with enhanced gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#00A19C] via-[#7C3AED] to-[#FE7F2D] leading-tight">
                no1.engineer
              </span>
              <span className="block text-white text-4xl md:text-5xl font-light mt-2">
                <span className="text-[#00A19C]">Smart</span> Solutions for 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7038FF] to-[#FE7F2D]"> Digital Success</span>
              </span>
              
              <motion.span
                className="absolute -top-8 -right-8 text-white text-base bg-gradient-to-r from-[#00A19C] to-[#00A19C]/70 px-3 py-1 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-1">
                  <Stars className="w-4 h-4" />
                  <span>Premium Quality</span>
                </div>
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Subtitle with gradient */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transforming ideas into powerful digital experiences through
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00A19C] to-[#7C3AED]">
                {" "}innovative engineering{" "}
              </span>
              and AI-driven marketing solutions.
            </p>
            
            {/* CTA buttons with enhanced animations */}
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="bg-gradient-to-r from-[#00A19C] to-[#7038FF] text-white px-8 py-3 rounded-lg font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 161, 156, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started Now</span>
                <motion.div 
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
              
              <motion.a 
                href="#portfolio" 
                className="bg-transparent text-white border border-[#00A19C] px-8 py-3 rounded-lg font-medium hover:bg-[#00A19C]/10 transition-colors duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 161, 156, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View Case Studies <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right column - Profile image with floating effect */}
        <motion.div 
          className="lg:w-1/2 flex justify-center"
          variants={slideIn('right', '', 0.5, 0.8)}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            {/* Animated circles background */}
            <motion.div 
              className="absolute -inset-10 bg-gradient-to-r from-[#00A19C]/40 via-[#7038FF]/40 to-[#FE7F2D]/40 rounded-full blur-3xl opacity-30"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Main profile image */}
            <motion.div
              className="relative rounded-full p-1 bg-gradient-to-r from-[#00A19C] via-[#7038FF] to-[#FE7F2D]"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="overflow-hidden rounded-full border-4 border-black/50 max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px]">
                <img 
                  src="/images/Copy_of_passpic_satwik-removebg-preview.png" 
                  alt="Satwik - no1.engineer" 
                  className="w-full h-full object-cover object-center bg-gray-900"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-2 -right-2 bg-gradient-to-r from-[#00A19C] to-[#00A19C]/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-1">
                  <Code className="w-3 h-3" />
                  <span>Full Stack Developer</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-2 -left-2 bg-gradient-to-r from-[#7038FF] to-[#7038FF]/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                animate={{ 
                  y: [0, 5, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-1">
                  <BrainCircuit className="w-3 h-3" />
                  <span>AI Specialist</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gradient-to-r from-[#FE7F2D] to-[#FE7F2D]/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                animate={{ 
                  x: [0, 5, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-1">
                  <Target className="w-3 h-3" />
                  <span>Marketing Expert</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Feature cards with modern animation */}
      <motion.div 
        className="relative z-10 mx-auto px-4 sm:px-6 pb-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden p-6 border border-gray-800"
                whileHover={{ y: -10, boxShadow: `0 20px 40px -10px ${feature.color}40` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 opacity-10 filter blur-xl"
                  style={{ background: `radial-gradient(circle at center, ${feature.color}80 0%, transparent 70%)` }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                  style={{ 
                    width: '33%',
                    backgroundImage: `linear-gradient(to right, ${feature.color}, transparent)`
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}