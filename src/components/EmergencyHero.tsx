"use client";

import Link from "next/link";
import { Activity, Ambulance, Phone } from "lucide-react";

export default function EmergencyHero() {
  return (
    <section
      className="w-full px-4 md:px-6 py-12 md:py-20"
      aria-labelledby="emergency-heading"
    >
      <div className="max-w-6xl mx-auto relative overflow-hidden bg-slate-950 min-h-100 flex items-center shadow-2xl">
        {/* 1. BACKGROUND VIDEO LAYER */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 grayscale-[0.6]"
          >
            <source src="/videos/ambulance-hero.mp4" type="video/mp4" />
          </video>
          {/* Clinical Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent md:to-slate-950/40" />
        </div>

        {/* 2. WATERMARK & CONTENT */}
        <div className="relative z-10 w-full grid md:grid-cols-2 gap-10 p-8 md:p-16 items-center">
          {/* Subtle Background Watermark */}
          <Ambulance
            size={400}
            className="absolute -right-20 -bottom-20 text-white/5 -rotate-12 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-none text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">
              <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              Critical Response Unit
            </div>

            <h2
              id="emergency-heading"
              className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9]"
            >
              Need Urgent <br />
              <span className="text-red-600 not-italic">Assistance?</span>
            </h2>

            <p className="text-slate-400 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] leading-relaxed max-w-sm">
              Ambulance and Trauma unit operational 24/7 across Patna. Equipped
              with life-support diagnostics.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <Link
              href="tel:+9170040XXXXX"
              className="w-full md:w-auto bg-red-600 text-white px-10 py-6 font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-red-900/40 hover:bg-red-500 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <Phone size={18} fill="currentColor" /> Call Emergency
            </Link>

            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
              Average Response: &lt; 15 Minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
