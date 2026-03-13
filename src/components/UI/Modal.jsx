"use client";

import { Portal } from "./Portal";
import { ModalOrder } from "./ModalOrder";
import { useModalStore } from "@/libs/useModalStore";

export const Modal = ({ title = "Стандарт" }) => {
  const { isOpen, closeModal, modalType, modalData } = useModalStore();
  if (!isOpen) return null;

  const renderContent = () => {
    switch (modalType) {
      case "order":
        return <ModalOrder />;
      case "sucses":
        return <h3>Замовлення прийняте</h3>;
      default:
        return null;
    }
  };

  return (
    <Portal>
      <div
        className={`flex fixed inset-0 bg-black/50 backdrop-blur-sm z-50 items-center justify-center p-4`}
      >
        <div className="custom-modal bg-white rounded-main-radius shadow-2xl w-full max-w-md overflow-hidden">
          <header className="flex justify-between items-center p-2">
            <h3>{modalData.title}</h3>
            <button onClick={closeModal}>X</button>
          </header>
          <div className="p-4">{renderContent()}</div>
        </div>
      </div>
    </Portal>
  );
};
