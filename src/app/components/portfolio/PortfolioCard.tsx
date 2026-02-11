import Image from "next/image";
import { PortfolioItem } from "./data/portfolio-data";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const CardWrapper = item.link ? "a" : "div";
  const wrapperProps = item.link
    ? {
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "relative group overflow-hidden w-full sm:w-[500px] h-[500px] rounded-lg mb-16 cursor-pointer block",
      }
    : {
        className: "relative group overflow-hidden w-full sm:w-[500px] h-[500px] rounded-lg mb-16",
      };

  return (
    <CardWrapper {...wrapperProps}>
      {/* Portfolio Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, 500px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        quality={80}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

      {/* Content */}
      <CardContent title={item.title} subtitle={item.subtitle} />
    </CardWrapper>
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

