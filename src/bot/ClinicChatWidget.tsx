"use client";

import { useState } from "react";
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

export default function ClinicChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("menu");

  const renderContent = () => {
    if (view === "location") {
      return (
        <div className="space-y-2">
          <div className="bg-gray-100  cursor-pointer p-2 rounded-lg text-sm">
            📍 Clinic Location
            <br />
            Patna, Bihar
            <br />
            https://maps.google.com
          </div>
        </div>
      );
    }

    if (view === "timing") {
      return (
        <div className="bg-gray-100 p-2  rounded-lg text-sm">
          🕒 Clinic Timing
          <br />9 AM – 8 PM (Mon–Sat)
        </div>
      );
    }

    if (view === "doctors") {
      return (
        <div className="bg-gray-100 cursor-pointer p-2 rounded-lg text-sm">
          Dr. Rahman – General Physician
          <br />
          Dr. Khan – Dentist
          <br />
          Dr. Ali – Pediatrician
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-22 cursor-pointer right-4 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        <MessageCircle size={20} />
      </button>

      {/* Chatbox */}

      <div
        className={`
        fixed bottom-20 right-5 z-50
        w-[90%] max-w-xs
        bg-white border rounded-xl shadow-xl

        transform transition-all duration-300
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-3 py-2">
          <div className="flex items-center gap-2 cursor-pointer">
            {view !== "menu" && (
              <button onClick={() => setView("menu")}>
                <ArrowLeft size={16} />
              </button>
            )}

            <span className="text-sm font-medium">Clinic Assistant</span>
          </div>

          <button onClick={() => setOpen(false)} className="cursor-pointer">
            <X size={16} />
          </button>
        </div>

        {/* Body */}

        <div className="p-3 space-y-3">
          {/* Welcome bubble */}

          <div className="bg-gray-100 text-sm p-2 rounded-lg">
            Hello 👋 How can we help?
          </div>

          {/* Menu */}

          {view === "menu" && (
            <div className="flex flex-col gap-2 text-sm ">
              <a
                href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20appointment"
                target="_blank"
                className="flex cursor-pointer items-center gap-2 p-2 rounded-md border hover:bg-gray-50"
              >
                <Phone size={16} />
                WhatsApp Chat
              </a>

              <button
                onClick={() => setView("doctors")}
                className="flex cursor-pointer items-center gap-2 p-2 rounded-md border hover:bg-gray-50"
              >
                <Stethoscope size={16} />
                Doctor List
              </button>

              <button
                onClick={() => setView("location")}
                className="flex cursor-pointer items-center gap-2 p-2 rounded-md border hover:bg-gray-50"
              >
                <MapPin size={16} />
                Clinic Location
              </button>

              <button
                onClick={() => setView("timing")}
                className="flex cursor-pointer items-center gap-2 p-2 rounded-md border hover:bg-gray-50"
              >
                <Clock size={16} />
                Clinic Timing
              </button>
            </div>
          )}

          {/* Response */}

          {view !== "menu" && renderContent()}
        </div>
      </div>
    </>
  );
}
