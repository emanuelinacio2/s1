import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Análise de Riscos | TechStore Ltda.",
  description: "Escopo do exercício com mapeamento de riscos e contramedidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
