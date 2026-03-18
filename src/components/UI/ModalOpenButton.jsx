"use client";

import { useModalStore } from "@/libs/useModalStore";
export const ModalOpenButton = ({ text, type, ...rest }) => {
  const { openModal } = useModalStore();

  return (
    <button
      className="btn btn-primary w-full"
      onClick={() => openModal(type, { ...rest })}
    >
      {text}
    </button>
  );
};
