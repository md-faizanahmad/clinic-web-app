// components/HeroTrustCard.tsx
import Image from "next/image";
import { Activity, Zap, Clock, TrendingUp } from "lucide-react";

export default function HeroTrustCard() {
  const avatars = [
    "https://i.pravatar.cc/100?img=11",
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=13",
  ];

  const badges = [
    { text: "Telehealth", icon: <Activity size={10} /> },
    { text: "24/7 Support", icon: <Clock size={10} /> },
    { text: "Instant Pay", icon: <Zap size={10} /> },
  ];

  return (
    <div className="absolute bottom-8 right-6 md:right-20 z-30 max-w-60 select-none">
      <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-4 rounded-4xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] animate-in fade-in zoom-in slide-in-from-right-8 duration-1000">
        {/* Success Metric - Smaller & Cleaner */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex -space-x-2.5">
            {avatars.map((url, i) => (
              <div
                key={i}
                className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm"
              >
                <Image
                  src={url}
                  alt="User"
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

          <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-1 rounded-full animate-in fade-in slide-in-from-left-4 duration-700 delay-1000">
            <TrendingUp size={10} className="text-green-600" />
            <span className="text-[10px] font-black text-green-700">99.2%</span>
          </div>
        </div>

        {/* Small Pill List - Now Horizontal & Animated */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {badges.map((badge, i) => (
            <div
              key={badge.text}
              className="flex items-center gap-1.5 bg-white/80 border border-slate-100 px-2.5 py-1 rounded-full shadow-sm animate-in fade-in zoom-in fill-mode-both"
              style={{ animationDelay: `${1200 + i * 150}ms` }}
            >
              <div className="text-primary">{badge.icon}</div>
              <span className="text-[9px] font-bold text-slate-700 whitespace-nowrap uppercase tracking-tighter">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* Footer info - Reasonable & Compact */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100/50">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-900 uppercase tracking-tight">
              Verified Clinic
            </span>
            <span className="text-[8px] text-black font-bold uppercase tracking-widest">
              Patna HQ
            </span>
          </div>
          <div className="flex gap-1">
            {[0, 150, 300].map((delay) => (
              <div
                key={delay}
                className="w-1 h-1 rounded-full bg-primary/40 animate-pulse"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
