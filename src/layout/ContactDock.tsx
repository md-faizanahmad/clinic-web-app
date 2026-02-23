"use client";

import {
  MessageSquareMore,
  PhoneCall,
  MailWarning,
  Instagram,
  Plus,
  X,
} from "lucide-react";
import { useState } from "react";

export default function ContactDock() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      label: "WhatsApp",
      icon: <MessageSquareMore size={20} />,
      href: "https://wa.me/9170040XXXXX",
      color: "bg-[#25D366]",
      delay: "delay-[0ms]",
    },
    {
      label: "Call Us",
      icon: <PhoneCall size={20} />,
      href: "tel:+9170040XXXXX",
      color: "bg-primary",
      delay: "delay-[75ms]",
    },
    {
      label: "Email",
      icon: <MailWarning size={20} />,
      href: "mailto:support@cliniccare.com",
      color: "bg-secondary",
      delay: "delay-[150ms]",
    },
    {
      label: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://instagram.com/cliniccare_bihar",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      delay: "delay-[225ms]",
    },
  ];

  return (
    <div className="fixed right-5 bottom-24 md:bottom-8 z-100 flex flex-col items-end gap-4 antialiased">
      {/* Staggered Expanded Menu */}
      <div className="flex flex-col gap-3 mb-2">
        {contacts.map((contact) => (
          <div
            key={contact.label}
            className={`flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isOpen
                ? `opacity-100 translate-y-0 scale-100 ${contact.delay}`
                : "opacity-0 translate-y-10 scale-50 pointer-events-none"
            }`}
          >
            <span className="bg-white/95 backdrop-blur px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm border border-slate-100">
              {contact.label}
            </span>
            <a
              href={contact.href}
              className={`${contact.color} text-white w-8 h-8 flex items-center justify-center rounded-xl shadow-lg hover:brightness-110 active:scale-90 transition-all`}
            >
              {contact.icon}
            </a>
          </div>
        ))}
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-12 cursor-pointer h-12 flex items-center justify-center rounded-2xl shadow-xl transition-all duration-500 ease-in-out group ${
          isOpen ? "bg-slate-900 rotate-135" : "bg-primary"
        }`}
      >
        <div
          className={`transition-transform duration-300 ${!isOpen ? "translate-y-1" : "translate-y-0"}`}
        >
          {isOpen ? (
            <X size={20} className="text-white" />
          ) : (
            <Plus size={20} className="text-white mb-2" />
          )}
        </div>

        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-2xl bg-primary animate-ping opacity-20 pointer-events-none" />
        )}
      </button>
    </div>
  );
}
