import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import SecuritySection from "@/components/SecuritySection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-devnsecure-black">
      <Header />
      <HeroSection />
      <CapabilitiesSection />
      <ArchitectureSection />
      <SecuritySection />
      <TechStackSection />
      <ProcessSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
