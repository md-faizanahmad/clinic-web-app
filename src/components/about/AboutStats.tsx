import { Users, HeartPulse, Award, Activity } from "lucide-react";

const stats = [
  { label: "Specialists", value: "25+", icon: Users },
  { label: "Departments", value: "15+", icon: HeartPulse },
  { label: "Patients Served", value: "50K+", icon: Award },
  { label: "Digital Records", value: "100%", icon: Activity },
];

export default function AboutStats() {
  return (
    <section className="py-16 px-5 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((item, i) => (
          <div key={i} className="text-center md:text-left">
            <item.icon
              size={18}
              className="text-sky-600 mb-2 mx-auto md:mx-0"
            />

            <p className="text-3xl font-bold text-slate-900">{item.value}</p>

            <p className="text-xs uppercase tracking-wide text-slate-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
