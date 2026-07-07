import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Last Dance: Cristiano Ronaldo",
  description: "A cinematic digital museum for Cristiano Ronaldo's journey, records, trophies, World Cup story, and legacy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
