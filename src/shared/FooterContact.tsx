"use client";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function FooterContact() {
  return (
    <div className="text-white space-y-6">
      {/* Title */}
      <h3 className="text-base font-semibold">Contact</h3>

      {/* Contact info */}

      <div className="space-y-3 text-sm">
        <a
          href="tel:+919876543210"
          className="flex items-center gap-3 opacity-90 hover:opacity-100 transition"
        >
          <Phone size={16} />
          <span>+91 98765 43210</span>
        </a>

        <a
          href="mailto:clinic@email.com"
          className="flex items-center gap-3 opacity-90 hover:opacity-100 transition"
        >
          <Mail size={16} />
          <span>clinic@email.com</span>
        </a>

        <div className="flex items-start gap-3 opacity-90">
          <MapPin size={16} className="mt-1" />
          <span>Main Road, Patna, Bihar, India</span>
        </div>
      </div>

      {/* Quick actions */}

      <div className="flex gap-4 text-sm">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          className="flex items-center gap-2 border border-white/30 px-3 py-2 rounded-md hover:bg-white/10 transition"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        <a
          href="tel:+919876543210"
          className="flex items-center gap-2 border border-white/30 px-3 py-2 rounded-md hover:bg-white/10 transition"
        >
          <Phone size={16} />
          Call
        </a>
      </div>

      {/* Social media */}

      <div className="flex gap-4 pt-2">
        <a
          href="#"
          className="p-2 border border-white/20 rounded-md hover:bg-white/10 transition"
        >
          <Facebook size={18} />
        </a>

        <a
          href="#"
          className="p-2 border border-white/20 rounded-md hover:bg-white/10 transition"
        >
          <Instagram size={18} />
        </a>

        <a
          href="#"
          className="p-2 border border-white/20 rounded-md hover:bg-white/10 transition"
        >
          <Twitter size={18} />
        </a>

        <a
          href="#"
          className="p-2 border border-white/20 rounded-md hover:bg-white/10 transition"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
}
