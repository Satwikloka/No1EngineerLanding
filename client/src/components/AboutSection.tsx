import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";

interface StatItemProps {
  value: string;
  label: string;
  description: string;
}

const stats: StatItemProps[] = [
  {
    value: "100+",
    label: "Projects Completed",
    description: "Delivering excellence across industries",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    description: "Our clients trust our expertise",
  },
  {
    value: "10+",
    label: "Years Experience",
    description: "A decade of engineering excellence",
  },
];

function StatItem({ value, label, description }: StatItemProps) {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-blue-500 text-4xl mb-4 font-bold">{value}</div>
      <h3 className="text-primary font-semibold mb-2">{label}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At <span className="font-semibold">no1.engineer</span>, we're driven by a passion for excellence and innovation. Our mission is to provide cutting-edge engineering solutions that address complex challenges and drive meaningful progress.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                With our philosophy of <span className="italic">asamadhiyulu</span>, we approach every project with focus, dedication, and a commitment to exceeding expectations.
              </p>
              <a href="#features" className="inline-flex items-center text-blue-500 font-medium hover:underline group">
                Explore our approach
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Modern minimal workspace" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-white text-sm font-medium bg-blue-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    Precision Engineering
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
