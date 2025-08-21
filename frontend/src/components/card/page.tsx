import React from "react";
import "./card.css";

type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="cardConteiner">
      {children}
    </div>
  );
}