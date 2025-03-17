import { motion } from "framer-motion";
import { Code, Smartphone, Instagram, Globe, Store, Youtube } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceProps[] = [
  {
    icon: <Smartphone size={20} />,
    title: "మొబైల్ యాప్ డెవలప్‌మెంట్",
    description: "మీ వ్యాపారం కోసం పూర్తిగా అనుకూలీకరించిన Android మరియు iOS యాప్‌లు, మీ వినియోగదారులకు నేరుగా చేరుకోవడానికి."
  },
  {
    icon: <Globe size={20} />,
    title: "వెబ్‌సైట్ డెవలప్‌మెంట్",
    description: "ఆకర్షణీయమైన, ప్రతిస్పందించే వెబ్‌సైట్‌లు మీ వ్యాపారాన్ని ఆన్‌లైన్‌లో ప్రదర్శించడానికి మరియు కొత్త వినియోగదారులను ఆకర్షించడానికి."
  },
  {
    icon: <Instagram size={20} />,
    title: "సోషల్ మీడియా మార్కెటింగ్",
    description: "Instagram, Facebook మరియు ఇతర ప్లాట్‌ఫామ్‌లలో మీ వ్యాపార దృశ్యమానతను పెంచడానికి వ్యూహాలు మరియు కంటెంట్ నిర్వహణ."
  },
  {
    icon: <Store size={20} />,
    title: "ఆన్‌లైన్ స్టోర్స్",
    description: "మీ ఉత్పత్తులను ఆన్‌లైన్‌లో విక్రయించేందుకు పూర్తి ఇ-కామర్స్ పరిష్కారాలు, చెల్లింపు ప్రాసెసింగ్ మరియు ఇన్వెంటరీ నిర్వహణతో."
  },
  {
    icon: <Youtube size={20} />,
    title: "వీడియో మార్కెటింగ్",
    description: "మీ ఉత్పత్తులు మరియు సేవల కోసం ఆకర్షణీయమైన వీడియోలు సృష్టించడం, YouTube మరియు సోషల్ మీడియాలో ప్రమోట్ చేయడం."
  },
  {
    icon: <Code size={20} />,
    title: "కస్టమ్ సాఫ్ట్‌వేర్ సొల్యూషన్స్",
    description: "మీ బిజినెస్ అవసరాలకు ప్రత్యేకంగా రూపొందించిన సాఫ్ట్‌వేర్, మీ ప్రక్రియలను సరళీకృతం చేయడానికి మరియు సామర్థ్యాన్ని మెరుగుపరచడానికి."
  }
];

function ServiceItem({ icon, title, description }: ServiceProps) {
  return (
    <motion.div 
      className="flex gap-4 items-start"
      variants={slideUp}
    >
      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-blue-900">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 font-telugu">{title}</h3>
        <p className="text-blue-100 font-telugu">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-telugu">మా సేవలు</h2>
          <p className="text-blue-100 font-telugu">
            మీ వ్యాపారాన్ని డిజిటల్ ప్రపంచంలో ముందుకు తీసుకెళ్లడానికి మేము అందించే పరిష్కారాలు
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="relative rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Telugu professional making a video on smartphone" 
              className="rounded-lg shadow-xl w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent rounded-lg"></div>
          </motion.div>
          
          <motion.div 
            className="space-y-8 order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {services.slice(0, 3).map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {services.slice(3).map((service, index) => (
              <ServiceItem key={index + 3} {...service} />
            ))}
          </motion.div>
          
          <motion.div 
            className="relative rounded-lg overflow-hidden shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Mobile app development" 
              className="rounded-lg shadow-xl w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
