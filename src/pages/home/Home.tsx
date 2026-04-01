import HeroSection from "./HeroSection";
import HomeAboutSection from "./HomeAboutSection";
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
      <div className="h-[3vh]" />
      <HomeChefSection />
     
    </>
  );
}

export default Home;
