import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PromoBar } from "@/components/PromoBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BioCare Dental — Stomatologie modernă în București",
  description:
    "BioCare Dental: tratamente stomatologice moderne, reabilitare orală completă, implantologie și laborator propriu. București, Sector 2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PromoBar />
        {children}
      </body>
    </html>
  );
}
