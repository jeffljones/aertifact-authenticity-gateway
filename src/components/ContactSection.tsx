
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageSquare, 
  ArrowRight 
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-blue rounded-lg overflow-hidden shadow-lg">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                  Ready to Secure Your Valuable Assets?
                </h2>
                <p className="text-gray-100 mb-6">
                  Contact us to learn how Aertifact can help authenticate, protect, and 
                  track the provenance of your high-value items.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:info@aertifact.com" 
                    className="flex items-center text-white hover:text-aertifact-silver"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    info@aertifact.com
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-display font-semibold mb-4 text-aertifact-blue">
                    Request Information
                  </h3>
                  <form>
                    <div className="mb-4">
                      <input 
                        type="email" 
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aertifact-blue"
                      />
                    </div>
                    <div className="mb-4">
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aertifact-blue">
                        <option value="">Select your industry</option>
                        <option value="music">Musical Instruments</option>
                        <option value="luxury">Luxury Goods</option>
                        <option value="art">Fine Art & Collectibles</option>
                        <option value="auto">Automotive</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <Button className="w-full bg-aertifact-blue text-white hover:bg-aertifact-accent">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
