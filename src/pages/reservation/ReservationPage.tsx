import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

type Slot = {
  id: number;
  time: string;
  area: string;
  title: string;
  image: string;
  about: string;
};

const DUMMY_SLOTS: Slot[] = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  time: "17:00",
  area: "Garden",
  title: "Inside Sitting",
  image: "/png/reservation-hero.png",
  about: "A place that becomes part of Ubud's identity alongside its nature, culture, and spirit.",
}));

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ReservationPage() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [modalSlot, setModalSlot] = useState<Slot | null>(null);
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const wasDark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.add("dark");
    return () => {
      if (!wasDark) {
        document.documentElement.classList.remove("dark");
      }
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (modalSlot) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalSlot]);

  const formattedDate = date
    ? date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })
    : "-- -- --";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ height: "460px" }}>
        <img
          src="/png/reservation-hero.png"
          alt="KAJA Restaurant Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="heading mb-12" style={{ color: "var(--text)" }}>
          A mesmerizing
          <br />
          evening is waiting
        </h1>

        <div style={{ display: "flex", flexDirection: "column" }}>

          {/* Selector Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid var(--text)" }}>

            {/* Guests */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 0", gap: "12px", borderRight: "1px solid var(--text)" }}>
              <span className="navbar-text" style={{ color: "var(--text)" }}>GUESTS</span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-transparent text-center navbar-text appearance-none cursor-pointer"
                style={{ color: "var(--text)" }}
              >
                <option value="" style={{ backgroundColor: "#32341d" }}>--</option>
                {GUEST_OPTIONS.map((n) => (
                  <option key={n} value={n} style={{ backgroundColor: "#32341d" }}>{n}</option>
                ))}
              </select>
            </div>

            {/* Time */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 0", gap: "12px", borderRight: "1px solid var(--text)" }}>
              <span className="navbar-text" style={{ color: "var(--text)" }}>TIME</span>
              <span className="navbar-text" style={{ color: "var(--text)" }}>-- --</span>
            </div>

            {/* Date */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 0", gap: "12px" }}>
              <span className="navbar-text" style={{ color: "var(--text)" }}>DATE</span>
              <DatePicker
                selected={date}
                onChange={(d: Date | null) => setDate(d)}
                placeholderText="-- -- --"
                dateFormat="dd MM yyyy"
                minDate={new Date()}
                className="kaja-datepicker-input"
                popperPlacement="bottom"
                calendarClassName="kaja-calendar"
              />
            </div>
          </div>

          {/* Slots Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", backgroundColor: "#32341d", marginTop: "24px" }}>
            {DUMMY_SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot.id;
              return (
                <button
                  key={slot.id}
                  onClick={() => setModalSlot(slot)}
                  className="transition-colors"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px 0",
                    gap: "4px",
                    backgroundColor: isSelected ? "#D6B283" : "#f5f0e8",
                    color: "#32341d",
                    margin: 0,
                    border: "none",
                  }}
                >
                  <span className="base-text" style={{ lineHeight: "100%" }}>{slot.time}</span>
                  <span className="base-text" style={{ lineHeight: "100%" }}>{slot.area}</span>
                </button>
              );
            })}
          </div>

          {/* Submit Button */}
          <button
            className="navbar-text"
            style={{ width: "100%", padding: "24px 0", backgroundColor: "#f5f0e8", color: "#32341d", border: "none", marginTop: "24px" }}
          >
            SUBMIT REQUEST
          </button>

        </div>
      </div>

      {/* Slot Detail Modal */}
      {modalSlot && (
        <div
          onClick={() => setModalSlot(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fcf7f5",
              color: "#32341d",
              width: "100%",
              maxWidth: "517px",
              borderRadius: "13px",
              overflow: "hidden",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Title */}
            <div style={{ padding: "24px 24px 16px" }}>
              <p className="base-text" style={{ color: "#32341d", lineHeight: "100%" }}>
                {modalSlot.title}
              </p>
            </div>

            {/* Image */}
            <div style={{ width: "100%", height: "260px", overflow: "hidden", padding: "0 24px" }}>
              <img
                src={modalSlot.image}
                alt={modalSlot.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }}
              />
            </div>

            {/* Date & Time */}
            <div style={{ padding: "20px 24px 0", display: "flex", gap: "32px" }}>
              <span className="base-text" style={{ color: "#32341d", lineHeight: "100%" }}>
                {formattedDate}
              </span>
              <span className="base-text" style={{ color: "#32341d", lineHeight: "100%" }}>
                {modalSlot.time}
              </span>
            </div>

            {/* About */}
            <div style={{ padding: "20px 24px 0" }}>
              <p className="base-text" style={{ color: "#32341d", marginBottom: "8px", lineHeight: "100%" }}>
                About
              </p>
              <p className="base-text" style={{ color: "#32341d", lineHeight: "100%" }}>
                {modalSlot.about}
              </p>
            </div>

            {/* Select Button */}
            <div style={{ padding: "24px" }}>
              <button
                onClick={() => {
                  setSelectedSlot(modalSlot.id);
                  setModalSlot(null);
                }}
                className="navbar-text"
                style={{
                  width: "100%",
                  height: "82px",
                  padding: "0 48px",
                  backgroundColor: "#32341d",
                  color: "#fcf7f5",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                SELECT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
