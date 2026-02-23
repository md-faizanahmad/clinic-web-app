// app/services/page.tsx
import {
  HeartPulse,
  Stethoscope,
  Bone,
  Eye,
  Baby,
  Brain,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const medicalServices = [
    {
      title: "Cardiology",
      desc: "Advanced heart care including ECG, TMT, and specialized consultations with Bihar's top cardiologists.",
      icon: <HeartPulse size={28} />,
      status: "Available 24/7",
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      title: "General Medicine",
      desc: "Comprehensive health checkups and management of chronic diseases like diabetes and hypertension.",
      icon: <Stethoscope size={28} />,
      status: "Instant Booking",
      color: "text-primary",
      bg: "bg-blue-50",
    },
    {
      title: "Pediatrics",
      desc: "Compassionate child healthcare, vaccinations, and developmental screening for infants and children.",
      icon: <Baby size={28} />,
      status: "Child-Friendly",
      color: "text-secondary",
      bg: "bg-teal-50",
    },
    {
      title: "Orthopedics",
      desc: "Specialized care for bone, joint, and spinal issues including modern physiotherapy and trauma surgery.",
      icon: <Bone size={28} />,
      status: "Active",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      title: "Neurology",
      desc: "Treatment for brain and nervous system disorders with cutting-edge diagnostics in Patna.",
      icon: <Brain size={28} />,
      status: "Specialized",
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      title: "Ophthalmology",
      desc: "Complete eye care solutions from routine vision exams to advanced surgical procedures.",
      icon: <Eye size={28} />,
      status: "Standard",
      color: "text-sky-500",
      bg: "bg-sky-50",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] antialiased">
      {/* Header Section */}
      <section className="bg-white border-b border-slate-100 px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck size={14} />
            NABH Accredited Services
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Our Medical{" "}
            <span className="text-primary italic">Departments.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Providing a wide range of specialized medical services in Patna with
            state-of-the-art diagnostic equipment and expert clinical staff.
          </p>
        </div>
      </section>

      {/* Services Grid */}

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicalServices.map((service, i) => (
            <div
              key={service.title}
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Service Icon */}
              <div
                className={`${service.bg} ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Status Badge */}
              <div className="mb-4 inline-block bg-slate-50 px-3 py-1 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {service.status}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                {service.title}
              </h3>

              <p className="text-sm text-slate-500 leading-loose mb-6">
                {service.desc}
              </p>

              <Link
                href={`/services/${service.title.toLowerCase()}`}
                className="inline-flex items-center gap-2 text-sm font-black text-primary hover:gap-3 transition-all"
              >
                Learn More <ArrowUpRight size={18} />
              </Link>

              {/* Decorative faint background title */}
              <span className="absolute -bottom-4 -right-4 text-slate-50 font-black text-6xl pointer-events-none uppercase">
                {service.title.slice(0, 4)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Footer Hook */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-black text-white italic">
              Need Immediate Assistance?
            </h2>
            <p className="text-slate-400 text-sm">
              Our emergency and trauma unit operates 24/7 in Bihar.
            </p>
          </div>
          <Link
            href="/emergency"
            className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-red-900/20 hover:bg-red-700 transition-all active:scale-95"
          >
            Go to Emergency
          </Link>
        </div>
      </section>

      {/* Mobile Safe Area Spacer */}
      <div className="h-32 md:hidden" />
    </main>
  );
}
