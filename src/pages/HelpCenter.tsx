
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HelpCircle, Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqs = [
    {
      question: "How does Aertifact's authentication technology work?",
      answer: "Aertifact uses a multi-layered approach combining RFID/NFC tags, AI-powered physical characteristic analysis, and blockchain verification. This creates a tamper-proof system that verifies the authenticity of valuable collectibles by analyzing both digital and physical attributes unique to each item."
    },
    {
      question: "What types of collectibles can be authenticated with Aertifact?",
      answer: "Our technology works with a wide range of high-value collectibles including musical instruments, luxury goods, fine art, sports memorabilia, rare books, watches, and other valuable items where authenticity verification is crucial."
    },
    {
      question: "How secure is the blockchain-based verification system?",
      answer: "Extremely secure. Our blockchain implementation creates immutable records that cannot be altered, providing a permanent and transparent history of ownership and verification events. Each authentication record is cryptographically secured and decentralized."
    },
    {
      question: "Can Aertifact authenticate items without physical tags?",
      answer: "Yes. While our RFID/NFC tags provide an additional layer of security, our AI system can authenticate items based solely on their unique physical characteristics such as wood grain patterns, textile weaves, and other microscopic details specific to each item."
    },
    {
      question: "How do I get started with Aertifact for my collection?",
      answer: "Contact our team through the Contact Us page to schedule a consultation. We'll assess your needs and develop a customized authentication solution for your specific collectibles or inventory."
    }
  ];
  
  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="bg-gradient-blue text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HelpCircle className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Help Center</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Find answers to common questions about Aertifact's authentication technology and services.
            </p>
            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pr-10"
              />
              <Search className="absolute right-3 top-3 h-5 w-5 text-white/60" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold mb-8 text-center text-aertifact-blue">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="border rounded-lg overflow-hidden">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="px-6 py-4 text-left font-medium text-aertifact-blue hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No results found for "{searchQuery}"</p>
                  <p className="mt-2 text-gray-400">Try a different search term or browse our FAQs.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-display font-bold mb-4 text-aertifact-blue">
                Still Need Help?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team is ready to assist you with any questions or concerns about our authentication solutions.
              </p>
              <Button 
                className="bg-aertifact-blue text-white hover:bg-aertifact-accent"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HelpCenter;
