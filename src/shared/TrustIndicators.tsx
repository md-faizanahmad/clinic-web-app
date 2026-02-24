// components/TrustIndicators.tsx
import { Award, Users, UserCheck, Clock, CheckCircle2 } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    { label: "10+ Years Experience", icon: <Award size={16} /> },
    { label: "5000+ Happy Patients", icon: <Users size={16} /> },
    { label: "Certified Doctors", icon: <UserCheck size={16} /> },
    { label: "24/7 Emergency", icon: <Clock size={16} /> },
  ];

  return (
    <section className="w-full bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center">
        {/* Container for the items */}
        <div className="flex items-center justify-between w-full gap-8 overflow-x-auto no-scrollbar py-2">
          {indicators.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 whitespace-nowrap group cursor-default"
            >
              {/* Check and Icon wrapper */}
              <div className="flex items-center">
                <CheckCircle2
                  size={14}
                  className="text-secondary mr-2 opacity-80"
                  fill="currentColor"
                />
                <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
              </div>

              {/* Text Styling */}
              <span className="text-[10px] md:text-xs font-black text-slate-700 uppercase tracking-widest">
                {item.label}
              </span>

              {/* Separator (except last item) */}
              {i !== indicators.length - 1 && (
                <div className="hidden md:block h-1 w-1 rounded-full bg-slate-200 ml-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
