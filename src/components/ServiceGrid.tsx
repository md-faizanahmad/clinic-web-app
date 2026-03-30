"use client";

import Image from "next/image";
import {
  HeartPulse,
  Stethoscope,
  Baby,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function ServiceGrid() {
  const services = [
    {
      title: "Cardiology",
      desc: "Advanced heart diagnostics and care.",
      icon: <HeartPulse size={24} />,
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1000",
      href: "/services/cardiology",
    },
    {
      title: "Diagnostics",
      desc: "Instant lab reports & digital X-Ray.",
      icon: <Activity size={24} />,
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1000",
      href: "/services/diagnostics",
    },
    {
      title: "Pediatrics",
      desc: "Expert care for your child's health.",
      icon: <Baby size={24} />,
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000",
      href: "/services/pediatrics",
    },
    {
      title: "General Care",
      desc: "Routine checkups & management.",
      icon: <Stethoscope size={24} />,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000",
      href: "/services/general",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-0 md:px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header - Padding added for mobile swipe visibility */}
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Medical <span className="text-sky-700">Scope.</span>
          </h2>
        </div>

        {/* MOBILE: Horizontal Slide (Snap-center)
          DESKTOP: Static Flex Row
        */}
        <div className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex md:flex-row gap-5 px-6 md:px-0 md:justify-center">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative md:w-55 md:h-75 aspect-4/5 shrink-0 w-280px md:w-220px h-380px md:h-320px rounded-[3rem] overflow-hidden  snap-center transition-all duration-500 md:hover:-translate-y-2 active:scale-95"
            >
              {/* 1. Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 280px, 220px"
                  className="object-cover md:group-hover:scale-110 transition-transform duration-700 "
                />
                {/* Overlay logic: Always visible on mobile, Hover-only on Desktop */}
                <div className="absolute inset-0 bg-slate-950/70 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* 2. Content Layer */}
              <div className="relative z-20 h-full p-8 md:p-6 flex flex-col justify-between">
                {/* Icon Wrapper */}
                <div className="bg-white/10 backdrop-blur-xl w-14 h-14 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-white border border-white/20">
                  {service.icon}
                </div>

                {/* Details logic: Animated on Desktop, Static on Mobile */}
                <div className="space-y-2 md:transform md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-100 mobile-details-visible">
                  <h3 className="text-xl md:text-lg font-black text-white leading-none uppercase italic">
                    {service.title}
                  </h3>
                  <p className="text-[11px] md:text-[10px] text-slate-300 font-bold uppercase leading-tight tracking-wide">
                    {service.desc}
                  </p>
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 bg-sky-700 text-white p-2.5 rounded-xl shadow-lg">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Swipe Indicator (Mobile Only) */}
        <div className="flex md:hidden gap-1.5 mt-8">
          {services.map((_, i) => (
            <div
              key={i}
              className="h-1 w-4 rounded-full bg-slate-200 first:bg-sky-700"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar hiding */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Force details visibility for mobile */
        @media (max-width: 767px) {
          .mobile-details-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </section>
  );
}
