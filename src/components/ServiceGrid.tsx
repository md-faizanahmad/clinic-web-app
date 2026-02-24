// components/ServiceGrid.tsx
import {
  HeartPulse,
  Stethoscope,
  Baby,
  Activity,
  Plus,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function ServiceGrid() {
  const services = [
    {
      title: "Cardiology",
      desc: "Advanced heart diagnostics and care.",
      icon: <HeartPulse size={24} />,
      href: "/services/cardiology",
    },
    {
      title: "Diagnostics",
      desc: "Instant lab reports & digital X-Ray.",
      icon: <Activity size={24} />,
      href: "/services/diagnostics",
    },
    {
      title: "Pediatrics",
      desc: "Expert care for your child's health.",
      icon: <Baby size={24} />,
      href: "/services/pediatrics",
    },
    {
      title: "General Care",
      desc: "Routine checkups & chronic management.",
      icon: <Stethoscope size={24} />,
      href: "/services/general",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        {/* Header - Short & Punchy */}
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-1">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
              Departments
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight italic">
              Medical Expertise.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
          >
            View All <ChevronRight size={14} />
          </Link>
        </div>

        {/* Grid - 3-6 items max */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white p-6 rounded-4xl border border-slate-100 hover:border-primary/20 transition-all duration-300 active:scale-[0.98]"
            >
              <div className="flex flex-col h-full space-y-4">
                {/* Compact Icon */}
                <div className="w-12 h-12 bg-slate-50 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-black text-slate-900 leading-none tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase tracking-wide">
                    {service.desc}
                  </p>
                </div>

                {/* Subtle Action Link */}
                <div className="pt-2 flex items-center gap-1 text-[10px] font-black text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                  Details <Plus size={10} strokeWidth={3} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
