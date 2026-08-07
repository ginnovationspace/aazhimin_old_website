import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site-wide metadata
export const metadata: Metadata = {
  title: "Aazhimin | Sovereign Infrastructure for the Ocean Economy",
  description:
    "Aazhimin is a full-stack digital infrastructure platform for small ports, fishers, and coastal nations — offering marine robotics, traceability, logistics, and sovereign data tools.",
  keywords: [
    "Aazhimin",
    "marine technology",
    "port digitization",
    "fisheries traceability",
    "drone logistics",
    "sovereign tech",
    "cold chain",
    "blue economy",
    "cooperative platform",
    "decentralized seafood"
  ],
  openGraph: {
    title: "Aazhimin | Sovereign Infrastructure for the Ocean Economy",
    description:
      "Digitizing coastal trade, fisheries, and ports with robotics, AI logistics, and blockchain-powered traceability.",
    url: "https://aazhimin.com",
    siteName: "Aazhimin",
    type: "website",
    images: [
      {
        url: "https://aazhimin.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aazhimin Ocean Tech Platform",
      },
    ],
  },
  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-[#0A0F12] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
