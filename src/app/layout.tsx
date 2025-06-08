import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mr. Machado - Comunicação Visual | Fachadas, Letreiros e Placas em Jaboti, PR",
  description: "Especialistas em comunicação visual em Jaboti, Paraná. Fachadas, letreiros luminosos, placas, adesivos e mais. +15 anos transformando negócios. Orçamento grátis!",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
