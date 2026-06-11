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
        <span
          style={{
            fontFamily: "Moche, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(24px, 3.5vw, 48px)",
            letterSpacing: "0",
            lineHeight: "100%",
            color: "#D6B283",
            textTransform: "uppercase",
          }}
        >
          Make a Reservation
        </span>

        <motion.span
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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
