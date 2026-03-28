import HeroSection from "./HeroSection";
import HomeAboutSection from "./HomeAboutSection";
import HomeMenuSection from "./HomeMenuSection";
import IntroSection from "./IntroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <section className="mt-5 mb-20 ">
        <IntroSection />
      </section>
      <HomeAboutSection />
      <HomeMenuSection />
    </>
  );
}

export default Home;
