// components/HeroTrustCard.tsx
import Image from "next/image";
import { Activity, Zap, Clock, CheckCircle2 } from "lucide-react";

export default function HeroTrustCard() {
  const avatars = [
    "https://i.pravatar.cc/100?img=11",
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=13",
  ];

  const badges = [
    { text: "Telehealth Consults", icon: <Activity size={12} /> },
    { text: "Quick Responses", icon: <Zap size={12} /> },
    { text: "24/7 Clinical Support", icon: <Clock size={12} /> },
  ];

  return (
    <div className="absolute bottom-10 right-6 md:right-12 z-30 max-w-70 animate-in fade-in zoom-in slide-in-from-right-12 duration-1000 delay-1000">
      {/* Light Glassmorphism Container */}
      <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        {/* Success Rate Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex -space-x-3">
            {avatars.map((url, i) => (
              <div
                key={i}
                className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm"
              >
                <Image
                  src={url}
                  alt="Patient"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="relative w-9 h-9 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] font-black text-white shadow-sm">
              +5k
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 text-secondary animate-in fade-in slide-in-from-left-4 duration-700 delay-1200">
              <CheckCircle2
                size={14}
                fill="currentColor"
                className="text-secondary/20"
              />
              <span className="text-sm font-black text-slate-900 tracking-tight">
                99% Success
              </span>
            </div>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">
              Patient Recovery Rate
            </p>
          </div>
        </div>

        {/* Pill Content List with Staggered Animations */}
        <div className="space-y-2.5">
          {badges.map((badge, i) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 bg-slate-900/3 border border-slate-900/5 px-3 py-2 rounded-2xl transition-all hover:bg-white hover:shadow-md hover:scale-[1.02] group cursor-default animate-in fade-in slide-in-from-bottom-3 fill-mode-both"
              style={{ animationDelay: `${1400 + i * 150}ms` }}
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-tight">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* Clinic Signature */}
        <div className="mt-5 pt-4 border-t border-slate-200/60 flex justify-between items-center">
          <span className="text-[10px] font-black text-primary italic uppercase tracking-widest">
            ClinicCare™
          </span>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/40 animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-pulse delay-150" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
