"use client";

import Image from "next/image";
import { useState } from "react";
import MapIcon from "../../../../public/logos/address-icon.svg";
import PhoneIcon from "../../../../public/logos/phone-icon.svg";
import MailIcon from "../../../../public/logos/main-icon.svg";
import { Button } from "@/components/ui/button";

export default function ContactDetails() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "iammrhassantariq@gmail.com",
          subject: `New Contact Form Message from ${formData.name}`,
          text: `
            Name: ${formData.name}
            Phone: ${formData.phone}
            Email: ${formData.email}
            Message: ${formData.message}
          `,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><b>Name:</b> ${formData.name}</p>
            <p><b>Phone:</b> ${formData.phone}</p>
            <p><b>Email:</b> ${formData.email}</p>
            <p><b>Message:</b> ${formData.message}</p>
          `,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Error sending message. Please try later.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-20">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 gap-12">
          <div className="flex flex-col">
            <h1 className="mt-1 text-4xl font-bold text-black leading-tight">
              Contact Details
            </h1>

            <div className="flex flex-col gap-3">
              <div className="mt-6 flex gap-4 items-center">
                <Image src={MapIcon} alt="map" loading="lazy" />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-[20px] mt-6">Address</p>
                  <p className="text-[#808080]">Lahore, Pakistan</p>
                </div>
              </div>
              <hr className="mt-6 border-t border-[#DADADA]" />

              <div className="flex gap-4 items-center">
                <Image src={PhoneIcon} alt="phone" loading="lazy" />
                <div className="flex flex-col gap-2 mt-6">
                  <p className="font-bold text-[20px]">Contact Details</p>
                  <p className="text-[#808080]">+92-305-4339254</p>
                </div>
              </div>
              <hr className="mt-6 border-t border-[#DADADA]" />

              <div className="flex gap-4 items-center">
                <Image src={MailIcon} alt="mail" loading="lazy" />
                <div className="flex flex-col gap-2 mt-6">
                  <p className="font-bold text-[20px]">Email Us</p>
                  <p className="text-[#808080]">iammrhassantariq@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="flex flex-col justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full"
            >
              <div className="flex flex-col">
                <label className="text-black font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-black font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-black font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-black font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write here..."
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md focus:outline-none resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="bg-[#A10000] text-white px-6 py-3 rounded-md font-medium hover:bg-[#8B0000] transition w-fit"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
