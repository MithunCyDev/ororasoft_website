import Link from "next/link";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <nav className="flex gap-6 text-gray-800 dark:text-gray-200">
        <Link
          href="/"
          className="flex items-center text-md font-medium transition-colors hover:text-primary"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="flex items-center text-md font-medium transition-colors hover:text-primary"
        >
          About
        </Link>
        <Link
          href="/services"
          className="flex items-center text-md font-medium transition-colors hover:text-primary"
        >
          Services
        </Link>
        <Link
          href="/careers"
          className="flex items-center text-md font-medium transition-colors hover:text-primary"
        >
          Careers
        </Link>

        <Link
          href="/blog"
          className="flex items-center text-md font-medium  transition-colors hover:text-primary"
        >
          Blog
        </Link>
      </nav>
    </div>
  );
}
