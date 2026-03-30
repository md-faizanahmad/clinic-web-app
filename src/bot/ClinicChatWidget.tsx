"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";
import type { Message, View, Doctor } from "./types";

const doctors: Doctor[] = [
  { name: "Dr. Rahman", role: "General Physician" },
  { name: "Dr. Khan", role: "Dentist" },
  { name: "Dr. Ali", role: "Pediatrician" },
];

export default function ClinicChatWidget() {
  const [open, setOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: "bot", text: "Hello 👋 How can we help you today?" },
  ]);

  const boxRef = useRef<HTMLDivElement | null>(null);
  const messageId = useRef(2);

  /* Scroll trigger */
  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Click outside */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const addMessage = (type: "bot" | "user", text: string) => {
    setMessages((prev) => [...prev, { id: messageId.current++, type, text }]);
  };

  const handleAction = (view: View) => {
    if (view === "location") {
      addMessage("user", "Clinic Location");
      addMessage("bot", "📍 Patna, Bihar\nOpen in Google Maps");
    }

    if (view === "timing") {
      addMessage("user", "Clinic Timing");
      addMessage("bot", "🕒 9 AM – 8 PM\nMonday – Saturday");
    }

    if (view === "doctors") {
      addMessage("user", "Doctor List");

      doctors.forEach((doc) => {
        addMessage("bot", `${doc.name} — ${doc.role}`);
      });
    }
  };

  return (
    <>
      {/* Floating Button */}

      <div
        className={`fixed bottom-24 right-4 z-50 transition-all duration-500
    ${showIcon ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
  `}
      >
        <div className="relative">
          {!open && (
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-70 animate-ping" />
          )}

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative bg-green-600 text-white p-4 rounded-full shadow-lg"
          >
            <MessageCircle size={20} />
          </button>
        </div>
      </div>

      {/* Chat Box */}

      <div
        ref={boxRef}
        className={`fixed bottom-20 right-4 z-50 w-[90%] max-w-xs bg-white border rounded-xl shadow-xl transition-all duration-300
    ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
  `}
      >
        {/* Header */}

        <div className="flex items-center justify-between px-3 py-2 border-b">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded-full" />
            <span className="text-sm font-medium">ClinicCare</span>
          </div>

          <button onClick={() => setOpen(false)}>
            <X size={16} />
          </button>
        </div>

        {/* Body */}

        <div className="p-3">
          <ChatMessages messages={messages} />

          <ChatActions onAction={handleAction} />
        </div>
      </div>
    </>
  );
}
