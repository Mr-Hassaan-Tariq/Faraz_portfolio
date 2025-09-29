"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";

type ContactProps = {
  page?: "portfolio" | "default";
};

export default function Contact({ page = "default" }: ContactProps) {
  const isPortfolio = page === "portfolio";

  return (
    <section
      className={clsx("w-full", isPortfolio ? "bg-white" : "bg-[#A10000]")}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20 flex flex-col md:flex-row justify-between items-center gap-6">
        <p
          className={clsx(
            "text-[32px] md:text-[48px] font-[500] text-center md:text-left",
            isPortfolio ? "text-[#A10000]" : "text-white"
          )}
        >
          Let’s Create Your Next Big <br /> Project Together
        </p>

        <div className="flex gap-2 items-center">
          <Button
            className={clsx(
              "cursor-pointer",
              isPortfolio
                ? "bg-[#A10000] text-white hover:bg-[#A10000]/90"
                : "bg-white text-[#A10000] hover:bg-white"
            )}
          >
            Get Started
          </Button>
          <Button
            className={clsx(
              "cursor-pointer",
              isPortfolio
                ? "bg-transparent border border-[#A10000] text-[#A10000] hover:bg-transparent"
                : "bg-transparent border border-white text-white hover:bg-transparent"
            )}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
