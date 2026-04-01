import HeroSection from "../home/HeroSection";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
} as const;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

const tileContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.08,
    },
  },
} as const;

const tile = {
  hidden: { opacity: 1, scale: 1, filter: "blur(0px)" },
  visible: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(2px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

const revealFromRightBehind = {
  hidden: { opacity: 0, x: 220 },
  visible: { opacity: 1, x: 0 },
} as const;

const revealFromLeftBehind = {
  hidden: { opacity: 0, x: -220 },
  visible: { opacity: 1, x: 0 },
} as const;

function About() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full">
        <HeroSection />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-[844px] px-4 pb-10 md:px-0"
      >
        <p className="heading">
          KAJA is a contemporary, high-level destination restaurant offering a
          fully immersive dining experience.
        </p>
      </motion.div>

      <div className="w-full self-stretch py-8">
        <motion.div
          className="relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.img
            src="/png/planning.png"
            alt="planning"
            className="block h-auto w-full object-cover"
            variants={fadeIn}
            transition={{ duration: 0.9, ease: "easeOut" }}
            animate={{
              filter: ["grayscale(1) blur(3px)", "grayscale(0) blur(0px)"],
            }}
          />

          {/* Build tiles (block-by-block reveal) */}
          <motion.div
            aria-hidden
            variants={tileContainer}
            className="pointer-events-none absolute inset-0 z-30 grid grid-cols-10 grid-rows-6"
          >
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                variants={tile}
                className="bg-[var(--bg)]"
                style={{
                  opacity: 1,
                  transformOrigin: i % 2 === 0 ? "left" : "right",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="relative overflow-hidden py-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
        >
          <motion.p
            className="base-text relative z-10 text-center"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Restaurant planning
          </motion.p>

          {/* Build tiles (block-by-block reveal) */}
          <motion.div
            aria-hidden
            variants={tileContainer}
            className="pointer-events-none absolute inset-0 z-30 grid grid-cols-10 grid-rows-2"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                variants={tile}
                className="bg-[var(--bg)]"
                style={{
                  opacity: 1,
                  transformOrigin: i % 2 === 0 ? "left" : "right",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full px-6 md:px-[3vw]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-[1111px] flex-col-reverse overflow-hidden border border-[#32341D] dark:border-[#D6B283] md:flex-row"
        >
          <motion.div
            className="relative z-10 flex w-full items-center p-6 md:max-w-[520px] md:pl-10"
            variants={revealFromRightBehind}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          >
            <p className="sub-text">
              Our aim is to go beyond dining. We want guests to feel a sense of
              awe from the moment they arrive.
            </p>
          </motion.div>
          <motion.img
            src="/png/aim.png"
            alt="vision"
            className="relative z-20 h-auto w-full object-cover object-[60%_30%] md:max-w-[591px]"
            variants={fadeIn}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          />
        </motion.div>
      </div>

      <div className="w-full px-6 pb-20 pt-10 md:px-[3vw]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-[1111px] flex-col overflow-hidden border border-[#32341D] dark:border-[#D6B283] md:flex-row"
        >
          <motion.img
            src="/png/vision.png"
            alt="vision"
            className="relative z-20 h-auto w-full object-cover object-[60%_30%] md:max-w-[591px]"
            variants={fadeIn}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          />
          <motion.div
            className="relative z-10 flex w-full items-center justify-center p-6 md:max-w-[520px] md:pr-10"
            variants={revealFromLeftBehind}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          >
            <p className="sub-text">
              Our vision is to establish KAJA as one of Bali’s iconic
              destinations. A place that becomes part of Ubud’s identity alongside
              its nature, culture, and spirit.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
