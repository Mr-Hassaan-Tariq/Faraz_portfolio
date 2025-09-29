import Contact from "../components/home/contact";
import HeroSection from "../components/portfolio/hero-section";
import Projects from "../components/portfolio/projects";

export default function Portfolio() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Contact page="portfolio" />
    </>
  );
}
