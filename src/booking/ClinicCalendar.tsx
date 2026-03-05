"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format, addMonths } from "date-fns";
import { BookingFormData } from "./types/booking";
import Image from "next/image";

type Props = {
  formData: BookingFormData;
  setFormData: (data: BookingFormData) => void;
};

export default function ClinicCalendar({ formData, setFormData }: Props) {
  const [open, setOpen] = useState(false);

  const today = new Date();
  const maxDate = addMonths(today, 2);

  const selectedDate = formData.date ? new Date(formData.date) : undefined;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <PopoverTrigger asChild>
        <button
          className="
          w-full flex items-center justify-between
          bg-white border border-slate-200
          px-5 py-4
          text-sm font-semibold tracking-wide
          rounded-md
          hover:border-sky-600
          hover:bg-sky-50
          transition-all
          shadow-sm
        "
        >
          {selectedDate
            ? format(selectedDate, "PPP")
            : "Select Appointment Date"}

          <CalendarIcon size={18} className="text-sky-700 cursor-pointer" />
        </button>
      </PopoverTrigger>

      {/* Popup */}
      <PopoverContent
        align="start"
        sideOffset={0}
        className="
        relative
        w-70
        border border-slate-200
        bg-white
        rounded-xl
        shadow-xl

        overflow-hidden
      "
      >
        {/* Background medical texture */}
        <div
          className="
          absolute inset-0
          opacity-[0.04]
          bg-[url('/medical-pattern.svg')]
          bg-center
          bg-cover
        "
        />

        {/* Brand watermark */}
        <div
          className="
          absolute inset-0
          flex items-center justify-center
          opacity-[0.8]
          pointer-events-none
        "
        >
          <Image
            src="/logo.png"
            alt="brand"
            width={128}
            height={128}
            className="w-32 h-32 object-contain rounded-full"
          />
        </div>

        {/* Calendar */}
        <div className="relative z-10">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              if (!date) return;

              setFormData({
                ...formData,
                date: date.toLocaleDateString("en-CA"),
              });

              setOpen(false);
            }}
            disabled={{
              before: today,
              after: maxDate,
            }}
            className="rounded-md"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
