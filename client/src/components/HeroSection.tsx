import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React, { useEffect, useState } from "react";

// SVG Component for 3D animation
const TeluguCulturalSymbol = () => {
  const [rotate, setRotate] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotate(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <motion.svg 
        width="200" 
        height="200" 
        viewBox="0 0 200 200" 
        style={{ transform: `rotateY(${rotate}deg)` }}
        className="drop-shadow-[0_0_15px_rgba(131,24,67,0.3)]"
      >
        {/* Charminar - Symbol of Telangana */}
        <g>
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            d="M70 150h60v30H70z" 
            fill="#A78BFA" 
            strokeWidth="2"
            stroke="#831843"
          />
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
            d="M60 80h80v70H60z" 
            fill="#A78BFA" 
            strokeWidth="2"
            stroke="#831843"
          />
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
            d="M75 80c0-15 10-30 25-30s25 15 25 30" 
            fill="none" 
            strokeWidth="4"
            stroke="#831843"
          />
          {/* Minarets */}
          <motion.circle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            cx="70" cy="90" r="8" 
            fill="#FB923C" 
          />
          <motion.circle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            cx="130" cy="90" r="8" 
            fill="#FB923C" 
          />
          <motion.circle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            cx="70" cy="130" r="8" 
            fill="#FB923C" 
          />
          <motion.circle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            cx="130" cy="130" r="8" 
            fill="#FB923C" 
          />
        </g>
        
        {/* Kalamkari Art - Traditional Andhra art form */}
        <g>
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
            d="M100 50c25 0 40 20 40 40s-15 40-40 40-40-20-40-40 15-40 40-40z" 
            fill="none" 
            strokeWidth="3"
            stroke="#9A3412"
            strokeDasharray="5,5"
          />
          
          {/* Peacock - Symbol in Kalamkari */}
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 2.3 }}
            d="M100 70c0 0 10 15 25 15-15 10-25 5-25 5s-10 5-25-5c15 0 25-15 25-15z" 
            fill="#5EEAD4" 
            strokeWidth="2"
            stroke="#9A3412"
          />
          
          {/* Decorative Elements */}
          <motion.circle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            transition={{ 
              duration: 1, 
              delay: 2.5,
              y: { 
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
              }
            }}
            cx="100" cy="40" r="5" 
            fill="#FCD34D" 
          />
          
          <motion.circle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }}
            transition={{ 
              duration: 1, 
              delay: 2.6,
              y: { 
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.7,
                delay: 0.3
              }
            }}
            cx="85" cy="35" r="3" 
            fill="#FCD34D" 
          />
          
          <motion.circle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }}
            transition={{ 
              duration: 1, 
              delay: 2.7,
              y: { 
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                delay: 0.6
              }
            }}
            cx="115" cy="35" r="3" 
            fill="#FCD34D" 
          />
        </g>
      </motion.svg>
      
      {/* Animated Gradient Glow */}
      <div 
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, rgba(251,146,60,0.1) 50%, rgba(255,255,255,0) 70%)",
          animation: "pulse 4s infinite"
        }}
      ></div>
      
      {/* Animated cultural patterns */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <div className="w-[200%] h-full" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='10' viewBox='0 0 60 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0 A 5 5 0 0 1 10 5 A 5 5 0 0 1 5 10 A 5 5 0 0 1 0 5 A 5 5 0 0 1 5 0 Z M 55 0 A 5 5 0 0 1 60 5 A 5 5 0 0 1 55 10 A 5 5 0 0 1 50 5 A 5 5 0 0 1 55 0 Z M 30 5 A 5 5 0 0 1 35 10 A 5 5 0 0 1 30 15 A 5 5 0 0 1 25 10 A 5 5 0 0 1 30 5 Z' fill='%23831843' fill-opacity='0.4'/%3E%3C/svg%3E\")",
          animation: "slideLeftToRight 20s linear infinite"
        }}></div>
      </motion.div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-12 flex flex-col justify-between overflow-hidden telugu-border-pattern">
      <div className="section-container flex flex-col h-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
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
                మీ వ్యాపారానికి అవసరమైన అన్ని టెక్నాలజీ అవసరాలు, మొబైల్ యాప్‌లు మరియు మార్కెటింగ్ సేవలు ఒకే చోట.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-12">
                <a href="#contact" className="btn-primary font-telugu">
                  సంప్రదించండి
                </a>
                
                <a href="#services" className="btn-outline font-telugu">
                  సేవలు
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative h-[400px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TeluguCulturalSymbol />
          </motion.div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <div className="card flex flex-col space-y-4 group hover-lift">
            <h3 className="text-lg font-medium font-telugu">మొబైల్ యాప్‌లు</h3>
            <p className="opacity-70 font-telugu">మీ వ్యాపారానికి కస్టమ్ Android మరియు iOS అప్లికేషన్‌లు</p>
            <a href="#services" className="flex items-center space-x-2 font-telugu text-sm">
              <span>మరింత తెలుసుకోండి</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="card flex flex-col space-y-4 group hover-lift">
            <h3 className="text-lg font-medium font-telugu">వెబ్ అభివృద్ధి</h3>
            <p className="opacity-70 font-telugu">ఆకర్షణీయమైన మరియు ప్రతిస్పందించే వెబ్‌సైట్‌లు</p>
            <a href="#services" className="flex items-center space-x-2 font-telugu text-sm">
              <span>మరింత తెలుసుకోండి</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="card flex flex-col space-y-4 group hover-lift">
            <h3 className="text-lg font-medium font-telugu">డిజిటల్ మార్కెటింగ్</h3>
            <p className="opacity-70 font-telugu">సోషల్ మీడియా మరియు SEO ద్వారా మీ వ్యాపారాన్ని పెంచండి</p>
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
      
      {/* Animation styles are applied in the index.css file */}
    </section>
  );
}
