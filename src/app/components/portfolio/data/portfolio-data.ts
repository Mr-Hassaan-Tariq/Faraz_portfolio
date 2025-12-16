// ===========================================
// TYPES
// ===========================================

export interface PortfolioItem {
  id: number;
  category: Category;
  title: string;
  subtitle: string;
  image: string; // Using string paths for scalability
}

// Categories for filtering
export const categories = [
  "All",
  "Houses",
  "Apartments",
  "Offices",
  "Shops",
  "Restaurants",
  "Landscape",
] as const;

export type Category = (typeof categories)[number];

// ===========================================
// IMAGE PATHS (easy to manage)
// ===========================================

const PORTFOLIO_PATH = "/logos";
const HOUSE_PATH = "/logos/house";

// ===========================================
// PORTFOLIO DATA
// ===========================================

export const portfolioItems: PortfolioItem[] = [
  // Apartments
  {
    id: 1,
    category: "Apartments",
    title: "3 BED APARTMENT",
    subtitle: "3D FLOOR PLAN",
    image: `${PORTFOLIO_PATH}/portfolio-1.webp`,
  },

  // Offices
  {
    id: 2,
    category: "Offices",
    title: "ADVOCATE OFFICE",
    subtitle: "INTERIOR DESIGN",
    image: `${PORTFOLIO_PATH}/portfolio-2.webp`,
  },
  {
    id: 4,
    category: "Offices",
    title: "FORMULATRIX OFFICE",
    subtitle: "INTERIOR DESIGN",
    image: `${PORTFOLIO_PATH}/portfolio-4.webp`,
  },

  // Shops
  {
    id: 3,
    category: "Shops",
    title: "COMPUTER SHOP",
    subtitle: "INTERIOR DESIGN",
    image: `${PORTFOLIO_PATH}/portfolio-3.webp`,
  },

  // Landscape
  {
    id: 5,
    category: "Landscape",
    title: "OUTDOOR PARK",
    subtitle: "LANDSCAPE DESIGN",
    image: `${PORTFOLIO_PATH}/portfolio-6.webp`,
  },

  // Houses
  {
    id: 6,
    category: "Houses",
    title: "NASHEMAN E IQBAL SOCIETY",
    subtitle: "ENTRANCE DESIGN",
    image: `${PORTFOLIO_PATH}/portfolio-5.webp`,
  },
  {
    id: 7,
    category: "Houses",
    title: "1 KANAL COMPLETE DESIGN SHEIKHUPURA",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSE_PATH}/1 KANAL COMPLETE DESIGN SHEIKHUPURA d.webp`,
  },
  {
    id: 8,
    category: "Houses",
    title: "1 KANAL CORNER DHA PHASE 6 LAHORE",
    subtitle: "CORNER DESIGN",
    image: `${HOUSE_PATH}/1 KANAL CORNER DHA PHASE 6 LAHORE.webp`,
  },
  {
    id: 9,
    category: "Houses",
    title: "1 KANAL EXTERIOR DESIGN CORNER HOUSE PESHAWAR",
    subtitle: "EXTERIOR DESIGN",
    image: `${HOUSE_PATH}/1KANAL EXTERIOR DESIGN CORNER HOUSE PESHAWAR.webp`,
  },
  {
    id: 10,
    category: "Houses",
    title: "1 KANAL CORNER HOUSE COMPLETE PROJECT, LAKE CITY LAHORE",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSE_PATH}/1KANAL CORNER HOUSE COMPLETE PROJECT, LAKE CITY LAHORE .webp`,
  },
  {
    id: 11,
    category: "Houses",
    title: "1 KANAL EXTERIOR DESIGN FAZAIYA HOUSING SCHEME LAHORE",
    subtitle: "EXTERIOR DESIGN",
    image: `${HOUSE_PATH}/1 KANAL EXTERIOR DESIGN FAZAIYA HOUSING SCHEME LAHORE.webp`,
  },
  {
    id: 12,
    category: "Houses",
    title: "1 KANAL HOUSE IN PUEHS LAHORE",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSE_PATH}/1 kanal house in PUEHS lahore.webp`,
  },
];

// ===========================================
// HELPER FUNCTIONS
// ===========================================

/**
 * Filter portfolio items by category
 */
export function filterPortfolioItems(
  items: PortfolioItem[],
  category: string
): PortfolioItem[] {
  if (category === "All") return items;
  return items.filter((item) => item.category === category);
}

/**
 * Get items by category
 */
export function getItemsByCategory(category: Category): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}

/**
 * Get all unique categories that have items
 */
export function getActiveCategories(): Category[] {
  const activeCategories = new Set(portfolioItems.map((item) => item.category));
  return categories.filter(
    (cat) => cat === "All" || activeCategories.has(cat)
  ) as Category[];
}

/**
 * Get item by ID
 */
export function getItemById(id: number): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.id === id);
}

/**
 * Get next available ID for new items
 */
export function getNextId(): number {
  return Math.max(...portfolioItems.map((item) => item.id)) + 1;
}
