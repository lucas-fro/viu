"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./sidebar.css";

// Componente Divisor para separar itens
export function Divisor() {
  return ( 
    <hr className="sidebarDivisor" />
  )
}

// Componente principal da Sidebar
export function Sidebar({ children, isOpen }: { children: React.ReactNode, isOpen: boolean }) {
  return <div className={`sidebar ${isOpen ? 'open' : ''}`}>{children}</div>;
}

// Header da Sidebar
export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return <div className="sidebarHeader">{children}</div>;
}

// Menu da Sidebar
export function SidebarMenu({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Divisor />
    <nav className="sidebarMenu">{children}</nav>
    </>);
}

// Item do Menu
type SidebarItemProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
  toggleMenu?: () => void;
};

export function SidebarItem({ label, href, icon, toggleMenu }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href; // verifica se a rota atual bate

  return (
    <Link href={href} className={`sidebarLink ${isActive ? "active" : ""}`} onClick={toggleMenu}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}

// Footer da Sidebar
export function SidebarFooter({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Divisor />
    <footer className="sidebarFooter">{children}</footer>
    </>
  )
}
