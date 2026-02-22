"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Stethoscope,
  Info,
  PhoneCall,
  CalendarPlus,
  Activity,
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

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 z-50 w-full bg-white border-b border-border backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl shadow-md">
              <Activity className="text-white" size={22} />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Clinic<span className="text-secondary">Care</span>
            </span>
          </Link>

          <nav className="flex items-center gap-10">
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
                  className={`relative text-[15px] font-semibold transition-colors ${
                    isEmergency
                      ? "text-red-600"
                      : isActive
                        ? "text-primary"
                        : "text-slate-500 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {isActive && !isEmergency && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/book"
            className="bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            <CalendarPlus size={18} />
            Book Appointment
          </Link>
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-50 w-full bg-white px-4 h-16 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-2">
          <Activity className="text-primary" size={20} />
          <span className="font-bold text-lg">ClinicCare</span>
        </div>

        <Link
          href="tel:911"
          className="bg-red-50 text-red-600 px-3 py-2 rounded-lg flex items-center gap-2 text-xs font-bold border border-red-100"
        >
          <PhoneCall size={14} />
          Emergency
        </Link>
      </header>

      {/* Mobile Bottom Nav - App Style */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border h-20">
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
                className={`flex flex-col items-center justify-center flex-1 transition-all duration-300 ${
                  isActive ? "-mt-13" : "mt-0"
                }`}
              >
                <div
                  className={`p-3 rounded-full transition-all duration-300 shadow-sm ${
                    isActive
                      ? `${isEmergency ? "bg-red-600" : "bg-primary"} text-white shadow-lg border-4 border-[#f8fafc]`
                      : "bg-transparent text-slate-400"
                  }`}
                >
                  <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span
                  className={`text-[10px] mt-1 font-bold transition-colors ${
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

          {/* Special Booking Button (Static Round Up) */}
          <Link
            href="/book"
            className={`flex flex-col items-center justify-center flex-1 transition-all duration-300 ${
              pathname === "/book" ? "-mt-13" : "mt-0"
            }`}
          >
            <div
              className={`p-3 rounded-full shadow-lg border-4 border-[#f8fafc] transition-all ${
                pathname === "/book" ? "bg-primary scale-110" : "bg-secondary"
              }`}
            >
              <CalendarPlus className="text-white" size={24} />
            </div>
            <span
              className={`text-[10px] mt-1 font-bold ${
                pathname === "/book" ? "text-primary" : "text-secondary"
              }`}
            >
              Book
            </span>
          </Link>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind the fixed bottom nav */}
      <div className="h-20 md:hidden" />
    </>
  );
}
