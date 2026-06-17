import { motion, useScroll, useTransform } from "framer-motion";
// useTransform kept for cardsY
import { LetterByLetter } from "../../components/LetterByLetter";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const IMAGES = [
  "/png/menu/menu (1).png",
  "/png/menu/menu (2).png",
  "/png/menu/menu (3).png",
  "/png/menu/menu (4).png",
  "/png/menu/menu (5).png",
  "/png/menu/menu (6).png",
  "/png/menu/menu (7).png",
  "/png/menu/menu (8).png",
  "/png/menu/menu (9).png",
];

function MenuTile({ src, index }: { src: string; index: number }) {
  return (
    <div className="group">
      <img
        src={src}
        alt={`menu-${index + 1}`}
        className="w-full aspect-[434/653] object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

function HomeMenuSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardTranslate, setCardTranslate] = useState(-1600);

  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cols = vw >= 768 ? 3 : vw >= 640 ? 2 : 1;
      const rows = Math.ceil(9 / cols);
      const availW = Math.min(1315, vw - 48);
      const gap = cols > 1 ? 32 : 16;
      const cardWidth = (availW - gap * (cols - 1)) / cols;
      const cardHeight = cardWidth * (653 / 434);
      const gridHeight = cardHeight * rows + gap * (rows - 1);
      const cardsStart = 360;
      const translate = -(cardsStart + gridHeight - vh);
      setCardTranslate(Math.min(translate, -400));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const cardsY = useTransform(scrollYProgress, [0.05, 0.95], ["0px", `${cardTranslate}px`]);

  return (
    <div ref={sectionRef} className="relative h-[700vh] md:h-[420vh] xl:h-[260vh]">
      <div className="sticky top-0 h-screen overflow-hidden relative">

        {/* Trees decoration */}
        <img
          src="/png/trees-dark.png"
          alt="trees"
          aria-hidden
          className="absolute right-0 z-[5] h-[clamp(18rem,52vw,36rem)] w-auto max-w-[min(58vw,28rem)] select-none object-contain object-right-top top-20 opacity-[0.04] dark:opacity-[0.03] sm:max-w-[min(52vw,32rem)] md:h-[clamp(22rem,48vw,40rem)] lg:max-w-[48vw] pointer-events-none"
        />

        {/* Gradient fade — same as navbar */}
        <div
          className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
          style={{
            height: "22vh",
            background: "linear-gradient(to bottom, var(--bg) 45%, transparent 100%)",
          }}
        />

        {/* Header text */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-[1300px] mx-auto w-full px-6 md:px-10 pt-16 pb-10">
            <div className="flex max-w-[373px] flex-col items-center gap-6 mx-auto md:mx-0 md:items-start">
              <h2 className="heading text-center md:!text-left">
                <LetterByLetter lines={["Menu"]} align="left" />
              </h2>

              <p
                className="sub-text text-center tracking-[-0.028em] md:text-left"
                style={{ opacity: 0.55 }}
              >
                <LetterByLetter
                  lines={["Dive into contemporary mediterranenan flavours..."]}
                  align="left"
                />
              </p>

              <Link
                to="/menu"
                className="mt-2 base-text leading-[100%] hover:opacity-75 flex items-center justify-center gap-2 md:justify-start"
              >
                <motion.span
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Discover Our Menu
                </motion.span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                  className="flex items-center"
                >
                  <MoveRight className="h-8 w-6 shrink-0" aria-hidden strokeWidth={1} />
                </motion.span>
              </Link>
            </div>
          </div>
        </div>

        {/* Cards — scroll up behind header */}
        <motion.div
          style={{ y: cardsY }}
          className="absolute left-0 right-0 top-[360px] z-10 px-6 md:px-12"
        >
          <div className="mx-auto max-w-[1315px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-10">
              {IMAGES.map((src, index) => (
                <MenuTile key={src} src={src} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default HomeMenuSection;
