// import Image from "next/image";

// export const HeroSection = () => {
//   return (
//     <section className="hero-section relative w-dvw">
//       <Image
//         src="/hero.webp"
//         alt="clining"
//         fill
//         className="object-cover object-center"
//       />
//       <div className="absolute content-[''] top-0 left-0 w-full h-full bg-amber-400/70 z-1"></div>
//       <div className="hero-content relative w-full h-full flex flex-col items-start z-2 text-start">
//         <h1>Клінінговая компанія Naomi</h1>
//         <h2>Клінінгові услуги Київ та область</h2>
//         <div className="flex flex-col gap-2 mt-10">
//           <button className="btn rounded-[30px]">Замовити прибирання</button>
//           <button className="btn rounded-[30px]">Детальніше</button>
//         </div>
//       </div>
//     </section>
//   );
// };

export const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/hero.webp')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md flex flex-col items-center">
          <h1 className="flex flex-col mb-5 text-6xl font-bold">
            Клінінговая компанія Naomi
          </h1>
          <p className="mb-5 text-2xl font-medium">
            Клінінгові услуги Київ та область
          </p>
          <div className="flex flex-col gap-4 w-fit">
            <button className="btn btn-primary">Замовити прибирання</button>
            <button className="btn btn-primary">Детальніше</button>
          </div>
        </div>
      </div>
    </div>
  );
};
