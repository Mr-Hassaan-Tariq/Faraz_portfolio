"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import DiamondIcon from "../../../../public/logos/diamond.svg";

import Hero1 from "../../../../public/logos/hero-section-1.webp";
import Hero2 from "../../../../public/logos/hero-section-2.webp";
import Hero3 from "../../../../public/logos/hero-section-3.webp";
import Hero4 from "../../../../public/logos/hero-section-4.webp";

export default function HeroSection() {
  const router = useRouter();

  const images = [Hero1, Hero2, Hero3, Hero4];
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const AUTO_PLAY_MS = 5000;

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_PLAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, images.length]);

  function goTo(i: number) {
    setIndex(i % images.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <section className="relative h-[calc(100vh-90px)] w-full overflow-hidden">
      {/* Slider images: all absolutely positioned and cross-faded */}
      <div
        className="absolute inset-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-out transform-gpu ${
              i === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 z-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt={`Hero ${i + 1}`}
              fill
              className="object-cover object-center"
              priority={i === 0}
            />
            {/* Overlay on image only — make it non-interactive so content sits above */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Content - give it a higher z-index so it's above slides */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
        <div className="max-w-2xl text-left">
          <div className="flex gap-2 items-center">
            <Image src={DiamondIcon} alt="diamond" loading="lazy" />
            <p className="text-[20px] font-normal uppercase tracking-wide text-white">
              Architecture & Interior Design
            </p>
          </div>

          <h1 className="mt-2 text-6xl font-bold text-white leading-tight">
            Crafting Dreams into <br /> Spaces
          </h1>

          <Button
            className="mt-6 bg-[#A10000] text-white"
            onClick={() => router.push("/contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Controls: prev/next and indicators */}
      <div className="absolute left-4 top-1/2 z-40 -translate-y-1/2">
        <button
          aria-label="Previous"
          onClick={prev}
          className="rounded-full p-2 shadow-md bg-white/20 hover:bg-white/30 backdrop-blur"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="absolute right-4 top-1/2 z-40 -translate-y-1/2">
        <button
          aria-label="Next"
          onClick={next}
          className="rounded-full p-2 shadow-md bg-white/20 hover:bg-white/30 backdrop-blur"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M9 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white/90" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
