import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const [vh, setVh] = useState(() =>
    typeof window !== "undefined"
      ? (window.visualViewport?.height ?? window.innerHeight)
      : 0,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const vv = window.visualViewport;
    const update = () => setVh(vv?.height ?? window.innerHeight);

    update();
    window.addEventListener("resize", update);
    vv?.addEventListener("resize", update);
    vv?.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("resize", update);
      vv?.removeEventListener("resize", update);
      vv?.removeEventListener("scroll", update);
    };
  }, []);

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
    <section ref={ref} className="mt-[5vh] overflow-x-hidden">
      <div className="sticky top-0 flex items-center overflow-x-hidden">
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.h1
            style={{ y: textY, opacity: textOpacity }}
            className="heading mx-auto mb-8 max-w-[378px] text-center"
          >
            Located in the heart of Ubud
          </motion.h1>

          <div className="grid w-full grid-cols-1 items-center md:grid-cols-[1fr_auto_1fr] md:gap-4">
            <motion.p
              style={{ y: textY, opacity: textOpacity }}
              className="base-text mx-auto hidden max-w-[227px] text-center md:mr-8 md:mt-[25%] md:block"
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
                className="w-full max-w-[504px] object-cover"
              />
            </motion.div>

            <motion.p
              style={{ y: textY, opacity: textOpacity }}
              className="base-text mx-auto hidden max-w-[303px] text-center md:ml-6 md:mt-[25%] md:block"
            >
              It is not simply a restaurant, but a complete evening experience
              where iconic architecture, contemporary cuisine, and entertainment
              come together as one.
            </motion.p>
          </div>
        </div>
      </div>
      {/* <IntroSection/> */}
    </section>
  );
};

export default HeroSection;
