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
      className="card p-8 border-black text-black hover:text-white hover:bg-black transition-colors"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <div className="text-5xl mb-4 font-bold font-telugu">{value}</div>
      <h3 className="text-xl font-semibold mb-2 font-telugu">{label}</h3>
      <p className="opacity-70 font-telugu">{description}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-white border-b border-black">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-3xl mb-20"
        >
          <h2 className="title-lg mb-12 font-telugu">మా గురించి</h2>
          <div className="grid gap-12">
            <div>
              <p className="text-xl md:text-2xl mb-6 font-telugu">
                <span className="font-semibold">no1.engineer</span> వద్ద, మేము మీ వ్యాపారాన్ని డిజిటల్ యుగంలోకి తీసుకెళ్లడానికి అంకితం చేశాము. మేము స్థానిక వ్యాపారాలు మరియు స్టార్టప్‌లను వారి లక్ష్యాలను సాధించడానికి సహాయపడతాము.
              </p>
              <p className="text-xl mb-8 font-telugu">
                నేనే ఈ బ్రాండ్‌కి ముఖం, సంస్థలు మరియు స్థానిక వ్యాపారాలను సందర్శిస్తున్నప్పుడు నేను నా అనుభవాలను పంచుకుంటాను, మరియు మా సేవలు వారి వృద్ధికి ఎలా సహాయపడతాయో చూపిస్తాను.
              </p>
            </div>
            <a href="#features" className="btn-primary inline-flex items-center justify-between w-full max-w-md font-telugu">
              <span>మరిన్ని తెలుసుకోండి</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="col-span-3 aspect-[21/9] border border-black mb-8"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
              alt="Telugu tech professional helping a business" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              custom={index}
            >
              <StatItem {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
