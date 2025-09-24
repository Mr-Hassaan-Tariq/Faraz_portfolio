import AboutMe from "./components/home/about-me";
import CLaimAssessment from "./components/home/claim-assessment";
import ExploreServices from "./components/home/explore-services";
import HeroSection from "./components/home/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ExploreServices />
      <CLaimAssessment />
    </>
  );
}
