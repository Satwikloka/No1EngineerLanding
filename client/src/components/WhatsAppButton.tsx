import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a 
        href="https://wa.me/7288807097" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
        <span className="font-medium">Chat with us</span>
        
        {/* Pulsing effect to draw attention */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
      </a>
      
      {/* Badge showing phone number */}
      <div className="absolute -top-3 -right-3 bg-white text-green-600 text-xs font-bold px-2 py-1 rounded-full shadow-md border border-green-300">
        +91 7288807097
      </div>
    </motion.div>
  );
}