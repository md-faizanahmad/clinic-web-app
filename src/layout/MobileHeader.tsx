// components/MobileHeader.tsx
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { logoUrl } from "../lib/navigations";

export function MobileHeader() {
  return (
    <header className="md:hidden sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md px-4 h-14 flex items-center justify-between border-b border-slate-100">
      <div className="flex items-center gap-2.5">
        <div className="relative w-7 h-7">
          <Image
            src={logoUrl}
            alt="Logo"
            fill
            className="object-contain rounded-full"
          />
        </div>
        <span className="font-black text-base tracking-tighter text-slate-900">
          ClinicCare
        </span>
      </div>
      <a
        href="tel:102"
        className="bg-red-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-black uppercase shadow-sm active:scale-90 transition-transform"
      >
        <PhoneCall size={12} fill="currentColor" />
        Emergency
      </a>
    </header>
  );
}
