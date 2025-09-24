"use client";

import { Button } from "@/components/ui/button";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import AboutMeIcon from "../../../../public/logos/AboutMe.png";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Image src={DiamondIcon} alt="diamond" priority />
              <p className="font-[20px] font-normal uppercase tracking-wide text-black">
                About Me
              </p>
            </div>

            <h1 className="mt-1 text-4xl font-bold text-black leading-tight">
              Transforming Dreams into Reality
            </h1>

            <p className="mt-3 text-black">
              As an Architectural Engineer and Interior Designer, I bring a
              blend of technical precision and creative innovation. With over 5
              years of field experience, I have led and contributed to various
              projects including:
            </p>

            <ul className="mt-3 ml-5 space-y-3 list-disc text-black">
              <li>Modern Apartments</li>
              <li>Boutique Cafes & Restaurants</li>
              <li>Commercial Office Interiors</li>
              <li>Sustainable Green Landscapes</li>
            </ul>

            <p className="mt-3 text-black">
              I specialize in delivering client-centric spaces that balance form
              and function. My process involves understanding your vision,
              exploring materials and technologies, and translating it into
              spatial experiences that inspire.
            </p>

            <Button className="mt-5 bg-[#A10000] text-white w-fit">
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center md:justify-end mb-8 md:mb-0 md:mt-[110px]">
            <Image
              src={AboutMeIcon}
              alt="About Me"
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
