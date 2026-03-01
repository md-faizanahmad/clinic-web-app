"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Mail,
  CalendarCheck,
  ArrowRight,
  Stethoscope,
  CheckCircle2,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppointmentCTA() {
  const [currentImg, setCurrentImg] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000",
  ];

  // Auto-slide background images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const triggerAction = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="w-full px-4 md:px-6 py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative  overflow-hidden ">
        {/* 1. ANIMATED BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImg}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImg]}
                alt="Clinic Interior"
                fill
                className="object-cover "
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* STETHOSCOPE WATERMARK - Custom Medical Feel */}
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -bottom-20 text-black/5 pointer-events-none"
          >
            <Stethoscope size={600} strokeWidth={0.5} />
          </motion.div>

          {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" /> */}
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-sky-500/10 backdrop-blur-xl border border-sky-500/20 px-4 py-2 text-black text-[10px] font-black uppercase tracking-[0.3em]">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </div>
              Direct Patna HQ Line
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-black leading-[0.9] tracking-tighter uppercase italic">
              Health <br />
              <span className="text-sky-500 not-italic">On Demand.</span>
            </h2>

            <p className="text-black text-lg font-bold uppercase leading-relaxed max-w-md tracking-tight">
              Instant specialist access. No long queues. Just world-class
              medical attention in the heart of Bihar.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <CalendarCheck size={16} className="text-sky-500" />
                <span className="text-[10px] font-black text-black uppercase tracking-widest">
                  24/7 Response
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-sky-500" />
                <span className="text-[10px] font-black text-black uppercase tracking-widest">
                  Instant Booking
                </span>
              </div>
            </div>
          </div>

          {/* 3. ACTION STACK */}
          <div className="flex flex-col gap-4 w-full max-w-sm lg:ml-auto">
            <button
              onClick={triggerAction}
              className="group bg-[#25D366] text-black flex items-center justify-between px-8 py-6 font-black text-xs tracking-widest transition-all hover:bg-[#1eb956] cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <MessageCircle size={22} fill="currentColor" />
                WHATSAPP CONCIERGE
              </div>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            <button
              onClick={triggerAction}
              className="group bg-sky-600 text-black flex items-center justify-between px-8 py-6 font-black text-xs tracking-widest transition-all hover:bg-sky-700 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <Phone size={22} fill="currentColor" />
                ONE-TAP CALL
              </div>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            <button
              onClick={triggerAction}
              className="group bg-white/5 backdrop-blur-md border border-white/10 text-black flex items-center justify-between px-8 py-6 font-black text-xs tracking-widest transition-all hover:bg-white/10 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <Mail size={22} />
                EMAIL INQUIRY
              </div>
              <ArrowRight
                size={20}
                className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
              />
            </button>
          </div>
        </div>
      </div>

      {/* --- TEMPORARY SUCCESS MODAL --- */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-999 flex items-center justify-center p-6"
          >
            <div
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
              onClick={() => setShowSuccess(false)}
            />
            <div className="relative bg-white p-10 max-w-sm w-full text-center shadow-2xl border-t-8 border-sky-600">
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-950"
              >
                <X size={20} />
              </button>
              <div className="w-20 h-20 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-950 tracking-tighter uppercase italic">
                Linking Now.
              </h3>
              <p className="text-slate-500 text-[11px] font-bold uppercase mt-2 tracking-widest leading-relaxed">
                We are opening the secure channel. <br /> Our Patna team is
                standing by.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
