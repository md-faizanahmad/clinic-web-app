"use client";

import { PhoneCall, Clock, ArrowRight, Activity } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <section className="w-full bg-red-700 relative overflow-hidden group">
      {/* 1. BACKGROUND VIDEO LAYER - Compact Height maintained */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
        >
          <source src="/videos/ambulance-hero.mp4" type="video/mp4" />
        </video>
        {/* Subtle red overlay to bind video with brand color */}
        <div className="absolute inset-0 bg-red-700/40 mix-blend-multiply" />
      </div>

      {/* 2. BACKGROUND WATERMARK */}
      <div className="absolute right-0 top-0 h-full opacity-10 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
        <Activity size={120} className="text-white -mr-10 -mt-5" />
      </div>

      {/* 3. CONTENT - Optimized for Mobile-First & Desktop Compactness */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Live Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
            <span className="text-white text-xs md:text-sm font-black uppercase tracking-tight italic">
              24/7 Emergency Services Active
            </span>
            <div className="hidden md:block h-3 w-px bg-white/30" />
            <span className="flex items-center gap-1.5 text-red-100 text-[9px] font-bold uppercase tracking-[0.2em]">
              <Clock size={12} strokeWidth={3} /> Patna Trauma HQ
            </span>
          </div>
        </div>

        {/* Right Side: Action Button */}
        <a
          href="tel:102"
          className="w-full md:w-auto bg-white text-red-700 px-6 py-2 rounded-none font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl hover:bg-slate-100 transition-all active:scale-95 group/btn"
        >
          <PhoneCall size={16} fill="currentColor" className="animate-bounce" />
          Call 102
          <ArrowRight
            size={14}
            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          />
        </a>
      </div>
    </section>
  );
}
