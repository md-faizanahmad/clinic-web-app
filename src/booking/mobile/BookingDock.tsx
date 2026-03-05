"use client";

import { useState, useEffect, useCallback, JSX } from "react";
import { AnimatePresence } from "framer-motion";

import DockTrigger from "./DockTrigger";
import BookingModal from "./BookingModal";

export type Step = "DATETIME" | "LOADING" | "DETAILS" | "SUCCESS";

export default function BookingDock(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState<Step>("DATETIME");

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  /** Close modal + reset state */
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setStep("DATETIME");
    setSelectedDate("");
    setSelectedTime("");
  }, []);

  /** Only external side-effect: scroll lock */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <DockTrigger onOpen={() => setIsOpen(true)} />

      <AnimatePresence>
        {isOpen && (
          <BookingModal
            step={step}
            setStep={setStep}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            setSelectedDate={setSelectedDate}
            setSelectedTime={setSelectedTime}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
