import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SessionProvider from '@/components/SessionProvider';
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import BackToTopButton from "@/components/backToTop/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Construction",
  description: "Professional construction company specializing in residential, commercial, and industrial building solutions. We deliver quality craftsmanship, on-time projects, and customer-focused services.",
  keywords: "construction company, building contractor, residential construction, commercial construction, industrial building, general contractor, renovation, remodeling, construction services, architecture, project management, real estate development, house building, office construction",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
          
         <BackToTopButton />
      </body>
    </html>
  );
}

