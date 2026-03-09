import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mr Faraz for professional architectural and interior design services.",
};

import ContactDetails from "../components/contact/contact-details";
import HeroSection from "../components/contact/hero-section";
import Contact from "../components/home/contact";

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactDetails />
      <Contact />
    </>
  );
}
