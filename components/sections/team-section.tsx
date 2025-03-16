"use client"

import { useState } from "react"
import Image from "next/image"
import { Users, Award, Lightbulb, Zap } from "lucide-react"

export function TeamSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-6">
            <Users className="size-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Expert Team</h2>
          <div className="w-24 h-1 bg-primary rounded mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Our diverse team of experts brings together years of experience in software development, design, and
            technology innovation.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-white dark:bg-background border border-primary/10 transform transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10">
                    <Award className="size-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Industry Experience</h3>
                  <p className="text-muted-foreground">
                    With over a decade of experience in the tech industry, our team has worked with startups and Fortune
                    500 companies alike.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-background border border-primary/10 transform transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10">
                    <Lightbulb className="size-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovative Thinking</h3>
                  <p className="text-muted-foreground">
                    We approach each project with fresh perspectives, constantly exploring new technologies and
                    methodologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-background border border-primary/10 transform transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10">
                    <Zap className="size-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Agile Development</h3>
                  <p className="text-muted-foreground">
                    Our agile methodology ensures rapid development cycles with continuous feedback and improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden border border-primary/10 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 transition-opacity duration-300 opacity-60 group-hover:opacity-40"></div>

            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/111.jpg-BtVpBda34D75gmTVeCyZkeMLI1fbS4.jpeg"
              alt="Ororasoft Team Working Together"
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <h3 className="text-2xl font-bold text-white mb-2">Collaborative Workspace</h3>
              <p className="text-white/90">
                Our modern workspace is designed to foster creativity, collaboration, and innovation.
              </p>
            </div>

            <div
              className={`absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium z-20 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
              Join Our Team
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white dark:bg-background border border-primary/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-background border border-primary/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-background border border-primary/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">12+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-background border border-primary/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

