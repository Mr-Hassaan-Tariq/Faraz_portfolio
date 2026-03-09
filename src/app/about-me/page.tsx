import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Mr Faraz, an Architectural Engineer and Interior Designer with over 6 years of experience in creating modern spaces.",
};

import DesignPhilosophy from "../components/about-me/design-philosophy";
import HeroSection from "../components/about-me/hero-section";
import MyJourney from "../components/about-me/my-journey";
import MyMetrics from "../components/about-me/my-metrics";
import Contact from "../components/home/contact";

export default function About() {
  return (
    <>
      <HeroSection />
      <MyJourney />
      <MyMetrics />
      <DesignPhilosophy />
      <Contact />
    </>
  );
}
