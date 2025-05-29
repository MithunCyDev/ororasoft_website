"use client";

import Link from "next/link";
import Image from "next/image";
import { MainNav } from "./main-nav";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PhoneCall, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { logos } from "@/data/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // After mounting, we can safely show the theme-dependent UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full mx-auto bg-background dark:bg-gray-950 ${
        isScrolled && "shadow-md shadow-[#00000010] dark:shadow-[#3ec8ff16]"
      } transition-all duration-300`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Left side (Logo) */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={
                mounted && resolvedTheme === "dark" ? logos.white : logos.black
              }
              alt="OroraSoft Logo"
              width={150}
              height={40}
              className="block h-6 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Centered MainNav */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <MainNav />
        </div>

        {/* Right side (Contact, Mobile Menu) */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-flex">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 px-6 border border-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <PhoneCall className="h-4 w-4" />
              Contact Us
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-xl font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-xl font-medium transition-colors hover:text-primary"
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="text-xl font-medium transition-colors hover:text-primary"
                >
                  Services
                </Link>

                <Link
                  href="/careers"
                  className="flex items-center text-xl font-medium transition-colors hover:text-primary"
                >
                  Careers
                </Link>

                <Link
                  href="https://ororasoft.blog"
                  className="text-xl font-medium transition-colors hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </Link>

                <Link href="/contact" className="mt-4">
                  <Button
                    className="flex items-center justify-center font-medium rounded-md p-2 w-full gap-2 border border-gray-300  hover:bg-gray-800
                   text-gray-800 hover:text-white transition-all duration-150"
                  >
                    <PhoneCall className="h-4 w-4 " />
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
