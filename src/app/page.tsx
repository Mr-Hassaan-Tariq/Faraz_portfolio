import AboutMe from "./components/home/about-me";
import ExploreServices from "./components/home/explore-services";
import HeroSection from "./components/home/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ExploreServices />
    </>
  );
}
