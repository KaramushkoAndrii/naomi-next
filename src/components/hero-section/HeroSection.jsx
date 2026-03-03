import Link from "next/link";
import { ModalOpenButton } from "../UI/ModalOpenButton";

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
            <ModalOpenButton modalId="form-1" text={"Замовити прибирання"} />
            <button className="btn bg-primary-violet">
              <Link href="#advantage">Детальніше</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
