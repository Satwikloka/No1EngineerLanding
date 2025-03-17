import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Car, Briefcase, MapPin, ClipboardCheck, Sparkles, Code, Smartphone, Globe } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React, { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  
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
  const stars = Array.from({ length: 100 }, (_, i) => ({
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
      title: "Custom App Development", 
      description: "Build tailored solutions that perfectly align with your business needs",
      color: "#00A19C"
    },
    { 
      icon: <Smartphone className="w-5 h-5" />, 
      title: "Mobile & Web Design", 
      description: "Create seamless experiences across all devices and platforms",
      color: "#7038FF" 
    },
    { 
      icon: <Globe className="w-5 h-5" />, 
      title: "Marketing & Analytics", 
      description: "Reach your target audience and measure performance",
      color: "#FE7F2D" 
    }
  ];
  
  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-black text-white"
      ref={containerRef}
    >
      {/* Aceternity-inspired animated background */}
      <div className="absolute inset-0 opacity-60">
        {/* Space effect with stars */}
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
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <div className="flex flex-col items-center text-center mb-16">
          {/* Animated gradient text */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00A19C] via-[#7C3AED] to-[#FE7F2D] relative">
              <span className="leading-tight">no1.engineer</span>
              <motion.span
                className="absolute -top-8 -right-8 text-white text-base bg-[#00A19C] px-2 py-1 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Premium Quality</span>
                </div>
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A19C] to-[#7C3AED]">
                Premium
              </span>{" "}
              digital engineering solutions that transform your business
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#contact" 
                className="bg-gradient-to-r from-[#00A19C] to-[#7C3AED] text-white px-8 py-3 rounded-lg font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Schedule a Consultation</span>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View Portfolio <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Feature cards with modern animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden p-6 border border-gray-800"
              whileHover={{ y: -10, boxShadow: `0 10px 30px -5px ${feature.color}20` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
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
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-24"
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
      </div>
    </section>
  );
}