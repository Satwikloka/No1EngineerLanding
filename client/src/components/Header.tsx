import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeAnimation from "./TeluguNamaskaramAnimation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Workflow", href: "#workflow" },
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    // Handle scroll to add shadow and background
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Hide welcome message after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-sm border-b border-black" 
          : "bg-transparent"
      }`}
    >
      <AnimatePresence>
        {showWelcome && (
          <motion.div 
            className="bg-gradient-to-r from-[#222] to-[#111] py-2 px-4 text-center"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-7xl mx-auto flex justify-center items-center">
              <WelcomeAnimation />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="section-container py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-black tracking-tighter">
              no1.engineer
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-black hover:opacity-60 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-black absolute w-full left-0 top-full overflow-hidden"
          >
            <ul className="section-container py-6 space-y-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-black hover:opacity-60 text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
