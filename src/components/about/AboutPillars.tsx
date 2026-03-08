import { Target, Stethoscope, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "Provide accessible and reliable healthcare services with modern technology.",
  },
  {
    icon: Stethoscope,
    title: "Advanced Care",
    desc: "Specialist doctors and modern diagnostics delivering accurate treatment.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Located in Patna for easy access with fast emergency support.",
  },
];

export default function AboutPillars() {
  return (
    <section className="bg-slate-950 py-20 px-5">
      <div className="max-w-6xl mx-auto space-y-12">
        {pillars.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="bg-white/5 backdrop-blur p-6 md:p-8 rounded-xl border border-white/10">
              <item.icon className="text-sky-400 mb-4" size={26} />

              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
