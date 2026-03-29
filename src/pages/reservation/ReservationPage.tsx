import { useEffect, useState } from "react";

const DUMMY_SLOTS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  time: "17:00",
  area: "Garden",
}));

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ReservationPage() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");

  // Force dark mode for this page; restore system preference on unmount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

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
        {/* Heading */}
        <h1 className="heading mb-12" style={{ color: "var(--text)" }}>
          A mesmerizing
          <br />
          evening is waiting
        </h1>

        {/* Selector + Slots + Submit — kept in one block so no implicit gaps appear */}
        <div style={{ display: "flex", flexDirection: "column" }}>

          {/* Selector Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              border: "1px solid var(--text)",
            }}
          >
            {/* Guests */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 0",
                gap: "12px",
                borderRight: "1px solid var(--text)",
              }}
            >
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 0",
                gap: "12px",
                borderRight: "1px solid var(--text)",
              }}
            >
              <span className="navbar-text" style={{ color: "var(--text)" }}>TIME</span>
              <span className="navbar-text" style={{ color: "var(--text)" }}>-- --</span>
            </div>

            {/* Date */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 0",
                gap: "12px",
              }}
            >
              <span className="navbar-text" style={{ color: "var(--text)" }}>DATE</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent text-center navbar-text cursor-pointer"
                style={{ color: "var(--text)", colorScheme: "dark" }}
              />
            </div>
          </div>

          {/* Time Slots Grid — dark bg + 2px gap creates dark separators matching Figma */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "2px",
              backgroundColor: "#32341d",
              marginTop: "24px",
            }}
          >
            {DUMMY_SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot.id;
              return (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(isSelected ? null : slot.id)}
                  className="transition-colors"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px 0",
                    gap: "4px",
                    backgroundColor: isSelected ? "#c9a87c" : "#f5f0e8",
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

          {/* Submit Button — same gap below slots as above them */}
          <button
            className="navbar-text"
            style={{
              width: "100%",
              padding: "24px 0",
              backgroundColor: "#f5f0e8",
              color: "#32341d",
              border: "none",
              marginTop: "24px",
            }}
          >
            SUBMIT REQUEST
          </button>

        </div>
      </div>
    </div>
  );
}
