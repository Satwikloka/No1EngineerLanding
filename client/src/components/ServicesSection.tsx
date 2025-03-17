import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Brain } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceProps[] = [
  {
    icon: <Code size={20} />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address specific business challenges and improve operational efficiency."
  },
  {
    icon: <Smartphone size={20} />,
    title: "Mobile Application Development",
    description: "Intuitive, high-performance mobile applications for iOS and Android platforms that engage users and drive results."
  },
  {
    icon: <Cloud size={20} />,
    title: "Cloud Solutions & Integration",
    description: "Seamless cloud migration and infrastructure optimization to enhance scalability and reduce operational costs."
  },
  {
    icon: <Brain size={20} />,
    title: "AI & Machine Learning",
    description: "Intelligent systems that analyze data, learn patterns, and make informed decisions to drive business growth."
  }
];

function ServiceItem({ icon, title, description }: ServiceProps) {
  return (
    <motion.div 
      className="flex gap-4 items-start"
      variants={slideUp}
    >
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-300">
            We offer a comprehensive range of engineering services to meet your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Tech abstract imagery" 
              className="rounded-lg shadow-xl w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent rounded-lg"></div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
