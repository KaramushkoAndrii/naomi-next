"use client";
import { useModalStore } from "@/libs/useModalStore";

export const ModalRequest = ({ data }) => {
  const { closeModal } = useModalStore();
  const { title, description, btn } = data;
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={closeModal} className="btn btn-primary w-full p-2">
        {btn}
      </button>
    </div>
  );
};
