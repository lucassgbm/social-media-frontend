"use client";

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
        className="fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>

      {/* Conteúdo do modal */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 z-10 w-11/12 max-w-md">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Conteúdo */}
        <div>{children}</div>
      </div>
    </div>
  );
}
