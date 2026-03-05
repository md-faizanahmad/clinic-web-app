import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function ValidatingStep() {
  return (
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
  );
}
