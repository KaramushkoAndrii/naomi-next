import { Container } from "@/components/UI/Container";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { AboutSection } from "@/components/about-section/AboutSection";
import { AdvantageSection } from "@/components/abvantage-section/AdvantageSection";
import { ServicesSection } from "@/components/services-section/ServicesSection";
import { PricesSection } from "@/components/prices-section/PricesSection";
import { FormSection } from "@/components/form-section/FormSection";
import { Modal } from "@/components/UI/Modal";
import { ModalOrder } from "@/components/UI/ModalOrder";

export default async function Home({ params }) {
  return (
    <>
      <HeroSection />
      <Container>
        <AboutSection />
        <AdvantageSection />
        <ServicesSection />
        <PricesSection />
        <FormSection />
      </Container>

      <Modal id="form-1" title="title for form 1">
        <ModalOrder />
      </Modal>
      <Modal id="form-2" title="title for form 2" />
      <Modal id="form-3">
        <ModalOrder />
      </Modal>
    </>
  );
}
