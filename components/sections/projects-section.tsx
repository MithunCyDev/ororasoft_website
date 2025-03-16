"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Star, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with advanced product filtering, user authentication, and payment processing.",
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "/projects/e-commerce",
      metrics: {
        rating: 4.9,
        clients: 12,
        duration: "4 months",
      },
    },
    {
      title: "Healthcare Management System",
      description:
        "A secure platform for healthcare providers to manage patient records, appointments, and billing information.",
      image: "/placeholder.svg?height=400&width=600&text=Healthcare",
      tags: ["Angular", "Express", "PostgreSQL", "Docker"],
      link: "/projects/healthcare",
      metrics: {
        rating: 4.8,
        clients: 8,
        duration: "6 months",
      },
    },
    {
      title: "Financial Analytics Dashboard",
      description:
        "Real-time financial data visualization dashboard with predictive analytics and reporting capabilities.",
      image: "/placeholder.svg?height=400&width=600&text=Analytics",
      tags: ["Vue.js", "Python", "TensorFlow", "AWS"],
      link: "/projects/analytics",
      metrics: {
        rating: 5.0,
        clients: 5,
        duration: "3 months",
      },
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10 overflow-hidden"
    >
      <div className="container relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full opacity-20 -z-10"></div>

        <div className="mx-auto max-w-2xl text-center mb-16 relative">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">Explore our recent work and success stories</p>
        </div>

        {/* Creative Project Layout */}
        <div className="relative">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-16 ${index % 2 === 0 ? "lg:ml-0 lg:mr-auto" : "lg:ml-auto lg:mr-0"} max-w-4xl`}
            >
              <div
                className={`group relative overflow-hidden rounded-xl border bg-background transition-all duration-500 hover:-translate-y-1 ${
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                }`}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="lg:grid lg:grid-cols-2 lg:items-center">
                  <div className={`aspect-video overflow-hidden relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Link
                        href={project.link}
                        className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="size-5" />
                      </Link>
                    </div>

                    {/* Project Metrics Badges */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                        <Star className="size-4 mr-1 text-yellow-400" />
                        <span>{project.metrics.rating}</span>
                      </div>
                      <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                        <Users className="size-4 mr-1" />
                        <span>{project.metrics.clients} clients</span>
                      </div>
                      <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                        <Clock className="size-4 mr-1" />
                        <span>{project.metrics.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1">
                      <span className="text-xs font-medium text-primary">Project {index + 1}</span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                    <p className="mb-4 text-muted-foreground">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-primary/5 hover:bg-primary/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={project.link} className="inline-flex items-center text-sm font-medium text-primary">
                      View Case Study
                      <ArrowRight
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeProject === index ? "translate-x-1" : ""}`}
                      />
                    </Link>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div
                  className={`absolute ${index % 2 === 0 ? "top-0 right-0" : "top-0 left-0"} w-24 h-24 overflow-hidden`}
                >
                  <div
                    className={`absolute ${index % 2 === 0 ? "-bottom-12 -left-12" : "-bottom-12 -right-12"} w-24 h-24 bg-primary/10 rotate-45 transform origin-top-left`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base rounded-full border-primary/20 hover:border-primary/40"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

