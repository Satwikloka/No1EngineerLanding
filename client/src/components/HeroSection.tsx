import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-12 flex flex-col justify-between overflow-hidden bg-white text-black border-b border-black">
      <div className="section-container flex flex-col h-full">
        <motion.div 
          className="max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="title-xl mb-12 leading-none"
            variants={slideUp}
          >
            <span className="font-telugu mb-4 block">మీ వ్యాపారాన్ని</span>
            <span className="font-telugu mb-4 block">డిజిటల్‌గా మార్చే</span>
            <span className="font-telugu">నంబర్ వన్ ఇంజనీర్</span>
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <motion.div 
              variants={slideUp}
              custom={1}
            >
              <p className="text-xl md:text-2xl mb-8 font-telugu">
                మీ వ్యాపారానికి అవసరమైన అన్ని టెక్నాలజీ అవసరాలు, మొబైల్ యాప్‌లు మరియు మార్కెటింగ్ సేవలు ఒకే చోట.
              </p>
              
              <div className="flex space-x-6 mt-12">
                <a href="#contact" className="btn-primary font-telugu">
                  సంప్రదించండి
                </a>
                
                <a href="#services" className="btn-outline font-telugu">
                  సేవలు
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={fadeIn}
              custom={2}
            >
              <div className="card flex flex-col space-y-4 group">
                <h3 className="text-lg font-medium font-telugu">మొబైల్ యాప్‌లు</h3>
                <p className="text-sm opacity-70 font-telugu">మీ వ్యాపారానికి కస్టమ్ Android మరియు iOS అప్లికేషన్‌లు</p>
                <a href="#services" className="flex items-center space-x-2 group-hover:text-white font-telugu text-sm">
                  <span>మరింత తెలుసుకోండి</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="card flex flex-col space-y-4 group">
                <h3 className="text-lg font-medium font-telugu">వెబ్ అభివృద్ధి</h3>
                <p className="text-sm opacity-70 font-telugu">ఆకర్షణీయమైన మరియు ప్రతిస్పందించే వెబ్‌సైట్‌లు</p>
                <a href="#services" className="flex items-center space-x-2 group-hover:text-white font-telugu text-sm">
                  <span>మరింత తెలుసుకోండి</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="card flex flex-col space-y-4 group">
                <h3 className="text-lg font-medium font-telugu">డిజిటల్ మార్కెటింగ్</h3>
                <p className="text-sm opacity-70 font-telugu">సోషల్ మీడియా మరియు SEO ద్వారా మీ వ్యాపారాన్ని పెంచండి</p>
                <a href="#services" className="flex items-center space-x-2 group-hover:text-white font-telugu text-sm">
                  <span>మరింత తెలుసుకోండి</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
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
