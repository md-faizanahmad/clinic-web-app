"use client";

import Link from "next/link";
import { JSX } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Activity,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  HeartPulse,
  Award,
} from "lucide-react";

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-primary">
      {/* Top Banner: Trust Signals */}
      <div className="bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-primary">
            <ShieldCheck size={20} />
            <span className="text-sm font-bold uppercase tracking-tight">
              ISO 9001:2015 Certified Clinic
            </span>
          </div>
          <div className="flex items-center gap-3 text-secondary">
            <Award size={20} />
            <span className="text-sm font-bold uppercase tracking-tight">
              Verified Bihar Health Authority
            </span>
          </div>
          <div className="flex items-center gap-3 text-red-600 animate-pulse">
            <HeartPulse size={20} />
            <span className="text-sm font-bold uppercase tracking-tight">
              24/7 Emergency Support
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-32 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Section 1: Brand & Mission (Spans 4 columns) */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg shadow-blue-200 shadow-lg">
                <Activity className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                CLINIC<span className="text-primary">CARE</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-primary/20 pl-4">
              Providing comprehensive healthcare solutions in Bihar. Our mission
              is to combine advanced medical technology with compassionate
              patient care to ensure the well-being of our community.
            </p>
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-slate-100 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
                <Stethoscope size={18} />
              </div>
              {/* Add more medical-style social/utility icons here */}
            </div>
          </div>

          {/* Section 2: Department Links (Spans 2 columns) */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-black text-slate-900 uppercase mb-6 tracking-widest">
              Departments
            </h3>
            <ul className="space-y-3">
              {["Cardiology", "Dentistry", "Neurology", "Pediatrics"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-slate-500 hover:text-primary transition-colors text-sm flex items-center group"
                    >
                      <ChevronRight
                        size={12}
                        className="mr-1 group-hover:translate-x-1 transition-transform"
                      />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Section 3: Patient Information (Spans 2 columns) */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-black text-slate-900 uppercase mb-6 tracking-widest">
              For Patients
            </h3>
            <ul className="space-y-3">
              {[
                "Find a Doctor",
                "Book Appointment",
                "Medical Records",
                "Patient FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-500 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact & Bihar HQ (Spans 4 columns) */}
          <div className="md:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase mb-6 tracking-widest">
              Bihar HQ
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin className="text-primary shrink-0" size={20} />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Main Medical Center
                  </p>
                  <p className="text-xs text-slate-500">
                    Bailey Road, Patna, Bihar, 800001
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <div>
                  <p className="text-sm font-bold text-slate-900">Helpline</p>
                  <p className="text-xs text-slate-500">
                    +91 70040 XXXXX / 0612-XXXXXXX
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="text-secondary shrink-0" size={20} />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    OPD Timings
                  </p>
                  <p className="text-xs text-slate-500">
                    Mon - Sat: 09:00 AM - 08:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Accreditations */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 grayscale opacity-60">
            {/* Imagine medical logo placeholders here */}
            <div className="h-8 w-24 bg-slate-200 rounded flex items-center justify-center text-[8px] font-bold">
              NABH ACCREDITED
            </div>
            <div className="h-8 w-24 bg-slate-200 rounded flex items-center justify-center text-[8px] font-bold">
              NABL COMPLIANT
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-slate-400 font-medium italic">
              Emergency Contact: 102 (Bihar Govt.) | 108 (Ambulance)
            </p>
            <p className="text-xs text-slate-400 mt-1">
              © {currentYear} ClinicCare Bihar. All medical practices adhere to
              IMC guidelines.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
