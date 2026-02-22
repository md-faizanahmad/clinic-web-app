"use client";

import Link from "next/link";
import {
  Stethoscope,
  Home,
  ArrowLeft,
  Search,
  PhoneCall,
  AlertCircle,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Visual Element */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150" />
        <div className="relative bg-white p-6 rounded-full shadow-2xl border border-slate-100">
          <Stethoscope size={64} className="text-primary animate-bounce-slow" />
          <div className="absolute -top-1 -right-1 bg-red-500 text-white p-1.5 rounded-full border-4 border-white">
            <AlertCircle size={20} />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-md space-y-4">
        <h1 className="text-8xl font-black text-slate-200 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl font-bold text-slate-900">
          Diagnosis: Page Not Found
        </h2>
        <p className="text-slate-500 leading-relaxed">
          It looks like the link you followed is broken or the page has been
          moved. Don&apos;t worry, our medical team is on the case!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none justify-center">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
        >
          <Home size={20} />
          Back to Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 active:scale-95 transition-all"
        >
          <ArrowLeft size={20} />
          Go Back
        </button>
      </div>

      {/* Secondary Support Links */}
      <div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-100 pt-8 w-full max-w-lg">
        <div className="text-left space-y-2">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            Need Help?
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <Search size={16} />
            Search Services
          </Link>
        </div>
        <div className="text-left space-y-2">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            Emergency?
          </p>
          <Link
            href="tel:102"
            className="flex items-center gap-2 text-red-600 font-bold hover:underline"
          >
            <PhoneCall size={16} />
            Call 102 (Bihar)
          </Link>
        </div>
      </div>

      {/* Tailored Mobile Note */}
      <p className="mt-12 text-xs text-slate-400 md:hidden">
        Use the navigation bar below to find your way.
      </p>
    </main>
  );
}
