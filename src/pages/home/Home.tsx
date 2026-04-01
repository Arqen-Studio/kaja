import HeroSection from "./HeroSection";
import HomeAboutSection from "./HomeAboutSection";
import HomeChefSection from "./HomeChefSection";
import HomeFooterSection from "./HomeFooter";
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
      <div className="h-[6vh]" />
      <HomeChefSection />
      <div className="h-[14vh]" />
      <HomeFooterSection />
    </>
  );
}

export default Home;
