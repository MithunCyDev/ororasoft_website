import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Filter, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Projects | Ororasoft",
  description:
    "Explore our portfolio of successful projects and case studies showcasing our expertise in software development.",
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20 md:py-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Projects<span className="text-[#3EC9FF]">.</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Explore our portfolio of successful projects and discover how we've helped businesses transform their
              digital presence.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </section>

      {/* Project Filters */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Filter Projects</h2>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              </TabsList>

              {/* Move the TabsContent components here, inside the Tabs component */}
              <TabsContent value="all" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Healthcare Management System",
                      description:
                        "A secure platform for healthcare providers to manage patient records, appointments, and billing information.",
                      image: "/placeholder.svg?height=400&width=600&text=Healthcare",
                      tags: ["Healthcare", "Angular", "Express", "PostgreSQL"],
                      link: "/projects/healthcare-management",
                      category: "enterprise",
                    },
                    {
                      title: "Financial Analytics Dashboard",
                      description:
                        "Real-time financial data visualization dashboard with predictive analytics and reporting capabilities.",
                      image: "/placeholder.svg?height=400&width=600&text=Analytics",
                      tags: ["Finance", "Vue.js", "Python", "TensorFlow"],
                      link: "/projects/financial-analytics",
                      category: "web",
                    },
                    {
                      title: "Mobile Banking App",
                      description:
                        "A secure and user-friendly mobile banking application with biometric authentication and real-time transaction tracking.",
                      image: "/placeholder.svg?height=400&width=600&text=Banking+App",
                      tags: ["Finance", "React Native", "Node.js", "MongoDB"],
                      link: "/projects/mobile-banking",
                      category: "mobile",
                    },
                    {
                      title: "Supply Chain Management System",
                      description:
                        "End-to-end supply chain management solution with inventory tracking, order management, and analytics.",
                      image: "/placeholder.svg?height=400&width=600&text=Supply+Chain",
                      tags: ["Logistics", "React", "Java", "Oracle"],
                      link: "/projects/supply-chain",
                      category: "enterprise",
                    },
                    {
                      title: "Real Estate Marketplace",
                      description:
                        "A comprehensive real estate platform with property listings, virtual tours, and agent management.",
                      image: "/placeholder.svg?height=400&width=600&text=Real+Estate",
                      tags: ["Real Estate", "Next.js", "Node.js", "MongoDB"],
                      link: "/projects/real-estate",
                      category: "web",
                    },
                    {
                      title: "Fitness Tracking App",
                      description:
                        "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
                      image: "/placeholder.svg?height=400&width=600&text=Fitness+App",
                      tags: ["Health", "Flutter", "Firebase", "ML Kit"],
                      link: "/projects/fitness-app",
                      category: "mobile",
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Link
                            href={project.link}
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="bg-primary/5 hover:bg-primary/10">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 2 && (
                            <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                              +{project.tags.length - 2}
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>

                        <Link href={project.link} className="inline-flex items-center text-sm font-medium text-primary">
                          View Project
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Web projects would be filtered here */}
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Showing web projects...</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Mobile projects would be filtered here */}
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Showing mobile projects...</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="enterprise" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Enterprise projects would be filtered here */}
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Showing enterprise projects...</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-primary">FEATURED PROJECT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">E-Commerce Platform Redesign</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A complete overhaul of an outdated e-commerce platform, resulting in a 45% increase in conversion rates
              and a 60% improvement in page load times.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=E-Commerce+Platform"
                alt="E-Commerce Platform"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4">
                <Link
                  href="#"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                  E-Commerce
                </Badge>
                <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                  React
                </Badge>
                <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                  Node.js
                </Badge>
                <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                  MongoDB
                </Badge>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Our client, a growing retailer with over 5,000 products, was struggling with an outdated e-commerce
                    platform that was slow, difficult to navigate, and not mobile-friendly. This was resulting in high
                    bounce rates and abandoned carts.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Our Solution</h3>
                  <p className="text-muted-foreground">
                    We developed a custom e-commerce solution with a focus on speed, usability, and mobile
                    responsiveness. Key features included advanced product filtering, personalized recommendations, and
                    a streamlined checkout process.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 rounded-lg border bg-card">
                    <div className="text-3xl font-bold text-primary mb-1">45%</div>
                    <div className="text-sm text-muted-foreground">Conversion Increase</div>
                  </div>
                  <div className="text-center p-4 rounded-lg border bg-card">
                    <div className="text-3xl font-bold text-primary mb-1">60%</div>
                    <div className="text-sm text-muted-foreground">Faster Load Times</div>
                  </div>
                  <div className="text-center p-4 rounded-lg border bg-card">
                    <div className="text-3xl font-bold text-primary mb-1">35%</div>
                    <div className="text-sm text-muted-foreground">Revenue Growth</div>
                  </div>
                </div>

                <Button asChild>
                  <Link href="/projects/e-commerce-platform">
                    View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">More Success Stories</h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse portfolio of projects across various industries and technologies.
            </p>
          </div>
          {/* The content is now managed by the Tabs component above */}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "Next.js",
              "Angular",
              "Vue.js",
              "Node.js",
              "Python",
              "Java",
              "C#",
              "PHP",
              "Ruby",
              "Swift",
              "Kotlin",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Firebase",
              "AWS",
              "Azure",
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg border bg-card">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary text-lg font-bold">{tech.charAt(0)}</span>
                </div>
                <span className="text-center font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-primary">OUR APPROACH</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Deliver Successful Projects</h2>
              <p className="text-muted-foreground mb-8">
                Our proven methodology ensures we deliver high-quality solutions that meet your business objectives and
                exceed your expectations.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
                    <p className="text-muted-foreground">
                      We begin by understanding your business needs, gathering requirements, and creating a detailed
                      project roadmap.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Design & Prototyping</h3>
                    <p className="text-muted-foreground">
                      Our design team creates intuitive user interfaces and experiences, with interactive prototypes for
                      your feedback.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Development</h3>
                    <p className="text-muted-foreground">
                      Our engineers build your solution using modern technologies and best practices, with regular
                      progress updates.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Testing & Launch</h3>
                    <p className="text-muted-foreground">
                      Rigorous testing ensures your product is bug-free and performs optimally before we handle a smooth
                      launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Project+Process"
                alt="Project Process"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Ororasoft delivered an exceptional solution that exceeded our expectations. Their team was professional, responsive, and truly understood our business needs.",
                author: "Sarah Johnson",
                position: "CTO, TechVision Inc.",
                image: "/placeholder.svg?height=80&width=80&text=SJ",
              },
              {
                quote:
                  "Working with Ororasoft transformed our digital presence. Their attention to detail and technical expertise helped us launch our platform ahead of schedule.",
                author: "Michael Chen",
                position: "Founder, Innovate Labs",
                image: "/placeholder.svg?height=80&width=80&text=MC",
              },
              {
                quote:
                  "The team at Ororasoft provided invaluable insights that helped us optimize our application. Their ongoing support has been crucial to our success.",
                author: "Emily Rodriguez",
                position: "Product Manager, FinTech Solutions",
                image: "/placeholder.svg?height=80&width=80&text=ER",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-8 rounded-xl border bg-card">
                <div className="flex items-start mb-6">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.author}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="rounded-3xl bg-gradient-to-r from-primary/80 to-primary p-2">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                  Ready to start your project?
                </h2>
                <p className="mt-4 text-xl text-white/80 mb-8">
                  Contact us today to discuss your requirements and discover how we can help bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

