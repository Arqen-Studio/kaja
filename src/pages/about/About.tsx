import HeroSection from "../home/HeroSection";

function About() {
  return (
    <div className="flex flex-col items-center ">
      <div>
        <HeroSection />
      </div>
      <div className="max-w-[844px] pb-10">
        <p className="heading leading-[-2.8px]">
          KAJA is a contemporary, high-level destination restaurant offering a
          fully immersive dining experience.
        </p>
      </div>
      <div className="w-full self-stretch py-8">
        <img
          src="/png/planning.png"
          alt="planning"
          className="block h-auto w-full object-cover"
        />
        <p className="base-text text-center py-6">Restaurant planning</p>
      </div>
      <div className="flex md:flex-row flex-col-reverse border border-[#32341D] dark:border-[#D6B283] m-10">
        <div className="flex items-center max-w-[520px] p-6 ml-4">
          <p className="sub-text leading-[-2.5%]">
            Our aim is to go beyond dining. We want guests to feel a sense of
            awe from the moment they arrive.
          </p>
        </div>
        <img
          src="/png/aim.png"
          alt="vision"
          className="max-w-[591px] object-cover object-[60%_30%]"
        />
      </div>

      <div className="flex md:flex-row flex-col border border-[#32341D] dark:border-[#D6B283] mt-10 mb-20">
        {" "}
        <img
          src="/png/vision.png"
          alt="vision"
          className="max-w-[591px] object-cover object-[60%_30%]"
        />
        <div className="flex items-center justify-center  max-w-[520px] p-6 ml-4">
          <p className="sub-text leading-[-2.5%]">
            Our vision is to establish KAJA as one of Bali’s iconic
            destinations. A place that becomes part of Ubud’s identity alongside
            its nature, culture, and spirit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
