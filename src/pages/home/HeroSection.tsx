import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LetterByLetter } from "../../components/LetterByLetter";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [vh, setVh] = useState(() =>
    typeof window !== "undefined"
      ? (window.visualViewport?.height ?? window.innerHeight)
      : 0,
  );

  useEffect(() => {
    const update = () => {
      setVw(window.innerWidth);
      setVh(window.visualViewport?.height ?? window.innerHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Mirror the CSS clamp() values used for the video wrapper
  const videoWidth = Math.min(Math.max(400, 0.38 * vw), 960);
  const videoTop = Math.min(Math.max(200, 0.25 * vh), 440);
  const videoHeight = Math.max(vh - videoTop, 1);
  const fullScreenScale = Math.max(vw / videoWidth, vh / videoHeight, 1);

  // Direct scroll listener — most reliable way to drive the scale
  const scaleValue = useMotionValue(1);
  const filterValue = useMotionValue("brightness(1)");

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top; // px scrolled into the section
      const range = section.offsetHeight - window.innerHeight; // scrollable range
      if (range <= 0) return;
      const p = Math.max(0, Math.min(1, scrolled / range));

      // scale: 1→fullScreenScale between progress 0.2–0.65
      let s = 1;
      if (p > 0.2 && p < 0.65) s = 1 + ((p - 0.2) / 0.45) * (fullScreenScale - 1);
      else if (p >= 0.65) s = fullScreenScale;
      scaleValue.set(s);

      // brightness: 1→0.7 between 0.2–0.9
      const b = p < 0.2 ? 1 : p > 0.9 ? 0.7 : 1 - ((p - 0.2) / 0.7) * 0.3;
      filterValue.set(`brightness(${b.toFixed(3)})`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [fullScreenScale, scaleValue, filterValue]);

  // Text uses spring-smoothed progress for a nicer feel
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  const textY = useTransform(smoothProgress, [0, 0.3], [0, -vh * 0.85]);
  const textOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);

  // Mobile: static layout
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
            autoPlay muted loop playsInline preload="auto"
          />
        </div>
      </section>
    );
  }

  // Desktop: sticky scroll + scale
  return (
    <section ref={ref} className="h-[240vh]">
      <div className="sticky top-0 h-screen overflow-hidden relative">
        {/* Heading fades out on scroll */}
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
              <LetterByLetter lines={["Contemporary Mediterranean", "cuisine shaped by Italian", "craftsmanship, elevated", "ingredients, and creative", "expression."]} align="center" />
            </p>
          </div>
          <div
            className="absolute hidden md:block -translate-y-1/2"
            style={{ top: "56vh", left: "calc(50% + clamp(200px, 19vw, 480px) + 56px)" }}
          >
            <p className="base-text max-w-[303px] text-center lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px]">
              <LetterByLetter lines={["More than a restaurant, KAJA is an", "immersive destination where", "architecture, atmosphere,", "entertainment, and dining become", "one."]} align="center" />
            </p>
          </div>
        </motion.div>

        {/* Video scales to fullscreen on scroll */}
        <motion.div
          style={{
            scale: scaleValue,
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
            style={{ filter: filterValue }}
            className="w-full h-full object-cover"
            autoPlay muted loop playsInline preload="auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
