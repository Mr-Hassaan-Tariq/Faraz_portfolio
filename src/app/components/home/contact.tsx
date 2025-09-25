"use client";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="w-full bg-[#A10000]">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20 flex justify-between items-center">
        <p className="text-[48px] text-white font-[500]">
          Let’s Create Your Next Big <br></br>Project Together
        </p>
        <div className="flex gap-2 items-center">
          <Button className="bg-white text-[#A10000] cursor-pointer hover:bg-[white] hover:text-[#A10000]">
            Get Started
          </Button>
          <Button className="bg-transparent border border-white text-white cursor-pointer hover:bg-[transparent]">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
