import Image from "next/image";
import "../../styles/globals.css";
import logoString from "@/public/logoString.png";
import string from "@/public/string3.png";
import { logos } from "@/data/data";
import { useTheme } from "next-themes";

export function HeroSection() {
  // const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute opacity-30 -z-4 dark:opacity-5 top-2 right-0 rotate-180">
        <Image src={logoString} alt="string" width={3000} />
      </div>

      <div className="container relative z-10 py-14 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-slate-100 dark:bg-[#192232] px-4 py-1.5 border dark:border-gray-700">
            <span className="text-sm font-medium dark:text-primary">
              YOUR PARTNER IN TECH SUCCESS
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-5xl md:text-6xl">
            Where Innovation Meets Precision Engineering
            <span className="text-primary">.</span>
          </h1>
          <p className="mb-10 text-xl text-gray-600 dark:text-gray-300">
            As a trusted leader in digital solutions, we excel in designing and
            developing custom software and applications tailored to meet your
            unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-center justify-center">
            <a
              href="/schedule"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#3EC9FF]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3EC9FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Get Free Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Trusted Companies Logos */}
      <div className="relative z-10 py-6 mt-10">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {logos.map((logo) => (
              <div key={logo.id} className="inline-block mx-8">
                <div className="h-16 w-40  rounded flex items-center justify-center">
                  {/* Render the image */}
                  <Image
                    src={logo.logoLight}
                    alt={logo.name}
                    width={100}
                    height={50}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Image */}
      <div className="relative z-10 mt-12 opacity-90">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/111.jpg-aCam7uUfBGj7sYmKyXdrSIpYO6K0yU.jpeg"
          alt="Ororasoft Team Collaboration"
          width={2000}
          height={300}
          className="w-full h-[400px] object-cover"
          priority
        />
      </div>
    </section>
  );
}
