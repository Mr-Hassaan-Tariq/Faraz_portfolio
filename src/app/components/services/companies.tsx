"use client";

import Image from "next/image";

import Company1 from "../../../../public/logos/company-1.png";
import Company2 from "../../../../public/logos/company-2.png";
import Company3 from "../../../../public/logos/company-3.png";
import Company4 from "../../../../public/logos/company-4.png";
import Company5 from "../../../../public/logos/company-5.png";
import Company6 from "../../../../public/logos/company-6.png";

const companies = [Company1, Company2, Company3, Company4, Company5, Company6];

export default function Companies() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex items-center justify-between">
          {companies.map((logo, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={logo}
                alt={`Company ${index + 1}`}
                className="h-12 w-auto object-contain"
              />
              {index < companies.length - 1 && (
                <div className="h-10 w-px bg-gray-300 mx-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
