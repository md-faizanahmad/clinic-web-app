// app/emergency/page.tsx
import {
  PhoneCall,
  Ambulance,
  MapPin,
  Clock,
  AlertCircle,
  ShieldAlert,
  ChevronRight,
  HeartPulse,
} from "lucide-react";

export default function EmergencyPage() {
  const emergencyContacts = [
    {
      label: "Clinic Hotline",
      phone: "+91 70040 XXXXX",
      icon: <PhoneCall size={24} />,
    },
    { label: "Govt. Ambulance", phone: "102", icon: <Ambulance size={24} /> },
    {
      label: "Emergency Blood",
      phone: "+91 70040 YYYYY",
      icon: <HeartPulse size={24} />,
    },
  ];

  return (
    <main className="min-h-screen bg-white antialiased">
      {/* --- Critical Header --- */}
      <section className="bg-red-600 text-white px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="bg-white/20 p-4 rounded-full animate-pulse">
            <ShieldAlert size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
            Emergency Response
          </h1>
          <p className="text-red-100 text-lg max-w-2xl font-medium leading-relaxed">
            Our trauma center and emergency department in Patna are active 24/7.
            Follow the instructions below for immediate assistance.
          </p>
        </div>
      </section>

      {/* --- Immediate Call Actions --- */}
      <section className="px-6 -mt-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emergencyContacts.map((contact) => (
            <a
              key={contact.label}
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="bg-white border-2 border-red-100 p-6 rounded-4xl flex flex-col items-center gap-4 text-center shadow-xl shadow-red-900/5 hover:bg-red-50 transition-colors"
            >
              <div className="text-red-600 bg-red-50 p-4 rounded-2xl">
                {contact.icon}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                  {contact.label}
                </p>
                <p className="text-xl font-black text-slate-900 tracking-tight">
                  {contact.phone}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- First Aid Guidelines --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <AlertCircle size={32} className="text-red-600" />
            While Waiting
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Stay Calm",
                desc: "Keep the patient still and ensure they are breathing comfortably.",
              },
              {
                title: "Clear the Area",
                desc: "Ensure the ambulance has a clear path to the patient's location.",
              },
              {
                title: "Keep Documents Ready",
                desc: "Gather any previous medical records or current medications.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <span className="text-2xl font-black text-red-600/20">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Location & Map Shortcut --- */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <MapPin className="text-red-500" />
                Trauma Center HQ
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Bailey Road, Near High Court, <br />
                Patna, Bihar 800001
              </p>
              <div className="flex items-center gap-4 pt-4 text-xs font-bold">
                <div className="flex items-center gap-1.5 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-lg border border-green-500/20">
                  <Clock size={14} /> Open 24/7
                </div>
                <div className="text-slate-500 italic">
                  ICU & Ventilators Available
                </div>
              </div>
            </div>

            <a
              href="/map"
              className="mt-8 bg-white text-slate-900 py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 group-hover:bg-red-600 group-hover:text-white transition-all"
            >
              Open Live Tracking <ChevronRight size={18} />
            </a>
          </div>
          {/* Decorative faint icon */}
          <Ambulance
            size={200}
            className="absolute -bottom-10 -right-10 text-white/5 rotate-12"
          />
        </div>
      </section>

      {/* --- Global Bihar Support Note --- */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          Official Bihar Emergency Numbers
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-60">
          <div className="text-sm font-black text-slate-900">Police: 100</div>
          <div className="text-sm font-black text-slate-900">Fire: 101</div>
          <div className="text-sm font-black text-slate-900">
            Child Help: 1098
          </div>
        </div>
      </section>

      {/* Mobile Safe Area Spacer */}
      <div className="h-32 md:hidden" />
    </main>
  );
}
