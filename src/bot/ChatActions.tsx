"use client";

import { MapPin, Clock, Stethoscope, Phone } from "lucide-react";
import type { View } from "./types";

type Props = {
  onAction: (view: View) => void;
};

export default function ChatActions({ onAction }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      ```
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
        onClick={() => onAction("doctors")}
        className="flex items-center gap-1 px-3 py-1 rounded-full border text-xs"
      >
        <Stethoscope size={14} />
        Doctors
      </button>
      <button
        onClick={() => onAction("location")}
        className="flex items-center gap-1 px-3 py-1 rounded-full border text-xs"
      >
        <MapPin size={14} />
        Location
      </button>
      <button
        onClick={() => onAction("timing")}
        className="flex items-center gap-1 px-3 py-1 rounded-full border text-xs"
      >
        <Clock size={14} />
        Timing
      </button>
    </div>
  );
}
