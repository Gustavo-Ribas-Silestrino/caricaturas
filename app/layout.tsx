import type { Metadata } from "next";
import { Inter, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800", "900"], display: "swap", variable: "--font-montserrat" });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"], display: "swap", variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "Fast Caricaturas — Caricaturas ao vivo para eventos",
  description: "Empresa especializada em caricaturas ao vivo em eventos e produtos personalizados. Caricatura tradicional, digital, canecas, cardenetas, squeezes e muito mais!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`h-full ${montserrat.variable} ${dancing.variable}`}>
      <body className={`min-h-full flex flex-col antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}
