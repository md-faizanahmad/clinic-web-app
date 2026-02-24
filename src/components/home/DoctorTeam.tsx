// components/DoctorTeam.tsx
import Image from "next/image";
import { GraduationCap, Award, CalendarCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DoctorTeam() {
  const doctors = [
    {
      name: "Dr. Anya Singh",
      role: "Chief Cardiologist",
      qual: "MD, AIIMS New Delhi",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070",
      exp: "12+ Years",
    },
    {
      name: "Dr. Rohan Kumar",
      role: "Senior Pediatrician",
      qual: "MBBS, MRCPCH London",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070",
      exp: "10+ Years",
    },
    {
      name: "Dr. Sanjay Gupta",
      role: "Neurologist",
      qual: "DM Neurology, NIMHANS",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964",
      exp: "15+ Years",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <Award size={14} /> World-Class Specialists
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none italic">
              Meet Our <span className="text-primary">Experts.</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium max-w-md">
              A team of highly qualified specialists dedicated to providing
              international healthcare standards in Patna.
            </p>
          </div>
          <Link
            href="/doctors"
            className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
          >
            View All Staff <ArrowRight size={14} />
          </Link>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">
                      {doc.exp} Experience
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none">
                    {doc.name}
                  </h3>
                  <p className="text-sm font-bold text-primary italic">
                    {doc.role}
                  </p>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <GraduationCap
                    className="text-slate-400 shrink-0"
                    size={18}
                  />
                  <p className="text-[11px] font-bold text-slate-600 leading-tight uppercase tracking-tight">
                    {doc.qual}
                  </p>
                </div>

                <Link
                  href="/book"
                  className="w-full py-3.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-primary transition-colors active:scale-95"
                >
                  <CalendarCheck size={16} />
                  Book Consult
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
