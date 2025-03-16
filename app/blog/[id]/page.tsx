import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Tag, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that will shape the future of web development in the coming years.",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we look ahead to 2025, several key trends are poised to reshape how we build and interact with web applications.</p>
      
      <h2>1. WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) has been gaining traction for years, but 2025 will likely be the year it becomes a mainstream technology in web development. With near-native performance and the ability to use languages beyond JavaScript, WebAssembly will enable more complex applications to run efficiently in the browser.</p>
      <p>Use cases will expand beyond gaming and multimedia to include data visualization, AI-powered features, and complex business applications that previously required desktop software.</p>
      
      <h2>2. AI-Assisted Development</h2>
      <p>Artificial intelligence is already transforming how developers write code, but by 2025, AI assistants will become an integral part of the development workflow. These tools will go beyond code completion to offer architectural suggestions, identify potential bugs before they occur, and even generate entire components based on natural language descriptions.</p>
      <p>This shift will allow developers to focus more on solving business problems and less on boilerplate code, significantly increasing productivity.</p>
      
      <h2>3. Edge Computing and Distributed Web Apps</h2>
      <p>The edge computing paradigm will continue to gain momentum, with more application logic moving closer to the user. Frameworks that support edge rendering and distributed computing will become the standard for high-performance web applications.</p>
      <p>This approach will reduce latency, improve reliability, and enable new types of applications that can function effectively even in areas with limited connectivity.</p>
      
      <h2>4. Web Components and Micro-Frontends</h2>
      <p>As applications grow in complexity, the micro-frontend architecture will become more prevalent. This approach, combined with the maturation of Web Components standards, will allow teams to build more modular and maintainable applications.</p>
      <p>Organizations will increasingly adopt this architecture to enable different teams to work independently while maintaining a cohesive user experience.</p>
      
      <h2>5. Improved Accessibility as Standard</h2>
      <p>Accessibility will no longer be an afterthought but a fundamental aspect of web development. Tools that automatically identify and fix accessibility issues will become more sophisticated, and frameworks will include better built-in support for creating accessible interfaces.</p>
      <p>This shift will be driven by both regulatory requirements and a growing recognition of the business benefits of inclusive design.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting, with technologies that will enable more powerful, performant, and accessible applications. Developers who stay ahead of these trends will be well-positioned to create innovative solutions that meet the evolving needs of users and businesses alike.</p>
      <p>As we navigate this changing landscape, the fundamental principles of good software design—maintainability, scalability, and user-centricity—will remain as important as ever.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200&text=Web+Development+Trends",
    author: "Alex Johnson",
    authorImage: "/placeholder.svg?height=80&width=80&text=AJ",
    authorBio:
      "Alex is a Senior Web Developer with over 10 years of experience in building modern web applications. He specializes in frontend technologies and is passionate about creating intuitive user experiences.",
    date: "2025-03-01",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Web Development", "Trends", "Technology", "WebAssembly", "AI"],
    featured: true,
    relatedPosts: [2, 3, 5],
  },
  {
    id: 2,
    title: "Building Scalable Cloud Solutions: Best Practices",
    excerpt:
      "Learn how to design and implement cloud solutions that can scale with your business needs while maintaining performance and security.",
    content: `
      <p>Building scalable cloud solutions requires careful planning and implementation of best practices to ensure your applications can handle growth while maintaining performance, reliability, and security.</p>
      
      <h2>1. Design for Horizontal Scaling</h2>
      <p>Horizontal scaling (adding more machines) is generally more flexible and cost-effective than vertical scaling (adding more power to existing machines). Design your application architecture to be stateless where possible, allowing you to easily add or remove instances as demand changes.</p>
      
      <h2>2. Implement Effective Caching Strategies</h2>
      <p>Caching is essential for performance at scale. Implement multi-level caching strategies including CDN caching for static assets, application-level caching for computed results, and database query caching to reduce load on your backend systems.</p>
      
      <h2>3. Use Managed Services When Possible</h2>
      <p>Cloud providers offer managed services for databases, message queues, search, and more. These services handle scaling, high availability, and backups for you, allowing your team to focus on building features rather than managing infrastructure.</p>
      
      <h2>4. Implement Proper Monitoring and Alerting</h2>
      <p>Comprehensive monitoring is critical for maintaining reliability at scale. Monitor not just server health but also application performance, user experience metrics, and business KPIs to get a complete picture of your system's health.</p>
      
      <h2>5. Design for Failure</h2>
      <p>In large distributed systems, failures are inevitable. Design your architecture to be resilient by implementing circuit breakers, retries with exponential backoff, and fallback mechanisms to gracefully handle component failures.</p>
      
      <h2>Conclusion</h2>
      <p>Building scalable cloud solutions is a continuous process of improvement and adaptation. By following these best practices and continuously measuring and optimizing your architecture, you can create systems that reliably serve your users even as demand grows.</p>
    `,
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
    content: `
      <p>Artificial Intelligence is revolutionizing software development, from automating routine tasks to enabling entirely new capabilities and workflows.</p>
      
      <h2>1. AI-Assisted Coding</h2>
      <p>AI coding assistants like GitHub Copilot and Amazon CodeWhisperer can generate code snippets, complete functions, and even suggest entire implementations based on comments or function signatures. These tools are becoming increasingly sophisticated, understanding context and coding patterns to provide relevant suggestions.</p>
      
      <h2>2. Automated Testing and Quality Assurance</h2>
      <p>AI is transforming testing by automatically generating test cases, identifying potential bugs before they reach production, and even self-healing applications by automatically applying fixes for known issues.</p>
      
      <h2>3. Intelligent DevOps</h2>
      <p>AI-powered DevOps tools can predict system failures before they occur, automatically scale resources based on anticipated demand, and optimize deployment strategies to minimize disruption.</p>
      
      <h2>4. Natural Language Requirements</h2>
      <p>Advanced language models are beginning to bridge the gap between business requirements and technical implementation, allowing non-technical stakeholders to describe what they need in natural language and having AI translate that into technical specifications or even code.</p>
      
      <h2>5. Personalized User Experiences</h2>
      <p>AI enables applications to adapt to individual users, learning from their behavior to provide personalized experiences, recommendations, and interfaces that evolve over time.</p>
      
      <h2>Conclusion</h2>
      <p>As AI continues to advance, its role in software development will only grow more significant. Developers who embrace these tools and learn to collaborate effectively with AI will be able to build more sophisticated, reliable, and user-centered applications while focusing their human creativity on solving the most challenging and interesting problems.</p>
    `,
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
    id: 5,
    title: "Securing Your Web Applications: Essential Strategies",
    excerpt:
      "Learn the critical security measures every web application should implement to protect user data and prevent breaches.",
    content: `
      <p>Web application security is more important than ever as cyber threats continue to evolve in sophistication and frequency. Implementing robust security measures is essential to protect both your users and your business.</p>
      
      <h2>1. Implement Proper Authentication and Authorization</h2>
      <p>Strong authentication mechanisms, including multi-factor authentication, and fine-grained authorization controls are your first line of defense. Implement the principle of least privilege, ensuring users only have access to the resources they need.</p>
      
      <h2>2. Protect Against Common Vulnerabilities</h2>
      <p>Stay vigilant against the OWASP Top 10 vulnerabilities, including injection attacks, cross-site scripting (XSS), and cross-site request forgery (CSRF). Use parameterized queries, input validation, and output encoding to prevent these common attack vectors.</p>
      
      <h2>3. Secure Your Data</h2>
      <p>Encrypt sensitive data both in transit and at rest. Implement proper key management practices and regularly rotate encryption keys. Be mindful of data retention policies, only storing what you need for as long as you need it.</p>
      
      <h2>4. Regular Security Testing</h2>
      <p>Conduct regular security assessments, including static code analysis, dynamic application security testing, and penetration testing. Consider implementing a bug bounty program to leverage the security community to identify vulnerabilities.</p>
      
      <h2>5. Security Monitoring and Incident Response</h2>
      <p>Implement comprehensive logging and monitoring to detect suspicious activities. Have a well-defined incident response plan ready to execute when security events occur to minimize damage and recovery time.</p>
      
      <h2>Conclusion</h2>
      <p>Security is not a one-time effort but an ongoing process that requires vigilance and adaptation as new threats emerge. By implementing these essential strategies and fostering a security-first culture within your development team, you can significantly reduce the risk of security breaches and protect your users' trust.</p>
    `,
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

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id.toString() === params.id)

  if (!post) {
    return {
      title: "Blog Post Not Found | Ororasoft",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Ororasoft Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id.toString() === params.id)

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((p) => post.relatedPosts?.includes(p.id) && p.id !== post.id)
    : []

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-primary mb-6 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline" className="bg-primary/80 text-white border-none">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-gray-300">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="mr-1 h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">{post.title}</h1>

            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-gray-300 text-sm">{post.authorBio}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
              {/* Social Share Sidebar */}
              <div className="hidden md:block">
                <div className="sticky top-24 space-y-4">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Share this article</div>
                  <div className="space-y-2">
                    <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {/* Using a div with dangerouslySetInnerHTML properly formatted */}
                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Tags */}
                <div className="mt-12 pt-6 border-t">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag className="h-5 w-5 text-muted-foreground" />
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-muted hover:bg-muted/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Mobile Share Buttons */}
                <div className="md:hidden mt-8">
                  <div className="text-sm font-medium text-muted-foreground mb-4">Share this article</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 rounded-xl border bg-card">
              <div className="flex-shrink-0">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={100}
                  height={100}
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-muted-foreground mb-4">{post.authorBio}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    All Posts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-primary/80 text-white border-none">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">{relatedPost.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{relatedPost.excerpt}</p>

                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="inline-flex items-center text-sm font-medium text-primary"
                      >
                        Read More
                        <ArrowLeft className="ml-1 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-primary/80 to-primary p-2">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                    Enjoyed this article?
                  </h2>
                  <p className="mt-4 text-xl text-white/80 mb-8">
                    Subscribe to our newsletter to receive more insights and updates from our team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white flex-1"
                    />
                    <Button className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
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

