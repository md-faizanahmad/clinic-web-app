"use client";

import { CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  onOpen: () => void;
};

export default function DockTrigger({ onOpen }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-44 right-5 z-50">
      <button
        onClick={onOpen}
        className="bg-sky-700 cursor-pointer rounded-full text-white h-12 w-12 flex items-center justify-center shadow-xl active:scale-90 transition-transform"
      >
        <CalendarCheck size={26} />
      </button>
    </div>
  );
}
