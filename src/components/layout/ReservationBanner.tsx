import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

function ReservationBanner() {
  return (
    <a
      href="https://www.sevenrooms.com/explore/kajabynuma/reservations/create/search/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full border-t border-b border-[#D6B283] mb-20 hover:opacity-75 transition-opacity duration-300"
    >
      <div className="flex items-center justify-between px-6 md:px-[3vw] py-8 md:py-10">
        <motion.span
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            fontFamily: "Moche, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(16px, 4.5vw, 48px)",
            whiteSpace: "nowrap",
            letterSpacing: "0",
            lineHeight: "100%",
            color: "#D6B283",
            textTransform: "uppercase",
            display: "inline-block",
          }}
        >
          Make a Reservation
        </motion.span>

        <motion.span
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
          className="flex items-center"
          style={{ color: "#D6B283" }}
        >
          <MoveRight strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12" />
        </motion.span>
      </div>
    </a>
  );
}

export default ReservationBanner;
