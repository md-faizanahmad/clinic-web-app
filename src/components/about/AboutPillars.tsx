import PillarStack from "./PillarStack";
import { Pillar } from "./types/pillars";

const pillars: Pillar[] = [
  {
    title: "Our Mission",
    desc: "Provide accessible healthcare with modern technology.",
    icon: "target",
  },
  {
    title: "Advanced Technology",
    desc: "Modern diagnostics and specialist doctors.",
    icon: "stethoscope",
  },
  {
    title: "Prime Location",
    desc: "Located in Patna with fast emergency access.",
    icon: "map",
  },
];

export default function AboutPillars() {
  return (
    <section className="py-24 px-5 bg-slate-950">
      {" "}
      <div className="max-w-6xl mx-auto">
        {" "}
        <PillarStack pillars={pillars} />{" "}
      </div>{" "}
    </section>
  );
}
