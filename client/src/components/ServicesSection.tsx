import { motion } from "framer-motion";
import { Code, Smartphone, Instagram, Globe, Store, Youtube, ArrowRight } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import React from "react";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Array of services with Telugu content
const services: ServiceProps[] = [
  {
    icon: <Smartphone size={24} />,
    title: "మొబైల్ యాప్ డెవలప్‌మెంట్",
    description: "మీ వ్యాపారం కోసం పూర్తిగా అనుకూలీకరించిన Android మరియు iOS యాప్‌లు, మీ వినియోగదారులకు నేరుగా చేరుకోవడానికి."
  },
  {
    icon: <Globe size={24} />,
    title: "వెబ్‌సైట్ డెవలప్‌మెంట్",
    description: "ఆకర్షణీయమైన, ప్రతిస్పందించే వెబ్‌సైట్‌లు మీ వ్యాపారాన్ని ఆన్‌లైన్‌లో ప్రదర్శించడానికి మరియు కొత్త వినియోగదారులను ఆకర్షించడానికి."
  },
  {
    icon: <Instagram size={24} />,
    title: "సోషల్ మీడియా మార్కెటింగ్",
    description: "Instagram, Facebook మరియు ఇతర ప్లాట్‌ఫామ్‌లలో మీ వ్యాపార దృశ్యమానతను పెంచడానికి వ్యూహాలు మరియు కంటెంట్ నిర్వహణ."
  },
  {
    icon: <Store size={24} />,
    title: "ఆన్‌లైన్ స్టోర్స్",
    description: "మీ ఉత్పత్తులను ఆన్‌లైన్‌లో విక్రయించేందుకు పూర్తి ఇ-కామర్స్ పరిష్కారాలు, చెల్లింపు ప్రాసెసింగ్ మరియు ఇన్వెంటరీ నిర్వహణతో."
  },
  {
    icon: <Youtube size={24} />,
    title: "వీడియో మార్కెటింగ్",
    description: "మీ ఉత్పత్తులు మరియు సేవల కోసం ఆకర్షణీయమైన వీడియోలు సృష్టించడం, YouTube మరియు సోషల్ మీడియాలో ప్రమోట్ చేయడం."
  },
  {
    icon: <Code size={24} />,
    title: "కస్టమ్ సాఫ్ట్‌వేర్ సొల్యూషన్స్",
    description: "మీ బిజినెస్ అవసరాలకు ప్రత్యేకంగా రూపొందించిన సాఫ్ట్‌వేర్, మీ ప్రక్రియలను సరళీకృతం చేయడానికి మరియు సామర్థ్యాన్ని మెరుగుపరచడానికి."
  }
];

// SVG icon representing Pochampally Ikat pattern from Telangana
const PochampallyPattern = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h60v60H0z" />
      <path
        d="M15 15l15 15-15 15m30-30L30 30l15 15"
        stroke="url(#pochampally-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 30h40M30 10v40"
        stroke="url(#pochampally-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2,4"
      />
      <defs>
        <linearGradient id="pochampally-gradient" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB923C" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);

// Function to render each service card
function ServiceItem({ icon, title, description }: ServiceProps) {
  return (
    <motion.div 
      className="card group hover-lift"
      variants={slideUp}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
    >
      <div className="mb-6 relative">
        <div className="absolute inset-0 -z-10 rounded-full w-12 h-12 bg-gradient-to-br from-[#A78BFA] to-[#FB923C] opacity-20"></div>
        <motion.div 
          className="text-[#831843]"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {icon}
        </motion.div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 font-telugu cultural-decoration">{title}</h3>
      <p className="opacity-70 mb-6 font-telugu">{description}</p>
      
      <div className="flex items-center space-x-2 text-sm font-telugu mt-auto group-hover:text-[#831843]">
        <span>మరింత తెలుసుకోండి</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <ArrowRight className="h-4 w-4 transition-transform" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="telugu-border-pattern">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center mb-8">
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1 }}
            >
              <PochampallyPattern />
            </motion.div>
            <h2 className="title-lg font-telugu ml-4">మా సేవలు</h2>
          </div>
          
          <p className="text-xl md:text-2xl font-telugu">
            మీ వ్యాపారాన్ని డిజిటల్ ప్రపంచంలో ముందుకు తీసుకెళ్లడానికి మేము అందించే పరిష్కారాలు
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              custom={index * 0.2}
            >
              <ServiceItem {...service} />
            </motion.div>
          ))}
        </div>
        
        {/* Andhra & Telangana cultural design element */}
        <motion.div 
          className="mt-24 relative py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent"></div>
          
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 flex items-center justify-center">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.95 50 10 41.05 10 30C10 18.95 18.95 10 30 10C41.05 10 50 18.95 50 30C50 41.05 41.05 50 30 50Z" fill="url(#andhrapattern)"/>
                <path d="M31 15.5V30.25L42.5 37.75L40 42L25 32.5V15.5H31Z" fill="url(#andhrapattern)"/>
                <defs>
                  <linearGradient id="andhrapattern" x1="5" y1="5" x2="55" y2="55" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FB923C"/>
                    <stop offset="1" stopColor="#A78BFA"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <p className="text-xl italic opacity-90 font-telugu mt-4">
              "ఆంధ్ర తెలంగాణ సంస్కృతి సాంకేతిక పరిజ్ఞానంతో మీ వ్యాపారాన్ని అంతర్జాతీయంగా తీసుకెళ్లండి"
            </p>
            
            <div className="mt-4 opacity-75 text-center">
              <span className="font-medium">— నో.1 ఇంజనీర్</span>
            </div>
          </div>
          
          <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FB923C] to-transparent"></div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary inline-block font-telugu">
            ఇప్పుడే సంప్రదించండి
          </a>
        </motion.div>
      </div>
      
      {/* Cultural background pattern */}
      <div className="absolute right-0 bottom-0 -z-10 w-48 h-48 opacity-10">
        <svg width="192" height="192" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
          <path d="M192 0v192H0V0z" fill="none" />
          <path d="M0 0v192h96V96h96V0z" fill="none" stroke="#831843" strokeWidth="2" />
          <path d="M96 0v192M0 96h192" fill="none" stroke="#831843" strokeWidth="2" strokeDasharray="4,4" />
          <circle cx="96" cy="96" r="24" fill="none" stroke="#FB923C" strokeWidth="2" />
          <circle cx="96" cy="96" r="64" fill="none" stroke="#FB923C" strokeWidth="2" strokeDasharray="8,8" />
        </svg>
      </div>
    </section>
  );
}
