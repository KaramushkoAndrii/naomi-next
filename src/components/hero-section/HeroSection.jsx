import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-dvw h-dvh">
      <Image src="/hero.webp" alt="clining" fill className="object-cover" />
      <h1>Hello clining</h1>
    </section>
  );
};
