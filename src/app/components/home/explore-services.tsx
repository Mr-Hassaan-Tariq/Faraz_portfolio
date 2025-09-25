"use client";

import Image from "next/image";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import ArrowUpRightIcon from "../../../../public/logos/arrow-up-right.svg";
import ExploreServiceImage from "../../../../public/logos/explore-service.png";

export default function ExploreServices() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" priority />
            <p className="text-[20px] font-normal uppercase tracking-wide text-black">
              Our Services
            </p>
          </div>

          <h1 className="mt-1 text-4xl font-bold text-black leading-tight">
            Explore My Services
          </h1>

          <p className="mt-3 text-black">
            From blueprints to breathtaking reality, I offer complete
            architectural and interior solutions, tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="p-[84px] flex flex-col bg-[#F7F7F7] justify-between">
            <p className="text-[32px] font-semibold text-black">
              Architectural Design
            </p>
            <p className="text-[16px] text-black mt-4">
              Building planning, floor plan drafting, facade design,
              construction documentation
            </p>
            <hr className="mt-6 border-t border-[#DADADA]" />
            <div className="flex justify-between mt-4">
              <p className="font-bold font-[32px] text-black">01</p>
              <Image
                src={ArrowUpRightIcon}
                alt="arrow-up"
                width={26}
                height={26}
                priority
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="p-[84px] flex flex-col bg-[#EBE8E5] justify-between ">
            <p className="text-[32px] font-semibold text-black">
              Interior Design
            </p>
            <p className="text-[16px] text-black mt-4">
              Residential, commercial, and thematic interiors including
              lighting, furniture layouts, color schemes
            </p>
            <hr className="mt-6 border-t border-[#DADADA]" />
            <div className="flex justify-between mt-4">
              <p className="font-bold font-[32px] text-black">02</p>
              <Image
                src={ArrowUpRightIcon}
                alt="arrow-up"
                width={26}
                height={26}
                priority
                className="cursor-pointer"
              />
            </div>
          </div>

          <Image
            src={ExploreServiceImage}
            alt="explore-service"
            className="block w-full h-full object-cover"
          />

          <div className="p-[84px] flex flex-col bg-[#EBE8E5] justify-between ">
            <p className="text-[32px] font-semibold text-black">
              Landscape Design
            </p>
            <p className="text-[16px] text-black mt-4">
              Outdoor spatial planning including gardens, courtyards, green
              areas, and recreational layouts
            </p>
            <hr className="mt-6 border-t border-[#DADADA]" />
            <div className="flex justify-between mt-4">
              <p className="font-bold font-[32px] text-black">03</p>
              <Image
                src={ArrowUpRightIcon}
                alt="arrow-up"
                width={26}
                height={26}
                priority
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="p-[84px] flex flex-col bg-[#F7F7F7] justify-between">
            <p className="text-[32px] font-semibold text-black">
              3D Visualization & Rendering
            </p>
            <p className="text-[16px] text-black mt-4">
              Realistic walkthroughs, 3D modeling, animation, and renderings
              with V-Ray & Lumion
            </p>
            <hr className="mt-6 border-t border-[#DADADA]" />
            <div className="flex justify-between mt-4">
              <p className="font-bold font-[32px] text-black">04</p>
              <Image
                src={ArrowUpRightIcon}
                alt="arrow-up"
                width={26}
                height={26}
                priority
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="p-[84px] flex flex-col bg-[#EBE8E5] justify-between">
            <p className="text-[32px] font-semibold text-black">
              Animation Services
            </p>
            <p className="text-[16px] text-black mt-4">
              Unlock the potential of dynamic storytelling with my animation
              services
            </p>
            <hr className="mt-6 border-t border-[#DADADA]" />
            <div className="flex justify-between mt-4">
              <p className="font-bold font-[32px] text-black">05</p>
              <Image
                src={ArrowUpRightIcon}
                alt="arrow-up"
                width={26}
                height={26}
                priority
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
