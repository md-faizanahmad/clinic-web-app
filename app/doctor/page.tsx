import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Stethoscope as StethoscopeIcon,
  MapPin,
  ChevronRight,
  Activity,
  ShieldCheck,
  Users,
  HeartPulse,
  Award,
} from "lucide-react";
import StethoscopeOverlay from "@/src/design/StethoscopeOverlay";
import ScrollReveal from "@/src/motion/ScrollReveal";

export const metadata = {
  title: "About Us | ClinicCare Patna - Multi-Specialty Hospital",
  description:
    "Bihar's premier digital-first medical facility, featuring AIIMS-certified doctors and 24/7 trauma care.",
};

export default function AboutPage() {
  const pillars = [
    {
      id: "01",
      title: "The Mission",
      desc: "World-class healthcare, accessible globally.", // Short, medium description
      icon: Target,
      accent: "text-sky-700",
    },
    {
      id: "02",
      title: "The Technology",
      desc: "Precision technology, rapid recovery.", // Short, medium description
      icon: StethoscopeIcon,
      accent: "text-emerald-600",
    },
    {
      id: "03",
      title: "The Location",
      desc: "Nerve center, 24/7 emergency response.", // Short, medium description
      icon: MapPin,
      accent: "text-rose-600",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white selection:bg-sky-100 overflow-x-hidden">
      {/* --- 1. THE FLOATING BRAND IDENTITY --- */}
      <StethoscopeOverlay />

      {/* --- 2. HERO SECTION --- */}
      <section
        aria-labelledby="about-hero-title"
        className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto"
      >
        <header className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-sky-700" />
            <span className="text-sky-700 text-[10px] font-black uppercase tracking-[0.4em]">
              Medical Precision
            </span>
          </div>

          <h1
            id="about-hero-title"
            className="text-6xl md:text-9xl font-black text-slate-950 uppercase italic tracking-tighter leading-[0.85]"
          >
            Bihar&apos;s <br />
            <span className="text-sky-700 not-italic border-b-8 border-sky-700/10">
              New Pulse.
            </span>
          </h1>
        </header>
      </section>

      {/* --- 3. CORE PILLARS (SERVER CONTENT, CLIENT ANIMATION) --- */}
      <section
        aria-label="Core Pillars"
        className="relative z-10 bg-slate-950/95 backdrop-blur-sm py-24 md:py-40"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-16 md:gap-24">
            {pillars.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 0.1}>
                <article className="flex flex-col md:flex-row items-start gap-8 md:gap-20 border-t border-white/10 pt-12 group hover:border-sky-500 transition-colors">
                  {/* ID & ICON */}
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:w-24">
                    <span className="text-5xl font-black text-white/10 group-hover:text-sky-500 transition-colors">
                      {item.id}
                    </span>
                    <item.icon
                      size={24}
                      className={`${item.accent} md:mt-4`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="md:w-1/3">
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                      {item.title}
                    </h3>
                  </div>

                  {/* Redesigned Pillers for Compactness and Medium Font */}
                  <div className="md:w-1/2">
                    <p className="text-slate-400 font-medium leading-relaxed uppercase md:normal-case md:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. STATS STRIP --- */}
      <section className="relative z-10 bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Specialists", val: "25+", icon: Users },
            { label: "Departments", val: "15+", icon: HeartPulse },
            { label: "Success Rate", val: "99%", icon: Award },
            { label: "Digital HQs", val: "100%", icon: Activity },
          ].map((stat, i) => (
            <article key={i} className="text-center md:text-left space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-sky-700 mb-2">
                <stat.icon size={16} aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {stat.label}
                </span>
              </div>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
                {stat.val}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* --- 5. COMPACT CTA SECTION (USING CTA.PNG) --- */}
      <section
        aria-labelledby="cta-heading"
        className="relative z-10 px-6 py-24 max-w-6xl mx-auto"
      >
        <div className="relative bg-sky-700 p-10 md:p-24 overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <Image
              src="/cta.png"
              alt="" // Decorative image
              fill
              className="object-cover opacity-20 grayscale"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 text-center space-y-10">
            <h2
              id="cta-heading"
              className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none"
            >
              Ready for <br />{" "}
              <span className="text-slate-900 not-italic underline decoration-white/20 underline-offset-12">
                Better Care?
              </span>
            </h2>

            <nav
              aria-label="Appointment Links"
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/book"
                className="bg-slate-950 text-white px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-slate-950 transition-all shadow-2xl focus:ring-4 focus:ring-slate-900/20 outline-none"
              >
                Request Slot
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Our Services <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </div>
      </section>

      <div className="h-24 md:hidden" aria-hidden="true" />
    </main>
  );
}
