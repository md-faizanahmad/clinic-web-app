"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Stethoscope, MapPin } from "lucide-react";

type PillarIconName = "target" | "stethoscope" | "map";

type Pillar = {
  title: string;
  desc: string;
  icon: PillarIconName;
};

type Props = {
  pillars: Pillar[];
};

const iconMap: Record<
  PillarIconName,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  target: Target,
  stethoscope: Stethoscope,
  map: MapPin,
};

export default function PillarStack({ pillars }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const cards =
      containerRef.current?.querySelectorAll<HTMLDivElement>(".pillar-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index],
            );
          }
        });
      },
      { threshold: 0.25 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="space-y-12 md:space-y-0 md:h-[240vh] py-10"
    >
      {pillars.map((item, index) => {
        const Icon = iconMap[item.icon];
        const isVisible = visibleCards.includes(index);

        return (
          <div
            key={item.title}
            data-index={index}
            style={{ zIndex: pillars.length - index }}
            className={`
              pillar-card
              md:sticky md:top-32
              transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}
            `}
          >
            <div className="relative max-w-3xl mx-auto px-6">
              {/* Main Card: Sharp, Industrial Medical Design */}
              <div className="bg-slate-950 border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-8 md:p-16 relative overflow-hidden">
                {/* 1. Subtle Background Index Number */}
                <span className="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/5 pointer-events-none select-none italic">
                  0{index + 1}
                </span>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-start">
                  {/* 2. Professional Icon Wrapper */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                      <Icon size={28} className="text-sky-500" />
                    </div>
                  </div>

                  {/* 3. Narrative Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-px w-8 bg-sky-500" />
                      <span className="text-sky-500 text-[10px] font-black uppercase tracking-[0.3em]">
                        Protocol 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase italic">
                      {item.title.split(" ")[0]} <br />
                      <span className="text-sky-500 not-italic">
                        {item.title.split(" ").slice(1).join(" ")}
                      </span>
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base font-bold uppercase leading-relaxed tracking-tight max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* 4. Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-sky-600 via-sky-400 to-transparent" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
