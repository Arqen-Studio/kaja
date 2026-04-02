import { useEffect, useState } from "react";
import { LetterByLetter } from "../../components/LetterByLetter";
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
  about:
    "A place that becomes part of Ubud's identity alongside its nature, culture, and spirit.",
}));

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FIELD_LABEL =
  "base-text text-center text-[10px] uppercase leading-tight text-[var(--text)] sm:text-xs md:text-base";

const FIELD_CELL =
  "flex min-w-0 flex-col items-center justify-center gap-1.5 px-1 py-3 sm:py-4 md:gap-2 md:py-6";

const TIME_OPTIONS = (() => {
  const opts: string[] = [];
  for (let h = 9; h <= 23; h++) {
    opts.push(`${h.toString().padStart(2, "0")}:00`);
    if (h < 23) opts.push(`${h.toString().padStart(2, "0")}:30`);
  }
  return opts;
})();

const COUNTRY_CODES = [
  { code: "+62", flag: "🇮🇩" },
  { code: "+1",  flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+61", flag: "🇦🇺" },
  { code: "+65", flag: "🇸🇬" },
  { code: "+60", flag: "🇲🇾" },
  { code: "+66", flag: "🇹🇭" },
  { code: "+63", flag: "🇵🇭" },
  { code: "+84", flag: "🇻🇳" },
  { code: "+81", flag: "🇯🇵" },
  { code: "+82", flag: "🇰🇷" },
  { code: "+86", flag: "🇨🇳" },
  { code: "+91", flag: "🇮🇳" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+49", flag: "🇩🇪" },
  { code: "+33", flag: "🇫🇷" },
  { code: "+39", flag: "🇮🇹" },
  { code: "+34", flag: "🇪🇸" },
  { code: "+31", flag: "🇳🇱" },
  { code: "+7",  flag: "🇷🇺" },
];

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  border: "1px solid #D1D1D1",
  outline: "none",
  fontFamily: "Moche, sans-serif",
  fontSize: "14px",
  color: "#32341D",
  backgroundColor: "#fff",
  borderRadius: "2px",
};

const inputError: React.CSSProperties = { ...inputBase, borderColor: "#c0392b" };

export default function ReservationPage() {
  // ── Slot selection state ──
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [modalSlot, setModalSlot] = useState<Slot | null>(null);
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  // ── Request details modal state ──
  const [requestOpen, setRequestOpen] = useState(false);
  const [startTime, setStartTime]     = useState("");
  const [endTime, setEndTime]         = useState("");
  const [notes, setNotes]             = useState("");
  const [firstName, setFirstName]     = useState("");
  const [lastName, setLastName]       = useState("");
  const [email, setEmail]             = useState("");
  const [phone, setPhone]             = useState("");
  const [phoneCountry, setPhoneCountry] = useState("+62");
  const [offerVenue, setOfferVenue]   = useState(false);
  const [offerAll, setOfferAll]       = useState(false);
  const [errors, setErrors]           = useState<Record<string, boolean>>({});

  // Prevent body scroll when any modal is open
  useEffect(() => {
    document.body.style.overflow = modalSlot || requestOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalSlot, requestOpen]);

  const formattedDate = date
    ? date.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "-- -- --";

  const requestFormattedDate = date
    ? date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const clearError = (key: string) =>
    setErrors((prev) => ({ ...prev, [key]: false }));

  const handleSubmitRequest = () => {
    const e: Record<string, boolean> = {};
    if (!startTime)        e.startTime = true;
    if (!endTime)          e.endTime   = true;
    if (!firstName.trim()) e.firstName = true;
    if (!lastName.trim())  e.lastName  = true;
    if (!email.trim())     e.email     = true;
    if (!phone)            e.phone     = true;
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setRequestOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="h-44 w-full overflow-hidden sm:h-60 md:h-[460px]">
        <img
          src="/png/reservation-hero.png"
          alt="KAJA Restaurant Interior"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10 md:py-14">
        <h1 className="heading mb-6 text-balance sm:mb-8 md:mb-10">
          <LetterByLetter lines={["A mesmerizing", "evening is waiting"]} align="center" />
        </h1>

        <div className="mt-6 flex min-w-0 flex-col sm:mt-8 md:mt-12">
          <div className="grid min-w-0 grid-cols-3 divide-x divide-[var(--text)] border border-[var(--text)]">
            <div className={FIELD_CELL}>
              <span className={FIELD_LABEL}>GUESTS</span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="base-text w-full min-w-0 max-w-full cursor-pointer appearance-none bg-transparent py-1 text-center text-xs touch-manipulation text-[var(--text)] sm:text-sm md:text-base"
                style={{ textAlignLast: "center" }}
              >
                <option value="" className="bg-[var(--bg)] text-[var(--text)]">
                  --
                </option>
                {GUEST_OPTIONS.map((n) => (
                  <option
                    key={n}
                    value={n}
                    className="bg-[var(--bg)] text-[var(--text)]"
                  >
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className={FIELD_CELL}>
              <span className={FIELD_LABEL}>TIME</span>
              <span className="base-text text-center text-xs leading-[100%] sm:text-sm md:text-base">
                {selectedSlot
                  ? DUMMY_SLOTS.find((s) => s.id === selectedSlot)?.time ?? "-- --"
                  : "-- --"}
              </span>
            </div>

            <div className={FIELD_CELL}>
              <span className={FIELD_LABEL}>DATE</span>
              <div className="flex w-full min-w-0 justify-center">
                <DatePicker
                  selected={date}
                  onChange={(d: Date | null) => setDate(d)}
                  placeholderText="-- -- --"
                  dateFormat="dd MM yyyy"
                  minDate={new Date()}
                  className="kaja-datepicker-input"
                  popperPlacement="bottom"
                  calendarClassName="kaja-calendar"
                  popperClassName="kaja-datepicker-popper"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-px bg-[var(--bg)] sm:mt-6 sm:grid-cols-3">
            {DUMMY_SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot.id;
              return (
                <button
                  type="button"
                  key={slot.id}
                  onClick={() => {
                    setSelectedSlot(slot.id);
                    setModalSlot(slot);
                  }}
                  className={`flex min-h-[48px] touch-manipulation flex-col items-center justify-center gap-0.5 border-0 py-3.5 text-[#32341d] transition-opacity hover:opacity-80 cursor-pointer sm:min-h-0 sm:py-5 md:gap-1 md:py-6 ${
                    isSelected ? "bg-[#D6B283]" : "bg-[var(--slot-bg)]"
                  }`}
                >
                  <span className="base-text text-sm leading-[100%] sm:text-base">
                    {slot.time}
                  </span>
                  <span className="base-text text-xs leading-[100%] sm:text-base">
                    {slot.area}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setRequestOpen(true)}
            className="navbar-text mt-4 min-h-12 w-full touch-manipulation cursor-pointer border border-[#32341D] bg-[#FCF7F5] px-2 py-3.5 !text-sm text-[#32341D] transition-opacity hover:opacity-80 sm:mt-6 sm:min-h-[60px] sm:!text-base md:!text-[16px] md:min-h-[82px] md:py-0"
          >
            SUBMIT REQUEST
          </button>
        </div>
      </div>

      {/* ── Slot Detail Modal ── */}
      {modalSlot && (
        <div
          role="presentation"
          onClick={() => setModalSlot(null)}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/55 sm:items-center sm:p-4"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-slot-title"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[min(92dvh,100%)] w-full max-w-[517px] overflow-y-auto rounded-t-2xl bg-[#fcf7f5] text-[#32341d] sm:rounded-xl"
          >
            <div className="flex items-start justify-between gap-3 px-4 pb-3 pt-4 sm:px-6 sm:pb-4 sm:pt-6">
              <p
                id="reservation-slot-title"
                className="base-text pr-2 text-left leading-[100%]"
              >
                {modalSlot.title}
              </p>
              <button
                type="button"
                onClick={() => setModalSlot(null)}
                className="min-h-11 min-w-11 shrink-0 touch-manipulation text-xl leading-none opacity-70 hover:opacity-100"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="h-[160px] w-full overflow-hidden px-4 sm:h-[260px] sm:px-6 md:h-[280px]">
              <img
                src={modalSlot.image}
                alt=""
                className="h-full w-full rounded-md object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-1 px-4 pt-4 sm:px-6 sm:pt-5">
              <span className="base-text text-sm leading-[100%] sm:text-base">
                {formattedDate}
              </span>
              <span className="base-text text-sm leading-[100%] sm:text-base">
                {modalSlot.time}
              </span>
            </div>

            <div className="px-4 pt-6 sm:px-6 sm:pt-[57px]">
              <p className="base-text mb-2 text-sm leading-[100%] sm:mb-[22px] sm:text-base">
                About
              </p>
              <p className="base-text text-sm leading-snug sm:text-base sm:leading-normal">
                {modalSlot.about}
              </p>
            </div>

            <div className="px-4 py-5 sm:px-6 sm:py-8">
              <button
                type="button"
                onClick={() => {
                  setSelectedSlot(modalSlot.id);
                  setModalSlot(null);
                }}
                className="navbar-text min-h-12 w-full rounded-sm touch-manipulation cursor-pointer border-0 bg-[#32341d] py-3.5 !text-sm text-[#fcf7f5] transition-opacity hover:opacity-80 sm:min-h-[72px] sm:!text-base md:!text-[16px] md:min-h-[82px] md:py-0"
              >
                SELECT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Request Details Modal ── */}
      {requestOpen && (
        <div
          role="presentation"
          onClick={() => setRequestOpen(false)}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/55 sm:items-center sm:p-4"
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92dvh] w-full max-w-[516px] overflow-y-auto rounded-t-2xl bg-white sm:rounded-xl"
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-6 pt-6 ${(requestFormattedDate || guests) ? "pb-3" : "pb-0"}`}>
              <h2 className="base-text" style={{ color: "#32341D", lineHeight: "100%" }}>
                Request Details
              </h2>
              <button
                type="button"
                onClick={() => setRequestOpen(false)}
                className="min-h-11 min-w-11 flex items-center justify-center shrink-0 touch-manipulation text-xl leading-none opacity-70 hover:opacity-100 cursor-pointer"
                style={{ color: "#32341D", background: "none", border: "none" }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Date / Guests summary + divider — only shown when at least one value exists */}
            {(requestFormattedDate || guests) && (
              <>
                <div className="px-6 pb-4 flex flex-col gap-2">
                  {requestFormattedDate && (
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span className="base-text text-sm sm:text-base" style={{ color: "#32341D", lineHeight: "100%" }}>
                        {requestFormattedDate}
                      </span>
                    </div>
                  )}
                  {guests && (
                    <div className="flex items-center gap-2">
                      <span>👥</span>
                      <span className="base-text text-sm sm:text-base" style={{ color: "#32341D", lineHeight: "100%" }}>
                        {guests} {guests === "1" ? "guest" : "guests"}
                      </span>
                    </div>
                  )}
                </div>
                <hr style={{ borderColor: "#E5E5E5", margin: "0 24px" }} />
              </>
            )}

            {/* Form */}
            <div className="p-6 flex flex-col gap-4">

              {/* Reservation Time */}
              <div>
                <label className="base-text block mb-2" style={{ color: "#32341D", fontSize: "14px", lineHeight: "100%" }}>
                  Reservation Time Between:*
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <select
                    value={startTime}
                    onChange={(e) => { setStartTime(e.target.value); clearError("startTime"); }}
                    style={errors.startTime ? { ...inputError } : { ...inputBase }}
                  >
                    <option value="">Choose Start Time</option>
                    {TIME_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <span className="base-text hidden sm:block" style={{ color: "#32341D", flexShrink: 0 }}>-</span>
                  <select
                    value={endTime}
                    onChange={(e) => { setEndTime(e.target.value); clearError("endTime"); }}
                    style={errors.endTime ? { ...inputError } : { ...inputBase }}
                  >
                    <option value="">Choose End Time</option>
                    {TIME_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="base-text block mb-2" style={{ color: "#32341D", fontSize: "14px", lineHeight: "100%" }}>
                  Reservation Notes
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  placeholder="Any special requests or notes..."
                  className="resize-none"
                  style={{ ...inputBase }}
                />
              </div>

              {/* First + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value); clearError("firstName"); }}
                  style={errors.firstName ? { ...inputError } : { ...inputBase }}
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value); clearError("lastName"); }}
                  style={errors.lastName ? { ...inputError } : { ...inputBase }}
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email Address*"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
                  style={errors.email ? { ...inputError } : { ...inputBase }}
                />
                <div
                  style={{
                    borderRadius: "2px",
                    border: `1px solid ${errors.phone ? "#c0392b" : "#D1D1D1"}`,
                    display: "flex",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                  }}
                >
                  <select
                    value={phoneCountry}
                    onChange={(e) => setPhoneCountry(e.target.value)}
                    style={{
                      border: "none",
                      borderRight: "1px solid #D1D1D1",
                      outline: "none",
                      fontFamily: "Moche, sans-serif",
                      fontSize: "13px",
                      color: "#32341D",
                      backgroundColor: "#fff",
                      padding: "0 6px",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); clearError("phone"); }}
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      fontFamily: "Moche, sans-serif",
                      fontSize: "14px",
                      color: "#32341D",
                      backgroundColor: "#fff",
                      padding: "12px 10px",
                    }}
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={offerVenue}
                  onChange={(e) => setOfferVenue(e.target.checked)}
                  className="mt-1 cursor-pointer"
                />
                <span className="base-text flex items-center gap-1" style={{ color: "#32341D", fontSize: "13px", lineHeight: "140%" }}>
                  Receive news and offers for this venue
                  <span style={{ fontSize: "12px", opacity: 0.5, cursor: "help" }} title="You'll receive updates about this venue only">ⓘ</span>
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={offerAll}
                  onChange={(e) => setOfferAll(e.target.checked)}
                  className="mt-1 cursor-pointer"
                />
                <span className="base-text flex items-center gap-1" style={{ color: "#32341D", fontSize: "13px", lineHeight: "140%" }}>
                  Receive news and offers for all our locations
                  <span style={{ fontSize: "12px", opacity: 0.5, cursor: "help" }} title="You'll receive updates about all our locations">ⓘ</span>
                </span>
              </label>

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmitRequest}
                className="navbar-text min-h-12 w-full touch-manipulation cursor-pointer transition-opacity hover:opacity-80 !text-sm md:!text-base"
                style={{ backgroundColor: "#8B1F1F", color: "#fff", border: "none", borderRadius: "2px", padding: "14px 0" }}
              >
                Submit a request
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
