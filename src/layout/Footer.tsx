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
} from "lucide-react";
import FooterContact from "../shared/FooterContact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const trustBadges = [
    { title: "Registered", icon: <Building2 size={20} /> },
    { title: "Certified", icon: <UserCheck size={20} /> },
    { title: "Modern Lab", icon: <Microscope size={20} /> },
    { title: "Secure", icon: <Lock size={20} /> },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-100 antialiased">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale brightness-50"
        >
          <source
            src="/videos/Website_Footer_Hero_Banner_Video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-900/40" />
      </div>

      <div className="relative z-10">
        {/* Trust Strip */}
        <div className="border-b border-white/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center">
            <div className="grid grid-cols-4 w-full divide-x divide-white/5">
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex flex-col items-center justify-center gap-1.5 group"
                >
                  <div className="text-sky-500/60 group-hover:text-sky-400 transition-colors">
                    {badge.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-tight text-slate-400">
                    {badge.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-white uppercase italic tracking-tight">
                  Clinic<span className="text-sky-500">Care.</span>
                </span>
              </div>

              <p className="text-xs font-semibold text-slate-400 uppercase leading-relaxed tracking-tight max-w-xs">
                Setting the benchmark for clinical excellence in Bihar. Since
                2016, our facility has integrated global medical protocols with
                local compassion.
              </p>

              <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-sky-500 shrink-0" />
                  <span className="text-[11px] font-black text-white uppercase tracking-tight">
                    Bailey Road, Patna, Bihar 800001
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-sky-500" />
                  <span className="text-[11px] font-black text-white uppercase tracking-tight">
                    OPD: 09:00 AM — 09:00 PM (Daily)
                  </span>
                </div>
              </div>

              <FooterContact />
            </div>

            {/* Departments */}
            <div className="md:col-span-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-6">
                Departments
              </h4>

              <ul className="space-y-4">
                {[
                  "Cardiology",
                  "Pediatrics",
                  "Diagnostics",
                  "General Care",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[11px] font-black text-white uppercase tracking-widest hover:text-sky-500 transition-colors flex items-center group"
                    >
                      <ChevronRight
                        size={14}
                        className="mr-2 group-hover:translate-x-1 transition-transform"
                      />
                      {item} Unit
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-6">
                Location Search
              </h4>

              <div className="aspect-video w-full bg-slate-900 relative group overflow-hidden border border-white/5 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000"
                  alt="Map"
                  fill
                  className="object-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-700"
                />

                <a
                  href="#"
                  className="absolute inset-0 flex items-center justify-center bg-sky-950/20 group-hover:bg-sky-950/40 transition-colors"
                >
                  <span className="bg-white px-5 py-3 text-[10px] font-black uppercase tracking-widest text-slate-950 shadow-2xl">
                    Get Directions
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                © {currentYear} CLINICCARE PATNA • REG NO: BIH/CL/2016/092
              </p>

              <p className="text-[8px] text-slate-600 uppercase tracking-widest leading-none">
                Regulated by Bihar Health Department
              </p>
            </div>

            <nav className="flex gap-8">
              <Link
                href="#"
                className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-sky-500"
              >
                Privacy
              </Link>

              <Link
                href="#"
                className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-sky-500"
              >
                Terms
              </Link>

              <Link
                href="#"
                className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-sky-500"
              >
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
