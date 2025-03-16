import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldAlert } from "lucide-react"

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <ShieldAlert className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Unauthorized</h1>
        <p className="text-muted-foreground">
          You don't have permission to access this page. Please contact an administrator if you believe this is an
          error.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/login">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

