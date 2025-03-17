import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/framer-animations";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  initials: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "The team at no1.engineer delivered a solution that exceeded our expectations. Their technical expertise and attention to detail made all the difference.",
    author: "Sarah Johnson",
    role: "CTO, TechVision",
    rating: 5,
    initials: "SJ"
  },
  {
    content: "Working with no1.engineer transformed our business processes. Their innovative approach and commitment to excellence are unmatched in the industry.",
    author: "David Chen",
    role: "Director of Operations, InnovateCorp",
    rating: 5,
    initials: "DC"
  },
  {
    content: "The custom software solution developed by no1.engineer has significantly improved our efficiency and reduced operational costs. A true game-changer for our organization.",
    author: "Emily Rodriguez",
    role: "CEO, NextGen Solutions",
    rating: 4.5,
    initials: "ER"
  }
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center text-blue-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} fill="currentColor" className="h-4 w-4" />
      ))}
      {hasHalfStar && <StarHalf fill="currentColor" className="h-4 w-4" />}
    </div>
  );
}

function TestimonialCard({ content, author, role, rating, initials }: TestimonialProps) {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <StarRating rating={rating} />
      </div>
      <p className="text-gray-700 mb-6 italic">
        "{content}"
      </p>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarFallback className="bg-gray-200">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-primary">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-gray-700">
            Hear from organizations that have transformed their operations with our engineering solutions.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
