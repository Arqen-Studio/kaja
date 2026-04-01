import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function HomeChefSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const isInView = useInView(containerRef, {
    amount: 0.6,
  });

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 30, damping: 20 });

  useEffect(() => {
    if (!isDesktop) {
      x.set(0);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const center = window.innerWidth / 2;

      const delta = e.clientX - center;

      const maxMove = window.innerWidth / 2;

      const normalized = delta / maxMove;

      if (isInView) {
        x.set(normalized * maxMove * 0.5);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInView, isDesktop, x]);

  useEffect(() => {
    if (!isInView) {
      x.set(0);
    }
  }, [isInView, x]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mb-10 flex w-full max-w-[1400px] flex-col items-center overflow-x-hidden px-6 md:px-12"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="hidden md:block w-full px-1 py-6 text-left font-moche font-normal text-[clamp(1.5rem,6.5vw,220px)] leading-[1.2] tracking-[-0.028em] whitespace-nowrap md:pt-10 md:pb-0"
      >
        Meet our Dynamic Chef
      </motion.h1>

      <motion.div
        style={{ x: isDesktop ? springX : 0 }}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
        className="relative z-10 mt-8 md:-mt-[min(3.3vw,55px)] flex w-[68%] sm:w-[clamp(180px,22vw,290px)] flex-col items-center border border-[#D6B283] sm:z-50"
      >
        <img
          src="/png/chef.png"
          alt="chef"
          className="w-full aspect-[300/487] object-cover object-center"
        />

        <Link to="/stories" className="base-text py-4">
          Discover Story
        </Link>
      </motion.div>
    </div>
  );
}

export default HomeChefSection;
