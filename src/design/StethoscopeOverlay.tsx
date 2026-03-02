"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Stethoscope } from "lucide-react";

export default function StethoscopeOverlay() {
  const { scrollYProgress } = useScroll();

  // Opacity starts very low, peaks slightly, then fades at the bottom
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.02, 0.08, 0.08, 0.02],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none flex items-center justify-center overflow-hidden">
      <motion.div style={{ opacity, scale, rotate }} className="text-sky-950">
        <Stethoscope size={800} strokeWidth={0.5} />
      </motion.div>
    </div>
  );
}
