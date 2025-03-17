import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

const navItems: NavItem[] = [
  { label: "గురించి", href: "#about" },
  { label: "సేవలు", href: "#services" },
  { label: "ఫీచర్స్", href: "#features" },
  { label: "సంప్రదించండి", href: "#contact", isButton: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-blue-900/90 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold font-telugu text-white">
              <span className="text-yellow-400">no1</span>.engineer
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.isButton ? (
                  <Button asChild>
                    <a href={item.href} className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-telugu">
                      {item.label}
                    </a>
                  </Button>
                ) : (
                  <a
                    href={item.href}
                    className="text-white hover:text-yellow-400 transition-colors font-telugu"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-blue-800/50"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-blue-900/95 backdrop-blur-sm shadow-lg absolute w-full left-0 top-full"
          >
            <ul className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.isButton ? (
                    <Button
                      asChild
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-telugu"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-white hover:text-yellow-400 py-2 transition-colors font-telugu text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
