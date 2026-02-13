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

const APARTMENTS_PATH = "/logos/apartments";
const HOUSES_PATH = "/logos/house";
const LANDSCAPE_PATH = "/logos/landscape";
const OFFICES_PATH = "/logos/offices";
const RESTAURANTS_PATH = "/logos/restaurants";
const SHOPS_PATH = "/logos/shops";
const PORTFOLIO_PATH = "/logos";

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

export function filterPortfolioItems(
  items: PortfolioItem[],
  category: string
): PortfolioItem[] {
  if (category === "All") {
    return items;
  }
  return items.filter((item) => item.category === category);
}

// ===========================================
// PORTFOLIO DATA
// ===========================================

export const portfolioItems: PortfolioItem[] = [
  // Reordered based on user's sequence
  // 1. Studio apartment - Not found in original data, skipping

  {
    id: 1,
    category: "Apartments",
    title: "STUDIO APARTMENT ELEVATION",
    subtitle: "APARTMENTS DESIGN",
    image: `${APARTMENTS_PATH}/STUDIO APARTMENT ELEVATION.webp`,
    link: "https://www.behance.net/gallery/244062347/STUDIO-APARTMENT-ELEVATION",
  },
  // 2. Remains same - Not clear which item this refers to, skipping

  // 3. 8 marla complete interior
  {
    id: 1,
    category: "Houses",
    title: "8 MARLA COMPLETE INTERIOR PROJECT BAHRIA TOWN",
    subtitle: "COMPLETE INTERIOR PROJECT",
    image: `${HOUSES_PATH}/8 marla complete interior project bahria town.webp`,
    link: "https://www.behance.net/gallery/200248971/8-marla-complete-interior-project-bahria-town",
  },

  // 4. Don't eat the homies - Not found in original data, skipping
  {
    id: 2,
    category: "Restaurants",
    title: "DON'T EAT THE HOMIES RESTAURANT",
    subtitle: "RESTAURANTS DESIGN",
    image: `${RESTAURANTS_PATH}/DON'T EAT THE HOMIES RESTAURANT.webp`,
    link: "https://www.behance.net/gallery/244062959/DONT-EAT-THE-HOMIES",
  },
  // 5. Chicago street
  {
    id: 2,
    category: "Restaurants",
    title: "CHICAGO STREET RESTAURANT, DHA PHASE-6",
    subtitle: "RESTAURANTS DESIGN",
    image: `${RESTAURANTS_PATH}/chicago-street-restaurant-dha-phase-6.webp`,
    link: "https://www.behance.net/gallery/241158953/CHICAGO-STREET-RESTAURANT",
  },

  // 6. Arabian delights
  {
    id: 3,
    category: "Restaurants",
    title: "ARABIAN DELIGHTS",
    subtitle: "RESTAURANTS DESIGN",
    image: `${RESTAURANTS_PATH}/arabian-delights.webp`,
    link: "https://www.behance.net/gallery/243458371/ARABIAN-DELIGHTS",
  },

  // 7. Martin and peggy street
  {
    id: 4,
    category: "Houses",
    title: "MARTIN AND PEGGY SCOT",
    subtitle: "MARTIN AND PEGGY SCOT",
    image: `${HOUSES_PATH}/martin and peggy scot.webp`,
    link: "https://www.behance.net/gallery/240350137/Martin-and-Peggy-Scott-Elevation",
  },

  // 8. Noor khan airbase
  {
    id: 5,
    category: "Landscape",
    title: "NOOR KHAN AIRBASE LANDSCAPE",
    subtitle: "LANDSCAPE DESIGN",
    image: `${LANDSCAPE_PATH}/noor-khan-airbase-landscape.webp`,
    link: "https://www.behance.net/gallery/241159759/NOOR-KHAN-LANDSCAPE",
  },

  // 9. Paf greenbelt
  {
    id: 6,
    category: "Landscape",
    title: "PAF GREENBELT LANDSCAPE",
    subtitle: "LANDSCAPE DESIGN",
    image: `${LANDSCAPE_PATH}/paf-greenbelt-landscape.webp`,
    link: "https://www.behance.net/gallery/241159675/PAF-GREENBELT-LANDSCAPE",
  },

  // 10. It office dubai
  {
    id: 7,
    category: "Offices",
    title: "IT OFFICE INTERIOR DUBAI",
    subtitle: "OFFICES DESIGN",
    image: `${OFFICES_PATH}/it-office-interior-dubai.webp`,
    link: "https://www.behance.net/gallery/200572619/IT-OFFICE-INTERIOR-DUBAI",
  },

  // 11. Door showroom dubai
  {
    id: 8,
    category: "Shops",
    title: "DOORS SHOWROOM INTERIOR DESIGN DUBAI",
    subtitle: "SHOPS DESIGN",
    image: `${SHOPS_PATH}/doors-showroom-interior-design-dubai.webp`,
    link: "https://www.behance.net/gallery/200572133/DOORS-SHOWROOM-INTERIOR-DESIGN-DUBAI",
  },

  // 12. Oreal tiles showroom ichra
  {
    id: 9,
    category: "Shops",
    title: "OREAL TILES SHOWROOM ICHHRA LAHORE",
    subtitle: "SHOPS DESIGN",
    image: `${SHOPS_PATH}/oreal-tiles-showroom-ichhra-lahore.webp`,
    link: "https://www.behance.net/gallery/200573049/OREAL-TILES-SHOWROOM-ICHHRA-LAHORE",
  },

  // 13. Villa housing main entrance
  {
    id: 10,
    category: "Landscape",
    title: "VILLA HOUSING SOCIETY MAIN ENTRANCE",
    subtitle: "LANDSCAPE DESIGN",
    image: `${LANDSCAPE_PATH}/villa-housing-society-main-entrance.webp`,
    link: "https://www.behance.net/gallery/243461681/SOCIETY-MAIN-ENTRANCE",
  },

  // 14. 1 kanal house in PUEHS
  {
    id: 11,
    category: "Houses",
    title: "1 KANAL HOUSE IN PUEHS LAHORE",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSES_PATH}/1 kanal house in PUEHS lahore.webp`,
    link: "https://www.behance.net/gallery/204167883/1-kanal-interior-design",
  },

  // 15. 1 kanal corner house
  {
    id: 12,
    category: "Houses",
    title: "1 KANAL CORNER HOUSE COMPLETE PROJECT, LAKE CITY LAHORE",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSES_PATH}/1KANAL CORNER HOUSE COMPLETE PROJECT, LAKE CITY LAHORE .webp`,
    link: "https://www.behance.net/gallery/200704613/1KANAL-CORNER-HOUSE-COMPLETE-PROJECT-LAKE-CITY-LAHORE",
  },

  // 16. 10 marla neoclassic interior
  {
    id: 13,
    category: "Houses",
    title: "10 MARLA NEO CLASSIC INTERIOR BAHRIA TOWN",
    subtitle: "NEO CLASSIC INTERIOR",
    image: `${HOUSES_PATH}/10 marla neo classic interior bahria town.webp`,
    link: "https://www.behance.net/gallery/238759799/NEO-CLASSIC-INTERIOR",
  },

  // 17. 1kanal front elevation
  {
    id: 14,
    category: "Houses",
    title: "1 KANAL FRONT ELEVATION",
    subtitle: "FRONT ELEVATION",
    image: `${HOUSES_PATH}/1 KANAL FRONT ELEVATION.webp`,
    link: "https://www.behance.net/gallery/238578381/1-KANAL-HOUSE-FRONT-ELEVATIO",
  },

  // 18. Gazeebo design murree
  {
    id: 15,
    category: "Houses",
    title: "GAZEEBO DESIGN MURREE",
    subtitle: "GAZEEBO",
    image: `${HOUSES_PATH}/GAZEEBO DESIGN MURREE.webp`,
    link: "https://www.behance.net/gallery/238588369/GAZEEBO-DESIGN",
  },

  // 19. House garden landscape karachi
  {
    id: 16,
    category: "Landscape",
    title: "HOUSE GARDEN LANDSCAPE. KARACHI BAHRIA TOWN",
    subtitle: "LANDSCAPE DESIGN",
    image: `${LANDSCAPE_PATH}/house-garden-landscape-karachi-bahria-town.webp`,
    link: "https://www.behance.net/gallery/241159517/HOUSE-GARDEN-LANDSCAPE-KARACHI",
  },

  // Remaining items from original data
  // Apartments
  {
    id: 17,
    category: "Apartments",
    title: "2D RESIDENCE PLAN USA",
    subtitle: "APARTMENTS DESIGN",
    image: `${APARTMENTS_PATH}/2d-residence-plan-usa.webp`,
    link: "https://www.behance.net/gallery/200703961/2d-RESIDENCE-PLAN-USA",
  },
  {
    id: 18,
    category: "Apartments",
    title: "APARTMENT HOTEL BUILDING DESIGN DUBAI",
    subtitle: "APARTMENTS DESIGN",
    image: `${APARTMENTS_PATH}/apartment-hotel-building-design-dubai.webp`,
    link: "https://www.behance.net/gallery/200327633/APARTMENT-HOTEL-BUILDING-DESIGN-DUBAI",
  },
  {
    id: 19,
    category: "Apartments",
    title: "3 BED APARTMENT 3D FLOOR PLAN",
    subtitle: "APARTMENTS DESIGN",
    image: `${APARTMENTS_PATH}/3-bed-apartment-3d-floor-plan.webp`,
    link: "https://www.behance.net/gallery/200247807/3-BED-APARTMENT-3D-FLOOR-PLAN",
  },
  {
    id: 20,
    category: "Apartments",
    title: "DUPLEX APARTMENTS",
    subtitle: "APARTMENTS DESIGN",
    image: `${APARTMENTS_PATH}/duplex-apartments.webp`,
    link: "https://www.behance.net/gallery/200513503/DUPLEX-APARTMENTS-DESIGN",
  },
  {
    id: 21,
    category: "Apartments",
    title: "UNIVERSITY HEIGHTS APARTMENTS BUILDING",
    subtitle: "APARTMENTS DESIGN",
    image: `${APARTMENTS_PATH}/university-heights-apartments-building.webp`,
    link: "https://www.behance.net/gallery/200546375/UNIVERSITY-HEIGHTS-APARTMENTS-BUILDING",
  },
  {
    id: 22,
    category: "Apartments",
    title: "ONE BED SUITE FLOOR PLAN",
    subtitle: "APARTMENTS DESIGN",
    image: `${APARTMENTS_PATH}/one-bed-suite-floor-plan.webp`,
    link: "https://www.behance.net/gallery/200704265/one-bed-suite-floor-plan",
  },

  // Offices
  {
    id: 23,
    category: "Offices",
    title: "FORMULATRIX OFFICE INTERIOR WAPDA TOWN LAHORE",
    subtitle: "OFFICES DESIGN",
    image: `${OFFICES_PATH}/formulatrix-office-interior-wapda-town-lahore.webp`,
    link: "https://www.behance.net/gallery/200572285/FORMULATRIX-OFFICE-INTERIOR-WAPDA-TOWN-LAHORE",
  },
  {
    id: 24,
    category: "Offices",
    title: "REDBULL CORPORATE OFFICE INTERIOR DHA PHASE 8 LAHORE",
    subtitle: "OFFICES DESIGN",
    image: `${OFFICES_PATH}/redbull-corporate-office-interior-dha-phase-8-lahore.webp`,
    link: "https://www.behance.net/gallery/200616839/REDBULL-CORPORATE-OFFICE-INTERIOR-DHA-PHASE-8-LAHORE",
  },
  {
    id: 25,
    category: "Offices",
    title: "EXECUTIVE OFFICER INTERIOR DESIGN MULTAN",
    subtitle: "OFFICES DESIGN",
    image: `${OFFICES_PATH}/executive-officer-interior-design-multan.webp`,
    link: "https://www.behance.net/gallery/200572207/executive-officer-interior-design-multan",
  },
  {
    id: 26,
    category: "Offices",
    title: "AL GROUP",
    subtitle: "OFFICES DESIGN",
    image: `${OFFICES_PATH}/al-group.webp`,
    link: "https://www.behance.net/gallery/200551131/AL-GROUP",
  },
  {
    id: 27,
    category: "Offices",
    title: "OFFICE INTERIOR DESIGN THOKAR NIAZ BAIG LAHORE",
    subtitle: "OFFICES DESIGN",
    image: `${OFFICES_PATH}/office-interior-design-thokar-niaz-baig-lahore.webp`,
    link: "https://www.behance.net/gallery/200572833/office-interior-design-thokar-niaz-baig-lahore",
  },
  {
    id: 28,
    category: "Offices",
    title: "PROPERTY OFFICE INTERIOR DESIGN RAIWIND",
    subtitle: "OFFICES DESIGN",
    image: `${OFFICES_PATH}/property-office-interior-design-raiwind.webp`,
    link: "https://www.behance.net/gallery/200616703/PROPERTY-OFFICE-INTERIOR-design-raiwind",
  },
  {
    id: 29,
    category: "Offices",
    title: "ADVOCATE OFFICE DESIGN",
    subtitle: "OFFICES DESIGN",
    image: `${OFFICES_PATH}/advocate-office-design.webp`,
    link: "https://www.behance.net/gallery/200512781/ADVOCATE-OFFICE-DESIGN",
  },
  {
    id: 30,
    category: "Offices",
    title: "PROPERTY OFFICE INTERIOR DESIGN LAHORE",
    subtitle: "OFFICES DESIGN",
    image: `${OFFICES_PATH}/property-office-interior-design-lahore.webp`,
    link: "https://www.behance.net/gallery/200573327/property-office-interior-design-lahore",
  },

  // Shops
  {
    id: 31,
    category: "Shops",
    title: "BLAZON SALON JOHAR TOWN LAHORE",
    subtitle: "SHOPS DESIGN",
    image: `${SHOPS_PATH}/blazon-salon-johar-town-lahore.webp`,
    link: "https://www.behance.net/gallery/200328223/BLAZON-SALON-JOHAR-TOWN-LAHORE",
  },
  {
    id: 32,
    category: "Shops",
    title: "COMPUTER SHOP INTERIOR HAFEEZ CENTER LAHORE",
    subtitle: "SHOPS DESIGN",
    image: `${SHOPS_PATH}/computer-shop-interior-hafeez-center-lahore.webp`,
    link: "https://www.behance.net/gallery/200571987/Computer-shop-interior-Hafeez-center-lahore",
  },
  {
    id: 33,
    category: "Shops",
    title: "COMMERCIAL PLAZA DESIGN PROJECT LAHORE",
    subtitle: "SHOPS DESIGN",
    image: `${SHOPS_PATH}/commercial-plaza-design-project-lahore.webp`,
    link: "https://www.behance.net/gallery/200513083/COMMERCIAL-PLAZA-DESIGN-PROJECT-LAHORE",
  },

  // Restaurants
  {
    id: 34,
    category: "Restaurants",
    title: "RESTAURANT INTERIIOR DESIGN, UK",
    subtitle: "RESTAURANTS DESIGN",
    image: `${RESTAURANTS_PATH}/restaurant-interiior-design-uk.webp`,
    link: "https://www.behance.net/gallery/200616977/RESTAURANT-INTERIIOR-DESIGN-UK",
  },
  {
    id: 35,
    category: "Restaurants",
    title: "RESTAURANT INTERIOR PROJECT UNITED KINGDOM",
    subtitle: "RESTAURANTS DESIGN",
    image: `${RESTAURANTS_PATH}/restaurant-interior-project-united-kingdom.webp`,
    link: "https://www.behance.net/gallery/200617123/RESTAURANT-INTERIOR-PROJECT-UNITED-KINGDOM",
  },
  {
    id: 36,
    category: "Restaurants",
    title: "PARAGON OUTDOOR CAFE",
    subtitle: "RESTAURANTS DESIGN",
    image: `${RESTAURANTS_PATH}/paragon-outdoor-cafe.webp`,
    link: "https://www.behance.net/gallery/243461537/OUTDOOR-CAFE",
  },
  {
    id: 37,
    category: "Restaurants",
    title: "PIZZARIAN PIZZA RESTAURANT GULBERG LAHORE",
    subtitle: "RESTAURANTS DESIGN",
    image: `${RESTAURANTS_PATH}/pizzarian-pizza-restaurant-gulberg-lahore.webp`,
    link: "https://www.behance.net/gallery/200573165/PIZZARIAN-PIZZA-RESTAURANT-GULBERG-LAHORE",
  },

  // Landscape
  {
    id: 38,
    category: "Landscape",
    title: "2D LANDSPACE PLANS",
    subtitle: "LANDSCAPE DESIGN",
    image: `${LANDSCAPE_PATH}/2d-landspace-plans.webp`,
    link: "https://www.behance.net/gallery/201612717/2d-landscape-plans",
  },
  {
    id: 39,
    category: "Landscape",
    title: "FARMHOUSE DESIGN IN KARACHI",
    subtitle: "LANDSCAPE DESIGN",
    image: `${LANDSCAPE_PATH}/farmhouse-design-in-karachi.webp`,
    link: "https://www.behance.net/gallery/200544903/FARMHOUSE-DESIGN-IN-KARACHI",
  },
  {
    id: 40,
    category: "Landscape",
    title: "OUTDOOR PARK LANDSCAPE DESIGN FOR SCHOOL",
    subtitle: "LANDSCAPE DESIGN",
    image: `${LANDSCAPE_PATH}/outdoor-park-landscape-design-for-school.webp`,
    link: "https://www.behance.net/gallery/200545983/OUTDOOR-PARK-LANDSCAPE-DESIGN-FOR-SCHOOL",
  },
  {
    id: 41,
    category: "Landscape",
    title: "1 KANAL LAWN AREA DESIGN",
    subtitle: "LANDSCAPE DESIGN",
    image: `${LANDSCAPE_PATH}/1-kanal-lawn-area-design.webp`,
    link: "https://www.behance.net/gallery/200703765/1-KANAL-LAWN-AREA-DESIGN",
  },
  {
    id: 42,
    category: "Landscape",
    title: "DAYCARE PARK LANDSCAPE DESIGN KASUR",
    subtitle: "LANDSCAPE DESIGN",
    image: `${LANDSCAPE_PATH}/daycare-park-landscape-design-kasur.webp`,
    link: "https://www.behance.net/gallery/200513283/DAYCARE-PARK-LANDSCAPE-DESIGN-KASUR",
  },

  // Houses
  {
    id: 43,
    category: "Houses",
    title: "NASHEMAN E IQBAL SOCIETY",
    subtitle: "ENTRANCE DESIGN",
    image: `${PORTFOLIO_PATH}/portfolio-5.webp`,
  },
  {
    id: 44,
    category: "Houses",
    title: "1 KANAL COMPLETE DESIGN SHEIKHUPURA",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSES_PATH}/1 KANAL COMPLETE DESIGN SHEIKHUPURA d.webp`,
    link: "https://www.behance.net/gallery/200063495/1-KANAL-COMPLETE-DESIGN-SHEIKHUPURA",
  },
  {
    id: 45,
    category: "Houses",
    title: "1 KANAL CORNER DHA PHASE 6 LAHORE",
    subtitle: "CORNER DESIGN",
    image: `${HOUSES_PATH}/1 KANAL CORNER DHA PHASE 6 LAHORE.webp`,
    link: "https://www.behance.net/gallery/200063569/1-KANAL-CORNER-DHA-PHASE-6-LAHORE",
  },
  {
    id: 46,
    category: "Houses",
    title: "1 KANAL EXTERIOR DESIGN CORNER HOUSE PESHAWAR",
    subtitle: "EXTERIOR DESIGN",
    image: `${HOUSES_PATH}/1KANAL EXTERIOR DESIGN CORNER HOUSE PESHAWAR.webp`,
    link: "https://www.behance.net/gallery/200246835/1KANAL-EXTERIOR-DESIGN-CORNER-HOUSE-PESHAWAR",
  },
  {
    id: 47,
    category: "Houses",
    title: "1 KANAL EXTERIOR DESIGN FAZAIYA HOUSING SCHEME LAHORE",
    subtitle: "EXTERIOR DESIGN",
    image: `${HOUSES_PATH}/1 KANAL EXTERIOR DESIGN FAZAIYA HOUSING SCHEME LAHORE.webp`,
    link: "https://www.behance.net/gallery/199878009/1-KANAL-EXTERIOR-DESIGN-FAZAIYA-HOUSING-SCHEME-LAHORE",
  },
  {
    id: 48,
    category: "Houses",
    title: "1 KANAL INTERIOR DESIGN KARACHI",
    subtitle: "INTERIOR DESIGN",
    image: `${HOUSES_PATH}/1 kanal interior design karachi.webp`,
    link: "https://www.behance.net/gallery/200617751/1-kanal-interior-design-karachi",
  },
  {
    id: 49,
    category: "Houses",
    title: "1 KANAL INTERIOR PROJECT BAHRIA TOWN LAHORE",
    subtitle: "INTERIOR PROJECT",
    image: `${HOUSES_PATH}/1 kanal interior project bahria town lahore.webp`,
    link: "https://www.behance.net/gallery/200691741/1-kanal-interior-project-bahria-town-lahore",
  },
  {
    id: 50,
    category: "Houses",
    title: "1 KANAL INTERIOR PROJECT HYDERABAD",
    subtitle: "INTERIOR PROJECT",
    image: `${HOUSES_PATH}/1 kanal interior project hyderabad.webp`,
    link: "https://www.behance.net/gallery/200691897/1-kanal-interior-project-hyderabad",
  },
  {
    id: 51,
    category: "Houses",
    title: "3 MARLA FRONT ELEVATION LAHORE",
    subtitle: "FRONT ELEVATION",
    image: `${HOUSES_PATH}/3 MARLA FRONT ELEVATION LAHORE.webp`,
    link: "https://www.behance.net/gallery/200247921/3-MARLA-FRONT-ELEVATION-LAHORE",
  },
  {
    id: 52,
    category: "Houses",
    title: "2D RESIDENCE PLAN USA",
    subtitle: "RESIDENCE PLAN",
    image: `${HOUSES_PATH}/2d RESIDENCE PLAN USA.webp`,
    link: "https://www.behance.net/gallery/200703961/2d-RESIDENCE-PLAN-USA",
  },
  {
    id: 53,
    category: "Houses",
    title: "5 MARLA COMPLETE ARCHITECTURAL DESIGN FAISALABAD",
    subtitle: "COMPLETE ARCHITECTURAL DESIGN",
    image: `${HOUSES_PATH}/5 MARLA COMPLETE ARCHITECTURAL DESIGN FAISALABAD.webp`,
    link: "https://www.behance.net/gallery/200248099/5-MARLA-COMPLETE-ARCHITECTURAL-DESIGN-FAISALABAD",
  },
  {
    id: 54,
    category: "Houses",
    title: "5 MARLA COMPLETE DESIGN PROJECT AL-HAFEEZ GARDENS PHASE 2 LAHORE",
    subtitle: "COMPLETE DESIGN",
    image: `${HOUSES_PATH}/5 MARLA COMPLETE DESIGN PROJECT AL-HAFEEZ GARDENS PHASE 2 LAHORE.webp`,
    link: "https://www.behance.net/gallery/200248325/5-MARLA-DESIGN-PROJECT-AL-HAFEEZ-GARDENS-PHASE-2-LAHORE",
  },
  {
    id: 55,
    category: "Houses",
    title: "5 MARLA CORNER RESIDENCE DESIGN TAJBAGH LAHORE",
    subtitle: "CORNER RESIDENCE DESIGN",
    image: `${HOUSES_PATH}/5 MARLA CORNER RESIDENCE DESIGN TAJBAGH LAHORE.webp`,
    link: "https://www.behance.net/gallery/200248499/5-MARLA-CORNER-RESIDENCE-DESIGN-TAJBAGH-LAHORE",
  },
  {
    id: 56,
    category: "Houses",
    title: "5 MARLA FRONT ELEVATION LAKE CITY LAHORE",
    subtitle: "FRONT ELEVATION",
    image: `${HOUSES_PATH}/5 MARLA FRONT ELEVATION LAKE CITY LAHORE .webp`,
    link: "https://www.behance.net/gallery/200248807/5-MARLA-FRONT-ELEVATION-LAKE-CITY-LAHORE",
  },
  {
    id: 57,
    category: "Houses",
    title: "10 MARLA DESIGN TOWNSHIP LAHORE",
    subtitle: "DESIGNSIGN FRONT ELEVATION",
    image: `${HOUSES_PATH}/10 MARLA DESIGN TOWNSHIP LAHORE.webp`,
    link: "https://www.behance.net/gallery/200323389/10-MARLA-DESIGN-TOWNSHIP-LAHORE",
  },
  {
    id: 58,
    category: "Houses",
    title: "10 MARLA CLASSIC HOUSE GUJRAWALA",
    subtitle: "CLASSIC HOUSE",
    image: `${HOUSES_PATH}/10 MARLA CLASSIC HOUSE GUJRAWALA.webp`,
    link: "https://www.behance.net/gallery/238589153/classic-front-elevation",
  },
  {
    id: 59,
    category: "Houses",
    title: "10 MARLA INTERIOR DESIGN LAHORE",
    subtitle: "INTERIOR DESIGN",
    image: `${HOUSES_PATH}/10 marla interior design lahore.webp`,
    link: "https://www.behance.net/gallery/200701691/10-marla-interior-design-lahore",
  },
  {
    id: 60,
    category: "Houses",
    title: "12 MARLA INTERIOR DESIGN JOHAR TOWN LAHORE",
    subtitle: "INTERIOR DESIGN",
    image: `${HOUSES_PATH}/12 marla interior design johar town lahore .webp`,
    link: "https://www.behance.net/gallery/200702191/12-marla-interior-design-johar-town-lahore",
  },
  {
    id: 61,
    category: "Houses",
    title: "15 MARLA HOUSE ELEVATION DESIGN KASHMIR",
    subtitle: "ELEVATION DESIGN",
    image: `${HOUSES_PATH}/15 marla house elevation design kashmir.webp`,
    link: "https://www.behance.net/gallery/200323815/15-marla-house-elevation-design-kashmir",
  },
  {
    id: 62,
    category: "Houses",
    title: "BEDROOM INTERIOR DESIGN BISMAILAH HOUSING SCHEME LAHORE",
    subtitle: "BEDROOM INTERIOR DESIGN",
    image: `${HOUSES_PATH}/bedroom interior design, Bismillah housing scheme lahore.webp`,
    link: "https://www.behance.net/gallery/200702909/bedroom-interior-design-Bismillah-housing-scheme-lahore",
  },
  {
    id: 63,
    category: "Houses",
    title: "ELEVATION DESIGN OF RESIDENCE IN BATAL KASHMIR",
    subtitle: "ELEVATION DESIGN",
    image: `${HOUSES_PATH}/ELEVATION DESIGN OF RESIDENCE IN BATAL KASHMIR.webp`,
    link: "https://www.behance.net/gallery/200544635/ELEVATION-DESIGN-OF-RESIDENCE-IN-BATAL-KASHMIR",
  },
  {
    id: 64,
    category: "Houses",
    title: "FARMHOUSE KARACHI",
    subtitle: "FARMHOUSE",
    image: `${HOUSES_PATH}/FARMHOUSE KARACHI.webp`,
    link: "https://www.behance.net/gallery/200544903/FARMHOUSE-DESIGN-IN-KARACHI",
  },
  {
    id: 65,
    category: "Houses",
    title: "VILLA DESIGN PROJECT CALIFORNIA",
    subtitle: "VILLA",
    image: `${HOUSES_PATH}/VILLA DESIGN PROJECT CALIFORNIA.webp`,
    link: "https://www.behance.net/gallery/200546523/VILLA-DESIGN-PROJECT-CALIFORNIA",
  },
  {
    id: 66,
    category: "Houses",
    title: "1 KANAL FRONT ELEVATION RENOVATION WAPDA TOWN LAHORE",
    subtitle: "FRONT ELEVATION RENOVATION",
    image: `${HOUSES_PATH}/1 KANAL FRONT ELEVATION RENOVATION WAPDA TOWN LAHORE.webp`,
    link: "https://www.behance.net/gallery/200546781/1-KANAL-FRONT-ELEVATION-RENOVATION-WAPDA-TOWN-LAHORE",
  },
  {
    id: 67,
    category: "Houses",
    title: "1 KANAL RESIDENCE DESIGN WAPDA TOWN",
    subtitle: "RESIDENCE DESIGN",
    image: `${HOUSES_PATH}/1 KANAL RESIDENCE DESIGN WAPDA TOWN.webp`,
    link: "https://www.behance.net/gallery/200546971/1-KANAL-RESIDENCE-DESIGN-WAPDA-TOWN",
  },
  {
    id: 68,
    category: "Houses",
    title: "3 MARLA CORNER RESIDENCE DESIGN",
    subtitle: "RESIDENCE DESIGN",
    image: `${HOUSES_PATH}/3 MARLA CORNER RESIDENCE DESIGN.webp`,
    link: "https://www.behance.net/gallery/200547253/3-MARLA-CORNER-RESIDENCE-DESIGN",
  },
  {
    id: 69,
    category: "Houses",
    title: "5 MARLA FRONT ELEVATION DESIGN DHA PHASE 9",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSES_PATH}/5 MARLA FRONT ELEVATION DESIGN DHA PHASE 9.webp`,
    link: "https://www.behance.net/gallery/200547477/5-MARLA-FRONT-ELEVATION-DESIGN-DHA-PHASE-9",
  },
  {
    id: 70,
    category: "Houses",
    title: "7 MARLA FRONT ELEVATION DESIGN LAHORE",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSES_PATH}/7 MARLA FRONT ELEVATION DESIGN LAHORE (1).webp`,
    link: "https://www.behance.net/gallery/200547623/7-MARLA-FRONT-ELEVATION-DESIGN-LAHORE",
  },
  {
    id: 71,
    category: "Houses",
    title: "10 MARLA DHA PHASE 6",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSES_PATH}/10 MARLA DHA PHASE 6.webp`,
    link: "https://www.behance.net/gallery/200548901/10-MARLA-DHA-PHASE-6",
  },
  {
    id: 72,
    category: "Houses",
    title: "10 MARLA FRONT ELEVATION RENOVATION PROJECT LAHORE",
    subtitle: "FRONT ELEVATION RENOVATION PROJECT",
    image: `${HOUSES_PATH}/10 MARLA FRONT ELEVATION RENOVATION PROJECT  LAHORE.webp`,
    link: "https://www.behance.net/gallery/200549027/10-MARLA-FRONT-ELEVATION-RENOVATION-PROJECT-LAHORE",
  },
  {
    id: 73,
    category: "Houses",
    title: "12 MARLA COMPLETE DESIGN PROJECT JOHAR TOWN",
    subtitle: "COMPLETE DESIGN PROJECT",
    image: `${HOUSES_PATH}/12 MARLA COMPLETE DESIGN PROJECT JOHAR TOWN.webp`,
    link: "https://www.behance.net/gallery/200702191/12-marla-interior-design-johar-town-lahore",
  },
  {
    id: 74,
    category: "Houses",
    title: "12 MARLA FRONT ELEVATION DESIGN",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSES_PATH}/12 MARLA FRONT ELEVATION DESIGN.webp`,
    link: "https://www.behance.net/gallery/200549247/12-MARLA-FRONT-ELEVATION-DESIGN",
  },
  {
    id: 75,
    category: "Houses",
    title: "16 MARLA GROUND FLOOR PLAN",
    subtitle: "GROUND FLOOR PLAN",
    image: `${HOUSES_PATH}/16 MARLA GROUND FLOOR PLAN.webp`,
    link: "https://www.behance.net/gallery/200549351/16-MARLA-GROUND-FLOOR-PLAN",
  },
  {
    id: 76,
    category: "Houses",
    title: "33 MARLA RESIDENCE DHA PHASE 5 LAHORE",
    subtitle: "RESIDENCE DESIGN",
    image: `${HOUSES_PATH}/33 MARLA RESIDENCE DHA PHASE 5 LAHORE.webp`,
    link: "https://www.behance.net/gallery/200549501/33-MARLA-RESIDENCE-DHA-PHASE-5-LAHORE",
  },
  {
    id: 77,
    category: "Houses",
    title: "FRONT ELEVATION DESIGN PROJECT INDONESIA",
    subtitle: "FRONT ELEVATION DESIGN",
    image: `${HOUSES_PATH}/FRONT ELEVATION DESIGN PROJECT INDONESIA.webp`,
    link: "https://www.behance.net/gallery/200550137/FRONT-ELEVATION-DESIGN-PROJECT-INDONESIA",
  },
  {
    id: 78,
    category: "Houses",
    title: "INTERIOR BEDROOM DESIGN 2 D",
    subtitle: "INTERIOR BEDROOM DESIGN",
    image: `${HOUSES_PATH}/INTERIOR BEDROOM DESIGN 2 D.webp`,
    link: "https://www.behance.net/gallery/200703065/INTERIOR-BEDROOM-DESIGN",
  },
  {
    id: 79,
    category: "Houses",
    title: "INTERIOR BEDROOM DESIGN",
    subtitle: "INTERIOR BEDROOM DESIGN",
    image: `${HOUSES_PATH}/INTERIOR BEDROOM DESIGN.webp`,
    link: "https://www.behance.net/gallery/200703065/INTERIOR-BEDROOM-DESIGN",
  },
  {
    id: 80,
    category: "Houses",
    title: "JAPANDI STYLE APARTMENT BEDROOM INTERIOR SINGAPORE",
    subtitle: "INTERIOR BEDROOM DESIGN",
    image: `${HOUSES_PATH}/japandi style apartment bedroom interior singapore.webp`,
    link: "https://www.behance.net/gallery/200703297/japandi-style-apartment-bedroom-interior-Singapore",
  },
  {
    id: 81,
    category: "Houses",
    title: "LIVING AREA DESIGN USA",
    subtitle: "LIVING AREA DESIGN",
    image: `${HOUSES_PATH}/LIVING  area design USA.webp`,
    link: "https://www.behance.net/gallery/200703467/LIVING-area-design-USA",
  },
  {
    id: 82,
    category: "Houses",
    title: "LIVING ROOM APARTMENT DESIGN SOUTH AFRICA",
    subtitle: "LIVING ROOM APARTMENT DESIGN",
    image: `${HOUSES_PATH}/living room apartment design South Africa.webp`,
    link: "https://www.behance.net/gallery/200703609/living-room-apartment-design-South-Africa",
  },
  {
    id: 83,
    category: "Houses",
    title: "VILLA PROJECT, USA",
    subtitle: "VILLA PROJECT",
    image: `${HOUSES_PATH}/VILLA PROJECT, USA.webp`,
    link: "https://www.behance.net/gallery/200550921/VILLA-PROJECT-USA",
  },
];
