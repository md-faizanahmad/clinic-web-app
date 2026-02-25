"use client";

import { useState, useEffect } from "react";
import { CalendarCheck, Plus, X, User, Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingDock() {
  const [isOpen, setIsOpen] = useState(false);

  // Critical for Mobile: Prevent background scroll and ensure clean state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* --- TRIGGER BUTTON --- */}
      {/* Using arbitrary z-index and explicit bottom positioning for v4 */}
      <div className="md:hidden fixed bottom-40 right-6 z-[999]">
        <motion.button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-sky-700 text-white h-16 w-16 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 cursor-pointer"
        >
          <CalendarCheck size={28} strokeWidth={2.5} />
          <span className="absolute top-0 right-0 h-4 w-4 bg-green-500 border-2 border-white rounded-full animate-pulse" />
        </motion.button>
      </div>

      {/* --- MODAL OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-end justify-center px-4 pb-10">
            {/* Backdrop with higher blur and opacity for v4 compatibility */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md cursor-pointer"
            />

            {/* Compact Modal Card */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-[340px] bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] overflow-hidden border border-slate-100"
            >
              {/* Header */}
              <div className="p-6 pb-2 flex items-center justify-between">
                <div className="bg-sky-100 p-2 rounded-xl text-sky-700">
                  <Plus size={20} />
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-slate-100 text-slate-500 rounded-full active:bg-slate-200 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 pt-2 space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">
                    Request Slot
                  </h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Patna HQ • Instant Call-back
                  </p>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                  }}
                >
                  <div className="space-y-3">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                      <input
                        required
                        type="text"
                        placeholder="NAME"
                        className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-[11px] font-black focus:bg-white focus:ring-2 focus:ring-sky-500/20 outline-none uppercase tracking-widest transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                      <input
                        required
                        type="tel"
                        placeholder="PHONE"
                        className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-[11px] font-black focus:bg-white focus:ring-2 focus:ring-sky-500/20 outline-none uppercase tracking-widest transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-sky-700 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-sky-900/20 flex items-center justify-center gap-3 active:scale-95 transition-all cursor-pointer"
                  >
                    Confirm Request
                    <Send size={16} />
                  </button>
                </form>

                <div className="flex justify-center items-center gap-2 pb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Doctors Online Now
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
