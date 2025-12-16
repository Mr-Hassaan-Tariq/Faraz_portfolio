"use client";

import { categories, Category } from "./data/portfolio-data";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex justify-between gap-4 overflow-x-auto scrollbar-hide mb-10">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          isActive={activeCategory === category}
          onClick={() => onCategoryChange(category)}
        />
      ))}
    </div>
  );
}

// Individual category button component
interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

function CategoryButton({ category, isActive, onClick }: CategoryButtonProps) {
  const baseStyles =
    "flex-shrink-0 rounded-md px-4 py-2 text-sm md:text-[20px] font-medium transition cursor-pointer";
  const activeStyles = "text-white bg-white/20";
  const inactiveStyles = "text-white hover:text-white hover:bg-white/10";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
    >
      {category}
    </button>
  );
}

