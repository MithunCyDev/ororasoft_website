import Link from "next/link"
import { CalendarIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let's discuss how our custom software solutions can help you achieve your business goals.
        </p>
        <Link href="/schedule" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "rounded-md px-8")}>
          <CalendarIcon className="mr-2 h-5 w-5" />
          Schedule a Free Consultation
        </Link>
      </div>
    </section>
  )
}

