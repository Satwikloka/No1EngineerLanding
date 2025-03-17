import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBoyModel() {
  // Refs for animation elements
  const headRef = useRef<SVGCircleElement>(null);
  const bodyRef = useRef<SVGPathElement>(null);
  const leftArmRef = useRef<SVGPathElement>(null);
  const rightArmRef = useRef<SVGPathElement>(null);
  
  // Animation effect
  useEffect(() => {
    const animateElements = () => {
      // Add animation classes or manipulate elements directly if needed
    };
    
    animateElements();
    
    // Clean up animations if needed
    return () => {
      // Cleanup code
    };
  }, []);

  return (
    <motion.div 
      className="w-full h-full flex items-center justify-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A19C" />
            <stop offset="50%" stopColor="#7038FF" />
            <stop offset="100%" stopColor="#FE7F2D" />
          </linearGradient>
          <linearGradient id="glassesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00A19C" />
            <stop offset="100%" stopColor="#7038FF" />
          </linearGradient>
          <radialGradient id="faceGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFD6B0" />
            <stop offset="100%" stopColor="#F8C291" />
          </radialGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <clipPath id="bodyClip">
            <rect x="120" y="160" width="160" height="180" rx="80" />
          </clipPath>
        </defs>

        {/* Glowing background */}
        <motion.circle 
          cx="200" 
          cy="200" 
          r="150" 
          fill="url(#bodyGradient)" 
          opacity="0.2"
          filter="blur(20px)"
          animate={{ 
            r: [150, 160, 150],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Body */}
        <motion.path
          ref={bodyRef}
          d="M200,160 C230,160 260,180 260,230 C260,280 230,340 200,340 C170,340 140,280 140,230 C140,180 170,160 200,160 Z"
          fill="url(#bodyGradient)"
          animate={{ 
            d: [
              "M200,160 C230,160 260,180 260,230 C260,280 230,340 200,340 C170,340 140,280 140,230 C140,180 170,160 200,160 Z",
              "M200,160 C230,160 260,185 260,235 C260,285 230,340 200,340 C170,340 140,285 140,235 C140,185 170,160 200,160 Z",
              "M200,160 C230,160 260,180 260,230 C260,280 230,340 200,340 C170,340 140,280 140,230 C140,180 170,160 200,160 Z"
            ]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Digital pattern overlay on body */}
        <g clipPath="url(#bodyClip)">
          <motion.g
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {Array.from({length: 15}).map((_, i) => (
              <React.Fragment key={i}>
                <circle 
                  cx={140 + (i % 5) * 30} 
                  cy={180 + Math.floor(i / 5) * 40} 
                  r="3" 
                  fill="#FFFFFF" 
                  opacity="0.3" 
                />
                <line 
                  x1={140 + (i % 5) * 30} 
                  y1={180 + Math.floor(i / 5) * 40} 
                  x2={140 + ((i+1) % 5) * 30} 
                  y2={180 + Math.floor((i+1) / 5) * 40} 
                  stroke="#FFFFFF" 
                  strokeWidth="1" 
                  opacity="0.1" 
                />
              </React.Fragment>
            ))}
          </motion.g>
        </g>

        {/* Head */}
        <motion.circle
          ref={headRef}
          cx="200"
          cy="120"
          r="60"
          fill="url(#faceGradient)"
          animate={{ 
            y: [0, -5, 0] 
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Hair */}
        <motion.path
          d="M140,120 C140,70 260,70 260,120 L260,100 C260,50 140,50 140,100 Z"
          fill="#333333"
          animate={{ 
            d: [
              "M140,120 C140,70 260,70 260,120 L260,100 C260,50 140,50 140,100 Z",
              "M140,120 C140,70 260,70 260,120 L260,95 C260,45 140,45 140,95 Z",
              "M140,120 C140,70 260,70 260,120 L260,100 C260,50 140,50 140,100 Z"
            ]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Glasses */}
        <motion.g
          animate={{ 
            y: [0, -3, 0],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: '200px 110px' }}
        >
          <rect x="155" y="105" width="40" height="25" rx="12" fill="url(#glassesGradient)" opacity="0.7" />
          <rect x="205" y="105" width="40" height="25" rx="12" fill="url(#glassesGradient)" opacity="0.7" />
          <rect x="195" y="110" width="10" height="5" rx="2" fill="url(#glassesGradient)" />
          <rect x="145" y="110" width="10" height="5" rx="2" fill="url(#glassesGradient)" />
          <rect x="245" y="110" width="10" height="5" rx="2" fill="url(#glassesGradient)" />
        </motion.g>

        {/* Eyes */}
        <motion.g
          animate={{ 
            y: [0, -3, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="175" cy="115" r="5" fill="#333333" />
          <circle cx="225" cy="115" r="5" fill="#333333" />
          <motion.circle 
            cx="177" 
            cy="113" 
            r="1.5" 
            fill="#FFFFFF" 
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle 
            cx="227" 
            cy="113" 
            r="1.5" 
            fill="#FFFFFF" 
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.g>

        {/* Mouth */}
        <motion.path
          d="M180,140 Q200,155 220,140"
          stroke="#333333"
          strokeWidth="3"
          fill="transparent"
          animate={{ 
            d: [
              "M180,140 Q200,155 220,140",
              "M180,140 Q200,160 220,140",
              "M180,140 Q200,155 220,140"
            ]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Arms */}
        <motion.path
          ref={leftArmRef}
          d="M150,200 C120,230 110,270 120,300"
          stroke="url(#bodyGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          fill="transparent"
          animate={{ 
            d: [
              "M150,200 C120,230 110,270 120,300",
              "M150,200 C130,230 120,270 130,300",
              "M150,200 C120,230 110,270 120,300"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          ref={rightArmRef}
          d="M250,200 C280,230 290,270 280,300"
          stroke="url(#bodyGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          fill="transparent"
          animate={{ 
            d: [
              "M250,200 C280,230 290,270 280,300",
              "M250,200 C270,230 280,270 270,300",
              "M250,200 C280,230 290,270 280,300"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Tech devices floating around */}
        <motion.g
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: '200px 200px' }}
        >
          {/* Laptop */}
          <motion.g
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <rect x="100" y="230" width="40" height="25" rx="2" fill="#333" />
            <rect x="100" y="255" width="40" height="5" rx="2" fill="#555" />
          </motion.g>
          
          {/* Phone */}
          <motion.g
            animate={{ 
              y: [0, 10, 0],
              x: [0, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <rect x="270" y="220" width="15" height="30" rx="3" fill="#333" />
            <rect x="272" y="225" width="11" height="20" rx="1" fill="#7038FF" opacity="0.7" />
          </motion.g>
          
          {/* Code symbols */}
          <motion.text
            x="310"
            y="170"
            fill="#00A19C"
            fontSize="14"
            animate={{ 
              y: [170, 180, 170],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {'</>'}
          </motion.text>
          
          <motion.text
            x="90"
            y="170"
            fill="#FE7F2D"
            fontSize="14"
            animate={{ 
              y: [170, 160, 170],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {'{}'}
          </motion.text>
          
          <motion.text
            x="200"
            y="70"
            fill="#7038FF"
            fontSize="14"
            animate={{ 
              y: [70, 60, 70],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {'AI'}
          </motion.text>
        </motion.g>
        
        {/* Digital hover effect */}
        <motion.circle 
          cx="200" 
          cy="200" 
          r="145"
          fill="none" 
          stroke="url(#bodyGradient)"
          strokeWidth="2"
          strokeDasharray="10 5"
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: '200px 200px' }}
        />
      </svg>
    </motion.div>
  );
}