
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ 
  title, 
  description, 
  price 
}: { 
  title: string, 
  description: string, 
  price: string 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md card-glow border border-gray-100 hover:border-aertifact-accent transition-all h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-display font-semibold mb-4 text-aertifact-blue">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      <div>
        <div className="text-aertifact-accent font-semibold mb-4">{price}</div>
        <Button variant="outline" className="border-aertifact-blue text-aertifact-blue hover:bg-aertifact-blue hover:text-white w-full">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const SolutionsSection = () => {
  const services = [
    {
      title: "Authentication Services",
      description: "Expert verification and blockchain registration for high-value items, providing immutable proof of authenticity.",
      price: "$100 - $500 per item"
    },
    {
      title: "RFID/NFC Tag Integration",
      description: "Secure, encrypted physical tags that connect your physical assets with their digital authentication records.",
      price: "$10 per unit"
    },
    {
      title: "AI Physical Identification",
      description: "Our proprietary technology creates unique digital fingerprints based on wood grain, textile patterns, and custom finishing details in handcrafted items.",
      price: "$50 - $200 per analysis"
    },
    {
      title: "Business API Access",
      description: "Integrate Aertifact authentication directly into your platform with our secure, enterprise-grade API.",
      price: "$500 - $2,000 per month"
    },
    {
      title: "NFT Minting (Optional)",
      description: "Create digital proof of authentication through NFTs, linked to your physical assets for added security and value.",
      price: "$50 - $200 per NFT"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aertifact provides comprehensive authentication and provenance solutions for high-value 
            physical assets across multiple industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
