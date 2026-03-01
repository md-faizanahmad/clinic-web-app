"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  X,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    // Auto-hide success modal after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* 1. HERO HEADER */}
      <section className="px-6 py-12 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-sky-700" />
              <span className="text-sky-700 text-[9px] font-black uppercase tracking-[0.3em]">
                24/7 Response Center
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9]">
              Get In <br />
              <span className="text-sky-700 not-italic">Touch.</span>
            </h1>
          </div>
          <p className="max-w-xs text-slate-500 text-sm font-bold uppercase leading-relaxed tracking-tight">
            Direct access to our Patna medical team. For emergencies, please use
            the priority call line.
          </p>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Communication Channels */}
        <div className="lg:col-span-5 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {/* Call Line */}
            <div className="group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                Emergency Line
              </p>
              <a
                href="tel:+9170040XXXXX"
                className="flex items-center gap-4 group"
              >
                <div className="bg-sky-700 text-white p-4 rounded-none group-hover:bg-slate-900 transition-colors">
                  <Phone size={24} />
                </div>
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                  +91 70040 XXXXX
                </span>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                Chat Support
              </p>
              <a
                href="https://wa.me/9170040XXXXX"
                className="flex items-center gap-4"
              >
                <div className="bg-[#25D366] text-white p-4 rounded-none group-hover:bg-slate-900 transition-colors">
                  <MessageCircle size={24} fill="currentColor" />
                </div>
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                  WhatsApp Live
                </span>
              </a>
            </div>
          </div>

          <div className="space-y-6 pt-12 border-t border-slate-100">
            <div className="flex gap-4">
              <MapPin className="text-sky-700 shrink-0" size={20} />
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Clinic Location
                </p>
                <p className="text-sm font-bold text-slate-900 mt-1 uppercase">
                  Bailey Road, Near XYZ Landmark, Patna, Bihar
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-sky-700 shrink-0" size={20} />
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  OPD Hours
                </p>
                <p className="text-sm font-bold text-slate-900 mt-1 uppercase">
                  Mon — Sun: 09:00 AM — 09:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Modern Inquiry Form */}
        <div className="lg:col-span-7 relative">
          <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 relative overflow-hidden">
            {/* Subtle Watermark */}
            <Stethoscope
              size={200}
              className="absolute -right-10 -bottom-10 text-slate-200/50 -rotate-12 pointer-events-none"
            />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                    Patient Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white border border-slate-200 p-4 text-xs font-black uppercase outline-none focus:border-sky-700 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-white border border-slate-200 p-4 text-xs font-black uppercase outline-none focus:border-sky-700 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                  Message / Symptoms
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white border border-slate-200 p-4 text-xs font-black uppercase outline-none focus:border-sky-700 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-6 font-black text-xs uppercase tracking-[0.3em] hover:bg-sky-700 transition-all flex items-center justify-center gap-3 group"
              >
                Send Inquiry
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- SUCCESS MODAL --- */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white max-w-sm w-full p-10 text-center shadow-2xl relative"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"
              >
                <X size={20} />
              </button>
              <div className="w-20 h-20 bg-sky-50 text-sky-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
                Message Sent.
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 leading-relaxed">
                Our medical coordinator will review your inquiry and contact you
                within 15 minutes.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
