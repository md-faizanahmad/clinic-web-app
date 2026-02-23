"use client";

import { MessageCircle, Phone, Mail, Instagram, Plus, X } from "lucide-react";
import { useState } from "react";

export default function ContactDock() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      label: "WhatsApp",
      icon: <MessageCircle size={22} />,
      href: "https://wa.me/9170040XXXXX",
      color: "bg-[#25D366]",
    },
    {
      label: "Call Us",
      icon: <Phone size={22} />,
      href: "tel:+9170040XXXXX",
      color: "bg-primary", // Your Medical Blue
    },
    {
      label: "Email",
      icon: <Mail size={22} />,
      href: "mailto:support@cliniccare.com",
      color: "bg-secondary", // Your Teal
    },
    {
      label: "Instagram",
      icon: <Instagram size={22} />,
      href: "https://instagram.com/cliniccare_bihar",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    },
  ];

  return (
    <div className="fixed right-4 bottom-24 md:bottom-13 md:-translate-y-1/2 z-60 flex flex-col items-end gap-3 group">
      {/* Expanded Menu */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {contacts.map((contact) => (
          <div
            key={contact.label}
            className="flex items-center gap-3 group/item"
          >
            <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold shadow-sm border border-border opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap">
              {contact.label}
            </span>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${contact.color} text-white p-3 rounded-2xl shadow-lg hover:scale-110 active:scale-90 transition-transform`}
            >
              {contact.icon}
            </a>
          </div>
        ))}
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-slate-800 rotate-45" : "bg-primary"
        } text-white p-4 rounded-4xl shadow-2xl shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95`}
      >
        {isOpen ? <X size={28} /> : <Plus size={28} />}
      </button>
    </div>
  );
}
