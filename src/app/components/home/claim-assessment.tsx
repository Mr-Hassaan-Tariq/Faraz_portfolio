"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ReadyToTransform from "../../../../public/logos/ready-to-transform.png";
import PhoneIcon from "../../../../public/logos/phone.svg";
import ClaimImage from "../../../../public/logos/claim-assessment.png";

export default function ClaimAssessment() {
  const router = useRouter();
  return (
    <section className="relative h-[calc(100vh-120px)] md:h-[calc(100vh-120px)] w-full">
      <Image
        src={ClaimImage}
        alt="Claim Assessment Background"
        fill
        className="object-cover object-center"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-4 md:px-4 py-16 md:py-20">
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
            <Image
              src={ReadyToTransform}
              alt="Ready to Transform"
              width={220}
              height={70}
              loading="lazy"
            />

            <div className="flex gap-2 items-center mt-2">
              <Image
                src={PhoneIcon}
                alt="phone"
                width={20}
                height={20}
                loading="lazy"
              />
              <p className="text-white">+92 305 4339254</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
