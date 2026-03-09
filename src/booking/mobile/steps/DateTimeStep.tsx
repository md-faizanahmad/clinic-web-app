import { JSX } from "react";
import { Step } from "../BookingDock";
import { ChevronRight } from "lucide-react";
import TimeButton from "../ui/TimeButton";
import DateButton from "./DateButton";

type Props = {
  selectedDate: string;
  selectedTime: string;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (time: string) => void;
  setStep: (step: Step) => void;
};

export default function DateTimeStep({
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
  setStep,
}: Props): JSX.Element {
  const dates = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toISOString().split("T")[0];
  });

  const times = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "01:30 PM",
    "04:00 PM",
    "05:30 PM",
    "07:00 PM",
    "08:30 PM",
  ];

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime) return;
    setStep("LOADING");
    setTimeout(() => setStep("DETAILS"), 1500);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-2">
        {dates.slice(0, 9).map((date) => (
          <DateButton
            key={date}
            date={date}
            selected={selectedDate === date}
            onSelect={setSelectedDate}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {times.map((time) => (
          <TimeButton
            key={time}
            time={time}
            selected={selectedTime === time}
            onSelect={setSelectedTime}
          />
        ))}
      </div>

      <button
        disabled={!selectedDate || !selectedTime}
        onClick={handleSubmit}
        className="w-full bg-slate-900 cursor-pointer text-white py-5 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-30"
      >
        Next Step <ChevronRight size={16} />
      </button>
    </div>
  );
}
