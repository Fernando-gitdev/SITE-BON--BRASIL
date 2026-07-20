import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "BONÉ BRASIL 2026: Feira Nacional da Cadeia Produtiva do Boné",
  description:
    "A BONÉ BRASIL 2026 conecta o polo produtivo do boné ao mercado nacional, fortalecendo negócios, gerando oportunidades e consolidando Serra Negra do Norte/RN como referência no segmento.",
  keywords: [
    "boné brasil 2026",
    "feira do bone",
    "polo boneleiro",
    "serra negra do norte",
    "industria textil",
    "moda",
    "rodada de negocios",
  ],
  authors: [{ name: "BONÉ BRASIL 2026" }],
  openGraph: {
    type: "website",
    title: "BONÉ BRASIL 2026: Feira Nacional do Boné",
    description:
      "A feira nacional que conecta o polo de Serra Negra do Norte ao mercado. Participe de rodadas de negócios, palestras e workshops.",
    images: ["/assets/bg-secao1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
