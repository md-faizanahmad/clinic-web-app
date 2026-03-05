import { Loader2 } from "lucide-react";
import { JSX } from "react";

export default function LoadingStep(): JSX.Element {
  return (
    <div className="h-75 flex flex-col items-center justify-center space-y-4">
      <Loader2 size={40} className="text-sky-700 animate-spin" />

      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
        Checking Availability...
      </p>
    </div>
  );
}
