"use client";

import { useState, useEffect } from "react";
import {
  CalendarCheck,
  X,
  User,
  Phone,
  Send,
  ChevronRight,
  Calendar as CalIcon,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step = "DATETIME" | "LOADING" | "DETAILS" | "SUCCESS";

export default function BookingDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("DATETIME");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Logic for dates (Current + 30 days)
  const dates = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toISOString().split("T")[0];
  });

  const times = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "01:30 PM",
    "04:00 PM",
    "05:30 PM",
    "07:00 PM",
    "08:30 PM",
  ];

  const handleDateTimeSubmit = () => {
    if (!selectedDate || !selectedTime) return;
    setStep("LOADING");
    setTimeout(() => setStep("DETAILS"), 1500);
  };

  useEffect(() => {
    if (!isOpen) {
      setStep("DATETIME");
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <>
      {/* --- TRIGGER BUTTON --- */}
      <div className="md:hidden fixed bottom-40 right-6 z-999">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-sky-700 rounded-full text-white h-10 w-10 flex items-center justify-center shadow-2xl border border-white/10 active:scale-90 transition-transform"
        >
          <CalendarCheck size={28} />
        </button>
      </div>

      {/* --- MODAL SYSTEM --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-9999 flex items-end justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden min-h-[500px] flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  {step === "DATETIME" && "Select Slot"}
                  {step === "DETAILS" && "Patient Info"}
                  {step === "SUCCESS" && "Confirmed"}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-900"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {/* STEP 1: DATE & TIME */}
                  {step === "DATETIME" && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-3">
                        <label className="flex items-center gap-2 text-xs font-black uppercase text-slate-900">
                          <CalIcon size={14} /> Preferred Date
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {dates.slice(0, 9).map((date) => (
                            <button
                              key={date}
                              onClick={() => setSelectedDate(date)}
                              className={`py-3 text-[10px] font-bold border transition-all ${
                                selectedDate === date
                                  ? "bg-sky-700 text-white border-sky-700"
                                  : "bg-slate-50 border-slate-100 text-slate-600"
                              }`}
                            >
                              {new Date(date).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                              })}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="flex items-center gap-2 text-xs font-black uppercase text-slate-900">
                          <Clock size={14} /> Available Time
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {times.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`py-3 text-[10px] font-bold border transition-all ${
                                selectedTime === time
                                  ? "bg-sky-700 text-white border-sky-700"
                                  : "bg-slate-50 border-slate-100 text-slate-600"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={handleDateTimeSubmit}
                        disabled={!selectedDate || !selectedTime}
                        className="w-full bg-slate-900 text-white py-5 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-30"
                      >
                        Next Step <ChevronRight size={16} />
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 2: LOADING */}
                  {step === "LOADING" && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-[300px] flex flex-col items-center justify-center space-y-4"
                    >
                      <Loader2
                        size={40}
                        className="text-sky-700 animate-spin"
                      />
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Checking Availability...
                      </p>
                    </motion.div>
                  )}

                  {/* STEP 3: DETAILS FORM */}
                  {step === "DETAILS" && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="bg-slate-50 p-4 border-l-4 border-sky-700">
                        <p className="text-[10px] font-black text-slate-400 uppercase leading-none">
                          Selected Slot
                        </p>
                        <p className="text-sm font-bold text-slate-900 mt-1 uppercase">
                          {new Date(selectedDate).toDateString()} @{" "}
                          {selectedTime}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="relative">
                          <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                            size={16}
                          />
                          <input
                            required
                            type="text"
                            placeholder="PATIENT FULL NAME"
                            className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 text-[11px] font-black outline-none uppercase"
                          />
                        </div>
                        <div className="relative">
                          <Phone
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                            size={16}
                          />
                          <input
                            required
                            type="tel"
                            placeholder="CONTACT NUMBER"
                            className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 text-[11px] font-black outline-none uppercase"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => setStep("SUCCESS")}
                        className="w-full bg-sky-700 text-white py-5 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        Confirm Booking <Send size={16} />
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 4: SUCCESS */}
                  {step === "SUCCESS" && (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="h-[350px] flex flex-col items-center justify-center text-center space-y-6"
                    >
                      <div className="bg-green-500 p-4 text-white">
                        <CheckCircle2 size={40} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 italic uppercase">
                          Confirmed!
                        </h3>
                        <p className="text-xs font-medium text-slate-500 mt-2 max-w-[200px] mx-auto uppercase">
                          Your request for {selectedTime} has been received. Our
                          team will call you shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="px-10 py-3 border-2 border-slate-900 text-xs font-black uppercase"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
