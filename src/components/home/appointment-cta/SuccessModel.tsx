import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const SuccessModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-1000 flex items-center justify-center p-6 bg-slate-950/40 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.95, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 10 }}
          className="relative bg-white p-8 max-w-xs w-full text-center border-t-8 border-sky-600"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-black transition-colors"
          >
            <X size={18} />
          </button>
          <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} strokeWidth={2.5} />
          </div>
          <h3 className="text-xl font-black text-slate-950 uppercase italic tracking-tighter">
            Linking...
          </h3>
          <p className="text-slate-500 text-[9px] font-bold uppercase mt-2 tracking-widest leading-tight">
            Connecting you to our <br /> Patna care coordinator.
          </p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SuccessModal;
