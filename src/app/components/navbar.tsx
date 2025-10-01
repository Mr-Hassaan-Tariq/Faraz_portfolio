"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

import MainLogo from "../../../public/logos/Logo.svg";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about-me", label: "About Me" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  const serviceItems = [
    { href: "/services/architectural-design", label: "Architectural Design" },
    { href: "/services/interior-design", label: "Interior Design" },
    { href: "/services/landscape-design", label: "Landscape Design" },
    {
      href: "/services/3d-visualization",
      label: "3D Visualization & Rendering",
    },
    { href: "/services/animation", label: "Animation Services" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-0 py-3 md:py-1">
        <Link href="/" className="flex items-center">
          <Image
            src={MainLogo}
            alt="Logo"
            className="h-[40px] w-auto md:h-[80px]"
            priority
            loading="lazy"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            if (item.label === "Services") {
              return (
                <li key={item.href}>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md transition duration-200 focus:outline-none">
                      <span
                        className={`transition-colors duration-200 cursor-pointer ${
                          pathname.startsWith("/services")
                            ? "text-[#A10000] font-bold"
                            : "text-gray-700 hover:text-[#A10000]"
                        }`}
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-colors duration-200 ${
                          pathname.startsWith("/services")
                            ? "text-[#A10000]"
                            : "text-gray-700 group-hover:text-[#A10000]"
                        }`}
                      />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-white shadow-md rounded-md py-2 w-56">
                      {serviceItems.map((service) => (
                        <DropdownMenuItem key={service.href} asChild>
                          <Link
                            href={service.href}
                            className={`block px-4 py-2 rounded-md transition hover:bg-gray-100 ${
                              pathname === service.href
                                ? "text-[#A10000] font-bold"
                                : "text-gray-700 hover:text-[#A10000]"
                            }`}
                          >
                            {service.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md transition duration-200 ${
                    isActive
                      ? "text-[#A10000] font-bold"
                      : "text-gray-700 hover:text-[#A10000]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>

        <div className="md:hidden flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-md p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:w-80 px-6 py-6">
              <nav className="mt-8 flex flex-col gap-3 text-lg font-medium">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;

                  if (item.label === "Services") {
                    return (
                      <div key={item.href}>
                        <button
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className={`flex w-full items-center justify-between px-3 py-2 rounded-md transition duration-200 cursor-pointer ${
                            pathname.startsWith("/services")
                              ? "text-[#A10000] font-bold cursor-pointer"
                              : "text-gray-700 hover:text-[#A10000] cursor-pointer"
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transform transition duration-200 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            } ${
                              pathname.startsWith("/services")
                                ? "text-[#A10000]"
                                : "text-gray-700"
                            }`}
                          />
                        </button>
                        {mobileServicesOpen && (
                          <div className="ml-4 mt-2 flex flex-col gap-2">
                            {serviceItems.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`block px-3 py-1 rounded-md ${
                                  pathname === service.href
                                    ? "text-[#A10000] font-bold"
                                    : "text-gray-700 hover:text-[#A10000]"
                                }`}
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3 py-2 rounded-md transition duration-200 ${
                        isActive
                          ? "text-[#A10000] font-bold"
                          : "text-gray-700 hover:text-[#A10000]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
