import HeroSection from "./HeroSection";
import HomeAboutSection from "./HomeAboutSection";
import HomeChefIntroSection from "./HomeChefIntroSection";
import HomeChefSection from "./HomeChefSection";
import HomeMenuSection from "./HomeMenuSection";
import IntroSection from "./IntroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <div className="h-[4vh]" />
      <HomeAboutSection />
      <div className="h-[4vh]" />
      <HomeMenuSection />
      <div className="md:hidden">
        <HomeChefIntroSection />
      </div>
      <HomeChefSection />

    </>
  );
}

export default Home;
