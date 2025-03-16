import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  File,
  Globe,
  Laptop,
  Layers,
  LineChart,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Services | Ororasoft",
  description:
    "Explore our comprehensive range of software development and technology services designed to drive your business forward.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20 md:py-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Services<span className="text-[#3EC9FF]">.</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Comprehensive software development and technology solutions tailored to your unique business challenges.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Layers className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a full spectrum of technology services to help you innovate, grow, and stay competitive.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Web Development",
                description: "Custom web applications and responsive websites built with modern technologies.",
                link: "#web-development",
                color: "from-blue-500/20 to-primary/20",
              },
              {
                icon: <Smartphone className="h-6 w-6" />,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android.",
                link: "#mobile-apps",
                color: "from-purple-500/20 to-primary/20",
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and DevOps services for optimal performance.",
                link: "#cloud-solutions",
                color: "from-green-500/20 to-primary/20",
              },
              {
                icon: <LineChart className="h-6 w-6" />,
                title: "AI & Machine Learning",
                description: "Intelligent solutions that leverage data to drive business insights and automation.",
                link: "#ai-ml",
                color: "from-orange-500/20 to-primary/20",
              },
              {
                icon: <Code className="h-6 w-6" />,
                title: "Custom Software",
                description: "Bespoke software solutions designed to address your specific business challenges.",
                link: "#custom-software",
                color: "from-red-500/20 to-primary/20",
              },
              {
                icon: <Laptop className="h-6 w-6" />,
                title: "UI/UX Design",
                description: "User-centered design that creates intuitive and engaging digital experiences.",
                link: "#ui-ux-design",
                color: "from-yellow-500/20 to-primary/20",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1"
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
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      <section id="web-development" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-primary">WEB DEVELOPMENT</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Modern Web Applications</h2>
              <p className="text-muted-foreground mb-6">
                We build responsive, high-performance web applications that provide exceptional user experiences across
                all devices. Our web development services include:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Progressive Web Applications (PWAs)</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>E-commerce Platforms</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Custom Content Management Systems</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Web Portals and Dashboards</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Real-time Applications</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">
                  Discuss Your Web Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Web+Development"
                alt="Web Development"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="mobile-apps"
        className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10"
      >
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="relative rounded-2xl overflow-hidden md:order-1">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Mobile+App+Development"
                alt="Mobile App Development"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-primary">MOBILE APPS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Mobile Experiences</h2>
              <p className="text-muted-foreground mb-6">
                We develop intuitive, feature-rich mobile applications that engage users and drive business growth. Our
                mobile app development services include:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Native iOS and Android Applications</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Cross-platform Solutions (React Native, Flutter)</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Mobile App UI/UX Design</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>App Store Optimization</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Maintenance and Support</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">
                  Start Your Mobile Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="cloud-solutions" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-primary">CLOUD SOLUTIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Scalable Cloud Infrastructure</h2>
              <p className="text-muted-foreground mb-6">
                We help businesses leverage the power of cloud computing to increase efficiency, enhance security, and
                reduce costs. Our cloud services include:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Cloud Migration & Strategy</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>DevOps Implementation</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Infrastructure as Code (IaC)</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Microservices Architecture</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Cloud Security & Compliance</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">
                  Explore Cloud Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Cloud+Solutions"
                alt="Cloud Solutions"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <Tabs defaultValue="frontend" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="cloud">Cloud & DevOps</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Material UI", "Redux"].map(
                  (tech, index) => (
                    <div key={index} className="flex flex-col items-center p-4 rounded-lg border bg-card">
                      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                        <span className="text-primary text-lg font-bold">{tech.charAt(0)}</span>
                      </div>
                      <span className="text-center font-medium">{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </TabsContent>
            <TabsContent value="backend" className="mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {["Node.js", "Python", "Java", "C#", "GraphQL", "MongoDB", "PostgreSQL", "MySQL"].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center p-4 rounded-lg border bg-card">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-primary text-lg font-bold">{tech.charAt(0)}</span>
                    </div>
                    <span className="text-center font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mobile" className="mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {["React Native", "Flutter", "Swift", "Kotlin", "Android SDK", "iOS SDK", "Firebase", "MobX"].map(
                  (tech, index) => (
                    <div key={index} className="flex flex-col items-center p-4 rounded-lg border bg-card">
                      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                        <span className="text-primary text-lg font-bold">{tech.charAt(0)}</span>
                      </div>
                      <span className="text-center font-medium">{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </TabsContent>
            <TabsContent value="cloud" className="mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"].map(
                  (tech, index) => (
                    <div key={index} className="flex flex-col items-center p-4 rounded-lg border bg-card">
                      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                        <span className="text-primary text-lg font-bold">{tech.charAt(0)}</span>
                      </div>
                      <span className="text-center font-medium">{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <File className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology ensures consistent, high-quality results for every project.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-primary/20"></div>

            {[
              {
                title: "Discovery & Planning",
                description:
                  "We begin by understanding your business needs, gathering requirements, and creating a detailed project roadmap.",
                number: "01",
              },
              {
                title: "Design & Prototyping",
                description:
                  "Our design team creates intuitive user interfaces and experiences, with interactive prototypes for your feedback.",
                number: "02",
              },
              {
                title: "Development",
                description:
                  "Our engineers build your solution using modern technologies and best practices, with regular progress updates.",
                number: "03",
              },
              {
                title: "Testing & QA",
                description:
                  "Rigorous testing ensures your product is bug-free, secure, and performs optimally across all devices.",
                number: "04",
              },
              {
                title: "Deployment",
                description:
                  "We handle the smooth launch of your product, ensuring everything runs perfectly in the production environment.",
                number: "05",
              },
              {
                title: "Maintenance & Support",
                description:
                  "Our relationship continues with ongoing support, updates, and improvements to keep your product running smoothly.",
                number: "06",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? "pr-8 md:pl-0 md:pr-12 text-right md:mr-auto md:ml-0 md:w-1/2" : "pl-8 md:pl-12 md:pr-0 text-left md:ml-auto md:mr-0 md:w-1/2"}`}
              >
                <div
                  className={`absolute top-5 ${index % 2 === 0 ? "right-0 md:-right-4" : "left-0 md:-left-4"} h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white z-10`}
                >
                  <span className="text-sm font-bold">{step.number}</span>
                </div>
                <div className="p-6 rounded-xl bg-white dark:bg-background border border-primary/10">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
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
                    <Link href="/about">Learn About Us</Link>
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

