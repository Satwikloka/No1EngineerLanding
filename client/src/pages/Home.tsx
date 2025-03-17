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
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
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
        <InteractiveWorkflow />
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
