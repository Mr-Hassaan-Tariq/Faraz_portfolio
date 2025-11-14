"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import DiamondIcon from "../../../../public/logos/diamond.svg";

export default function Testimonials() {
  const testimonials = [
    {
      text: "“Faraz transformed our space into a masterpiece. From initial concepts to final execution, they demonstrated professionalism and creativity at every step. Highly recommend!”",
      name: "Hassaan Tariq",
      role: "Satisfied Homeowner",
    },
    {
      text: "“We appreciate your dedication in helping us complete the task on time.”",
      name: "M. Asim",
      role: "",
    },
    {
      text: "“Faraz did an excellent job improving our elevation design despite the challenge of the existing ground floor. His innovative solutions and keen attention to detail made the project seamless. Highly recommend.”",
      name: "Shammas Shahid",
      role: "Tourist & Traveller",
    },
    {
      text: "“He is an amazing artist to work with for sure. Good at communication and skills!”",
      name: "Mian Sohaib Fida",
      role: "Advocate",
    },
    {
      text: "“Muhammad delivers professional design renderings. Very creative and beautiful work. It's a pleasure working together!”",
      name: "Nadia Aurangzeb",
      role: "Professor",
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

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1200}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                <p className="text-[22px] md:text-[28px] text-[#101010] font-[500] w-full mb-6 leading-[1.4]">
                  {t.text}
                </p>

                <div className="flex justify-end">
                  <div className="flex items-center gap-4">
                    {/* Initial letter circle */}
                    <div className="h-14 w-14 rounded-full bg-black/80 flex items-center justify-center text-white text-[22px] font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div className="flex flex-col text-left">
                      <p className="text-[18px] font-bold text-[#101010]">
                        {t.name}
                      </p>
                      {t.role && (
                        <p className="text-[14px] text-[#878787]">{t.role}</p>
                      )}
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
