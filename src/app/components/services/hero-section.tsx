"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  image: StaticImageData;
  title: string;
  description: string;
}

export default function HeroSection({
  image,
  title,
  description,
}: HeroSectionProps) {
  const router = useRouter();
  return (
    <section className="relative h-[calc(80vh-90px)] md:h-[calc(80vh-90px)] w-full">
      <Image
        src={image}
        alt="Hero Background"
        fill
        className="object-cover object-center"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
        <div className="max-w-2xl text-left">
          <div className="flex gap-2">
            <Image src={DiamondIcon} alt="diamond" loading="lazy" />
            <p className="text-[20px] font-normal uppercase tracking-wide text-white">
              {title}
            </p>
          </div>
          <h1 className="mt-2 text-5xl font-bold text-white leading-tight">
            {description}
          </h1>
          <Button
            className="mt-6 bg-[#A10000] text-white"
            onClick={() => router.push("/contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
