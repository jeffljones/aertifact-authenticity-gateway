
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/TechnologySection";
import SolutionsSection from "@/components/SolutionsSection";
import MarketsSection from "@/components/MarketsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <SolutionsSection />
      <MarketsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
