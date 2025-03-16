"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ConsultationWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const dismissed = localStorage.getItem("consultationWidgetDismissed")
    if (dismissed) {
      setIsDismissed(JSON.parse(dismissed))
    }
    const timer = setTimeout(() => {
      if (!JSON.parse(localStorage.getItem("consultationWidgetDismissed") || "false")) {
        setIsVisible(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)

      if (isDismissed && position > 300 && position > scrollPosition + 100) {
        setIsDismissed(false)
        setIsVisible(true)
        localStorage.setItem("consultationWidgetDismissed", "false")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed, scrollPosition])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    localStorage.setItem("consultationWidgetDismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed right-4 bottom-24 z-40 flex w-64 flex-col rounded-lg border bg-card p-4 shadow-lg transition-opacity duration-500 md:right-8",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2"
        onClick={handleDismiss}
        aria-label="Close consultation widget"
      >
        <XIcon className="h-4 w-4" />
      </Button>
      <div className="mb-3">
        <h3 className="text-base font-semibold">Need assistance?</h3>
        <p className="text-xs text-muted-foreground">Book a free consultation with our experts</p>
      </div>
      <div className="relative h-20 mb-3 rounded-md bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="Team of experts"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <Link href="/schedule" className="w-full">
        <Button size="sm" className="w-full">
          <CalendarIcon className="mr-2 h-3 w-3" />
          Book a Consultation
        </Button>
      </Link>
    </div>
  )
}

