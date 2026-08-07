import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

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
  title: "Aazhimin | Empowering the Future of Seafood",
  description:
    "Aazhimin is a full-stack seafood and marine innovation platform that powers sustainable fisheries, smart logistics, and global marketplace solutions.",
  keywords: [
    "seafood",
    "fisheries",
    "marine logistics",
    "cold chain",
    "aquaculture",
    "sustainable fishing",
    "blue economy",
    "Aazhimin",
  ],
  openGraph: {
    title: "Aazhimin | Empowering the Future of Seafood",
    description:
      "Sustainably connecting marine producers to the world with cutting-edge seafood technology and services.",
    url: "https://aazhimin.com",
    siteName: "Aazhimin",
    type: "website",
    images: [
      {
        url: "https://aazhimin.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aazhimin Seafood Platform",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
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
