// components/HeroContent.tsx
import Link from "next/link";
import { CalendarCheck, Activity, Sparkles, Phone } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative mt-4 z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
      <div className="max-w-4xl space-y-7 md:space-y-4 lg:space-y-4">
        {/* 1. Ultra-Clean Glass Badge */}
        <div className="inline-flex  items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/40 px-4 py-2 rounded-full text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-xl animate-in fade-in zoom-in duration-700 ease-out">
          <Sparkles size={14} className="text-secondary animate-pulse" />
          Bihar&apos;s Leading Digital Clinic
        </div>

        {/* 2. High-Contrast Heading with Reveal Animation */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-[-0.04em] filter drop-shadow-2xl">
            <span className="block animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both">
              Your Health,
            </span>
            <span className="block italic text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-secondary animate-in fade-in slide-in-from-bottom-10 delay-300 duration-1000 fill-mode-both">
              Our Priority.
            </span>
          </h1>
        </div>

        {/* 3. Pure White Description with Blur-In Effect */}
        <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl font-medium filter drop-shadow-md animate-in fade-in blur-in-sm duration-1000 delay-700 fill-mode-both">
          Providing{" "}
          <span className="text-white font-bold border-b-2 border-secondary/50">
            advanced multi-specialty care
          </span>{" "}
          and 24/7 emergency response in the heart of Patna.
        </p>

        {/* 4. Interactive Action Stack */}
        <div className="flex flex-wrap gap-5 pt-4 animate-in fade-in slide-in-from-top-4 duration-1000 delay-900 fill-mode-both">
          <Link
            href="/book"
            className="group bg-white text-slate-950 px-5 py-5 rounded-4xl font-black text-sm shadow-2xl hover:bg-primary hover:text-white transition-all duration-500 active:scale-95 flex items-center justify-center gap-3"
          >
            <CalendarCheck
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
            Book Appointment
          </Link>

          <Link
            href="#"
            className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-4xl font-black text-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Call Now
            <Phone
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* 5. Live Status Indicator (Visual only) */}
        <div className="flex items-center gap-4 pt-8 animate-in fade-in duration-1000 delay-1200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">
              Doctors Online
            </span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-primary" />
            <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">
              Active Response
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
