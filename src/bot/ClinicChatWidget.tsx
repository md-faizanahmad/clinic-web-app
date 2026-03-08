"use client";

import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  MapPin,
  Clock,
  Stethoscope,
  Phone,
  ArrowLeft,
  X,
} from "lucide-react";

type View = "menu" | "location" | "timing" | "doctors";

const doctors = [
  { name: "Dr. Rahman", role: "General Physician" },
  { name: "Dr. Khan", role: "Dentist" },
  { name: "Dr. Ali", role: "Pediatrician" },
];

export default function ClinicChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("menu");

  const boxRef = useRef<HTMLDivElement>(null);

  /* Close when clicking outside */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
        setView("menu");
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const renderContent = () => {
    if (view === "location") {
      return (
        <a
          href="https://maps.google.com/?q=Patna,Bihar"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-sm"
        >
          📍 Clinic Location
          <br />
          Patna, Bihar
          <br />
          <span className="text-sky-600 text-xs">Open in Google Maps</span>
        </a>
      );
    }

    if (view === "timing") {
      return (
        <div className="bg-gray-100 p-3 rounded-lg text-sm">
          🕒 Clinic Timing
          <br />
          9 AM – 8 PM
          <br />
          Monday – Saturday
        </div>
      );
    }

    if (view === "doctors") {
      return (
        <div className="space-y-2">
          {doctors.map((doc) => (
            <div key={doc.name} className="bg-gray-100 p-3 rounded-lg text-sm">
              <p className="font-medium">{doc.name}</p>
              <p className="text-gray-600 text-xs">{doc.role}</p>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Floating Button */}

      <div className="fixed bottom-22 md:bottom-6 right-4 z-50">
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-70 animate-ping"></span>

        {/* Button */}
        <button
          onClick={() => {
            setOpen(!open);
            setView("menu");
          }}
          aria-label="Open chat"
          className="relative bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          <MessageCircle size={20} />
        </button>
      </div>

      {/* Chatbox */}

      <div
        ref={boxRef}
        className={`fixed bottom-20 right-4 z-50 w-[90%] max-w-xs bg-white border rounded-xl shadow-xl transform transition-all duration-300
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-3 py-2">
          <div className="flex items-center gap-2">
            {view !== "menu" && (
              <button
                onClick={() => setView("menu")}
                aria-label="Back"
                className="p-1"
              >
                <ArrowLeft size={16} />
              </button>
            )}

            <span className="text-sm font-medium">Clinic Assistant</span>
          </div>

          <button
            onClick={() => {
              setOpen(false);
              setView("menu");
            }}
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}

        <div className="p-3 space-y-3">
          <div className="bg-gray-100 text-sm p-2 rounded-lg">
            Hello 👋 How can we help?
          </div>

          {view === "menu" && (
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-md border hover:bg-gray-50"
              >
                <Phone size={16} />
                WhatsApp Chat
              </a>

              <button
                onClick={() => setView("doctors")}
                className="flex items-center gap-2 p-2 rounded-md border hover:bg-gray-50"
              >
                <Stethoscope size={16} />
                Doctor List
              </button>

              <button
                onClick={() => setView("location")}
                className="flex items-center gap-2 p-2 rounded-md border hover:bg-gray-50"
              >
                <MapPin size={16} />
                Clinic Location
              </button>

              <button
                onClick={() => setView("timing")}
                className="flex items-center gap-2 p-2 rounded-md border hover:bg-gray-50"
              >
                <Clock size={16} />
                Clinic Timing
              </button>
            </div>
          )}

          {view !== "menu" && renderContent()}
        </div>
      </div>
    </>
  );
}
