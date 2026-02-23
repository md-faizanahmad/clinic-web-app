// components/VideoHero.tsx
import React from "react";
import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";

interface VideoHeroProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function VideoHero({
  title = "Your Health, Our Mission in Bihar.",
  subtitle = "Providing advanced medical care with compassion, right in the heart of Patna.",
  videoSrc = "/videos/clinic-hero.mp4",
  ctaText = "Book Online",
  ctaHref = "/book",
}: VideoHeroProps) {
  return (
    <section className="relative w-full h-[60vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover opacity-60"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Professional Gradient Overlay (Ensures text readability) */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

      {/* 3. Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Now Open 24/7
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-medium">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={ctaHref}
              className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <CalendarDays size={18} />
              {ctaText}
            </Link>

            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              View Services
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Bottom Scroll Indicator (Desktop Only) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
