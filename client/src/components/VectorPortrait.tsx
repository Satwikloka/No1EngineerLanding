import React from 'react';
import { motion } from 'framer-motion';

export default function VectorPortrait() {
  return (
    <motion.div
      className="relative w-full h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background */}
        <defs>
          <linearGradient id="backgroundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B45309" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#92400E" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="100%" stopColor="#1F2937" />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle cx="200" cy="200" r="190" fill="url(#backgroundGrad)" />
        
        {/* McLaren Design Elements */}
        <rect x="0" y="0" width="30" height="400" fill="#FF8000" opacity="0.6" />
        <rect x="0" y="350" width="400" height="50" fill="#0090D4" opacity="0.4" />
        
        {/* Shirt */}
        <path d="M120,240 C120,320 280,320 280,240 L280,400 L120,400 Z" fill="url(#shirtGrad)" />
        <path d="M170,240 C170,290 170,400 170,400 L160,400 L160,240 Z" fill="#3B82F6" opacity="0.5" />
        <path d="M230,240 C230,290 230,400 230,400 L240,400 L240,240 Z" fill="#3B82F6" opacity="0.5" />
        
        {/* Neck */}
        <path d="M170,240 C170,260 230,260 230,240 L230,270 L170,270 Z" fill="url(#skinGrad)" />
        
        {/* Face Shape */}
        <ellipse cx="200" cy="180" rx="60" ry="70" fill="url(#skinGrad)" />
        
        {/* Hair */}
        <path d="M200,110 C160,110 140,140 140,170 C140,190 160,200 160,200 C160,180 170,150 200,150 C230,150 240,180 240,200 C240,200 260,190 260,170 C260,140 240,110 200,110 Z" fill="url(#hairGrad)" />
        <path d="M140,170 C140,170 130,185 130,200 C130,220 140,230 140,230 L150,220 C150,220 140,210 140,190 C140,180 143,170 143,170 Z" fill="url(#hairGrad)" />
        <path d="M260,170 C260,170 270,185 270,200 C270,220 260,230 260,230 L250,220 C250,220 260,210 260,190 C260,180 257,170 257,170 Z" fill="url(#hairGrad)" />
        
        {/* Ears */}
        <ellipse cx="140" cy="180" rx="10" ry="15" fill="url(#skinGrad)" />
        <ellipse cx="260" cy="180" rx="10" ry="15" fill="url(#skinGrad)" />
        
        {/* Eyes */}
        <ellipse cx="175" cy="170" rx="10" ry="6" fill="#1E293B" />
        <ellipse cx="225" cy="170" rx="10" ry="6" fill="#1E293B" />
        <circle cx="175" cy="169" r="2" fill="white" />
        <circle cx="225" cy="169" r="2" fill="white" />
        
        {/* Eyebrows */}
        <path d="M165,158 C170,155 180,156 185,159" fill="none" stroke="#1E293B" strokeWidth="2" />
        <path d="M215,158 C220,155 230,156 235,159" fill="none" stroke="#1E293B" strokeWidth="2" />
        
        {/* Nose */}
        <path d="M200,180 C197,185 197,190 200,195 C203,190 203,185 200,180 Z" fill="#92400E" opacity="0.9" />
        
        {/* Mouth */}
        <path d="M180,210 C190,218 210,218 220,210" fill="none" stroke="#92400E" strokeWidth="2" />
        
        {/* Beard */}
        <path d="M170,205 C170,230 190,240 200,240 C210,240 230,230 230,205" fill="url(#hairGrad)" opacity="0.7" />
        <path d="M180,210 C180,225 190,235 200,235 C210,235 220,225 220,210" fill="url(#backgroundGrad)" opacity="0.7" />
        
        {/* McLaren Accent Elements */}
        <circle cx="330" cy="70" r="15" fill="#FF8000" opacity="0.8" />
        <circle cx="360" cy="100" r="10" fill="#0090D4" opacity="0.8" />
        <circle cx="340" cy="120" r="12" fill="white" opacity="0.6" />
      </svg>
    </motion.div>
  );
}