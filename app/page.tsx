"use client";

import ClinicMap from "@/src/shared/ClinicMap";
import VideoHero from "@/src/components/Hero/VideoHero";
import HeroVideoBg from "@/src/components/Hero/HeroVideoBg";
import HeroContent from "@/src/components/Hero/HeroContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="hero mt-9">
        <HeroVideoBg />
        <HeroContent />
      </div>
      {/* <VideoHero
        title="Modern Surgery. Compassionate Care."
        subtitle="Bihar's leading multispecialty clinic with world-class diagnostics and 24/7 trauma support."
      /> */}
      {/* Underway Status Cards */}
      <ClinicMap />
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
