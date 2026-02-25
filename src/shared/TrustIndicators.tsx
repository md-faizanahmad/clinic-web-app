// components/TrustIndicators.tsx
"use client";
import { Award, Users, UserCheck, Clock } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    { value: "10+ Yrs", label: "Exp.", icon: <Award size={14} /> },
    { value: "5k+", label: "Patients", icon: <Users size={14} /> },
    { value: "Best", label: "Doctors", icon: <UserCheck size={14} /> },
    { value: "24/7", label: "Urgent", icon: <Clock size={14} /> },
  ];

  return (
    <section className="w-full bg-white border-y border-slate-100 relative z-20">
      <div className="max-w-7xl mx-auto px-2 md:px-6 h-16 md:h-20 flex items-center">
        {/* 4-Column Grid: Fixed on Mobile, No Scroll */}
        <div className="grid grid-cols-4 md:flex md:flex-row items-center justify-between w-full">
          {indicators.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 group border-r border-slate-50 last:border-none md:border-none"
            >
              {/* Animated Icon Wrapper */}
              <div className="text-primary bg-primary/5 p-1.5 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              {/* Text Animation Container */}
              <div className="relative h-3 w-full flex justify-center overflow-hidden">
                <div className="flex flex-col items-center animate-trust-slide md:animate-none">
                  {/* State 1: Value */}
                  <span className="text-[8px] md:text-xs font-black text-slate-900 uppercase tracking-tighter whitespace-nowrap h-3">
                    {item.value}
                  </span>
                  {/* State 2: Label (Switches every few seconds) */}
                  <span className="text-[8px] md:text-xs font-black text-primary uppercase tracking-tighter whitespace-nowrap h-3">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Desktop Vertical Divider */}
              {i !== indicators.length - 1 && (
                <div className="hidden md:block h-6 w-px bg-slate-100 ml-8" />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes trustSlide {
          0%,
          20% {
            transform: translateY(0);
          }
          30%,
          50% {
            transform: translateY(-12px);
          }
          60%,
          80% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-trust-slide {
          animation: trustSlide 6s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
