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
      <HomeAboutSection />
      <HomeMenuSection />
      <HomeChefSection />
      <HomeFooterSection />
    </>
  );
}

export default Home;
