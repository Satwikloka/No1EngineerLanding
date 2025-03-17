import { motion } from "framer-motion";
import { Clock, Heart, Lightbulb, VideoIcon, Camera, TrendingUp } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/framer-animations";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Lightbulb size={24} />,
    title: "ఆధునిక డిజైన్లు",
    description: "మేము అత్యాధునిక టెక్నాలజీని ఉపయోగించి మీ వ్యాపారానికి ప్రత్యేకమైన అప్లికేషన్లు మరియు వెబ్‌సైట్లను అభివృద్ధి చేస్తాము."
  },
  {
    icon: <VideoIcon size={24} />,
    title: "వైరల్ రీల్స్",
    description: "మీ బ్రాండ్‌ను ప్రమోట్ చేయడానికి ఆకర్షణీయమైన, వైరల్ అయ్యే రీల్స్ తయారు చేస్తాము, మీ వ్యాపారానికి మరింత గుర్తింపు తెస్తాము."
  },
  {
    icon: <Clock size={24} />,
    title: "సకాలంలో డెలివరీ",
    description: "మీకు హామీ ఇచ్చిన సమయంలో మీ ప్రాజెక్ట్‌ను పూర్తి చేస్తాము, తద్వారా మీరు మీ బిజినెస్ గురించి ఎలాంటి ఆందోళన లేకుండా ఉంటారు."
  },
  {
    icon: <Heart size={24} />,
    title: "వినియోగదారు కేంద్రీకృతం",
    description: "మేము మీ కస్టమర్ల అవసరాలకు ప్రాధాన్యత ఇస్తాము, వారిని ఆకర్షించే మరియు నిలుపుకునే అనుభవాన్ని రూపొందిస్తాము."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "SEO-ఆప్టిమైజ్డ్ కంటెంట్",
    description: "శోధన ఫలితాల్లో మీ దృశ్యమానతను పెంచడానికి అత్యాధునిక ఎస్ఇఓ విధానాలతో కంటెంట్‌ను ఆప్టిమైజ్ చేస్తాము."
  },
  {
    icon: <Camera size={24} />,
    title: "నాణ్యమైన ఫోటోగ్రఫీ",
    description: "మీ ఉత్పత్తులు మరియు సేవల కోసం ప్రొఫెషనల్ ఫోటోగ్రఫీని అందిస్తాము, మీ బ్రాండ్‌ను ప్రదర్శించేందుకు సహాయపడుతుంది."
  }
];

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <motion.div
      className="card group"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 font-telugu group-hover:text-white">{title}</h3>
      <p className="opacity-70 font-telugu group-hover:text-white">
        {description}
      </p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white border-b border-black">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mb-20"
        >
          <h2 className="title-lg mb-12 font-telugu">మమ్మల్ని ఎందుకు ఎంచుకోవాలి</h2>
          <p className="text-xl md:text-2xl font-telugu">
            మా అభినవ విధానం మరియు అత్యుత్తమ నాణ్యత పట్ల నిబద్ధత మిమ్మల్ని మా వద్దకు తీసుకువస్తుంది
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <a 
            href="#contact"
            className="btn-primary inline-block font-telugu"
          >
            ఇప్పుడే సంప్రదించండి
          </a>
        </motion.div>
      </div>
    </section>
  );
}
