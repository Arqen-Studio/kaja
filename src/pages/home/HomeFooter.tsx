import React from "react";
import { motion } from "framer-motion";

const HomeFooterSection: React.FC = () => {
  const kajaImages = [
    "/png/k-dark.png",
    "/png/a-dark.png",
    "/png/j-dark.png",
    "/png/a-dark.png",
  ];

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col justify-between py-10 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="w-full grid grid-cols-2 md:grid-cols-4 md:justify-items-center items-start p-10 pt-8 gap-8">
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
            <div key={i} className="base-text space-y-2">
              <p>{section.title}</p>
              {section.lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="w-full px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.div className="flex w-full items-center justify-between gap-2 md:gap-6">
          {kajaImages.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`kaja-${index}`}
              className="h-[clamp(80px,14vw,220px)] w-full flex-1 object-contain"
              variants={{
                hidden: { x: 200, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  },
                },
                exit: {
                  x: -200,
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full p-10 pb-6 flex flex-col md:flex-row  justify-between text-base opacity-80"
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

export default HomeFooterSection;
