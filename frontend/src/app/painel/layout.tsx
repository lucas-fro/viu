"use client";

import "./dashboard.css";
import Image from "next/image";
import { Sidebar, SidebarHeader, SidebarMenu, SidebarItem, SidebarFooter } from "@/components/sidebar/page";
import Link from "next/link";
import { ChartSpline, SquareStop, Settings, Menu } from 'lucide-react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (loading) return <p>Carregando...</p>;

  return (
      <div className="antialiased painelLayout">

      <button className="menuButton" onClick={toggleMenu}>
        <Menu size={30} className="menuIcon" />
      </button>

      <Sidebar isOpen={isMenuOpen}>
        <SidebarHeader>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </Link>
        </SidebarHeader>

        <SidebarMenu>
          <SidebarItem label="Mídias" href="/painel/midias" icon={<SquareStop size={18} />} toggleMenu={toggleMenu} />
          <SidebarItem label="Dashboard" href="/painel/dashboard" icon={<ChartSpline size={18} />} toggleMenu={toggleMenu} />
        </SidebarMenu>

        <SidebarFooter>
          <SidebarItem label="configuração" href="/painel/configuracao" icon={<Settings size={18} />} toggleMenu={toggleMenu} />
        </SidebarFooter>
      </Sidebar>

        {children}
      </div>
  );
}