import { LetterByLetter } from "../../components/LetterByLetter";

const Stories = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto w-full px-6 md:px-[3vw] py-10 md:py-16">
        <h1 className="heading mx-auto mb-4 max-w-[380px] text-center !text-center">
          <LetterByLetter
            lines={["Inside the", "World of KAJA"]}
            align="center"
          />
        </h1>

        <div className="mx-auto mb-0 grid w-full grid-cols-1 items-start lg:grid-cols-[1fr_auto_1fr] lg:gap-4 lg:pb-0">
          <p
            className="hidden lg:block base-text mx-auto max-w-[300px] text-center lg:mt-[35%] mr-5 px-3
          "
          >
            <LetterByLetter
              lines={[
                "Discover the ideas, people, and",
                "inspirations that shape every ",
                "KAJA experience.",
              ]}
              align="center"
            />
          </p>

          <div className="flex justify-center leading-none md:justify-self-center">
            <img
              src="/png/stories.png"
              alt="chef"
              width={504}
              height={756}
              className="h-[756px] max-w-[504px] max-w-full object-cover object-[center_20]"
            />
          </div>

          <p className="lg:block hidden base-text mx-auto max-w-[303px] text-center lg:mt-[35%] ml-5 px-3">
            <LetterByLetter
              lines={[
                "From culinary craftsmanship,",
                "architecture to seasonal",
                "ingredients, every story reveals",
                "another layer of the journey.",
              ]}
              align="center"
            />
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] pb-10 px-10 w-full">
        <p className="heading !text-center" style={{ fontSize: "clamp(18px, 4.5vw, 60px)" }}>
          Exploring the people, creativity, and inspiration behind the KAJA experience.
        </p>
      </div>


      <div className="w-full mb-25">
        <h1 className="text-[6vw] text-center font-moche font-normal leading-[120%] tracking-[-2.8%] mt-12 mb-16 px-6 whitespace-nowrap">
          <LetterByLetter lines={["crafted to evoke wonder"]} align="center" />
        </h1>
        {/* overflow-hidden wrapper prevents page-level horizontal scroll */}
        <div className="w-full overflow-hidden">
          {/* Mobile: horizontal scroll carousel. Desktop: 2-col grid */}
          <div
            className="flex md:grid md:grid-cols-2 gap-4 md:gap-10 md:px-[8vw] overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingLeft: "1.5rem" }}
          >
            {/* leading spacer — visible only on mobile to give left breathing room */}
            <div className="flex-shrink-0 w-6 md:hidden" aria-hidden="true" />
            <div className="flex-shrink-0 snap-start md:!w-full" style={{ width: "clamp(260px, 78vw, 600px)" }}>
              <img
                src="/png/raw.png"
                alt="raw"
                className="w-full object-cover h-[clamp(280px,45vw,572px)]"
              />
              <h1 className="heading !text-left mt-6">RAW</h1>
            </div>
            <div className="flex-shrink-0 snap-start md:w-fit flex flex-col" style={{ width: "clamp(260px, 78vw, 600px)" }}>
              <img
                src="/png/fire.png"
                alt="fire"
                className="w-auto object-cover h-[clamp(280px,45vw,572px)]"
              />
              <h1 className="heading !text-left mt-6">FIRE</h1>
            </div>
            {/* trailing spacer */}
            <div className="flex-shrink-0 w-6 md:hidden" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
