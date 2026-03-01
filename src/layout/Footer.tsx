"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Clock,
  ChevronRight,
  Building2,
  UserCheck,
  Microscope,
  Lock,
  HeartPulse,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const trustBadges = [
    { title: "Registered", icon: <Building2 size={20} /> },
    { title: "Certified", icon: <UserCheck size={20} /> },
    { title: "Modern Lab", icon: <Microscope size={20} /> },
    { title: "Secure", icon: <Lock size={20} /> },
  ];

  return (
    <footer className="bg-white border-t border-slate-100">
      {/* 1. COMPACT MEDICAL TRUST STRIP - 4 COL MOBILE */}
      <div className="border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center">
          <div className="grid grid-cols-4 w-full divide-x divide-slate-50">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex flex-col items-center justify-center gap-1.5 group"
              >
                <div className="text-sky-700/50 group-hover:text-sky-700 transition-colors">
                  {badge.icon}
                </div>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter text-slate-400">
                  {badge.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. IMAGE CTA SECTION (Using public/cta.png) */}
      <div className="relative h-48 md:h-64 overflow-hidden group">
        <Image
          src="/cta.png"
          alt="Clinic Support"
          fill
          className="object-cover grayscale-[0.8] opacity-20 group-hover:opacity-30 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <HeartPulse size={32} className="text-sky-700 mb-4 animate-pulse" />
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
            Need Immediate <span className="text-sky-700">Assistance?</span>
          </h3>
          <div className="flex gap-4 mt-6">
            <a
              href="tel:+9170040XXXXX"
              className="bg-slate-900 text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all active:scale-95"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/9170040XXXXX"
              className="bg-[#25D366] text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              <MessageCircle size={14} fill="currentColor" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 3. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">
                Clinic<span className="text-sky-700">Care.</span>
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed tracking-tight max-w-xs">
              World-class healthcare infrastructure delivered with local
              empathy. Since 2016, setting the standard for clinical excellence
              in Patna.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-sky-700" />
                <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">
                  Bailey Road, Patna, Bihar
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-sky-700" />
                <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">
                  09:00 AM — 09:00 PM (Daily)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
              Departments
            </h4>
            <ul className="space-y-4">
              {["Cardiology", "Pediatrics", "Diagnostics", "General Care"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[11px] font-black text-slate-900 uppercase tracking-widest hover:text-sky-700 transition-colors flex items-center group"
                    >
                      <ChevronRight
                        size={12}
                        className="mr-2 group-hover:translate-x-1 transition-transform"
                      />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Legal/Map */}
          <div className="md:col-span-5 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
              Location Search
            </h4>
            <div className="aspect-video w-full bg-slate-100 relative group overflow-hidden border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000"
                alt="Map"
                fill
                className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              />
              <a
                href="#"
                className="absolute inset-0 flex items-center justify-center bg-sky-900/10 hover:bg-sky-900/20 transition-colors"
              >
                <span className="bg-white px-4 py-2 text-[9px] font-black uppercase tracking-widest shadow-xl">
                  Get Directions
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
            © {currentYear} CLINICCARE PATNA. REG NO: BIH/CL/2016/XXX
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-[9px] font-black text-slate-900 uppercase tracking-widest hover:text-sky-700"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[9px] font-black text-slate-900 uppercase tracking-widest hover:text-sky-700"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-[9px] font-black text-slate-900 uppercase tracking-widest hover:text-sky-700"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
