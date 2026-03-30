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
      <div className="w-full overflow-hidden h-[240px] md:h-[460px]">
        <img
          src="/png/reservation-hero.png"
          alt="KAJA Restaurant Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-14">
        <h1 className="heading mb-8 md:mb-12 !text-[28px] md:!text-[48px]" style={{ color: "var(--text)" }}>
          A mesmerizing
          <br />
          evening is waiting
        </h1>

        <div className="flex flex-col">

          {/* Selector Row */}
          <div className="grid grid-cols-3" style={{ border: "1px solid var(--text)" }}>

            {/* Guests */}
            <div
              className="flex flex-col items-center justify-center py-3 md:py-6 gap-2 md:gap-3"
              style={{ borderRight: "1px solid var(--text)" }}
            >
              <span className="navbar-text" style={{ color: "var(--text)" }}>GUESTS</span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-transparent text-center navbar-text appearance-none cursor-pointer hover:opacity-80 transition-opacity"
                style={{ color: "var(--text)" }}
              >
                <option value="" style={{ backgroundColor: "var(--bg)" }}>--</option>
                {GUEST_OPTIONS.map((n) => (
                  <option key={n} value={n} style={{ backgroundColor: "var(--bg)" }}>{n}</option>
                ))}
              </select>
            </div>

            {/* Time */}
            <div
              className="flex flex-col items-center justify-center py-3 md:py-6 gap-2 md:gap-3"
              style={{ borderRight: "1px solid var(--text)" }}
            >
              <span className="navbar-text" style={{ color: "var(--text)" }}>TIME</span>
              <span className="navbar-text" style={{ color: "var(--text)" }}>-- --</span>
            </div>

            {/* Date */}
            <div className="flex flex-col items-center justify-center py-3 md:py-6 gap-2 md:gap-3">
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
          <div
            className="grid grid-cols-1 sm:grid-cols-3 mt-6"
            style={{ gap: "1px", backgroundColor: "var(--bg)" }}
          >
            {DUMMY_SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot.id;
              return (
                <button
                  key={slot.id}
                  onClick={() => { setSelectedSlot(slot.id); setModalSlot(slot); }}
                  className="transition-all cursor-pointer flex flex-col items-center justify-center py-5 md:py-6 gap-1 hover:opacity-80"
                  style={{
                    backgroundColor: isSelected ? "#D6B283" : "var(--slot-bg)",
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
            className="navbar-text w-full mt-6 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ backgroundColor: "#FCF7F5", color: "#32341D", border: "1px solid #32341D", height: "82px" }}
          >
            SUBMIT REQUEST
          </button>

        </div>
      </div>

      {/* Slot Detail Modal */}
      {modalSlot && (
        <div
          onClick={() => setModalSlot(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full overflow-y-auto"
            style={{
              backgroundColor: "#fcf7f5",
              color: "#32341d",
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
            <div className="w-full h-[180px] sm:h-[280px] overflow-hidden px-6">
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
            <div style={{ padding: "57px 24px 0" }}>
              <p className="base-text" style={{ color: "#32341d", marginBottom: "22px", lineHeight: "100%" }}>
                About
              </p>
              <p className="base-text" style={{ color: "#32341d", lineHeight: "100%" }}>
                {modalSlot.about}
              </p>
            </div>

            {/* Select Button */}
            <div style={{ padding: "35px 24px 25px" }}>
              <button
                onClick={() => {
                  setSelectedSlot(modalSlot.id);
                  setModalSlot(null);
                }}
                className="navbar-text w-full cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  height: "82px",
                  padding: "0 48px",
                  backgroundColor: "#32341d",
                  color: "#fcf7f5",
                  border: "none",
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
