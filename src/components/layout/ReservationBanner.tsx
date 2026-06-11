import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

function ReservationBanner() {
  return (
    <a
      href="https://www.sevenrooms.com/explore/kajabynuma/reservations/create/search/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full border-t border-b border-[var(--text)] opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <div className="flex items-center justify-between px-6 md:px-[3vw] py-7">
        <span
          style={{
            fontFamily: "Moche, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(18px, 3vw, 36px)",
            letterSpacing: "0.15em",
            color: "var(--text)",
            textTransform: "uppercase",
          }}
        >
          Make a Reservation
        </span>

        <motion.span
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center"
          style={{ color: "var(--text)" }}
        >
          <MoveRight strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12" />
        </motion.span>
      </div>
    </a>
  );
}

export default ReservationBanner;
