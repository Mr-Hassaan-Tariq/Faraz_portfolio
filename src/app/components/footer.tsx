"use client";

import Link from "next/link";
import Image from "next/image";
import MainLogo from "../../../public/logos/Logo.svg";
import FacebookIcon from "../../../public/logos/facebook-icon.svg";
import InstagramIcon from "../../../public/logos/instagram-icon.svg";
import TwitterIcon from "../../../public/logos/twitter-icon.svg";
import LinkedinIcon from "../../../public/logos/linkedIn-icon.svg";
import CopyrightIcon from "../../../public/logos/copyright.svg";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About" },
  { href: "/services/architectural-design", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = {
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  twitter: "https://twitter.com/",
  linkedin: "https://linkedin.com/",
};

export default function Footer() {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-[#F9F9FB]">
      <div className="mx-auto max-w-7xl px-4 md:px-4 py-16 md:py-10 flex flex-col justify-center items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={MainLogo}
            alt="Logo"
            loading="lazy"
            className="h-[40px] w-auto md:h-[180px]"
          />
        </Link>

        <nav className="mt-6">
          <ul className="flex flex-col items-center gap-6 text-[18px] font-[500] text-black md:flex-row md:gap-10 md:text-[20px]">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition duration-200 hover:text-[#A10000] hover:font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex mt-6 gap-6">
          <Image
            src={FacebookIcon}
            alt="facebook"
            className="h-[40px] w-auto cursor-pointer"
            onClick={() => handleSocialClick(socialLinks.facebook)}
            loading="lazy"
          />
          <Image
            src={InstagramIcon}
            alt="instagram"
            className="h-[40px] w-auto cursor-pointer"
            onClick={() => handleSocialClick(socialLinks.instagram)}
            loading="lazy"
          />
          <Image
            src={TwitterIcon}
            alt="twitter"
            className="h-[40px] w-auto cursor-pointer"
            onClick={() => handleSocialClick(socialLinks.twitter)}
            loading="lazy"
          />
          <Image
            src={LinkedinIcon}
            alt="linkedin"
            className="h-[40px] w-auto cursor-pointer"
            onClick={() => handleSocialClick(socialLinks.linkedin)}
            loading="lazy"
          />
        </div>

        <div className="flex gap-1 mt-12 w-full border-t border-[#D6D6D6] pt-6 justify-center items-center">
          <Image
            src={CopyrightIcon}
            alt="copyright"
            loading="lazy"
            className="h-[20px] w-auto"
          />
          <p className="text-[18px] font-[500] text-black">
            Aefaraz 2025 All right reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
