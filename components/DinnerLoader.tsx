"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function DinnerLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 500) // Add a small delay to make the loader visible
    }

    // Create a custom event listener for route changes
    window.addEventListener("routeChangeStart", handleStart)
    window.addEventListener("routeChangeComplete", handleComplete)
    window.addEventListener("routeChangeError", handleComplete)

    return () => {
      window.removeEventListener("routeChangeStart", handleStart)
      window.removeEventListener("routeChangeComplete", handleComplete)
      window.removeEventListener("routeChangeError", handleComplete)
    }
  }, [])

  // Also track changes to pathname and search params
  useEffect(() => {
    setIsLoading(false)
  }, [pathname, searchParams])

  if (!isLoading) return null

  return (
    <div className="fixed top-16 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-b-lg px-6 py-3 flex items-center space-x-3 transition-all duration-300 ease-in-out">
        <div className="relative w-8 h-8">
          {/* Plate */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700"></div>

          {/* Food items that rotate */}
          <div className="absolute top-1 left-1 w-6 h-6 animate-spin">
            <div className="absolute top-0 left-2 w-2 h-2 rounded-full bg-red-500"></div>
            <div className="absolute top-2 right-0 w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="absolute bottom-0 left-2 w-2 h-2 rounded-full bg-green-500"></div>
            <div className="absolute top-2 left-0 w-2 h-2 rounded-full bg-blue-500"></div>
          </div>
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Preparing your page...</span>
      </div>
    </div>
  )
}

