import { motion, useInView, type Variants } from "framer-motion";
import { useMemo, useRef } from "react";

type InViewOptions = NonNullable<Parameters<typeof useInView>[1]>;

type LetterByLetterProps = {
  text?: string;
  lines?: string[];
  className?: string;
  align?: "center" | "left" | "right";
  scrollToggle?: boolean;
  stagger?: number;
  lineStagger?: number;
  delayChildren?: number;
  inViewAmount?: number | "some" | "all";
  inViewMargin?: InViewOptions["margin"];
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
  inViewMargin,
}: LetterByLetterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    amount: inViewAmount,
    margin: inViewMargin,
    once: false,
  });

  const rowLines = useMemo(() => {
    if (linesProp?.length) {
      return linesProp.map((l) => l.trim()).filter(Boolean);
    }

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
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.22,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={[
        "block w-full break-normal",
        alignClass,
        className,
      ]
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
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={`word-${lineIndex}-${wordIndex}`}
              style={{
                display: "inline-block",
                whiteSpace: "nowrap", 
              }}
            >
              {[...word].map((char, i) => (
                <motion.span
                  key={`char-${lineIndex}-${wordIndex}-${i}`}
                  variants={letter}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}

              {/* space after word */}
              <span style={{ display: "inline" }}>&nbsp;</span>
            </span>
          ))}
        </motion.span>
      ))}
    </motion.span>
  );
}
