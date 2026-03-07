"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Appointment = {
  patient: string;
  doctor: string;
  reason: string;
  time: string;
};

const appointmentData: Record<string, Appointment[]> = {
  "2026-03-22": [
    {
      patient: "Rahul Kumar",
      doctor: "Dr Sharma",
      reason: "Fever",
      time: "10:30 AM",
    },
    {
      patient: "Priya Singh",
      doctor: "Dr Khan",
      reason: "Dental Checkup",
      time: "12:00 PM",
    },
  ],
  "2026-03-24": [
    {
      patient: "Amit Verma",
      doctor: "Dr Ali",
      reason: "Child Consultation",
      time: "11:15 AM",
    },
  ],
};

export default function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      {/* Calendar */}

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const dateKey = `2026-03-${String(day).padStart(2, "0")}`;
          const hasAppointment = appointmentData[dateKey];

          return (
            <button
              key={day}
              onClick={() => hasAppointment && setSelectedDate(dateKey)}
              className={`h-12 rounded-lg border text-sm flex items-center justify-center
              ${hasAppointment ? "bg-sky-100 border-sky-400 font-semibold" : "bg-white"}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Modal */}

      {selectedDate && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50">
          <div className="bg-white w-full sm:w-100 rounded-t-xl sm:rounded-xl p-5 max-h-[80vh] overflow-y-auto">
            {/* Header */}

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Appointments</h2>

              <button onClick={() => setSelectedDate(null)}>
                <X size={18} />
              </button>
            </div>

            {/* Appointment List */}

            <div className="space-y-3">
              {appointmentData[selectedDate]?.map((item, i) => (
                <div key={i} className="border rounded-lg p-3 text-sm">
                  <p className="font-semibold">{item.patient}</p>

                  <p className="text-gray-600">Doctor: {item.doctor}</p>

                  <p className="text-gray-600">Reason: {item.reason}</p>

                  <p className="text-gray-500 text-xs">Time: {item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
