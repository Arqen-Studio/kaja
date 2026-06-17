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
      className="min-h-[60vh] relative overflow-hidden flex items-center bg-[#32341D]"
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
          }}
          className="max-w-[609px] text-left"
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
            style={{ width: "clamp(295px, 22vw, 500px)", height: "clamp(44px, 3.5vw, 70px)", gap: "8px", paddingLeft: "48px", paddingRight: "48px" }}
            className="bg-[#D6B283] text-[#32341D] border border-[#D6B283] flex items-center justify-center hover:opacity-80 transition-opacity font-moche font-normal text-sm tracking-widest whitespace-nowrap"
          >
            MAKE A RESERVATION
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
