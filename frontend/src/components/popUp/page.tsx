"use client";
import React from "react";
import "./popUp.css";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function PopUp({ isOpen, onClose, children }: PopupProps) {
  if (!isOpen) return null; // se não estiver aberto, não renderiza nada

  return (
    <div className="conteinerPopUp">
      <div className="conteudoPopUp">
        
        <button onClick={onClose} className="buttonClose">
          ✕
        </button>

        
        {children}
      </div>
    </div>
  );
}
