import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junior Caricaturas & Brindes",
  description: "Caricaturas personalizadas para eventos, brindes e presentes únicos. Papel tradicional, digital, canecas, cardenetas e squeezes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
