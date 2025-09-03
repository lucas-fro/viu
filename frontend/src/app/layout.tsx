import CoreProvider from "@/utils/coreProvaider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIU",
  description: "sistema de sinalização digital",
  icons: {
    icon: "/logoTipo.png", // <-- O caminho correto é este
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <CoreProvider>
        {children}
        </CoreProvider>
      </body>
    </html>
  );
}
