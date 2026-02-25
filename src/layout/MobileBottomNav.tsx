// components/MobileHeader.tsx

// components/MobileBottomNav.tsx
import Link from "next/link";
import { navItems } from "../lib/navigations";

export function MobileBottomNav({ pathname }: { pathname: string }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 h-18 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <div className="flex justify-around items-center h-full px-1">
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
              className={`flex flex-col items-center justify-center flex-1 transition-all duration-500 ${isActive ? "-mt-10" : "mt-0"}`}
            >
              <div
                className={`p-3 rounded-full transition-all duration-500 ${isActive ? `${isEmergency ? "bg-red-600" : "bg-primary"} text-white shadow-xl border-4 border-white scale-110` : "text-slate-400"}`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span
                className={`text-[9px] mt-1 font-black uppercase tracking-tighter ${isActive ? (isEmergency ? "text-red-600" : "text-primary") : "text-slate-400"}`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
        {/* Booking Button (Custom Style) */}
        {/* <Link
          href="/book"
          className={`flex flex-col items-center justify-center flex-1 transition-all duration-500 ${pathname === "/book" ? "-mt-10" : "mt-0"}`}
        >
          <div
            className={`p-3 rounded-full shadow-lg border-4 border-white transition-all duration-500 ${pathname === "/book" ? "bg-primary scale-110 text-white" : "bg-teal-500 text-white"}`}
          >
            <CalendarPlus size={22} />
          </div>
          <span
            className={`text-[9px] mt-1 font-black uppercase tracking-tighter ${pathname === "/book" ? "text-primary" : "text-teal-600"}`}
          >
            Book
          </span>
        </Link> */}
      </div>
    </nav>
  );
}
