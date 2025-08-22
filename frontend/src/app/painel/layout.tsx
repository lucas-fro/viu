import "./dashboard.css";
import Image from "next/image";
import { Sidebar, SidebarHeader, SidebarMenu, SidebarItem, SidebarFooter } from "@/components/sidebar/page";
import Link from "next/link";
import { ChartSpline, SquareStop } from 'lucide-react';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={`antialiased dashboardLayout`}>

      <Sidebar>
        <SidebarHeader>
          <Link href="/">
          <Image src="/logo.png" alt="Logo" width={150} height={150}/>
          </Link>
        </SidebarHeader>

        <SidebarMenu>
          <SidebarItem label="Dashboard" href="/painel/dashboard" icon={<ChartSpline size={18} />} />
          <SidebarItem label="Mídias" href="/painel/midias" icon={<SquareStop size={18} />} />
        </SidebarMenu>
      </Sidebar>

        {children}
      </div>
  );
}
