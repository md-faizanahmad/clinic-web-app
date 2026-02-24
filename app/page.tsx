// app/page.tsx

import Hero from "@/src/components/Hero/Hero";
import TrustIndicators from "@/src/shared/TrustIndicators";

export default function Page() {
  return (
    <section>
      <Hero />
      <TrustIndicators />
    </section>
  );
}
