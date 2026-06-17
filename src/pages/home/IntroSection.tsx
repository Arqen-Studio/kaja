import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LetterByLetter } from "../../components/LetterByLetter";

const IntroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const textX = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textExitY = useTransform(scrollYProgress, [0.7, 1], [0, -80]);

  const rightX = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rightExitY = useTransform(scrollYProgress, [0.7, 1], [0, -80]);

  return (
    <motion.section
      ref={ref}
      className="min-h-[60vh] relative overflow-hidden flex items-center bg-[#32341D] dark:bg-[#D6B283]"
    >
      <div className="mx-auto flex flex-col md:flex-row w-full items-center justify-center gap-12 px-6 py-16 md:px-[3vw]">
        <motion.p
          style={{
            x: textX,
            opacity: textOpacity,
            y: textExitY,
            fontFamily: "Moche",
            fontWeight: 400,
            fontSize: "clamp(24px, 1.8vw, 42px)",
            lineHeight: "120%",
            color: "#FCF7F5",
            maxWidth: "clamp(609px, 45vw, 1100px)",
          }}
          className="text-left"
        >
          <LetterByLetter
            lines={[
              "Every detail is designed to evoke wonder. From",
              "the architecture and ambient lighting to the",
              "music, service, and culinary journey, each ",
              "moment unfolds with intention.",
            ]}
            align="left"
          />
        </motion.p>

        <motion.div
          style={{
            x: rightX,
            opacity: rightOpacity,
            y: rightExitY,
          }}
          className="flex flex-col items-center"
        >
          <a
            href="https://www.sevenrooms.com/explore/kajabynuma/reservations/create/search/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "clamp(295px, 28vw, 650px)", height: "clamp(44px, 4.5vw, 90px)", gap: "8px", paddingLeft: "48px", paddingRight: "48px" }}
            className="bg-[#D6B283] dark:bg-[#32341D] text-[#32341D] dark:text-[#D6B283] border border-[#D6B283] dark:border-[#32341D] flex items-center justify-center hover:opacity-80 transition-opacity font-moche font-normal tracking-widest whitespace-nowrap"
            style={{ fontSize: "clamp(12px, 1.1vw, 22px)" }}
          >
            MAKE A RESERVATION
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
