import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  Coffee,
  Globe,
  GraduationCap,
  Heart,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Careers | Ororasoft",
  description:
    "Join our team of talented professionals and build innovative solutions that make a difference. Explore current job openings and learn about our company culture.",
};

// This would typically come from a database or API
const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA (Remote Available)",
    type: "Full-time",
    experience: "5+ years",
    description:
      "We're looking for a Senior Frontend Developer to join our team and help build beautiful, responsive, and performant user interfaces for our clients.",
    responsibilities: [
      "Design and implement user interfaces using React, Next.js, and other modern frontend technologies",
      "Collaborate with designers, product managers, and backend developers to deliver high-quality features",
      "Write clean, maintainable, and well-tested code",
      "Mentor junior developers and provide technical leadership",
      "Stay up-to-date with the latest frontend technologies and best practices",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in React, TypeScript, and modern JavaScript",
      "Experience with Next.js, Tailwind CSS, and state management libraries",
      "Good understanding of web performance optimization techniques",
      "Excellent problem-solving and communication skills",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "New York, NY (Remote Available)",
    type: "Full-time",
    experience: "3+ years",
    description:
      "We're seeking a Backend Developer to help design and build scalable and reliable APIs and services for our clients.",
    responsibilities: [
      "Design and implement RESTful APIs and microservices",
      "Work with databases and optimize queries for performance",
      "Implement authentication, authorization, and security measures",
      "Write automated tests and documentation",
      "Collaborate with frontend developers to integrate APIs",
    ],
    requirements: [
      "3+ years of experience in backend development",
      "Strong proficiency in Node.js, Python, or Java",
      "Experience with SQL and NoSQL databases",
      "Knowledge of API design principles and best practices",
      "Familiarity with cloud platforms like AWS or Azure",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "We're looking for a talented UX/UI Designer to create intuitive and engaging user experiences for our clients' products.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve design systems",
      "Stay up-to-date with design trends and best practices",
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating user-centered design process",
      "Understanding of accessibility standards and responsive design",
      "Excellent communication and presentation skills",
    ],
    featured: false,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Operations",
    location: "Chicago, IL (Remote Available)",
    type: "Full-time",
    experience: "4+ years",
    description:
      "We're seeking a DevOps Engineer to help automate and optimize our infrastructure and deployment processes.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure using Infrastructure as Code",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices",
      "Collaborate with development teams to improve deployment processes",
    ],
    requirements: [
      "4+ years of experience in DevOps or SRE roles",
      "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Experience with containerization and orchestration (Docker, Kubernetes)",
      "Proficiency in scripting languages (Python, Bash)",
      "Understanding of networking, security, and system administration",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Management",
    location: "Austin, TX (Remote Available)",
    type: "Full-time",
    experience: "5+ years",
    description:
      "We're looking for an experienced Project Manager to lead our client projects from inception to successful delivery.",
    responsibilities: [
      "Plan and execute projects according to deadlines and budgets",
      "Coordinate internal resources and third parties for flawless execution",
      "Manage changes to project scope, schedule, and costs",
      "Report and escalate issues to management as needed",
      "Create and maintain comprehensive project documentation",
    ],
    requirements: [
      "5+ years of experience in project management, preferably in software development",
      "PMP certification or equivalent",
      "Strong knowledge of project management methodologies (Agile, Scrum)",
      "Excellent client-facing and internal communication skills",
      "Solid organizational and time management skills",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description:
      "We're seeking a Marketing Specialist to help grow our brand and generate leads for our services.",
    responsibilities: [
      "Develop and implement marketing strategies",
      "Create content for various channels (blog, social media, email)",
      "Analyze marketing data and optimize campaigns",
      "Collaborate with sales team to generate and nurture leads",
      "Stay up-to-date with digital marketing trends",
    ],
    requirements: [
      "2+ years of experience in digital marketing",
      "Knowledge of SEO, content marketing, and social media marketing",
      "Experience with marketing automation tools",
      "Strong analytical and creative skills",
      "Excellent written and verbal communication",
    ],
    featured: false,
  },
];

// Get featured jobs
const featuredJobs = jobOpenings.filter((job) => job.featured);

// Get all departments
const departments = Array.from(
  new Set(jobOpenings.map((job) => job.department))
);

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20 md:py-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Join Our Team<span className="text-[#3EC9FF]">.</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Build your career at Ororasoft and work on innovative solutions
              that make a difference. We're always looking for talented
              individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <a href="#openings">View Open Positions</a>
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
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-primary">
                WHY JOIN US
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Culture & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Ororasoft, we believe in creating an environment where talented
              individuals can thrive, innovate, and grow both personally and
              professionally.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Collaborative Environment",
                description:
                  "We foster a culture of collaboration, where diverse perspectives are valued and everyone's voice is heard.",
              },
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                description:
                  "We encourage continuous learning and provide resources for professional development and growth.",
              },
              {
                icon: Globe,
                title: "Remote-First",
                description:
                  "We embrace remote work and provide the tools and support needed to succeed from anywhere in the world.",
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description:
                  "We value work-life balance and offer flexible schedules to help our team members thrive in all aspects of life.",
              },
              {
                icon: CheckCircle2,
                title: "Impact-Driven",
                description:
                  "We work on projects that make a real difference, solving complex problems for businesses and users.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Career Growth",
                description:
                  "We provide clear career paths and opportunities for advancement based on skills and contributions.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border bg-card hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-primary">
                  BENEFITS & PERKS
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Take Care of Our Team
              </h2>
              <p className="text-muted-foreground mb-8">
                We offer a comprehensive benefits package designed to support
                your health, wealth, and well-being.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Health & Wellness",
                    items: [
                      "Comprehensive health insurance",
                      "Dental and vision coverage",
                      "Mental health support",
                      "Wellness stipend",
                    ],
                  },
                  {
                    icon: Coffee,
                    title: "Work & Life",
                    items: [
                      "Flexible work hours",
                      "Remote work options",
                      "Unlimited PTO",
                      "Paid parental leave",
                    ],
                  },
                  {
                    icon: Building2,
                    title: "Financial Benefits",
                    items: [
                      "Competitive salary",
                      "401(k) matching",
                      "Stock options",
                      "Performance bonuses",
                    ],
                  },
                  {
                    icon: GraduationCap,
                    title: "Growth & Development",
                    items: [
                      "Learning stipend",
                      "Conference budget",
                      "Mentorship program",
                      "Career advancement",
                    ],
                  },
                ].map((benefit, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <benefit.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-bold">{benefit.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Team+Benefits"
                alt="Team Benefits"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-primary">
                LIFE AT ORORASOFT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a glimpse of our company culture and the amazing people who
              make Ororasoft a great place to work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Team+Photo+1"
                  alt="Team Photo"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Team+Photo+2"
                  alt="Team Photo"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Team+Photo+3"
                  alt="Team Photo"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Team+Photo+4"
                  alt="Team Photo"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Team+Photo+5"
                  alt="Team Photo"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Team+Photo+6"
                  alt="Team Photo"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Team+Photo+7"
                  alt="Team Photo"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Team+Photo+8"
                  alt="Team Photo"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-primary">
                EMPLOYEE TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Team Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear directly from our team members about their experiences
              working at Ororasoft.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Working at Ororasoft has been an incredible journey. The collaborative environment and challenging projects have helped me grow both professionally and personally.",
                name: "Alex Chen",
                position: "Senior Frontend Developer",
                tenure: "3 years at Ororasoft",
                image: "/placeholder.svg?height=80&width=80&text=AC",
              },
              {
                quote:
                  "What I love most about Ororasoft is the emphasis on work-life balance and continuous learning. I've been able to advance my career while maintaining time for my family and personal interests.",
                name: "Sarah Johnson",
                position: "Project Manager",
                tenure: "2 years at Ororasoft",
                image: "/placeholder.svg?height=80&width=80&text=SJ",
              },
              {
                quote:
                  "The remote-first culture at Ororasoft is truly empowering. I've been able to work with talented people from around the world while living in a location that works best for me and my family.",
                name: "Miguel Rodriguez",
                position: "Backend Developer",
                tenure: "1.5 years at Ororasoft",
                image: "/placeholder.svg?height=80&width=80&text=MR",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-8 rounded-xl border bg-card">
                <blockquote className="text-muted-foreground italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.tenure}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section
        id="openings"
        className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10"
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-primary">
                OPEN POSITIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for
              your skills and career goals.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search positions..." className="pl-10" />
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
                <TabsTrigger value="all">All Departments</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
              </TabsList>

              {/* Featured Jobs */}
              <div className="mt-8 mb-12">
                <h3 className="text-2xl font-bold mb-6">Featured Positions</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {featuredJobs.map((job, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge
                            variant="outline"
                            className="bg-primary/10 hover:bg-primary/20"
                          >
                            {job.department}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-muted hover:bg-muted/80"
                          >
                            {job.type}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {job.experience}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {job.description}
                        </p>

                        <Button asChild>
                          <Link href={`/careers/${job.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Jobs */}
              <TabsContent value="all">
                <h3 className="text-2xl font-bold mb-6">All Open Positions</h3>
                <div className="space-y-4">
                  {jobOpenings
                    .filter((job) => !job.featured)
                    .map((job, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
                      >
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className="bg-primary/10 hover:bg-primary/20"
                            >
                              {job.department}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-muted hover:bg-muted/80"
                            >
                              {job.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={`/careers/${job.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="engineering">
                <h3 className="text-2xl font-bold mb-6">
                  Engineering Positions
                </h3>
                <div className="space-y-4">
                  {jobOpenings
                    .filter(
                      (job) => job.department === "Engineering" && !job.featured
                    )
                    .map((job, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
                      >
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className="bg-primary/10 hover:bg-primary/20"
                            >
                              {job.department}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-muted hover:bg-muted/80"
                            >
                              {job.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={`/careers/${job.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="design">
                <h3 className="text-2xl font-bold mb-6">Design Positions</h3>
                <div className="space-y-4">
                  {jobOpenings
                    .filter((job) => job.department === "Design")
                    .map((job, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
                      >
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className="bg-primary/10 hover:bg-primary/20"
                            >
                              {job.department}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-muted hover:bg-muted/80"
                            >
                              {job.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={`/careers/${job.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="management">
                <h3 className="text-2xl font-bold mb-6">
                  Management Positions
                </h3>
                <div className="space-y-4">
                  {jobOpenings
                    .filter((job) => job.department === "Management")
                    .map((job, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
                      >
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className="bg-primary/10 hover:bg-primary/20"
                            >
                              {job.department}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-muted hover:bg-muted/80"
                            >
                              {job.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={`/careers/${job.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-primary">
                APPLICATION PROCESS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How to Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our hiring process is designed to be transparent, efficient, and
              respectful of your time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Application",
                description:
                  "Submit your application through our careers page with your resume and cover letter.",
              },
              {
                step: "2",
                title: "Initial Interview",
                description:
                  "If your profile matches our requirements, we'll schedule an initial interview to get to know you better.",
              },
              {
                step: "3",
                title: "Technical Assessment",
                description:
                  "Depending on the role, you may be asked to complete a technical assessment or case study.",
              },
              {
                step: "4",
                title: "Final Interview",
                description:
                  "Meet with the team you'll be working with and discuss your potential role in more detail.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl border bg-card hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-5 left-8 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              After the final interview, we aim to make a decision within one
              week. If you're selected, we'll send you an offer letter with all
              the details about your role, compensation, and benefits.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-primary">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about working at Ororasoft and
              our hiring process.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is the interview process like?
                </AccordionTrigger>
                <AccordionContent>
                  Our interview process typically consists of an initial
                  screening call, followed by a technical or skills assessment,
                  and finally a team interview. The entire process usually takes
                  2-3 weeks, and we strive to provide feedback at each stage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do you offer remote work options?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we are a remote-first company. While we have offices in
                  several locations, most of our team members work remotely. We
                  provide the tools and support needed to work effectively from
                  anywhere.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What benefits do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer a comprehensive benefits package including health
                  insurance, dental and vision coverage, 401(k) matching,
                  unlimited PTO, paid parental leave, learning stipends, and
                  more. Benefits may vary by location and employment status.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do you support professional development?
                </AccordionTrigger>
                <AccordionContent>
                  We support professional development through learning stipends,
                  conference budgets, internal mentorship programs, regular
                  skill-sharing sessions, and clear career advancement paths. We
                  encourage continuous learning and growth.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What is your company culture like?
                </AccordionTrigger>
                <AccordionContent>
                  Our culture is collaborative, innovative, and focused on
                  work-life balance. We value diverse perspectives, open
                  communication, and mutual respect. We work hard but also
                  prioritize well-being and personal time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you sponsor work visas?</AccordionTrigger>
                <AccordionContent>
                  Yes, we do sponsor work visas for exceptional candidates when
                  necessary. This is evaluated on a case-by-case basis depending
                  on the role and location.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                  Ready to Join Our Team?
                </h2>
                <p className="mt-4 text-xl text-white/80 mb-8">
                  Explore our open positions and take the next step in your
                  career journey with Ororasoft.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <a href="#openings">View Open Positions</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Link href="/contact">Contact Recruiting Team</Link>
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
