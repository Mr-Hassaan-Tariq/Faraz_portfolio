"use client";

import Image from "next/image";
import { leagueSpartan, qwitcherGrypen } from "@/app/fonts";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import DesignPhilosophyImage from "../../../../public/logos/design-philosophy.png";
import DesignBgImage from "../../../../public/logos/design-bg.png";

export default function DesignPhilosophy() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 pt-16 md:pt-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" loading="lazy" />
            <p className="text-[20px] font-normal uppercase tracking-wide text-black">
              My Journey
            </p>
          </div>
          <h1 className="mt-1 text-4xl font-[500] text-black leading-tight">
            Design Philosophy
          </h1>
        </div>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div className="relative w-full h-[540px] flex justify-center items-center">
            <div className="absolute left-[70px] top-[106px] bottom-0 right-0 left-0 w-[440px] h-[440px]">
              <Image
                src={DesignBgImage}
                alt="Grey Curve Background"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>

            <Image
              src={DesignPhilosophyImage}
              alt="Muhammad Faraz"
              className="relative z-10 h-full w-auto object-contain"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p
              className={`text-[20px] text-black font-[400] ${leagueSpartan.className}`}
            >
              “Great design is not about decoration, it’s about creating spaces
              that improve the way people live and work. A well-designed space
              has the power to inspire, to calm, to energize, and to bring
              people together. It’s about understanding human needs, blending
              functionality with aesthetics, and crafting environments that
              leave a lasting impact on both the eye and the soul.”
            </p>
            <p
              className={`text-[#A10000] text-6xl font-bold ${qwitcherGrypen.className}`}
            >
              Muhammad Faraz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
