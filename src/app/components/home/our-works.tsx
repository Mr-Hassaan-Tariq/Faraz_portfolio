"use client";

import Image from "next/image";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import WorkImage from "../../../../public/logos/portfolio-1.jpg";

export default function OurWorks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" priority />
            <p className="text-[20px] font-normal uppercase tracking-wide text-black">
              Our Works
            </p>
          </div>

          <h1 className="mt-1 text-4xl font-bold text-black leading-tight">
            Exploring My Portfolio of Architectural Brilliance
          </h1>

          <p className="mt-3 text-black">
            A glimpse into my passion for spaces that inspire.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={WorkImage}
                alt="3 Bed Apartment"
                width={500}
                height={400}
                className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  3 BED APARTMENT
                </h3>
                <p className="text-white text-[18px]">3D FLOOR PLAN</p>
                <p className="mt-2 text-[10px] text-white">
                  DISCOVER THIS PROJECT
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
