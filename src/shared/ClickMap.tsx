"use client";

import { MapPin, Navigation, ExternalLink } from "lucide-react";

export default function ClinicMap() {
  // Replace with your actual embed URL
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57563.88219500096!2d85.08447477610486!3d25.613346146145325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2993061973543%3A0x715a20607fdec57!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-6 antialiased">
      {/* Container: No shadow or border, just clean padding */}
      <div className="bg-transparent overflow-hidden">
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-xl text-primary">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-tight">
                Patna Clinic HQ
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Bailey Road, Bihar
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/your-link"
            target="_blank"
            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all active:scale-95 shadow-sm"
          >
            <Navigation size={12} />
            Route
          </a>
        </div>

        {/* Map Frame: Height adjusted to 70 (mobile) and 80 (desktop) */}
        <div className="relative w-full overflow-hidden rounded-[2rem] group">
          <iframe
            src={mapSrc}
            className="w-full h-70 md:h-80 grayscale-[0.3] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Subtle Blend: Soft edges to feel more integrated */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2rem]" />

          {/* Mobile Overlay */}
          <div className="absolute bottom-3 right-3 md:hidden">
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 text-[9px] font-black text-slate-700 uppercase">
              <ExternalLink size={10} />
              Expand
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
