import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mr. Machado - Comunicação Visual | Fachadas, Letreiros e Placas em Jaboti, PR",
  description: "Especialistas em comunicação visual em Jaboti, Paraná. Fachadas, letreiros luminosos, placas, adesivos e mais. +15 anos transformando negócios. Orçamento grátis!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
