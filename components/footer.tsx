import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/orora-mRBLwaBeDDmBcy0wSHO7WaRUhekF4L.png"
                alt="OroraSoft Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Transforming ideas into powerful digital solutions. We specialize in custom software development, web
              applications, mobile apps, and enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/ororasoft" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/company/ororasoft" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/ororasoft" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com/ororasoft" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-foreground">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-muted-foreground hover:text-foreground">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-muted-foreground hover:text-foreground">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-muted-foreground hover:text-foreground">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ml" className="text-muted-foreground hover:text-foreground">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="text-muted-foreground hover:text-foreground">
                  DevOps Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/case-studies" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/white-papers" className="text-muted-foreground hover:text-foreground">
                  White Papers
                </Link>
              </li>
              <li>
                <Link
                  href="https://ororasoft.blog"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/documentation" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources/api" className="text-muted-foreground hover:text-foreground">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted-foreground hover:text-foreground">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} OroraSoft. All rights reserved.
            </p>
            <div className="flex justify-start md:justify-end space-x-4 text-sm text-muted-foreground">
              <Link href="/sitemap" className="hover:text-foreground">
                Sitemap
              </Link>
              <Link href="/accessibility" className="hover:text-foreground">
                Accessibility
              </Link>
              <Link href="/cookies" className="hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

