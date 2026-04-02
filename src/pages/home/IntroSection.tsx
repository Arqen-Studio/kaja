import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LetterByLetter } from "../../components/LetterByLetter";

const IntroSection = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [isExpanding, setIsExpanding] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const bgColor = useTransform(scrollYProgress, [0, 0.45], ["#32341D", "#D6B283"]);

  const textX = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textExitY = useTransform(scrollYProgress, [0.7, 1], [0, -80]);

  const rightX = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rightExitY = useTransform(scrollYProgress, [0.7, 1], [0, -80]);

  const handleReservation = () => {
    setIsExpanding(true);

    setTimeout(() => {
      navigate("/reservation");
    }, 600);
  };

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor: bgColor }}
      className="pt-32 pb-28 min-h-[60vh] relative overflow-hidden"
    >
      <div className="mx-auto flex flex-col md:flex-row w-full items-center md:items-start justify-center gap-12 px-6 md:px-[3vw]">
        <motion.p
          style={{
            x: textX,
            opacity: textOpacity,
            y: textExitY,
          }}
          className="max-w-[609px] text-left sub-text text-[#32341D]"
        >
          <LetterByLetter
            lines={[
              "Every element is crafted to evoke wonder, from",
              "the enveloping space and lighting to the music,",
              " the service, and the way food and drinks are",
              " presented and experienced.",
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
          className="flex flex-col items-center gap-4 max-w-[277px]"
        >
          <motion.button
            onClick={handleReservation}
            initial={false}
            animate={
              isExpanding
                ? {
                    position: "fixed",
                    top: ["50%", "0%"],
                    left: ["50%", "0%"],
                    x: ["-50%", "0%"],
                    y: ["-50%", "0%"],
                    width: ["100%", "100dvw"],
                    maxWidth: ["277px", "100dvw"],
                    height: ["44px", "100dvh"],
                    borderRadius: 0,
                    zIndex: 50,
                  }
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={
              isExpanding
                ? { duration: 0.7, ease: "easeInOut" }
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            whileHover={{
              y: -2,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.96 }}
            className="w-full h-[44px] bg-[#32341D] text-[#D6B283] base-text px-[3vw] border border-[#32341D] cursor-pointer shadow-md"
          >
            {isExpanding ? "RESERVATION" : "MAKE RESERVATION"}
          </motion.button>

          <img
            src="/png/stone.png"
            alt="Decoration"
            className="w-full object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
