// components/AppointmentCTA.tsx
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Mail,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="w-full px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[3rem] bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta.png" // Your public/cta.png
            alt="Clinic Interior"
            fill
            className="object-cover opacity-40 grayscale-[0.2]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent md:to-slate-950/20" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-1.5 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.2em]">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Direct Clinical Access
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter italic">
              Book Your <br />
              <span className="text-primary italic underline decoration-white/10 underline-offset-8">
                Appointment
              </span>{" "}
              Today.
            </h2>

            <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed">
              Don’t wait for your health to decline. Get expert consultation
              within hours. Our specialists are ready to assist you.
            </p>

            <div className="flex items-center gap-4 text-white/40 text-xs font-bold uppercase tracking-widest pt-2">
              <span className="flex items-center gap-1.5">
                <CalendarCheck size={14} /> 24/7 Availability
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5">
                <ArrowRight size={14} /> Instant Confirmation
              </span>
            </div>
          </div>

          {/* Action Stack (The "Money" Buttons) */}
          <div className="flex flex-col gap-4 w-full max-w-sm ml-auto">
            {/* WhatsApp - Priority 1 */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="group bg-[#25D366] text-white flex items-center justify-between px-8 py-5 rounded-2xl font-black text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#25D366]/20"
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={22} fill="currentColor" />
                CHAT ON WHATSAPP
              </div>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            {/* Call - Priority 2 */}
            <a
              href="tel:+91XXXXXXXXXX"
              className="group bg-primary text-white flex items-center justify-between px-8 py-5 rounded-2xl font-black text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20"
            >
              <div className="flex items-center gap-3">
                <Phone size={22} fill="currentColor" />
                CALL DIRECTLY
              </div>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            {/* Email - Secondary */}
            <a
              href="mailto:help@cliniccare.com"
              className="group bg-white/5 backdrop-blur-md border border-white/10 text-white flex items-center justify-between px-8 py-5 rounded-2xl font-black text-sm transition-all hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <Mail size={22} />
                SEND AN EMAIL
              </div>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
