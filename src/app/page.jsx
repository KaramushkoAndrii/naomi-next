import { HeroSection } from "@/components/hero-section/HeroSection";
import { AboutSection } from "@/components/about-section/AboutSection";
import { AdvantageSection } from "@/components/abvantage-section/AdvantageSection";
import { ServicesSection } from "@/components/services-section/ServicesSection";

export default async function Home({ params }) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AdvantageSection />
      <ServicesSection />
    </>
  );
}
