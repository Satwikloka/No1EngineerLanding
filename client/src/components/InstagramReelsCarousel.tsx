import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Play } from 'lucide-react';

interface ReelProps {
  videoUrl: string;
  title: string;
  likes: number;
  comments: number;
  shares: number;
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
}

function ReelCard({ videoUrl, title, likes, comments, shares }: ReelProps) {
  return (
    <motion.div 
      className="glide__slide"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden rounded-xl shadow-xl h-[450px] md:h-[550px] bg-black">
        {/* Video thumbnail with play icon */}
        <div className="relative h-full w-full">
          <img 
            src={videoUrl} 
            alt={title}
            className="object-cover h-full w-full opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/30 p-4 rounded-full">
              <Play className="h-10 w-10 text-white" />
            </div>
          </div>
          
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />
          
          {/* Content at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-medium text-lg mb-2">{title}</h3>
            
            {/* Instagram-like metrics */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-1 text-red-500" />
                <span className="text-sm">{formatNumber(likes)}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-1" />
                <span className="text-sm">{formatNumber(comments)}</span>
              </div>
              <div className="flex items-center">
                <Share className="h-5 w-5 mr-1" />
                <span className="text-sm">{formatNumber(shares)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function InstagramReelsCarousel() {
  const glideRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Sample data for reels
    const reels = [
      {
        videoUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        title: 'How we revolutionized UI/UX for YourTech App',
        likes: 12500,
        comments: 340,
        shares: 89
      },
      {
        videoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
        title: 'The secret to 10x growth in user acquisition',
        likes: 8700,
        comments: 230,
        shares: 56
      },
      {
        videoUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
        title: 'Behind the scenes: Building YourApp from scratch',
        likes: 34500,
        comments: 890,
        shares: 245
      },
      {
        videoUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
        title: 'How we overcame scaling challenges',
        likes: 15600,
        comments: 420,
        shares: 115
      },
      {
        videoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        title: 'The power of minimal design in mobile apps',
        likes: 22300,
        comments: 510,
        shares: 178
      }
    ];

    // If glideRef is available, initialize Glide
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 20,
        hoverpause: true,
        autoplay: 5000,
        breakpoints: {
          1024: {
            perView: 2
          },
          640: {
            perView: 1
          }
        }
      });
      
      glide.mount();
      
      // Clean up glide instance on component unmount
      return () => {
        glide.destroy();
      };
    }
  }, []);
  
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="title-lg mb-4">Latest Videos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Take a look at our latest Instagram reels showcasing our work, process, and success stories
          </p>
        </div>
        
        {/* Glide carousel container */}
        <div className="relative">
          <div ref={glideRef} className="glide">
            <div className="glide__track" data-glide-el="track">
              <div className="glide__slides">
                {/* Video Reel 1 */}
                <ReelCard 
                  videoUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  title="How we revolutionized UI/UX for YourTech App"
                  likes={12500}
                  comments={340}
                  shares={89}
                />
                
                {/* Video Reel 2 */}
                <ReelCard 
                  videoUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
                  title="The secret to 10x growth in user acquisition"
                  likes={8700}
                  comments={230}
                  shares={56}
                />
                
                {/* Video Reel 3 */}
                <ReelCard 
                  videoUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                  title="Behind the scenes: Building YourApp from scratch"
                  likes={34500}
                  comments={890}
                  shares={245}
                />
                
                {/* Video Reel 4 */}
                <ReelCard 
                  videoUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  title="How we overcame scaling challenges"
                  likes={15600}
                  comments={420}
                  shares={115}
                />
                
                {/* Video Reel 5 */}
                <ReelCard 
                  videoUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  title="The power of minimal design in mobile apps"
                  likes={22300}
                  comments={510}
                  shares={178}
                />
              </div>
            </div>
            
            {/* Carousel controls */}
            <div className="glide__arrows" data-glide-el="controls">
              <button 
                className="glide__arrow glide__arrow--left absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center z-10"
                data-glide-dir="<"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                className="glide__arrow glide__arrow--right absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center z-10"
                data-glide-dir=">"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
            
            {/* Carousel bullets */}
            <div className="glide__bullets mt-6 flex justify-center" data-glide-el="controls[nav]">
              {[0, 1, 2, 3, 4].map((index) => (
                <button 
                  key={index}
                  className="glide__bullet w-2 h-2 rounded-full bg-slate-300 mx-1"
                  data-glide-dir={`=${index}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Instagram follow button */}
        <div className="text-center mt-10">
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] text-white px-6 py-3 rounded-md font-medium hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow us for more
          </a>
        </div>
      </div>
    </section>
  );
}