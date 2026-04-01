import React from "react";
import { motion } from "framer-motion";

const FooterSection: React.FC = () => {
  const kajaImages = [
    "/png/k-dark.png",
    "/png/a-dark.png",
    "/png/j-dark.png",
    "/png/a-dark.png",
  ];

  return (
    <div className="w-full flex flex-col justify-between overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-4 md:justify-items-center items-start px-10 pt-16 pb-10 md:pt-8 md:pb-10 gap-20 md:gap-8">
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

      {/* KAJA letters — full width, slide in from bottom one by one */}
      <motion.div
        className="w-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex w-full items-end justify-between">
          {kajaImages.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`kaja-${index}`}
              className="h-[clamp(120px,30vw,440px)] w-full flex-1 object-contain"
              variants={{
                hidden: { y: 120, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.15,
                  },
                },
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="w-full px-10 pb-6 pt-2 flex flex-col md:flex-row justify-between text-base opacity-80"
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
