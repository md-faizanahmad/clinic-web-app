import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope } from "lucide-react";
import Image from "next/image";

const BackgroundLayer = ({
  currentImg,
  images,
}: {
  currentImg: number;
  images: string[];
}) => (
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImg}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.2, scale: 1 }} // Lowered opacity for better text contrast
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src={images[currentImg]}
          alt="Clinic"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </AnimatePresence>
    <motion.div
      animate={{ rotate: [0, 5, 0] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute -right-20 -bottom-20 text-black/5 pointer-events-none"
    >
      <Stethoscope size={600} strokeWidth={0.5} />
    </motion.div>
  </div>
);

export default BackgroundLayer;
