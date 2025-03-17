import { motion } from "framer-motion";
import { Lightbulb, Cog, Users, LineChart, Shield, Gauge } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/framer-animations";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Lightbulb />,
    title: "Innovative Solutions",
    description: "We leverage cutting-edge technologies to create forward-thinking solutions that address complex challenges."
  },
  {
    icon: <Cog />,
    title: "Technical Excellence",
    description: "Our team of expert engineers brings depth of knowledge and precision to every project we undertake."
  },
  {
    icon: <Users />,
    title: "Client-Focused Approach",
    description: "We collaborate closely with clients to understand their unique needs and deliver tailored solutions."
  },
  {
    icon: <LineChart />,
    title: "Scalable Design",
    description: "Our solutions grow with your business, adapting to evolving requirements and expanding capabilities."
  },
  {
    icon: <Shield />,
    title: "Reliable Security",
    description: "We implement robust security protocols to protect your data and systems from potential threats."
  },
  {
    icon: <Gauge />,
    title: "Performance Optimization",
    description: "We fine-tune every aspect of our solutions to deliver maximum efficiency and performance."
  }
];

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <motion.div
      className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-gray-700">
        {description}
      </p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-gray-700">
            Our innovative approach and commitment to excellence set us apart in the engineering landscape.
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
      </div>
    </section>
  );
}
