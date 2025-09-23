"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import MainLogo from "../../../public/logos/Logo.svg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-0 py-3 md:py-1">
        <Link href="/" className="flex items-center">
          <Image
            src={MainLogo}
            alt="Logo"
            className="h-[40px] w-auto md:h-[80px]"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Me" },
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-2 rounded-md transition duration-200 hover:text-[#A10000]"
              >
                {item.label}
              </Link>
            </li>
          ))}
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
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Me" },
                  { href: "/services", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 rounded-md transition duration-200 hover:text-[#A10000]"
                  >
                    {item.label}
                  </Link>
                ))}
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
