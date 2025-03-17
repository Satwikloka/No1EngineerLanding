import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Globe, Code, Cpu, Share2, Layers } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React, { useEffect, useState, useRef } from "react";

// The Modern 3D Digital Nomad Animation
const Modern3DAnimation = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.2]);
  
  // 3D effect that follows mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center (normalized to -15 to 15 degrees)
      const rotateY = ((e.clientX - centerX) / rect.width) * 8;
      const rotateX = ((e.clientY - centerY) / rect.height) * -8;
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="perspective-container w-full h-full flex items-center justify-center"
      style={{ y, scale, opacity }}
    >
      {/* 3D Transform Container */}
      <motion.div 
        className="transform-3d relative w-[600px] h-[600px]"
        style={{ 
          rotateX: rotation.x,
          rotateY: rotation.y,
          transition: "transform 0.1s ease-out"
        }}
      >
        {/* Large outer sphere - represents global reach */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(124,58,237,0.03) 0%, rgba(251,146,60,0.01) 70%, transparent 100%)",
            boxShadow: "0 0 60px rgba(124,58,237,0.1)",
            transform: "translateZ(0px)"
          }}
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* Orbiting elements */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute top-1/2 left-1/2 w-10 h-10 -mt-5 -ml-5"
            animate={{
              rotate: [angle, angle + 360],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "250px 0",
            }}
          >
            <motion.div
              className="w-10 h-10 rounded-xl bg-white shadow-xl glass"
              initial={{ rotateY: 0, opacity: 0.7 }}
              whileHover={{ rotateY: 180, opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              style={{ 
                backgroundImage: i % 2 === 0 
                  ? "linear-gradient(135deg, rgba(167,139,250,0.8), rgba(124,58,237,0.4))"
                  : "linear-gradient(135deg, rgba(251,146,60,0.8), rgba(234,88,12,0.4))",
                transform: "translateZ(20px)"
              }}
            />
          </motion.div>
        ))}
        
        {/* Central Sphere - Representing Andhra Pradesh and Telangana */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.8), rgba(167,139,250,0.5))",
            boxShadow: "0 0 30px rgba(124,58,237,0.5)",
            transform: "translateZ(40px)"
          }}
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {/* Subtle AP and Telangana map outline */}
          <svg 
            className="w-full h-full p-4 opacity-70" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M30,20 Q40,30 50,30 T70,40 Q80,50 70,60 T60,80 Q40,70 30,80 T20,60 Q10,40 30,20Z" 
              fill="white" 
              fillOpacity="0.3"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
        
        {/* Digital Nomad Laptop */}
        <motion.div
          className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-24 rounded-lg"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))",
            boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
            transform: "translateZ(60px) rotateX(10deg)"
          }}
          animate={{ 
            y: [0, -3, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {/* Screen part */}
          <div 
            className="absolute top-0 left-0 right-0 h-3/4 rounded-t-lg" 
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.8), rgba(251,146,60,0.8))",
              boxShadow: "inset 0 0 10px rgba(255,255,255,0.5)"
            }}
          >
            {/* Code lines */}
            <div className="p-2">
              {[1, 2, 3, 4].map((_, i) => (
                <motion.div 
                  key={`code-${i}`}
                  className="h-1 bg-white bg-opacity-70 rounded-full mb-1"
                  style={{ width: `${50 + Math.random() * 30}%` }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 0.7, scaleX: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1 + i * 0.2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </div>
          {/* Base part */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#f1f5f9] bg-opacity-90 rounded-b-lg" />
        </motion.div>
        
        {/* Orbit rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            border: "1px dashed rgba(251,146,60,0.2)",
            transform: "translateZ(10px) rotateX(75deg)"
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
          style={{
            border: "1px dashed rgba(124,58,237,0.2)",
            transform: "translateZ(20px) rotateX(75deg)"
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating technology elements */}
        {["#7C3AED", "#EA580C", "#5EEAD4"].map((color, i) => (
          <motion.div
            key={`tech-${i}`}
            className="absolute"
            style={{
              top: `${20 + i * 20}%`,
              left: `${20 + i * 25}%`,
              transform: `translateZ(${80 + i * 10}px)`,
              zIndex: 5
            }}
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 180, 360],
              rotateZ: [0, i % 2 === 0 ? 45 : -45, 0]
            }}
            transition={{ 
              y: { duration: 3 + i, repeat: Infinity, repeatType: "reverse" },
              rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
              rotateZ: { duration: 5 + i, repeat: Infinity, repeatType: "reverse" }
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg glass"
              style={{ 
                background: `linear-gradient(135deg, ${color}, white)`,
                boxShadow: `0 5px 20px ${color}40`
              }}
            />
          </motion.div>
        ))}
        
        {/* Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? "#A78BFA" : "#FB923C",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6,
              transform: `translateZ(${Math.random() * 100}px)`
            }}
            animate={{ 
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ 
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </motion.div>
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
            <Modern3DAnimation />
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
