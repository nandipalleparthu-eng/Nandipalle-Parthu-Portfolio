import React from "react"
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import "./globals.css";

const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nandipalle Parthu | Portfolio",
  description:
    "CSE Student | AI & ML Enthusiast | Web Developer | UI Designer — INSPIRE AND BUILD",
  generator: "v0.app",
  keywords: [
    "Nandipalle Parthu",
    "AI",
    "Machine Learning",
    "Web Developer",
    "Portfolio",
  ],
};

export const viewport: Viewport = {
  themeColor: "#00d2be",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
