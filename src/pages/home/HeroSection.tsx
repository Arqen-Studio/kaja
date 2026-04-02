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
  const [imageSize, setImageSize] = useState({ width: 518, height: 524 });

  const updateImageSize = () => {
    if (!imageWrapperRef.current) return;
    const bounds = imageWrapperRef.current.getBoundingClientRect();
    setImageSize({
      width: bounds.width || 518,
      height: bounds.height || 524,
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

  // Scale starts later so text exits first
  const imageScale = useTransform(
    smoothProgress,
    [0.25, 0.6],
    [1, fullScreenScale],
  );

  // Video dims slightly on scroll, mask stays at full brightness
  const videoFilter = useTransform(
    smoothProgress,
    [0.2, 0.85],
    ["brightness(1)", "brightness(0.3)"],
  );
  const overlayOpacity = useTransform(smoothProgress, [0, 0.25], [0.15, 1]);

  return (
    <section ref={ref} className="h-[240vh]">
      <div className="sticky top-0 h-screen overflow-hidden relative">

        {/* Heading — fades out on scroll */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 pointer-events-none z-10"
        >
          {/* Heading */}
          <div className="absolute inset-x-0 top-[clamp(80px,8vh,120px)]">
            <h1 className="heading mx-auto max-w-[383px] text-center xl:max-w-[460px] 2xl:max-w-[520px]">
              <LetterByLetter
                lines={["Located in the", "heart of Ubud"]}
                align="center"
              />
            </h1>
          </div>

          {/* Left text — anchored to left edge of video */}
          <div
            className="absolute hidden md:block top-[40%]"
            style={{ right: "calc(50% + clamp(200px, 19vw, 480px) + 24px)" }}
          >
            <p className="base-text max-w-[230px] text-start lg:max-w-[260px] xl:max-w-[300px] 2xl:max-w-[340px]">
              <LetterByLetter
                lines={[
                  "KAJA was created with a",
                  "clear intention: to surprise,",
                  "engage, and leave a",
                  "lasting impression.",
                ]}
                align="center"
              />
            </p>
          </div>

          {/* Right text — anchored to right edge of video */}
          <div
            className="absolute hidden md:block top-[40%]"
            style={{ left: "calc(50% + clamp(200px, 19vw, 480px) + 24px)" }}
          >
            <p className="base-text max-w-[303px] text-center lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px]">
              <LetterByLetter
                lines={[
                  "It is not simply a restaurant, but a ",
                  "complete evening experience where",
                  "iconic architecture, contemporary",
                  "cuisine, and entertainment come",
                  "together as one.",
                ]}
                align="center"
              />
            </p>
          </div>
        </motion.div>

        {/* Video — bottom-anchored, scales from bottom to fullscreen */}
        <motion.div
          ref={imageWrapperRef}
          style={{
            scale: imageScale,
            originX: 0.5,
            originY: 1,
            left: "calc(50% - clamp(200px, 19vw, 480px))",
            top: "clamp(190px, 21vh, 240px)",
            height: "calc(100vh - clamp(190px, 21vh, 240px))",
          }}
          className="absolute w-[clamp(400px,38vw,960px)] overflow-hidden transform-gpu will-change-transform"
        >
          <motion.video
            src="/hero.mp4"
            style={{ filter: videoFilter }}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <motion.img
            src="/png/mask.jpeg"
            aria-hidden
            style={{ opacity: overlayOpacity, mixBlendMode: "multiply" }}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
