import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
          Ready to Book an Appointment?
        </h2>

        <p className="text-slate-600 text-sm md:text-base">
          Consult with our experienced doctors and get the right treatment
          today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-sky-700 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-sky-800 transition"
          >
            Book Appointment
          </Link>

          <Link
            href="/services"
            className="border border-slate-300 px-8 py-4 rounded-lg text-sm font-semibold hover:bg-slate-100 transition"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
