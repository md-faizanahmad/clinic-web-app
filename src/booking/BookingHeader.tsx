import { Steps } from "./types/booking";

export default function BookingHeader({ step }: { step: Steps }) {
  return (
    <div className="bg-slate-50 border-b border-slate-100 px-8 py-4 flex justify-between items-center">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700">
        {step === "DATETIME" && "Step 01: Schedule"}
        {step === "DETAILS" && "Step 02: Patient Info"}
        {step === "SUCCESS" && "Confirmed"}
      </span>

      {step !== "SUCCESS" && (
        <div className="flex gap-1">
          <div
            className={`h-1 w-6 ${
              step === "DATETIME" || step === "VALIDATING"
                ? "bg-sky-700"
                : "bg-slate-200"
            }`}
          />
          <div
            className={`h-1 w-6 ${
              step === "DETAILS" ? "bg-sky-700" : "bg-slate-200"
            }`}
          />
        </div>
      )}
    </div>
  );
}
