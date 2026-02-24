// components/EmergencyBanner.tsx
import { PhoneCall, AlertCircle, Clock, ArrowRight } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <section className="w-full bg-red-600 relative overflow-hidden group">
      {/* Background Decorative Element (Medical Cross) */}
      <div className="absolute right-0 top-0 h-full opacity-10 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
        <AlertCircle size={120} className="text-white -mr-10 -mt-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span className="text-white text-sm md:text-base font-black uppercase tracking-tighter">
              24/7 Emergency Services Available
            </span>
            <div className="hidden md:block h-4 w-px bg-white/30" />
            <span className="flex items-center gap-1.5 text-red-100 text-[10px] font-bold uppercase tracking-widest">
              <Clock size={12} /> Trauma Center Active
            </span>
          </div>
        </div>

        {/* Right Side: Call Action */}
        <a
          href="tel:102"
          className="w-full md:w-auto bg-white text-red-600 px-6 py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-3 shadow-xl hover:bg-red-50 transition-all active:scale-95 group/btn"
        >
          <PhoneCall size={18} fill="currentColor" className="animate-bounce" />
          CALL 102
          <ArrowRight
            size={16}
            className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
          />
        </a>
      </div>
    </section>
  );
}
