"use client";
import Link from "next/link";
import { ModalOpenButton } from "../UI/ModalOpenButton";
import { useModalStore } from "@/libs/useModalStore";

export const HeroSection = () => {
  const { openModal } = useModalStore();
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
          <h1 className="flex flex-col mb-5 text-4xl font-bold w-[60%]">
            Клінінговая компанія Naomi
          </h1>
          <p className="mb-5 text-2xl font-medium w-[55%]">
            Клінінгові услуги Київ та область
          </p>
          <div className="flex flex-col gap-4 w-fit md:flex-row md:justify-center">
            {/* <ModalOpenButton
              modalId="main-form"
              text={"Замовити прибирання"}
              classNames="w-full"
            /> */}
            <button
              className="btn btn-primary w-full"
              onClick={() =>
                openModal("order", { title: "Загальне замовлення 25" })
              }
            >
              Замовити прибирання
            </button>
            <button className="btn btn-primary w-full">
              <Link href="#advantage">Детальніше</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
