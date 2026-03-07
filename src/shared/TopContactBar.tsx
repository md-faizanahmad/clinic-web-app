"use client";

import { Phone, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function TopContactBar() {
  return (
    <div className="w-full bg-blue-600 text-white text-xs h-9 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
        {/* Left side */}

        <div className="flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">+91 98765 43210</span>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <MessageCircle size={14} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        {/* Social icons */}

        <div className="flex items-center gap-3">
          <a href="#" className="hover:opacity-80">
            <Facebook size={14} />
          </a>

          <a href="#" className="hover:opacity-80">
            <Instagram size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
