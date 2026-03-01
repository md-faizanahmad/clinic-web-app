"use client";
import { Award, Users, UserCheck, Clock } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    { value: "10+ Yrs", label: "Exp.", icon: <Award size={18} /> },
    { value: "5k+", label: "Patients", icon: <Users size={18} /> },
    { value: "Best", label: "Doctors", icon: <UserCheck size={18} /> },
    { value: "24/7", label: "Urgent", icon: <Clock size={18} /> },
  ];

  return (
    <section className="w-full  border-y border-slate-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center">
        {/* 4-Column Grid: Fixed on Mobile, No Scroll */}
        <div className="grid grid-cols-4 md:flex md:flex-row items-center justify-between w-full">
          {indicators.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 group border-r border-slate-50 last:border-none md:border-none"
            >
              {/* Animated Icon Wrapper - Now Larger */}
              <div className="text-primary bg-primary/5 p-2 md:p-2.5 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-primary/5">
                {item.icon}
              </div>

              {/* Text Animation Container - Height increased to prevent clipping */}
              <div className="relative h-4 w-full flex justify-center overflow-hidden">
                <div className="flex flex-col items-center animate-trust-slide md:animate-none">
                  {/* State 1: Value */}
                  <span className="text-[10px] md:text-sm font-black text-slate-900 uppercase tracking-tight md:tracking-widest whitespace-nowrap h-4 flex items-center">
                    {item.value}
                  </span>
                  {/* State 2: Label */}
                  <span className="text-[10px] md:text-sm font-black text-primary uppercase tracking-tight md:tracking-widest whitespace-nowrap h-4 flex items-center">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Desktop Vertical Divider */}
              {i !== indicators.length - 1 && (
                <div className="hidden md:block h-8 w-px bg-slate-200/60 ml-8" />
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
            transform: translateY(-1rem);
          } /* Using rem for better scaling */
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
