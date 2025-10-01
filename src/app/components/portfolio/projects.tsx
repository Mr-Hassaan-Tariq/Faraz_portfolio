"use client";

import { useState } from "react";
import Image from "next/image";

import PortfolioImage1 from "../../../../public/logos/portfolio-1.jpg";
import PortfolioImage2 from "../../../../public/logos/portfolio-2.jpg";
import PortfolioImage3 from "../../../../public/logos/portfolio-3.jpg";
import PortfolioImage4 from "../../../../public/logos/portfolio-4.jpg";
import PortfolioImage5 from "../../../../public/logos/portfolio-5.jpg";
import PortfolioImage6 from "../../../../public/logos/portfolio-6.jpg";

const categories = [
  "All",
  "Houses",
  "Apartments",
  "Offices",
  "Shops",
  "Restaurants",
  "Landscape",
];

const portfolioItems = [
  {
    id: 1,
    category: "Apartments",
    title: "3 BED APARTMENT",
    subtitle: "3D FLOOR PLAN",
    image: PortfolioImage1,
  },
  {
    id: 2,
    category: "Offices",
    title: "ADVOCATE OFFICE",
    subtitle: "INTERIOR DESIGN",
    image: PortfolioImage2,
  },
  {
    id: 3,
    category: "Shops",
    title: "COMPUTER SHOP",
    subtitle: "INTERIOR DESIGN",
    image: PortfolioImage3,
  },
  {
    id: 4,
    category: "Offices",
    title: "FORMULATRIX OFFICE",
    subtitle: "INTERIOR DESIGN",
    image: PortfolioImage4,
  },
  {
    id: 5,
    category: "Houses",
    title: "NASHEMAN E IQBAL SOCIETY",
    subtitle: "ENTRANCE DESIGN",
    image: PortfolioImage5,
  },
  {
    id: 6,
    category: "Landscape",
    title: "OUTDOOR PARK",
    subtitle: "LANDSCAPE DESIGN",
    image: PortfolioImage6,
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full bg-black rounded-[100px_100px_0_0]">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex justify-between gap-4 overflow-x-auto scrollbar-hide mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 rounded-md px-4 py-2 text-sm md:text-[20px] font-medium transition cursor-pointer
              ${
                activeCategory === cat
                  ? "text-white bg-white/20"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-0 md:p-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden w-full sm:w-[500px] h-[500px] rounded-lg mb-16"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2">
                <h3 className="text-white text-xl font-bold text-right">
                  {item.title}
                </h3>
                <p className="text-white text-sm text-right">{item.subtitle}</p>
                <p className="text-white text-sm text-right uppercase">
                  Discover this Project
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
