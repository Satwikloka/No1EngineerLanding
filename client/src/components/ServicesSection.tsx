import { motion } from "framer-motion";
import { Code, Smartphone, Instagram, Globe, Store, Youtube, ArrowRight } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

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

function ServiceItem({ icon, title, description }: ServiceProps) {
  return (
    <motion.div 
      className="card group"
      variants={slideUp}
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 font-telugu">{title}</h3>
      <p className="opacity-70 mb-6 font-telugu">{description}</p>
      <div className="flex items-center space-x-2 group-hover:text-white font-telugu text-sm">
        <span>మరింత తెలుసుకోండి</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white border-b border-black">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mb-20"
        >
          <h2 className="title-lg mb-12 font-telugu">మా సేవలు</h2>
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
              custom={index}
            >
              <ServiceItem {...service} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 text-center"
        >
          <a href="#contact" className="btn-primary inline-block font-telugu">
            ఇప్పుడే సంప్రదించండి
          </a>
        </motion.div>
      </div>
    </section>
  );
}
