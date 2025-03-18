
import { 
  Database, 
  Fingerprint, 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  Radio 
} from "lucide-react";

const TechnologyCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ComponentType<{ className?: string }>, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md card-glow hover:border-aertifact-accent transition-all">
      <div className="bg-aertifact-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="h-7 w-7 text-aertifact-blue" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-aertifact-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TechnologySection = () => {
  const technologies = [
    {
      icon: Database,
      title: "Blockchain Provenance",
      description: "Immutable records of ownership and authentication history secured through blockchain technology."
    },
    {
      icon: Fingerprint,
      title: "Wood Grain Fingerprinting",
      description: "AI-powered analysis that creates a unique digital fingerprint of wooden assets for verification."
    },
    {
      icon: Radio,
      title: "RFID/NFC Authentication",
      description: "Encrypted physical tags that securely link physical assets to digital blockchain records."
    },
    {
      icon: ShieldCheck,
      title: "Secure API Integration",
      description: "Enterprise-grade secure APIs for seamless integration with existing business systems."
    },
    {
      icon: Smartphone,
      title: "Mobile Verification",
      description: "iOS and Android apps that allow instant scanning and verification of authenticated items."
    },
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description: "Machine learning algorithms that detect forgeries and verify authenticity with high precision."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Our Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aertifact leverages cutting-edge technologies to provide the most secure and reliable 
            authentication system for high-value collectibles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {technologies.map((tech, index) => (
            <TechnologyCard 
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
