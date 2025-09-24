"use client";

import Image from "next/image";
import DiamondIcon from "../../../../public/logos/diamond.svg";

export default function Testimonials() {
  return (
    <section className="w-full bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" priority />
            <p className="font-[20px] font-normal uppercase tracking-wide text-black">
              Testimonials
            </p>
          </div>
          <p className="text-[30px] text-[#101010] font-[500]">
            “Faraz transformed our space into a masterpiece. From initial
            concepts to final execution, they demonstrated professionalism and
            creativity at every step. Highly recommend!”
          </p>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-300 overflow-hidden">
              <Image
                src="/hero-placeholder.jpg"
                alt="profile"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[18px] font-bold text-[#101010]">Sarah Khan</p>
              <p className="text-[14px] text-[#878787]">Satisfied Homeowner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
