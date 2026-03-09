import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr Faraz | Architecture & Interior Design",
  description: "Crafting Dreams into Spaces. Professional architectural and interior design services by Mr Faraz.",
  openGraph: {
    title: "Mr Faraz | Architecture & Interior Design",
    description: "Crafting Dreams into Spaces. Professional architectural and interior design services by Mr Faraz.",
    url: "https://www.aefaraz.com/",
    siteName: "Mr Faraz | Architecture & Interior Design",
    images: [
      {
        url: "https://www.aefaraz.com/logos/hero-section-1.webp",
        width: 1200,
        height: 630,
        alt: "Mr Faraz Architecture & Interior Design Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.aefaraz.com/logos/hero-section-1.webp"],
  },
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
