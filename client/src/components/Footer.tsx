import { MapPin, Mail, Phone, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-['Montserrat'] mb-6">
              <span className="text-blue-500">no1</span>.engineer
            </h3>
            <p className="text-gray-300 mb-6">
              <span className="font-medium">Transforming ideas into innovative solutions. Premium engineering services.</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-blue-500 transition-colors">Features</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  AI & Machine Learning
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-blue-500 mr-3 mt-1 h-5 w-5" />
                <span className="text-gray-300">Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-blue-500 mr-3 mt-1 h-5 w-5" />
                <span className="text-gray-300">satwikloka321@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-blue-500 mr-3 mt-1 h-5 w-5" />
                <span className="text-gray-300">+91 72880 70697</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            <span>&copy; {currentYear} no1.engineer. All rights reserved.</span>
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
