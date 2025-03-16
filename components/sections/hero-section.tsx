import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-20 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 inline-flex items-center rounded-full bg-[#1e293b]/40 px-4 py-1.5">
            <span className="text-sm font-medium text-[#3EC9FF]">YOUR PARTNER IN TECH SUCCESS</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Where Innovation Meets Precision Engineering<span className="text-[#3EC9FF]">.</span>
          </h1>
          <p className="mb-10 text-xl text-gray-300">
            As a trusted leader in digital solutions, we excel in designing and developing custom software and
            applications tailored to meet your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#3EC9FF] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#3EC9FF]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3EC9FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Get Free Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Trusted Companies Logos */}
      <div className="relative z-10 py-6 mt-10 bg-[#0c1322]/80 backdrop-blur-sm">
        <div className="container">
          <p className="text-center text-sm font-medium text-gray-400 mb-4">TRUSTED BY LEADING COMPANIES</p>
          <div className="logos-slide-container overflow-hidden whitespace-nowrap">
            <div className="logos-slide inline-block animate-marquee">
              {[1, 2, 3, 4, 5, 6].map((logo) => (
                <div key={logo} className="inline-block mx-8">
                  <div className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center">
                    <span className="text-gray-300 text-xs">COMPANY {logo}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="logos-slide inline-block animate-marquee2">
              {[1, 2, 3, 4, 5, 6].map((logo) => (
                <div key={logo} className="inline-block mx-8">
                  <div className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center">
                    <span className="text-gray-300 text-xs">COMPANY {logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Image */}
      <div className="relative z-10 mt-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/111.jpg-aCam7uUfBGj7sYmKyXdrSIpYO6K0yU.jpeg"
          alt="Ororasoft Team Collaboration"
          width={2000}
          height={300}
          className="w-full h-[300px] object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </section>
  )
}

