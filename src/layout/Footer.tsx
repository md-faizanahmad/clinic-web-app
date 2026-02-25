"use client";

import Link from "next/link";
import Image from "next/image";
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
  UserCheck,
  Microscope,
  Lock,
  Users,
  Building2
} from "lucide-react";

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  const trustBadges = [
    {
      title: "Government Registered",
      desc: "Officially registered and compliant with local healthcare regulations.",
      icon: <Building2 size={30} />,
    },
    {
      title: "Certified Professionals",
      desc: "Qualified and experienced doctors with verified credentials.",
      icon: <UserCheck size={30} />,
    },
    {
      title: "Modern & Hygienic",
      desc: "Advanced medical tools with strict sanitation protocols.",
      icon: <Microscope size={30} />,
    },
    {
      title: "Data Privacy Protected",
      desc: "Your medical records are handled with strict confidentiality.",
      icon: <Lock size={30} />,
    },
    {
      title: "1000+ Happy Patients",
      desc: "Trusted by families in the community for quality care.",
      icon: <Users size={30} />,
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* --- AUTHORITATIVE TRUST SECTION --- */}
      <div className="bg-[#fcfdfe] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group flex flex-col items-start p-6 rounded-lg bg-white border border-slate-100 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:bg-white animate-in fade-in slide-in-from-bottom-5 fill-mode-both"
              >
                <div className="text-primary mb-5 transition-transform duration-300 group-hover:scale-105">
                  {badge.icon}
                </div>
                <h4 className="text-[16px] font-bold text-slate-900 leading-tight mb-2">
                  {badge.title}
                </h4>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-32 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Section 1: Brand & Logo */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm transition-transform group-hover:scale-105">
                <Image 
                  src="https://res.cloudinary.com/dyefyrszz/image/upload/v1771937195/1771937091315_snxchi.png" 
                  alt="ClinicCare Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black leading-none tracking-tighter text-slate-900">
                  CLINIC<span className="text-primary">CARE</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Bihar Health Authority
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-primary/20 pl-4 italic">
              Empowering Bihar with world-class healthcare. Our mission is to integrate 
              compassion with the highest clinical standards for every patient.
            </p>
          </div>

          {/* Section 2: Departments */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-black text-slate-900 uppercase mb-6 tracking-widest">
              Specialties
            </h3>
            <ul className="space-y-3">
              {["Cardiology", "Neurology", "Pediatrics", "Orthopedics"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-primary transition-colors text-sm flex items-center group">
                    <ChevronRight size={12} className="mr-1 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Patient Portal */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-black text-slate-900 uppercase mb-6 tracking-widest">
              Patient Portal
            </h3>
            <ul className="space-y-3">
              {["Book Appointment", "Lab Results", "Doctor Schedule", "Health Blogs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact/HQ */}
          <div className="md:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest">
              Patna Headquarters
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin className="text-primary shrink-0" size={18} />
                <p className="text-[13px] text-slate-600 leading-snug">
                  Bailey Road, Near High Court, Patna, Bihar 800001
                </p>
              </li>
              <li className="flex gap-4">
                <Phone className="text-primary shrink-0" size={18} />
                <p className="text-[13px] text-slate-600 font-bold">+91 70040 XXXXX</p>
              </li>
              <li className="flex gap-4">
                <Clock className="text-secondary shrink-0" size={18} />
                <p className="text-[13px] text-slate-600">Daily: 09:00 AM - 09:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* --- FINAL COMPLIANCE BAR --- */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 opacity-40 grayscale">
            <div className="h-7 px-3 border border-slate-400 rounded flex items-center text-[9px] font-bold uppercase">NABH Accredited</div>
            <div className="h-7 px-3 border border-slate-400 rounded flex items-center text-[9px] font-bold uppercase">ISO 9001:2015</div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
              Bihar Govt. Emergency: 102 | Ambulance: 108
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              © {currentYear} ClinicCare Bihar. Designed for Patient Excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
