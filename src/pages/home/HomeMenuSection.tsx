import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

function MenuTile({
  src,
  index,
  scrollYProgress,
}: {
  src: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const rowIndex = Math.floor(index / 3);
  const colIndex = index % 3;
  const delay = (2 - colIndex) * 0.15 + rowIndex * 0.25;

  const y = useTransform(scrollYProgress, [0.1 + delay, 1], [0, -1500]);
  const opacity = useTransform(
    scrollYProgress,
    [0.2 + delay, 0.7 + delay],
    [1, 0],
  );

  return (
    <motion.div style={{ y, opacity }} className="overflow-hidden group">
      <img
        src={src}
        alt={`menu-${index + 1}`}
        className="w-[434px] aspect-[434/653] object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </motion.div>
  );
}

function HomeMenuSection() {
  const images = [
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

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const contentX = useTransform(scrollYProgress, [0, 0.3], [-120, 0]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );
  const contentY = useTransform(scrollYProgress, [0.8, 1], [0, -60]);

  const treeOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.12]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden pb-0">
      <motion.img
        src="/png/trees-dark.png"
        alt="trees"
        aria-hidden
        style={{ opacity: treeOpacity }}
        className="absolute right-0 z-[1] h-[clamp(18rem,52vw,36rem)] w-auto max-w-[min(58vw,28rem)] select-none object-contain object-right-top top-20 sm:max-w-[min(52vw,32rem)] md:h-[clamp(22rem,48vw,40rem)] lg:max-w-[48vw]"
      />

      <motion.div
        style={{ x: contentX, opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto max-w-7xl px-12 pb-4 pt-28"
      >
        <div className="flex max-w-[373px] flex-col items-center gap-6 md:items-start">
          <h2 className="heading text-center md:!text-left">Menu</h2>

          <p className="sub-text text-center md:text-left tracking-[-0.028em]">
            Dive into the wandering experience...
          </p>

          <Link
            to="/about"
            className="mt-2 base-text leading-[100%] flex items-center justify-center gap-2 md:justify-start"
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
              className="relative z-20 flex items-center"
            >
              <MoveRight className="h-8 w-6 shrink-0" strokeWidth={1} />
            </motion.span>
          </Link>
        </div>
      </motion.div>

      <div className="relative z-20 pt-12 mx-auto max-w-[1315px] pb-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {images.map((src, index) => (
            <MenuTile
              key={src}
              src={src}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeMenuSection;
