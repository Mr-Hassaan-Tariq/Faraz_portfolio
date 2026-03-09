import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr Faraz | Architecture & Interior Design",
  description: "Crafting Dreams into Spaces. Professional architectural and interior design services by Mr Faraz.",
};

import AboutMe from "./components/home/about-me";
import CLaimAssessment from "./components/home/claim-assessment";
import Contact from "./components/home/contact";
import ExploreServices from "./components/home/explore-services";
import HeroSection from "./components/home/hero-section";
import OurWorks from "./components/home/our-works";
import Testimonials from "./components/home/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ExploreServices />
      <CLaimAssessment />
      <OurWorks />
      <Testimonials />
      <Contact page="default" />
    </>
  );
}
