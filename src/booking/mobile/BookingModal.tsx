import { motion } from "framer-motion";
import { Step } from "./BookingDock";

import DockHeader from "./DockHeader";

import DateTimeStep from "./steps/DateTimeStep";
import LoadingStep from "./steps/LoadingStep";
import PatientFormStep from "./steps/PatientFormStep";
import SuccessStep from "./steps/SuccessStep";
import { JSX } from "react";

type Props = {
  step: Step;
  setStep: (step: Step) => void;
  selectedDate: string;
  selectedTime: string;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (time: string) => void;
  onClose: () => void;
};

export default function BookingModal({
  step,
  setStep,
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
  onClose,
}: Props): JSX.Element {
  return (
    <div className="fixed inset-0 z-9999 flex items-end justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden min-h-125 flex flex-col"
      >
        <DockHeader step={step} onClose={onClose} />

        <div className="flex-1 overflow-y-auto p-6">
          {step === "DATETIME" && (
            <DateTimeStep
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              setSelectedDate={setSelectedDate}
              setSelectedTime={setSelectedTime}
              setStep={setStep}
            />
          )}

          {step === "LOADING" && <LoadingStep />}

          {step === "DETAILS" && (
            <PatientFormStep
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              setStep={setStep}
            />
          )}

          {step === "SUCCESS" && (
            <SuccessStep selectedTime={selectedTime} onClose={onClose} />
          )}
        </div>
      </motion.div>
    </div>
  );
}
