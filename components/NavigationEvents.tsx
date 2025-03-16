"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`

    // Dispatch custom events for route changes
    window.dispatchEvent(new CustomEvent("routeChangeStart", { detail: url }))

    // Simulate a delay for the navigation
    const timeout = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("routeChangeComplete", { detail: url }))
    }, 100)

    return () => clearTimeout(timeout)
  }, [pathname, searchParams])

  return null
}

