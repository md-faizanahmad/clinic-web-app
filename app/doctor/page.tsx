import AboutHero from "@/src/components/about/AboutHero";
import AboutPillars from "@/src/components/about/AboutPillars";
import AboutStats from "@/src/components/about/AboutStats";
import AboutCTA from "@/src/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <AboutHero />
      <AboutPillars />
      <AboutStats />
      <AboutCTA />
    </main>
  );
}
