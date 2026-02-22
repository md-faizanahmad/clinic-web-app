"use client";

import Link from "next/link";
import { JSX } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Activity,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Book Appointment", href: "/book" },
];

const medicalServices: FooterLink[] = [
  { label: "General Checkup", href: "/services#general" },
  { label: "Dental Care", href: "/services#dental" },
  { label: "Cardiology", href: "/services#cardio" },
  { label: "Pediatrics", href: "/services#pediatrics" },
];

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-border bg-linear-to-b from-[#1e40af] via-[#193755] to-[#0f2439]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-32 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <Activity className="text-[#1e40af]" size={22} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white md:text-foreground md:group-hover:text-[#1e40af] transition-colors">
                Clinic
                <span className="text-secondary md:text-secondary">Care</span>
              </span>
            </Link>
            <p className="text-blue-50 md:text-slate-500 text-sm leading-relaxed max-w-xs">
              Delivering excellence in healthcare across Bihar. Your health is
              our priority, backed by professional expertise.
            </p>
            <div className="flex items-center gap-2 text-white md:text-primary font-semibold text-xs py-1 px-3 bg-white/10 md:bg-primary/5 rounded-full w-fit">
              <ShieldCheck size={14} />
              Certified Medical Facility
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white md:text-foreground mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-blue-100 md:text-slate-500 hover:text-white md:hover:text-[#1e40af] transition-colors text-sm"
                  >
                    <ChevronRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all mr-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white md:text-foreground mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {medicalServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-blue-100 md:text-slate-500 hover:text-white md:hover:text-secondary transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details - Updated to Bihar */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white md:text-foreground mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-50 md:text-slate-500">
                <Mail
                  size={18}
                  className="text-white md:text-[#1e40af] shrink-0"
                />
                <span>support@cliniccare.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-50 md:text-slate-500">
                <Phone
                  size={18}
                  className="text-white md:text-[#1e40af] shrink-0"
                />
                <span>+91 70040 XXXXX</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-50 md:text-slate-500">
                <MapPin
                  size={18}
                  className="text-white md:text-[#1e40af] shrink-0"
                />
                <span>
                  Patna, Bihar, India <br /> Pin: 800001
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-50 md:text-slate-500">
                <Clock size={18} className="text-secondary shrink-0" />
                <span>24/7 Emergency Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 md:border-slate-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-200 md:text-slate-400">
            © {currentYear} ClinicCare Bihar. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-blue-200 md:text-slate-400">
            <Link
              href="/privacy"
              className="hover:text-white md:hover:text-[#1e40af] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white md:hover:text-[#1e40af] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
