import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Bike, Smartphone, Globe, Send, Package, MapPin, Code, Server } from 'lucide-react';

interface AnimationStage {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  position: number;
}

export default function MercedesJourneyAnimation() {
  const [mouseX, setMouseX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const stages: AnimationStage[] = [
    {
      title: "Research & Planning",
      icon: <Laptop className="w-10 h-10" />,
      description: "Initial research and planning for client's needs and requirements",
      color: "#00A19C", // Mercedes Teal
      position: 0
    },
    {
      title: "Client Meeting",
      icon: <Bike className="w-10 h-10" />,
      description: "Personal visit with bicycle to understand client needs firsthand",
      color: "#333333", // Mercedes Gray
      position: 25
    },
    {
      title: "Development",
      icon: <Code className="w-10 h-10" />,
      description: "Building premium quality applications and solutions",
      color: "#00A19C", // Mercedes Teal
      position: 50
    },
    {
      title: "Testing",
      icon: <Smartphone className="w-10 h-10" />,
      description: "Thorough testing on multiple platforms and devices",
      color: "#333333", // Mercedes Gray
      position: 75
    },
    {
      title: "Remote Delivery",
      icon: <Send className="w-10 h-10" />,
      description: "Digital delivery of final product to clients worldwide",
      color: "#00A19C", // Mercedes Teal
      position: 100
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, width } = containerRef.current.getBoundingClientRect();
        const relativeX = Math.max(0, Math.min(1, (e.clientX - left) / width));
        setMouseX(relativeX);

        // Update progress based on mouse position
        const newProgress = relativeX * 100;
        setProgress(newProgress);

        // Determine current stage
        for (let i = stages.length - 1; i >= 0; i--) {
          if (newProgress >= stages[i].position) {
            setCurrentStage(i);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [stages]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative p-8 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
      style={{ position: 'relative' }} // Fix for the position warning
    >
      {/* Sandbox Environment - Top Section */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gray-100 border-b border-gray-200 z-10">
        <div className="flex items-center h-full px-6">
          <div className="mr-4">
            <div className="w-10 h-10 bg-[#00A19C] flex items-center justify-center rounded-full">
              <span className="text-base font-bold text-white">1</span>
            </div>
          </div>
          <div className="font-bold text-gray-800 text-lg">Development Sandbox Environment</div>
          
          {/* Control buttons */}
          <div className="ml-auto flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
              <span className="text-gray-600 font-bold text-xs">▶</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
              <span className="text-gray-600 font-bold text-xs">⟳</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mercedes-style accent elements */}
      <div className="absolute top-24 left-0 w-4 h-full bg-[#00A19C]"></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[#333333]"></div>
      
      {/* Racing track line */}
      <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-full"></div>
      
      {/* Progress line */}
      <motion.div 
        className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-[#00A19C] to-[#333333] rounded-full"
        style={{ 
          width: `${progress}%`,
          zIndex: 1
        }}
      >
        {/* Racing pulse effect */}
        <motion.div
          className="absolute right-0 top-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#00A19C] transform -translate-y-1/2"
          animate={{ 
            boxShadow: ['0 0 0 0 rgba(0, 161, 156, 0.4)', '0 0 0 10px rgba(0, 161, 156, 0)', '0 0 0 0 rgba(0, 161, 156, 0)'],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
        />
      </motion.div>
      
      {/* Stage markers */}
      {stages.map((stage, index) => (
        <div 
          key={index}
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{ 
            left: `${stage.position}%`,
            zIndex: 2
          }}
        >
          <motion.div 
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${currentStage >= index ? 'shadow-lg' : 'opacity-50'}`}
            style={{ 
              backgroundColor: stage.color,
              boxShadow: currentStage >= index ? `0 0 15px ${stage.color}` : 'none'
            }}
            animate={{ 
              scale: currentStage === index ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              repeat: currentStage === index ? Infinity : 0,
              duration: 2
            }}
          >
            {stage.icon}
          </motion.div>
          
          <motion.div 
            className={`absolute -bottom-16 w-48 text-center transform -translate-x-1/2 ${currentStage === index ? 'opacity-100' : 'opacity-50'}`}
            style={{ left: '50%', pointerEvents: 'none' }}
            animate={{ 
              y: currentStage === index ? [-5, 0, -5] : 0,
              opacity: currentStage === index ? 1 : 0.5
            }}
            transition={{ 
              repeat: currentStage === index ? Infinity : 0,
              duration: 3
            }}
          >
            <h3 className="font-bold text-lg text-gray-800">{stage.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{stage.description}</p>
          </motion.div>
        </div>
      ))}
      
      {/* Digital Nomad Journey Visualization */}
      <div className="absolute bottom-36 left-0 w-full">
        <div className="relative h-40">
          {/* Research Station */}
          <motion.div 
            className="absolute bottom-0 w-40"
            style={{ left: '0%' }}
            animate={{ 
              opacity: currentStage === 0 ? 1 : 0.5,
              y: currentStage === 0 ? [-5, 0, -5] : 0
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <div className="flex flex-col items-center">
              <div className="mb-2 p-3 bg-gray-100 rounded-full">
                <Laptop className="w-8 h-8 text-[#00A19C]" />
              </div>
              <div className="w-16 h-10 bg-gray-200 rounded"></div>
            </div>
          </motion.div>
          
          {/* Bicycle Journey */}
          <motion.div 
            className="absolute bottom-0"
            style={{ 
              left: `${Math.min(25, progress)}%`,
              opacity: progress > 0 && progress <= 30 ? 1 : 0.5
            }}
            animate={{ 
              x: currentStage === 1 ? [-10, 0, -10] : 0
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                {/* Person */}
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 bg-[#333333] rounded-full"></div>
                  <div className="w-6 h-12 bg-[#00A19C] absolute left-2 top-8"></div>
                </div>
                
                {/* Bicycle */}
                <div className="mb-2 p-2 bg-white rounded-full border-2 border-[#333333]">
                  <Bike className="w-8 h-8 text-[#333333]" />
                </div>
                
                {/* Briefcase */}
                <div className="absolute -right-5 top-0">
                  <Package className="w-6 h-6 text-[#00A19C]" />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Development Office */}
          <motion.div 
            className="absolute bottom-0"
            style={{ 
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={{ 
              opacity: currentStage === 2 ? 1 : 0.5,
              y: currentStage === 2 ? [-5, 0, -5] : 0
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-40 h-30 bg-gray-100 rounded-lg border-t-4 border-[#00A19C]"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
                  <Laptop className="w-8 h-8 text-[#00A19C]" />
                </div>
                <div className="absolute top-5 left-5">
                  <Code className="w-6 h-6 text-[#333333]" />
                </div>
                <div className="absolute top-5 right-5">
                  <Server className="w-6 h-6 text-[#333333]" />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Testing Phase */}
          <motion.div 
            className="absolute bottom-0"
            style={{ 
              left: '75%',
              transform: 'translateX(-50%)'
            }}
            animate={{ 
              opacity: currentStage === 3 ? 1 : 0.5,
              y: currentStage === 3 ? [-5, 0, -5] : 0
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="flex space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Smartphone className="w-6 h-6 text-[#333333]" />
                  </div>
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Laptop className="w-6 h-6 text-[#333333]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Delivery Phase */}
          <motion.div 
            className="absolute bottom-0 right-0"
            animate={{ 
              opacity: currentStage === 4 ? 1 : 0.5,
              y: currentStage === 4 ? [-5, 0, -5] : 0
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                {/* Digital Delivery Visualization */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-20 bg-gray-100 rounded-lg relative overflow-hidden">
                    {/* Server Sending Data */}
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                      <Server className="w-6 h-6 text-[#00A19C]" />
                    </div>
                    
                    {/* Data Packets */}
                    <motion.div
                      className="absolute top-1/2 left-12 transform -translate-y-1/2"
                      animate={{ 
                        x: currentStage === 4 ? [0, 20, 0] : 0,
                        opacity: currentStage === 4 ? [1, 0, 1] : 1
                      }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-[#00A19C]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#333333]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#00A19C]"></div>
                      </div>
                    </motion.div>
                    
                    {/* Global Receiver */}
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Globe className="w-6 h-6 text-[#00A19C]" />
                    </div>
                  </div>
                  
                  {/* Delivery Text */}
                  <div className="mt-2 text-center">
                    <motion.div 
                      className="text-sm font-medium text-[#00A19C]"
                      animate={{ 
                        opacity: currentStage === 4 ? [0.7, 1, 0.7] : 0.7
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      Remote Delivery Complete
                    </motion.div>
                  </div>
                  
                  {/* Delivery Icons */}
                  <motion.div 
                    className="mt-2 flex space-x-2"
                    animate={{ 
                      y: currentStage === 4 ? [-2, 0, -2] : 0
                    }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <Send className="w-4 h-4 text-[#333333]" />
                    <Package className="w-4 h-4 text-[#00A19C]" />
                    <MapPin className="w-4 h-4 text-[#333333]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Tech orbit visualization */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
        <motion.div 
          className="relative w-40 h-40"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Orbit path */}
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-dashed border-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* PlayStore */}
          <motion.div 
            className="absolute p-2 bg-[#00A19C] rounded-full text-white"
            style={{ 
              top: '0%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h7.45L9.8 4.25l1.41-1.41 6.35 6.35-6.35 6.35-1.41-1.41 4.65-4.65H7c-1.71 0-3.1-1.39-3.1-3.1z" />
            </svg>
          </motion.div>
          
          {/* Web */}
          <motion.div 
            className="absolute p-2 bg-[#333333] rounded-full text-white"
            style={{ 
              top: '50%',
              right: '0%',
              transform: 'translateY(-50%)'
            }}
          >
            <Globe className="w-5 h-5" />
          </motion.div>
          
          {/* Mobile */}
          <motion.div 
            className="absolute p-2 bg-[#00A19C] rounded-full text-white"
            style={{ 
              bottom: '0%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <Smartphone className="w-5 h-5" />
          </motion.div>
          
          {/* Social Media */}
          <motion.div 
            className="absolute p-2 bg-[#333333] rounded-full text-white"
            style={{ 
              top: '50%',
              left: '0%',
              transform: 'translateY(-50%)'
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}