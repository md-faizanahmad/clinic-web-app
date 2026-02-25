"use client";

import { useState } from "react";
import { CalendarCheck, Plus, X, User, Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- COMPACT FLOATING PILL (Mobile Only) --- */}
      <div className="md:hidden fixed bottom-40 right-4 z-99">
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          whileTap={{ scale: 0.9 }}
          className="bg-sky-700 text-white h-14 w-14 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(5, 93, 151, 0.5)] border border-white/20"
        >
          <CalendarCheck size={24} strokeWidth={2.5} />
          {/* Subtle Notification Dot */}
          <span className="absolute top-0 right-0 h-4 w-4 bg-green-500 border-2 border-white rounded-full animate-pulse" />
        </motion.button>
      </div>

      {/* --- SLIM BOTTOM SHEET MODAL --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-999 flex items-end justify-center px-4 pb-6">
            {/* Minimal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]"
            />

            {/* Compact Modal Card */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 150 }}
              className="relative w-full max-w-[320px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
            >
              {/* Header */}
              <div className="p-6 pb-0 flex items-center justify-between">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <Plus size={20} />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-slate-50 text-slate-400 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div className="text-center space-y-1">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight leading-none uppercase italic">
                    Book Slot
                  </h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    We&apos;ll call you in 5 mins
                  </p>
                </div>

                <form
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                  }}
                >
                  <div className="relative group">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={14}
                    />
                    <input
                      required
                      type="text"
                      placeholder="NAME"
                      className="w-full bg-slate-50 border border-slate-100 p-4 pl-10 rounded-2xl text-[10px] font-black focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none uppercase tracking-widest transition-all"
                    />
                  </div>

                  <div className="relative group">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={14}
                    />
                    <input
                      required
                      type="tel"
                      placeholder="PHONE"
                      className="w-full bg-slate-50 border border-slate-100 p-4 pl-10 rounded-2xl text-[10px] font-black focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none uppercase tracking-widest transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-all mt-2"
                  >
                    Confirm Request
                    <Send size={14} />
                  </button>
                </form>

                <div className="flex justify-center items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                    Patna HQ Verified
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
