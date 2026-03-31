import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function HomeMenuSection() {
  return (
    <section className="relative w-full overflow-hidden pb-0">
      <img
        src="/png/trees-dark.png"
        alt="trees"
        aria-hidden
        className=" absolute right-0  z-[1] h-[clamp(18rem,52vw,36rem)] w-auto max-w-[min(58vw,28rem)] select-none object-contain object-right-top opacity-12 dark:opacity-6 top-20 sm:max-w-[min(52vw,32rem)] md:h-[clamp(22rem,48vw,40rem)]  lg:max-w-[min(48vw,36rem)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-12 pb-4 pt-28  ">
        <div className="relative z-10 flex max-w-[373px] flex-col gap-6 ">
          <h2 className="heading !text-left">MENU</h2>
          <p className="sub-text">Dive into the wandering experience...</p>
          <Link
            to="/menu"
            className="mt-2 base-text leading-[100%] hover:opacity-75 flex items-center gap-2"
          >
            <span>Discover Our Menu</span>
            <MoveRight
              className="h-8 w-6 shrink-0"
              aria-hidden
              strokeWidth={1}
            />
          </Link>
        </div>
      </div>

      <div className="relative z-20 pt-12 mx-auto max-w-[1315px] leading-none pb-10">
        <img
          src="/png/home-menu-grid.png"
          alt="KAJA — selection of dishes and experiences"
          className="relative mb-0 block w-full h-[1900px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default HomeMenuSection;
