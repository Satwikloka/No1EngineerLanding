import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Users, Award } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";

interface StatItemProps {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const stats: StatItemProps[] = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    value: "50+",
    label: "స్థానిక వ్యాపారాలు",
    description: "స్థానిక వ్యాపారాలకు అప్లికేషన్లు మరియు వెబ్‌సైట్‌లు సృష్టించాము",
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: "90%",
    label: "వినియోగదారుల సంతృప్తి",
    description: "మా లక్ష్యాన్ని అందించడంలో వ్యాపారాల నుండి అద్భుతమైన ప్రతిస్పందన",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "5+",
    label: "సంవత్సరాల అనుభవం",
    description: "మా అనుభవజ్ఞులైన బృందం ఆప్ అభివృద్ధి మరియు మార్కెటింగ్‌లో నిపుణత కలిగి ఉంది",
  },
];

function StatItem({ value, label, description, icon }: StatItemProps) {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center mb-4 text-yellow-500">
        {icon}
      </div>
      <div className="text-blue-800 text-4xl mb-4 font-bold font-telugu">{value}</div>
      <h3 className="text-blue-900 font-semibold mb-2 font-telugu">{label}</h3>
      <p className="text-gray-600 text-sm font-telugu">{description}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-telugu">మా గురించి</h2>
              <p className="text-gray-700 mb-6 leading-relaxed font-telugu">
                <span className="font-semibold">no1.engineer</span> వద్ద, మేము మీ వ్యాపారాన్ని డిజిటల్ యుగంలోకి తీసుకెళ్లడానికి అంకితం చేశాము. మేము స్థానిక వ్యాపారాలు మరియు స్టార్టప్‌లను వారి లక్ష్యాలను సాధించడానికి సహాయపడతాము.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed font-telugu">
                నేనే ఈ బ్రాండ్‌కి ముఖం, సంస్థలు మరియు స్థానిక వ్యాపారాలను సందర్శిస్తున్నప్పుడు నేను నా అనుభవాలను పంచుకుంటాను, మరియు మా సేవలు వారి వృద్ధికి ఎలా సహాయపడతాయో చూపిస్తాను.
              </p>
              <a href="#features" className="inline-flex items-center text-yellow-500 font-medium hover:underline group font-telugu">
                మరిన్ని తెలుసుకోండి
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div 
              className="relative rounded-lg overflow-hidden shadow-xl h-96"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Telugu tech professional helping a business" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-white text-sm font-medium bg-yellow-500/80 backdrop-blur-sm px-3 py-1 rounded-full font-telugu">
                    స్థానిక వ్యాపారాలకు శక్తినిచ్చే టెక్
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
