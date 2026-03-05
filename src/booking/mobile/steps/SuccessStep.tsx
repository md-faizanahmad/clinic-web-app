import { CheckCircle2 } from "lucide-react";
import { JSX } from "react";

type Props = {
  selectedTime: string;
  onClose: () => void;
};

export default function SuccessStep({
  selectedTime,
  onClose,
}: Props): JSX.Element {
  return (
    <div className="h-87.5 flex flex-col items-center justify-center text-center space-y-6">
      <div className="bg-green-500 p-4 text-white">
        <CheckCircle2 size={40} />
      </div>

      <div>
        <h3 className="text-2xl font-black text-slate-900 italic uppercase">
          Confirmed!
        </h3>

        <p className="text-xs font-medium text-slate-500 mt-2 max-w-50 mx-auto uppercase">
          Your request for {selectedTime} has been received. Our team will call
          you shortly.
        </p>
      </div>

      <button
        onClick={onClose}
        className="px-10 py-3 border-2 border-slate-900 text-xs font-black uppercase"
      >
        Close
      </button>
    </div>
  );
}
