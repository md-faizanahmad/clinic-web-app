// /src/types/pillars.ts

export type PillarIconName = "target" | "stethoscope" | "map";

export type Pillar = {
  title: string;
  desc: string;
  icon: PillarIconName;
};
