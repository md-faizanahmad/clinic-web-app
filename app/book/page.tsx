"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  ChevronRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

type Step = "DATETIME" | "VALIDATING" | "DETAILS" | "SUCCESS";

export default function BookingManager() {
  const [step, setStep] = useState<Step>("DATETIME");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  const nextStep = () => {
    setStep("VALIDATING");
    setTimeout(() => setStep("DETAILS"), 1500); // Simulated availability check
  };

  return (
    <div className="w-full mt-8 max-w-2xl mx-auto p-8 mb-15 border border-slate-100 shadow-2xl overflow-hidden">
      {/* Progress Header */}
      <div className="bg-slate-50 border-b border-slate-100 px-8 py-4 flex justify-between items-center">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700">
          {step === "DATETIME" && "Step 01: Schedule"}
          {step === "DETAILS" && "Step 02: Patient Info"}
          {step === "SUCCESS" && "Confirmed"}
        </span>
        {step !== "SUCCESS" && (
          <div className="flex gap-1">
            <div
              className={`h-1 w-6 ${step === "DATETIME" || step === "VALIDATING" ? "bg-sky-700" : "bg-slate-200"}`}
            />
            <div
              className={`h-1 w-6 ${step === "DETAILS" ? "bg-sky-700" : "bg-slate-200"}`}
            />
          </div>
        )}
      </div>

      <div className="p-8 md:p-12 min-h-112.5 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* STEP 1: DATE & TIME */}
          {step === "DATETIME" && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-xs font-black uppercase text-slate-900 tracking-widest">
                  <Calendar size={14} className="text-sky-700" /> Select Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full bg-slate-50 border border-slate-100 p-5 text-sm font-black uppercase outline-none focus:ring-2 focus:ring-sky-700/10 transition-all"
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-2 text-xs font-black uppercase text-slate-900 tracking-widest">
                  <Clock size={14} className="text-sky-700" /> Select Slot (9AM
                  - 9PM)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "09:00 AM",
                    "11:30 AM",
                    "02:00 PM",
                    "04:30 PM",
                    "07:00 PM",
                    "08:30 PM",
                  ].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: t })}
                      className={`py-4 text-[10px] font-black border transition-all ${formData.time === t ? "bg-sky-700 text-white border-sky-700" : "bg-white border-slate-100 text-slate-400 hover:border-sky-700"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={!formData.date || !formData.time}
                onClick={nextStep}
                className="w-full bg-slate-950 text-white py-6 font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-2 disabled:opacity-20 hover:bg-sky-700 transition-colors"
              >
                Check Availability <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {/* STEP 2: LOADING */}
          {step === "VALIDATING" && (
            <motion.div
              key="load"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 py-10 text-center"
            >
              <Loader2 size={48} className="text-sky-700 animate-spin" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Verifying Slot Availability...
              </p>
            </motion.div>
          )}

          {/* STEP 3: PATIENT DETAILS */}
          {step === "DETAILS" && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-sky-50 p-6 border-l-4 border-sky-700 mb-8">
                <p className="text-[10px] font-black text-sky-700 uppercase">
                  Selected Appointment
                </p>
                <h4 className="text-lg font-black text-slate-900 uppercase italic mt-1">
                  {formData.date} @ {formData.time}
                </h4>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <User
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                    size={16}
                  />
                  <input
                    required
                    placeholder="PATIENT FULL NAME"
                    className="w-full bg-slate-50 border border-slate-100 p-5 pl-14 text-xs font-black uppercase outline-none focus:bg-white focus:ring-2 focus:ring-sky-700/10"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="relative">
                  <Phone
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                    size={16}
                  />
                  <input
                    required
                    type="tel"
                    placeholder="CONTACT NUMBER"
                    className="w-full bg-slate-50 border border-slate-100 p-5 pl-14 text-xs font-black uppercase outline-none focus:bg-white focus:ring-2 focus:ring-sky-700/10"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <button
                onClick={() => setStep("SUCCESS")}
                className="w-full bg-sky-700 text-white py-6 font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-sky-700/20"
              >
                Confirm Request
              </button>
            </motion.div>
          )}

          {/* STEP 4: SUCCESS */}
          {step === "SUCCESS" && (
            <motion.div
              key="step4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 size={40} strokeWidth={2.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-slate-900 uppercase italic">
                  Confirmed.
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-60 mx-auto leading-relaxed">
                  Your request has been logged. Our Patna HQ will call you
                  within 15 minutes to finalize.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
