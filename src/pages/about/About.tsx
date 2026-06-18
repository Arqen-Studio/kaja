import { motion } from "framer-motion";
import { LetterByLetter } from "../../components/LetterByLetter";


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

        <div className="mx-auto grid w-full grid-cols-1 items-center lg:grid-cols-[1fr_auto_1fr] lg:gap-10 xl:gap-14">
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
              height={756}
              className="w-[70vw] max-w-[504px] object-cover object-center"
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

      <div className="w-full pb-10 px-6 md:px-0">
        <p className="heading" style={{ fontSize: "clamp(18px, 4.5vw, 60px)" }}>
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


      <div className="w-full pb-10 pt-16 md:pt-24 px-6 md:px-[3vw]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-[1182px] h-auto md:h-[425px] flex-col-reverse overflow-hidden border border-[#32341D] dark:border-[#D6B283] md:flex-row"
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
          <img
            src="/png/about-2.png"
            alt="aim"
            className="relative z-20 h-full w-full object-cover object-center md:max-w-[593px]"
          />
        </motion.div>
      </div>

      <div className="w-full px-6 pb-20 pt-10 md:px-[3vw]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-[1182px] h-auto md:h-[425px] flex-col overflow-hidden border border-[#32341D] dark:border-[#D6B283] md:flex-row"
        >
          <img
            src="/png/about-3.png"
            alt="vision"
            className="relative z-20 h-full w-full object-cover object-center md:max-w-[593px]"
          />
          <div className="relative z-10 flex w-full items-center justify-center p-6 md:ml-6 md:py-12 md:max-w-[600px] md:pr-10">
            <p className="sub-text w-full">
              <span className="block w-full mb-8">A Future Icon of Ubud</span>
              Our vision is to be one of Bali's most memorable destinations; a place woven into Ubud's identity, celebrated for its creativity, atmosphere, and experiences.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="hidden md:block w-full px-1 py-6 text-center font-moche font-normal text-[clamp(1.5rem,7.6vw,160px)] leading-[1.2] tracking-[-0.028em] whitespace-nowrap md:pt-10 md:pb-0"
        style={{ color: "#32341D" }}
      >
        Meet our Dynamic Chef
      </motion.h1>

      <div className="max-w-7xl flex md:flex-row-reverse flex-col border border-[#32341D] dark:border-[#D6B283] mt-10 mb-20">
        <img
          src="/png/about-chef.png"
          alt="chef"
          className="max-full object-cover "
        />
        <div className="flex flex-col md:items-start items-start min-w-[100px] px-6 py-6 md:ml-4 md:mr-12">
          <div className="py-4 flex flex-col items-start mb-4">
            <h1 className="heading !text-left">
              <LetterByLetter lines={["Michail"]} align="left" />
            </h1>
            <h1 className="heading !text-left">
              <LetterByLetter lines={["Pavourdjiev"]} align="left" />
            </h1>
          </div>
          <p className="font-moche text-[16px] font-normal text-left leading-[140%] max-w-[395px] md:pr-10">
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
