
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-display font-bold">
                <span className={cn(
                  "transition-colors",
                  isScrolled ? "text-aertifact-blue" : "text-white"
                )}>
                  Ær
                </span>
                <span className="text-aertifact-accent">tifact</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-aertifact-blue hover:text-aertifact-accent px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#technology" className="text-aertifact-blue hover:text-aertifact-accent px-3 py-2 text-sm font-medium transition-colors">
                Technology
              </a>
              <a href="#solutions" className="text-aertifact-blue hover:text-aertifact-accent px-3 py-2 text-sm font-medium transition-colors">
                Solutions
              </a>
              <a href="#markets" className="text-aertifact-blue hover:text-aertifact-accent px-3 py-2 text-sm font-medium transition-colors">
                Markets
              </a>
            </nav>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-aertifact-blue text-white hover:bg-aertifact-accent transition-colors">
              Contact Us
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-aertifact-blue hover:text-aertifact-accent"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="text-aertifact-blue hover:text-aertifact-accent block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#technology" 
              className="text-aertifact-blue hover:text-aertifact-accent block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Technology
            </a>
            <a 
              href="#solutions" 
              className="text-aertifact-blue hover:text-aertifact-accent block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#markets" 
              className="text-aertifact-blue hover:text-aertifact-accent block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Markets
            </a>
            <div className="pt-4">
              <Button 
                className="w-full bg-aertifact-blue text-white hover:bg-aertifact-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
