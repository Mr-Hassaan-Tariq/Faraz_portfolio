"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import HeroImage from "../../../../public/logos/contact-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(80vh-90px)] md:h-[calc(80vh-90px)] w-full">
      <Image
        src={HeroImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
        <div className="text-left">
          <div className="flex gap-2">
            <Image src={DiamondIcon} alt="diamond" priority />
            <p className="text-[20px] font-normal uppercase tracking-wide text-white">
              Contact Me
            </p>
          </div>
          <h1 className="mt-2 text-5xl font-bold text-white leading-tight">
            Let’s Build Something Extraordinary Together
          </h1>
          <Button className="mt-6 bg-[#A10000] text-white">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}
