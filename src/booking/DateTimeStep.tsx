import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import TimeSlotButton from "./TimeSlotButton";
import { BookingFormData } from "./types/booking";

type Props = {
  formData: BookingFormData;
  setFormData: (data: BookingFormData) => void;
  nextStep: () => void;
};

const slots = [
  "09:00 AM",
  "11:30 AM",
  "02:00 PM",
  "04:30 PM",
  "07:00 PM",
  "08:30 PM",
];

export default function DateTimeStep({
  formData,
  setFormData,
  nextStep,
}: Props) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <label className="flex items-center gap-2 text-xs font-black uppercase text-slate-900 tracking-widest">
          <Calendar size={14} className="text-sky-700" />
          Select Date
        </label>

        <input
          type="date"
          className="w-full bg-slate-50 border border-slate-100 p-5 text-sm font-black uppercase outline-none focus:ring-2 focus:ring-sky-700/10"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>

      <div className="space-y-4">
        <label className="flex items-center gap-2 text-xs font-black uppercase text-slate-900 tracking-widest">
          <Clock size={14} className="text-sky-700" />
          Select Slot
        </label>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {slots.map((t) => (
            <TimeSlotButton
              key={t}
              time={t}
              selected={formData.time === t}
              onSelect={(time) => setFormData({ ...formData, time })}
            />
          ))}
        </div>
      </div>

      <button
        disabled={!formData.date || !formData.time}
        onClick={nextStep}
        className="w-full bg-slate-950 text-white py-6 font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-2 disabled:opacity-20 hover:bg-sky-700"
      >
        Check Availability <ChevronRight size={16} />
      </button>
    </motion.div>
  );
}
