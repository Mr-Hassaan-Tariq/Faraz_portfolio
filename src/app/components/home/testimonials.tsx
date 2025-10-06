"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import DiamondIcon from "../../../../public/logos/diamond.svg";
import TestimonialImage from "../../../../public/logos/testimonial.png";

export default function Testimonials() {
  const testimonials = [
    {
      text: "“Faraz transformed our space into a masterpiece. From initial concepts to final execution, they demonstrated professionalism and creativity at every step. Highly recommend!”",
      name: "Sarah Khan",
      role: "Satisfied Homeowner",
      image: TestimonialImage,
    },
    {
      text: "“Working with Faraz was a fantastic experience. Their designs brought our vision to life and exceeded expectations.”",
      name: "Ali Raza",
      role: "Commercial Client",
      image: TestimonialImage,
    },
    {
      text: "“The attention to detail and ability to blend modern aesthetics with functionality is unmatched.”",
      name: "Fatima Ahmed",
      role: "Interior Enthusiast",
      image: TestimonialImage,
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" loading="lazy" />
            <p className="text-[20px] font-normal uppercase tracking-wide text-black">
              Testimonials
            </p>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                <p className="text-[22px] md:text-[28px] text-[#101010] font-[500] w-full mb-6">
                  {t.text}
                </p>

                <div className="flex justify-end">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gray-300 overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col text-righleft">
                      <p className="text-[18px] font-bold text-[#101010]">
                        {t.name}
                      </p>
                      <p className="text-[14px] text-[#878787]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
