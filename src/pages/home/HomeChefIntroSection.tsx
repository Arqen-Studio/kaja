import { motion } from "framer-motion";

function HomeChefIntroSection() {
  return (
    <div className="flex items-center justify-center pt-3 pb-2 w-full overflow-hidden">
      <div className="relative w-[70vw] max-w-[340px] aspect-square">
        {/* Circular text — slow infinite spin (rendered first, behind plate) */}
        <motion.img
          src="/png/circular-text.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-contain"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* Plate centered on top */}
        <img
          src="/png/plate.png"
          alt="plate"
          className="absolute w-[62%] h-[62%] object-contain"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
      </div>
    </div>
  );
}

export default HomeChefIntroSection;
