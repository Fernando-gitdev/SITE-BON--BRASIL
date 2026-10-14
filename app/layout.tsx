import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  // 300 dropped: nothing in the site renders at that weight, and each weight
  // is a separate font file to download. 400 stays as the body default.
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Selo Boné Brasil: Selo de Qualidade da Cadeia Produtiva do Boné",
  description:
    "O Selo Boné Brasil certifica as empresas do polo boneleiro de Serra Negra do Norte/RN com regularidade fiscal e jurídica, capacidade produtiva, reputação e confiabilidade comercial.",
  keywords: [
    "selo boné brasil",
    "selo de qualidade",
    "certificação de empresas",
    "boné brasil",
    "polo boneleiro",
    "serra negra do norte",
    "fábrica de bonés",
    "fornecedor de bonés confiável",
  ],
  authors: [{ name: "BONÉ BRASIL" }],
  openGraph: {
    type: "website",
    title: "Selo Boné Brasil: compre de quem produz de verdade",
    description:
      "A certificação que identifica as empresas do polo do boné com regularidade, capacidade produtiva e reputação comprovadas.",
    images: ["/assets/bg-secao1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
