"use client";

import Image from "next/image";
import {
  Activity,
  Clock,
  TrendingUp,
  ShieldCheck,
  FileText,
} from "lucide-react";

export default function HeroTrustCard() {
  // Using high-quality Indian representative portraits
  const avatars = [
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop", // Indian Male
    "https://images.unsplash.com/photo-1594185230677-50a62f1c817d?q=80&w=100&auto=format&fit=crop", // Indian Female
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop", // Professional Male
  ];

  const badges = [
    { text: "Telehealth", sub: "Live Now", icon: <Activity size={12} /> },
    { text: "24/7 Support", sub: "Emergency", icon: <Clock size={12} /> },
    { text: "Ayushman", sub: "Accepted", icon: <ShieldCheck size={12} /> },
    { text: "E-Records", sub: "Safe Storage", icon: <FileText size={12} /> },
  ];

  return (
    <div className="absolute bottom-28 md:bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 z-30 w-[220px] md:w-[240px] select-none animate-in fade-in zoom-in duration-1000">
      <div className="bg-white/80 backdrop-blur-2xl border border-white/50 p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
        {/* Success Metric - Premium Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex -space-x-2.5">
            {avatars.map((url, i) => (
              <div
                key={i}
                className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm"
              >
                <Image
                  src={url}
                  alt="Patient"
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="relative w-7 h-7 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[8px] font-black text-white">
              +5k
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
            <TrendingUp size={10} className="text-green-600" />
            <span className="text-[10px] font-black text-green-700">99.2%</span>
          </div>
        </div>

        {/* Animated Pill List - Vertical Stack for Better Mobile Fit */}
        <div className="space-y-2">
          {badges.map((badge, i) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 bg-white/50 border border-slate-100 p-2 rounded-2xl transition-all hover:bg-white hover:shadow-sm group overflow-hidden"
              style={{ animationDelay: `${1200 + i * 150}ms` }}
            >
              <div className="text-primary bg-primary/10 p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {badge.icon}
              </div>

              {/* Text Animation: Slides up every 3 seconds */}
              <div className="flex flex-col h-4 overflow-hidden">
                <div className="animate-text-slide flex flex-col">
                  <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight h-4 flex items-center">
                    {badge.text}
                  </span>
                  <span className="text-[9px] font-bold text-primary uppercase tracking-tighter h-4 flex items-center">
                    {badge.sub}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Signature Footer */}
        <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-900 uppercase tracking-tighter">
              Verified Clinic
            </span>
            <span className="text-[8px] text-primary/70 font-bold uppercase tracking-widest leading-none mt-1">
              Patna, Bihar
            </span>
          </div>
          <div className="flex gap-1.5 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/40 animate-pulse delay-150" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes text-slide {
          0%,
          30% {
            transform: translateY(0);
          }
          50%,
          80% {
            transform: translateY(-1rem);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-text-slide {
          animation: text-slide 5s infinite cubic-bezier(0.65, 0, 0.35, 1);
        }
      `}</style>
    </div>
  );
}
