
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Fingerprint } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-blue relative text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-auth-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 mb-12 lg:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Authenticate & Secure<br />
              <span className="text-aertifact-silver">Valuable Collectibles</span><br />
              With Blockchain
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
              Aertifact provides tamper-proof verification for high-value assets through 
              RFID/NFC authentication, AI-powered physical characteristic analysis, 
              and blockchain-based provenance tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-aertifact-blue hover:bg-aertifact-silver transition-colors text-base px-6 py-6">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-aertifact-blue bg-white hover:bg-white/10 hover:text-white transition-colors text-base px-6 py-6">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="lg:w-5/12 lg:pl-12 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-white/20 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tamper-Proof Authentication</h3>
                    <p className="text-gray-200">
                      Securely verify the authenticity of high-value collectibles with 
                      blockchain-backed authentication records.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-white/20 p-3 rounded-full">
                    <Fingerprint className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI Physical Characteristic Analysis</h3>
                    <p className="text-gray-200">
                      Our proprietary technology creates unique digital fingerprints 
                      based on wood grain, textile patterns, and custom finishing details, 
                      ensuring authenticity beyond physical tags.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-white/20 p-3 rounded-full">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Complete Provenance Tracking</h3>
                    <p className="text-gray-200">
                      Track the entire history of ownership and verification through 
                      our immutable blockchain records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
