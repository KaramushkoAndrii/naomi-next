"use client";
import { useModalStore } from "@/libs/useModalStore";

export const ModalRequest = ({ data }) => {
  const { closeModal } = useModalStore();
  const { title, description, btn } = data;
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={closeModal}>{btn}</button>
    </>
  );
};
