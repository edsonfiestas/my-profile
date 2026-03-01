import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProfileCard from "@/components/ProfileCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-800 bg-gray-100 dark:bg-gray-950 flex justify-center items-center min-h-screen transition-colors duration-500`}
      >
        <div className="p-6">
          <ProfileCard />
        </div>
      </body>
    </html>
  );
}
