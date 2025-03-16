"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Ororasoft delivered an exceptional solution that exceeded our expectations. Their team was professional, responsive, and truly understood our business needs.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      image: "/placeholder.svg?height=80&width=80&text=SJ",
      rating: 5,
      industry: "Technology",
    },
    {
      quote:
        "Working with Ororasoft transformed our digital presence. Their attention to detail and technical expertise helped us launch our platform ahead of schedule.",
      author: "Michael Chen",
      position: "Founder, Innovate Labs",
      image: "/placeholder.svg?height=80&width=80&text=MC",
      rating: 5,
      industry: "Startups",
    },
    {
      quote:
        "The team at Ororasoft provided invaluable insights that helped us optimize our application. Their ongoing support has been crucial to our success.",
      author: "Emily Rodriguez",
      position: "Product Manager, FinTech Solutions",
      image: "/placeholder.svg?height=80&width=80&text=ER",
      rating: 4,
      industry: "Finance",
    },
    {
      quote:
        "We've partnered with Ororasoft for three consecutive projects, and they consistently deliver high-quality work. Their expertise in cloud solutions has been a game-changer for our operations.",
      author: "David Park",
      position: "Operations Director, Global Retail",
      image: "/placeholder.svg?height=80&width=80&text=DP",
      rating: 5,
      industry: "Retail",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)
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

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setDirection(-1)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl"></div>

        {/* Decorative Quotes */}
        <div className="absolute top-[15%] left-[10%] text-primary/5 transform -rotate-12">
          <Quote size={80} />
        </div>
        <div className="absolute bottom-[15%] right-[10%] text-primary/5 transform rotate-12">
          <Quote size={80} />
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/10"></div>
        <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-transparent to-primary/10"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-6">
            <Quote className="size-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        {/* Creative Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          {/* Industry Tags */}
          <div className="flex justify-center mb-8 gap-4 flex-wrap">
            {Array.from(new Set(testimonials.map((t) => t.industry))).map((industry, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  testimonials[activeIndex].industry === industry
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {industry}
              </div>
            ))}
          </div>

          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full"
              >
                <div className="grid md:grid-cols-5 gap-8 h-full">
                  {/* Left Side - Client Info */}
                  <div className="md:col-span-2 flex flex-col items-center justify-center p-6 bg-white dark:bg-background border border-primary/10 rounded-xl">
                    <div className="relative mb-6">
                      <div className="size-24 rounded-full overflow-hidden border-4 border-primary/20">
                        <Image
                          src={testimonials[activeIndex].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].author}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {testimonials[activeIndex].industry}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-center">{testimonials[activeIndex].author}</h3>
                    <p className="text-muted-foreground text-center mb-4">{testimonials[activeIndex].position}</p>

                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-5 ${i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Quote */}
                  <div className="md:col-span-3 flex items-center p-8 bg-white dark:bg-background border border-primary/10 rounded-xl relative">
                    <div className="absolute top-6 left-6 text-primary/10">
                      <Quote size={40} />
                    </div>

                    <blockquote className="relative z-10 pt-6">
                      <p className="text-xl italic leading-relaxed">"{testimonials[activeIndex].quote}"</p>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Creative Navigation */}
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              className="group relative w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setAutoplay(false)
                    setActiveIndex(index)
                  }}
                  className="group relative"
                >
                  <div
                    className={`size-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-primary scale-125" : "bg-primary/30 group-hover:bg-primary/50"
                    }`}
                  ></div>
                  <div
                    className={`absolute -inset-2 rounded-full border ${
                      index === activeIndex ? "border-primary/30 scale-100" : "border-transparent scale-0"
                    } transition-all duration-300`}
                  ></div>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group relative w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

