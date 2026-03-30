const HeroSection = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4  pt-14 md:py-20">
        <h1 className="heading mx-auto mb-4 max-w-[378px] text-center">
          Located in the heart of Ubud
        </h1>

        <div className="absolute left-0 mx-auto grid w-full grid-cols-1 items-start md:grid-cols-[1fr_auto_1fr] md:gap-4 ">
          <p className="hidden md:block base-text mx-auto max-w-[227px] text-center md:mt-[25%] mr-8">
            KAJA was created with a clear intention: to surprise, engage, and
            leave a lasting impression.
          </p>

          <div className="flex justify-center leading-none md:justify-self-center">
            <img
              src="/png/hero-section.png"
              alt="Steaks"
              className="relative max-w-[504px] max-w-full object-cover "
            />
          </div>

          <p className="hidden md:block base-text mx-auto max-w-[303px] text-center md:mt-[25%] ml-6">
            It is not simply a restaurant, but a complete evening experience
            where iconic architecture, contemporary cuisine, and entertainment
            come together as one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
