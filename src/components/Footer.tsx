
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-aertifact-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <button onClick={scrollToTop} className="text-white flex items-center">
              <span className="text-2xl font-display font-bold">
                Ær<span className="text-aertifact-accent">tifact</span>
              </span>
            </button>
            <p className="mt-4 text-gray-300">
              Blockchain-Powered Authentication & Provenance Platform for High-Value Collectibles
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('technology')} className="text-gray-300 hover:text-white transition-colors">Technology</button></li>
                <li><button onClick={() => scrollToSection('solutions')} className="text-gray-300 hover:text-white transition-colors">Solutions</button></li>
                <li><button onClick={() => scrollToSection('markets')} className="text-gray-300 hover:text-white transition-colors">Markets</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('solutions')} className="text-gray-300 hover:text-white transition-colors">Authentication</button></li>
                <li><button onClick={() => scrollToSection('technology')} className="text-gray-300 hover:text-white transition-colors">Technology</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">API Access</button></li>
                <li><button onClick={() => scrollToSection('solutions')} className="text-gray-300 hover:text-white transition-colors">Integration</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aertifact Inc. All rights reserved.
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            Securing the authenticity of valuable collectibles worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
