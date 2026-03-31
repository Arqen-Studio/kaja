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
      <div className="h-16" />
      <HomeAboutSection />
      <div className="h-16" />
      <HomeMenuSection />
      <div className="h-8" />
      <HomeChefSection />
      <HomeFooterSection />
    </>
  );
}

export default Home;
