import { motion, useInView, type Variants } from "framer-motion";
import { useMemo, useRef } from "react";

type LetterByLetterProps = {
  /** Full string; use `\n` for manual line breaks (ignored if `lines` is set) */
  text?: string;
  /** One string per line (overrides `text` line split) */
  lines?: string[];
  className?: string;
  align?: "center" | "left" | "right";
  /** When true, animation runs only while this block is in view */
  scrollToggle?: boolean;
  /** Delay between each character on the same line */
  stagger?: number;
  /** Delay between starting each line (after previous line’s first letter) */
  lineStagger?: number;
  delayChildren?: number;
  inViewAmount?: number | "some" | "all";
  inViewMargin?: string;
};

export function LetterByLetter({
  text = "",
  lines: linesProp,
  className,
  align = "center",
  scrollToggle = true,
  stagger = 0.04,
  lineStagger = 0.18,
  delayChildren = 0.06,
  inViewAmount = 0.35,
}: LetterByLetterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    amount: inViewAmount,
    once: false,
  });

  const rowLines = useMemo(() => {
    if (linesProp?.length)
      return linesProp.map((l) => l.trim()).filter(Boolean);
    const parts = text.split("\n").map((l) => l.trim());
    const nonEmpty = parts.filter(Boolean);
    return nonEmpty.length ? nonEmpty : [text];
  }, [text, linesProp]);

  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  const rootContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: lineStagger,
        delayChildren,
      },
    },
  };

  const lineContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={["block w-full", alignClass, className]
        .filter(Boolean)
        .join(" ")}
      variants={rootContainer}
      initial="hidden"
      animate={scrollToggle ? (isInView ? "visible" : "hidden") : "visible"}
    >
      {rowLines.map((line, lineIndex) => (
        <motion.span
          key={`line-${lineIndex}`}
          className="block w-full"
          variants={lineContainer}
        >
          {[...line].map((char, i) => (
            <motion.span
              key={`${lineIndex}-${i}-${char}`}
              variants={letter}
              style={{ display: "inline" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.span>
  );
}
