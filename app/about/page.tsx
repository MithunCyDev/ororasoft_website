import Image from "next/image";
import Link from "next/link";
import { Award, BarChart, Clock, Lightbulb, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { leader } from "@/data/image";

export const metadata = {
  title: "About Us | Ororasoft",
  description:
    "Learn about Ororasoft's mission, values, and the team behind our innovative software solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20 md:py-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Ororasoft<span className="text-[#3EC9FF]">.</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              We're a team of passionate technologists on a mission to transform
              businesses through innovative software solutions.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-primary">
                  OUR PURPOSE
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower businesses with innovative software solutions
                      that drive growth, efficiency, and competitive advantage
                      in an ever-evolving digital landscape.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Lightbulb className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading technology partner known for
                      transformative digital solutions that enable our clients
                      to thrive in a rapidly changing world, backed by
                      integrity, innovation, and excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/10 mix-blend-multiply z-10"></div>
              <Image
                src="/placeholder.svg?height=600&width=800&text=Mission+and+Vision"
                alt="Mission and Vision"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide our decisions, shape our culture, and
              define how we work with our clients and each other.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that drive real business value.",
                iconBg: "from-blue-500/20 to-primary/20",
              },
              {
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in everything we do, from code quality to client communication.",
                iconBg: "from-purple-500/20 to-primary/20",
              },
              {
                title: "Integrity",
                description:
                  "We build relationships based on trust, transparency, and honesty, always doing what's right for our clients.",
                iconBg: "from-green-500/20 to-primary/20",
              },
              {
                title: "Collaboration",
                description:
                  "We believe the best results come from working together—with our clients and as a team.",
                iconBg: "from-orange-500/20 to-primary/20",
              },
              {
                title: "Adaptability",
                description:
                  "We embrace change and continuously evolve our skills and processes to meet new challenges.",
                iconBg: "from-red-500/20 to-primary/20",
              },
              {
                title: "Client Focus",
                description:
                  "We put our clients at the center of everything we do, ensuring their success is our primary goal.",
                iconBg: "from-yellow-500/20 to-primary/20",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-white/20 transition-colors duration-300">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold">{value.title}</h3>

                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From our humble beginnings to where we are today, we've been
              committed to excellence every step of the way.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:mx-auto md:max-w-3xl">
            {[
              {
                year: "2010",
                title: "Foundation",
                description:
                  "Ororasoft was founded with a vision to create transformative software solutions for businesses.",
              },
              {
                year: "2013",
                title: "First Major Client",
                description:
                  "Secured our first major client, a Fortune 500 company, and delivered a game-changing platform.",
              },
              {
                year: "2015",
                title: "Expansion",
                description:
                  "Expanded our team and opened our first international office to serve clients globally.",
              },
              {
                year: "2018",
                title: "Innovation Award",
                description:
                  "Received industry recognition for our innovative approach to software development.",
              },
              {
                year: "2021",
                title: "Strategic Partnerships",
                description:
                  "Formed strategic partnerships with leading technology providers to enhance our service offerings.",
              },
              {
                year: "Today",
                title: "Continuing Growth",
                description:
                  "Constantly evolving and growing, with a focus on emerging technologies and client success.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="mb-12 ml-8 md:ml-0 md:grid md:grid-cols-5 md:gap-8"
              >
                <div className="md:col-span-1 flex md:justify-end">
                  <div className="flex items-center md:flex-col md:items-end">
                    <div className="absolute -left-[9px] md:static md:mr-8 h-4 w-4 rounded-full bg-primary"></div>
                    <div className="font-bold text-xl text-primary md:mt-2">
                      {item.year}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 p-6 rounded-xl bg-white dark:bg-background border border-primary/10">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Leadership Team
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who drive our vision forward and
              ensure we deliver exceptional results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Mithun Cy",
                position: "Chief Executive Officer",
                bio: "With over 10+ years of experience in technology leadership, Alex guides our strategic vision and growth.",
                image: leader.ceo,
              },
              {
                name: "Sarah Chen",
                position: "Chief Technology Officer",
                bio: "A brilliant technologist with a passion for innovation, Sarah leads our technical direction and R&D efforts.",
                image: "/placeholder.svg?height=300&width=300&text=SC",
              },
              {
                name: "Michael Rodriguez",
                position: "Chief Operating Officer",
                bio: "Michael ensures our operations run smoothly and efficiently, with a focus on delivering client value.",
                image: "/placeholder.svg?height=300&width=300&text=MR",
              },
              {
                name: "Emily Park",
                position: "VP of Product",
                bio: "Emily translates client needs into exceptional products, with a keen eye for usability and design.",
                image: "/placeholder.svg?height=300&width=300&text=EP",
              },
              {
                name: "David Kumar",
                position: "VP of Client Success",
                bio: "David ensures our clients receive outstanding service and achieve their business objectives.",
                image: "/placeholder.svg?height=300&width=300&text=DK",
              },
              {
                name: "Olivia Martinez",
                position: "Director of Engineering",
                bio: "Olivia leads our engineering teams, ensuring technical excellence and innovation in every project.",
                image: "/placeholder.svg?height=300&width=300&text=OM",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4 justify-center">
                      {/* Social media links would go here */}
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <BarChart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact By The Numbers
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're proud of the impact we've made for our clients and the
              growth we've achieved together.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "250+", label: "Clients Served" },
              { value: "500+", label: "Projects Completed" },
              { value: "12+", label: "Years in Business" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-background border border-primary/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-3xl bg-gradient-to-r from-primary/80 to-primary p-2">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                  Ready to work with us?
                </h2>
                <p className="mt-4 text-xl text-white/80 mb-8">
                  Let's discuss how Ororasoft can help you achieve your business
                  goals with innovative software solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <Link href="/contact">Contact Us Today</Link>
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
  );
}
