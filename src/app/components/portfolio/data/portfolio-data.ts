// ===========================================
// TYPES
// ===========================================

export interface PortfolioItem {
  id: number;
  category: Category;
  title: string;
  subtitle: string;
  image: string; // Using string paths for scalability
  link?: string;
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
    link: "https://www.behance.net/gallery/200063495/1-KANAL-COMPLETE-DESIGN-SHEIKHUPURA",
  },
  {
    id: 8,
    category: "Houses",
    title: "1 KANAL CORNER DHA PHASE 6 LAHORE",
    subtitle: "CORNER DESIGN",
    image: `${HOUSE_PATH}/1 KANAL CORNER DHA PHASE 6 LAHORE.webp`,
    link: "https://www.behance.net/gallery/200063569/1-KANAL-CORNER-DHA-PHASE-6-LAHORE",
  },
  {
    id: 9,
    category: "Houses",
    title: "1 KANAL EXTERIOR DESIGN CORNER HOUSE PESHAWAR",
    subtitle: "EXTERIOR DESIGN",
    image: `${HOUSE_PATH}/1KANAL EXTERIOR DESIGN CORNER HOUSE PESHAWAR.webp`,
    link: "https://www.behance.net/gallery/200246835/1KANAL-EXTERIOR-DESIGN-CORNER-HOUSE-PESHAWAR",
  },
  {
    id: 10,
    category: "Houses",
    title: "1 KANAL CORNER HOUSE COMPLETE PROJECT, LAKE CITY LAHORE",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSE_PATH}/1KANAL CORNER HOUSE COMPLETE PROJECT, LAKE CITY LAHORE .webp`,
    link: "https://www.behance.net/gallery/200704613/1KANAL-CORNER-HOUSE-COMPLETE-PROJECT-LAKE-CITY-LAHORE",
  },
  {
    id: 11,
    category: "Houses",
    title: "1 KANAL EXTERIOR DESIGN FAZAIYA HOUSING SCHEME LAHORE",
    subtitle: "EXTERIOR DESIGN",
    image: `${HOUSE_PATH}/1 KANAL EXTERIOR DESIGN FAZAIYA HOUSING SCHEME LAHORE.webp`,
    link: "https://www.behance.net/gallery/199878009/1-KANAL-EXTERIOR-DESIGN-FAZAIYA-HOUSING-SCHEME-LAHORE",
  },
  {
    id: 12,
    category: "Houses",
    title: "1 KANAL HOUSE IN PUEHS LAHORE",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSE_PATH}/1 kanal house in PUEHS lahore.webp`,
    link: "https://www.behance.net/gallery/204167883/1-kanal-interior-design",
  },
  {
    id: 13,
    category: "Houses",
    title: "1 KANAL INTERIOR DESIGN KARACHI",
    subtitle: "INTERIOR DESIGN",
    image: `${HOUSE_PATH}/1 kanal interior design karachi.webp`,
    link: "https://www.behance.net/gallery/200617751/1-kanal-interior-design-karachi",
  }, {
    id: 14,
    category: "Houses",
    title: "1 KANAL INTERIOR PROJECT BAHRIA TOWN LAHORE",
    subtitle: "INTERIOR PROJECT",
    image: `${HOUSE_PATH}/1 kanal interior project bahria town lahore.webp`,
    link: "https://www.behance.net/gallery/200691741/1-kanal-interior-project-bahria-town-lahore",
  }, {
    id: 15,
    category: "Houses",
    title: "1 KANAL INTERIOR PROJECT HYDERABAD",
    subtitle: "INTERIOR PROJECT",
    image: `${HOUSE_PATH}/1 kanal interior project hyderabad.webp`,
    link: "https://www.behance.net/gallery/200691897/1-kanal-interior-project-hyderabad",
  }, {
    id: 16,
    category: "Houses",
    title: "3 MARLA FRONT ELEVATION LAHORE",
    subtitle: "FRONT ELEVATION",
    image: `${HOUSE_PATH}/3 MARLA FRONT ELEVATION LAHORE.webp`,
    link: "https://www.behance.net/gallery/200247921/3-MARLA-FRONT-ELEVATION-LAHORE",
  }, {
    id: 17,
    category: "Houses",
    title: "2D RESIDENCE PLAN USA",
    subtitle: "RESIDENCE PLAN",
    image: `${HOUSE_PATH}/2d RESIDENCE PLAN USA.webp`,
    link: "https://www.behance.net/gallery/200703961/2d-RESIDENCE-PLAN-USA",
  }, {
    id: 18,
    category: "Houses",
    title: "5 MARLA COMPLETE ARCHITECTURAL DESIGN FAISALABAD",
    subtitle: "COMPLETE ARCHITECTURAL DESIGN",
    image: `${HOUSE_PATH}/5 MARLA COMPLETE ARCHITECTURAL DESIGN FAISALABAD.webp`,
    link: "https://www.behance.net/gallery/200248099/5-MARLA-COMPLETE-ARCHITECTURAL-DESIGN-FAISALABAD",
  }, {
    id: 19,
    category: "Houses",
    title: "5 MARLA COMPLETE DESIGN PROJECT AL-HAFEEZ GARDENS PHASE 2 LAHORE",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSE_PATH}/5 MARLA COMPLETE DESIGN PROJECT AL-HAFEEZ GARDENS PHASE 2 LAHORE.webp`,
    link: "https://www.behance.net/gallery/200248325/5-MARLA-DESIGN-PROJECT-AL-HAFEEZ-GARDENS-PHASE-2-LAHORE",
  }, {
    id: 20,
    category: "Houses",
    title: "5 MARLA CORNER RESIDENCE DESIGN TAJBAGH LAHORE",
    subtitle: "CORNER RESIDENCE DESIGN",
    image: `${HOUSE_PATH}/5 MARLA CORNER RESIDENCE DESIGN TAJBAGH LAHORE.webp`,
    link: "https://www.behance.net/gallery/200248499/5-MARLA-CORNER-RESIDENCE-DESIGN-TAJBAGH-LAHORE",
  }, {
    id: 21,
    category: "Houses",
    title: "5 MARLA FRONT ELEVATION LAKE CITY LAHORE",
    subtitle: "FRONT ELEVATION",
    image: `${HOUSE_PATH}/5 MARLA FRONT ELEVATION LAKE CITY LAHORE .webp`,
    link: "https://www.behance.net/gallery/200248807/5-MARLA-FRONT-ELEVATION-LAKE-CITY-LAHORE",
  }, {
    id: 22,
    category: "Houses",
    title: "8 MARLA COMPLETE INTERIOR PROJECT BAHRIA TOWN",
    subtitle: "COMPLETE INTERIOR PROJECT",
    image: `${HOUSE_PATH}/8 marla complete interior project bahria town.webp`,
    link: "https://www.behance.net/gallery/200248971/8-marla-complete-interior-project-bahria-town",
  }, {
    id: 23,
    category: "Houses",
    title: "10 MARLA DESIGN TOWNSHIP LAHORE",
    subtitle: "DESIGNSIGN FRONT ELEVATION",
    image: `${HOUSE_PATH}/10 MARLA DESIGN TOWNSHIP LAHORE.webp`,
    link: "https://www.behance.net/gallery/200323389/10-MARLA-DESIGN-TOWNSHIP-LAHORE",
  }, {
    id: 24,
    category: "Houses",
    title: "10 MARLA CLASSIC HOUSE GUJRAWALA",
    subtitle: "CLASSIC HOUSE",
    image: `${HOUSE_PATH}/10 MARLA CLASSIC HOUSE GUJRAWALA.webp`,
    link: "https://www.behance.net/gallery/238589153/classic-front-elevation",
  }, {
    id: 25,
    category: "Houses",
    title: "10 MARLA INTERIOR DESIGN LAHORE",
    subtitle: "INTERIOR DESIGN",
    image: `${HOUSE_PATH}/10 marla interior design lahore.webp`,
    link: "https://www.behance.net/gallery/200701691/10-marla-interior-design-lahore",
  }, {
    id: 26,
    category: "Houses",
    title: "10 MARLA NEO CLASSIC INTERIOR BAHRIA TOWN",
    subtitle: "NEO CLASSIC INTERIOR",
    image: `${HOUSE_PATH}/10 marla neo classic interior bahria town.webp`,
    link: "https://www.behance.net/gallery/238759799/NEO-CLASSIC-INTERIOR",
  }, {
    id: 27,
    category: "Houses",
    title: "12 MARLA INTERIOR DESIGN JOHAR TOWN LAHORE",
    subtitle: "INTERIOR DESIGN",
    image: `${HOUSE_PATH}/12 marla interior design johar town lahore .webp`,
    link: "https://www.behance.net/gallery/200702191/12-marla-interior-design-johar-town-lahore",
  }, {
    id: 28,
    category: "Houses",
    title: "15 MARLA HOUSE ELEVATION DESIGN KASHMIR",
    subtitle: "ELEVATION DESIGN",
    image: `${HOUSE_PATH}/15 marla house elevation design kashmir.webp`,
    link: "https://www.behance.net/gallery/200323815/15-marla-house-elevation-design-kashmir",
  }, {
    id: 29,
    category: "Houses",
    title: "BEDROOM INTERIOR DESIGN BISMAILAH HOUSING SCHEME LAHORE",
    subtitle: "BEDROOM INTERIOR DESIGN",
    image: `${HOUSE_PATH}/bedroom interior design, Bismillah housing scheme lahore.webp`,
    link: "https://www.behance.net/gallery/200702909/bedroom-interior-design-Bismillah-housing-scheme-lahore",
  }, {
    id: 30,
    category: "Houses",
    title: "ELEVATION DESIGN OF RESIDENCE IN BATAL KASHMIR",
    subtitle: "ELEVATION DESIGN",
    image: `${HOUSE_PATH}/ELEVATION DESIGN OF RESIDENCE IN BATAL KASHMIR.webp`,
    link: "https://www.behance.net/gallery/200544635/ELEVATION-DESIGN-OF-RESIDENCE-IN-BATAL-KASHMIR",
  }, {
    id: 31,
    category: "Houses",
    title: "FARMHOUSE KARACHI",
    subtitle: "FARMHOUSE",
    image: `${HOUSE_PATH}/FARMHOUSE KARACHI.webp`,
    link: "https://www.behance.net/gallery/200544903/FARMHOUSE-DESIGN-IN-KARACHI",
  }, {
    id: 32,
    category: "Houses",
    title: "GAZEEBO DESIGN MURREE",
    subtitle: "GAZEEBO",
    image: `${HOUSE_PATH}/GAZEEBO DESIGN MURREE.webp`,
    link: "https://www.behance.net/gallery/238588369/GAZEEBO-DESIGN",
  }, {
    id: 33,
    category: "Houses",
    title: "MARTIN AND PEGGY SCOT",
    subtitle: "MARTIN AND PEGGY SCOT",
    image: `${HOUSE_PATH}/martin and peggy scot.webp`,
    link: "https://www.behance.net/gallery/240350137/Martin-and-Peggy-Scott-Elevation",
  }, {
    id: 34,
    category: "Houses",
    title: "VILLA DESIGN PROJECT CALIFORNIA",
    subtitle: "VILLA",
    image: `${HOUSE_PATH}/VILLA DESIGN PROJECT CALIFORNIA.webp`,
    link: "https://www.behance.net/gallery/200546523/VILLA-DESIGN-PROJECT-CALIFORNIA",
  }, {
    id: 35,
    category: "Houses",
    title: "1 KANAL FRONT ELEVATION RENOVATION WAPDA TOWN LAHORE",
    subtitle: "FRONT ELEVATION RENOVATION",
    image: `${HOUSE_PATH}/1 KANAL FRONT ELEVATION RENOVATION WAPDA TOWN LAHORE.jpg`,
    link: "https://www.behance.net/gallery/200546781/1-KANAL-FRONT-ELEVATION-RENOVATION-WAPDA-TOWN-LAHORE",
  }, {
    id: 36,
    category: "Houses",
    title: "1 KANAL FRONT ELEVATION",
    subtitle: "FRONT ELEVATION",
    image: `${HOUSE_PATH}/1 KANAL FRONT ELEVATION.jpg`,
    link: "https://www.behance.net/gallery/238578381/1-KANAL-HOUSE-FRONT-ELEVATIO",
  }, {
    id: 37,
    category: "Houses",
    title: "1 KANAL RESIDENCE DESIGN WAPDA TOWN",
    subtitle: "RESIDENCE DESIGN",
    image: `${HOUSE_PATH}/1 KANAL RESIDENCE DESIGN WAPDA TOWN.jpg`,
    link: "https://www.behance.net/gallery/200546971/1-KANAL-RESIDENCE-DESIGN-WAPDA-TOWN",
  }, {
    id: 38,
    category: "Houses",
    title: "3 MARLA CORNER RESIDENCE DESIGN",
    subtitle: "RESIDENCE DESIGN",
    image: `${HOUSE_PATH}/3 MARLA CORNER RESIDENCE DESIGN.jpg`,
    link: "https://www.behance.net/gallery/200547253/3-MARLA-CORNER-RESIDENCE-DESIGN",
  }, {
    id: 39,
    category: "Houses",
    title: "5 MARLA FRONT ELEVATION DESIGN DHA PHASE 9",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSE_PATH}/5 MARLA FRONT ELEVATION DESIGN DHA PHASE 9.jpg`,
    link: "https://www.behance.net/gallery/200547477/5-MARLA-FRONT-ELEVATION-DESIGN-DHA-PHASE-9",
  }, {
    id: 40,
    category: "Houses",
    title: "7 MARLA FRONT ELEVATION DESIGN LAHORE",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSE_PATH}/7 MARLA FRONT ELEVATION DESIGN LAHORE (1).jpg`,
    link: "https://www.behance.net/gallery/200547623/7-MARLA-FRONT-ELEVATION-DESIGN-LAHORE",
  }, {
    id: 41,
    category: "Houses",
    title: "10 MARLA DHA PHASE 6",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSE_PATH}/10 MARLA DHA PHASE 6.jpg`,
    link: "https://www.behance.net/gallery/200548901/10-MARLA-DHA-PHASE-6",
  }, {
    id: 42,
    category: "Houses",
    title: "10 MARLA FRONT ELEVATION RENOVATION PROJECT LAHORE",
    subtitle: "FRONT ELEVATION RENOVATION PROJECT",
    image: `${HOUSE_PATH}/10 MARLA FRONT ELEVATION RENOVATION PROJECT  LAHORE.jpg`,
    link: "https://www.behance.net/gallery/200549027/10-MARLA-FRONT-ELEVATION-RENOVATION-PROJECT-LAHORE",
  }, {
    id: 43,
    category: "Houses",
    title: "12 MARLA COMPLETE DESIGN PROJECT JOHAR TOWN",
    subtitle: "COMPLETE DESIGN PROJECT",
    image: `${HOUSE_PATH}/12 MARLA COMPLETE DESIGN PROJECT JOHAR TOWN.jpg`,
    link: "https://www.behance.net/gallery/200702191/12-marla-interior-design-johar-town-lahore",
  }, {
    id: 44,
    category: "Houses",
    title: "12 MARLA FRONT ELEVATION DESIGN",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSE_PATH}/12 MARLA FRONT ELEVATION DESIGN.jpg`,
    link: "https://www.behance.net/gallery/200549247/12-MARLA-FRONT-ELEVATION-DESIGN",
  }, {
    id: 45,
    category: "Houses",
    title: "16 MARLA GROUND FLOOR PLAN",
    subtitle: "GROUND FLOOR PLAN",
    image: `${HOUSE_PATH}/16 MARLA GROUND FLOOR PLAN.JPG`,
    link: "https://www.behance.net/gallery/200549351/16-MARLA-GROUND-FLOOR-PLAN",
  }, {
    id: 46,
    category: "Houses",
    title: "33 MARLA RESIDENCE DHA PHASE 5 LAHORE",
    subtitle: "RESIDENCE DESIGN",
    image: `${HOUSE_PATH}/33 MARLA RESIDENCE DHA PHASE 5 LAHORE.jpg`,
    link: "https://www.behance.net/gallery/200549501/33-MARLA-RESIDENCE-DHA-PHASE-5-LAHORE",
  }, {
    id: 47,
    category: "Houses",
    title: "FRONT ELEVATION DESIGN PROJECT INDONESIA",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSE_PATH}/FRONT ELEVATION DESIGN PROJECT INDONESIA.jpg`,
    link: "https://www.behance.net/gallery/200550137/FRONT-ELEVATION-DESIGN-PROJECT-INDONESIA",
  }, {
    id: 48,
    category: "Houses",
    title: "INTERIOR BEDROOM DESIGN 2 D",
    subtitle: "INTERIOR BEDROOM DESIGN",
    image: `${HOUSE_PATH}/INTERIOR BEDROOM DESIGN 2 D.jpg`,
    link: "https://www.behance.net/gallery/200703065/INTERIOR-BEDROOM-DESIGN",
  }, {
    id: 49,
    category: "Houses",
    title: "INTERIOR BEDROOM DESIGN",
    subtitle: "INTERIOR BEDROOM DESIGN",
    image: `${HOUSE_PATH}/INTERIOR BEDROOM DESIGN.jpg`,
    link: "https://www.behance.net/gallery/200703065/INTERIOR-BEDROOM-DESIGN",
  }, {
    id: 50,
    category: "Houses",
    title: "JAPANDI STYLE APARTMENT BEDROOM INTERIOR SINGAPORE",
    subtitle: "INTERIOR BEDROOM DESIGN",
    image: `${HOUSE_PATH}/japandi style apartment bedroom interior singapore.jpg`,
    link: "https://www.behance.net/gallery/200703297/japandi-style-apartment-bedroom-interior-Singapore",
  }, {
    id: 51,
    category: "Houses",
    title: "LIVING AREA DESIGN USA",
    subtitle: "LIVING AREA DESIGN",
    image: `${HOUSE_PATH}/LIVING  area design USA.jpg`,
    link: "https://www.behance.net/gallery/200703467/LIVING-area-design-USA",
  }, {
    id: 52,
    category: "Houses",
    title: "LIVING ROOM APARTMENT DESIGN SOUTH AFRICA",
    subtitle: "LIVING ROOM APARTMENT DESIGN",
    image: `${HOUSE_PATH}/living room apartment design South Africa.jpg`,
    link: "https://www.behance.net/gallery/200703609/living-room-apartment-design-South-Africa",
  }, {
    id: 53,
    category: "Houses",
    title: "VILLA PROJECT, USA",
    subtitle: "VILLA PROJECT",
    image: `${HOUSE_PATH}/VILLA PROJECT, USA.jpg`,
    link: "https://www.behance.net/gallery/200550921/VILLA-PROJECT-USA",
  }
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
