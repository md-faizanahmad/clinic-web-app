"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import ActionButton from "./ActionButton";
import BackgroundLayer from "./BackgroundLayer";
import SuccessModal from "./SuccessModel";

export default function AppointmentCTA() {
  const [currentImg, setCurrentImg] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000",
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentImg((prev) => (prev + 1) % images.length),
      5000,
    );
    return () => clearInterval(timer);
  });

  const triggerAction = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="w-full px-4 md:px-6 py-12 md:py-20 bg-white">
      {/* Container: Added max-width and rounded-none for that industrial look */}
      <div className="max-w-6xl mx-auto relative overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl">
        <BackgroundLayer currentImg={currentImg} images={images} />

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 md:p-16 items-center">
          {/* CONTENT AREA */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 text-black text-[9px] font-black uppercase tracking-[0.3em]">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
              </div>
              Direct Patna Support
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase italic">
              Health <br />{" "}
              <span className="text-sky-600 not-italic">On Demand.</span>
            </h2>

            <p className="text-slate-600 text-sm md:text-base font-bold uppercase leading-relaxed max-w-sm tracking-tight">
              Instant specialist access. Just world-class attention in Bihar.
            </p>

            <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <CalendarCheck size={14} className="text-sky-600" />
                <span className="text-[9px] font-black text-slate-900 uppercase">
                  24/7 Live
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-sky-600" />
                <span className="text-[9px] font-black text-slate-900 uppercase">
                  One-Tap Booking
                </span>
              </div>
            </div>
          </div>

          {/* ACTION STACK */}
          <div className="flex flex-col gap-2 w-full max-w-[320px] lg:ml-auto">
            <ActionButton
              onClick={triggerAction}
              icon={MessageCircle}
              label="WHATSAPP CHAT"
              colorClass="bg-[#25D366]"
              showArrow={false}
            />
            <ActionButton
              onClick={triggerAction}
              icon={Phone}
              label="DIRECT CALL"
              colorClass="bg-sky-500"
              showArrow={false}
            />
            <ActionButton
              onClick={triggerAction}
              icon={Mail}
              label="EMAIL INQUIRY"
              colorClass="bg-white border border-slate-200"
              showArrow={false}
            />
          </div>
        </div>
      </div>

      <SuccessModal
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </section>
  );
}
