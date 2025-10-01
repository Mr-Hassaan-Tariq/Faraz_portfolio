"use client";

import Image from "next/image";
import MapIcon from "../../../../public/logos/address-icon.svg";
import PhoneIcon from "../../../../public/logos/phone-icon.svg";
import MailIcon from "../../../../public/logos/main-icon.svg";
import { Button } from "@/components/ui/button";

export default function ContactDetails() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex md:grid md:grid-cols-2 md:gap-12">
          <div className="flex flex-col">
            <h1 className="mt-1 text-4xl font-bold text-black leading-tight">
              Contact Details
            </h1>

            <div className="flex flex-col gap-3">
              <div className="mt-6 flex gap-4 items-center">
                <Image src={MapIcon} alt="map" priority loading="lazy" />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-[20px] mt-6">Address</p>
                  <p className="text-[#808080]">Lahore, Pakistan</p>
                </div>
              </div>
              <hr className="mt-6 border-t border-[#DADADA]" />

              <div className="flex gap-4 items-center">
                <Image src={PhoneIcon} alt="phone" priority loading="lazy" />
                <div className="flex flex-col gap-2 mt-6">
                  <p className="font-bold text-[20px]">Contact Details</p>
                  <p className="text-[#808080]">+92-305-4339254</p>
                </div>
              </div>
              <hr className="mt-6 border-t border-[#DADADA]" />

              <div className="flex gap-4 items-center">
                <Image src={MailIcon} alt="mail" priority loading="lazy" />
                <div className="flex flex-col gap-2 mt-6">
                  <p className="font-bold text-[20px]">Email Us</p>
                  <p className="text-[#808080]">farazjamil12@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <form className="flex flex-col gap-6 w-full">
              <div className="flex flex-col">
                <label className="text-black font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-black font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your number"
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-black font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-black font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Write here..."
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md focus:outline-none resize-none"
                />
              </div>

              <Button className="bg-[#A10000] text-white px-6 py-3 rounded-md font-medium hover:bg-[#8B0000] transition w-fit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
