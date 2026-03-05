"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  GraduationCap,
  Building2,
  Medal,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutClinic() {
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000", // Modern Lobby
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000", // Operation Theater
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000", // Consultation Room
  ];

  const highlights = [
    {
      title: "AIIMS Certified",
      text: "Global standard expertise.",
      icon: <GraduationCap size={18} />,
    },
    {
      title: "Digital Facility",
      text: "Tech-enabled recovery.",
      icon: <Building2 size={18} />,
    },
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Compact Auto-Slider Gallery */}
        <div className="relative w-full lg:w-112.5 shrink-0">
          <div className="relative aspect-square cursor-pointer md:aspect-4/5 overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImg]}
                  alt="Clinic Gallery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gallery Progress Overlay */}
            <div className="absolute bottom-6 left-6 flex gap-2 z-10">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${currentImg === i ? "w-8 bg-white" : "w-2 bg-white/40"}`}
                />
              ))}
            </div>
          </div>

          {/* Floating Trust Badge */}
          <div className="absolute -top-4 -right-4 bg-sky-700 text-white p-5 rounded-4xl shadow-xl animate-pulse hidden md:block">
            <Medal size={24} />
          </div>
        </div>

        {/* Right: Sharp Medical Narrative */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-100 px-3 py-1 rounded-full">
              <ShieldCheck size={12} className="text-sky-700" />
              <span className="text-sky-700 text-[9px] font-black uppercase tracking-widest">
                Established 2016 • Patna HQ
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic">
              Bihar&apos;s Center for <br />
              <span className="text-sky-700 not-italic">
                Clinical Precision.
              </span>
            </h2>

            <p className="text-slate-500 text-sm md:text-base font-bold uppercase leading-relaxed max-w-lg">
              We provide world-class medical infrastructure in Bihar,
              eliminating the need for patients to travel out of state for
              advanced surgery and diagnostics.
            </p>
          </div>

          {/* Compact Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 border border-slate-100 rounded-4xl group hover:border-sky-700/30 transition-all"
              >
                <div className="text-sky-700 mb-3 bg-sky-50 w-fit p-2 rounded-xl group-hover:bg-sky-700 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-sky-700">
                <Image
                  src="https://i.pravatar.cc/100?img=11"
                  alt="CMO"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-900 uppercase leading-none">
                  Dr. Aryan Sharma
                </p>
                <p className="text-[8px] text-sky-700 font-black uppercase tracking-widest mt-1">
                  Chief Surgeon
                </p>
              </div>
            </div>
            <button className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-sky-700 transition-colors ml-auto">
              Read Story <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
