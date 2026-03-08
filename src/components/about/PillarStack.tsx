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
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="space-y-20 md:space-y-0 md:h-[220vh]">
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
          md:sticky md:top-24
          transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
          >
            <div
              className="
          relative
          bg-gradient-to-br from-slate-900 to-slate-950
          border border-white/10
          rounded-2xl
          p-8 md:p-12
          shadow-2xl
          backdrop-blur
          max-w-2xl
          mx-auto
        "
            >
              {/* Accent line */}

              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-t-2xl" />

              {/* Icon */}

              <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center mb-6">
                <Icon size={26} className="text-sky-400" />
              </div>

              {/* Title */}

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-md">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
