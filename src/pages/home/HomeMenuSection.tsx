import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
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

const vh =
  typeof window !== "undefined" ? Math.min(window.innerHeight, 800) : 800;
// Use a higher cap for 3-col so row-3 images are reachable on large screens
const vh3 =
  typeof window !== "undefined" ? Math.min(window.innerHeight, 1600) : 1000;
const COL_TRAVEL_3 = [vh3 * 1.6, vh3 * 1.9, vh3 * 2.2] as const;
const COL_TRAVEL_2 = [vh * 1.5, vh * 1.7] as const;
const COL_TRAVEL_1 = [vh * 1.7] as const;

function MenuTile({
  src,
  index,
  scrollYProgress,
  columns,
}: {
  src: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  columns: 1 | 2 | 3;
}) {
  const col = index % columns;
  const row = Math.floor(index / columns);

  const travel =
    columns === 3
      ? COL_TRAVEL_3[col]
      : columns === 2
        ? COL_TRAVEL_2[col]
        : COL_TRAVEL_1[0];

  const colOrder = columns - 1 - col;
  const start =
    columns === 1
      ? Math.min(0.06 + index * 0.06, 0.9)
      : Math.min(0.06 + row * 0.06 + colOrder * 0.04, 0.85);

  const y = useTransform(
    scrollYProgress,
    [start, 1],
    [0, columns === 1 ? 0 : -travel],
  );

  // Calculate the y-value at which this row's images enter the viewport
  const vp = typeof window !== "undefined" ? window.innerHeight : 900;
  const approxRowH = vp * 0.72 + 112; // image height + gap
  const rowEntryY = row > 0 ? -(row * approxRowH + vp * 0.37 - vp) : 0;

  // Fade in over 250px of travel inside the visible viewport
  const opacityFromY = useTransform(
    y,
    [rowEntryY + 30, rowEntryY - 250],
    [0, 1],
  );
  const opacity = row === 0 || columns === 1 ? 1 : opacityFromY;

  return (
    <motion.div style={{ y, opacity }} className="group">
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
  const [oneColTravel, setOneColTravel] = useState(vh * 2);

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
      setOneColTravel(Math.max(vh * 2, gridHeight - viewport + vh * 0.3));
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

  const gridY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, columns === 1 ? -oneColTravel : 0],
  );

  const sectionHeight =
    columns === 1
      ? "min(240vh, 2400px)"
      : columns === 2
        ? "min(320vh, 3200px)"
        : "min(300vh, 2600px)";

  return (
    <section
      ref={ref}
      style={{ height: sectionHeight }}
      className="relative w-full"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          src="/png/trees-dark.png"
          alt="trees"
          aria-hidden
          className="absolute right-0 z-[16] h-[clamp(18rem,52vw,36rem)] w-auto max-w-[min(58vw,28rem)] select-none object-contain object-right-top top-20 opacity-[0.04] dark:opacity-[0.03] sm:max-w-[min(52vw,32rem)] md:h-[clamp(22rem,48vw,40rem)] lg:max-w-[48vw]"
        />

        <div className="absolute top-[8vh] left-0 right-0 z-20">
          <div className="max-w-[950px] mx-auto px-4">
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
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Discover Our Menu
              </motion.span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
                className="flex items-center"
              >
                <MoveRight
                  className="h-8 w-6 shrink-0"
                  aria-hidden
                  strokeWidth={1}
                />
              </motion.span>
            </Link>
          </div>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 right-0 z-[15] pointer-events-none"
          style={{
            height: "35vh",
            background:
              "linear-gradient(to bottom, var(--bg) 40%, transparent 100%)",
          }}
        />

        <div className="absolute inset-x-0 top-[37vh] px-6 md:px-12 z-10">
          <div className="mx-auto max-w-[1315px]">
            <motion.div
              ref={gridRef}
              style={{ y: gridY }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 md:gap-y-28"
            >
              {IMAGES.map((src, index) => (
                <MenuTile
                  key={src}
                  src={src}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  columns={columns}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeMenuSection;
