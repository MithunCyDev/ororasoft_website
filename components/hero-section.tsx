import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-12 md:py-24">
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Transforming Ideas Into Innovative Software Solutions
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          We build enterprise-grade applications that drive business growth. Let our expert team turn your vision into
          reality.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-md px-8")}>
            Get Started
          </Link>
          <Link href="/schedule" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-md px-8")}>
            Book a Consultation
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PNG-IOCN-bfGQmivGkPYwiTZvzAqphJsiztoJu9.png"
            alt="OroraSoft Logo"
            fill
            className="object-contain animate-float"
            priority
          />
        </div>
      </div>
    </section>
  )
}

