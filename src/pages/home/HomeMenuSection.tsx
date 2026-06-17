import { motion } from "framer-motion";
import { LetterByLetter } from "../../components/LetterByLetter";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <Link to="/menu" className="group block">
      <img
        src={src}
        alt={`menu-${index + 1}`}
        className="w-full aspect-[434/653] object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </Link>
  );
}

function HomeMenuSection() {
  return (
    <div className="relative">
      {/* Trees decoration */}
      <img
        src="/png/trees-dark.png"
        alt="trees"
        aria-hidden
        className="absolute right-0 z-[5] h-[clamp(18rem,52vw,36rem)] w-auto max-w-[min(58vw,28rem)] select-none object-contain object-right-top top-20 opacity-[0.04] dark:opacity-[0.03] sm:max-w-[min(52vw,32rem)] md:h-[clamp(22rem,48vw,40rem)] lg:max-w-[48vw] pointer-events-none"
      />

      {/* Header */}
      <div className="max-w-[1300px] mx-auto w-full px-6 md:px-10 pt-8 md:pt-16 pb-10">
        <div className="flex max-w-[373px] flex-col items-center gap-6 mx-auto md:mx-0 md:items-start">
          <h2 className="heading text-center md:!text-left" style={{ color: "#32341D" }}>
            <LetterByLetter lines={["Menu"]} align="left" />
          </h2>

          <p
            className="sub-text text-center md:text-left tracking-[-0.028em] w-full"
            style={{ color: "#32341D" }}
          >
            Dive into contemporary mediterranenan flavours...
          </p>

          <Link
            to="/menu"
            className="mt-2 base-text leading-[100%] hover:opacity-75 flex items-center justify-center gap-2 md:justify-start"
            style={{ color: "#32341D" }}
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

      {/* Cards */}
      <div className="px-6 md:px-12 pb-16">
        <div className="mx-auto max-w-[1315px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-10">
            {IMAGES.map((src, index) => (
              <MenuTile key={src} src={src} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMenuSection;
