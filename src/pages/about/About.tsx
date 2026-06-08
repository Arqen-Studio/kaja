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

function About() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-10 md:px-10 md:py-16 lg:px-14 xl:px-16 2xl:px-20">
        <h1 className="heading mx-auto mb-8 max-w-[383px] text-center xl:max-w-[460px] 2xl:max-w-[520px]">
          <LetterByLetter
            lines={["Located in the", "heart of Ubud"]}
            align="center"
          />
        </h1>

        <div className="mx-auto grid w-full grid-cols-1 items-center md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-10 xl:gap-14">
          <p className="base-text mx-auto hidden max-w-[230px] text-center lg:mr-10 lg:block lg:max-w-[260px] xl:mr-12 xl:max-w-[300px] 2xl:max-w-[340px]">
            <LetterByLetter
              lines={[
                "A destination created to",
                "surprise, inspire, and stay with",
                "you long after the evening ends.",
              ]}
              align="center"
            />
          </p>

          <div className="flex justify-center leading-none">
            <img
              src="/png/about.png"
              alt="About Section"
              width={504}
              height={500}
              className="w-[70vw] max-w-[504px] aspect-square object-cover object-center"
            />
          </div>

          <p className="base-text mx-auto hidden max-w-[303px] text-center leading-relaxed lg:ml-8 lg:block lg:max-w-[340px] xl:ml-10 xl:max-w-[380px] 2xl:max-w-[420px]">
            <LetterByLetter
              lines={[
                "Where contemporary ",
                "Mediterranean cuisine, immersive ",
                "architecture, and thoughtful ",
                "entertainment come together as",
                "one experience.",
              ]}
              align="center"
            />
          </p>
        </div>
      </div>

      <div className="w-full pb-10 md:px-0">
        <p className="heading">
          <LetterByLetter
            lines={[
              "Contemporary Mediterranean ",
              "cuisine, Italian craftsmanship, and ",
              "immersive design united in one",
              "unforgettable destination.",
            ]}
            align="center"
          />
        </p>
      </div>

      <div className="w-full px-10 md:px-20  self-stretch py-8">
        <motion.div
          className="relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.img
            src="/svg/planning.svg"
            alt="planning"
            className="block h-auto w-full object-cover"
            variants={fadeIn}
            transition={{ duration: 0.9, ease: "easeOut" }}
            animate={{
              filter: ["grayscale(1) blur(3px)", "grayscale(0) blur(0px)"],
            }}
          />

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

      <div className="w-full pb-10 px-6 md:px-[3vw]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-[1111px] flex-col-reverse overflow-hidden border border-[#32341D] dark:border-[#D6B283] md:flex-row"
        >
          <div className="relative z-10 flex w-full items-center p-6 md:max-w-[600px] md:pl-10">
            <p className="sub-text">
              <span className="block w-full  mb-8">
                Every Arrival Should Feel Like Discovery
              </span>

              <LetterByLetter
                lines={[
                  "From the first step inside, guests are ",
                  "invited into an environment where",
                  "architecture, service, and cuisine unfold",
                  "as a single journey.",
                ]}
                align="left"
              />
            </p>
          </div>
          <motion.img
            src="/png/about-2.png"
            alt="aim"
            className="relative z-20 h-auto w-full object-cover object-[60%_30%] md:max-w-[520px]"
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
            src="/png/about-3.png"
            alt="vision"
            className="relative z-20 h-auto w-full object-cover object-[60%_30%] md:max-w-[520px]"
            variants={fadeIn}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          />
          <div className="relative z-10 flex w-full items-center justify-center ml-6 py-12 md:max-w-[600px] md:pr-10">
            <p className="sub-text">
              <span className="block w-full mb-8">A Future Icon of Ubud</span>
              <LetterByLetter
                lines={[
                  "Our vision is to be one of Bali's most",
                  "memorable destinations; a place woven",
                  "into Ubud's identity, celebrated for its",
                  "creativity, atmosphere, and experiences.",
                ]}
                align="left"
              />
            </p>
          </div>
        </motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="hidden md:block w-full px-1 py-6 text-center font-moche font-normal text-[clamp(1.5rem,6.5vw,160px)] leading-[1.2] tracking-[-0.028em] whitespace-nowrap md:pt-10 md:pb-0"
      >
        Meet our Dynamic Chef
      </motion.h1>

      <div className="max-w-7xl flex md:flex-row-reverse flex-col border border-[#32341D] dark:border-[#D6B283] mt-10 mb-20">
        <img
          src="/png/about-chef.png"
          alt="chef"
          className="max-full object-cover "
        />
        <div className="flex flex-col md:items-start items-center  min-w-[100px] px-4 py-6 ml-4 mr-12">
          <div className="py-4 flex flex-col items-center md:items-start mb-4 ">
            <h1 className="heading ">
              <LetterByLetter lines={["Michail "]} align="left" />
            </h1>
            <h1 className="heading ">
              <LetterByLetter lines={["Pavourdjiev"]} align="left" />
            </h1>
          </div>
          <p className="font-moche text-[16px] font-normal text-center md:text-start leading-[120%] max-w-[395px] pr-10">
            Michail Pavourdjiev began his culinary journey with a passion for
            hospitality and a deep appreciation for seafood. After graduating
            with a degree in Restaurant and Hospitality Management, he built his
            experience in some of London's respected kitchens. Over eight years
            at Chicama, he rose from Chef de Partie to Head Chef, developing a
            distinctive approach influenced by contemporary seafood cuisine and
            global flavours. Today, he leads the culinary vision at KAJA,
            bringing together creativity, precision, and a deep respect for
            exceptional ingredients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
