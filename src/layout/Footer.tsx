import Link from "next/link";
import { JSX } from "react";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Appointments", href: "/appointments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Contact", href: "/contact" },
];

const services: FooterLink[] = [
  { label: "General Checkup", href: "#" },
  { label: "Dental Care", href: "#" },
  { label: "Cardiology", href: "#" },
  { label: "Pediatrics", href: "#" },
];

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">ClinicCare</h2>
            <p className="text-sm leading-relaxed">
              Providing quality healthcare services with trusted doctors,
              advanced facilities, and patient-first care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link: FooterLink) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service: FooterLink) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@cliniccare.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Hyderabad, India</li>
              <li>Open: Mon - Sat (9AM - 8PM)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {currentYear} ClinicCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
