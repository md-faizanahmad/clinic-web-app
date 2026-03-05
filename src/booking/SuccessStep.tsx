"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SuccessStep() {
  return (
    <motion.div
      key="step4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-10 space-y-6"
    >
      {/* Success Icon */}
      <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
        <CheckCircle2 size={40} strokeWidth={2.5} />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <h3 className="text-3xl font-black text-slate-900 uppercase italic">
          Confirmed.
        </h3>

        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-60 mx-auto leading-relaxed">
          Your appointment request has been submitted successfully. Our team
          will contact you shortly to confirm the booking.
        </p>
      </div>
    </motion.div>
  );
}
