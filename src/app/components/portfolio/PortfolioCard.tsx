import { PortfolioItem } from "./data/portfolio-data";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="relative group overflow-hidden w-full sm:w-[500px] h-[500px] rounded-lg mb-16">
      {/* Portfolio Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

      {/* Content */}
      <CardContent title={item.title} subtitle={item.subtitle} />
    </div>
  );
}

// Card content component for title, subtitle, and CTA
interface CardContentProps {
  title: string;
  subtitle: string;
}

function CardContent({ title, subtitle }: CardContentProps) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2">
      <h3 className="text-white text-xl font-bold text-right">{title}</h3>
      <p className="text-white text-sm text-right">{subtitle}</p>
      <p className="text-white text-sm text-right uppercase">
        Discover this Project
      </p>
    </div>
  );
}

