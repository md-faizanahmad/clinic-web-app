// components/HeroTrustCard.tsx
import Image from "next/image";
import { Activity, Zap, Clock, TrendingUp, HeartPulse } from "lucide-react";

export default function HeroTrustCard() {
  const avatars = [
    "https://i.pravatar.cc/100?img=11",
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=13",
    "https://i.pravatar.cc/100?img=14",
  ];

  const badges = [
    { text: "Telehealth", icon: <Activity size={12} /> },
    { text: "24/7 Support", icon: <Clock size={12} /> },
    { text: "Instant Pay", icon: <Zap size={12} /> },
  ];

  return (
    /* Positioning: Centered on mobile with fixed width to prevent overflow */
    <div className="absolute bottom-28 md:bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 z-30 w-[90%] max-w-55 md:max-w-60 select-none animate-in fade-in zoom-in duration-1000">
      <div className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 p-4 rounded-[2.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
        {/* BG ICON WATERMARK - Prevents card from looking empty without adding bulk */}
        <HeartPulse
          className="absolute -right-4 -bottom-4 text-primary/5 rotate-12"
          size={120}
        />

        {/* 1. TOP MARQUEE AREA (Patients) */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {avatars.map((url, i) => (
                <div
                  key={i}
                  className="relative w-6 h-6 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image src={url} alt="U" fill className="object-cover" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-black text-slate-900">+5k</span>
          </div>

          <div className="bg-green-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
            <TrendingUp size={10} className="text-green-600" />
            <span className="text-[9px] font-black text-green-700">99%</span>
          </div>
        </div>

        {/* 2. COMPACT BADGE LIST - Stacked on mobile to fix the scroll issue */}
        <div className="space-y-2 relative z-10">
          {badges.map((badge, i) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 bg-white/40 border border-slate-100/50 p-2 rounded-xl animate-in fade-in slide-in-from-right-4 fill-mode-both"
              style={{ animationDelay: `${1000 + i * 150}ms` }}
            >
              <div className="text-primary bg-white p-1.5 rounded-lg shadow-sm">
                {badge.icon}
              </div>
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* 3. FOOTER */}
        <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between relative z-10">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">
              Status
            </span>
            <span className="text-[10px] font-black text-primary uppercase mt-1">
              Live in Patna
            </span>
          </div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/40 animate-pulse delay-75" />
          </div>
        </div>
      </div>
    </div>
  );
}
