"use client";

import Image, { StaticImageData } from "next/image";
import DiamondIcon from "../../../../public/logos/diamond.svg";

type Step = {
  title: string;
  description: string;
  image: StaticImageData;
  reverse?: boolean;
};

interface DesignProcessProps {
  sectionTitle: string;
  heading: string;
  steps: Step[];
}

export default function DesignProcess({
  sectionTitle,
  heading,
  steps,
}: DesignProcessProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" priority loading="lazy" />
            <p className="text-[20px] font-normal uppercase tracking-wide text-black">
              {sectionTitle}
            </p>
          </div>
          <h1 className="mt-1 text-4xl font-[500] text-black leading-tight">
            {heading}
          </h1>
        </div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-6 items-center mt-6 border-t border-[#D6D6D6] pt-6 ${
              step.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              src={step.image}
              alt={step.title}
              priority
              className="w-full md:w-[500px] h-[200px] md:h-[300px] object-cover rounded-lg"
              loading="lazy"
            />
            <div className="flex flex-col gap-3 text-center md:text-left">
              <p className="text-[#A10000] text-[24px] md:text-[30px] font-[500]">
                {step.title}
              </p>
              <p className="text-[16px] md:text-[18px] text-black font-[400] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
