import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigitAgence — Sites web, tunnels de vente & automatisation",
  description:
    "DigitAgence transforme vos visiteurs en clients : création de sites web, tunnels de vente, automatisation email et SaaS sur mesure. Demandez votre audit gratuit.",
  openGraph: {
    title: "DigitAgence — Votre croissance digitale, notre métier",
    description:
      "Sites web, tunnels de vente et automatisation qui génèrent des clients. Audit gratuit sous 24h.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
