
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            The Future of Authentication
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We envision a world where authenticity is never in doubt—where every collector, 
            brand, and marketplace can instantly confirm provenance through secure, 
            user-friendly technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-display font-bold mb-6 text-aertifact-blue">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              To establish <strong>the global standard for provenance tracking and digital authentication</strong> of 
              high-value physical assets through blockchain technology, AI-powered verification, 
              and industry partnerships.
            </p>
            
            <h3 className="text-2xl font-display font-bold mb-6 text-aertifact-blue">
              Our Vision
            </h3>
            <p className="text-gray-700 mb-6">
              By <strong>leveraging AI and blockchain</strong>, Aertifact aspires to be the <strong>global standard</strong> 
              for authenticating physical assets, from fine art and antiques to luxury fashion and automotive components, 
              ensuring that <strong>authenticity is never in doubt</strong>.
            </p>
            
            <div className="mt-8">
              <Button className="bg-aertifact-blue text-white hover:bg-aertifact-accent transition-colors">
                Learn About Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-aertifact-blue">
              Aertifact Advantage
            </h3>
            
            <div className="space-y-4">
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-aertifact-accent mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">AI-Driven Physical Fingerprinting</h4>
                  <p className="text-gray-600">Our proprietary AI captures microscopic visual patterns, creating a natural fingerprint for each asset.</p>
                </div>
              </div>
              
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-aertifact-accent mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Blockchain-Backed Provenance</h4>
                  <p className="text-gray-600">Every item is registered on a tamper-proof blockchain, ensuring transparency and trust.</p>
                </div>
              </div>
              
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-aertifact-accent mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">RFID/NFC Authentication</h4>
                  <p className="text-gray-600">Link assets to RFID/NFC tags for quick verification using our mobile app or API calls.</p>
                </div>
              </div>
              
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-aertifact-accent mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">B2B & API-Focused Approach</h4>
                  <p className="text-gray-600">Integrate Aertifact's authentication directly into your platform with our secure, enterprise-grade API.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
