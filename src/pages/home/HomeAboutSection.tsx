import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function HomeAboutSection() {
  return (
    <div className=" max-w-[950px] py-16 mx-auto">
      <div className="w-full flex md:flex-row flex-col md:h-[322px] justify-center gap-4 border border-[#32341D] dark:border-[#D6B283] ">
        <img src="/png/about-image-1.png" alt="about-image-1" />
        <img src="/png/about-image-2.png" alt="about-image-1"
        className="hidden md:block" />
        <div className="flex flex-col items-center md:items-start p-10 space-y-8">
          <h1 className="heading !text-left">About</h1>
          <p className="sub-text tracking-[-0.028em]">
            KAJA is a contemporary, high-level destination...
          </p>
          <Link
            to="/about"
            className="mt-2 base-text hover:opacity-75 flex items-center gap-2 "
          >
            <span>Discover More</span>
            <MoveRight
              className="h-8 w-6 shrink-0"
              aria-hidden
              strokeWidth={1}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
