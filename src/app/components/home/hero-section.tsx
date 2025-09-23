"use client";

import { Button } from "@/components/ui/button";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-90px)] md:h-[calc(100vh-90px)] w-full bg-[url('/hero-placeholder.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
        <div className="max-w-2xl text-left">
          <div className="flex gap-2">
            <Image src={DiamondIcon} alt="diamond" priority />
            <p className="font-[20px] font-normal uppercase tracking-wide text-white">
              Architecture & Interior Design
            </p>
          </div>
          <h1 className="mt-2 text-5xl font-bold text-white leading-tight"> 
            Crafting Dreams into <br /> Spaces
          </h1>
          <Button className="mt-6 bg-[#A10000] text-white">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}
