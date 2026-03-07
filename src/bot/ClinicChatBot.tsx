"use client";
import { useState } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const doctors = [
  { name: "Dr. Rahman", role: "General Physician" },
  { name: "Dr. Khan", role: "Dentist" },
  { name: "Dr. Ali", role: "Pediatrician" },
];

export default function ClinicChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello 👋 Ask about clinic timing, location, or doctors.",
    },
  ]);

  const [input, setInput] = useState("");

  const getBotReply = (text: string) => {
    const message = text.toLowerCase();

    if (message.includes("location")) {
      return "Clinic Location: Patna, Bihar. Google Maps: https://maps.google.com";
    }

    if (message.includes("time") || message.includes("timing")) {
      return "Clinic Timing: 9 AM – 8 PM (Monday – Saturday)";
    }

    if (message.includes("doctor")) {
      return doctors.map((d) => `${d.name} – ${d.role}`).join("\n");
    }

    return "Sorry, ask about clinic timing, location, or doctor list.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    const botMsg: Message = { sender: "bot", text: getBotReply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-lg rounded-xl p-4">
      <div className="h-60 overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.sender === "user" ? "text-right" : "text-left"}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex mt-3 gap-2">
        <input
          className="border flex-1 p-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />

        <button onClick={sendMessage} className="bg-blue-500 text-white px-3">
          Send
        </button>
      </div>
    </div>
  );
}
