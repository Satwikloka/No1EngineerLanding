import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-gray-900 opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Abstract tech background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20 pt-32 relative z-10 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Montserrat'] text-white mb-4 leading-tight"
            variants={slideUp}
          >
            <span className="text-blue-500">no1</span>.engineer
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 italic"
            variants={slideUp}
            custom={1}
          >
            asamadhiyulu
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-100 mb-12 max-w-2xl mx-auto"
            variants={slideUp}
            custom={2}
          >
            Transforming ideas into innovative solutions. Precision engineering for the modern era.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={slideUp}
            custom={3}
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600">
              <a href="#about">
                Discover More
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10">
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" className="text-white opacity-75 hover:opacity-100 transition-opacity">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
