import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Smartphone, Code, Megaphone } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-900 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-900 opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Mobile app development background"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight font-telugu"
            variants={slideUp}
          >
            <span className="text-yellow-400">no1</span>.engineer
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-yellow-300 mb-8 font-telugu"
            variants={slideUp}
            custom={1}
          >
            మీ వ్యాపారాన్ని డిజిటల్‌గా మార్చండి
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-100 mb-12 max-w-2xl mx-auto font-telugu"
            variants={slideUp}
            custom={2}
          >
            అప్లికేషన్ డెవలప్‌మెంట్ మరియు మార్కెటింగ్ సేవలు - మీ వ్యాపారాన్ని ముందుకు తీసుకెళ్లడానికి అవసరమైన అన్ని సేవలు ఒకే చోట
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={slideUp}
            custom={3}
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-telugu">
              <a href="#services">
                మా సేవలు
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-telugu">
              <a href="#contact">
                సంప్రదించండి
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          {[
            { icon: <Smartphone size={24} />, text: "మొబైల్ యాప్‌లు" },
            { icon: <Code size={24} />, text: "వెబ్ అభివృద్ధి" },
            { icon: <Megaphone size={24} />, text: "డిజిటల్ మార్కెటింగ్" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3"
              whileHover={{ y: -5 }}
              variants={slideUp}
              custom={index + 4}
            >
              <div className="bg-yellow-500 p-3 rounded-full text-blue-900">
                {item.icon}
              </div>
              <span className="text-white font-telugu text-lg">{item.text}</span>
            </motion.div>
          ))}
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
