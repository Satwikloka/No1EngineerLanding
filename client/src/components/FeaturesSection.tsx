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
    icon: <Lightbulb />,
    title: "ఆధునిక డిజైన్లు",
    description: "మేము అత్యాధునిక టెక్నాలజీని ఉపయోగించి మీ వ్యాపారానికి ప్రత్యేకమైన అప్లికేషన్లు మరియు వెబ్‌సైట్లను అభివృద్ధి చేస్తాము."
  },
  {
    icon: <VideoIcon />,
    title: "వైరల్ రీల్స్",
    description: "మీ బ్రాండ్‌ను ప్రమోట్ చేయడానికి ఆకర్షణీయమైన, వైరల్ అయ్యే రీల్స్ తయారు చేస్తాము, మీ వ్యాపారానికి మరింత గుర్తింపు తెస్తాము."
  },
  {
    icon: <Clock />,
    title: "సకాలంలో డెలివరీ",
    description: "మీకు హామీ ఇచ్చిన సమయంలో మీ ప్రాజెక్ట్‌ను పూర్తి చేస్తాము, తద్వారా మీరు మీ బిజినెస్ గురించి ఎలాంటి ఆందోళన లేకుండా ఉంటారు."
  },
  {
    icon: <Heart />,
    title: "వినియోగదారు కేంద్రీకృతం",
    description: "మేము మీ కస్టమర్ల అవసరాలకు ప్రాధాన్యత ఇస్తాము, వారిని ఆకర్షించే మరియు నిలుపుకునే అనుభవాన్ని రూపొందిస్తాము."
  },
  {
    icon: <TrendingUp />,
    title: "SEO-ఆప్టిమైజ్డ్ కంటెంట్",
    description: "శోధన ఫలితాల్లో మీ దృశ్యమానతను పెంచడానికి అత్యాధునిక ఎస్ఇఓ విధానాలతో కంటెంట్‌ను ఆప్టిమైజ్ చేస్తాము."
  },
  {
    icon: <Camera />,
    title: "నాణ్యమైన ఫోటోగ్రఫీ",
    description: "మీ ఉత్పత్తులు మరియు సేవల కోసం ప్రొఫెషనల్ ఫోటోగ్రఫీని అందిస్తాము, మీ బ్రాండ్‌ను ప్రదర్శించేందుకు సహాయపడుతుంది."
  }
];

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-yellow-200"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3 font-telugu">{title}</h3>
      <p className="text-gray-700 font-telugu">
        {description}
      </p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-telugu">మమ్మల్ని ఎందుకు ఎంచుకోవాలి</h2>
          <p className="text-gray-700 font-telugu">
            మా అభినవ విధానం మరియు అత్యుత్తమ నాణ్యత పట్ల నిబద్ధత మిమ్మల్ని మా వద్దకు తీసుకువస్తుంది
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <motion.a 
            href="#contact"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-3 px-6 rounded-lg font-medium transition-colors font-telugu text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ఇప్పుడే సంప్రదించండి
          </motion.a>
        </div>
      </div>
    </section>
  );
}
