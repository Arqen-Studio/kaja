import { motion } from "framer-motion";
import { LetterByLetter } from "../../components/LetterByLetter";

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
      <div className="mx-auto w-full max-w-[1700px] px-6 py-10 md:px-10 md:py-16 lg:px-14 xl:px-16 2xl:px-20">
        <h1 className="heading mx-auto mb-8 max-w-[383px] text-center xl:max-w-[460px] 2xl:max-w-[520px]">
          <LetterByLetter lines={["Located in the", "heart of Ubud"]} align="center" />
        </h1>

        <div className="mx-auto grid w-full grid-cols-1 items-center md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-10 xl:gap-14">
          <p className="base-text mx-auto hidden max-w-[230px] text-start leading-relaxed lg:mr-10 lg:block lg:max-w-[260px] xl:mr-12 xl:max-w-[300px] 2xl:max-w-[340px]">
            <LetterByLetter lines={["KAJA was created with a", "clear intention: to surprise,", "engage, and leave a", "lasting impression."]} align="left" />
          </p>

          <div className="flex justify-center leading-none">
            <img
              src="/png/hero-section.png"
              alt="chef"
              width={504}
              height={500}
              className="h-[420px] w-[70vw] max-w-[560px] object-cover object-center xl:h-[460px] xl:max-w-[620px] 2xl:h-[500px] 2xl:max-w-[700px]"
            />
          </div>

          <p className="base-text mx-auto hidden max-w-[303px] text-center leading-relaxed lg:ml-8 lg:block lg:max-w-[340px] xl:ml-10 xl:max-w-[380px] 2xl:max-w-[420px]">
            <LetterByLetter lines={["It is not simply a restaurant,", "but a complete evening experience", "where iconic architecture,", "contemporary cuisine, and", "entertainment come together as one."]} align="center" />
          </p>
        </div>
      </div>

      <div className="w-full max-w-[844px] px-4 pb-10 md:px-0">
        <p className="heading">
          <LetterByLetter lines={["KAJA is a contemporary, high-level", "destination restaurant offering a", "fully immersive dining experience."]} align="left" />
        </p>
      </div>

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
          <p className="base-text relative z-10 text-center">
            <LetterByLetter lines={["Restaurant planning"]} align="center" />
          </p>

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
          <div className="relative z-10 flex w-full items-center p-6 md:max-w-[520px] md:pl-10">
            <p className="sub-text">
              <LetterByLetter lines={["Our aim is to go beyond dining.", "We want guests to feel a sense of", "awe from the moment they arrive."]} align="left" />
            </p>
          </div>
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
          <div className="relative z-10 flex w-full items-center justify-center p-6 md:max-w-[520px] md:pr-10">
            <p className="sub-text">
              <LetterByLetter lines={["Our vision is to establish KAJA", "as one of Bali’s iconic destinations.", "A place that becomes part of Ubud’s", "identity alongside its nature,", "culture, and spirit."]} align="left" />
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
