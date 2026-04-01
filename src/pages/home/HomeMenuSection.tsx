import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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

// Cap vh at 800px so tall screens don't create a huge empty scroll gap
const vh = typeof window !== "undefined" ? Math.min(window.innerHeight, 800) : 800;
const COL_TRAVEL_3 = [vh * 1.6, vh * 1.85, vh * 2.1] as const;
const COL_TRAVEL_2 = [vh * 1.85, vh * 2.1] as const;
const COL_TRAVEL_1 = [vh * 2.1] as const;

function MenuTile({
  src,
  index,
  scrollYProgress,
  columns,
  oneColTravel,
}: {
  src: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  columns: 1 | 2 | 3;
  oneColTravel: number;
}) {
  const col = index % columns;
  const row = Math.floor(index / columns);

  const travel =
    columns === 3
      ? COL_TRAVEL_3[col]
      : columns === 2
        ? COL_TRAVEL_2[col]
        : oneColTravel || COL_TRAVEL_1[0];

  // Stagger direction by column count:
  // - 3 cols: right → middle → left
  // - 2 cols: right → left
  // - 1 col: top → bottom (one by one)
  const colOrder = columns - 1 - col; // rightmost first
  const start =
    columns === 1
      ? Math.min(0.06 + index * 0.06, 0.9)
      : Math.min(0.06 + row * 0.06 + colOrder * 0.04, 0.85);

  const y = useTransform(scrollYProgress, [start, 1], [0, -travel]);

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
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [columns, setColumns] = useState<1 | 2 | 3>(3);
  const [oneColTravel, setOneColTravel] = useState(vh * 6);

  useEffect(() => {
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqSm = window.matchMedia("(min-width: 640px)");

    const update = () => setColumns(mqMd.matches ? 3 : mqSm.matches ? 2 : 1);
    update();

    mqMd.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    return () => {
      mqMd.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (columns !== 1) return;

    const el = gridRef.current;
    if (!el) return;

    const update = () => {
      const gridHeight = el.scrollHeight;
      const viewport = window.innerHeight || 800;
      // Move enough so the bottom of the grid can pass through the viewport.
      setOneColTravel(Math.max(vh * 6, gridHeight - viewport + vh * 0.8));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [columns]);

  const sectionHeight =
    columns === 1 ? "min(420vh, 4200px)" : columns === 2 ? "min(320vh, 3200px)" : "min(250vh, 2000px)";

  return (
    // Outer section is tall — defines how long the scroll animation lasts
    <section ref={ref} style={{ height: sectionHeight }} className="relative w-full">

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
        <div className="absolute top-[8vh] left-0 right-0 z-20 mx-auto max-w-7xl px-12">
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
            height: "35vh",
            background: "linear-gradient(to bottom, var(--bg) 40%, transparent 100%)",
          }}
        />

        {/* Images — start below text, scroll up through the viewport window as user scrolls */}
        <div className="absolute inset-x-0 top-[37vh] px-4 z-10">
          <div className="mx-auto max-w-[1315px]">
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {IMAGES.map((src, index) => (
                <MenuTile
                  key={src}
                  src={src}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  columns={columns}
                  oneColTravel={oneColTravel}
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
