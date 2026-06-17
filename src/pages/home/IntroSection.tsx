import { motion } from "framer-motion";
import { LetterByLetter } from "../../components/LetterByLetter";

const IntroSection = () => {
  return (
    <section className="min-h-[60vh] relative overflow-hidden flex items-center bg-[#32341D] dark:bg-[#D6B283]">
      <div className="mx-auto flex flex-col md:flex-row w-full items-center justify-center gap-12 px-6 py-16 md:px-[3vw]">
        <motion.p
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            fontFamily: "Moche",
            fontWeight: 400,
            fontSize: "clamp(24px, 1.8vw, 42px)",
            lineHeight: "120%",
            color: "#FCF7F5",
            maxWidth: "clamp(609px, 45vw, 1100px)",
          }}
          className="text-left"
        >
          <LetterByLetter
            lines={[
              "Every detail is designed to evoke wonder. From",
              "the architecture and ambient lighting to the",
              "music, service, and culinary journey, each ",
              "moment unfolds with intention.",
            ]}
            align="left"
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <a
            href="https://www.sevenrooms.com/explore/kajabynuma/reservations/create/search/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "clamp(295px, 28vw, 650px)", height: "clamp(44px, 4.5vw, 90px)", gap: "8px", paddingLeft: "48px", paddingRight: "48px", fontSize: "clamp(16px, 1.1vw, 22px)" }}
            className="bg-[#D6B283] dark:bg-[#32341D] text-[#32341D] dark:text-[#D6B283] border border-[#D6B283] dark:border-[#32341D] flex items-center justify-center hover:opacity-80 transition-opacity font-moche font-normal tracking-widest whitespace-nowrap"
          >
            MAKE A RESERVATION
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
