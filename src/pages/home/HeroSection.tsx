const HeroSection = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 pb-0 pt-14 md:py-20">
        <h1 className="heading mx-auto mb-4 max-w-[378px] text-center">
          Located in the heart of Ubud
        </h1>

        <div className="mx-auto mb-0 grid w-full grid-cols-1 items-start md:grid-cols-[1fr_auto_1fr] md:gap-4 md:pb-0">
          <p className="base-text mx-auto max-w-[230px] text-center md:mt-[35%] md:px-2">
            KAJA was created with a clear intention: to surprise, engage, and
            leave a lasting impression.
          </p>

          <div className="flex justify-center leading-none md:justify-self-center">
            <img
              src="/png/hero-section.png"
              alt="Steaks"
              width={504}
              height={492}
              className="h-[792px] max-w-[504px] max-w-full object-cover "
            />
          </div>

          <p className="base-text mx-auto max-w-[303px] text-center md:mt-[35%]">
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
