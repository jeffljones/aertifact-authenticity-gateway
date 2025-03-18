
import { Guitar, Watch, Landmark, Car, Factory } from "lucide-react";

const MarketCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ComponentType<{ className?: string }>, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="bg-aertifact-blue/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-5">
        <Icon className="h-10 w-10 text-aertifact-blue" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-2 text-aertifact-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const MarketsSection = () => {
  const markets = [
    {
      icon: Guitar,
      title: "Musical Instruments",
      description: "Authenticate vintage guitars, violins, pianos and other fine instruments with AI wood grain verification."
    },
    {
      icon: Watch,
      title: "Luxury Watches & Jewelry",
      description: "Provide blockchain-backed provenance for high-value watches, jewelry, and luxury accessories."
    },
    {
      icon: Landmark,
      title: "Auction Houses & Collectors",
      description: "Verify fine art, rare memorabilia, and investment collectibles with immutable digital records."
    },
    {
      icon: Car,
      title: "Automobile Marketplace",
      description: "Authenticate classic and high-value vehicles with complete ownership and service history."
    },
    {
      icon: Factory,
      title: "OEM & Manufacturers",
      description: "Embed authentication directly at the production level with seamless factory integration."
    }
  ];

  return (
    <section id="markets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Markets We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aertifact provides authentication solutions across multiple industries where 
            provenance and authenticity are critical.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-fade-in">
          {markets.map((market, index) => (
            <MarketCard 
              key={index}
              icon={market.icon}
              title={market.title}
              description={market.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-aertifact-blue mb-4">
            The secondary market for high-end collectibles is valued at $100B+ annually.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As luxury brands and collectors increasingly demand verifiable provenance, 
            Aertifact is positioned to be the industry leader in authentication technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
