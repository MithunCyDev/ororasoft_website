"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface CalendlyEmbedProps {
  username: string
}

export default function CalendlyEmbed({ username }: CalendlyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const calendlyUrl = `https://calendly.com/${username}`

  useEffect(() => {
    // Load the Calendly script
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => setIsLoaded(true)
    head?.appendChild(script)

    return () => {
      // Clean up on unmount
      if (head?.contains(script)) {
        head.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      {!isLoaded && (
        <div className="w-full h-[600px] flex items-center justify-center">
          <div className="space-y-4 w-full max-w-md">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-80 w-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      )}
      <div
        className="calendly-inline-widget"
        data-url={`${calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=3EC9FF`}
        style={{
          minWidth: "320px",
          height: "630px",
          display: isLoaded ? "block" : "none",
        }}
      />
    </>
  )
}

