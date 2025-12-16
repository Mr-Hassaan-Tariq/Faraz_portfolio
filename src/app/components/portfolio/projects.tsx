"use client";

import { useState } from "react";

<<<<<<< HEAD
import PortfolioImage1 from "../../../../public/logos/portfolio-1.webp";
import PortfolioImage2 from "../../../../public/logos/portfolio-2.webp";
import PortfolioImage3 from "../../../../public/logos/portfolio-3.webp";
import PortfolioImage4 from "../../../../public/logos/portfolio-4.webp";
import PortfolioImage5 from "../../../../public/logos/portfolio-5.webp";
import PortfolioImage6 from "../../../../public/logos/portfolio-6.webp";
=======
// Components
import CategoryFilter from "./CategoryFilter";
import PortfolioCard from "./PortfolioCard";
>>>>>>> 7f13b7f (refactor: streamline portfolio component by integrating category filter and portfolio card components)

// Data & Utilities
import {
  portfolioItems,
  filterPortfolioItems,
} from "./data/portfolio-data";

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter items based on selected category
  const filteredItems = filterPortfolioItems(portfolioItems, activeCategory);

  return (
    <section className="w-full bg-black rounded-[100px_100px_0_0]">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        {/* Category Filter */}
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-0 md:p-16">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
