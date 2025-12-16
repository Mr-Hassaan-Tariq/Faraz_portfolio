"use client";

import { useState } from "react";

// Data & Utilities
import {
  portfolioItems,
  filterPortfolioItems,
} from "./data/portfolio-data";
import CategoryFilter from "./CategoryFilter";
import PortfolioCard from "./PortfolioCard";

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
