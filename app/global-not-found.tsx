// app/not-found.tsx

import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  Stethoscope,
  Home,
  PhoneCall,
  AlertTriangle,
  HeartPulse,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-foreground antialiased">
        <main className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
          {/* Background Medical Pattern Decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
            <div className="absolute top-10 left-10 rotate-12">
              <Stethoscope size={120} />
            </div>
            <div className="absolute bottom-20 right-10 -rotate-12">
              <HeartPulse size={150} />
            </div>
          </div>

          <div className="z-10 w-full max-w-lg text-center space-y-8">
            {/* Professional Alert Icon */}
            <div className="relative inline-block">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-border">
                <AlertTriangle
                  size={48}
                  className="text-primary animate-pulse"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-red-600 text-white p-2 rounded-full shadow-lg">
                <HeartPulse size={20} />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-3">
              <h1 className="text-7xl font-black text-primary/10 tracking-tighter">
                404
              </h1>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Invalid Route Detected
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                The medical records for this page are missing.{" "}
                <br className="hidden md:block" />
                Please return to the main dashboard or use emergency help.
              </p>
            </div>

            {/* Critical Actions */}
            <div className="flex flex-col gap-4">
              {/* Main Emergency Button - Bihar Focused */}
              <Link
                href="tel:102"
                className="group flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-red-200 hover:bg-red-700 active:scale-95 transition-all"
              >
                <PhoneCall size={24} className="group-hover:animate-bounce" />
                EMERGENCY: CALL 102
              </Link>

              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all"
                >
                  <Home size={20} />
                  Home
                </Link>

                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-6 py-4 rounded-2xl font-bold hover:bg-slate-50 active:scale-95 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Clinical Footer Note */}
          </div>

          {/* Mobile Safe Area Spacer (for your bottom nav) */}
          <div className="h-24 md:hidden" />
        </main>
      </body>
    </html>
  );
}
