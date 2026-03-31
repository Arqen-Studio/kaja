import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

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

// Different upward travel per column — right col moves fastest (depth parallax)
// Values must be large enough to bring all 3 rows into the viewport window
const COL_TRAVEL = [1500, 1900, 2300];

function MenuTile({
  src,
  index,
  scrollYProgress,
}: {
  src: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const col = index % 3;
  const y = useTransform(scrollYProgress, [0, 1], [0, -COL_TRAVEL[col]]);

  return (
    <motion.div style={{ y }} className="group">
      <img
        src={src}
        alt={`menu-${index + 1}`}
        className="w-full aspect-[434/653] object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </motion.div>
  );
}

function HomeMenuSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    // Outer section is tall — defines how long the scroll animation lasts
    <section ref={ref} style={{ height: "420vh" }} className="relative w-full">

      {/* Sticky viewport window — clips images naturally, releases when section ends */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Trees decoration */}
        <img
          src="/png/trees-dark.png"
          alt="trees"
          aria-hidden
          className="absolute right-0 z-[16] h-[clamp(18rem,52vw,36rem)] w-auto max-w-[min(58vw,28rem)] select-none object-contain object-right-top top-20 opacity-[0.04] dark:opacity-[0.03] sm:max-w-[min(52vw,32rem)] md:h-[clamp(22rem,48vw,40rem)] lg:max-w-[48vw]"
        />

        {/* Text — absolutely placed, always visible at the top */}
        <div className="absolute top-16 left-0 right-0 z-20 mx-auto max-w-7xl px-12">
          <div className="flex max-w-[373px] flex-col items-center gap-6 md:items-start">
            <h2 className="heading text-center md:!text-left">Menu</h2>

            <p className="sub-text text-center tracking-[-0.028em] md:text-left">
              Dive into the wandering experience...
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

        {/* Gradient mask — fades images as they scroll up behind text */}
        <div
          className="absolute top-0 left-0 right-0 z-[15] pointer-events-none"
          style={{
            height: "480px",
            background: "linear-gradient(to bottom, var(--bg) 45%, transparent 100%)",
          }}
        />

        {/* Images — start below text, scroll up through the viewport window as user scrolls */}
        <div className="absolute inset-x-0 top-[420px] px-4 z-10">
          <div className="mx-auto max-w-[1315px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {IMAGES.map((src, index) => (
                <MenuTile
                  key={src}
                  src={src}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeMenuSection;
