import { X } from "lucide-react";
import { Step } from "./BookingDock";
import { JSX } from "react";

type Props = {
  step: Step;
  onClose: () => void;
};

export default function DockHeader({ step, onClose }: Props): JSX.Element {
  return (
    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
        {step === "DATETIME" && "Select Slot"}
        {step === "DETAILS" && "Patient Info"}
        {step === "SUCCESS" && "Confirmed"}
      </span>

      <button onClick={onClose} className="p-2">
        <X size={20} />
      </button>
    </div>
  );
}
