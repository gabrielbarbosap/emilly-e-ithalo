import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import "./globals.css";
import { RecadoProvider } from "./components/RecadoProvider";

// Serifa romântica e de alto contraste — os nomes do casal, os títulos.
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Sans suave e acolhedora — o corpo do texto, o "conforto".
const body = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Emilly & Ithalo — Lista de Presentes",
  description:
    "Mais do que presentes, gestos de amor. Ajude Emilly e Ithalo a construir o começo de uma vida juntos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full font-body">
        <RecadoProvider>{children}</RecadoProvider>
      </body>
    </html>
  );
}
