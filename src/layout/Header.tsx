"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Stethoscope,
  Info,
  PhoneCall,
  CalendarPlus,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";
import { JSX } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Stethoscope },
  { label: "Emergency", href: "/emergency", icon: HeartPulse },
  { label: "About", href: "/about", icon: Info },
];

export default function ClinicHeader(): JSX.Element {
  const pathname = usePathname();
  const logoUrl = "https://res.cloudinary.com/dyefyrszz/image/upload/v1771937195/1771937091315_snxchi.png";

  return (
    <>
      {/* --- DESKTOP HEADER --- */}
      <header className="hidden md:block sticky top-0 z-50 w-full bg-white/45 border-b border-border backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* Brand with Image Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform active:scale-95"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm group-hover:shadow-primary/20 transition-all">
              <Image 
                src={logoUrl} 
                alt="ClinicCare Logo" 
                fill 
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black leading-none tracking-tight text-slate-900">
                Clinic<span className="text-primary">Care</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                Bihar Health
              </span>
            </div>
          </Link>

          {/* Clean Desktop Nav */}
          <nav className="flex items-center gap-1">
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
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all relative group
                  ${
                    isEmergency
                      ? "text-red-600 hover:bg-red-50"
                      : isActive
                        ? "text-primary bg-primary/5"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {isActive && !isEmergency && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <Link
            href="/book"
            className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-black hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
          >
            <CalendarPlus size={16} strokeWidth={2.5} />
            Book Now
          </Link>
        </div>
      </header>

      {/* --- MOBILE TOP HEADER --- */}
      <header className="md:hidden sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md px-4 h-14 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="relative w-7 h-7">
            <Image src={logoUrl} alt="Logo" fill className="object-contain" />
          </div>
          <span className="font-black text-base tracking-tighter text-slate-900">
            ClinicCare
          </span>
        </div>

        <a
          href="tel:102"
          className="bg-red-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-black uppercase tracking-tight shadow-sm active:scale-90 transition-transform"
        >
          <PhoneCall size={12} fill="currentColor" />
          Emergency
        </a>
      </header>

      {/* --- MOBILE BOTTOM NAV --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 h-18 pb-safe">
        <div className="flex justify-around items-center h-full px-1 relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const isEmergency = item.label === "Emergency";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isActive ? "-mt-10" : "mt-0"
                }`}
              >
                <div
                  className={`p-3 rounded-full transition-all duration-500 ${
                    isActive
                      ? `${isEmergency ? "bg-red-600" : "bg-primary"} text-white shadow-xl border-4 border-[#f8fafc] scale-110`
                      : "bg-transparent text-slate-400"
                  }`}
                >
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span
                  className={`text-[9px] mt-1 font-black uppercase tracking-tighter transition-colors ${
                    isActive
                      ? isEmergency
                        ? "text-red-600"
                        : "text-primary"
                      : "text-slate-400"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          <Link
            href="/book"
            className={`flex flex-col items-center justify-center flex-1 transition-all duration-500 ${
              pathname === "/book" ? "-mt-10" : "mt-0"
            }`}
          >
            <div
              className={`p-3 rounded-full shadow-lg border-4 border-[#f8fafc] transition-all duration-500 ${
                pathname === "/book" ? "bg-primary scale-110" : "bg-secondary"
              }`}
            >
              <CalendarPlus className="text-white" size={22} />
            </div>
            <span
              className={`text-[9px] mt-1 font-black uppercase tracking-tighter ${
                pathname === "/book" ? "text-primary" : "text-secondary"
              }`}
            >
              Book
            </span>
          </Link>
        </div>
      </nav>

      <div className="h-18 md:hidden" />
    </>
  );
}
