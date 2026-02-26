import { HeroSection } from "@/components/hero-section/HeroSection";
import { AboutSection } from "@/components/about-section/AboutSection";

export default async function Home({ params }) {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
