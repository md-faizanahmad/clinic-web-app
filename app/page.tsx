// app/page.tsx

import Hero from "@/src/components/Hero/Hero";
import AboutClinic from "@/src/components/home/AboutClinic";
import AppointmentCTA from "@/src/components/home/AppointmentCTA";
import DoctorTeam from "@/src/components/home/DoctorTeam";
import ServiceGrid from "@/src/components/ServiceGrid";
import TrustIndicators from "@/src/shared/TrustIndicators";

export default function Page() {
  return (
    <section>
      <Hero />
      <TrustIndicators />
      <ServiceGrid />
      <AboutClinic />
      <DoctorTeam />
      <AppointmentCTA />
    </section>
  );
}
