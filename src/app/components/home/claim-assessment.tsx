"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import ClaimImage from "../../../../public/logos/claim-assessment.webp";
import PhoneIcon from "../../../../public/logos/phone.svg";
import FarazImage from "../../../../public/logos/faraz.jpeg";

export default function ClaimAssessment() {
  const router = useRouter();

  return (
    <section className="relative h-[calc(100vh-120px)] md:h-[calc(100vh-120px)] w-full">
      {/* Background */}
      <Image
        src={ClaimImage}
        alt="Claim Assessment Background"
        fill
        className="object-cover object-center"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-4 md:px-4 py-16 md:py-20">
        {/* Text Left */}
        <div className="max-w-2xl text-left">
          <p className="mt-2 text-[32px] font-bold text-white">
            Claim Your Free Design <br /> Assessment
          </p>

          <p className="mt-2 text-[18px] text-[#E3EBF5]">
            Sign up now for a complimentary design assessment and let us help
            you unleash the full potential of your space.
          </p>

          <Button
            className="mt-6 bg-[#A10000] text-white"
            onClick={() => router.push("/contact")}
          >
            Contact Me
          </Button>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex flex-col items-start">
            <div className="flex items-center bg-white/90 p-2 rounded-md shadow-md">
              <Image
                src={FarazImage}
                alt="Faraz"
                width={70}
                height={70}
                className="rounded-md object-cover"
                loading="lazy"
              />

              <div className="ml-3">
                <p className="text-black font-semibold text-[16px]">
                  Ready to Transform?
                </p>
                <p className="text-black text-[15px]">Talk to Me!</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center mt-2">
            <Image
              src={PhoneIcon}
              alt="phone"
              width={20}
              height={20}
              loading="lazy"
            />
            <p className="text-white text-[16px]">+92 305 4339254</p>
          </div>
        </div>
      </div>
    </section>
  );
}
