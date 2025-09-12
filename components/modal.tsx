"use client";

import Button from "./button";
import CloseIcon from "./icons/close";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fundo escuro */}
      <div
        className="fixed inset-0 bg-black opacity-80"
        onClick={onClose}
      ></div>

      {/* Conteúdo do modal */}
      <div className="w-full h-full sm:h-auto sm:w-[80%] sm:max-w-lg bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6 text-white dark:text-neutral-600 z-10">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="dark:text-white text-neutral-800 text-lg font-semibold">{title}</h2>

          <Button onClick={onClose}>
              <CloseIcon className="size-6 dark:text-white text-neutral-800"/>
          </Button>
        </div>

        {/* Conteúdo */}
        <div>{children}</div>
      </div>
    </div>
  );
}
