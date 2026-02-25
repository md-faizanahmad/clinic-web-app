// components/DesktopNav.tsx
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarPlus } from "lucide-react";
import { logoUrl, navItems } from "../lib/navigations";

export function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <header className="hidden md:block sticky top-0 z-50 w-full bg-white/45 border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link
          href="/"
          className="relative w-14 h-14 transition-transform active:scale-95"
        >
          <Image
            src={logoUrl}
            alt="Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="rounded-full object-contain"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-xl border border-slate-200/50">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const isEmergency = item.label === "Emergency";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2 rounded-lg text-sm font-black transition-colors relative group
                  ${isEmergency ? "text-red-600" : isActive ? "text-primary" : "text-slate-500 hover:text-slate-900"}`}
              >
                {isActive && !isEmergency && (
                  <motion.div
                    layoutId="desktop-pill"
                    className="absolute inset-0 bg-white shadow-sm border border-slate-200/50 rounded-lg z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/book"
          className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-blue-700 transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <CalendarPlus size={16} strokeWidth={2.5} />
          Book Now
        </Link>
      </div>
    </header>
  );
}
