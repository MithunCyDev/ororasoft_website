import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <nav className="flex gap-6">
        <Link
          href="/"
          className="flex items-center text-md font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="flex items-center text-md font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
        <Link
          href="/services"
          className="flex items-center text-md font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Services
        </Link>

        <Link
          href="/blog"
          className="flex items-center text-md font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Blog
        </Link>
      </nav>
    </div>
  );
}
