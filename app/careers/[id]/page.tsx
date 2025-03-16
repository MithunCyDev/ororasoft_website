import Link from "next/link"
import { ArrowLeft, BriefcaseBusiness, CheckCircle2, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
]

export function generateStaticParams() {
  return jobOpenings.map((job) => ({
    id: job.id.toString(),
  }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const job = jobOpenings.find((job) => job.id.toString() === params.id)

  if (!job) {
    return {
      title: "Job Not Found | Ororasoft Careers",
      description: "The requested job opening could not be found.",
    }
  }

  return {
    title: `${job.title} | Ororasoft Careers`,
    description: job.description,
  }
}

export default function JobPage({ params }: { params: { id: string } }) {
  const job = jobOpenings.find((job) => job.id.toString() === params.id)

  if (!job) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The job opening you're looking for doesn't exist or has been filled.
        </p>
        <Button asChild>
          <Link href="/careers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            <Link href="/careers" className="inline-flex items-center text-primary mb-6 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline" className="bg-primary/80 text-white border-none">
                {job.department}
              </Badge>
              <Badge variant="outline" className="bg-white/20 text-white border-none">
                {job.type}
              </Badge>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">{job.title}</h1>

            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                {job.experience}
              </div>
              <div className="flex items-center">
                <BriefcaseBusiness className="mr-2 h-5 w-5" />
                {job.department}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </section>

      {/* Job Details */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
              {/* Main Content */}
              <div>
                <div className="prose prose-lg max-w-none">
                  <h2>About the Role</h2>
                  <p>{job.description}</p>

                  <h2>Responsibilities</h2>
                  <ul>
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>

                  <h2>Requirements</h2>
                  <ul>
                    {job.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>

                  <h2>About Ororasoft</h2>
                  <p>
                    Ororasoft is a leading software development company specializing in creating innovative solutions
                    for businesses across various industries. We're a team of passionate technologists who are committed
                    to delivering high-quality software that makes a difference.
                  </p>
                  <p>
                    Our culture is collaborative, innovative, and focused on continuous learning and growth. We value
                    diversity, inclusion, and work-life balance, and we're committed to creating an environment where
                    everyone can thrive.
                  </p>
                </div>

                <div className="mt-12">
                  <Button asChild size="lg" className="w-full md:w-auto">
                    <Link href={`/careers/${job.id}/apply`}>Apply for this Position</Link>
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-24 space-y-8">
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="text-lg font-bold mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {[
                        "Competitive salary",
                        "Health, dental, and vision insurance",
                        "401(k) matching",
                        "Unlimited PTO",
                        "Remote work options",
                        "Learning stipend",
                        "Wellness program",
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="text-lg font-bold mb-4">Share This Job</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Jobs */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Similar Positions</h2>
            <div className="space-y-4">
              {jobOpenings
                .filter((j) => j.id !== job.id && j.department === job.department)
                .map((similarJob, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
                  >
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
                          {similarJob.department}
                        </Badge>
                        <Badge variant="outline" className="bg-muted hover:bg-muted/80">
                          {similarJob.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold">{similarJob.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {similarJob.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {similarJob.experience}
                        </div>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`/careers/${similarJob.id}`}>
                        View Details <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                      </Link>
                    </Button>
                  </div>
                ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/careers">View All Open Positions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-primary/80 to-primary p-2">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                    Not the right position?
                  </h2>
                  <p className="mt-4 text-xl text-white/80 mb-8">
                    We're always looking for talented individuals to join our team. Send us your resume and we'll keep
                    you in mind for future opportunities.
                  </p>
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/contact">Contact Our Recruiting Team</Link>
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

