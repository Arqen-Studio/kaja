import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const FooterSection: React.FC = () => {
  const { theme } = useTheme();
  const kajaImages = [
    { light: "/png/k-light.png", dark: "/png/k-dark.png" },
    { light: "/png/a-light.png", dark: "/png/a.png" },
    { light: "/png/j-light.png", dark: "/png/j-dark.png" },
    { light: "/png/a-light.png", dark: "/png/a-dark.png" },
  ];

  return (
    <div className="w-full flex flex-col justify-between overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="w-full flex flex-col md:flex-row md:justify-between items-start px-[3vw] pt-16 pb-10 md:pt-8 md:pb-10 gap-20 md:gap-0">
          {[
            {
              title: "Contact",
              lines: ["+00 123 456 7890", "support@kaja.com"],
            },
            {
              title: "Location",
              lines: ["Ubud, Bali"],
            },
            {
              title: "Follow",
              lines: ["Facebook", "Instagram", "TikTok"],
            },
            {
              title: "Language",
              lines: ["English", "Italian"],
            },
          ].map((section, i) => (
            <div key={i} className="base-text text-sm space-y-2">
              <p>{section.title}</p>
              {section.lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="w-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex w-full items-end justify-between gap-1 px-4 sm:gap-2 sm:px-[3vw]">
          {kajaImages.map((imageSet, index) => (
            <motion.img
              key={index}
              src={theme === "dark" ? imageSet.dark : imageSet.light}
              alt={`kaja-${index}`}
              className="h-[clamp(92px,24vw,420px)] min-w-0 flex-1 object-contain object-bottom"
              variants={{
                hidden: { y: 400, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 2.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.25,
                  },
                },
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="w-full px-[3vw] pb-6 pt-2 flex flex-col md:flex-row justify-between text-base opacity-80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p>Copyright © 2026</p>
        <p>Design by @arqenstudio</p>
      </motion.div>
    </div>
  );
};

export default FooterSection;
