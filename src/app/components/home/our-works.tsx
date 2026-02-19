"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import WorkImage from "../../../../public/logos/portfolio-1.webp";
import { portfolioItems } from "../portfolio/data/portfolio-data";

export default function OurWorks() {
  const router = useRouter();
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" loading="lazy" />
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

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer"
          // onClick={() => router.push("/portfolio")}
        >
          {portfolioItems
            .filter((item) =>
              [
                "STUDIO APARTMENT ELEVATION",
                "1 KANAL HOUSE IN PUEHS LAHORE",
                "DON'T EAT THE HOMIES RESTAURANT",
              ].includes(item.title)
            )
            .sort((a, b) => {
              const order = [
                "STUDIO APARTMENT ELEVATION",
                "1 KANAL HOUSE IN PUEHS LAHORE",
                "DON'T EAT THE HOMIES RESTAURANT",
              ];
              return order.indexOf(a.title) - order.indexOf(b.title);
            })
            .map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg shadow-md"
                onClick={() => item.link && window.open(item.link, "_blank")}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end p-6">
                  <h3 className="text-white text-xl font-bold uppercase">
                    {item.title}
                  </h3>
                  <p className="text-white text-[18px] uppercase">
                    {item.subtitle}
                  </p>
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
