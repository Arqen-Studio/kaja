const IntroSection = () => {
  return (
    <section className="bg-[#C9A878] py-16">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-12 px-6">
        <p className="max-w-md text-left sub-text text-[#32341D]">
          Every element is crafted to evoke wonder, from the enveloping space
          and lighting to the music, the service, and the way food and drinks
          are presented and experienced.
        </p>

        <div className="flex flex-col items-center gap-4 max-w-[277px]">
          <button className="w-full h-[44px] bg-[#2F3A1F] px-6 py-2 text-xs tracking-wide">
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
