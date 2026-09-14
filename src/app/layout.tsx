import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bebas_Neue,
  Heebo,
  Manrope,
  Bungee,
  Teko,
  Press_Start_2P,
  VT323,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  weight: "variable",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: "variable",
  subsets: ["latin"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  weight: "400",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  weight: "400",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edson Fiestas - Front Developer & UX/UI Designer",
  description:
    "Personal page of Edson Fiestas - Front Developer, UX/UI Designer with 16+ years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${heebo.variable} ${manrope.variable} ${bungee.variable} ${teko.variable} ${pressStart2P.variable} ${vt323.variable} antialiased text-gray-800 bg-gray-100 dark:bg-gray-950 flex justify-center items-center min-h-screen transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
