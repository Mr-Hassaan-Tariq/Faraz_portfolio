"use client";

import Image from "next/image";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import Journey1 from "../../../../public/logos/journey-1.png";
import Journey2 from "../../../../public/logos/journey-2.png";
import Journey3 from "../../../../public/logos/journey-3.png";

export default function MyJourney() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" priority />
            <p className="text-[20px] font-normal uppercase tracking-wide text-black">
              My Journey
            </p>
          </div>

          <h1 className="mt-1 text-4xl font-[500] text-black leading-tight">
            A Journey Through Design
          </h1>
        </div>

        <div className="flex gap-6 items-center mt-6">
          <Image
            src={Journey1}
            alt="journey"
            priority
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />

          <div className="flex flex-col gap-3">
            <p className="text-[#A10000] text-[30px] font-[500]">
              2015 – 2019: Academic Foundations
            </p>
            <p className="text-[18px] text-black font-[400] leading-relaxed">
              Began my academic journey in Architectural Engineering at the
              renowned University of Engineering and Technology, Lahore, where I
              developed a strong foundation in space planning, construction
              principles, and the fundamentals of design. This period nurtured
              my passion for blending creativity with technical precision.
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-center  mt-6 border-t border-[#D6D6D6] pt-6">
          <div className="flex flex-col gap-3">
            <p className="text-[#A10000] text-[30px] font-[500]">
              2018 – 2020: Early Exploration & Market Exposure
            </p>
            <p className="text-[18px] text-black font-[400] leading-relaxed">
              Ventured into small and large-scale projects designed to
              international standards while simultaneously learning the
              technicalities of the local market. This phase provided valuable
              hands-on experience, balancing global design practices with local
              requirements.
            </p>
          </div>
          <Image
            src={Journey2}
            alt="journey"
            priority
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
        </div>

        <div className="flex gap-6 items-center  mt-6 border-t border-[#D6D6D6] pt-6">
          <Image
            src={Journey3}
            alt="journey"
            priority
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <div className="flex flex-col gap-3">
            <p className="text-[#A10000] text-[30px] font-[500]">
              2020 – Present: Professional Growth & Larger Projects
            </p>
            <p className="text-[18px] text-black font-[400] leading-relaxed">
              Collaborated with reputed firms, delivering high-end architectural
              and interior design projects. This stage of my journey sharpened
              my expertise in design consultancy, premium residential and
              commercial projects, 3D visualization, and coordination with
              contractors and vendors for seamless execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
