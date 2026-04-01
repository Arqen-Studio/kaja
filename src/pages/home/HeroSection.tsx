import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LetterByLetter } from "../../components/LetterByLetter";

const HeroSection = () => {
  const ref = useRef(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const [vh, setVh] = useState(() =>
    typeof window !== "undefined"
      ? (window.visualViewport?.height ?? window.innerHeight)
      : 0,
  );

  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [imageSize, setImageSize] = useState({ width: 560, height: 420 });

  const updateImageSize = () => {
    if (!imageWrapperRef.current) return;
    const bounds = imageWrapperRef.current.getBoundingClientRect();
    setImageSize({
      width: bounds.width || 560,
      height: bounds.height || 420,
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const vv = window.visualViewport;

    const update = () => {
      setVh(vv?.height ?? window.innerHeight);
      setVw(window.innerWidth);
      updateImageSize();
    };

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
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const textY = useTransform(smoothProgress, [0, 0.3], [0, -vh * 0.85]);
  const textOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);

  const fullScreenScale = Math.max(
    vw / imageSize.width,
    vh / imageSize.height,
    1,
  );
  const imageScale = useTransform(
    smoothProgress,
    [0.18, 0.5],
    [1, fullScreenScale],
  );

  const imageY = useTransform(smoothProgress, [0.5, 1], [0, -vh * 0.08]);

  const imageOpacity = useTransform(smoothProgress, [0.7, 0.9, 1], [1, 0.9, 0]);

  return (
    <section ref={ref} className="mt-[10vh] h-[240vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-x-hidden">
        <div className="mx-auto w-full max-w-[1700px] px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <motion.h1
            style={{ y: textY, opacity: textOpacity }}
            className="heading mx-auto mb-8 max-w-[383px] text-center xl:max-w-[460px] 2xl:max-w-[520px]"
          >
            <LetterByLetter
              lines={["Located in the", "heart of Ubud"]}
              align="center"
            />
          </motion.h1>

          <div className="grid w-full grid-cols-1 items-center md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-10 xl:gap-14">
            <motion.p
              style={{ y: textY, opacity: textOpacity }}
              className="base-text mx-auto hidden max-w-[230px] text-start md:mr-8 md:block lg:mr-10 lg:max-w-[260px] xl:mr-12 xl:max-w-[300px] 2xl:max-w-[340px]"
            >
              <LetterByLetter
                lines={[
                  "KAJA was created with a",
                  "clear intention: to surprise,",
                  "engage, and leave a",
                  "lasting impression.",
                ]}
                align="center"
              />
            </motion.p>

            <motion.div
              ref={imageWrapperRef}
              style={{
                scale: imageScale,
                y: imageY,
                opacity: imageOpacity,
              }}
              className="z-10 mx-auto flex h-[490px] w-[90vw] max-w-[504px] justify-center overflow-hidden origin-center transform-gpu will-change-transform xl:h-[460px] xl:max-w-[620px] 2xl:h-[500px] 2xl:max-w-[700px]"
            >
              <video
                src="/hero.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>

            <motion.p
              style={{ y: textY, opacity: textOpacity }}
              className="base-text mx-auto hidden max-w-[303px] text-center md:ml-6 md:block lg:ml-8 lg:max-w-[340px] xl:ml-10 xl:max-w-[380px] 2xl:max-w-[420px]"
            >
              <LetterByLetter
                lines={[
                  "It is not simply a restaurant, but a ",
                  "complete evening experience where",
                  "cuisine, and entertainment come",
                  "lasting impression.",
                ]}
                align="center"
              />
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
