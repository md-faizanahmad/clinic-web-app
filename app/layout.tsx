import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";
import Footer from "@/src/layout/Footer";
import ClinicHeader from "@/src/layout/ClinicHeader";
import BookingDock from "@/src/booking/mobile/BookingDock";
import ClinicChatbot from "@/src/bot/ClinicChatWidget";
import TopContactBar from "@/src/shared/TopContactBar";
// import BookingDock from "@/src/layout/BookingDock";

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

  manifest: "/manifest.json",

  themeColor: "#0ea5e9",

  icons: {
    icon: [
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],

    apple: [
      { url: "/icons/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],

    shortcut: ["/icons/icon-192.png"],
  },

  openGraph: {
    title: "ClinicCare | Trusted Healthcare Services",
    description:
      "Professional healthcare services, modern diagnostics, and easy appointment booking.",
    url: "https://clinic-web-app-nine.vercel.app",
    siteName: "ClinicCare",
    images: [
      {
        url: "/icons/icon-512.png",
        width: 512,
        height: 512,
        alt: "ClinicCare",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ClinicCare | Trusted Healthcare Services",
    description:
      "Trusted clinic services with easy booking and professional care.",
    images: ["/icons/icon-512.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background`}
      >
        <TopContactBar />
        <ClinicHeader />
        {/* Page Transition Wrapper */}
        <main className="grow animate-fade">{children}</main>

        {/* <ContactDock /> */}
        {/* <BookingDock /> */}
        <BookingDock />
        <ClinicChatbot />
        <Footer />
      </body>
    </html>
  );
}
