import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [imageSize, setImageSize] = useState({ width: 444, height: 300 });

  const updateImageSize = () => {
    if (!imageWrapperRef.current) return;
    const bounds = imageWrapperRef.current.getBoundingClientRect();
    setImageSize({
      width: bounds.width || 444,
      height: bounds.height || 300,
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

  const textY = useTransform(scrollYProgress, [0, 0.33], [0, -vh]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const fullScreenScale = Math.max(
    vw / imageSize.width,
    vh / imageSize.height,
    1,
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0.33, 0.66],
    [1, fullScreenScale],
  );

  const imageY = useTransform(scrollYProgress, [0.66, 1], [0, 0]);

  const imageOpacity = useTransform(scrollYProgress, [0.72, 0.9, 1], [1, 1, 0]);

  return (
    <section ref={ref} className="h-[300vh]">
      <div className="sticky top-0 flex items-center h-screen overflow-x-hidden">
        <div className="mx-auto w-full px-6 md:px-12">
          <motion.h1
            style={{ y: textY, opacity: textOpacity }}
            className="heading mx-auto mb-8 max-w-[378px] text-center"
          >
            Located in the heart of Ubud
          </motion.h1>

          <div className="grid w-full grid-cols-1 items-center md:grid-cols-[1fr_auto_1fr] md:gap-4">
            <motion.p
              style={{ y: textY, opacity: textOpacity }}
              className="base-text mx-auto hidden max-w-[227px] text-start md:mr-8 md:block"
            >
              KAJA was created with a clear intention: to surprise, engage, and
              leave a lasting impression.
            </motion.p>

            <motion.div
              ref={imageWrapperRef}
              style={{
                scale: imageScale,
                y: imageY,
                opacity: imageOpacity,
              }}
              className="z-10 mx-auto flex h-[300px] w-[85vw] max-w-[444px] justify-center overflow-hidden origin-center"
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
              className="base-text mx-auto hidden max-w-[303px] text-center md:ml-6 md:block"
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
