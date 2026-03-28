const IntroSection = () => {
  return (
    <section className="bg-[#C9A878] pt-24 pb-10 ">
      <div className="mx-auto flex max-w-5xl justify-center gap-12 px-6">
        <p className="max-w-md text-left sub-text text-[#32341D]">
          Every element is crafted to evoke wonder, from the enveloping space
          and lighting to the music, the service, and the way food and drinks
          are presented and experienced.
        </p>

        <div className="flex flex-col items-center gap-4 max-w-[277px]">
          <button className="w-full h-[44px] bg-[#32341D] base-text  tracking-wide">
            MAKE RESERVATION
          </button>

          <img
            src="/png/stone.png"
            alt="Decoration"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
