"use client";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import { useRouter } from "next/navigation";

interface ServiceOverviewProps {
  title: string;
  subtitle: string;
  description: string;
  listItems?: string[];
  image: StaticImageData;
  buttonText?: string;
}

export default function ServiceOverview({
  title,
  subtitle,
  description,
  listItems = [],
  image,
  buttonText = "Start Your Project",
}: ServiceOverviewProps) {
  const router = useRouter();
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Image src={DiamondIcon} alt="diamond" priority />
              <p className="text-[20px] font-normal uppercase tracking-wide text-black">
                {title}
              </p>
            </div>

            <h1 className="mt-1 text-4xl font-bold text-black leading-tight">
              {subtitle}
            </h1>

            <p className="mt-3 text-black">{description}</p>

            {listItems.length > 0 && (
              <ul className="mt-3 ml-5 space-y-3 list-disc text-black">
                {listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            <Button
              className="mt-5 bg-[#A10000] text-white w-fit"
              onClick={() => router.push("/contact")}
            >
              {buttonText}
            </Button>
          </div>

          <div className="flex justify-center md:justify-end mb-8 md:mb-0 md:mt-[110px]">
            <Image
              src={image}
              alt={subtitle}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
