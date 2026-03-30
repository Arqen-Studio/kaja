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
  about:
    "A place that becomes part of Ubud's identity alongside its nature, culture, and spirit.",
}));

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FIELD_LABEL =
  "base-text text-center text-[10px] uppercase leading-tight text-[var(--text)] sm:text-xs md:text-base";

const FIELD_CELL =
  "flex min-w-0 flex-col items-center justify-center gap-1.5 px-1 py-3 sm:py-4 md:gap-2 md:py-6";

export default function ReservationPage() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [modalSlot, setModalSlot] = useState<Slot | null>(null);
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    document.body.style.overflow = modalSlot ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalSlot]);

  const formattedDate = date
    ? date.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "-- -- --";

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
        <h1 className="heading mb-6 text-balance  sm:mb-8  md:mb-10 ">
          A mesmerizing
          <br />
          evening is waiting
        </h1>

        <div className="mt-6 flex min-w-0 flex-col sm:mt-8 md:mt-12">
          <div className="grid min-w-0 grid-cols-3 divide-x divide-[var(--text)] border border-[var(--text)]">
            <div className={FIELD_CELL}>
              <span className={FIELD_LABEL}>GUESTS</span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="base-text w-full min-w-0 max-w-full cursor-pointer appearance-none bg-transparent py-1 text-center text-xs touch-manipulation text-[var(--text)] sm:text-sm md:text-base"
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
                -- --
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
                  className={`flex min-h-[48px] touch-manipulation flex-col items-center justify-center gap-0.5 border-0 py-3.5 text-[#32341d] transition-opacity hover:opacity-80 sm:min-h-0 sm:py-5 md:gap-1 md:py-6 ${
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
            className="navbar-text mt-4 min-h-12 w-full touch-manipulation border border-[#32341D] bg-[#FCF7F5] py-3.5 !text-sm text-[#32341D] transition-opacity hover:opacity-80 sm:mt-6 sm:min-h-[60px] sm:!text-base md:!text-[16px] md:min-h-[82px] md:py-0"
          >
            SUBMIT REQUEST
          </button>
        </div>
      </div>

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
            className="max-h-[min(92dvh,100%)] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-[#fcf7f5] text-[#32341d] sm:rounded-xl"
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

            <div className="h-40 w-full overflow-hidden px-4 sm:h-52 sm:px-6 md:h-64">
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

            <div className="px-4 pt-6 sm:px-6 sm:pt-10">
              <p className="base-text mb-2 text-sm leading-[100%] sm:mb-4 sm:text-base">
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
                className="navbar-text min-h-12 w-full rounded-sm touch-manipulation border-0 bg-[#32341d] py-3.5 !text-sm text-[#fcf7f5] transition-opacity hover:opacity-80 sm:min-h-[72px] sm:!text-base md:!text-[16px] md:min-h-[82px] md:py-0"
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
