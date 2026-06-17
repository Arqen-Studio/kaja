import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LetterByLetter } from "../../components/LetterByLetter";

const HeroSection = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  const [vh, setVh] = useState(() =>
    typeof window !== "undefined"
      ? (window.visualViewport?.height ?? window.innerHeight)
      : 0,
  );

  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const vv = window.visualViewport;
    const update = () => {
      setVh(vv?.height ?? window.innerHeight);
      setVw(window.innerWidth);
    };
    update();
    window.addEventListener("resize", update);
    vv?.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      vv?.removeEventListener("resize", update);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.3,
  });

  const textY = useTransform(smoothProgress, [0, 0.3], [0, -vh * 0.85]);
  const textOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);

  // Mirror the CSS clamp() values used for the video wrapper
  const videoWidth = Math.min(Math.max(400, 0.38 * vw), 960);
  const videoTop = Math.min(Math.max(200, 0.25 * vh), 440);
  const videoHeight = Math.max(vh - videoTop, 1);
  const fullScreenScale = Math.max(vw / videoWidth, vh / videoHeight, 1);

  // Scale uses raw scroll (no spring lag) so it reliably reaches fullscreen
  const imageScale = useTransform(
    scrollYProgress,
    [0.2, 0.65],
    [1, fullScreenScale],
  );

  const videoFilter = useTransform(
    scrollYProgress,
    [0.2, 0.9],
    ["brightness(1)", "brightness(0.7)"],
  );

  // Mobile: simple static layout, no scroll effects
  if (vw < 768) {
    return (
      <section className="flex flex-col items-center px-6 pt-32 pb-10 gap-8">
        <h1 className="heading text-center">
          <LetterByLetter lines={["Located in the", "heart of Ubud"]} align="center" />
        </h1>
        <div className="w-full overflow-hidden">
          <video
            ref={videoRef}
            src="/kaja.mp4"
            className="w-full object-cover"
            style={{ aspectRatio: "9/16", maxHeight: "70vh" }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </section>
    );
  }

  // Desktop: full sticky scroll effect
  return (
    <section ref={ref} className="h-[240vh]">
      <div className="sticky top-0 h-screen relative" style={{ overflow: "clip" }}>
        {/* Heading — fades out on scroll */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 pointer-events-none z-10"
        >
          <div className="absolute inset-x-0 top-[clamp(70px,8vh,160px)]">
            <h1 className="heading mx-auto max-w-[383px] text-center xl:max-w-[460px] 2xl:max-w-[520px]">
              <LetterByLetter lines={["Located in the", "heart of Ubud"]} align="center" />
            </h1>
          </div>

          <div
            className="absolute hidden md:block -translate-y-1/2"
            style={{ top: "56vh", right: "calc(50% + clamp(200px, 19vw, 480px) + 56px)" }}
          >
            <p className="base-text max-w-[230px] text-center lg:max-w-[260px] xl:max-w-[300px] 2xl:max-w-[340px]">
              <LetterByLetter
                lines={["Contemporary Mediterranean", "cuisine shaped by Italian", "craftsmanship, elevated", "ingredients, and creative", "expression."]}
                align="center"
              />
            </p>
          </div>

          <div
            className="absolute hidden md:block -translate-y-1/2"
            style={{ top: "56vh", left: "calc(50% + clamp(200px, 19vw, 480px) + 56px)" }}
          >
            <p className="base-text max-w-[303px] text-center lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px]">
              <LetterByLetter
                lines={["More than a restaurant, KAJA is an", "immersive destination where", "architecture, atmosphere,", "entertainment, and dining become", "one."]}
                align="center"
              />
            </p>
          </div>
        </motion.div>

        {/* Video — bottom-anchored, scales to fullscreen on scroll */}
        <motion.div
          style={{
            scale: imageScale,
            originX: 0.5,
            originY: 1,
            left: "calc(50% - clamp(200px, 19vw, 480px))",
            width: "clamp(400px,38vw,960px)",
            top: "clamp(200px, 25vh, 440px)",
            height: "calc(100vh - clamp(200px, 25vh, 440px))",
          }}
          className="absolute overflow-hidden transform-gpu will-change-transform"
        >
          <motion.video
            ref={videoRef}
            src="/kaja.mp4"
            style={{ filter: videoFilter }}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
