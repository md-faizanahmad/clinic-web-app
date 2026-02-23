// components/HeroContent.tsx
import Link from "next/link";
import { CalendarCheck, ChevronRight, Activity } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
      <div className="max-w-3xl space-y-6">
        {/* Animated Badge (CSS only) */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-top-4 duration-700">
          <Activity size={14} className="text-secondary" />
          Bihar&apos;s Trusted Medical Center
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
          Your Health, <br />
          <span className="text-primary italic">Our Priority.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl font-medium animate-in fade-in slide-in-from-left-8 duration-1000 delay-500">
          Providing advanced multi-specialty care and 24/7 emergency response in
          the heart of Patna.
        </p>

        <div className="flex flex-wrap gap-4 pt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          <Link
            href="/book"
            className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <CalendarCheck size={18} />
            Book Appointment
          </Link>

          <Link
            href="/services"
            className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            Our Departments
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
