import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Building2,
  UserCheck,
  Microscope,
  Lock,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const trustBadges = [
    {
      title: "Govt. Registered Clinic",
      desc: "Licensed and operating under local healthcare regulations.",
      icon: <Building2 size={26} />,
    },
    {
      title: "Experienced Medical Team",
      desc: "Qualified doctors providing patient-focused treatment.",
      icon: <UserCheck size={26} />,
    },
    {
      title: "Hygienic & Modern Setup",
      desc: "Sanitized environment with updated diagnostic tools.",
      icon: <Microscope size={26} />,
    },
    {
      title: "Confidential Patient Records",
      desc: "Strict privacy standards for all consultations.",
      icon: <Lock size={26} />,
    },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* ================= TRUST STRIP ================= */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="text-primary mb-3">{badge.icon}</div>
              <h4 className="text-sm font-semibold text-slate-900 mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & About */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Clinic Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-lg font-bold text-slate-900">
                ClinicCare
              </span>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed">
              Trusted healthcare clinic serving patients in Patna with
              compassionate consultation, preventive care, and reliable medical
              support.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+9170040XXXXX"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <Phone size={16} />
                +91 70040 XXXXX
              </a>

              <a
                href="https://wa.me/9170040XXXXX"
                target="_blank"
                className="block text-sm text-green-600 font-medium hover:underline"
              >
                WhatsApp for Appointment
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-5">
              Medical Services
            </h3>
            <ul className="space-y-3">
              {[
                "General Consultation",
                "Child Health Care",
                "Preventive Checkups",
                "Diagnostic Lab Tests",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-slate-600 hover:text-primary flex items-center group transition"
                  >
                    <ChevronRight
                      size={14}
                      className="mr-1 group-hover:translate-x-1 transition"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-5">
              Clinic Information
            </h3>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>
                  Bailey Road, Near XYZ Landmark, Patna, Bihar – 800001
                </span>
              </li>

              <li className="flex gap-3">
                <Clock size={18} className="text-primary shrink-0" />
                <span>Mon – Sun: 9:00 AM – 9:00 PM</span>
              </li>

              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="text-primary font-medium hover:underline"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>

            <p className="mt-6 text-xs text-slate-500 leading-relaxed">
              All medical services are provided in accordance with applicable
              healthcare regulations. For emergencies, please contact the clinic
              directly.
            </p>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} ClinicCare. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
