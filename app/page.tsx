import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { FootballSpotlight } from "@/components/sections/FootballSpotlight";
import { OutreachSection } from "@/components/sections/OutreachSection";
import { LibraryHighlight } from "@/components/sections/LibraryHighlight";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <FootballSpotlight />
        <OutreachSection />
        <LibraryHighlight />
        <PartnersSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
