import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Laptop, Compass, Cog, MapPin, Rocket } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React, { useEffect, useState, useRef } from "react";

// Digital Nomad Animation Component
const DigitalNomadAnimation = () => {
  const [rotate, setRotate] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Animation values based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotate(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ y, scale, opacity }}
    >
      {/* Engineer with laptop - Digital Nomad */}
      <motion.svg 
        width="300" 
        height="300" 
        viewBox="0 0 300 300" 
        style={{ filter: "drop-shadow(0px 5px 15px rgba(131, 24, 67, 0.3))" }}
      >
        {/* Background Circle - Represents the world */}
        <motion.circle
          cx="150" cy="150" r="120"
          fill="none"
          stroke="url(#globe-gradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* India Map Outline */}
        <motion.path
          d="M180 120c-5-10-15-5-20-15s-15-5-20-10c-5-5-15 0-15-10s-10-15-15-5c-5 10-10 5-15 15s5 20 0 25c-5 5 0 15 10 15s20 10 25 0c5-10 15-5 20 5s10 15 20 10c10-5 15-15 10-30z"
          fill="#FB923C"
          fillOpacity="0.2"
          stroke="#9A3412"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Engineer/Nomad figure */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Laptop */}
          <motion.rect
            x="120" y="150" width="60" height="40"
            rx="5" ry="5"
            fill="#A78BFA"
            stroke="#831843"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          
          {/* Laptop Screen */}
          <motion.rect
            x="125" y="155" width="50" height="30"
            rx="2" ry="2"
            fill="#FCD34D"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          
          {/* Code lines animation on screen */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.line
              x1="130" y1="160" x2="165" y2="160"
              stroke="#831843"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            />
            <motion.line
              x1="130" y1="165" x2="155" y2="165"
              stroke="#831843"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />
            <motion.line
              x1="130" y1="170" x2="160" y2="170"
              stroke="#831843"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
            />
            <motion.line
              x1="130" y1="175" x2="150" y2="175"
              stroke="#831843"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
            />
          </motion.g>
          
          {/* Telugu / Indian Engineering Icons */}
          <motion.circle
            cx="100" cy="120" r="15"
            fill="#5EEAD4"
            fillOpacity="0.6"
            stroke="#831843"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.6 }}
          />
          <motion.circle
            cx="200" cy="120" r="12"
            fill="#FB923C"
            fillOpacity="0.6"
            stroke="#831843"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.8 }}
          />
          <motion.circle
            cx="160" cy="90" r="10"
            fill="#A78BFA"
            fillOpacity="0.6"
            stroke="#831843"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          />
        </motion.g>
        
        {/* Travel/Nomad Path */}
        <motion.path
          d="M70 180C90 120 150 80 230 100"
          fill="none"
          stroke="url(#path-gradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
        
        {/* Moving dot along path - representing the nomadic journey */}
        <motion.circle
          cx="0" cy="0" r="5"
          fill="#FCD34D"
          animate={{ 
            cx: [70, 110, 150, 190, 230],
            cy: [180, 130, 100, 90, 100]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        {/* Engineering Symbols from Telugu states */}
        <motion.g>
          {/* Ancient Indian engineering symbol - Represents historical connection */}
          <motion.path
            d="M90 210c-5 0-10-5-10-10s5-10 10-10 10 5 10 10-5 10-10 10z"
            fill="#A78BFA"
            stroke="#831843"
            strokeWidth="1.5"
            animate={{ rotate: rotate }}
            style={{ transformOrigin: "90px 200px" }}
          />
          <motion.path
            d="M85 195l5-5 5 5-5 5z"
            fill="#FB923C"
            animate={{ rotate: rotate * -1 }}
            style={{ transformOrigin: "90px 200px" }}
          />
          
          {/* Modern engineering symbol */}
          <motion.path
            d="M210 210c-5 0-10-5-10-10s5-10 10-10 10 5 10 10-5 10-10 10z"
            fill="#FB923C"
            stroke="#831843"
            strokeWidth="1.5"
            animate={{ rotate: rotate }}
            style={{ transformOrigin: "210px 200px" }}
          />
          <motion.path
            d="M205 195l5-5 5 5-5 5z"
            fill="#A78BFA"
            animate={{ rotate: rotate * -1 }}
            style={{ transformOrigin: "210px 200px" }}
          />
        </motion.g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#5EEAD4" />
          </linearGradient>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#831843" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>
        </defs>
      </motion.svg>
      
      {/* Animated Gradient Glow */}
      <div 
        className="absolute w-80 h-80 rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, rgba(251,146,60,0.1) 50%, rgba(255,255,255,0) 70%)",
          animation: "pulse 4s infinite"
        }}
      ></div>
      
      {/* Telugu Engineering Timeline - Animated dots */}
      <div className="absolute bottom-0 left-0 right-0 h-4 flex justify-around">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-[#831843]"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{ 
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Timeline items for engineering history in Telugu states
const historyTimelineItems = [
  {
    year: "1500 BCE",
    title: "ప్రాచీన భారతీయ ఇంజనీరింగ్",
    description: "సింధు లోయ నాగరికతలో నీటి పారుదల వ్యవస్థలు, నగర ప్రణాళిక"
  },
  {
    year: "1800s",
    title: "ఆధునిక ఇంజనీరింగ్",
    description: "తెలుగు ప్రాంతాలలో వ్యవసాయ ఇంజనీరింగ్, నీటిపారుదల పద్ధతులు"
  },
  {
    year: "1950s",
    title: "స్వాతంత్య్ర భారతదేశం",
    description: "ఇంజనీరింగ్ కళాశాలలు, పారిశ్రామిక అభివృద్ధి"
  },
  {
    year: "2000s",
    title: "ఐటీ విప్లవం",
    description: "హైదరాబాద్ టెక్ హబ్‌గా ఎదగడం, సాఫ్ట్‌వేర్ ఇంజనీరింగ్ పురోగతి"
  },
  {
    year: "నేడు",
    title: "డిజిటల్ నోమాడ్",
    description: "ప్రపంచవ్యాప్తంగా పని చేస్తూ, స్థానిక సాంస్కృతిక మూలాలతో అనుసంధానం"
  }
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect for scrolling
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      className="min-h-screen pt-24 pb-12 flex flex-col justify-between overflow-hidden relative telugu-border-pattern"
      ref={containerRef}
    >
      {/* Background Engineering Pattern - subtle circuit pattern */}
      <div className="absolute inset-0 -z-20 opacity-5 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23831843' stroke-width='1'%3E%3Cpath d='M36 10.5v10m-6-10.5v10m-6-10.5v10m-6-10.5v10m-6-10.5v10m30-10.5v10m-6 9.5h10m-10 6h10m-10 6h10m-10 6h10m-16-18.5h10m-10 6h10m-10 6h10m-10 6h10M10.5 34h10m-10 6h10m-10 6h10m-10 6h10m-10-34h10M39.5 10h-19'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="section-container flex flex-col h-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{ y: titleY, opacity: opacityScroll }}
          >
            <motion.h1 
              className="title-xl mb-12 leading-none cultural-decoration"
              variants={slideUp}
            >
              <span className="font-telugu mb-4 block">మీ వ్యాపారాన్ని</span>
              <span className="font-telugu mb-4 block">డిజిటల్‌గా మార్చే</span>
              <span className="font-telugu">నంబర్ వన్ ఇంజనీర్</span>
            </motion.h1>
            
            <motion.div 
              variants={slideUp}
              custom={1}
            >
              <p className="text-xl md:text-2xl mb-8 font-telugu">
                తెలుగు సాంకేతిక పరిజ్ఞానం ప్రపంచవ్యాప్తంగా, డిజిటల్ నోమాడ్ సంస్కృతితో.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-12">
                <a href="#contact" className="btn-primary font-telugu">
                  సంప్రదించండి
                </a>
                
                <a href="#timeline" className="btn-outline font-telugu">
                  చరిత్ర
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative h-[500px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <DigitalNomadAnimation />
          </motion.div>
        </div>
        
        {/* Engineering History Timeline - Minimal visual scrolling timeline */}
        <motion.div 
          id="timeline"
          className="mt-20 relative pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent"></div>
          
          <h2 className="title-md text-center mb-16 font-telugu">తెలుగు ఇంజనీరింగ్ చరిత్ర</h2>
          
          <div className="grid md:grid-cols-5 gap-4">
            {historyTimelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className="card flex flex-col items-center text-center space-y-4 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-full bg-gradient-to-r from-[#A78BFA] to-[#FB923C] p-1 w-14 h-14 flex items-center justify-center mb-2">
                  <span className="text-white font-semibold text-sm">{item.year}</span>
                </div>
                <h3 className="text-lg font-medium font-telugu">{item.title}</h3>
                <p className="text-sm opacity-70 font-telugu">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Timeline connecting line */}
          <div className="absolute top-[8.5rem] left-0 right-0 h-px bg-gradient-to-r from-[#A78BFA] to-[#FB923C] opacity-30 hidden md:block"></div>
        </motion.div>
        
        {/* Feature highlights with icons */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-20"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <div className="card flex flex-col space-y-4 group hover-lift">
            <div className="mb-4 text-[#831843]">
              <Laptop className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium font-telugu">టెక్ నోమాడ్</h3>
            <p className="opacity-70 font-telugu">గ్లోబల్ మార్కెట్‌లో పని చేస్తూ, స్థానిక సాంస్కృతిక నిపుణతను ఉపయోగించడం</p>
            <a href="#services" className="flex items-center space-x-2 font-telugu text-sm">
              <span>మరింత తెలుసుకోండి</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="card flex flex-col space-y-4 group hover-lift">
            <div className="mb-4 text-[#831843]">
              <Compass className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium font-telugu">సంస్కృతి కనెక్షన్</h3>
            <p className="opacity-70 font-telugu">ఆధునిక టెక్నాలజీలో తెలుగు సంస్కృతి మరియు సాంప్రదాయాలను ఏకీకృతం చేయడం</p>
            <a href="#services" className="flex items-center space-x-2 font-telugu text-sm">
              <span>మరింత తెలుసుకోండి</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="card flex flex-col space-y-4 group hover-lift">
            <div className="mb-4 text-[#831843]">
              <Rocket className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium font-telugu">సాంకేతిక విప్లవం</h3>
            <p className="opacity-70 font-telugu">భారతీయ ఇంజనీరింగ్ వారసత్వాన్ని ఆధునిక డిజిటల్ పరిష్కారాలతో పురోగమనం</p>
            <a href="#services" className="flex items-center space-x-2 font-telugu text-sm">
              <span>మరింత తెలుసుకోండి</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="mt-auto pt-8 text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" className="text-black opacity-75 hover:opacity-100 transition-opacity inline-block">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
