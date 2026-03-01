"use client";

import Image from "next/image";
import {
  GraduationCap,
  Award,
  CalendarCheck,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
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
    <section className="w-full py-16 md:py-24  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header - Industrial & Minimal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-sky-700" />
              <span className="text-sky-700 text-[9px] font-black uppercase tracking-[0.3em]">
                Verified Medical Board
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
              The <span className="text-sky-700">Specialists.</span>
            </h2>
          </div>
          <p className="max-w-60 text-slate-400 text-[10px] font-bold uppercase leading-relaxed tracking-tight">
            Our doctors hold credentials from AIIMS, NIMHANS, and top global
            medical institutions.
          </p>
        </div>

        {/* Doctor Slider/Grid */}
        {/* Mobile: Horizontal Swipe | Desktop: 3-Col Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto overflow-hidden no-scrollbar snap-x snap-mandatory pb-8 md:pb-0">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="shrink-0 w-70 md:w-full snap-center group relative"
            >
              {/* Profile Image with sharp corners (Premium Android/iOS feel) */}
              <div className="relative p-5 aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-100">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 280px, 33vw"
                />

                {/* Glassmorphic Info Overlay */}
                <div className="absolute inset-x-3 bottom-3 bg-white/80 backdrop-blur-xl p-5 rounded-4xl border border-white/50 shadow-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-slate-900 tracking-tighter leading-none uppercase italic">
                        {doc.name}
                      </h3>
                      <p className="text-[10px] font-black text-sky-700 uppercase tracking-widest">
                        {doc.role}
                      </p>
                    </div>
                    <div className="bg-sky-700 text-white p-2 rounded-xl">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-900/5">
                    <div className="flex items-center gap-1.5">
                      <Award size={12} className="text-slate-400" />
                      <span className="text-[9px] font-black text-slate-900 uppercase">
                        {doc.exp}
                      </span>
                    </div>
                    <div className="w-px h-3 bg-slate-200" />
                    <div className="flex items-center gap-1.5">
                      <GraduationCap size={12} className="text-slate-400" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter truncate max-w-25">
                        {doc.qual.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button - Floating behind the card slightly */}
              <Link
                href="/book"
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[80%] py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl hover:bg-sky-700 transition-all opacity-0 group-hover:opacity-100 group-hover:bottom-0 md:group-hover:-bottom-2"
              >
                <CalendarCheck size={14} />
                Book Consult
              </Link>
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
