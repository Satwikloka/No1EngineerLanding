import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import InteractiveWorkflow from "@/components/InteractiveWorkflow";
import McLarenJourneyAnimation from "@/components/McLarenJourneyAnimation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";

export default function Home() {
  const [showWorkflowTooltip, setShowWorkflowTooltip] = useState(false);
  const workflowRef = useRef<HTMLDivElement>(null);
  
  // Show workflow tooltip after a delay
  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setShowWorkflowTooltip(true);
    }, 6000); // 6 seconds to give time for the opener animation
    
    return () => clearTimeout(tooltipTimer);
  }, []);
  
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        
        e.preventDefault();
        
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  // Close tooltip when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (workflowRef.current && !workflowRef.current.contains(event.target as Node)) {
        setShowWorkflowTooltip(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      
      {/* Interactive Workflow - Directly below hero section */}
      <section id="workflow" className="container py-16 mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#00A19C]">Interactive Development Journey</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Experience the Mercedes-inspired precision engineering process that powers our software delivery pipeline. Interact with the workflow to see how we bring your ideas to life.
          </p>
        </motion.div>
        
        {/* Workflow with tooltip */}
        <div className="relative" ref={workflowRef}>
          <InteractiveWorkflow />
          
          {/* Interactive tooltip popup */}
          <AnimatePresence>
            {showWorkflowTooltip && (
              <motion.div
                className="absolute z-30 top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white p-4 rounded-lg shadow-xl max-w-sm border border-[#00A19C]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <button 
                  onClick={() => setShowWorkflowTooltip(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                  <X size={16} />
                </button>
                <div className="flex items-start mb-2">
                  <Info className="text-[#00A19C] mr-2 flex-shrink-0 mt-1" size={18} />
                  <h3 className="font-bold">Click on any node to explore!</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Each workflow stage is interactive. Click on any node to see details and submit project requirements.
                </p>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/90 border-l border-b border-[#00A19C] rotate-45"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      
      {/* Digital Nomad Journey - Moved to bottom */}
      <section id="journey" className="container py-16 mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#00A19C]">My Digital Nomad Journey</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Experience my unique business approach: Personal visits for gathering requirements, 
            and remote delivery of high-quality solutions with world-class development expertise.
          </p>
        </motion.div>
        
        <div className="relative h-[400px] md:h-[450px] bg-[#111] rounded-lg border border-[#333] shadow-xl overflow-hidden">
          <McLarenJourneyAnimation />
          <div className="absolute bottom-4 left-0 w-full text-center text-sm text-gray-500">
            Move your mouse from left to right to explore each phase of my business journey ⟵⟶
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </div>
  );
}
