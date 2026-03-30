"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  MapPin,
  Clock,
  Stethoscope,
  Phone,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

type View = "menu" | "location" | "timing" | "doctors";

type Message = {
  id: number;
  type: "bot" | "user";
  text: string;
};

type Doctor = {
  name: string;
  role: string;
};

/* ---------------- DATA ---------------- */

const doctors: Doctor[] = [
  { name: "Dr. Rahman", role: "General Physician" },
  { name: "Dr. Khan", role: "Dentist" },
  { name: "Dr. Ali", role: "Pediatrician" },
];

const initialMessages: Message[] = [
  {
    id: 1,
    type: "bot",
    text: "Hello 👋 How can we help you today?",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function ClinicChatWidget() {
  const [open, setOpen] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const messageId = useRef<number>(2);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  /* -------- Scroll trigger -------- */

  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------- Click outside -------- */

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  /* -------- Auto scroll -------- */

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* -------- Add message -------- */

  const addMessage = (type: "bot" | "user", text: string) => {
    setMessages((prev) => [...prev, { id: messageId.current++, type, text }]);
  };

  /* -------- Clear chat -------- */

  const clearChat = () => {
    setMessages(initialMessages);
    messageId.current = 2;
  };

  /* -------- Actions -------- */

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
      {/* ---------------- FLOATING BUTTON ---------------- */}

      <div
        className={`fixed bottom-10 right-8 z-50 transition-all duration-500
    ${
      showIcon
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10 pointer-events-none"
    }`}
      >
        <div className="relative">
          {!open && (
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-70 animate-ping" />
          )}

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative cursor-pointer bg-green-600 text-white p-4 rounded-full shadow-lg"
          >
            <MessageCircle size={20} />
          </button>
        </div>
      </div>

      {/* ---------------- CHAT BOX ---------------- */}

      <div
        ref={boxRef}
        className={`fixed bottom-20 right-4 z-50 w-[90%] max-w-xs bg-white border rounded-xl shadow-xl transition-all duration-300
    ${
      open
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6 pointer-events-none"
    }`}
      >
        {/* -------- Header -------- */}

        <div className="flex items-center justify-between px-3 py-2 border-b">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded-full" />
            <span className="text-sm font-medium">ClinicCare</span>
          </div>

          <div className="flex items-center gap-2">
            {messages.length > 1 && (
              <button
                onClick={clearChat}
                className="text-xs text-gray-500 hover:text-red-500"
              >
                Clear
              </button>
            )}

            <button onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>
        </div>

        {/* -------- Body -------- */}

        <div className="p-3">
          {/* Messages */}

          <div className="flex flex-col gap-1.5 max-h-64 overflow-y-auto pr-1">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`text-[13px] px-3 py-2 rounded-lg max-w-[80%]
              ${
                msg.type === "bot"
                  ? "bg-gray-100 self-start"
                  : "bg-sky-600 text-white self-end"
              }`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          {/* Actions */}

          <div className="flex cursor-pointer flex-wrap gap-2 mt-3">
            <a
              href="https://wa.me/919876543210?text=Hello%20I%20want%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-600 text-white text-xs"
            >
              <Phone size={14} />
              WhatsApp
            </a>

            <button
              onClick={() => handleAction("doctors")}
              className="flex items-center gap-1 px-3 py-1 rounded-full border text-xs"
            >
              <Stethoscope size={14} />
              Doctors
            </button>

            <button
              onClick={() => handleAction("location")}
              className="flex items-center gap-1 px-3 py-1 rounded-full border text-xs"
            >
              <MapPin size={14} />
              Location
            </button>

            <button
              onClick={() => handleAction("timing")}
              className="flex items-center gap-1 px-3 py-1 rounded-full border text-xs"
            >
              <Clock size={14} />
              Timing
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
