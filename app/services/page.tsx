import {
  HeartPulse,
  Stethoscope,
  Bone,
  Eye,
  Baby,
  Brain,
  ShieldCheck,
  ArrowUpRight,
  Activity,
  CalendarCheck,
} from "lucide-react";
import Link from "next/link";
import ServiceReveal from "@/src/motion/ScrollReveal";

export const metadata = {
  title: "Medical Departments | ClinicCare Patna",
  description:
    "Explore specialized medical services at Bihar's leading NABH accredited facility. 24/7 Cardiology, Pediatrics, and Trauma care.",
};

export default function ServicesPage() {
  const medicalServices = [
    {
      title: "Cardiology",
      desc: "Advanced heart care including ECG, TMT, and specialized consultations.",
      icon: HeartPulse,
      status: "Available 24/7",
    },
    {
      title: "General Medicine",
      desc: "Comprehensive health checkups and management of chronic diseases.",
      icon: Stethoscope,
      status: "Expert Care",
    },
    {
      title: "Pediatrics",
      desc: "Compassionate child healthcare, vaccinations, and screening.",
      icon: Baby,
      status: "Child-Friendly",
    },
    {
      title: "Orthopedics",
      desc: "Specialized care for bone, joint, and spinal issues including trauma surgery.",
      icon: Bone,
      status: "Active Care",
    },
    {
      title: "Neurology",
      desc: "Treatment for brain and nervous system disorders with cutting-edge diagnostics.",
      icon: Brain,
      status: "Specialized",
    },
    {
      title: "Ophthalmology",
      desc: "Complete eye care solutions from routine exams to advanced surgical procedures.",
      icon: Eye,
      status: "Optical Hub",
    },
  ];

  return (
    <main className="min-h-screen bg-white antialiased selection:bg-sky-100">
      {/* --- HERO: Clinical Header --- */}
      <section className="px-6 py-20 md:py-32 border-b border-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 px-4 py-2 text-sky-700 text-[10px] font-black uppercase tracking-[0.3em]">
            <ShieldCheck size={14} aria-hidden="true" />
            NABH Accredited Clinical Protocols
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9]">
            Medical <br />{" "}
            <span className="text-sky-700 not-italic">Scope.</span>
          </h1>

          <p className="text-slate-500 text-sm md:text-base font-bold uppercase max-w-xl leading-relaxed tracking-tight">
            Specialized departments equipped with digital diagnostics and
            Bihar&apos;s leading clinical specialists in the heart of Patna.
          </p>
        </div>
      </section>

      {/* --- SERVICES LIST: Clean Industrial Layout --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {medicalServices.map((service, i) => (
            <ServiceReveal key={service.title} delay={i * 0.05}>
              <article className="group relative flex flex-col items-start space-y-6">
                {/* Visual Icon Hook */}
                <div className="flex items-center justify-between w-full">
                  <div className="bg-slate-50 text-sky-700 p-4 group-hover:bg-sky-700 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                    <service.icon
                      size={24}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1">
                    {service.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] md:text-xs font-bold uppercase leading-relaxed tracking-tight">
                    {service.desc}
                  </p>
                </div>

                <Link
                  href={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
                  className="inline-flex items-center gap-3 text-[10px] font-black text-sky-700 uppercase tracking-[0.2em] border-b-2 border-sky-700/10 pb-1 hover:border-sky-700 transition-all"
                  aria-label={`Learn more about our ${service.title} department`}
                >
                  View Department <ArrowUpRight size={14} />
                </Link>
              </article>
            </ServiceReveal>
          ))}
        </div>
      </section>

      {/* --- EMERGENCY: High Contrast Medical CTA --- */}

      {/* Mobile Safe Area */}
      <div className="h-24 md:hidden" aria-hidden="true" />
    </main>
  );
}
