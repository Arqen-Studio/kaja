import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function HomeAboutSection() {
  return (
    <div className="max-w-[1300px] py-4 md:py-8 mx-auto px-6 md:px-10">
      <div className="w-full flex md:flex-row flex-col justify-center gap-4 border border-[#32341D] dark:border-[#D6B283] overflow-hidden relative">
        <motion.img
          src="/png/about-image-1.png"
          alt="about-image-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ aspectRatio: "571/425" }}
          className="relative z-10 object-cover flex-shrink-0 w-full md:w-[60%]"
        />

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col items-center md:items-start justify-center p-10 space-y-8 relative z-0"
        >
          <h1 className="heading !text-left">About</h1>

          <p className="sub-text  tracking-[-0.028em]">
            KAJA is a contemporary dining experience where...
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
