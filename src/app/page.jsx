import { Container } from "@/components/UI/Container";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";
import { AboutSection } from "@/components/about-section/AboutSection";
import { aboutSectionData } from "@/data/aboutSectionData";
import { AdvantageSection } from "@/components/abvantage-section/AdvantageSection";
import { advantageSectionData } from "@/data/advantageSectionData";
import { ServicesSection } from "@/components/services-section/ServicesSection";
import { servicesSectionData } from "@/data/servicesSectionData";
import { PricesSection } from "@/components/prices-section/PricesSection";
import { priceSectionData } from "@/data/priceSectionData";
import { FormSection } from "@/components/form-section/FormSection";

export default async function Home({ params }) {
  return (
    <>
      <HeroSection data={heroSectionData} />
      <Container>
        <AboutSection data={aboutSectionData} />
        <AdvantageSection data={advantageSectionData} />
        <ServicesSection data={servicesSectionData} />
        <PricesSection data={priceSectionData} />
        <FormSection />
      </Container>
    </>
  );
}
