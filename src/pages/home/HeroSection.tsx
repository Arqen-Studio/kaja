import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const vh = useMemo(
    () =>
      typeof window !== "undefined"
        ? (window.visualViewport?.height ?? window.innerHeight)
        : 0,
    [],
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -vh]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const imageScaleX = useTransform(scrollYProgress, [0.2, 0.7], [1, 1.8]);
  const imageScaleY = useTransform(scrollYProgress, [0.2, 0.7], [1, 1.6]);
  const imageOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  return (
    <section ref={ref} className="min-h-[200vh] mt-10">
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto max-w-6xl px-4 w-full">
          <motion.h1
            style={{ y: textY, opacity: textOpacity }}
            className="heading mx-auto mb-8 max-w-[378px] text-center"
          >
            Located in the heart of Ubud
          </motion.h1>

          <div className="grid w-full grid-cols-1 items-center md:grid-cols-[1fr_auto_1fr] md:gap-4">
            <motion.p
              style={{ y: textY, opacity: textOpacity }}
              className="hidden md:block base-text mx-auto max-w-[227px] text-center md:mt-[25%] mr-8"
            >
              KAJA was created with a clear intention: to surprise, engage, and
              leave a lasting impression.
            </motion.p>

            <motion.div
              style={{
                scaleX: imageScaleX,
                scaleY: imageScaleY,
                opacity: imageOpacity,
              }}
              className="flex justify-center origin-center"
            >
              <img
                src="/png/hero-section.png"
                alt="Steaks"
                className="max-w-[504px] w-full object-cover"
              />
            </motion.div>

            <motion.p
              style={{ y: textY, opacity: textOpacity }}
              className="hidden md:block base-text mx-auto max-w-[303px] text-center md:mt-[25%] ml-6"
            >
              It is not simply a restaurant, but a complete evening experience
              where iconic architecture, contemporary cuisine, and entertainment
              come together as one.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
