import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function HomeAboutSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const imgOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  const contentX = useTransform(scrollYProgress, [0, 0.3], [-120, 0]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );
  const contentY = useTransform(scrollYProgress, [0.8, 1], [0, -60]);

  return (
    <div ref={ref} className="max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1600px] py-16 mx-auto">
      <div className="w-full flex md:flex-row flex-col md:h-[322px] justify-center gap-4 border border-[#32341D] dark:border-[#D6B283] overflow-hidden relative">
        <motion.img
          src="/png/about-image-1.png"
          alt="about-image-1"
          style={{ opacity: imgOpacity }}
          className="relative z-10 h-[220px] w-full object-cover sm:h-[280px] md:h-full md:w-auto md:object-contain"
        />

        <motion.img
          src="/png/about-image-2.png"
          alt="about-image-2"
          style={{ opacity: imgOpacity }}
          className="relative z-10 hidden h-full w-auto object-contain md:block"
        />

        <motion.div
          style={{
            x: contentX,
            opacity: contentOpacity,
            y: contentY,
          }}
          className="relative z-0 flex flex-col items-center space-y-6 p-6 sm:p-8 md:items-start md:p-10 md:space-y-8"
        >
          <h1 className="heading !text-left">About</h1>

          <p className="sub-text tracking-[-0.028em]">
            KAJA is a contemporary, high-level destination...
          </p>

          <Link
            to="/about"
            className="mt-2 base-text leading-[100%] flex items-center gap-2"
          >
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              Discover More
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
        </motion.div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
