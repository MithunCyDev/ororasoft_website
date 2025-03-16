"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Layers, LineChart, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description: "Custom web applications and responsive websites built with modern technologies.",
      link: "/services/web-development",
      color: "from-blue-500/20 to-primary/20",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      link: "/services/mobile-apps",
      color: "from-purple-500/20 to-primary/20",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services for optimal performance.",
      link: "/services/cloud-solutions",
      color: "from-green-500/20 to-primary/20",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage data to drive business insights and automation.",
      link: "/services/ai-ml",
      color: "from-orange-500/20 to-primary/20",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software",
      description: "Bespoke software solutions designed to address your specific business challenges.",
      link: "/services/custom-software",
      color: "from-red-500/20 to-primary/20",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      link: "/services/ui-ux-design",
      color: "from-yellow-500/20 to-primary/20",
    },
  ]

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-6">
            <Layers className="size-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-white/20 transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>

                <p className="mb-6 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="inline-flex items-center text-sm font-medium text-primary group-hover:text-foreground transition-colors duration-300"
                >
                  Learn more
                  <ArrowRight
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredService === index ? "translate-x-1" : ""}`}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="px-8 py-6 text-base rounded-full">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

