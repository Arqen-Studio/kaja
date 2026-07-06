import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const FooterSection: React.FC = () => {
  const { theme } = useTheme();
  const [dark, setDark] = useState(theme === "dark");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const kajaImages = [
    { light: "/svg/K-light.svg", dark: "/svg/K-dark.svg" },
    { light: "/svg/A-light.svg", dark: "/svg/A-dark.svg" },
    { light: "/svg/J-light.svg", dark: "/svg/J-dark.svg" },
    { light: "/svg/A-light.svg", dark: "/svg/A-dark.svg" },
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
              lines: [
                { label: "+62 858 7604 7835", href: "https://wa.me/628587604835" },
                { label: "info@kajabynuma.com", href: "mailto:info@kajabynuma.com" },
              ],
            },
            {
              title: "Location",
              lines: [{ label: "Ubud, Bali" }],
            },
            {
              title: "Follow us",
              lines: [
                { label: "Instagram", href: "https://www.instagram.com/kajabynuma?igsh=MTh1eHJycTdhaW1jeA%3D%3D" },
                { label: "Tiktok", href: "https://www.tiktok.com/@kajabynuma?_r=1&_t=ZN-975nL06IOfu" },
              ],
            },
          ].map((section, i) => (
            <div key={i} className="base-text text-sm space-y-2">
              <p style={{ fontWeight: 700, WebkitTextStroke: "0.5px currentColor" }}>{section.title}</p>
              {section.lines.map((line, idx) =>
                "href" in line ? (
                  <a
                    key={idx}
                    href={line.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-70 transition-opacity"
                  >
                    {line.label}
                  </a>
                ) : (
                  <p key={idx}>{line.label}</p>
                )
              )}
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
              src={dark ? imageSet.dark : imageSet.light}
              alt={`kaja-${index}`}
              className="h-[clamp(92px,24vw,440px)] min-w-0 flex-1 object-contain object-bottom"
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
