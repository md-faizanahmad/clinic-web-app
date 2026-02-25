"use client";

import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";
import {
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Building2,
  UserCheck,
  Microscope,
  Lock
} from "lucide-react";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  const trustBadges = [
    {
      title: "Registered Clinic",
      desc: "Operating under applicable local healthcare regulations.",
      icon: <Building2 size={28} />,
    },
    {
      title: "Qualified Doctors",
      desc: "Experienced medical professionals focused on patient care.",
      icon: <UserCheck size={28} />,
    },
    {
      title: "Clean & Modern Facility",
      desc: "Maintaining high hygiene standards with updated equipment.",
      icon: <Microscope size={28} />,
    },
    {
      title: "Patient Data Privacy",
      desc: "Your medical information is handled confidentially.",
      icon: <Lock size={28} />,
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      
      {/* ---------- TRUST SECTION ---------- */}
      <div className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30"
              >
                <div className="text-primary mb-4 transition-all duration-300 group-hover:scale-105 group-hover:text-primary">
                  {badge.icon}
                </div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">
                  {badge.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- MAIN FOOTER ---------- */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Clinic Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                ClinicCare
              </span>
            </Link>

            <p className="text-sm text-slate-500 leading-relaxed">
              Providing reliable and compassionate healthcare services for
              individuals and families in the community.
            </p>

            <div className="text-sm font-semibold text-primary">
              Emergency? Call Now
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {["General Consultation", "Child Care", "Health Checkups", "Lab Tests"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center group"
                  >
                    <ChevronRight
                      size={14}
                      className="mr-1 transition-transform group-hover:translate-x-1"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-primary transition">About</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Doctors</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Book Appointment</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>
                  Bailey Road, Patna, Bihar 800001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="font-medium">+91 70040 XXXXX</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-primary shrink-0" />
                <span>Mon–Sun: 9:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} ClinicCare. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}