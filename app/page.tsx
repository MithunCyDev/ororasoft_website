import { HeroSection } from "@/components/sections/hero-section"
import { TeamSection } from "@/components/sections/team-section"
import { ServicesSection } from "@/components/sections/services-section"
import { DevelopmentLifecycleSection } from "@/components/sections/development-lifecycle"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <DevelopmentLifecycleSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

