// components/AboutClinic.tsx
import Image from "next/image";
import {
  ShieldCheck,
  GraduationCap,
  Building2,
  HeartHandshake,
} from "lucide-react";

export default function AboutClinic() {
  const highlights = [
    {
      title: "Certified Specialists",
      text: "Doctors from AIIMS & top global institutions.",
      icon: <GraduationCap size={20} />,
    },
    {
      title: "Modern Environment",
      text: "Sanitized, private, and tech-enabled rooms.",
      icon: <Building2 size={20} />,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Visual Trust */}
        <div className="relative group">
          {/* Main Image - Replace with your actual clinic photo */}
          <div className="relative aspect-4/5 md:aspect-square w-full overflow-hidden rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <Image
              src="/doctors.png"
              alt="Modern Clinic Environment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Dark Overlay for branding lift */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-60" />
          </div>

          {/* Floating Badge over image */}
          <div className="absolute -bottom-6 -right-6 md:right-10 bg-secondary p-6 rounded-[2.5rem] shadow-xl animate-bounce-slow">
            <HeartHandshake className="text-white" size={32} />
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <ShieldCheck size={14} /> Since 2016 • Patna HQ
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight italic">
              Bihar’s Standard for{" "}
              <span className="text-primary underline decoration-primary/20 underline-offset-8">
                Clinical Excellence.
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-slate-500 text-lg leading-relaxed font-medium italic">
              &quot;We started with a single mission: to provide the people of
              Bihar with medical care that doesn&apos;t require traveling to
              another state.&quot;
            </p>

            <p className="text-slate-600 text-sm leading-loose">
              Our facility combines international healthcare protocols with
              local compassion. From digital diagnostics to 24/7 trauma
              response, every corner of ClinicCare is built to prioritize
              patient recovery and comfort.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="bg-slate-50 text-primary p-3 rounded-2xl h-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-bold leading-normal">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Signature Action */}
          <div className="pt-6 border-t border-slate-100 flex items-center gap-6">
            <div>
              <p className="text-xs font-black text-slate-900 uppercase italic">
                Dr. Aryan Sharma
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Chief Medical Officer
              </p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <button className="text-[11px] font-black text-primary uppercase border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
              Our Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
