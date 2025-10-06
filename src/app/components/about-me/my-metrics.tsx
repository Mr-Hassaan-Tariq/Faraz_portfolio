"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import MyMetricsImage from "../../../../public/logos/my-metrics.png";

const metrics = [
  { number: 300, suffix: "+", label: "Projects Completed" },
  { number: 50, suffix: "+", label: "Commercial Spaces Designed" },
  { number: 250, suffix: "+", label: "Residential Homes Delivered" },
  { number: 6, suffix: "+", label: "Years of Experience" },
];

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

export default function MyMetrics() {
  return (
    <section className="w-full bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" loading="lazy" />
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
          className="mt-6 object-cover rounded-lg"
          loading="lazy"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D6D6D6] text-center">
          {metrics.map((item, index) => {
            const count = useCountUp(item.number, 2000);
            return (
              <div key={index} className="px-6 py-6">
                <p className="text-[#A10000] text-4xl font-[500]">
                  {count}
                  {count >= item.number ? item.suffix : ""}
                </p>
                <p className="text-[16px] font-[400] mt-2 text-black">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
