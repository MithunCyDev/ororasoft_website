"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { MainNav } from "./main-nav";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PhoneCall, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import whiteLogo from "@/public/orora.png";
import blackLogo from "@/public/ororablack.png";

export function Header() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header
      className={`sticky top-5 z-50 w-[90%] mx-auto rounded-md bg-background dark:bg-gray-950 ${
        isScrolled && "shadow-md shadow-[#00000010] dark:shadow-[#3ec8ff16]"
      } transition-all duration-300`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Left side (Logo) */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={theme === "dark" ? whiteLogo : blackLogo}
              alt="OroraSoft Logo"
              width={theme === "dark" ? 40 : 150}
              height={40}
              className="block h-6 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Centered MainNav */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <MainNav />
        </div>

        {/* Right side (Contact, Theme Toggle, Mobile Menu) */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-flex">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 px-6 border border-gray-300 dark:border-gray-700 hover:bg-gray-800 dark:text-white hover:text-white"
            >
              <PhoneCall className="h-4 w-4" />
              Contact Us
            </Button>
          </Link>
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <Menu className="h-5 w-5" />
                {/* <span className="sr-only">Toggle menu</span> */}
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
                  <button
                    className=" flex items-center justify-center font-medium rounded-md p-2 w-full gap-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-800
                   text-gray-800 dark:text-gray-200 hover:text-white transition-all duration-150"
                  >
                    <PhoneCall className="h-4 w-4 text-[#3EC9FF]" />
                    Contact Us
                  </button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
