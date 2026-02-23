// app/about/page.tsx
import {
  Users,
  Award,
  ShieldCheck,
  Target,
  MapPin,
  Stethoscope,
  Activity,
  ChevronRight,
} from "lucide-react";

export default function AboutPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#f8fafc] antialiased">
      {/* --- Section 1: Hero & Vision --- */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              <Activity size={14} />
              Serving Bihar Since 2026
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Compassionate <br />
              <span className="text-primary italic underline decoration-secondary/30 underline-offset-8">
                Care
              </span>{" "}
              for Bihar.
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              Located in the heart of Patna, ClinicCare is a modern
              multi-specialty center dedicated to bridging the gap between
              advanced medical science and patient-centric healing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <ShieldCheck className="text-secondary" size={20} />
                NABH Standards
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <ShieldCheck className="text-secondary" size={20} />
                Digital Health Records
              </div>
            </div>
          </div>

          {/* Static Stats Grid (Pure CSS Hover) */}
          <div className="grid grid-cols-1 gap-4">
            <div className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-6">
                <div className="bg-primary/5 text-primary p-5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                    25+ Specialists
                  </h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Certified Doctors
                  </p>
                </div>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-secondary/20 transition-colors">
              <div className="flex items-center gap-6">
                <div className="bg-secondary/5 text-secondary p-5 rounded-2xl group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                    15+ Departments
                  </h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Multi-Specialty Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Core Philosophy --- */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Target className="text-secondary mb-4" size={40} />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Our Mission
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To democratize world-class healthcare in Bihar, ensuring that
              quality diagnosis and treatment are accessible to every citizen.
            </p>
          </div>
          <div className="space-y-4">
            <Stethoscope className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Modern Tech
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Equipped with latest-gen diagnostics, MRI, and digitized pharmacy
              systems to minimize waiting times and maximize accuracy.
            </p>
          </div>
          <div className="space-y-4">
            <MapPin className="text-secondary mb-4" size={40} />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Patna Presence
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Centrally located on Bailey Road, providing 24/7 emergency
              response and ambulance services across Patna.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 3: Call to Action --- */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-black text-slate-900 mb-6">
          Experience Better Health Today.
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          Whether it is a routine checkup or specialized consultation, our team
          at ClinicCare Bihar is ready to assist you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/book"
            className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Book an Appointment
          </a>
          <a
            href="/services"
            className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2"
          >
            Explore Services <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer Spacer for Mobile Dock */}
      <div className="h-32 md:hidden" />
    </main>
  );
}
