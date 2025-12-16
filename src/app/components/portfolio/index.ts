// Main component
export { default as PortfolioGrid } from "./projects";

// Sub-components
export { default as CategoryFilter } from "./CategoryFilter";
export { default as PortfolioCard } from "./PortfolioCard";

// Data & Types
export {
  categories,
  portfolioItems,
  filterPortfolioItems,
  getItemsByCategory,
  getActiveCategories,
  getItemById,
  getNextId,
  type Category,
  type PortfolioItem,
} from "./data/portfolio-data";

