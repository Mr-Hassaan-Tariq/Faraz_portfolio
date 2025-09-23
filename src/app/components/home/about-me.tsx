"use client";

import { Button } from "@/components/ui/button";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import AboutMeIcon from "../../../../public/logos/AboutMe.png";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" priority />
            <p className="text-[20px] font-normal uppercase tracking-wide text-black">
              About Me
            </p>
          </div>

          <h1 className="mt-2 text-5xl font-bold text-black leading-tight">
            Transforming Dreams into Reality
          </h1>

          <div className="flex gap-6 mt-6">
            <div className="hidden md:block w-1/2">
              <Image
                src={AboutMeIcon}
                alt="About Me"
                priority
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="flex-1">
              <p className="text-black">
                As an Architectural Engineer and Interior Designer, I bring a
                blend of technical precision and creative innovation. With over
                5 years of field experience, I have led and contributed to
                various projects including:
              </p>

              <ul className="mt-3 ml-3 space-y-3 list-disc list-inside text-black">
                <li>Modern Apartments</li>
                <li>Boutique Cafes & Restaurants</li>
                <li>Commercial Office Interiors</li>
                <li>Sustainable Green Landscapes</li>
              </ul>

              <p className="mt-3 text-black">
                I specialize in delivering client-centric spaces that balance
                form and function. My process involves understanding your
                vision, exploring materials and technologies, and translating it
                into spatial experiences that inspire.
              </p>

              <Button className="mt-6 bg-[#A10000] text-white w-fit">
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-8">
          <Image
            src={AboutMeIcon}
            alt="About Me"
            priority
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
