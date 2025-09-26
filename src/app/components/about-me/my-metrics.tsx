"use client";

import Image from "next/image";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import MyMetricsImage from "../../../../public/logos/my-metrics.png";

const metrics = [
  { number: "300+", label: "Projects Completed" },
  { number: "50+", label: "Commercial Spaces Designed" },
  { number: "250+", label: "Residential Homes Delivered" },
  { number: "06+", label: "Years of Experience" },
];

export default function MyMetrics() {
  return (
    <section className="w-full bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" priority />
            <p className="text-[20px] font-normal uppercase tracking-wide text-black">
              My Metrics
            </p>
          </div>

          <h1 className="mt-1 text-4xl font-[500] text-black leading-tight">
            Milestones in My Career
          </h1>
        </div>

        <Image
          src={MyMetricsImage}
          alt="my-metrics"
          priority
          className="mt-6 object-cover rounded-lg"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D6D6D6] text-center">
          {metrics.map((item, index) => (
            <div key={index} className="px-6 py-6">
              <p className="text-[#A10000] text-4xl font-[500]">
                {item.number}
              </p>
              <p className="text-[16px] font-[400] mt-2 text-black">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
