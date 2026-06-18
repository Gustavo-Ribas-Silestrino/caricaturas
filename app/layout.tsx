import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800", "900"], display: "swap", variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Ivo Caricaturas & Brindes",
  description: "Caricaturas personalizadas para eventos, brindes e presentes únicos. Papel tradicional, digital, canecas, cardenetas e squeezes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`h-full ${montserrat.variable}`}>
      <body className={`min-h-full flex flex-col antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}
