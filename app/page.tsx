"use client";

import Link from "next/link";
import {
  Construction,
  Clock,
  Stethoscope,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
              <Construction size={14} />
              Portal Upgrade Underway
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Quality Care for <br />
              <span className="text-primary italic">Every Patient.</span>
            </h1>

            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              We are currently enhancing our digital clinic experience for our
              patients in Bihar. Online booking and digital records will be
              fully active shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/book"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck size={20} />
                Book Fast-Track
              </Link>
              <Link
                href="/services"
                className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                View Services
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Underway Status Cards */}
      <section className="px-6 py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-[#f8fafc] border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Expert Doctors
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Connect with the best specialists in Patna. Our verification
                process ensures top-tier medical advice.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-primary">
                <Clock size={14} />
                UPDATING DATABASE...
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-[#f8fafc] border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Instant Reports
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Access your laboratory results and medical history directly on
                your mobile device.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-secondary">
                <ShieldCheck size={14} />
                ENCRYPTION ACTIVE
              </div>
            </div>

            {/* Card 3 - Bihar Emergency */}
            <div className="p-8 rounded-3xl bg-red-50 border border-red-100 space-y-4">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-200">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-900">Emergency 24/7</h3>
              <p className="text-sm text-red-700/70 leading-relaxed">
                Critical care and ambulance services are always active,
                regardless of portal updates.
              </p>
              <Link
                href="tel:102"
                className="pt-2 flex items-center gap-2 text-xs font-black text-red-600 hover:underline"
              >
                CALL 102 NOW <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Only Info Placeholder */}
      <section className="md:hidden px-6 py-12 text-center pb-32">
        <div className="p-6 bg-primary rounded-3xl text-white">
          <h4 className="font-bold mb-2">Download our Mobile Lite app</h4>
          <p className="text-sm opacity-80 mb-4">
            Fastest way to book appointments in Bihar.
          </p>
          <button className="bg-white text-primary px-6 py-2 rounded-xl font-bold text-sm">
            Coming Soon
          </button>
        </div>
      </section>

      {/* Safe bottom spacer for fixed nav */}
      <div className="h-20 md:hidden" />
    </main>
  );
}
