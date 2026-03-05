"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import BookingHeader from "./BookingHeader";
import DateTimeStep from "./DateTimeStep";
import ValidatingStep from "./ValidatingStep";
import PatientDetailsStep from "./PatientDetailsStep";
import SuccessStep from "./SuccessStep";
import { BookingFormData, Steps } from "./types/booking";

// Main Controller
export default function BookingManager() {
  const [step, setStep] = useState<Steps>("DATETIME");

  const [formData, setFormData] = useState<BookingFormData>({
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });

  const nextStep = () => {
    setStep("VALIDATING");

    setTimeout(() => {
      setStep("DETAILS");
    }, 1500);
  };

  return (
    <div className="w-full mt-8 max-w-2xl mx-auto p-8 mb-15 border border-slate-100 shadow-2xl overflow-hidden">
      <BookingHeader step={step} />

      <div className="p-8 md:p-12 min-h-112.5 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step === "DATETIME" && (
            <DateTimeStep
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          )}

          {step === "VALIDATING" && <ValidatingStep />}

          {step === "DETAILS" && (
            <PatientDetailsStep
              formData={formData}
              setFormData={setFormData}
              setStep={setStep}
            />
          )}

          {step === "SUCCESS" && <SuccessStep />}
        </AnimatePresence>
      </div>
    </div>
  );
}
