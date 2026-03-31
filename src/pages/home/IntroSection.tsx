import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const IntroSection = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [isExpanding, setIsExpanding] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const bgColor = useTransform(scrollYProgress, [0, 1], ["#32341D", "#D6B283"]);

  const textX = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textExitY = useTransform(scrollYProgress, [0.7, 1], [0, -80]);
  // const textExitOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  const rightX = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rightExitY = useTransform(scrollYProgress, [0.7, 1], [0, -80]);
  // const rightExitOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

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
      className="py-24 relative overflow-hidden"
    >
      <div className="mx-auto flex flex-col md:flex-row max-w-5xl items-center md:items-start justify-center gap-12 px-6">
        <motion.p
          style={{
            x: textX,
            opacity: textOpacity,
            y: textExitY,
          }}
          className="max-w-[607px] text-left sub-text text-[#32341D]"
        >
          Every element is crafted to evoke wonder, from the enveloping space
          and lighting to the music, the service, and the way food and drinks
          are presented and experienced.
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
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    borderRadius: 0,
                    zIndex: 50,
                  }
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={
              isExpanding
                ? { duration: 0.6, ease: "easeInOut" }
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
            className="w-full h-[44px] bg-[#32341D] text-[#D6B283] base-text px-12 border border-[#32341D] cursor-pointer shadow-md"
          >
            MAKE RESERVATION
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
