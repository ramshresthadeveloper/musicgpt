"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalSize = "sm" | "md" | "lg" | "xl";

interface ModalState {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  size: ModalSize;
}

interface ModalContextType extends ModalState {
  openModal: (content: ReactNode, title?: string, size?: ModalSize) => void;
  closeModal: () => void;
}

const GlobalModalContext = createContext<ModalContextType | undefined>(undefined);

export const useGlobalModal = (): ModalContextType => {
  const context = useContext(GlobalModalContext);
  if (!context) {
    throw new Error("useGlobalModal must be used within a GlobalModalProvider");
  }
  return context;
};

export const GlobalModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: "",
    content: null,
    size: "md",
  });

  const openModal = (content: ReactNode, title = "Modal", size: ModalSize = "md") => {
    setModalState({ isOpen: true, title, content, size });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <GlobalModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
      {children}
    </GlobalModalContext.Provider>
  );
};
