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
      className="relative mx-auto mb-10 flex w-full flex-col items-center overflow-x-hidden px-6 md:px-[3vw]"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="hidden md:block w-full px-1 py-6 text-center font-moche font-normal text-[clamp(1.5rem,7.6vw,160px)] leading-[1.2] tracking-[-0.028em] whitespace-nowrap md:pt-10 md:pb-0"
        style={{ color: "#32341D" }}
      >
        Meet our Dynamic Chef
      </motion.h1>

      <motion.div
        style={{ x: isDesktop ? springX : 0, width: "clamp(280px, 24vw, 480px)", height: "clamp(420px, 36vw, 720px)" }}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
        className="relative z-10 mt-8 md:-mt-[min(3.3vw,55px)] flex flex-col items-center border border-[#32341D] sm:z-50"
      >
        <img
          src="/png/chef.png"
          alt="chef"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <Link
        to="/about"
        className="font-moche font-normal tracking-widest text-[#FCF7F5] flex items-center justify-center whitespace-nowrap mt-0"
        style={{ width: "clamp(280px, 24vw, 480px)", height: "clamp(44px, 4vw, 72px)", background: "#32341D", border: "1px solid #FCF7F5", gap: "8px", paddingLeft: "48px", paddingRight: "48px", fontSize: "clamp(13px, 1vw, 18px)" }}
      >
        DISCOVER THE STORY
      </Link>
    </div>
  );
}

export default HomeChefSection;
