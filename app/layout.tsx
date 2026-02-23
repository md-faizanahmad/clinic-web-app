"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import "./globals.css";
import Header from "@/src/layout/Header";
import Footer from "@/src/layout/Footer";
import ContactDock from "@/src/layout/ContactDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClinicCare | Trusted Healthcare Services",
  description:
    "ClinicCare provides professional medical services, emergency care, and easy appointment booking via WhatsApp or Email.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background`}
      >
        <Header />

        {/* Page Transition Wrapper */}
        <main key={pathname} className="grow animate-fade">
          {children}
        </main>

        <ContactDock />
        <Footer />
      </body>
    </html>
  );
}
