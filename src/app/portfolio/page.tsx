import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the architectural and interior design projects by Mr Faraz, from modern apartments to boutique cafes.",
};

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
