"use client";

import { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Clock,
  Stethoscope,
  Phone,
  X,
} from "lucide-react";

export default function ClinicChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleAction = (type: string) => {
    if (type === "location") {
      setMessage("📍 Clinic Location:\nPatna, Bihar\nhttps://maps.google.com");
    }

    if (type === "timing") {
      setMessage("🕒 Clinic Timing:\n9 AM – 8 PM (Mon–Sat)");
    }

    if (type === "doctor") {
      setMessage(`
Dr. Rahman – General Physician
Dr. Khan – Dentist
Dr. Ali – Pediatrician
`);
    }
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-22 right-4 z-50 flex items-center justify-center rounded-full bg-green-600 p-4 text-white shadow-lg hover:bg-green-700 transition"
      >
        <MessageCircle size={20} />
      </button>

      {/* Chat Box */}

      <div
        className={`
        fixed bottom-20 right-5 z-50
        w-[90%] max-w-xs
        bg-white shadow-xl rounded-xl border

        transform transition-all duration-300
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-4 py-3">
          <span className="text-sm font-medium">Clinic Assistant</span>

          <button onClick={() => setOpen(false)}>
            <X size={16} />
          </button>
        </div>

        {/* Options */}

        {!message && (
          <div className="p-3 flex flex-col gap-2 text-sm">
            <a
              href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20appointment"
              target="_blank"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
            >
              <Phone size={16} />
              WhatsApp Chat
            </a>

            <button
              onClick={() => handleAction("doctor")}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
            >
              <Stethoscope size={16} />
              Doctor List
            </button>

            <button
              onClick={() => handleAction("location")}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
            >
              <MapPin size={16} />
              Clinic Location
            </button>

            <button
              onClick={() => handleAction("timing")}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
            >
              <Clock size={16} />
              Clinic Timing
            </button>
          </div>
        )}

        {/* Message */}

        {message && (
          <div className="p-3 text-sm whitespace-pre-line">
            {message}

            <button
              onClick={() => setMessage(null)}
              className="text-blue-600 mt-3 text-sm"
            >
              ← Back
            </button>
          </div>
        )}
      </div>
    </>
  );
}
