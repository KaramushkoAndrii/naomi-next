import { HeroSection } from "@/components/hero-section/HeroSection";
import { AboutSection } from "@/components/about-section/AboutSection";
import { AdvantageSection } from "@/components/abvantage-section/AdvantageSection";
import { ServicesSection } from "@/components/services-section/ServicesSection";
import { PricesSection } from "@/components/prices-section/PricesSection";
import { FormSection } from "@/components/form-section/FormSection";
import { Footer } from "@/components/footer/Footer";

export default async function Home({ params }) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AdvantageSection />
      <ServicesSection />
      <PricesSection />
      <FormSection />
      <Footer />
    </>
  );
}
