import {
  PhoneCall,
  Ambulance,
  MapPin,
  AlertCircle,
  ShieldAlert,
  ChevronRight,
  HeartPulse,
  Activity,
} from "lucide-react";

export default function EmergencyPage() {
  const emergencyContacts = [
    {
      label: "Clinic Hotline",
      phone: "+91 70040 XXXXX",
      icon: <PhoneCall size={24} />,
      primary: true,
    },
    {
      label: "Govt. Ambulance",
      phone: "102",
      icon: <Ambulance size={24} />,
      primary: false,
    },
    {
      label: "Emergency Blood",
      phone: "+91 70040 YYYYY",
      icon: <HeartPulse size={24} />,
      primary: false,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 antialiased selection:bg-red-100">
      {/* --- Section 1: Critical Video Header --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
          >
            <source src="/videos/Medical_Emergency_Hero.mp4" type="video/mp4" />
          </video>
          {/* Intense Red Overlay for Urgency */}
          <div className="absolute inset-0 bg-linear-to-t from-red-900/90 via-red-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <ShieldAlert size={20} className="text-white animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
              Level 1 Trauma Center Active
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
            Urgent <br />
            <span className="text-red-500 not-italic">Response.</span>
          </h1>

          <p className="text-red-100 text-sm md:text-lg max-w-xl mx-auto font-bold uppercase tracking-tight leading-relaxed">
            Our trauma center in Patna operates 24/7. Follow the protocol below
            for immediate medical extraction.
          </p>
        </div>
      </section>

      {/* --- Section 2: Immediate Call Actions (Mobile First Grid) --- */}
      <section className="px-6 -mt-16 relative z-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emergencyContacts.map((contact) => (
            <a
              key={contact.label}
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className={`p-8 flex flex-col items-center gap-4 text-center transition-all active:scale-95 shadow-2xl ${
                contact.primary
                  ? "bg-red-600 text-white border-none"
                  : "bg-white text-slate-900 border border-slate-100"
              }`}
            >
              <div
                className={`${contact.primary ? "bg-white/20" : "bg-red-50 text-red-600"} p-4 rounded-none`}
              >
                {contact.icon}
              </div>
              <div>
                <p
                  className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${contact.primary ? "text-red-100" : "text-slate-400"}`}
                >
                  {contact.label}
                </p>
                <p className="text-2xl font-black tracking-tighter italic">
                  {contact.phone}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- Section 3: Protocol & Logistics --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16 items-start">
        {/* First Aid Protocol */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-950 uppercase italic tracking-tighter flex items-center gap-3">
              <AlertCircle size={32} className="text-red-600" /> Wait Protocol
            </h2>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-loose">
              Do not panic. Follow these clinical steps while the ambulance is
              in transit to your location.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "Maintain Airway",
                desc: "Ensure the patient is in a clear breathing position. Keep them still.",
              },
              {
                title: "Clear Access",
                desc: "Remove obstacles from the entrance to ensure rapid stretcher movement.",
              },
              {
                title: "Clinical Records",
                desc: "Prepare previous prescriptions and ID proof for hospital admission.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 bg-white border border-slate-100 group hover:border-red-600/30 transition-colors"
              >
                <span className="text-4xl font-black text-red-600/10 group-hover:text-red-600 transition-colors">
                  0{i + 1}
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-slate-950 uppercase italic">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Location Card */}
        <div className="lg:col-span-5 bg-slate-950 p-10 text-white relative overflow-hidden">
          <Activity
            size={300}
            className="absolute -right-20 -bottom-20 text-white/5 pointer-events-none"
          />

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter flex items-center gap-3">
                <MapPin className="text-red-600" /> Clinical HQ
              </h3>
              <p className="text-slate-400 text-sm font-bold uppercase leading-relaxed tracking-wide">
                Bailey Road, Near High Court,
                <br />
                Patna, Bihar 800001
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  ICU Available
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Blood Bank 24/7
                </span>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="w-full bg-white text-slate-950 py-5 font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all shadow-2xl"
            >
              Launch Live GPS <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* --- Bihar Emergency Grid --- */}
      <section className="bg-slate-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Bihar State Directives
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900">100</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase">
                Police
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900">101</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase">
                Fire Dept
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900">108</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase">
                Ambulance
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 md:hidden" />
    </main>
  );
}
