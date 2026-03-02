"use client";

import Image from "next/image";
import { GraduationCap, Award, CalendarCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function DoctorTeam() {
  const doctors = [
    {
      name: "Dr. Anya Singh",
      role: "Chief Cardiologist",
      qual: "MD, AIIMS New Delhi",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000",
      exp: "12+ Yrs",
    },
    {
      name: "Dr. Rohan Kumar",
      role: "Senior Pediatrician",
      qual: "MBBS, MRCPCH London",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000",
      exp: "10+ Yrs",
    },
    {
      name: "Dr. Sanjay Gupta",
      role: "Neurologist",
      qual: "DM Neurology, NIMHANS",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000",
      exp: "15+ Yrs",
    },
  ];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Sharp & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-sky-700" />
              <span className="text-sky-700 text-[10px] font-black uppercase tracking-[0.3em]">
                Verified Clinical Experts
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.85]">
              Expert <br />
              <span className="text-sky-700 not-italic">Hands.</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-400 text-[11px] font-bold uppercase leading-relaxed tracking-tight border-l-2 border-slate-100 pl-4">
            Specialists from AIIMS & NIMHANS providing the highest tier of
            medical care in Patna.
          </p>
        </div>

        {/* Doctor Grid - Mobile: Snap Slide | Desktop: Circular Hover */}
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="shrink-0 w-65 md:w-full snap-center group relative flex flex-col items-center"
            >
              {/* 1. THE CIRCULAR AVATAR */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-slate-50 shadow-2xl transition-all duration-500 group-hover:scale-90 group-hover:-translate-y-5">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  sizes="300px"
                />
                {/* Subtle Radial Gradient Overlay */}
                <div className="absolute inset-0 bg-radial-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* 2. HOVER DETAILS CARD */}
              <div className="-mt-8 w-full max-w-60 bg-white border border-slate-100 p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:-translate-y-1.25 transition-all duration-500 shadow-xl relative z-10 text-center">
                {/* Header: More compact spacing */}
                <div className="mb-3">
                  <h3 className="text-sm font-black text-slate-900 tracking-tight uppercase italic leading-tight">
                    {doc.name}
                  </h3>
                  <p className="text-[10px] font-bold text-sky-700 uppercase tracking-wider">
                    {doc.role}
                  </p>
                </div>

                {/* Stats Row: Reduced vertical padding */}
                <div className="flex items-center justify-around mb-3 border-y border-slate-50 py-2">
                  <div className="flex items-center gap-1.5">
                    <Award size={12} className="text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-900 uppercase">
                      {doc.exp}
                    </span>
                  </div>
                  <div className="h-3 w-px bg-slate-100" />
                  <div className="flex items-center gap-1.5 max-w-[50%]">
                    <GraduationCap size={12} className="text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-900 uppercase truncate">
                      {doc.qual.split(",")[0]}
                    </span>
                  </div>
                </div>

                {/* Button: Shorter padding, medium-small text */}
                <Link
                  href="/book"
                  className="w-full py-2.5 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-sky-700 transition-colors"
                >
                  <CalendarCheck size={12} />
                  Book Now
                </Link>
              </div>

              {/* Status Indicator (Always visible on mobile) */}
              <div className="absolute top-4 right-10 md:right-16 bg-white shadow-lg p-2 rounded-full z-20 border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
