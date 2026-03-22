"use client";

import { Portal } from "./Portal";
import { ModalOrder } from "./ModalOrder";
import { ModalRequest } from "./ModalRequest";
import { useModalStore } from "@/libs/useModalStore";

export const Modal = ({ title = "Статус замовлення" }) => {
  const { isOpen, closeModal, modalType, modalData } = useModalStore();
  if (!isOpen) return null;

  const renderContent = () => {
    switch (modalType) {
      case "order":
        return <ModalOrder />;
      case "status":
        return <ModalRequest data={modalData} />;
      default:
        return null;
    }
  };

  return (
    <Portal>
      <div
        className={`flex fixed inset-0 bg-black/50 backdrop-blur-sm z-50 items-center justify-center p-4`}
      >
        <div className="custom-modal bg-white rounded-main-radius shadow-2xl w-full max-w-md overflow-hidden dark:bg-black/70">
          <header className="flex justify-between items-center p-2">
            <h3>{modalData.header ? modalData.header : title}</h3>
            <button
              onClick={closeModal}
              className="px-2 hover:bg-primary-violet transition-colors duration-300 hover:text-white rounded-full hover:cursor-pointer"
            >
              X
            </button>
          </header>
          <div className="p-4">{renderContent()}</div>
        </div>
      </div>
    </Portal>
  );
};
