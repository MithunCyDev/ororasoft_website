import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that will shape the future of web development in the coming years.",
    image: "/placeholder.svg?height=400&width=600&text=Web+Development+Trends",
    author: "Alex Johnson",
    authorImage: "/placeholder.svg?height=80&width=80&text=AJ",
    date: "2025-03-01",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Web Development", "Trends", "Technology"],
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Cloud Solutions: Best Practices",
    excerpt:
      "Learn how to design and implement cloud solutions that can scale with your business needs while maintaining performance and security.",
    image: "/placeholder.svg?height=400&width=600&text=Cloud+Solutions",
    author: "Sarah Chen",
    authorImage: "/placeholder.svg?height=80&width=80&text=SC",
    date: "2025-02-15",
    readTime: "10 min read",
    category: "Cloud",
    tags: ["Cloud", "Scalability", "AWS", "Azure"],
    featured: true,
  },
  {
    id: 3,
    title: "The Role of AI in Modern Software Development",
    excerpt:
      "Discover how artificial intelligence is transforming the software development process and enabling new capabilities.",
    image: "/placeholder.svg?height=400&width=600&text=AI+in+Development",
    author: "Michael Rodriguez",
    authorImage: "/placeholder.svg?height=80&width=80&text=MR",
    date: "2025-02-01",
    readTime: "12 min read",
    category: "AI",
    tags: ["AI", "Machine Learning", "Software Development"],
    featured: false,
  },
  {
    id: 4,
    title: "Optimizing Database Performance for High-Traffic Applications",
    excerpt:
      "Strategies and techniques to ensure your database can handle high loads while maintaining responsiveness.",
    image: "/placeholder.svg?height=400&width=600&text=Database+Performance",
    author: "Lisa Wang",
    authorImage: "/placeholder.svg?height=80&width=80&text=LW",
    date: "2025-01-20",
    readTime: "9 min read",
    category: "Databases",
    tags: ["Databases", "Performance", "SQL", "NoSQL"],
    featured: false,
  },
  {
    id: 5,
    title: "Securing Your Web Applications: Essential Strategies",
    excerpt:
      "Learn the critical security measures every web application should implement to protect user data and prevent breaches.",
    image: "/placeholder.svg?height=400&width=600&text=Web+Security",
    author: "David Kumar",
    authorImage: "/placeholder.svg?height=80&width=80&text=DK",
    date: "2025-01-10",
    readTime: "11 min read",
    category: "Security",
    tags: ["Security", "Web Development", "Cybersecurity"],
    featured: false,
  },
]

export const metadata = {
  title: "Blog | Ororasoft",
  description: "Latest insights, tutorials, and updates from the Ororasoft team.",
}

export default function BlogPage() {
  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  // Get regular posts (non-featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Insights & Resources</h1>
            <p className="text-xl text-gray-300">
              The latest industry news, technologies, and resources from the Ororasoft team.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
            <div className="grid gap-12 md:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-primary/80 text-white border-none">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <Image
                            src={post.authorImage || "/placeholder.svg"}
                            alt={post.author}
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-sm font-medium text-primary"
                      >
                        Read More
                        <ArrowLeft className="ml-1 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">All Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-primary/80 text-white border-none">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          width={24}
                          height={24}
                          className="h-6 w-6 rounded-full object-cover"
                        />
                      </div>
                      <span className="text-xs font-medium">{post.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary"
                    >
                      Read More
                      <ArrowLeft className="ml-1 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-primary/80 to-primary p-2">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Stay Updated</h2>
                  <p className="mt-4 text-xl text-white/80 mb-8">
                    Subscribe to our newsletter to receive the latest insights and updates from our team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white flex-1"
                    />
                    <button className="bg-white text-primary hover:bg-white/90 px-4 py-2 rounded-md font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

