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
      <PopoverTrigger asChild>
        <button className="w-full flex items-center justify-between bg-slate-50 border border-slate-100 p-5 text-sm font-black uppercase hover:border-sky-700 transition">
          {selectedDate ? format(selectedDate, "PPP") : "SELECT DATE"}

          <CalendarIcon size={16} className="text-sky-700" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
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
        />
      </PopoverContent>
    </Popover>
  );
}
