import HeroSection from "./HeroSection";
import HomeAboutSection from "./HomeAboutSection";
import HomeMenuSection from "./HomeMenuSection";
import IntroSection from "./IntroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <section className="relative z-10 mt-[-35px] mb-10">
        <IntroSection />
      </section>
      <HomeAboutSection />
      <HomeMenuSection />
    </>
  );
}

export default Home;
