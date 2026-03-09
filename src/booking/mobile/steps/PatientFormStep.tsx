import { JSX } from "react";
import { Step } from "../BookingDock";
import { User, Phone, Send, Mail } from "lucide-react";

type Props = {
  selectedDate: string;
  selectedTime: string;
  setStep: (step: Step) => void;
};

export default function PatientFormStep({
  selectedDate,
  selectedTime,
  setStep,
}: Props): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="bg-slate-50 p-4 border-l-4 border-sky-700">
        <p className="text-[10px] font-black text-slate-400 uppercase">
          Selected Slot
        </p>

        <p className="text-sm font-bold text-slate-900 mt-1 uppercase">
          {new Date(selectedDate).toDateString()} @ {selectedTime}
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <User
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
            size={16}
          />
          <input
            type="text"
            placeholder="PATIENT FULL NAME"
            className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 text-[11px] font-black uppercase"
          />
        </div>
        <div className="relative">
          <Phone
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
            size={16}
          />
          <input
            type="tel"
            placeholder="CONTACT NUMBER"
            className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 text-[11px] font-black uppercase"
          />
        </div>{" "}
        <div className="relative">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
            size={16}
          />
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 text-[11px] font-black uppercase"
          />
        </div>
      </div>

      <button
        onClick={() => setStep("SUCCESS")}
        className="w-full bg-sky-700 cursor-pointer text-white py-5 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
      >
        Confirm Booking <Send size={16} />
      </button>
    </div>
  );
}
