"use client";

import { motion } from "framer-motion";
import { User, Phone, Mail } from "lucide-react";
import { BookingFormData, Steps } from "./types/booking";

type Props = {
  formData: BookingFormData;
  setFormData: (data: BookingFormData) => void;
  setStep: (step: Steps) => void;
};

export default function PatientDetailsStep({
  formData,
  setFormData,
  setStep,
}: Props) {
  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Selected Slot */}
      <div className="bg-sky-50 p-6 border-l-4 border-sky-700 mb-8">
        <p className="text-[10px] font-black text-sky-700 uppercase">
          Selected Appointment
        </p>

        <h4 className="text-lg font-black text-slate-900 uppercase italic mt-1">
          {formData.date} @ {formData.time}
        </h4>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        {/* Name */}
        <div className="relative">
          <User
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
            size={16}
          />

          <input
            required
            placeholder="PATIENT FULL NAME"
            className="w-full bg-slate-50 border border-slate-100 p-5 pl-14 text-xs font-black uppercase outline-none focus:bg-white focus:ring-2 focus:ring-sky-700/10"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Phone */}
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
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
            size={16}
          />

          <input
            required
            type="email"
            placeholder="EMAIL ADDRESS"
            className="w-full bg-slate-50 border border-slate-100 p-5 pl-14 text-xs font-black uppercase outline-none focus:bg-white focus:ring-2 focus:ring-sky-700/10"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>

      {/* Submit */}
      <button
        disabled={!formData.name || !formData.phone || !formData.email}
        onClick={() => setStep("SUCCESS")}
        className="w-full bg-sky-700 text-white py-6 font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-sky-700/20 disabled:opacity-30"
      >
        Confirm Request
      </button>
    </motion.div>
  );
}
